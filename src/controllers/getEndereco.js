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
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar cep." });
  }
}

module.exports = { getCadastrarEndereco }

