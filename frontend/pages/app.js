const main = require('./main.js')
const termsAndConditions = require('./terms-and-conditions.js')
const initAddress = require('./address.js')
const initDataBasic = require('./dataBasic.js')
const createFormSchoolData = require('./schoolData.js')
const { conferirForm, changeMains, changeSubMainTitle } = require('../utils/util.js')

async function takeData() {
  const callMain = main()
  const termsConditions = await termsAndConditions()
  const formData = await initDataBasic()
  conferirForm(formData)
  document.addEventListener('click', function (event) {
    const element = event.target

    let validateForm = false

    validateForm = conferirForm(formData)

    console.log(validateForm)

    if (validateForm) {
      if (element.classList.contains('big-address') || element.classList.contains('button-address')) {
        conferirForm(formData)
        changeMains('.screen-address')
        changeSubMainTitle('Formulário de Endereço')
      }
    } else {
      if (element.classList.contains('big-address') || element.classList.contains('button-address')) {
        event.preventDefault()
      }
    }
  })
  const formAddress = await initAddress()
  const formSchoolData = await createFormSchoolData()
  const allData = await { ...termsConditions, ...formData, ...formAddress, ...formSchoolData }
  // for (let chave in allData) {
  //   if (allData[chave] === false) {
  //     console.log(allData[chave], allData)
  //   }
  // }
  // return allData
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
