const crypto = require("crypto");

function generateRequestId() {
    if (typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }

    return crypto.randomBytes(16).toString("hex");
}

function getRequestId(req) {
    return req.requestId || req.headers["x-request-id"] || generateRequestId();
}

function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
}

function maskCpf(value) {
    const digits = onlyDigits(value);

    if (digits.length !== 11) {
        return value ?? null;
    }

    return `***.***.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function maskCnpj(value) {
    const digits = onlyDigits(value);

    if (digits.length !== 14) {
        return value ?? null;
    }

    return `**.***.***/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

function sanitizeRoute(url) {
    return String(url || "").split("?")[0] || "/";
}

function firstDefined(req, keys) {
    const sources = [req.body || {}, req.params || {}, req.query || {}, req.headers || {}];

    for (const key of keys) {
        for (const source of sources) {
            const value = source[key];

            if (value !== undefined && value !== null && value !== "") {
                return value;
            }
        }
    }

    return null;
}

function buildRequestContext(req, extra = {}) {
    const cpf = firstDefined(req, ["cpf", "cpf_estudante", "cpfEstudante"]);
    const cnpj = firstDefined(req, ["cnpj", "cnpj_empresa", "empresa_cnpj", "empresa"]);
    const usuario = firstDefined(req, ["usuario_id", "usuarioId", "id_usuario", "userId"]);
    const cadastroId = firstDefined(req, ["cadastro_id", "cadastroId", "id", "estudante_id", "estudanteId"]);

    return {
        requestId: req.requestId || null,
        rota: sanitizeRoute(req.originalUrl || req.url),
        metodo: req.method || null,
        ip: req.ip || req.socket?.remoteAddress || null,
        usuario,
        cpf: maskCpf(cpf),
        cnpj: maskCnpj(cnpj),
        empresa: maskCnpj(cnpj),
        cadastroId,
        ...extra,
    };
}

module.exports = {
    buildRequestContext,
    generateRequestId,
    getRequestId,
    maskCpf,
    maskCnpj,
    sanitizeRoute,
};