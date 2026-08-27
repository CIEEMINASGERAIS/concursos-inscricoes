const { isNumero, isComplemento, isTelefone, isEmail, changeMains, changeSubMainTitle, removerMensagem, isCep, isNaturalidadeNacionalidade, isUfNaturalidade, emailBd, erroInputAddress } = require('../utils/util.js')
const { cadastro } = require('../../src/services/fetch.js')
const { clientLogger } = require("../utils/clientLogger.js");

async function initAddress() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('address')
    const htmlContent = await response.text()

    const address = document.querySelector('.screen-address')

    address.innerHTML = htmlContent

    const form = document.querySelector('.form-address')

    const formDataAddress = {}

    const cep = document.getElementById('cep')

    const logradouro = document.getElementById('logradouro')

    const uf = document.getElementById('uf')

    const bairro = document.getElementById('bairro')

    const cidade = document.getElementById('cidade')

    const btnCep = document.querySelector('.btn-cep')

    logradouro.setAttribute('disabled', 'true');
    uf.setAttribute('disabled', 'true');
    bairro.setAttribute('disabled', 'true');
    cidade.setAttribute('disabled', 'true');

    if (cep) {

      const cepFound = document.querySelector('.cep-found')

      let endereco

      const validationAddress = (validateCep) => {
        if (validateCep) {

          let validate = false

          let valores

          valores = endereco.map(logradouro => logradouro.logradouro)
          logradouro.value = valores[0]
          validate = isNaturalidadeNacionalidade(logradouro.value)
          if (validate) {
            document.getElementById("msg-logradouro").innerHTML = ""
            formDataAddress.logradouro = logradouro.value
          } else {
            document.getElementById("msg-logradouro").innerHTML =
              "<p>Logradouro inválido!</p>"
            formDataAddress.logradouro = false
          }
          valores = endereco.map(uf => uf.uf)
          uf.value = valores[0]
          validate = (isUfNaturalidade(uf.value))
          if (validate) {
            document.getElementById("msg-uf").innerHTML = ""
            formDataAddress.uf = uf.value
          } else {
            document.getElementById("msg-uf").innerHTML =
              "<p>UF inválido!</p>"
            formDataAddress.uf = false
          }
          valores = endereco.map(bairro => bairro.bairro)
          bairro.value = valores[0]
          validate = (isNaturalidadeNacionalidade(bairro.value))
          if (validate) {
            document.getElementById("msg-bairro").innerHTML = ""
            formDataAddress.bairro = bairro.value
          } else {
            document.getElementById("msg-bairro").innerHTML =
              "<p>Bairro inválido!</p>"
            formDataAddress.bairro = false
          }
          valores = endereco.map(cidade => cidade.cidade)
          cidade.value = valores[0]
          validate = (isNaturalidadeNacionalidade(cidade.value))
          if (validate) {
            document.getElementById("msg-cidade").innerHTML = ""
            formDataAddress.cidade = cidade.value
          } else {
            document.getElementById("msg-cidade").innerHTML =
              "<p>Cidade inválido!</p>"
            formDataAddress.cidade = false
          }

          // Validação do CEP bem-sucedida, permitir que o usuário digite nos campos
          logradouro.removeAttribute('disabled');
          bairro.removeAttribute('disabled');
          cidade.removeAttribute('disabled');
        } else {

          // Validação do CEP falhou, desabilitar os campos
          logradouro.setAttribute('disabled', 'true');
          bairro.setAttribute('disabled', 'true');
          cidade.setAttribute('disabled', 'true');

          logradouro.value = ''
          uf.value = ''
          bairro.value = ''
          cidade.value = ''

          formDataAddress.logradouro = false
          formDataAddress.uf = false
          formDataAddress.bairro = false
          formDataAddress.cidade = false

          cepFound.style.display = 'block'

          if (cepFound.style.display === 'block') {

            document.addEventListener('click', e => {

              const element = e.target

              if (element.classList.contains('button-confirm-cep')) {
                cepFound.style.display = 'none'
              }
            })
          }
        }
      }

      cep.addEventListener('input', async e => {

        const campoDisabled = document.getElementById("logradouro").getAttribute("disabled")

        if (campoDisabled) {
          document.getElementById("msg-logradouro").innerHTML = "<p>Clique em procurar no campo CEP para liberar os campos bloqueados.</p>"
        }

        let dadosCep

        let validate

        let cepSemPonto = e.target.value.replace(/[^0-9]/g, '')

        e.target.value = e.target.value.replace(/\D/g, '')
        e.target.value = e.target.value.replace(/(\d{5})(\d)/, '$1-$2')
        e.target.value = e.target.value.replace(/(-\d{3})\d+?$/, '$1')

        if (e.target.value.length === 9) {
          try {
            const response = await fetch(`/cadastrarEndereco?termo=${cepSemPonto}`)
            if (response.ok) {
              const opcoes = await response.json()
              endereco = opcoes
              dadosCep = endereco.map(cep => cep.cep)

            } else {
              clientLogger.warn('FALHA_BUSCA_CEP', { status: response.status, statusText: response.statusText });
            }
          } catch (error) {
            clientLogger.error('ERRO_BUSCA_CEP', { mensagem: error?.message });
          }
        }

        validate = isCep(e.target.value)

        if (validate && dadosCep[0]) {

          formDataAddress.cep = e.target.value

          document.getElementById("msg-cep").innerHTML = ""
        } else {
          e.preventDefault()
          document.getElementById("msg-cep").innerHTML = "<p>CEP inválido!</p>"

          return (formDataAddress.cep = false)
        }
      })

      cep.addEventListener('keydown', e => {
        if (e.key === "Enter") {
          let validateCep = false

          validateCep = isCep(formDataAddress.cep)

          validationAddress(validateCep)
        }
      })

      if (btnCep) {

        btnCep.addEventListener('click', e => {

          let validateCep = false

          validateCep = isCep(formDataAddress.cep)

          validationAddress(validateCep)
        })
      }
    }

    if (logradouro) {

      logradouro.addEventListener('input', e => {

        let value = e.target.value

        let validate = isNaturalidadeNacionalidade(value)

        if (validate) {
          document.getElementById("msg-logradouro").innerHTML = ""
          formDataAddress.logradouro = value
        } else {
          document.getElementById("msg-logradouro").innerHTML =
            "<p>Logradouro inválido!</p>"
          formDataAddress.logradouro = false
        }
      })
    }

    if (bairro) {

      bairro.addEventListener('input', e => {

        let value = e.target.value

        let validate = (isNaturalidadeNacionalidade(value))

        if (validate) {
          document.getElementById("msg-bairro").innerHTML = ""
          formDataAddress.bairro = value
        } else {
          document.getElementById("msg-bairro").innerHTML =
            "<p>Bairro inválido!</p>"
          formDataAddress.bairro = false
        }
      })
    }

    if (cidade) {

      cidade.addEventListener('input', e => {

        let value = e.target.value

        let validate = (isNaturalidadeNacionalidade(value))

        if (validate) {
          document.getElementById("msg-cidade").innerHTML = ""
          formDataAddress.cidade = value
        } else {
          document.getElementById("msg-cidade").innerHTML =
            "<p>Cidade inválido!</p>"
          formDataAddress.cidade = false
        }
      })
    }

    const numero = document.getElementById('numero')

    if (numero) {

      let validate

      numero.addEventListener('input', e => {

        e.target.value = e.target.value.replace(/\D/g, '')

        validate = isNumero(e.target.value)

        if (validate) {
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-numero').innerHTML = ""
          formDataAddress.numero = e.target.value
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-numero').innerHTML =
            "<p>Valor inválido!</p>"
          formDataAddress.numero = false
        }

      })
    }

    const complemento = document.getElementById('complemento')

    if (complemento) {

      let validate

      complemento.addEventListener('input', e => {

        validate = isComplemento(e.target.value)

        if (validate) {
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-complemento').innerHTML = ""
          return formDataAddress.complemento = e.target.value
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-complemento').innerHTML =
            "<p>Valor inválido!</p>"
          return formDataAddress.complemento = " "
        }
      })
    }

    const telefone1 = document.getElementById('telefone1')

    if (telefone1) {

      let validate

      telefone1.addEventListener('input', e => {

        e.target.value = e.target.value.replace(/\D/g, '')
        e.target.value = e.target.value.replace(/(\d{2})(\d)/, "($1) $2")
        e.target.value = e.target.value.replace(/(\d)(\d{4})$/, "$1-$2")

        validate = isTelefone(e.target.value)

        if (validate) {
          const telefone1SemSimbolo = e.target.value.replace(/\D/g, '')
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-telefone1').innerHTML = ""
          return formDataAddress.telefone1 = telefone1SemSimbolo
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-telefone1').innerHTML =
            "<p>Telefone inválido!</p>"
          return (formDataAddress.telefone1 = false)
        }

      })
    }

    const telefone2 = document.getElementById('telefone2')

    if (telefone2) {

      let validate

      telefone2.addEventListener('input', e => {

        e.target.value = e.target.value.replace(/\D/g, '')
        e.target.value = e.target.value.replace(/(\d{2})(\d)/, "($1) $2")
        e.target.value = e.target.value.replace(/(\d)(\d{4})$/, "$1-$2")

        validate = isTelefone(e.target.value)

        if (validate) {
          const telefone2SemSimbolo = e.target.value.replace(/\D/g, '')
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-telefone2').innerHTML = ""
          return (formDataAddress.telefone2 = telefone2SemSimbolo)
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-telefone2').innerHTML =
            "<p>Telefone inválido!</p>"
          return (formDataAddress.telefone2 = false)
        }
      })
    }

    const email = document.getElementById('email')

    // Variáveis de controle do debounce/validação. São usadas tanto pelo
    // listener `input` quanto pelo handler de submit (que precisa saber
    // se ainda há uma checagem em curso ou pendente).
    let emailTimer = null;
    let emailInFlight = false;
    let emailLastChecked = null;
    let emailLastCheckedValue = null;

    if (email) {

      let validateInput, validateFocus

      email.addEventListener('input', e => {

        validateInput = isEmail(e.target.value)

        if (validateInput) {
          // Formato OK. Limpa erro de formato e agenda checagem no backend.
          document.getElementById('msg-email').innerHTML = "";
          if (emailTimer) clearTimeout(emailTimer);
          emailTimer = setTimeout(async () => {
            if (emailInFlight) return;
            emailInFlight = true;
            const valorChecado = email.value;
            try {
              const resultado = await emailBd(valorChecado);
              // Só aplica o resultado se o usuário não tiver mexido no
              // campo enquanto esperávamos o backend responder.
              if (email.value !== valorChecado) return;
              if (resultado.status === "ok") {
                if (isEmail(email.value)) {
                  formDataAddress.email = email.value;
                  document.getElementById('msg-email').innerHTML = "";
                  emailLastChecked = Date.now();
                  emailLastCheckedValue = email.value;
                }
              } else if (resultado.status === "duplicado") {
                formDataAddress.email = false;
                document.getElementById('msg-email').innerHTML =
                  `<span><p>${resultado.mensagem || "E-mail já cadastrado!"}</p></span>`;
              } else if (resultado.status === "falha_rede") {
                formDataAddress.email = false;
                document.getElementById('msg-email').innerHTML =
                  `<span><p>${resultado.mensagem}</p></span>`;
              }
            } finally {
              emailInFlight = false;
            }
          }, 400);
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-email').innerHTML =
            "<span><p>E-mail inválido!</p></span>"
          formDataAddress.email = false
          if (emailTimer) clearTimeout(emailTimer);
        }
      })

    }

    const linkedin = document.getElementById('linkedin')

    if (linkedin) {
      linkedin.addEventListener('input', e => {
        formDataAddress.linkedin = e.target.value.trim()
      })
    }

    const instagram = document.getElementById('instagram')

    if (instagram) {
      instagram.addEventListener('input', e => {
        formDataAddress.instagram = e.target.value.trim()
      })
    }

    if (form) {
      form.addEventListener('submit', async e => {
        e.preventDefault()

        const linkedinInput = document.getElementById('linkedin')
        const instagramInput = document.getElementById('instagram')

        if (linkedinInput) {
          formDataAddress.linkedin = linkedinInput.value.trim()
        }

        if (instagramInput) {
          formDataAddress.instagram = instagramInput.value.trim()
        }

        // Garante que o email foi validado contra o backend antes de
        // submeter. Sem o `onblur` (removido), o único caminho é o
        // listener `input` — então precisamos cobrir o caso do usuário
        // clicar em "Avançar" antes do debounce de 400ms disparar.
        if (email && isEmail(email.value)) {
          const valorAtual = email.value;
          const checagemEmCurso =
            emailTimer !== null || emailInFlight;
          const precisaChecar =
            checagemEmCurso ||
            emailLastCheckedValue !== valorAtual;

          if (precisaChecar) {
            // Cancela o debounce pendente para não rodar duas vezes.
            if (emailTimer) {
              clearTimeout(emailTimer);
              emailTimer = null;
            }
            document.getElementById('msg-email').innerHTML =
              "<span>Verificando e-mail...</span>";
            formDataAddress.email = false;

            const resultado = await emailBd(valorAtual);
            if (resultado.status === "ok" && email.value === valorAtual) {
              formDataAddress.email = email.value;
              document.getElementById('msg-email').innerHTML = "";
              emailLastChecked = Date.now();
              emailLastCheckedValue = email.value;
            } else if (resultado.status === "duplicado") {
              document.getElementById('msg-email').innerHTML =
                `<span><p>${resultado.mensagem || "E-mail já cadastrado!"}</p></span>`;
            } else if (resultado.status === "falha_rede") {
              document.getElementById('msg-email').innerHTML =
                `<span><p>${resultado.mensagem}</p></span>`;
            }
          }
        }

        if (
          formDataAddress.cep && formDataAddress.logradouro && formDataAddress.numero && formDataAddress.uf
          && formDataAddress.bairro && formDataAddress.cidade && formDataAddress.telefone1
          && formDataAddress.email
          // formDataAddress
        ) {
          changeMains('.screen-school-data')
          changeSubMainTitle('Formulário de Dados de Cursos')
          resolve(formDataAddress)
        } else {
          erroInputAddress(formDataAddress)
          removerMensagem('msg-fracasso-address')
        }
      })


    } else {
      console.log('Erro ao buscar dados do formulário')
      reject(error)
    }
  })
}

module.exports = initAddress;
