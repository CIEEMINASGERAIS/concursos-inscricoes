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
  isGenero,
  isUfNaturalidade,
  isDeficiente,
  isDescricao,
  removerMensagem,
  isRg,
  isComplemento,
  age,
  cpfInBd,
  cpfsConflitam,
  MSG_VALOR_DUPLICADO,
  MSG_VALOR_NAO_PERMITIDO,
  erroInput,
  erroSelect,
  CreateInputLabel
} = require("../utils/util.js");

const { clientLogger } = require("../utils/clientLogger.js");

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
          // Persistir SEM espaços nas pontas — o backend valida len:[3,255]
          // contando caracteres brutos, então "  João Silva  " (15) passaria,
          // mas " João " (6) pode falhar em outras regras (regex sem número).
          // Trim aqui garante paridade com a validação do backend.
          return (formDataBasic.nome = e.target.value.trim());
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

    checkNomeSocial.addEventListener("change", function () {
      if (checkNomeSocial.checked) {
        if (!document.querySelector('.nome-social')) {
          new CreateInputLabel(divNomeSocial, "Nome Social", "nome-social")
        }

        // Enquanto estiver marcado, exige que o campo dinâmico seja
        // preenchido e validado pelo listener de input abaixo.
        formDataBasic.nome_social = false
      } else {
        const div = document.querySelector("#div-nome-social")
        if (div) div.remove()

        // Nome social é opcional quando a checkbox está desmarcada.
        // Remover a chave também elimina um eventual `false` deixado por
        // uma edição inválida antes de o usuário desmarcar a opção.
        delete formDataBasic.nome_social
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
      let cpfTimer = null;
      let cpfInFlight = false;

      inputCpf.addEventListener("input", async (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        e.target.value = e.target.value.replace(/(\d{3})(\d)/, "$1.$2");
        e.target.value = e.target.value.replace(/(\d{3})(\d)/, "$1.$2");
        e.target.value = e.target.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        validate = isCpf(e.target.value);

        if (validate) {
          // Bloqueia se o CPF do candidato coincidir com o da mãe ou
          // do pai já preenchidos. Comparação com máscara porque é
          // como o input grava e o banco armazena.
          const cpfMae = document.getElementById("cpf-mae");
          const cpfPai = document.getElementById("cpf-pai");
          if (
            (cpfMae && cpfsConflitam(e.target.value, cpfMae.value)) ||
            (cpfPai && cpfsConflitam(e.target.value, cpfPai.value))
          ) {
            document.getElementById("msg-cpf").innerHTML =
              `<p>${MSG_VALOR_DUPLICADO}</p>`;
            formDataBasic.cpf = false;
            return;
          }
          document.getElementById("msg-cpf").innerHTML = "";
          // Só dispara a checagem no backend quando o usuário parou de digitar.
          if (cpfTimer) clearTimeout(cpfTimer);
          cpfTimer = setTimeout(async () => {
            if (cpfInFlight) return;
            cpfInFlight = true;
            try {
              const resultado = await cpfInBd(e.target.value);
              if (resultado.status === "ok") {
                formDataBasic.cpf = e.target.value;
                document.getElementById("msg-cpf").innerHTML = "";
              } else if (resultado.status === "duplicado") {
                document.getElementById("msg-cpf").innerHTML =
                  `<p>${resultado.mensagem || "CPF já cadastrado!"}</p>`;
                formDataBasic.cpf = false;
              } else if (resultado.status === "falha_rede") {
                // Bloqueia avanço — não vamos submeter um cadastro que
                // não conseguimos validar contra o banco.
                document.getElementById("msg-cpf").innerHTML =
                  `<p>${resultado.mensagem}</p>`;
                formDataBasic.cpf = false;
              } else {
                // fallback defensivo
                formDataBasic.cpf = e.target.value;
                document.getElementById("msg-cpf").innerHTML = "";
              }
            } finally {
              cpfInFlight = false;
            }
          }, 400);
        } else {
          // Enquanto o usuário ainda digita, não marcamos como inválido.
          const soDigitos = e.target.value.replace(/\D/g, "");
          if (soDigitos.length < 11) {
            delete formDataBasic.cpf;
            document.getElementById("msg-cpf").innerHTML = "";
          } else {
            document.getElementById("msg-cpf").innerHTML = "<p>CPF inválido!</p>";
            formDataBasic.cpf = false;
          }
        }
      });
    }

    const inputCpfPais = document.querySelector(".cpf-pais");

    if (inputCpfPais) {
      let validate;

      document.addEventListener("input", async (e) => {

        const element = e.target;

        if (element.classList.contains('cpf-pais')) {

          element.value = element.value.replace(/\D/g, "");
          element.value = element.value.replace(/(\d{3})(\d)/, "$1.$2");
          element.value = element.value.replace(/(\d{3})(\d)/, "$1.$2");
          element.value = element.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

          validate = isCpf(element.value);

          if (validate) {
            // Bloqueia se o CPF do pai/da mãe coincidir com o CPF
            // do próprio candidato já preenchido.
            const cpfProprio = document.getElementById("cpf");
            if (cpfProprio && cpfsConflitam(element.value, cpfProprio.value)) {
              if (element.classList.contains('mamae')) {
                document.getElementById("msg-cpf-mae").innerHTML =
                  `<p>${MSG_VALOR_NAO_PERMITIDO}</p>`;
                formDataBasic.cpf_mae = false;
              } else {
                document.getElementById("msg-cpf-pai").innerHTML =
                  `<p>${MSG_VALOR_NAO_PERMITIDO}</p>`;
                formDataBasic.cpf_pai = false;
              }
              return;
            }
            // Bloqueia cruzamento entre os dois pais (mãe == pai).
            const outroPai = element.classList.contains('mamae')
              ? document.getElementById("cpf-pai")
              : document.getElementById("cpf-mae");
            if (outroPai && cpfsConflitam(element.value, outroPai.value)) {
              if (element.classList.contains('mamae')) {
                document.getElementById("msg-cpf-mae").innerHTML =
                  `<p>${MSG_VALOR_DUPLICADO}</p>`;
                formDataBasic.cpf_mae = false;
              } else {
                document.getElementById("msg-cpf-pai").innerHTML =
                  `<p>${MSG_VALOR_DUPLICADO}</p>`;
                formDataBasic.cpf_pai = false;
              }
              return;
            }
            if (element.classList.contains('mamae')) {
              formDataBasic.cpf_mae = element.value;
            } else {
              formDataBasic.cpf_pai = element.value;
            }

            document.getElementById("msg-cpf-mae").innerHTML = "";
            document.getElementById("msg-cpf-pai").innerHTML = "";
          } else {
            e.preventDefault();
            // Enviar para o HTML a mensagem de erro

            if (element.classList.contains('mamae') && element.value.length > 0) {
              formDataBasic.cpf_mae = false;
              document.getElementById("msg-cpf-mae").innerHTML = "<p>CPF inválido!</p>";
            }

            if (element.classList.contains('mamae') && element.value.length === 0) {
              formDataBasic.cpf_mae = '';
              document.getElementById("msg-cpf-mae").innerHTML = "<p>CPF inválido!</p>";
              removerMensagem("msg-cpf-mae");
            }

            if (element.classList.contains('papai') && element.value.length > 0) {
              formDataBasic.cpf_pai = false;
              document.getElementById("msg-cpf-pai").innerHTML = "<p>CPF inválido!</p>";
            }

            if (element.classList.contains('papai') && element.value.length === 0) {
              formDataBasic.cpf_pai = '';
              document.getElementById("msg-cpf-pai").innerHTML = "<p>CPF inválido!</p>";
              removerMensagem("msg-cpf-pai");
            }
          }
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

    // Genero (radio: H | M | N | P | A)
    // Quando a opção "A" (Prefiro me autodescrever) é escolhida,
    // um input de texto livre é mostrado para descrever a identidade.
    // O backend grava esse texto em `genero_descricao` (VARCHAR 255).
    const radiosGenero = document.querySelectorAll('input[name="genero"]');
    const inputGeneroDescricao = document.getElementById("genero-descricao");
    const divGeneroDescricao = document.getElementById("div-genero-descricao");

    const atualizarVisibilidadeGeneroDescricao = (valor) => {
      if (!divGeneroDescricao) return;
      if (valor === "A") {
        divGeneroDescricao.classList.remove("hide");
      } else {
        divGeneroDescricao.classList.add("hide");
        if (inputGeneroDescricao) {
          inputGeneroDescricao.value = "";
          document.getElementById("msg-genero-descricao")?.replaceChildren();
        }
        formDataBasic.genero_descricao = "";
      }
    };

    const validarGenero = () => {
      const marcado = Array.from(radiosGenero).find((r) => r.checked);
      formDataBasic.genero = marcado ? marcado.value : false;
      atualizarVisibilidadeGeneroDescricao(formDataBasic.genero);
    };
    if (radiosGenero.length > 0) {
      radiosGenero.forEach((radio) => {
        radio.addEventListener("change", () => {
          document.getElementById("msg-genero")?.replaceChildren();
          validarGenero();
        });
      });
    }

    // Listener do input de descrição — só fica ativo quando visível
    // (a validação no submit cobre o caso "escondeu sem apagar").
    if (inputGeneroDescricao) {
      inputGeneroDescricao.addEventListener("input", (e) => {
        formDataBasic.genero_descricao = e.target.value.trim();
        document.getElementById("msg-genero-descricao")?.replaceChildren();
      });
    }

    // Etnia (radio: N | B | P | A | I)
    const radiosEtnia = document.querySelectorAll('input[name="etnia"]');
    const validarEtnia = () => {
      const marcado = Array.from(radiosEtnia).find((r) => r.checked);
      formDataBasic.etnia = marcado ? marcado.value : false;
    };
    if (radiosEtnia.length > 0) {
      radiosEtnia.forEach((radio) => {
        radio.addEventListener("change", () => {
          document.getElementById("msg-etnia")?.replaceChildren();
          validarEtnia();
        });
      });
    }

    const deficiencias = document.getElementById("deficiencias");

    const descDiv = document.querySelector(".descricao-deficiencia");
    const laudoDeficiencia = document.getElementById("laudo-deficiencia");
    const divLaudoDeficiencia = document.getElementById("div-laudo-deficiencia");

    const atualizarVisibilidadeLaudo = (valorDeficiencia) => {
      // Laudo passou a ser OPCIONAL no fluxo publico (regra de negocio
      // revista). Continuamos mostrando o campo para deficiencias que
      // historicamente exigiam laudo (F, A, V, ME, MU, TE), mas o
      // atributo `required` NAO e mais setado — o usuario pode avancar
      // mesmo sem anexar o arquivo.
      const precisaLaudo = ["F", "A", "V", "ME", "MU", "TE"].includes(valorDeficiencia);

      if (!divLaudoDeficiencia || !laudoDeficiencia) {
        return;
      }

      divLaudoDeficiencia.classList.toggle("hide", !precisaLaudo);
      divLaudoDeficiencia.classList.toggle("show", precisaLaudo);
      laudoDeficiencia.required = false;

      if (!precisaLaudo) {
        laudoDeficiencia.value = "";
        formDataBasic.laudo_deficiencia_nome = "";
        formDataBasic.laudo_deficiencia_base64 = "";
        formDataBasic.laudo_deficiencia_tipo = "";
      }
    };

    if (laudoDeficiencia) {
      // Limite alinhado com `client_max_body_size 10m` do nginx e com
      // `express.json/urlencoded({ limit: "5mb" })` do app.js.
      // Limite mais restritivo no cliente (5 MB) para nao saturar
      // o body parser do servidor com uploads que serao rejeitados.
      // Se o usuário selecionar arquivo maior, rejeitamos no cliente
      // antes de gastar banda com upload que vai falhar no servidor.
      const LIMITE_LAUDO_BYTES = 5 * 1024 * 1024;
      const msgLaudoLimite = document.getElementById("msg-laudo-limite");
      const botaoAvanco = document.querySelector(".big-address");
      // Tipos MIME aceitos para o laudo: imagens (qualquer subtipo
      // image/*) e PDF. Validamos o tipo ANTES do tamanho para que a
      // mensagem de erro seja especifica (formato vs tamanho).
      const formatoAceito = (tipo) =>
        (typeof tipo === "string" && (tipo === "application/pdf" || tipo.startsWith("image/")));

      laudoDeficiencia.addEventListener("change", (e) => {
        const arquivo = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        if (!arquivo) {
          formDataBasic.laudo_deficiencia_nome = "";
          formDataBasic.laudo_deficiencia_base64 = "";
          formDataBasic.laudo_deficiencia_tipo = "";
          if (msgLaudoLimite) {
            msgLaudoLimite.textContent = "";
            msgLaudoLimite.classList.remove("msg-laudo-limite-erro");
          }
          if (botaoAvanco) botaoAvanco.disabled = false;
          return;
        }

        if (!formatoAceito(arquivo.type)) {
          // Formato nao suportado. Limpa input/estado, avisa o usuario
          // listando os formatos aceitos e o limite de tamanho, e
          // bloqueia o botao de avancar.
          laudoDeficiencia.value = "";
          formDataBasic.laudo_deficiencia_nome = "";
          formDataBasic.laudo_deficiencia_base64 = "";
          formDataBasic.laudo_deficiencia_tipo = "";
          if (msgLaudoLimite) {
            msgLaudoLimite.classList.add("msg-laudo-limite-erro");
            msgLaudoLimite.textContent =
              `"${arquivo.name}" não é um formato valido ou acima de 5 MB, upload cancelado.`;
          }
          if (botaoAvanco) botaoAvanco.disabled = true;
          return;
        }

        if (arquivo.size > LIMITE_LAUDO_BYTES) {
          // Limpa o input, o estado do form e avisa o usuário
          laudoDeficiencia.value = "";
          formDataBasic.laudo_deficiencia_nome = "";
          formDataBasic.laudo_deficiencia_base64 = "";
          formDataBasic.laudo_deficiencia_tipo = "";
          if (msgLaudoLimite) {
            msgLaudoLimite.classList.add("msg-laudo-limite-erro");
            msgLaudoLimite.textContent = `"${arquivo.name}" não é um formato valido ou acima de 5 MB, upload cancelado.`;
          }
          if (botaoAvanco) botaoAvanco.disabled = true;
          return;
        }

        if (msgLaudoLimite) {
          msgLaudoLimite.textContent = "";
          msgLaudoLimite.classList.remove("msg-laudo-limite-erro");
        }
        if (botaoAvanco) botaoAvanco.disabled = false;

        formDataBasic.laudo_deficiencia_nome = arquivo.name;
        formDataBasic.laudo_deficiencia_tipo = arquivo.type;

        const reader = new FileReader();
        reader.onload = () => {
          formDataBasic.laudo_deficiencia_base64 = reader.result;
        };
        reader.onerror = () => {
          formDataBasic.laudo_deficiencia_base64 = false;
        };
        reader.readAsDataURL(arquivo);
      });
    }

    if (deficiencias) {
      let validate;

      deficiencias.addEventListener("change", (e) => {
        atualizarVisibilidadeLaudo(e.target.value);

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

      deficiencias.addEventListener("change", (e) => {
        if (e.target.value != "Selecione" && e.target.value != "N") {
          formDataBasic.deficiencia = false;
          const descricoesInputs = document.querySelectorAll(".descricoes");
          if (descricoesInputs.length === 0) {
            const descLabel = document.createElement("label");
            const descInput = document.createElement("input");
            descDiv.appendChild(descLabel);
            descLabel.innerText = "Descreva sua necessidade";
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

      atualizarVisibilidadeLaudo(deficiencias.value);
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

    function validateLaudo() {
      // Laudo deficiencia agora e OPCIONAL. Mesmo quando o usuario
      // declara uma das deficiencias que historicamente exigiam laudo
      // (F, A, V, ME, MU, TE), ele pode avancar no cadastro sem
      // anexar o arquivo. Backend tambem passou a tratar o laudo
      // como opcional (src/controllers/postCadastrar.js).
      return true;
    }

    function showTag(div) {
      div.querySelector('.hide').classList.add("show");
      div.querySelector('.show').classList.remove("hide");
    }

    function hideTag(div) {
      const show = div.querySelector('.show');
      show.classList.add("hide");
    }

    const checkRg = document.getElementById("check-rg");

    const divRg = document.querySelector(".div-number-1-2");

    checkRg.addEventListener("change", function (e) {
      const element = e.target;

      if (element.checked) {
        showTag(divRg)
        divRg.querySelector('input[name="rg"]').required = true;
      }

      if (!element.checked) {
        hideTag(divRg)
        divRg.querySelector('input[name="rg"]').required = false;
      }
    })

    if (formData) {
      formData.addEventListener("submit", (e) => {
        e.preventDefault();
        // Validação final do CPF no submit (cobre digitação sem debounce terminar).
        const cpfCampo = document.querySelector(".cpf");
        if (cpfCampo && !isCpf(cpfCampo.value)) {
          formDataBasic.cpf = false;
        }
        // Re-avalia genero/etnia no submit (cobre o caso do usuário
        // marcar e submeter sem disparar o `change`).
        validarGenero();
        validarEtnia();

        // Garante que a descrição (campo livre) seja enviada sempre
        // — quando "A" não foi escolhido, fica como string vazia.
        if (formDataBasic.genero !== "A") {
          formDataBasic.genero_descricao = "";
        }
        const invalidFields = Object.entries(formDataBasic)
          .filter(([, value]) => value === false)
          .map(([key]) => key);
        if (
          // formDataBasic
          formDataBasic.nome &&
          formDataBasic.nomemae &&
          formDataBasic.naturalidade &&
          formDataBasic.nacionalidade &&
          formDataBasic.estadocivil &&
          formDataBasic.dt_nascimento &&
          formDataBasic.sexo &&
          formDataBasic.uf_naturalidade &&
          formDataBasic.deficiencia &&
          formDataBasic.genero &&
          // Quando "Prefiro me autodescrever" (A) é escolhido,
          // a descrição é obrigatória e deve passar por isDescricao.
          (formDataBasic.genero !== "A" ||
            (formDataBasic.genero_descricao &&
              isDescricao(formDataBasic.genero_descricao))) &&
          formDataBasic.etnia &&
          formDataBasic.rg !== false &&
          formDataBasic.orgaoexpedidor &&
          formDataBasic.idade &&
          formDataBasic.cpf &&
          formDataBasic.cpf_mae !== false &&
          formDataBasic.cpf_pai !== false &&
          (!checkNomeSocial.checked || Boolean(formDataBasic.nome_social)) &&
          validateLaudo()
        ) {
          if (!checkRg.checked) {
            formDataBasic.rg = formDataBasic.cpf.replace(/\D/g, "");;
          }
          changeMains(".screen-address");
          changeSubMainTitle("Formulário de Endereço");
          resolve(formDataBasic);
        } else {
          if (invalidFields.length > 0) {
            clientLogger.warn("FORM_BASICO_CAMPOS_INVALIDOS", { campos: invalidFields });
            document.getElementById("msg-fracasso").innerHTML =
              `<p>Formulário incompleto: ${invalidFields.join(", ")}</p>`;
          } else {
            clientLogger.warn("FORM_BASICO_BLOQUEADO");
            document.getElementById("msg-fracasso").innerHTML =
              "<p>Formulário incompleto!</p>";
          }
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
