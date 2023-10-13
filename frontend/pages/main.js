const { changeSubMainTitle, changeMains } = require('../utils/util.js')

const main = () => {
  function mainPage() {
    document.addEventListener('click', function (event) {
      const element = event.target
      if (element.classList.contains('button-back-address')) {
        changeMains('.screen-basic-data1')
        changeSubMainTitle('Formulário de Dados Básicos')
      }
      if (element.classList.contains('button-back-school')) {
        changeMains('.screen-address')
        changeSubMainTitle('Formulário de Endereço')
      }
    })
  }

  mainPage()
}

module.exports = main
