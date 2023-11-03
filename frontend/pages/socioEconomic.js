async function socioEconomic() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('socio-economic')

        const htmlContent = await response.text()

        let screenSocioEconomic = document.querySelector('.screen-socio-economic')

        screenSocioEconomic.innerHTML = htmlContent

        const formSocioEconomic = document.querySelector('.form-socio-economic')

        if (formSocioEconomic) {
            
        }

    })
}


module.exports = socioEconomic