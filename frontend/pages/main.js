const { changeSubMainTitle, changeMains } = require("../utils/util.js");

const main = () => {
  function mainPage() {
    document.addEventListener("click", function (event) {
      const element = event.target;
      if (element.classList.contains("button-back-address")) {
        changeMains(".screen-basic-data1");
        changeSubMainTitle("Formulário de Dados Básicos");
      }
      if (element.classList.contains("button-back-school")) {
        changeMains(".screen-address");
        changeSubMainTitle("Formulário de Endereço");
      }
      if (element.classList.contains("button-back-socio")) {
        changeMains(".screen-school-data");
        changeSubMainTitle("Formulário de Dados Acadêmicos");
      }
      if (element.classList.contains("button-back-programa")) {
        changeMains(".screen-socio-economic");
        changeSubMainTitle("Formulário Socioeconômico");
      }
    });
  }

  mainPage();
};

module.exports = main;
