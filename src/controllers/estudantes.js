// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express')
// Chamar a função express
const router = express.Router()
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('./../db/models')

const Escola = require('./../db/models/escola.js')
const sequelize = require('./../db/models')
const { Sequelize } = require('sequelize')

// Criar a rota cadastrar
router.post('/cadastrar', async (req, res) => {
  // Receber os dados enviados no corpo da requisição
  let data = req.body
  console.log(data)

  // Salvar no banco de dados
  await db.estudantes
    .create(data)
    .then(dadosUsuario => {
      // Pausar o processamento e retornar os dados em formato de objeto
      return res.json({
        error: false,
        mensagem: 'Usuário cadastrado com sucesso!',
        data: dadosUsuario
      })
    })
    .catch(() => {
      // Pausar o processamento e retornar a mensagem de erro
      return res.json({
        error: true,
        mensagem: 'Erro: usuário não cadastrado com sucesso!'
      })
    })
})

// Rotar para obter dados do banco (GET)
router.get('/cadastrar', async (req, res) => {
  try {
    const data = await escola.findAll()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar escola.' })
  }
})

escola(sequelize, Sequelize.DataTypes)
  .sync()
  .then(() => {
    console.log('Tabela sincronizada com sucesso!')
  })
  .catch(error => {
    console.error('Erro ao sincronizar tabela escola:', error)
  })

module.exports = router
