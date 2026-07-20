const { buildRequestContext } = require("../utils/requestContext");
const { logger } = require("../utils/logger");

function errorHandler(err, req, res, next) {
    const normalizedError = err instanceof Error ? err : new Error(String(err || "Erro desconhecido"));
    const status = normalizedError.status || normalizedError.statusCode || 500;
    const context = buildRequestContext(req, {
        statusHTTP: status,
        erro: normalizedError.message,
        stack: normalizedError.stack,
        originalError: normalizedError.cause || normalizedError.originalError || null,
    });

    logger.error("UNHANDLED_ERROR", context);

    if (res.headersSent) {
        return next(normalizedError);
    }

    return res.status(status).json({
        erro: status >= 500 ? "Erro interno ao processar a solicitação." : normalizedError.message,
    });
}

module.exports = errorHandler;