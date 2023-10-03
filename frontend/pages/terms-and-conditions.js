const {
  changeMains,
  changeSubMainTitle,
  dateTime,
  dateRegister,
} = require("../utils/util");

async function termsAndConditions() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("terms-and-conditions");

    const contetHtml = await response.text();

    const termsCondtions = document.querySelector(".terms-and-conditions");

    const menuSide = document.querySelector(".nav-bar");

    const termoBox = document.querySelector(".termos-box");

    const title = document.querySelector(".sub-main-title");

    let schoolData = {};

    termsCondtions.innerHTML = contetHtml;

    document.addEventListener("click", async (e) => {
      element = e.target;

      if (
        element.classList.contains("button-termo") ||
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
        element.classList.contains("terms-input-label")
      ) {
        termsCondtions.style.display = "block";
        menuSide.style.visibility = "hidden";
        termoBox.style.display = "none";
        title.style.visibility = "hidden";
      } else {
        termsCondtions.style.display = "none";
        menuSide.style.visibility = "visible";
        termoBox.style.display = "flex";
        title.style.visibility = "visible";
      }

      if (element.classList.contains("button-decline")) {
        schoolData.termos_condicoes = 0;
      }

      if (element.classList.contains("button-accept") ||
        element.classList.contains("basic-data")) {
        schoolData.termos_condicoes = 1;
        if (schoolData.termos_condicoes === 1) {
          schoolData.dt_cadastro = dateRegister();
          changeMains(".screen-basic-data1");
          changeSubMainTitle("Formulário de Dados Básicos");
          console.log(schoolData);
          resolve(schoolData);
        } else {
          e.preventDefault();
        }
      }

      let checkbox = document.getElementById("li-concordo");

      if (checkbox.checked === true) {
        document.getElementById("button-accept").disabled = false;
      } else {
        document.getElementById("button-accept").disabled = true;
      }
    });

    $(document).ready(function () {
      document.getElementById("li-concordo").disabled = true;

      const isMobile = window.innerWidth <= 920; // Defina a largura máxima para considerar como dispositivo móvel

      if (isMobile) {
        setTimeout(() => {
          document.getElementById("li-concordo").disabled = false;
        }, 15000);
      } else {
        $(".text-terms-conditions").bind("scroll", function () {
          /*
           * scrollTop -> Quanto rolou
           * innerHeight -> Altura do interior da div
           * scrollHeight -> Altura do conteúdo da div
           */
          if (
            $(this).scrollTop() + $(this).innerHeight() >=
            this.scrollHeight
          ) {
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
