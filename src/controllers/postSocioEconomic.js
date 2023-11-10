// const sequelize = require("../db/models");

// const DataTypes = require("sequelize/lib/data-types");

// // Acessar o models estudante
// const SocioEconomico = require("../db/models/socio_economico")(sequelize, DataTypes);

// const Estudante = require('../db/models/estudante')(sequelize, DataTypes)

// SocioEconomico.belongsTo(Estudante)

// // Função responsável por enviar as informações para o banco de dados
// async function sendSocioEconomic(req, res) {
//     await SocioEconomico.create(req.body)
//         .then(() => {
//             return res.json({
//                 mensagem: "Cadastro sócioeconomico feito com sucesso!",
//             });
//         })
//         .catch((err) => {
//             return res.status(400).json({
//                 erro: `Erro ao cadastrar informações: ${err.message}`
//             });
//         });
// }

// module.exports = { sendSocioEconomic }