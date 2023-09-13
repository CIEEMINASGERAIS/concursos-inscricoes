const main = require('./web/src/pages/main.js')
const termsAndConditions = require('./web/src/pages/terms-and-conditions.js')
const initAddress = require('./web/src/pages/address.js')
const initDataBasic = require('./web/src/pages/dataBasic.js')
const createFormSchoolData = require('./web/src/pages/schoolData.js')

async function takeData() {
  const callMain = main()
  const termsConditions = termsAndConditions()
  // Preciso colocar o await no termsConditions
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
  const response = await fetch('http://localhost:8081/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
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

takeData()
