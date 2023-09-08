// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express')
// Importar a biblioteca para permitir conexão externa
const cors = require('cors')
// Chamar a função express
const app = express()

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json())

// Criar o middleware para receber requisições externas
app.use((req, res, next) => {
  // Qualquer endereço pode fazer requisição
  res.header('Access-Control-Allow-Origin', '*')
  // Tipos de método que a API aceita
  res.header('Access-Control-Allow-Methods', 'POST', 'GET')
  // Permitir o envio de dados para API
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // Executar o cors
  app.use(cors())
  // Quando não houver o erro deve continuar o processamento
  next()
})

// Acessar o models estudantes
const estudantes = require('./db/models/estudantes')

const sequelize = require('./db/models')

const DataTypes = require('sequelize/lib/data-types')
const { Op } = require('sequelize')

const Escola = require('./db/models/escola')(sequelize, DataTypes)

const Curso = require('./db/models/curso')(sequelize, DataTypes)

const Cep = require('./db/models/cep')(sequelize, DataTypes)

// Testar conexão com o banco de dados
// const db = require("./db/models")

// Incluir as CONTROLLERS
// const estudantes = require('./controllers/estudantes')

// Rotar para obter dados do banco (GET)
app.get('/cadastrarEscola', async (req, res) => {
  const termoPesquisa = req.query.termo

  try {
    const data = await Escola.findAll({
      attributes: ['razaosocial', 'id'],
      where: {
        razaosocial: {
          [Op.like]: `%${termoPesquisa}%`
        }
      },
      limit: 10
    })
    const opcoes = data.map(escola => {
      return {
        razaosocial: escola.razaosocial,
        id: escola.id
      }
    })

    res.json(opcoes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar escola.' })
  }
})

// Rotar para obter dados do banco (GET)
app.get('/cadastrarCurso', async (req, res) => {
  const termoPesquisa = req.query.termo

  try {
    const data = await Curso.findAll({
      attributes: ['descricao', 'idescola', 'idcurso'],
      where: {
        idescola: {
          [Op.eq]: `${termoPesquisa}`
        }
      },
      limit: 100
    })
    const opcoes = data.map(curso => {
      return {
        descricao: curso.descricao,
        idescola: curso.idescola,
        idcurso: curso.idcurso
      }
    })

    res.json(opcoes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar curso.' })
  }
})

app.get('/cadastrarEndereco', async (req, res) => {
  const termoPesquisa = req.query.termo

  try {
    const data = await Cep.findAll({
      attributes: ['cep', 'logradouro', 'bairro', 'cidade', 'uf', 'regiao'],
      where: {
        cep: {
          [Op.eq]: `${termoPesquisa}`
        }
      }
    })
    const opcoes = data.map(endereco => {
      return {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        uf: endereco.uf,
        regiao: endereco.regiao
      }
    })

    res.json(opcoes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar cep.' })
  }
})

app.post('/cadastrar', async (req, res) => {
  await estudantes
    .create(req.body)
    .then(() => {
      return res.json({
        // erro: false,
        mensagem: 'Usuário cadastrado com sucesso!'
      })
    })
    .catch(err => {
      return res.status(400).json({
        erro: err,        
      })
    })
})

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080: http://localhost:8080')
})
