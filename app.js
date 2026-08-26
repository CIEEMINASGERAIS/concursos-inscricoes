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

const cursoRoutes = require('./routes/cursoRoute')
const requestLogger = require('./src/middlewares/requestLogger');
const idempotencyMiddleware = require('./src/middlewares/idempotency').idempotencyMiddleware;
const errorHandler = require('./src/middlewares/errorHandler');
const { logger } = require('./src/utils/logger');

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
const postClientLog = require("./src/controllers/postClientLog");

// Acessar os renders das páginas
const index = require("./src/controllers/renderIndex");

const termsConditions = require("./src/controllers/renderTermsConditions");

const dataBasic = require("./src/controllers/renderDataBasic");

const address = require("./src/controllers/renderAddress");

const socialEconomic = require("./src/controllers/renderSocialEconomy");

const programaEmCurso = require("./src/controllers/renderProgramasEmCurso");

app.use(express.urlencoded({ extended: true, limit: "25mb" }));

app.set("views", path.resolve(__dirname, "src", "views"));
// Configurar o EJS como a engine de visualização
app.set("view engine", "ejs");

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json({ limit: "25mb" }));

app.use(requestLogger);
// Idempotency precisa rodar ANTES do controller mas DEPOIS do requestLogger
// (que popula req.requestId). Só POSTs são cacheados — GETs passam direto.
app.use(idempotencyMiddleware);

app.use(express.static(path.resolve(__dirname, "public", "assets")));

const whiteList = [

  "https://concursotjmmg.cieemg.org.br",
  "http://localhost:8080",
];

// Origens null acontecem em webviews, Samsung Browser modo privado,
// e navegação por file://. Permitimos explicitamente para não bloquear
// o frontend legítimo, mas SEM usar o atalho `!origin` (que mascara
// origens realmente desconhecidas e abre brecha de segurança).
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin === "null" || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "X-Requested-With"],
  exposedHeaders: ["x-request-id"],
  maxAge: 86400,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(
  helmet({
    // Cross-Origin-Resource-Policy: same-site evita bloqueio em browsers
    // Chromium-based (Samsung Browser) para recursos same-origin.
    crossOriginResourcePolicy: { policy: "same-site" },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://code.jquery.com", "https://cdn.jsdelivr.net"],
        styleSrc: ["'self'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com"],
        connectSrc: ["'self'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: ["'self'", "data:"],
      },
    },
  })
);

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
app.use("/cadastrarCurso/", cursoRoutes);

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
app.get("/programa-curso", programaEmCurso.renderProgramaCurso);

// Função responsável por enviar as informações para o banco de dados
app.post("/cadastrar", postCadastro.postRegister);

// Endpoint para receber logs do frontend (sem auth, com sanitização LGPD)
app.post("/api/logs", postClientLog.postClientLog);

app.use(errorHandler);

process.on("uncaughtException", (error) => {
  logger.error("UNCAUGHT_EXCEPTION", {
    erro: error.message,
    stack: error.stack,
    originalError: error,
  });

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  const error = reason instanceof Error ? reason : new Error(String(reason));

  logger.error("UNHANDLED_REJECTION", {
    erro: error.message,
    stack: error.stack,
    originalError: reason,
  });

  process.exit(1);
});

// Iniciar o servidor na porta, criar a função utilizando modelo Arrow function para retornar a mensagem de sucesso
app.listen(process.env.PORT);
