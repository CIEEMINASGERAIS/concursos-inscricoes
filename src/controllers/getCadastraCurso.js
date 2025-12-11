const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");

const Curso = require("../db/models/curso")(sequelize, DataTypes);

async function index(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            errors: ['Faltando o ID'],
        })
    }

    try {
        const data = await Curso.findAll({
            attributes: ["descricao", "idescola", "idcurso", "duracao"],
            where: {
                idescola: id
            },            
        });
        const opcoes = data.map((curso) => {
            return {
                descricao: curso.descricao,
                idescola: curso.idescola,
                idcurso: curso.idcurso,
                duracao: curso.duracao
            };
        });
        res.json(opcoes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar curso." });
    }
}

module.exports = { index }