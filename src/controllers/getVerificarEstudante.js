const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");
const { handleControllerError } = require("../utils/controllerError");

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
        return handleControllerError(req, res, error, {
            status: 500,
            message: "ERRO_BUSCAR_CPF",
            publicMessage: "Erro ao buscar cpf do estudante.",
            etapa: "BUSCAR_CPF",
        });
    }
}

module.exports = { verificarEstudante }