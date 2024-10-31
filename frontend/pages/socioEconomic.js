const { selecionarNomes, erroInputSocioEconomic, changeMains, changeSubMainTitle } = require("../utils/util");

async function socioEconomic() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("socio-economic");

    const htmlContent = await response.text();

    let screenSocioEconomic = document.querySelector(".screen-socio-economic");

    screenSocioEconomic.innerHTML = htmlContent;

    const formSocioEconomic = document.querySelector(".form-economic");

    const formEconomic = {};

    const aprendiz = document.getElementById("aprendiz");

    aprendiz.addEventListener("input", (e) => {
      let valores = e.target.value;

      valores = valores.trim()

      if (valores.length === 0) {
        e.preventDefault();
        document.getElementById("msg-aprendiz").innerHTML =
          "<p>Favor preencher o campo!</p>";
        formEconomic.aprendiz = false;
      } else {
        document.getElementById("msg-aprendiz").innerHTML = "";
        formEconomic.aprendiz = valores;
      }
    });

    const responsavel = document.getElementById("responsavel");

    responsavel.addEventListener("input", (e) => {
      let valores = e.target.value;

      valores = valores.trim()

      if (valores.length === 0) {
        e.preventDefault();
        document.getElementById("msg-responsavel").innerHTML =
          "<p>Favor preencher o campo!</p>";
        formEconomic.responsavel = false;
      } else {
        document.getElementById("msg-responsavel").innerHTML = "";
        formEconomic.responsavel = valores;
      }
    });

    const imovel = document.getElementById("imovel");

    imovel.addEventListener("input", (e) => {
      let valores = e.target.value;

      valores = valores.trim()

      if (valores.length === 0) {
        e.preventDefault();
        document.getElementById("msg-imovel").innerHTML =
          "<p>Favor preencher o campo!</p>";
        formEconomic.imovel = false;
      } else {
        document.getElementById("msg-imovel").innerHTML = "";
        formEconomic.imovel = valores;
      }
    });

    const pessoas = document.getElementById("pessoas");

    pessoas.addEventListener("input", (e) => {
      let valores = e.target.value;

      valores = valores.trim()

      if (valores.length === 0) {
        e.preventDefault();
        document.getElementById("msg-pessoas").innerHTML =
          "<p>Favor preencher o campo!</p>";
        formEconomic.pessoas_por_residencia = false;
      } else {
        document.getElementById("msg-pessoas").innerHTML = "";
        formEconomic.pessoas_por_residencia = valores;
      }
    });

    const filhos = document.getElementById("filhos");

    filhos.addEventListener("input", (e) => {
      let valores = e.target.value;

      valores = valores.trim()

      if (valores.length === 0) {
        e.preventDefault();
        document.getElementById("msg-filhos").innerHTML =
          "<p>Favor preencher o campo!</p>";
        formEconomic.tem_filhos = false;
      } else {
        document.getElementById("msg-filhos").innerHTML = "";
        formEconomic.tem_filhos = valores;
      }
    });

    const escolas = document.getElementsByName("escolas");

    const rendas = document.getElementsByName("rendas");

    const generos = document.getElementsByName("genero");

    const declaracao = document.getElementsByName("declaracao");

    const situacaoJudicial = document.getElementsByName("situacao-judicial");

    if (formSocioEconomic) {
      formSocioEconomic.addEventListener("submit", (e) => {
        e.preventDefault();
        const alertEnd = document.querySelector(".end");
        if (
          formEconomic.aprendiz &&
          formEconomic.responsavel &&
          formEconomic.imovel &&
          formEconomic.pessoas_por_residencia &&
          formEconomic.tem_filhos
          // formEconomic
        ) {
          formEconomic.escola_estudou = selecionarNomes(escolas);
          formEconomic.renda = selecionarNomes(rendas);
          formEconomic.genero = selecionarNomes(generos);
          formEconomic.etnia = selecionarNomes(declaracao);
          formEconomic.situacao_judicial = selecionarNomes(situacaoJudicial);
          setTimeout(() => {
            
          }, 4000);
          alertEnd.style.display = "block";
          document.querySelector(".alert").style.display = "none";
          formEconomic.enviar_email = 1;
          // changeMains(".screen-programa-curso")
          // changeSubMainTitle("Programas Em Curso");
          resolve(formEconomic);
        } else {
          erroInputSocioEconomic(formEconomic);
        }
      });
    } else {
      reject(new Error("O formulário não foi encontrado!"));
    }
  });
}

module.exports = socioEconomic;
