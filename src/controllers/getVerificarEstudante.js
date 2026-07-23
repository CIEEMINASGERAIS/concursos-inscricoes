const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");
const { handleControllerError } = require("../utils/controllerError");

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

async function verificarEstudante(req, res) {
    // Aceita tanto ?cpf=XXX quanto ?termo=XXX (legado).
    // Antes lia só req.query.termo, mas o frontend chama com ?cpf=,
    // então retornava sempre [] e o frontend não detectava duplicado.
    const termoPesquisa = (req.query.cpf || req.query.termo || "").toString().trim();

    if (!termoPesquisa) {
        return res.status(400).json({
            erro: "CPF/termo não informado.",
        });
    }

    try {
        const estudante = await Estudante.findOne({
            attributes: ["cpf"],
            where: {
                cpf: termoPesquisa,
            },
        });

        return res.json({
            existe: Boolean(estudante),
            cpf: termoPesquisa,
        });
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