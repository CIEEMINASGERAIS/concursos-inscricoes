const ejs = require("ejs");

// Rota para renderizar o EJS em HTML
async function renderSocioEconomic(req, res) {
    ejs.renderFile("./src/views/socio-economic.ejs", (err, html) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao renderizar o arquivo EJS.");
        }
        res.send(html);
    });
}

module.exports = { renderSocioEconomic }