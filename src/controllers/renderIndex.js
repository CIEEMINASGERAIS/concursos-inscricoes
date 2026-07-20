const fs = require("fs");
const path = require("path");
const { logger } = require("../utils/logger");

async function renderIndex(req, res) {
    const bundlePath = path.resolve(__dirname, "..", "..", "public", "assets", "js", "bundle.js");
    let bundleVersion = Date.now();

    try {
        bundleVersion = fs.statSync(bundlePath).mtimeMs;
    } catch (error) {
        logger.warn("BUNDLE_VERSION_INDISPONIVEL", {
            erro: error.message,
            stack: error.stack,
        });
    }

    res.render("index", { bundleVersion });
}

module.exports = { renderIndex }