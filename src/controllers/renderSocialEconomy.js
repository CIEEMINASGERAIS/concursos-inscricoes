const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderSocioEconomic(req, res) {
    ejs.renderFile("./src/views/socio-economic.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_SOCIOECONOMICO",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_SOCIOECONOMICO",
            });
        }
        res.send(html);
    });
}

module.exports = { renderSocioEconomic }