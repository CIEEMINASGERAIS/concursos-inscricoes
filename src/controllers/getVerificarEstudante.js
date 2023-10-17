const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

async function verificarEstudante(req, res) {
    const termoPesquisa = req.query.termo;

    try {
        const data = await Estudante.findAll({
            attributes: ["cpf"],
            where: {
                cpf: {
                    [Op.eq]: `${termoPesquisa}`,
                },
            },
            limit: 1,
        });
        const opcoes = data.map((estudante) => {
            return {
                cpf: estudante.cpf,
            };
        });
        res.json(opcoes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar cpf do estudante." });
    }
}

module.exports = { verificarEstudante }