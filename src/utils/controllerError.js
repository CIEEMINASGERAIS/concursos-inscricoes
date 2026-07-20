const { buildRequestContext } = require("./requestContext");
const { logger } = require("./logger");

function sanitizeStack(stack) {
    if (!stack || typeof stack !== "string") return null;
    return stack
        .split("\n")
        .map((line) =>
            line.replace(/\s+at\s+.*?\/node_modules\//g, "    at node_modules/"),
        )
        .slice(0, 10)
        .join("\n");
}

function handleControllerError(req, res, error, options = {}) {
    const normalizedError = error instanceof Error ? error : new Error(String(error || "Erro desconhecido"));
    const status = options.status || normalizedError.status || normalizedError.statusCode || 500;
    const isClientError = status >= 400 && status < 500;
    const publicMessage = options.publicMessage || (status >= 500 ? "Erro interno ao processar a solicitação." : normalizedError.message);

    const baseContext = {
        etapa: options.etapa,
        statusHTTP: status,
        erro: normalizedError.message,
        ...options.context,
    };

    if (isClientError) {
        baseContext.erroCliente = true;
    } else {
        baseContext.stack = sanitizeStack(normalizedError.stack);
        baseContext.originalError = normalizedError.cause || normalizedError.originalError || null;
    }

    const context = buildRequestContext(req, baseContext);

    if (isClientError) {
        logger.warn(options.message || "ERRO_CLIENTE", context);
    } else {
        logger.error(options.message || "ERRO_CONTROLLER", context);
    }

    if (res.headersSent) {
        return null;
    }

    return res.status(status).json({
        erro: publicMessage,
    });
}

module.exports = {
    handleControllerError,
};