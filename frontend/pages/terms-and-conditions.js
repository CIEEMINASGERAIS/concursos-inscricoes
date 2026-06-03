
const {
  changeMains,
  changeSubMainTitle,
  dateRegister,
} = require("../utils/util");

async function termsAndConditions() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("terms-and-conditions");

    const contetHtml = await response.text();
    const termsConditions = document.querySelector(".screen-terms-conditions");
    termsConditions.innerHTML = contetHtml;

    let schoolData = {};
    const readTerms = document.querySelector(".div-terms-and-conditions");

    // Pegando os elementos corretamente
    const checkbox = document.getElementById("li-concordo");
    const buttonAccept = document.getElementById("button-accept");
    const buttonDecline = document.getElementById("button-decline");
    const buttonBasicData = document.getElementById("button-basic-data");

    // Inicialmente, o botão "Aceitar" deve estar desativado
    buttonAccept.disabled = true;

    // Recuperar do localStorage o estado do botão "Basic Data"
    const isBlocked = localStorage.getItem("buttonBasicDataBlocked");
    if (isBlocked === "true") {
      buttonBasicData.disabled = true;
    }

    document.addEventListener("click", async (e) => {
      const element = e.target;

      if (element.classList.contains("button-termo") ||
        element.classList.contains("terms-and-conditions") ||
        element.classList.contains("p-t-c") ||
        element.classList.contains("h1-t-c") ||
        element.classList.contains("h2-t-c") ||
        element.classList.contains("s-t-c") ||
        element.classList.contains("a-t-c") ||
        element.classList.contains("check-term") ||
        element.classList.contains("label-li") ||
        element.classList.contains("input-li") ||
        element.classList.contains("checkbox") ||
        element.classList.contains("text-terms-conditions") ||
        element.classList.contains("title-terms") ||
        element.classList.contains("button-terms-a-d") ||
        element.classList.contains("terms-input-label")) {
        readTerms.style.display = "flex";
      } else {
        readTerms.style.display = "none";
      }

      if (element.classList.contains("button-decline")) {
        e.preventDefault();
        buttonBasicData.disabled = true;
        localStorage.setItem("buttonBasicDataBlocked", "true");
      }


      // Lógica para habilitar/desabilitar o botão "Aceitar"
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          schoolData.termos_condicoes = 1;
          buttonAccept.disabled = false;  // Habilita o botão "Aceitar"
        } else {
          schoolData.termos_condicoes = 0;
          buttonAccept.disabled = true;   // Desabilita o botão "Aceitar"
        }
      });

      if (element.classList.contains("button-accept")) {
        if (schoolData.termos_condicoes === 1) {
          schoolData.dt_cadastro = dateRegister();
          schoolData.dt_atualizacao = dateRegister();
          changeMains(".screen-basic-data1");
          changeSubMainTitle("Formulário de Dados Básicos");
          resolve(schoolData);
        } else {
          e.preventDefault();
        }
      }
    });

    $(document).ready(function () {
      document.getElementById("li-concordo").disabled = true;

      const isMobile = window.innerWidth <= 920;
      if (isMobile) {
        setTimeout(() => {
          document.getElementById("li-concordo").disabled = false;
        }, 5000);
      } else {
        $(".text-terms-conditions").bind("scroll", function () {
          if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
            document.getElementById("li-concordo").disabled = false;
          } else {
            document.getElementById("li-concordo").disabled = true;
          }
        });
      }
    });
  });
}

module.exports = termsAndConditions;
