async function socioEconomic() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('socio-economic')

        const htmlContent = await response.text()

        let screenSocioEconomic = document.querySelector('.screen-socio-economic')

        screenSocioEconomic.innerHTML = htmlContent
    })
}


module.exports = socioEconomic