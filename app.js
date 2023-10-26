// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Importar a biblioteca para permitir conexão externa
const cors = require("cors");

// Chamar a função express
const app = express();

const ejs = require("ejs");

const path = require("path");

const sequelize = require("./src/db/models");

const DataTypes = require("sequelize/lib/data-types");

// Acessar o models estudante
const Estudante = require("./src/db/models/estudante")(sequelize, DataTypes);

// Acessar os controllers
const getEndereco = require('./src/controllers/getEndereco')

const getEmail = require('./src/controllers/getEmail')

const getCadastraCurso = require('./src/controllers/getCadastraCurso')

const getVerificarEstudante = require('./src/controllers/getVerificarEstudante')

const getCadastrarEscola = require('./src/controllers/getCadastrarEscola')

// Acessar os renders das páginas
const index = require('./src/controllers/renderIndex')

const termsConditions = require('./src/controllers/renderTermsConditions')

const dataBasic = require('./src/controllers/renderDataBasic')

const address = require('./src/controllers/renderAddress')

const enviandoEmail = require('./src/controllers/enviarEmail')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public", "assets")));

app.set("views", path.resolve(__dirname, "src", "views"));
// Configurar o EJS como a engine de visualização
app.set("view engine", "ejs");

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Criar o middleware para receber requisições externas
app.use((req, res, next) => {
  // Qualquer endereço pode fazer requisição
  res.header("Access-Control-Allow-Origin", "*");
  // Tipos de método que a API aceita
  res.header("Access-Control-Allow-Methods", "POST", "GET", "OPTIONS");
  // Permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Executar o cors
  app.use(cors());
  // Quando não houver o erro deve continuar o processamento
  next();
});

// Rota para renderizar o EJS em HTML
app.get("/schoolData", (req, res) => {
  ejs.renderFile("./src/views/schoolData.ejs", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao renderizar o arquivo EJS.");
    }
    res.send(html);
  });
});

// Rota para buscar escolas
app.get("/cadastrarEscola", getCadastrarEscola.cadastrarEscola)

// Rota para verificar cpf do estudante
app.get("/verificarEstudante", getVerificarEstudante.verificarEstudante)

// Rota para validar email
app.get("/verificarEmail", getEmail.verificarEmail);

// Rota para cadastrar endereco
app.get("/cadastrarEndereco", getEndereco.getCadastrarEndereco);

// Rota para cadastrar curso
app.get("/cadastrarCurso", getCadastraCurso.cadastrarCurso)

// Função responsável por renderizar a primeira página
app.get("/", index.renderIndex)

// Função responsável por renderizar a segunda página
app.get("/terms-and-conditions", termsConditions.renderTermsConditions)

// Função responsável por renderizar a terceira página
app.get("/formDataBasic", dataBasic.renderDataBasic)

// Função responsável por renderizar a quarta página
app.get("/address", address.renderAddress)

// Função responsável por enviar as informações para o banco de dados
app.post("/cadastrar", async (req, res) => {
  await Estudante.create(req.body)
    .then(() => {
      // enviandoEmail.emailASerEnviado(req.body.email, req.body.nome, req.body.senha).catch(console.error)
      return res.json({
        mensagem: "Usuário cadastrado com sucesso!",
      });

    })
    .catch((err) => {
      return res.status(400).json({
        erro: err,
      });
    });
});

// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, "0.0.0.0", () => {
  console.log(
    "Servidor iniciado na porta 8080: https://localhost:8080"
  );
});
