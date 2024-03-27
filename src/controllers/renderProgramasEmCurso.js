const ejs = require("ejs");

// Rota para renderizar o EJS em HTML
async function renderProgramaCurso(req, res) {
    ejs.renderFile("./src/views/programa-curso.ejs", (err, html) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao renderizar o arquivo EJS.");
        }
        res.send(html);
    });
}

module.exports = { renderProgramaCurso }