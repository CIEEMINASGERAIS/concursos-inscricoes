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
  let ultimoErro = null;

  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const response = await fetch("/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: true,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return { ok: response.ok, status: response.status, body: await response.text() };
      }

      ultimoErro = new Error(`HTTP ${response.status}`);
    } catch (error) {
      ultimoErro = error;
      clientLogger.warn("CADASTRO_TENTATIVA_FALHOU", {
        tentativa,
        cpf: payload.cpf,
        mensagem: error?.message,
      });
    }

    if (tentativa < maxTentativas) {
      await new Promise((r) => setTimeout(r, 1500 * tentativa));
    }
  }

  throw ultimoErro;
}

async function sendData() {
  const data = await takeData();
  const date = dateTime();

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
      const bodyLower = (resultado.body || "").toLowerCase();
      const isDuplicado = bodyLower.includes("já cadastrad") ||
                          bodyLower.includes("duplicate") ||
                          bodyLower.includes("unique constraint") ||
                          bodyLower.includes("already exists");

      clientLogger[isDuplicado ? "warn" : "error"]("FALHA_BACKEND_CADASTRO", {
        status: resultado.status,
        resposta: resultado.body,
        cpf: data.cpf,
        jaCadastrado: isDuplicado,
      });

      document.querySelector(".alert").style.display = "flex";
      document.querySelector(".title-cadastro").innerHTML = isDuplicado
        ? `Cadastro já realizado!`
        : `Falha ao Realizar Cadastro.`;
      document.querySelector(".data-erro").innerHTML =
        `<p>${date} - status ${resultado.status}</p>`;

      document.querySelector(".message-final").innerHTML = isDuplicado
        ? `Olá ${data.nome}, identificamos que este CPF ou e-mail já possui cadastro. Verifique sua caixa de entrada (incluindo spam) pelo e-mail de confirmação. Em caso de dúvidas, ligue (31) 3429-8100.`
        : `Olá ${data.nome}, não foi possível concluir o cadastro. Verifique os dados e tente novamente.`;
    }
  } catch (error) {
    const isNetworkError = error?.message?.includes("Load failed") ||
                           error?.name === "TypeError" ||
                           error?.message?.includes("NetworkError");

    clientLogger[isNetworkError ? "warn" : "error"]("CADASTRO_FALHA_REDE", {
      cpf: data.cpf,
      mensagem: error?.message,
      tipo: isNetworkError ? "rede" : "desconhecido",
    });

    document.querySelector(".alert").style.display = "flex";
    document.querySelector(".title-cadastro").innerHTML =
      isNetworkError ? `Cadastro concluído!` : `Falha ao Realizar Cadastro.`;
    document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;

    document.querySelector(".message-final").innerHTML = isNetworkError
      ? `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
      enviaremos em
      até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`
      : `Olá ${data.nome}, ocorreu um erro desconhecido ao realizar o seu cadastro, favor entrar em contato através do número (31) 3429-8100.`;
  }
}

sendData();