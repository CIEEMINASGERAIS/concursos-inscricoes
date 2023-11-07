async function socioEconomic() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('socio-economic')

        const htmlContent = await response.text()

        let screenSocioEconomic = document.querySelector('.screen-socio-economic')

        screenSocioEconomic.innerHTML = htmlContent

        const formSocioEconomic = document.querySelector('.form-economic')

        const formEconomic = {}

        const aprendiz = document.getElementById('aprendiz')

        aprendiz.addEventListener('input', e => {

            let valores = e.target.value

            if (valores.length === 0) {
                e.preventDefault()
                document.getElementById('msg-aprendiz').innerHTML =
                    "<p>Favor preencher o campo!</p>"
            } else {
                document.getElementById('msg-aprendiz').innerHTML = ""
                formEconomic.aprendiz = valores
            }
        })

        const responsavel = document.getElementById('responsavel')

        responsavel.addEventListener('input', e => {
            let valores = e.target.value

            if (valores.length === 0) {
                e.preventDefault()
                document.getElementById('msg-responsavel').innerHTML =
                    "<p>Favor preencher o Campo!</p>"
            } else {
                document.getElementById('msg-responsavel').innerHTML = ""
                formEconomic.responsavel = valores
            }

        })

        const imovel = document.getElementById('imovel')

        imovel.addEventListener('input', e => {
            let valores = e.target.value

            if (valores.length === 0) {
                e.preventDefault()
                document.getElementById('msg-imovel').innerHTML =
                    "<p>Favor preencher o Campo!</p>"
            } else {
                document.getElementById('msg-imovel').innerHTML = ""
                formEconomic.imovel = valores
            }
        })

        const pessoas = document.getElementById('pessoas')

        pessoas.addEventListener('input', e => {
            let valores = e.target.value

            if (valores.length === 0) {
                e.preventDefault()
                document.getElementById('msg-pessoas').innerHTML =
                    "<p>Favor preencher o Campo!</p>"
            } else {
                document.getElementById('msg-pessoas').innerHTML = ""
                formEconomic.pessoas = valores
            }
        })

        const filhos = document.getElementById('filhos')

        filhos.addEventListener('input', e => {
            let valores = e.target.value

            if (valores.length === 0) {
                e.preventDefault()
                document.getElementById('msg-filhos').innerHTML =
                    "<p>Favor preencher o Campo!</p>"
            } else {
                document.getElementById('msg-filhos').innerHTML = ""
                formEconomic.filhos = valores
            }
        })



        if (formSocioEconomic) {
            console.log(formEconomic)
        }

    })
}


module.exports = socioEconomic