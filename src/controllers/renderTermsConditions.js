const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderTermsConditions(req, res) {
    ejs.renderFile("./src/views/terms-and-conditions.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_TERMOS",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_TERMOS",
            });
        }
        res.send(html);
    });
}

module.exports = { renderTermsConditions }