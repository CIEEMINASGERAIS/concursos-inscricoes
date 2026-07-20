const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderDataBasic(req, res) {
    ejs.renderFile("./src/views/formDataBasic.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_DATA_BASIC",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_DATA_BASIC",
            });
        }
        res.send(html);
    });
}

module.exports = { renderDataBasic }