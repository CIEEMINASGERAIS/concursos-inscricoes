// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express')

// Chamar a função express
const router = express.Router()

// Incluir o arquivo que possui a conexão com banco de dados
const db = require('../db/models/index')

// Criar a rota cadastrar
// router.post('/cadadstrar', async(req, res) => {
router.post('/cadastrar', async (req, res) => {
  // Receber os dados enviados no corpo da requisição
  let data = req.body
  console.log(data)

  // Salvar no banco de dados
  await db.Cadastrar.create(data)
    .then(dadosUsuario => {
      // Pausar o processamento e retornar os dados em formato de objeto
      return res.json({
        mensagem: 'Usuário cadastrado com sucesso!',
        dadosUsuario
      })
    })
    .catch(() => {
      // Pausar o processamento e retornar a mensagem de erro
      return res.json({
        mensagem: 'Erro: Usuário não cadastrado com sucesso!'
      })
    })
})

// module.exports = router
