const ejs = require("ejs");
const { handleControllerError } = require("../utils/controllerError");

// Rota para renderizar o EJS em HTML
async function renderProgramaCurso(req, res) {
    ejs.renderFile("./src/views/programa-curso.ejs", (err, html) => {
        if (err) {
            return handleControllerError(req, res, err, {
                status: 500,
                message: "ERRO_RENDER_PROGRAMA_CURSO",
                publicMessage: "Erro ao renderizar o arquivo EJS.",
                etapa: "RENDER_PROGRAMA_CURSO",
            });
        }
        res.send(html);
    });
}

// module.exports = { renderProgramaCurso }