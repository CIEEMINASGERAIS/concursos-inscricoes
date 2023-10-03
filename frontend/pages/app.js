const main = require('./main.js')
const termsAndConditions = require('./terms-and-conditions.js')
const initAddress = require('./address.js')
const initDataBasic = require('./dataBasic.js')
const createFormSchoolData = require('./schoolData.js')

async function takeData() {
  const callMain = main()
  const termsConditions = await termsAndConditions()
  const formData = await initDataBasic()
  const formAddress = await initAddress()
  const formSchoolData = await createFormSchoolData()
  const allData = await { ...termsConditions, ...formData, ...formAddress, ...formSchoolData }
  console.log(allData)
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
      // mode: 'no-cors',
      error: false,
      mensagem: 'Usuário cadastrado com sucesso',
      body: JSON.stringify(data)
    })
    if (response.ok) {
      console.log('Dados enviados com sucesso!')
    } else {
      console.log(response.status)
    }
  } catch (error) {
    console.log('Erro: ', error)
  }
}

sendData()
