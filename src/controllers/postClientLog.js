const { logger } = require("../utils/logger");
const { maskCpf, maskCnpj } = require("../utils/requestContext");

const ALLOWED_LEVELS = new Set(["debug", "info", "warn", "error"]);

const SENSITIVE_KEYS = new Set([
    "senha",
    "password",
    "pass",
    "senha_",
    "password_",
    "token",
    "jwt",
    "authorization",
    "laudo_deficiencia_base64",
    "laudo_deficiencia_nome",
    "laudo_deficiencia_tipo",
    "url_anexo_curriculo",
    "nome_arquivo_curriculo",
    "codigo",
    "dt_expiracao_codigo",
]);

function sanitizeKey(key) {
    const normalized = String(key || "").toLowerCase();

    if (SENSITIVE_KEYS.has(normalized)) {
        return true;
    }

    return /(senha|password|pass|token|jwt|authorization)/i.test(key);
}

function sanitizeValue(key, value) {
    if (value === undefined || value === null) {
        return null;
    }

    if (/cpf/i.test(key)) {
        return maskCpf(value);
    }

    if (/cnpj|empresa/i.test(key)) {
        return maskCnpj(value);
    }

    return value;
}

function sanitizeContext(input) {
    const context = {};
    const seen = new WeakSet();

    function walk(target) {
        if (Array.isArray(target)) {
            return target.map(walk);
        }

        if (target && typeof target === "object") {
            if (seen.has(target)) {
                return "[Circular]";
            }

            seen.add(target);

            const result = {};

            for (const [key, value] of Object.entries(target)) {
                if (sanitizeKey(key)) {
                    continue;
                }

                if (/cpf/i.test(key) || /cnpj/i.test(key) || /empresa/i.test(key)) {
                    const sanitized = sanitizeValue(key, value);

                    if (sanitized !== undefined && sanitized !== null) {
                        result[key] = sanitized;
                    }
                    continue;
                }

                result[key] = walk(value);
            }

            return result;
        }

        return sanitizeValue(null, target);
    }

    if (input && typeof input === "object") {
        Object.assign(context, walk(input));
    }

    return context;
}

function postClientLog(req, res) {
    const body = req.body || {};
    const level = ALLOWED_LEVELS.has(String(body.level || "").toLowerCase())
        ? String(body.level).toLowerCase()
        : "error";

    const message = typeof body.message === "string" && body.message.trim()
        ? body.message.slice(0, 200)
        : "CLIENT_LOG";

    logger.log(level, message, {
        source: "frontend",
        rota: req.headers.referer || req.headers["x-page-url"] || null,
        navegador: req.headers["user-agent"] || null,
        url: body.url || req.headers["x-page-url"] || null,
        contexto: sanitizeContext(body.context || {}),
    });

    return res.status(204).end();
}

module.exports = {
    postClientLog,
};
