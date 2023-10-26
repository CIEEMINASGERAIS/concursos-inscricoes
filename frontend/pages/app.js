const main = require('./main.js')
const termsAndConditions = require('./terms-and-conditions.js')
const initAddress = require('./address.js')
const initDataBasic = require('./dataBasic.js')
const createFormSchoolData = require('./schoolData.js')
const createsocioEconomic = require('./socioEconomic.js')
const { conferirFormAddress, conferirFormBasic, changeMains, changeSubMainTitle } = require('../utils/util.js')

async function takeData() {
  const callMain = main()
  const termsConditions = await termsAndConditions()

  const formData = await initDataBasic()
  let validateFormBasic
  document.addEventListener('click', function (event) {
    const element = event.target

    validateFormBasic = false

    validateFormBasic = conferirFormBasic(formData)

    if (validateFormBasic) {
      if (element.classList.contains('big-address') || element.classList.contains('button-address')) {
        changeMains('.screen-address')
        changeSubMainTitle('Formulário de Endereço')
      }
    } else {
      if (element.classList.contains('main')) {
        event.preventDefault()
      }
    }
  })

  const formAddress = await initAddress()
  let validateFormAddress
  document.addEventListener('click', function (event) {
    const element = event.target

    validateFormAddress = false

    validateFormAddress = conferirFormAddress(formAddress)

    if (validateFormAddress && validateFormBasic) {
      if (element.classList.contains('big-school-data') || element.classList.contains('button-school-data')) {
        changeMains('.screen-school-data')
        changeSubMainTitle('Formulário de Dados Acadêmicos')
      }
    } else {
      if (element.classList.contains('main')) {
        event.preventDefault()
      }
    }
  })

  const formSchoolData = await createFormSchoolData()
  const socioEconomic = createsocioEconomic()
  const allData = await { ...termsConditions, ...formData, ...formAddress, ...formSchoolData }
  return allData
}

async function sendData() {
  const data = await takeData()
  try {
    const response = await fetch('http://appcadastro.cieemg.org.br/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      error: false,
      mensagem: 'Usuário cadastrado com sucesso',
      body: JSON.stringify(data)
    })
    if (response.ok) {
    } else {
      console.log(response.status)
    }
  } catch (error) {
    console.log('Erro: ', error)
  }
}

sendData()
