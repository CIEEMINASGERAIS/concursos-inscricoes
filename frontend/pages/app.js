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
      if (
        element.classList.contains("button-finish-socio")
      ) {
        //   changeMains(".screen-programa-curso");
        //   changeSubMainTitle("Programa Em Curso");        
        // }
        // document.querySelector(".alert").innerHTML =
        //   `<h1>Cadastro concluído!</h1>
        // <p>Olá ${formData.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
        // enviaremos em
        // até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.</p>
        // <div class="button-school-end">
        //         <a class="button-end-school" href="https://cieemg.org.br/" rel="noopener noreferrer">Confirmar</a>
        // </div>
        // <div class="data-erro">
        //   <p>${date} v - 1.1.0</p>
        // </div>`;
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  // const programaCurso = new ProgramasEmCurso()

  // const formProgramaCurso = await programaCurso.eventos()



  const allData = await {
    ...termsConditions,
    ...formData,
    ...formAddress,
    ...formSchoolData,
    ...dataEconomy,
    // ...formProgramaCurso
  };

  return allData;
}

async function sendData() {
  const data = await takeData();

  const date = dateTime()

  document.querySelector(".alert").style.display = "flex";

  document.querySelector(".title-cadastro").innerHTML = `Carregando...`;

  document.querySelector(".data-erro").innerHTML = ``;


  document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, estamos finalizando o seu cadastro, aguarde um momento.`;

  try {
    const response = await fetch("https://appcadastro.cieemg.org.br//cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      error: false,
      mensagem: "Usuário cadastrado com sucesso",
      body: JSON.stringify(data),
    });
    if (response.ok) {


      document.querySelector(".alert").style.display = "flex";

      document.querySelector(".title-cadastro").innerHTML = `Cadastro concluído!`;

      document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;


      document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
      enviaremos em
      até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`;
    } else {
      document.querySelector(".alert").style.display = "flex";

      document.querySelector(".title-cadastro").innerHTML = `Falha ao Realizar Cadastro.`;

      document.querySelector(".data-erro").innerHTML = ``;


      document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, ocorreu um erro desconhecido ao realizar o seu cadastro, favor entrar em contato através do número (31) 3429-8100.`;
    }
  } catch (error) {
    console.log("Erro: ", error);
  }
}

sendData();