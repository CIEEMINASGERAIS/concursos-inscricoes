const { buildRequestContext } = require("./requestContext");
const { logger } = require("./logger");

function handleControllerError(req, res, error, options = {}) {
    const normalizedError = error instanceof Error ? error : new Error(String(error || "Erro desconhecido"));
    const status = options.status || normalizedError.status || normalizedError.statusCode || 500;
    const publicMessage = options.publicMessage || (status >= 500 ? "Erro interno ao processar a solicitação." : normalizedError.message);
    const context = buildRequestContext(req, {
        etapa: options.etapa,
        statusHTTP: status,
        erro: normalizedError.message,
        stack: normalizedError.stack,
        originalError: normalizedError.cause || normalizedError.originalError || null,
        ...options.context,
    });

    logger.error(options.message || "ERRO_CONTROLLER", context);

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