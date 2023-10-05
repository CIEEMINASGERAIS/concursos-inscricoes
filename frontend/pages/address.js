const { isNumero, isComplemento, isTelefone, isEmail, changeMains, changeSubMainTitle, removerMensagem, isCep, isNaturalidadeNacionalidade, isUfNaturalidade, emailBd } = require('../utils/util.js')

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

    if (cep) {

      const cepFound = document.querySelector('.cep-found')

      let endereco

      cep.addEventListener('input', async e => {

        let dadosCep

        let validate

        let cepSemPonto = e.target.value.replace(/[^0-9]/g, '')

        e.target.value = e.target.value.replace(/\D/g, '')
        e.target.value = e.target.value.replace(/(\d{5})(\d)/, '$1-$2')
        e.target.value = e.target.value.replace(/(-\d{3})\d+?$/, '$1')

        try {
          const response = await fetch(
            `http://appcadastro.cieemg.org.br/cadastrarEndereco?termo=${cepSemPonto}`
          )
          if (response.ok) {
            const opcoes = await response.json()
            endereco = opcoes
            dadosCep = endereco.map(cep => cep.cep)

          } else {
            console.log('Erro na solicitação:', response.statusText)
          }
        } catch (error) {
          console.error('Erro:', error)
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

      if (btnCep) {

        btnCep.addEventListener('click', e => {

          let validateCep = false

          validateCep = isCep(formDataAddress.cep)

          if (validateCep) {

            let validate = false

            logradouro.value = endereco.map(logradouro => logradouro.logradouro)
            validate = isNaturalidadeNacionalidade(logradouro.value)
            if (validate) {
              document.getElementById("msg-logradouro").innerHTML = ""
              formDataAddress.logradouro = logradouro.value
            } else {
              document.getElementById("msg-logradouro").innerHTML =
                "<p>Logradouro inválido!</p>"
              formDataAddress.logradouro = false
            }
            uf.value = endereco.map(uf => uf.uf)
            validate = (isUfNaturalidade(uf.value))
            if (validate) {
              document.getElementById("msg-uf").innerHTML = ""
              formDataAddress.uf = uf.value
            } else {
              document.getElementById("msg-uf").innerHTML =
                "<p>UF inválido!</p>"
              formDataAddress.uf = false
            }
            bairro.value = endereco.map(bairro => bairro.bairro)
            validate = (isNaturalidadeNacionalidade(bairro.value))
            if (validate) {
              document.getElementById("msg-bairro").innerHTML = ""
              formDataAddress.bairro = bairro.value
            } else {
              document.getElementById("msg-bairro").innerHTML =
                "<p>Bairro inválido!</p>"
              formDataAddress.bairro = false
            }
            cidade.value = endereco.map(cidade => cidade.cidade)
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
            uf.removeAttribute('disabled');
            bairro.removeAttribute('disabled');
            cidade.removeAttribute('disabled');
          } else {

            // Validação do CEP falhou, desabilitar os campos
            logradouro.setAttribute('disabled', 'true');
            uf.setAttribute('disabled', 'true');
            bairro.setAttribute('disabled', 'true');
            cidade.setAttribute('disabled', 'true');

            logradouro.value = ''
            uf.value = ''
            bairro.value = ''
            cidade.value = ''

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

        })
      }

    }

    if (uf) {

      uf.addEventListener('input', e => {

        e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')

      })
    }

    const numero = document.getElementById('numero')

    if (numero) {

      let validate

      numero.addEventListener('input', e => {

        const regex = new RegExp("^[0-9\b]+$")

        for (let i = 0; i < e.target.value.length; i++) {
          if (!regex.test(e.target.value[i])) {
            let subtituicao = e.target.value[i]
            e.target.value = e.target.value.replace(subtituicao, '')
          }
        }

        validate = isNumero(e.target.value)

        if (validate) {
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-numero').innerHTML = ""
          return (formDataAddress.numero = e.target.value)
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-numero').innerHTML =
            "<p>Valor inválido!</p>"
          return (formDataAddress.numero = false)
        }

      })

      numero.addEventListener('keypress', e => {

        const notAllowedChars = /^[A-Za-z!"#$%&'()*+,-./:;<=>?@[\]^_`´{|}~¨¬¢£³²¹ºª°§ \\]+$/
        const char = e.key

        if (notAllowedChars.test(char)) {
          e.preventDefault()
        }
      })

      numero.addEventListener('paste', e => {
        const regex = new RegExp("^[0-9\b]+$")

        setTimeout(() => {
          if (!regex.test(e.target.value)) {
            e.target.value = ''
          }
        }, 0)
      })

    }

    const complemento = document.getElementById('complemento')

    if (complemento) {

      let validate

      complemento.addEventListener('input', e => {

        const regex = new RegExp("^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$")

        for (let i = 0; i < e.target.value.length; i++) {
          if (regex.test(e.target.value[i])) {
            let subtituicao = e.target.value[i]
            e.target.value = e.target.value.replace(subtituicao, '')
          }
        }

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

      complemento.addEventListener('keypress', e => {

        const notAllowedChars = /^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$/
        const char = e.key

        if (notAllowedChars.test(char)) {
          e.preventDefault()
        }
      })

      complemento.addEventListener('paste', e => {
        const regex = new RegExp("^[#$%'()*+:;<=>?@[\]_{|}¨¬¢£³²¹§\\]+$")

        setTimeout(() => {
          if (regex.test(e.target.value)) {
            e.target.value = ''
          }
        }, 0)
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

    if (email) {

      let validateInput, validateFocus

      email.addEventListener('input', e => {

        validateInput = isEmail(e.target.value)

        // if (validate) {
        //   emailBd(e.target.value)
        // }

        if (validateInput) {
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-email').innerHTML = ""
        } else {
          e.preventDefault()
          // Enviar para o HTML a mensagem de erro
          document.getElementById('msg-email').innerHTML =
            "<p>Email inválido!</p>"
          formDataAddress.email = false
        }
      })

      email.onblur = async () => {
        document.getElementById('msg-email').innerHTML = "<p style='color: black;'>Carregado...</p>"

        formDataAddress.email = false

        validateFocus = await emailBd(email.value)

        setTimeout(() => {

          if (validateFocus) {
            document.getElementById('msg-email').innerHTML = ""
          } else {
            if (email.value.length !== 0) {
              document.getElementById('msg-email').innerHTML =
                "<p>Email já cadastrado!</p>"
            } else {
              document.getElementById('msg-email').innerHTML = ""
            }
          }

          if (validateFocus === true && validateInput === true) {
            formDataAddress.email = email.value
          }
        }, 1000)
      }
    }

    if (form) {
      form.addEventListener('submit', async e => {
        e.preventDefault()

        if (
          formDataAddress.cep && formDataAddress.logradouro && formDataAddress.numero && formDataAddress.uf
          && formDataAddress.bairro && formDataAddress.cidade && formDataAddress.telefone1 && formDataAddress.telefone2
          && formDataAddress.email
        ) {
          changeMains('.screen-school-data')
          changeSubMainTitle('Formulário de Dados Acadêmicos')
          resolve(formDataAddress)

          document.addEventListener('click', function (event) {
            const element = event.target
            if (element.classList.contains('big-school-data') || element.classList.contains('button-school-data')) {
              changeMains('.screen-school-data')
              changeSubMainTitle('Formulário de Dados Acadêmicos')
            }
          })


        } else {
          document.getElementById('msg-fracasso-address').innerHTML =
            "<p>Formulário incompleto!</p>"
          removerMensagem('msg-fracasso-address')
        }
      })


    } else {
      console.log('Erro ao buscar dados do formulário')
      reject(error)
    }
  })
}

module.exports = initAddress
