const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");
const { logger } = require("../utils/logger");
const { handleControllerError } = require("../utils/controllerError");

const Curso = require("../db/models/curso")(sequelize, DataTypes);

async function index(req, res) {
    const { id } = req.params;

    if (!id) {
        logger.warn("VALIDACAO_FALHOU", {
            etapa: "BUSCAR_CURSO",
            erro: "Faltando o ID",
        });

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
        return handleControllerError(req, res, error, {
            status: 500,
            message: "ERRO_BUSCAR_CURSO",
            publicMessage: "Erro ao buscar curso.",
            etapa: "BUSCAR_CURSO",
        });
    }
}

module.exports = { index }