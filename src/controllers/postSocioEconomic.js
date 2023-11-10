const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

// Acessar o models estudante
const SocioEconomic = require("../db/models/socio_economico")(sequelize, DataTypes);

// Função responsável por enviar as informações para o banco de dados
async function sendSocioEconomic(req, res) {
    await SocioEconomic.create(req.body)
        .then(() => {
            return res.json({
                mensagem: "Cadastro sócioeconomico feito com sucesso!",
            });
        })
        .catch((err) => {
            return res.status(400).json({
                erro: err,
            });
        });
}

module.exports = { sendSocioEconomic }