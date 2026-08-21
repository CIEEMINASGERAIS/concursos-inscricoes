const crypto = require("crypto");
const { logger } = require("../utils/logger");

/**
 * Cache em memória para detectar reenvios da MESMA requisição de cadastro.
 *
 * Sem isso, quando o frontend aborta (Failed to fetch / signal aborted)
 * e reenvia o POST /cadastrar, o backend processa os dois requests e cria
 * cadastros duplicados (com emails duplicados enviados).
 *
 * Estratégia:
 * - Frontend envia X-Request-ID único por tentativa de cadastro
 * - Backend registra o ID assim que começa o processamento
 * - Se chegar o mesmo ID de novo, responde 200 com o resultado cacheado
 *   (ou 409 se a primeira tentativa falhou)
 * - TTL de 5 minutos para limpeza automática
 */

const cache = new Map();
const TTL_MS = 5 * 60 * 1000;

function gerarChaveIdempotencia(req) {
    const headerId = req.headers["x-request-id"];
    const cpf = req.body && req.body.cpf ? String(req.body.cpf).replace(/\D/g, "") : "";
    // Chave: requestId + cpf. Isso evita que requests DIFERENTES do mesmo
    // CPF (legítimos, dias depois) sejam bloqueados por colisão.
    return `${headerId || ""}|${cpf}`;
}

function limparExpirados() {
    const agora = Date.now();
    for (const [chave, entrada] of cache.entries()) {
        if (agora - entrada.criadoEm > TTL_MS) {
            cache.delete(chave);
        }
    }
}

function idempotencyMiddleware(req, res, next) {
    // A idempotência protege exclusivamente o cadastro. Aplicá-la a
    // outros POSTs faz requisições sem CPF/X-Request-ID compartilharem a
    // mesma chave (por exemplo, todos os envios para /api/logs).
    if (req.method !== "POST" || req.path !== "/cadastrar") {
        return next();
    }

    const chave = gerarChaveIdempotencia(req);
    const existente = cache.get(chave);

    if (existente && Date.now() - existente.criadoEm <= TTL_MS) {
        if (existente.status === "processando") {
            logger.info("CADASTRO_IDEMPOTENCIA_EM_ANDAMENTO", {
                requestId: req.requestId,
                cpf: existente.cpfMascarado,
                chaveIdempotencia: chave.split("|")[0],
            });

            return res.status(409).json({
                erro: "Já existe um cadastro em andamento. Aguarde alguns segundos.",
                idempotente: true,
            });
        }

        if (existente.status === "concluido") {
            logger.info("CADASTRO_IDEMPOTENCIA_REENVIADO", {
                requestId: req.requestId,
                cpf: existente.cpfMascarado,
                cadastroIdOriginal: existente.cadastroId,
                chaveIdempotencia: chave.split("|")[0],
            });

            res.setHeader("x-idempotent-replay", "true");
            return res.status(existente.statusHTTP || 200).json(existente.resposta);
        }
    }

    // Marca como processando ANTES de chamar o controller.
    cache.set(chave, {
        status: "processando",
        criadoEm: Date.now(),
        cpfMascarado: req.body && req.body.cpf ? req.body.cpf : null,
        responseFinalizada: false,
    });

    limparExpirados();

    // Intercepta o res.json pra capturar a resposta final e cachear.
    const originalJson = res.json.bind(res);
    res.json = (corpo) => {
        const entrada = cache.get(chave);
        if (entrada) {
            entrada.status = res.statusCode >= 200 && res.statusCode < 300 ? "concluido" : "concluido";
            entrada.statusHTTP = res.statusCode;
            entrada.resposta = corpo;
            entrada.cadastroId = corpo && corpo.cadastroId ? corpo.cadastroId : null;
        }
        return originalJson(corpo);
    };

    return next();
}

function limparCache() {
    cache.clear();
}

module.exports = {
    idempotencyMiddleware,
    limparCache,
};
