// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");
// Importar a biblioteca para permitir conexão externa
const cors = require("cors");
// Chamar a função express
const app = express();

const ejs = require("ejs");

const path = require("path");

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

const sequelize = require("./src/db/models");

const DataTypes = require("sequelize/lib/data-types");
const { Op } = require("sequelize");

// Acessar o models estudante
const Estudante = require("./src/db/models/estudante")(sequelize, DataTypes);

const Escola = require("./src/db/models/escola")(sequelize, DataTypes);

const Curso = require("./src/db/models/curso")(sequelize, DataTypes);

const Cep = require("./src/db/models/cep")(sequelize, DataTypes);

// Testar conexão com o banco de dados
// const db = require("./db/models")

// Incluir as CONTROLLERS
// const estudante = require('./controllers/estudante')

// Rota para renderizar o EJS em HTML
app.get("/terms-and-conditions", (req, res) => {
  ejs.renderFile("./src/views/terms-and-conditions.ejs", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao renderizar o arquivo EJS.");
    }
    res.send(html);
  });
});

// Rota para renderizar o EJS em HTML
app.get("/formDataBasic", (req, res) => {
  ejs.renderFile("./src/views/formDataBasic.ejs", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao renderizar o arquivo EJS.");
    }
    res.send(html);
  });
});

// Rota para renderizar o EJS em HTML
app.get("/address", (req, res) => {
  ejs.renderFile("./src/views/address.ejs", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro ao renderizar o arquivo EJS.");
    }
    res.send(html);
  });
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

// Rotar para obter dados do banco (GET)
app.get("/cadastrarEscola", async (req, res) => {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Escola.findAll({
      attributes: ["razaosocial", "id"],
      where: {
        razaosocial: {
          [Op.like]: `%${termoPesquisa}%`,
        },
      },
      limit: 10,
    });
    const opcoes = data.map((escola) => {
      return {
        razaosocial: escola.razaosocial,
        id: escola.id,
      };
    });

    res.json(opcoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar escola." });
  }
});

app.get("/verificarEstudante", async (req, res) => {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Estudante.findAll({
      attributes: ["cpf"],
      where: {
        cpf: {
          [Op.eq]: `${termoPesquisa}`,
        },
      },
      limit: 1,
    });
    const opcoes = data.map((estudante) => {
      return {
        cpf: estudante.cpf,
      };
    });
    res.json(opcoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar cpf do estudante." });
  }
});

app.get("/verificarEmail", async (req, res) => {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Estudante.findAll({
      attributes: ["email"],
      where: {
        email: {
          [Op.eq]: `${termoPesquisa}`,
        },
      },
      limit: 1,
    });
    const opcoes = data.map((estudante) => {
      return {
        email: estudante.email,
      };
    });
    res.json(opcoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar email do estudante." });
  }
});

// Rotar para obter dados do banco (GET)
app.get("/cadastrarCurso", async (req, res) => {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Curso.findAll({
      attributes: ["descricao", "idescola", "idcurso"],
      where: {
        idescola: {
          [Op.eq]: `${termoPesquisa}`,
        },
      },
      limit: 100,
    });
    const opcoes = data.map((curso) => {
      return {
        descricao: curso.descricao,
        idescola: curso.idescola,
        idcurso: curso.idcurso,
      };
    });
    res.json(opcoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar curso." });
  }
});

app.get("/cadastrarEndereco", async (req, res) => {
  const termoPesquisa = req.query.termo;

  try {
    const data = await Cep.findAll({
      attributes: ["cep", "logradouro", "bairro", "cidade", "uf", "regiao"],
      where: {
        cep: {
          [Op.eq]: `${termoPesquisa}`,
        },
      },
    });
    const opcoes = data.map((endereco) => {
      return {
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        uf: endereco.uf,
        regiao: endereco.regiao,
      };
    });
    res.json(opcoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar cep." });
  }
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/cadastrar", async (req, res) => {
  await Estudante.create(req.body)
    .then(() => {
      return res.json({
        // erro: false,
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
// app.listen(8080, () => {
//   console.log('Servidor iniciado na porta 8080: http://localhost:8080')
// })

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://186.248.218.2:8080");
});
