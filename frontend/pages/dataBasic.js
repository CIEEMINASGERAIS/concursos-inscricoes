const {
  isNome,
  isCpf,
  isCtps,
  isNaturalidadeNacionalidade,
  changeMains,
  changeSubMainTitle,
  isEstadoCivil,
  isDate,
  isSexo,
  isUfNaturalidade,
  isDeficiente,
  isDescricao,
  removerMensagem,
  isRg,
  isComplemento,
  age,
  cpfInBd,
  erroInput,
  erroSelect,
  CreateInputLabel
} = require("../utils/util.js");

// Função responsável por iniciar as funções e gerar o conteúdo da página
const initDataBasic = async () => {
  return new Promise(async (resolve, reject) => {
    // adicionarPaginaHtml()
    const response = await fetch("formDataBasic");

    const htmlContent = await response.text();

    const dataBasic = document.querySelector(".screen-basic-data1");

    dataBasic.innerHTML = htmlContent;

    const formData = document.querySelector(".form-data");

    const ufNaturalidade = document.getElementById("uf-naturalidade");

    const ufs = [
      "RO",
      "AC",
      "AM",
      "RR",
      "PA",
      "AP",
      "TO",
      "MA",
      "PI",
      "CE",
      "RN",
      "PB",
      "PE",
      "AL",
      "SE",
      "BA",
      "MG",
      "ES",
      "RJ",
      "SP",
      "PR",
      "SC",
      "RS",
      "MS",
      "MT",
      "GO",
      "DF",
    ];

    for (let i = 0; i < ufs.length; i++) {
      const option = document.createElement("option");
      ufNaturalidade.appendChild(option);
      option.value = ufs[i];
      option.text = ufs[i];
      option.name = ufs[i];
    }

    const listDeficiencias = ["N", "F", "A", "V", "ME", "MU", "TE"];

    const formDataBasic = {};

    const inputNome = document.querySelector(".name");

    if (inputNome) {
      let validate;

      inputNome.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");

        validate = isNome(e.target.value);

        if (validate) {
          document.getElementById("msg-nome").innerHTML = "";
          return (formDataBasic.nome = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-nome").innerHTML =
            "<p>Favor preencher o Nome completo!</p>";
          return (formDataBasic.nome = false);
        }
      });
    }

    const checkNomeSocial = document.getElementById('social')

    const divNomeSocial = document.querySelector(".div-social")

    document.addEventListener("click", function (e) {
      const element = e.target;

      if (element.classList.contains("social")) {
        if (checkNomeSocial.checked) {
          if (!document.querySelector('.nome-social')) {
            const inputSocial = new CreateInputLabel(divNomeSocial, "Nome Social", "nome-social")
          }
        } else {
          const div = document.querySelector("#div-nome-social")
          div.remove()
          formDataBasic.nome_social = " "
        }
      }
    })

    let validate;

    document.addEventListener("input", (e) => {
      const element = e.target;

      if (element.classList.contains("nome-social")) {

        element.value = element.value.replace(/[0-9]/g, "");

        validate = isNome(element.value);

        if (validate) {
          document.getElementById("msg-nome-social").innerHTML = "";
          formDataBasic.nome_social = element.value
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-nome-social").innerHTML =
            "<p>Favor preencher o Nome Social completo!</p>";
          formDataBasic.nome_social = false
        }
      }
    })


    const inputCpf = document.querySelector(".cpf");

    if (inputCpf) {
      let validate;

      inputCpf.addEventListener("input", async (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        e.target.value = e.target.value.replace(/(\d{3})(\d)/, "$1.$2");
        e.target.value = e.target.value.replace(/(\d{3})(\d)/, "$1.$2");
        e.target.value = e.target.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        validate = isCpf(e.target.value);

        if (validate) {
          document.getElementById("msg-cpf").innerHTML = "";
          const validateBd = await cpfInBd(e.target.value);
          if (validateBd) {
            formDataBasic.cpf = e.target.value;
            document.getElementById("msg-cpf").innerHTML = "";
          } else {
            document.getElementById("msg-cpf").innerHTML =
              "<p>CPF já cadastrado!</p>";
          }
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-cpf").innerHTML = "<p>CPF inválido!</p>";
          formDataBasic.cpf = false;
        }
      });
    }

    const rg = document.querySelector(".rg");

    if (rg) {
      let validate;

      rg.addEventListener("input", (e) => {
        // Remove tudo, exceto números
        e.target.value = e.target.value.replace(/[^\d]/g, "");

        validate = isRg(e.target.value);

        if (validate) {
          document.getElementById("msg-rg").innerHTML = "";
          formDataBasic.rg = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-rg").innerHTML = "<p>RG inválido!</p>";
          formDataBasic.rg = false;
        }
      });
    }

    const orgaoExpedidor = document.querySelector(".orgao-expedidor");

    if (orgaoExpedidor) {
      let validate;

      orgaoExpedidor.addEventListener("input", (e) => {
        validate = isComplemento(e.target.value);

        if (validate) {
          document.getElementById("msg-orgao-expedidor").innerHTML = "";
          formDataBasic.orgaoexpedidor = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-orgao-expedidor").innerHTML =
            "<p>Orgão Expedidor inválido!</p>";
          formDataBasic.orgaoexpedidor = false;
        }
      });
    }

    const inputNomeMae = document.querySelector(".nome-mae");

    if (inputNomeMae) {
      let validate;

      inputNomeMae.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");

        validate = isNome(e.target.value);

        if (validate) {
          document.getElementById("msg-nome-mae").innerHTML = "";
          formDataBasic.nomemae = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-nome-mae").innerHTML =
            "<p>Favor preencher o Nome completo!</p>";
          formDataBasic.nomemae = false;
        }
      });
    }

    const inputNomePai = document.querySelector(".nome-pai");

    if (inputNomePai) {
      let validate;

      inputNomePai.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");

        validate = isNome(e.target.value);

        if (validate) {
          document.getElementById("msg-nome-pai").innerHTML = "";
          return formDataBasic.nomepai = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-nome-pai").innerHTML =
            "<p>Favor preencher o nome completo!</p>";
          removerMensagem("msg-nome-pai");
          return formDataBasic.nomepai = "";
        }
      });
    }

    const ctps = document.getElementById("carteira-trabalho");

    if (ctps) {
      let validate;

      ctps.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");

        validate = isCtps(e.target.value);

        if (validate) {
          document.getElementById("msg-carteira-trabalho").innerHTML = "";
          return formDataBasic.ctps = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-carteira-trabalho").innerHTML =
            "<p>CTPS inválido!</p>";
          removerMensagem("msg-carteira-trabalho");
          return formDataBasic.ctps = "";
        }
      });
    }

    const naturalidade = document.getElementById("naturalidade");

    if (naturalidade) {
      let validate;

      naturalidade.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");

        validate = isNaturalidadeNacionalidade(e.target.value);

        if (validate) {
          document.getElementById("msg-naturalidade").innerHTML = "";
          return (formDataBasic.naturalidade = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-naturalidade").innerHTML =
            "<p>Naturalidade inválida!</p>";
          return (formDataBasic.naturalidade = false);
        }
      });
    }

    const nacionalidade = document.getElementById("nacionalidade");

    if (nacionalidade) {
      let validate;

      nacionalidade.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[0-9]/g, "");

        validate = isNaturalidadeNacionalidade(e.target.value);

        if (validate) {
          document.getElementById("msg-nacionalidade").innerHTML = "";
          return (formDataBasic.nacionalidade = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-nacionalidade").innerHTML =
            "<p>Caracteres inválidos!</p>";
          return (formDataBasic.nacionalidade = false);
        }
      });
    }

    const estadoCivil = document.getElementById("estado-civil");

    if (estadoCivil) {
      let validate;

      estadoCivil.addEventListener("input", (e) => {
        validate = isEstadoCivil(e.target.value);

        if (validate) {
          document.getElementById("msg-estado-civil").innerHTML = "";
          return (formDataBasic.estadocivil = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-estado-civil").innerHTML =
            "<p>Estado civil inválido!</p>";
          return (formDataBasic.estadocivil = false);
        }
      });
    }

    const dataNascimento = document.getElementById("data-nascimento");

    if (dataNascimento) {
      let validate;

      dataNascimento.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9-]/g, "");

        validate = isDate(e.target.value);

        if (validate) {
          document.getElementById("msg-data-nascimento").innerHTML = "";
          formDataBasic.dt_nascimento = e.target.value;
          formDataBasic.idade = age(e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-data-nascimento").innerHTML =
            "<p>Cadastro permitido a partir dos 14 anos de idade!</p>";
          formDataBasic.dt_nascimento = false;
          formDataBasic.idade = false;
        }
      });
    }

    const sexo = document.getElementById("sexo");

    if (sexo) {
      let validate;

      sexo.addEventListener("input", (e) => {
        validate = isSexo(e.target.value);

        if (validate) {
          document.getElementById("msg-sexo").innerHTML = "";
          return (formDataBasic.sexo = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-sexo").innerHTML =
            "<p>Opção inválida!</p>";
          return (formDataBasic.sexo = false);
        }
      });
    }

    if (ufNaturalidade) {
      let validate;

      ufNaturalidade.addEventListener("input", (e) => {
        validate = isUfNaturalidade(e.target.value);

        if (validate) {
          document.getElementById("msg-uf-naturalidade").innerHTML = "";
          return (formDataBasic.uf_naturalidade = e.target.value);
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-uf-naturalidade").innerHTML =
            "<p>Opção inválida!</p>";
          return (formDataBasic.uf_naturalidade = false);
        }
      });
    }

    const deficiencias = document.getElementById("deficiencias");

    const descDiv = document.querySelector(".descricao-deficiencia");

    if (deficiencias) {
      let validate;

      deficiencias.addEventListener("input", (e) => {
        validate = isDeficiente(listDeficiencias, e.target.value);

        if (validate) {
          document.getElementById("msg-deficiencias").innerHTML = "";
          formDataBasic.deficiencia = e.target.value;
        } else {
          e.preventDefault();
          // Enviar para o HTML a mensagem de erro
          document.getElementById("msg-deficiencias").innerHTML =
            "<p>Opção inválida!</p>";
          formDataBasic.deficiencia = false;
        }
      });

      deficiencias.addEventListener("input", (e) => {
        if (e.target.value != "Selecione" && e.target.value != "N") {
          formDataBasic.deficiencia = false;
          const descricoesInputs = document.querySelectorAll(".descricoes");
          if (descricoesInputs.length === 0) {
            const descLabel = document.createElement("label");
            const descInput = document.createElement("input");
            descDiv.appendChild(descLabel);
            descLabel.innerText = "Descreva a deficiência";
            descLabel.setAttribute("for", "descricao");
            descDiv.appendChild(descInput);
            descInput.setAttribute("id", "descricao");
            descInput.setAttribute("class", "descricoes");
            descInput.setAttribute("name", "descricaoDeficiencia");
            descInput.setAttribute("maxlength", "255");
            const paragrafoObgtr = document.createElement("p");
            paragrafoObgtr.setAttribute("class", "obrigatorio");
            paragrafoObgtr.innerText = "Obrigatório";
            descDiv.appendChild(paragrafoObgtr);
          }
        } else {
          descDiv.innerHTML = "";
          document.getElementById("msg-descricao").innerHTML = "";
          formDataBasic.deficiencia_descricao = "";
        }
      });
    }

    document.addEventListener("input", (e) => {
      const element = e.target;

      let validateDescricoes;

      if (element.classList.contains("descricoes")) {
        validateDescricoes = isDescricao(element.value);

        if (validateDescricoes) {
          formDataBasic.deficiencia = deficiencias.value;
          formDataBasic.deficiencia_descricao = element.value;
          document.getElementById("msg-descricao").innerHTML = "";
        } else {
          formDataBasic.deficiencia = false;
          formDataBasic.deficiencia_descricao = false;
          document.getElementById("msg-descricao").innerHTML =
            "<p>Favor descrever a deficiência.</p>";
        }
      }
    });

    if (formData) {
      formData.addEventListener("submit", (e) => {
        e.preventDefault();
        if (
          formDataBasic.nome &&
          formDataBasic.nomemae &&
          formDataBasic.naturalidade &&
          formDataBasic.nacionalidade &&
          formDataBasic.estadocivil &&
          formDataBasic.dt_nascimento &&
          formDataBasic.sexo &&
          formDataBasic.uf_naturalidade &&
          formDataBasic.deficiencia &&
          formDataBasic.rg &&
          formDataBasic.orgaoexpedidor &&
          formDataBasic.idade &&
          formDataBasic.cpf &&
          formDataBasic.nome_social !== false          
        ) {
          changeMains(".screen-address");
          changeSubMainTitle("Formulário de Endereço");
          resolve(formDataBasic);
        } else {
          document.getElementById("msg-fracasso").innerHTML =
            "<p>Formulário incompleto!</p>";
          erroInput(formDataBasic);
          erroSelect(".form-data select");
          removerMensagem("msg-fracasso");
        }
      });
    } else {
      reject(new Error("O formulário não foi encontrado!"));
    }
  });
};

module.exports = initDataBasic;