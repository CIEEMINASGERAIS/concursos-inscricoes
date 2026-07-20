const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderSchoolData(req, res) {
    ejs.renderFile("./src/views/schoolData.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_SCHOOL",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_SCHOOL",
            });
        }
        res.send(html);
    });
}

module.exports = { renderSchoolData }