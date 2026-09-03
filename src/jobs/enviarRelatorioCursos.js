/**
 * Envia o relatório de cadastros por curso para a lista de destinatários
 * do concurso TJMMG (mesmos BCCs usados em `emailASerEnviadoComum`).
 *
 * Mantém o padrão visual dos outros e-mails do projeto:
 *   - Logo CIEEMG embarcada via `cid:logociee` (attachment).
 *   - Container centralizado, max-width, fontes inline.
 *   - Footer institucional.
 *
 * O HTML é gerado em template string — mesmo estilo do resto do
 * projeto, sem dependência de template engine.
 */

const nodemailer = require("nodemailer");
const { logger } = require("../utils/logger");
const { montarRelatorioCursos } = require("./montarRelatorioCursos");

require("dotenv").config();

// Reusa o mesmo transporter do projeto. Em testes podemos sobrescrever
// via parâmetro (ver abaixo).
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "validacao.cadastro@cieeminas.com.br",
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        // Mesma decisão do transporter existente — não falhar em
        // certs intermediários fora da cadeia padrão.
        rejectUnauthorized: false,
    },
});

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}


function renderTabela(linhas, total) {
    const dataHoje = new Date().toLocaleDateString("pt-BR");

    const linhasHtml =
        linhas.length === 0
            ? `
            <tr>
                <td colspan="3" style="padding: 0.75rem; border: 1px solid rgb(216,216,216); color: rgb(110,110,110); text-align: center; font-style: italic;">
                    Nenhum cadastro encontrado no período.
                </td>
            </tr>
        `
            : linhas
                .map(
                    (r, i) => `
            <tr>
                <td style="padding: 0.5rem 0.75rem; border: 1px solid rgb(216,216,216); color: black; text-align: center; width: 3rem;">
                    ${i + 1}
                </td>
                <td style="padding: 0.5rem 0.75rem; border: 1px solid rgb(216,216,216); color: black;">
                    ${escapeHtml(r.curso)}
                </td>
                <td style="padding: 0.5rem 0.75rem; border: 1px solid rgb(216,216,216); color: black; text-align: right; width: 6rem;">
                    ${r.quantidade}
                </td>
            </tr>
        `
                )
                .join("");

    return `
        <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; margin: 0.5rem 0 1rem 0;">
            <thead>
                <tr style="background-color: rgb(240,240,240);">
                    <th style="padding: 0.6rem 0.75rem; border: 1px solid rgb(200,200,200); color: black; text-align: center; width: 3rem;">
                        #
                    </th>
                    <th style="padding: 0.6rem 0.75rem; border: 1px solid rgb(200,200,200); color: black; text-align: left;">
                        Curso
                    </th>
                    <th style="padding: 0.6rem 0.75rem; border: 1px solid rgb(200,200,200); color: black; text-align: right; width: 6rem;">
                        Qtd.
                    </th>
                </tr>
            </thead>
            <tbody>
                ${linhasHtml}
                <tr style="background-color: rgb(245,245,245); font-weight: bold;">
                    <td colspan="2" style="padding: 0.6rem 0.75rem; border: 1px solid rgb(200,200,200); color: black; text-align: right;">
                        Total de cadastros
                    </td>
                    <td style="padding: 0.6rem 0.75rem; border: 1px solid rgb(200,200,200); color: black; text-align: right;">
                        ${total}
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function renderHtmlCompleto({ linhas, total }) {
    const tabela = renderTabela(linhas, total);
    const dataHoje = new Date().toLocaleDateString("pt-BR");

    return `
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div style="border: 1px solid rgb(190,190,190);
            padding: 1rem;
            max-width: 40rem;
            margin: 0rem auto;
            background-color: white;
            margin-bottom: 3rem;
            font-family: Arial, sans-serif;
            color: black;">
            <img alt="Logo do CIEEMG" style="height: 3rem;" src="cid:logociee" />
            <div style="height: 1px;
                background-color: rgb(216,216,216);
                margin: 1rem 0rem 1rem 0rem;"></div>

            <p style="color: black; margin: 0.5rem 0;">
                <strong>CIEE/MG &ndash; Relatório de Cadastros Realizados para o Concurso TJMMG &ndash; Data: ${escapeHtml(dataHoje)}</strong>
            </p>

            <p style="color: black; margin: 0.5rem 0;">
                Período de Inscrições: das 8h do dia 02/09/2026 até as 23h59 do dia 21/09/2026 (horário de Brasília).
            </p>

            <p style="color: black;">
                Segue abaixo a quantidade de estudantes cadastrados por curso, ordenada da maior para a menor ocorrência:
            </p>

            ${tabela}

            <p style="color: black;">
                <strong>Atenção:</strong> E-mail enviado semanalmente sempre as Quartas-Feiras às 09 horas.
            </p>

            <p style="color: black;">Atenciosamente,</p>

            <p style="color: black;"><strong>CIEE/MG - Concursos</strong><br>
                Telefone/WhatsApp: (31) 3429-8100 &ndash; Opção 6<br>
                E-mail: concursotjmmg@cieemg.org.br<br>
                <a href="http://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a><br>
                <strong>Horário de funcionamento:</strong> 08:30 até 17:30 de segunda a sexta-feira
            </p>

            <div style="height: 1px;
                background-color: rgb(216,216,216);
                margin: 1rem 0rem 0.5rem 0rem;"></div>
            <p style="font-size: 0.7em;
                font-weight: 800;
                text-align: center;
                margin: 0.5rem;
                color: black;">CIEEMG - Centro de Integração Empresa Escola de Minas Gerais</p>
        </div>
    </body>
</html>
    `;
}

function renderTextoPlano({ linhas, total }) {
    const header =
        "CIEE/MG - Relatório de Cadastros Realizados para o Concurso TJMMG\n" +
        `Data: ${new Date().toLocaleDateString("pt-BR")}\n` +
        "Período de Inscrições: das 8h do dia 02/09/2026 até as 23h59 do dia 21/09/2026 (horário de Brasília).\n\n";

    const corpo =
        linhas.length === 0
            ? "  (nenhum cadastro encontrado no período)"
            : linhas
                  .map((r, i) => `${String(i + 1).padStart(3, " ")}. ${r.curso} — ${r.quantidade}`)
                  .join("\n");

    return (
        header +
        corpo +
        `\n\nTotal de cadastros: ${total}\n\n` +
        "CIEE/MG - Concursos\n" +
        "Telefone/WhatsApp: (31) 3429-8100 - Opção 6\n" +
        "E-mail: concursotjmmg@cieemg.org.br\n" +
        "www.cieemg.org.br\n"
    );
}

function lerEnvEmails(nomeVariavel, { obrigatorio = false } = {}) {
    const raw = process.env[nomeVariavel];
    if (raw == null || raw === "") {
        if (obrigatorio) {
            throw new Error(
                `[enviarRelatorioCursos] Env obrigatória faltando: ${nomeVariavel}. ` +
                `Defina no .env (ex: ${nomeVariavel}=email1@x.com,email2@y.com).`
            );
        }
        return [];
    }
    return raw
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);
}

function normalizarDestinatarios(valor) {
    if (valor == null) return [];
    if (Array.isArray(valor)) {
        return valor
            .flatMap(v => (typeof v === "string" ? v.split(",") : []))
            .map(s => s.trim())
            .filter(Boolean);
    }
    if (typeof valor === "string") {
        return valor
            .split(",")
            .map(s => s.trim())
            .filter(Boolean);
    }
    return [];
}

async function enviarRelatorioCursos(opts = {}) {
    const inicio = Date.now();
    const to = normalizarDestinatarios(opts.to || lerEnvEmails("RELATORIO_SEMANAL_TO", { obrigatorio: true }));
    const bcc = normalizarDestinatarios(opts.bcc ?? lerEnvEmails("RELATORIO_SEMANAL_BCC"));
    const tx = opts.transporter || transporter;
    const context = opts.context || {};

    const relatorio = await montarRelatorioCursos();
    const { linhas, total } = relatorio;

    if (linhas.length === 0) {
        // Tabela vazia: ainda envia o e-mail para o destinatário ter
        // visibilidade de que o job rodou e ver o template/layout
        // final. Renderiza "(nenhum cadastro encontrado no período)".
        logger.info("RELATORIO_CURSOS_VAZIO_ENVIA_TEMPLATE", {
            ...context,
            duracao_ms: Date.now() - inicio,
        });
    }

    const html = renderHtmlCompleto({ linhas, total });
    const text = renderTextoPlano({ linhas, total });
    const dataHoje = new Date().toLocaleDateString("pt-BR");

    const info = await tx.sendMail({
        from: "validacao.cadastro@cieeminas.com.br",
        to: to.join(", "),
        ...(bcc.length > 0 ? { bcc } : {}),
        subject: `CIEE/MG - Relatório de Cadastros Realizados para o Concurso TJMMG - ${dataHoje}`,
        html,
        text,
        attachments: [
            {
                filename: "CIEE-2023-atualizado.png",
                path: "public/assets/images/CIEE-2023-atualizado.png",
                cid: "logociee",
            },
        ],
    });

    logger.info("RELATORIO_CURSOS_ENVIADO", {
        ...context,
        messageId: info.messageId,
        linhas: linhas.length,
        total,
        destinatarios_to: to,
        destinatarios_bcc: bcc,
        duracao_ms: Date.now() - inicio,
    });

    return {
        messageId: info.messageId,
        linhas: linhas.length,
        total,
    };
}

module.exports = { enviarRelatorioCursos, montarRelatorioCursos };