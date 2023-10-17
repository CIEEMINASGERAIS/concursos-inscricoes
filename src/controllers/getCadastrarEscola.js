const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");

const Escola = require("../db/models/escola")(sequelize, DataTypes);

// Rotar para obter dados do banco (GET)
async function cadastrarEscola(req, res) {
    const termoPesquisa = req.query.termo;

    try {
        const data = await Escola.findAll({
            attributes: ["razaosocial", "id"],
            where: {
                razaosocial: {
                    [Op.like]: `%${termoPesquisa}%`,
                },
            },
            limit: 25,
        });
        const opcoes = data.map((escola) => {
            return {
                razaosocial: escola.razaosocial,
                id: escola.id,
            };
        });

        res.json(opcoes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar escola." });
    }
}

module.exports = { cadastrarEscola }