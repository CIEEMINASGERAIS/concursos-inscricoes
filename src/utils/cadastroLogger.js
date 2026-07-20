const { buildRequestContext } = require("./requestContext");
const { logger } = require("./logger");

function buildCadastroContext(req, extra = {}) {
    return buildRequestContext(req, extra);
}

function logCadastroStep(req, etapa, extra = {}) {
    logger.info(etapa, buildCadastroContext(req, {
        etapa,
        ...extra,
    }));
}

module.exports = {
    buildCadastroContext,
    logCadastroStep,
};