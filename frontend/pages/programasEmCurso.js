const selecionarNomes = require("../utils/util")

async function programasEmCurso() {
    const response = await fetch("programa-curso")

    const htmlContent = await response.text()

    const screenProgramasCurso = document.querySelector(".screen-programa-curso")

    screenProgramasCurso.innerHTML = htmlContent

    const programasEmCurso = document.getElementsByTagName("programas-curso")

    const selectProgramaCurso = document.createElement("select")

    const divProgramas = document.querySelector(".form-group-programas")

    divProgramas.insertAdjacentElement("afterend", selectProgramaCurso)

    if (selecionarNomes(programasEmCurso) === "Sim") {
        CreateInputLabel
    }

}

module.exports = { programasEmCurso }