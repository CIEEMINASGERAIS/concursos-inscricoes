const main = require('./main.js')
const termsAndConditions = require('./terms-and-conditions.js')
const initAddress = require('./address.js')
const initDataBasic = require('./dataBasic.js')
const createFormSchoolData = require('./schoolData.js')
const { conferirFormTerms, conferirFormAddress, conferirFormBasic, changeMains, changeSubMainTitle } = require('../utils/util.js')

async function takeData() {
  const callMain = main()
  const termsConditions = await termsAndConditions()

  // let validateFormTerms

  // document.addEventListener('click', function (event) {
  //   const element = event.target

  //   validateFormTerms = false

  //   validateFormTerms = conferirFormTerms(termsConditions)

  //   console.log(validateFormTerms)

  //   if (validateFormTerms) {
  //     if (element.classList.contains("button-accept") ||
  //       element.classList.contains("big-basic-data") || element.classList.contains("button-basic-data")) {
  //       changeMains(".screen-basic-data1");
  //       changeSubMainTitle("Formulário de Dados Básicos");
  //     }
  //   } else {
  //     if (element.classList.contains('main') || ('button-accept')) {
  //       event.preventDefault()
  //     }
  //   }
  // })

  const formData = await initDataBasic()
  let validateFormBasic
  document.addEventListener('click', function (event) {
    const element = event.target

    validateFormBasic = false

    validateFormBasic = conferirFormBasic(formData)

    if (validateFormBasic && validateFormTerms) {
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

    if (validateFormAddress && validateFormBasic && validateFormTerms) {
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
