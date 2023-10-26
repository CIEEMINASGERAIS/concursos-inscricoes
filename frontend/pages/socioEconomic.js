async function SocioEconomic() {
    const response = await fetch('socioEconomic')
    const htmlContent = await response.text()
}

module.exports = SocioEconomic 