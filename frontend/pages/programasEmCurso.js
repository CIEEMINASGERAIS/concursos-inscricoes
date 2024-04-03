const { selecionarNomes, CreateRadius, CreateInputLabel } = require("../utils/util")

async function programasEmCurso() {
    const response = await fetch("programa-curso")

    const htmlContent = await response.text()

    const screenProgramasCurso = document.querySelector(".screen-programa-curso")

    screenProgramasCurso.innerHTML = htmlContent

    // const programasEmCurso = document.getElementsByTagName("programas-curso")

    const divProgramas = document.querySelector(".programas-cursos")

    const listaEncontrou = ["Pelo jornal Diário do Comércio", "Pelo site do CIEE/MG", "Pelas redes sociais do CIEE/MG", "Pelo site do Diário do Comércio", "Pelas redes sociais do Diário do Comércio", "Outros"]

    const listaProgramas = ["Desafio"]

    document.addEventListener("change", function (e) {
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
                selectProgramaCurso.className = "select-programas"
                labelProgramasCursos.insertAdjacentElement("afterend", selectProgramaCurso)
                const optionDisabledProgramaCurso = document.createElement("option")
                optionDisabledProgramaCurso.innerText = "Selecione"
                optionDisabledProgramaCurso.disabled = true
                optionDisabledProgramaCurso.selected = true
                selectProgramaCurso.appendChild(optionDisabledProgramaCurso)
                for (let i = 0; i < listaProgramas.length; i++) {
                    let optionProgramaCurso = document.createElement("option")
                    optionProgramaCurso.innerText = listaProgramas[i]
                    optionProgramaCurso.value = listaProgramas[i]
                    selectProgramaCurso.appendChild(optionProgramaCurso)
                }
                const p = document.createElement("p")
                p.innerText = "Obrigatório"
                p.className = "obrigatorio"
                selectProgramaCurso.insertAdjacentElement("afterend", p)
            }
        }

        if (element.classList.contains("npc")) {
            if (document.querySelector("#select-desafio")) {
                document.querySelector("#select-desafio").remove()
                if (document.querySelector(".div-geral-csd")) {
                    document.querySelector(".div-geral-csd").remove()
                }
            }
        }



        if (element.classList.contains("encontrou-como")) {
            const comoEncontrou = document.getElementsByName("como-encontrou")
            if (selecionarNomes(comoEncontrou) === "5" && !document.querySelector(".div-input-outros-como-encontrou")) {
                const inputOutrosComoEncontrou = new CreateInputLabel(document.querySelector(".div-geral-csd"), "", "input-outros-como-encontrou")
            } else {
                if (document.querySelector("#div-input-outros-como-encontrou")) {
                    document.querySelector("#div-input-outros-como-encontrou").remove()
                }
            }
        }

        if (element.classList.contains("select-programas")) {
            if (element.value === "Desafio" && !document.querySelector(".div-geral-csd")) {
                const radiusProgramas = new CreateRadius(document.querySelector(".div-desafio"), "como-encontrou", "form-check-input encontrou-como", listaEncontrou, "label-desafio-encontro", "1. Como você ficou sabendo deste desafio?", "label-title", "form-check", "csd", "poe", "div-geral-csd")
            }
        }

        // if (element.classList.contains("select-programas")) {
        //     {
        //         // selecionarNomes()
        //     }

    })

}

module.exports = { programasEmCurso }