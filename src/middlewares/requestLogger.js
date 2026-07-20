const { getRequestId, buildRequestContext } = require("../utils/requestContext");
const { logger } = require("../utils/logger");

function shouldSkipRequestLogging(req) {
    const route = String(req.originalUrl || req.url || "");

    return route === "/favicon.ico" || /\.(css|js|map|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot)$/i.test(route);
}

function requestLogger(req, res, next) {
    const requestId = getRequestId(req);
    const startedAt = Date.now();
    const context = buildRequestContext(req, {
        requestId,
    });

    req.requestId = requestId;
    res.setHeader("x-request-id", requestId);

    if (!shouldSkipRequestLogging(req)) {
        logger.info("REQUEST_START", context);

        let requestEnded = false;

        res.once("finish", () => {
            requestEnded = true;
            logger.info("REQUEST_END", {
                ...context,
                statusHTTP: res.statusCode,
                tempoMs: Date.now() - startedAt,
            });
        });

        res.once("close", () => {
            if (!requestEnded) {
                logger.warn("REQUEST_ABORTED", {
                    ...context,
                    statusHTTP: res.statusCode || 499,
                    tempoMs: Date.now() - startedAt,
                });
            }
        });
    }

    return next();
}

module.exports = requestLogger;