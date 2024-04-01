const { selecionarNomes } = require("../utils/util")

async function programasEmCurso() {
    const response = await fetch("programa-curso")

    const htmlContent = await response.text()

    const screenProgramasCurso = document.querySelector(".screen-programa-curso")

    screenProgramasCurso.innerHTML = htmlContent

    // const programasEmCurso = document.getElementsByTagName("programas-curso")

    const divProgramas = document.querySelector(".programas-cursos")

    const simProgramasCurso = document.getElementById("s-p-c")

    simProgramasCurso.addEventListener("change", function (e) {
        if (e.target.value === "S") {
            const labelProgramasCursos = document.createElement("label")
            labelProgramasCursos.innerHTML = "Programa em curso"
            labelProgramasCursos.htmlFor = "programas-cursos"
            divProgramas.insertAdjacentElement("afterbegin", labelProgramasCursos)
            const selectProgramaCurso = document.createElement("select")
            selectProgramaCurso.value = "Desafio"
            selectProgramaCurso.innerText = "Desafio"
            selectProgramaCurso.id = "programas-cursos"
            labelProgramasCursos.insertAdjacentElement("afterend", selectProgramaCurso)
            const optionProgramaCurso = document.createElement("option")
            selectProgramaCurso.appendChild(optionProgramaCurso)
            optionProgramaCurso.value = "Desaio"
            const p = document.createElement("p")
            p.className = "obrigatorio"
            selectProgramaCurso.insertAdjacentElement("afterend", p)
        }
    })

}

module.exports = { programasEmCurso }