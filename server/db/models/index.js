const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

sequelize
  .authenticate()
  .then(function () {
    console.log('Conexão com o banco de dados realizada com sucesso!')
  })
  .catch(function () {
    console.log('Erro: Conexão com banco de dados não realizada com sucesso!')
  })

module.exports = sequelize
