const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
)

sequelize
  .authenticate()
  .then(function () {
    console.log('Conexão com o banco de dados realizada com sucesso!')
  })
  .catch(function (error) {
    console.log('Erro: Conexão com banco de dados não realizada com sucesso!', error)
    throw error
  })

module.exports = sequelize
