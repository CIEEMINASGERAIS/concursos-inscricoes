const main = require("./main.js");
const termsAndConditions = require("./terms-and-conditions.js");
const initAddress = require("./address.js");
const initDataBasic = require("./dataBasic.js");
const createFormSchoolData = require("./schoolData.js");
const socioEconomic = require("./socioEconomic.js");
// const { ProgramasEmCurso } = require("./programasEmCurso.js")
const {
  conferirFormAddress,
  conferirFormBasic,
  changeMains,
  changeSubMainTitle,
  conferirFormSchool,
  dateTime
} = require("../utils/util.js");
const { clientLogger } = require("../utils/clientLogger.js");
const { fetchJson, classifyFetchError, readNetworkDiagnostics } = require("../utils/http.js");

async function takeData() {


  const callMain = main();
  const termsConditions = await termsAndConditions();

  const formData = await initDataBasic();
  let validateFormBasic;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormBasic = false;

    validateFormBasic = conferirFormBasic(formData);

    if (validateFormBasic) {
      if (
        element.classList.contains("big-address") ||
        element.classList.contains("button-address")
      ) {
        changeMains(".screen-address");
        changeSubMainTitle("Formulário de Endereço");
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  const formAddress = await initAddress();
  let validateFormAddress;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormAddress = false;

    validateFormAddress = conferirFormAddress(formAddress);

    if (validateFormAddress && validateFormBasic) {
      if (
        element.classList.contains("big-school-data") ||
        element.classList.contains("button-school-data")
      ) {
        changeMains(".screen-school-data");
        changeSubMainTitle("Formulário de Dados Acadêmicos");
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  const formSchoolData = await createFormSchoolData();
  let validateFormSchool;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormSchool = false;

    validateFormSchool = conferirFormSchool(formSchoolData);

    if (validateFormSchool && validateFormAddress && validateFormBasic) {
      if (
        element.classList.contains("big-socio-economic") ||
        element.classList.contains("button-socio-economic")
      ) {
        changeMains(".screen-socio-economic");
        changeSubMainTitle("Formulário Socioeconômico");
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  const dataEconomy = await socioEconomic();

  let validateFormSocioEconomic;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormSocioEconomic = false;

    validateFormSocioEconomic = conferirFormSchool(dataEconomy);

    if (validateFormSchool && validateFormAddress && validateFormBasic && validateFormSocioEconomic) {

    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  const allData = await {
    ...termsConditions,
    ...formData,
    ...formAddress,
    ...formSchoolData,
    ...dataEconomy,
  };

  return allData;
}

// async function sendData() {
//   const data = await takeData();

//   const date = dateTime()

//   document.querySelector(".alert").style.display = "flex";

//   document.querySelector(".title-cadastro").innerHTML = `Carregando...`;

//   document.querySelector(".data-erro").innerHTML = ``;


//   document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, estamos finalizando o seu cadastro, aguarde um momento.`;

//   try {
//     const response = await fetch("/cadastrar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       error: false,
//       mensagem: "Usuário cadastrado com sucesso",
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {


//       document.querySelector(".alert").style.display = "flex";

//       document.querySelector(".title-cadastro").innerHTML = `Cadastro concluído!`;

//       document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;


//       document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
//       enviaremos em
//       até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`;
//     } else {
//       const erroResposta = await response.text();
//       document.querySelector(".alert").style.display = "flex";

//       document.querySelector(".title-cadastro").innerHTML = `Falha ao Realizar Cadastro.`;

//       document.querySelector(".data-erro").innerHTML = `<p>${date}</p>`;


//       document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, ocorreu um erro desconhecido ao realizar o seu cadastro, favor entrar em contato através do número (31) 3429-8100.`;
//     }
//   } catch (error) {
//     console.log("Erro: ", error);
//   }
// }
async function postCadastroWithRetry(payload, maxTentativas = 5) {
  try {
    const resultado = await fetchJson("/cadastrar", {
      method: "POST",
      body: payload,
      timeoutMs: 20000,
      maxTentativas,
      keepalive: false,
      retryOn5xx: true,
      contextoExtra: {
        cpf: payload.cpf,
        origem: "postCadastroWithRetry",
        payloadBytes: JSON.stringify(payload).length,
      },
    });

    return {
      ok: resultado.ok,
      status: resultado.status,
      body: typeof resultado.data === "string" ? resultado.data : JSON.stringify(resultado.data || ""),
      attempts: resultado.attempts,
    };
  } catch (error) {
    const classification = error?.classification || classifyFetchError(error, "/cadastrar");

    clientLogger.warn("CADASTRO_TENTATIVA_FALHOU", {
      cpf: payload.cpf,
      tentativaFinal: maxTentativas,
      tipoErro: classification.tipo,
      labelErro: classification.label,
      mensagem: classification.mensagem,
      nomeErro: error?.name,
      ...readNetworkDiagnostics(),
    });

    throw Object.assign(error, { classification });
  }
}

async function sendData() {
  const data = await takeData();
  const date = dateTime();
  const tituloErroPadrao = "Falha ao Realizar Cadastro.";
  const mensagemErroPadrao = `Olá ${data.nome}, ocorreu um erro desconhecido ao realizar o seu cadastro, favor entrar em contato através do número (31) 3429-8100.`;

  const parseErroBackend = (status, body) => {
    const bodyText = body || "";
    const bodyLower = bodyText.toLowerCase();

    // O backend pode responder com 400 (Validation error) OU 409 (UniqueConstraint)
    // dependendo de qual camada do catch pegou o erro. Ambos significam "duplicado"
    // quando o corpo menciona cpf/email "já cadastrado".
    const isDuplicado =
      bodyLower.includes("já cadastrad") ||
      bodyLower.includes("já existe um cadastro") ||
      bodyLower.includes("duplicate") ||
      bodyLower.includes("unique constraint") ||
      bodyLower.includes("already exists") ||
      status === 409;

    // Detecta especificamente erro de validação genérico do Sequelize
    // (não confundir com duplicado).
    const isValidationError = bodyLower.includes("validation error") && !isDuplicado;

    if (isDuplicado) {
      return {
        tipo: "duplicado",
        titulo: "Cadastro já realizado!",
        mensagem: `Olá ${data.nome}, identificamos que este CPF ou e-mail já possui cadastro. Verifique sua caixa de entrada (incluindo spam) pelo e-mail de confirmação. Em caso de dúvidas, ligue (31) 3429-8100.`,
      };
    }

    if (status === 413 || bodyLower.includes("payload too large") || bodyLower.includes("request entity too large")) {
      return {
        tipo: "payload_grande",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    if (status === 400) {
      if (isValidationError) {
        return {
          tipo: "dados_invalidos",
          titulo: "Dados inválidos",
          mensagem: `Olá ${data.nome}, alguns dados informados não passaram na validação. Confira CPF, e-mail e demais campos e tente novamente. Em caso de dúvidas, ligue (31) 3429-8100.`,
        };
      }
      return {
        tipo: "dados_invalidos",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    if (status >= 500) {
      return {
        tipo: "erro_servidor",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    return {
      tipo: "falha_generica",
      titulo: tituloErroPadrao,
      mensagem: mensagemErroPadrao,
    };
  };

  clientLogger.info("INICIO_CADASTRO_FRONTEND", {
    etapa: "INICIO_CADASTRO",
    cpf: data.cpf,
  });

  document.querySelector(".alert").style.display = "flex";
  document.querySelector(".title-cadastro").innerHTML = `Carregando...`;
  document.querySelector(".data-erro").innerHTML = ``;
  document.querySelector(".message-final").innerHTML =
    `Olá ${data.nome}, estamos finalizando o seu cadastro, aguarde um momento.`;

  try {
    const resultado = await postCadastroWithRetry(data);

    if (resultado.ok) {
      document.querySelector(".alert").style.display = "flex";
      document.querySelector(".title-cadastro").innerHTML = `Cadastro concluído!`;
      document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;
      document.querySelector(".message-final").innerHTML =
        `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
      enviaremos em
      até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`;
    } else {
      const erroCadastro = parseErroBackend(resultado.status, resultado.body);

      clientLogger[erroCadastro.tipo === "duplicado" ? "warn" : "error"]("FALHA_BACKEND_CADASTRO", {
        status: resultado.status,
        resposta: resultado.body,
        cpf: data.cpf,
        tipoErro: erroCadastro.tipo,
      });

      document.querySelector(".alert").style.display = "flex";
      document.querySelector(".title-cadastro").innerHTML = erroCadastro.titulo;
      document.querySelector(".data-erro").innerHTML =
        `<p>${date} - status ${resultado.status}</p>`;

      document.querySelector(".message-final").innerHTML = erroCadastro.mensagem;
    }
  } catch (error) {
    const classification = error?.classification || classifyFetchError(error, "/cadastrar");
    const isNetworkError = ["timeout", "rede", "mixed_content"].includes(classification.tipo);

    clientLogger[isProvavelSucesso ? "warn" : "error"]("CADASTRO_FALHA_REDE", {
      cpf: data.cpf,
      tipoErro: classification.tipo,
      labelErro: classification.label,
      mensagem: classification.mensagem,
      nomeErro: error?.name,
      attempts: error?.attempts || null,
      ...readNetworkDiagnostics(),
    });

    document.querySelector(".alert").style.display = "flex";
    document.querySelector(".title-cadastro").innerHTML =
      isNetworkError ? `Cadastro concluído!` : tituloErroPadrao;
    document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;

    document.querySelector(".message-final").innerHTML = isNetworkError
      ? `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
      enviaremos em
      até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`
      : mensagemErroPadrao;
  }
}

sendData();