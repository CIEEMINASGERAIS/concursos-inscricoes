// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Importar a biblioteca para permitir conexão externa
const cors = require("cors");

// Chamar a função express
const app = express();

const helmet = require('helmet')

// const ejs = require("ejs");

const path = require("path");

// Responsável por pegar dados do .env
require("dotenv").config();

// Acessar os controllers
const getEndereco = require("./src/controllers/getEndereco");

const getEmail = require("./src/controllers/getEmail");

const getCadastraCurso = require("./src/controllers/getCadastraCurso");

const getVerificarEstudante = require("./src/controllers/getVerificarEstudante");

const getCadastrarEscola = require("./src/controllers/getCadastrarEscola");

const getEscola = require("./src/controllers/renderSchool");

const postCadastro = require("./src/controllers/postCadastrar");

// Acessar os renders das páginas
const index = require("./src/controllers/renderIndex");

const termsConditions = require("./src/controllers/renderTermsConditions");

const dataBasic = require("./src/controllers/renderDataBasic");

const address = require("./src/controllers/renderAddress");

const socialEconomic = require("./src/controllers/renderSocialEconomy");

// const programaEmCurso = require("./src/controllers/renderProgramasEmCurso");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public", "assets")));

app.set("views", path.resolve(__dirname, "src", "views"));
// Configurar o EJS como a engine de visualização
app.set("view engine", "ejs");

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

const whiteList = [
  'https://appcadastro.cieemg.org.br',      
];

const corsOptions = {
  origin: function (origin, callback) {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Criar o middleware para receber requisições externas
app.use((req, res, next) => {
  // Qualquer endereço pode fazer requisição
  res.header("Access-Control-Allow-Origin", 'https://appcadastro.cieemg.org.br');
  // Tipos de método que a API aceita
  res.header("Access-Control-Allow-Methods", "POST", "GET", "OPTIONS");
  // Permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Executar o cors
  app.use(cors(corsOptions));
  // Executar o helmet
  app.use(helmet())
  // Quando não houver o erro deve continuar o processamento
  next();
});

// Rota para renderizar o EJS em HTML da Escola
app.get("/schoolData", getEscola.renderSchoolData);

// Rota para buscar escolas
app.get("/cadastrarEscola", getCadastrarEscola.cadastrarEscola);

// Rota para verificar cpf do estudante
app.get("/verificarEstudante", getVerificarEstudante.verificarEstudante);

// Rota para validar email
app.get("/verificarEmail", getEmail.verificarEmail);

// Rota para cadastrar endereco
app.get("/cadastrarEndereco", getEndereco.getCadastrarEndereco);

// Rota para cadastrar curso
app.get("/cadastrarCurso", getCadastraCurso.cadastrarCurso);

// Função responsável por renderizar a primeira página
app.get("/", index.renderIndex);

// Função responsável por renderizar a segunda página
app.get("/terms-and-conditions", termsConditions.renderTermsConditions);

// Função responsável por renderizar a terceira página
app.get("/formDataBasic", dataBasic.renderDataBasic);

// Função responsável por renderizar a quarta página
app.get("/address", address.renderAddress);

// Função responsável por renderizar a quinta página
app.get("/socio-economic", socialEconomic.renderSocioEconomic);

// Função responsável por renderizar a sexta página
// app.get("/programa-curso", programaEmCurso.renderProgramaCurso);

// Função responsável por enviar as informações para o banco de dados
app.post("/cadastrar", postCadastro.postRegister);

// Iniciar o servidor na porta, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}: https://appcadastro.cieemg.org.br${process.env.PORT}`);
});
