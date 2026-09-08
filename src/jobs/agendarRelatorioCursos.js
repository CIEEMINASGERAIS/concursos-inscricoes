/**
 * Job: agendamento do envio do relatório de cursos por e-mail.
 *
 * Roda dentro do mesmo processo do Express (PM2, instância única).
 * - `node-cron` cuida de acordar só na janela certa (zero CPU no resto do tempo).
 * - `timezone: "America/Sao_Paulo"` garante o disparo no fuso do CIEE MG,
 *   independentemente do clock do servidor.
 * - O `try/catch` fica DENTRO do callback para que uma falha do SMTP não
 *   mate a recorrência até o próximo `pm2 restart`.
 *
 * Para acionar manualmente (testes): basta importar e chamar
 * `executarRelatorioCursos()` em um controller ou rota admin.
 */

const cron = require("node-cron");
const { logger } = require("../utils/logger");
const { enviarRelatorioCursos } = require("./enviarRelatorioCursos");

// ⏰ Cron: "minuto hora * * dia-da-semana"
//
// Configuração ATIVA (teste): todo dia às 12:22.
//   22 = minuto 22
//   12 = 12h
//   * * = qualquer mês, qualquer dia do mês
//   *   = qualquer dia da semana
// const CRON_EXPR = "22 12 * * *";

// Configuração ORIGINAL (referência — restaurar descomentando):
//   0  = minuto zero (em ponto)
//   9  = 9h
//   * * = qualquer mês, qualquer dia do mês
//   3  = quarta-feira (0=domingo … 3=quarta … 6=sábado)
const CRON_EXPR = "0 9 * * 3";
const TIMEZONE = "America/Sao_Paulo";

async function executarRelatorioCursos() {
    const inicio = Date.now();
    const tsIso = new Date().toISOString();

    logger.info("JOB_RELATORIO_INICIO", { ts: tsIso });

    try {
        // to / bcc são resolvidos do .env (RELATORIO_SEMANAL_TO /
        // RELATORIO_SEMANAL_BCC). Ver `enviarRelatorioCursos.js`.
        const resultado = await enviarRelatorioCursos({
            context: { origem: "JOB_RELATORIO" },
        });

        logger.info("JOB_RELATORIO_OK", {
            ...resultado,
            duracao_ms: Date.now() - inicio,
        });
    } catch (err) {
        logger.error("JOB_RELATORIO_FALHA", {
            erro: err.message,
            stack: err.stack,
            duracao_ms: Date.now() - inicio,
        });
        // Importante: NÃO re-throw — uma exceção não tratada faria o
        // node-cron marcar a task como "broken" em algumas versões e
        // parar de disparar nas próximas execuções.
    }
}

let taskInstance = null;

function iniciar() {
    if (taskInstance) {
        // Idempotente: PM2 reload chama require() de novo, e este
        // arquivo é reavaliado, mas o módulo já fica em cache depois
        // da primeira execução. Esta guarda cobre o caso de hot-reload
        // de desenvolvimento (nodemon) ou require repetido por bug.
        return taskInstance;
    }

    taskInstance = cron.schedule(
        CRON_EXPR,
        executarRelatorioCursos,
        { timezone: TIMEZONE, scheduled: true }
    );

    // `node-cron` expõe `getNextRun()` (versões recentes). Algumas
    // versões mais antigas usavam `nextDate()`. Cobrimos ambos.
    let next = null;
    if (typeof taskInstance.getNextRun === "function") {
        next = taskInstance.getNextRun();
    } else if (typeof taskInstance.nextDate === "function") {
        next = taskInstance.nextDate();
    } else if (taskInstance instanceof Date) {
        next = taskInstance;
    }

    logger.info("JOB_RELATORIO_AGENDADO", {
        cron: CRON_EXPR,
        tz: TIMEZONE,
        next: next ? next.toISOString() : null,
    });

    return taskInstance;
}

module.exports = {
    iniciar,
    executarRelatorioCursos,
    CRON_EXPR,
    TIMEZONE,
};