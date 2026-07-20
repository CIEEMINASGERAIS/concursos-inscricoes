const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");
const { handleControllerError } = require("../utils/controllerError");

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

async function verificarEmail(req, res) {
    const termoPesquisa = req.query.termo;

    try {
        const data = await Estudante.findAll({
            attributes: ["email"],
            where: {
                email: {
                    [Op.eq]: `${termoPesquisa}`,
                },
            },
            limit: 1,
        });
        const opcoes = data.map((estudante) => {
            return {
                email: estudante.email,
            };
        });
        res.json(opcoes);
    } catch (error) {
        return handleControllerError(req, res, error, {
            status: 500,
            message: "ERRO_BUSCAR_EMAIL",
            publicMessage: "Erro ao buscar email do estudante.",
            etapa: "BUSCAR_EMAIL",
        });
    }
}


module.exports = { verificarEmail }