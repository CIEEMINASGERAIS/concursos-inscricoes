const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");

const enviandoEmail = require('./enviarEmail')

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

const SocioEconomico = require("../db/models/socio_economico")(sequelize, DataTypes);

Estudante.hasOne(SocioEconomico)
SocioEconomico.belongsTo(Estudante)

// Função responsável por enviar as informações para o banco de dados
async function postRegister(req, res) {

    try {

        const novoEstudante = await Estudante.create(req.body)

        // await enviandoEmail.emailASerEnviado(req.body.email, req.body.nome, req.body.senha).catch(console.error)

        console.log(req.body)

        await SocioEconomico.create({
            estudante_id: novoEstudante.id,
            aprendiz: req.body.aprendiz,
            responsavel: req.body.responsavel,
            imovel: req.body.imovel,
            pessoas_por_residencia: req.body.pessoas_por_residencia,
            tem_filhos: req.body.tem_filhos,
            escola_estudou: req.body.escola_estudou,
            renda: req.body.renda,
            genero: req.body.genero,
            etnia: req.body.etnia,
            situacao_judicial: req.body.situacao_judicial
        });



        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
        });
    } catch (err) {
        return res.status(400).json({
            erro: `Erro ao cadastrar usuário: ${err.message}`
        });
    }
}

module.exports = { postRegister }