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
        const element = e.target

        if (element.classList.contains("spc")) {
            if (!document.getElementById("select-desafio")) {
                const div = document.createElement("div")
                div.id = "select-desafio"
                divProgramas.insertAdjacentElement("afterbegin", div)
                const labelProgramasCursos = document.createElement("label")
                labelProgramasCursos.innerHTML = "Programa em curso"
                labelProgramasCursos.htmlFor = "programas-cursos"
                div.insertAdjacentElement("afterbegin", labelProgramasCursos)
                const selectProgramaCurso = document.createElement("select")
                selectProgramaCurso.id = "programas-cursos"
                labelProgramasCursos.insertAdjacentElement("afterend", selectProgramaCurso)
                const optionProgramaCurso = document.createElement("option")
                optionProgramaCurso.innerText = "Desafio"
                optionProgramaCurso.value = "Desafio"
                selectProgramaCurso.appendChild(optionProgramaCurso)
                const p = document.createElement("p")
                p.innerText = "Obrigatório"
                p.className = "obrigatorio"
                selectProgramaCurso.insertAdjacentElement("afterend", p)
            }
        }

        if (element.classList.contains("npc")) {
            if (document.getElementById("select-desafio") > 0) {
                document.getElementById("select-desafio").remove()
            }
        }

    })

}

module.exports = { programasEmCurso }