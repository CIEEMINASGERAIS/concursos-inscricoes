const { isNumero, isComplemento, isTelefone, isEmail, changeMains, changeSubMainTitle, removerMensagem, isCep, isNaturalidadeNacionalidade, isUfNaturalidade, emailBd, erroInputAddress } = require('../utils/util.js')

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
            const response = await fetch(
              `https://appcadastro.cieemg.org.br//cadastrarEndereco?termo=${cepSemPonto}`
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

    if (email) {

      let validateInput, validateFocus

      email.addEventListener('input', e => {

        validateInput = isEmail(e.target.value)

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
        document.getElementById('msg-email').innerHTML = "<p style='color: #ffffff;'>Carregando...</p>"

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
          // formDataAddress
        ) {
          changeMains('.screen-school-data')
          changeSubMainTitle('Formulário de Dados Acadêmicos')
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

module.exports = initAddress
