const main = require("./main.js");
const termsAndConditions = require("./terms-and-conditions.js");
const initAddress = require("./address.js");
const initDataBasic = require("./dataBasic.js");
const createFormSchoolData = require("./schoolData.js");
const socioEconomic = require("./socioEconomic.js");
const { ProgramasEmCurso } = require("./programasEmCurso.js")
const {
  conferirFormAddress,
  conferirFormBasic,
  changeMains,
  changeSubMainTitle,
  conferirFormSchool,
  dateTime
} = require("../utils/util.js");

async function takeData() {
  const date = dateTime()
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

  // let validateFormSocioEconomic;
  // document.addEventListener("click", function (event) {
  //   const element = event.target;

  //   validateFormSocioEconomic = false;

  //   validateFormSocioEconomic = conferirFormSchool(dataEconomy);

  //   if (validateFormSchool && validateFormAddress && validateFormBasic && validateFormSocioEconomic) {
  //     if (


  //     ) {
  //       changeMains(".screen-programa-curso");
  //       changeSubMainTitle("Programa Em Curso");
  //     }
  //   } else {
  //     if (element.classList.contains("main")) {
  //       event.preventDefault();
  //     }
  //   }
  // });

  const programaCurso = new ProgramasEmCurso()

  document.querySelector(".alert").innerHTML =
    `<h1>Cadastro concluído!</h1>
    <p>Olá ${formData.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
    enviaremos em
    até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.</p>
    <div class="button-school-end">
            <a class="button-end-school" href="https://cieemg.org.br/" rel="noopener noreferrer">Confirmar</a>
    </div>
    <div class="data-erro">
      <p>${date} v - 1.1.0</p>
    </div>`;

  const allData = await {
    ...termsConditions,
    ...formData,
    ...formAddress,
    ...formSchoolData,
    ...dataEconomy,
  };

  return allData;
}

const data = takeData();

// async function sendData() {
//   const data = await takeData();

//   try {
//     const response = await fetch("http://localhost:8080/cadastrar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       error: false,
//       mensagem: "Usuário cadastrado com sucesso",
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//     } else {
//       console.log(response.status);
//     }
//   } catch (error) {
//     console.log("Erro: ", error);
//   }
// }

// sendData();