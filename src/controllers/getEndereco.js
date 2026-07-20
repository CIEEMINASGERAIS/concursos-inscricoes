const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const { Op } = require("sequelize");
const { handleControllerError } = require("../utils/controllerError");

const Cep = require("../db/models/cep")(sequelize, DataTypes);

async function getCadastrarEndereco(req, res) {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Cep.findAll({
      attributes: ["cep", "logradouro", "bairro", "cidade", "uf", "regiao"],
      where: {
        cep: {
          [Op.eq]: `${termoPesquisa}`,
        },
      },
    });
    const opcoes = data.map((endereco) => {
      return {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        uf: endereco.uf,
        regiao: endereco.regiao,
      };
    });
    res.json(opcoes);
  } catch (error) {
    return handleControllerError(req, res, error, {
      status: 500,
      message: "ERRO_BUSCAR_CEP",
      publicMessage: "Erro ao buscar cep.",
      etapa: "BUSCAR_CEP",
    });
  }
}

module.exports = { getCadastrarEndereco }

