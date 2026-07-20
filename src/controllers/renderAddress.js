const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderAddress(req, res) {
    ejs.renderFile("./src/views/address.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_ADDRESS",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_ADDRESS",
            });
        }
        res.send(html);
    });
}

module.exports = { renderAddress }