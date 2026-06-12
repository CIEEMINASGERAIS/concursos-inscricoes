const fs = require("fs");
const path = require("path");

async function renderIndex(req, res) {
    const bundlePath = path.resolve(__dirname, "..", "..", "public", "assets", "js", "bundle.js");
    let bundleVersion = Date.now();

    try {
        bundleVersion = fs.statSync(bundlePath).mtimeMs;
    } catch (error) {
        console.warn("Não foi possível ler a data do bundle:", error.message);
    }

    res.render("index", { bundleVersion });
}

module.exports = { renderIndex }