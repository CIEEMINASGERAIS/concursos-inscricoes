const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const enviandoEmail = require('./enviarEmail')

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

// Função responsável por enviar as informações para o banco de dados
async function postRegister(req, res) {
    await Estudante.create(req.body)
        .then(() => {
            // enviandoEmail.emailASerEnviado(req.body.email, req.body.nome, req.body.senha).catch(console.error)
            return res.json({
                mensagem: "Usuário cadastrado com sucesso!",
            });

        })
        .catch((err) => {
            return res.status(400).json({
                erro: err,
            });
        });
}

module.exports = { postRegister }