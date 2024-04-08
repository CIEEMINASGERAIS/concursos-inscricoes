const { selecionarNomes, CreateRadius, CreateInputLabel, isComplemento } = require("../utils/util")

class ProgramasEmCurso {

    constructor() {
        this.formProgramasEmCurso = new Object()
    }

    async eventos() {
        return new Promise(async (resolve, reject) => {
            await ProgramasEmCurso.render()

            await this.validateDynamicInput()

            const programasDisponiveis = await selecionarNomes(document.getElementsByName("programas-curso"))

            const alertEnd = document.querySelector(".end");

            if ((programasDisponiveis === "S")) {
                document.querySelector(".form-programa-cursos").addEventListener("submit", (e) => {
                    e.preventDefault()

                    if (this.formProgramasEmCurso.indicacao
                        && this.formProgramasEmCurso.chamou_atencao_desafio
                        && this.formProgramasEmCurso.descricao_indicacao !== false
                        && this.formProgramasEmCurso.descricao_chamou_atencao !== false) {
                        alertEnd.style.display = "block";
                        resolve(this.formProgramasEmCurso)
                    } else {
                        reject(new Error("Formulário inválido!"))
                    }
                })
            } else {
                document.querySelector(".form-programa-cursos").addEventListener("submit", (e) => {
                    e.preventDefault()
                    alertEnd.style.display = "block";
                    resolve(this.formProgramasEmCurso)
                })

            }
        })
    }

    static async render() {
        const response = await fetch("programa-curso")

        const htmlContent = await response.text()

        const screenProgramasCurso = document.querySelector(".screen-programa-curso")

        screenProgramasCurso.innerHTML = htmlContent
    }

    async validateDynamicInput() {

        const divProgramas = document.querySelector(".programas-cursos")

        const listaEncontrou = ["Pelo jornal Diário do Comércio", "Pelo site do CIEE/MG", "Pelas redes sociais do CIEE/MG", "Pelo site do Diário do Comércio", "Pelas redes sociais do Diário do Comércio", "Outros"]

        const listaChamouDesafio = ["A possibilidade de expressar a minha opinião", "A oportunidade de dar visibilidade a um trabalho meu",
            "Tenho interesse em uma bolsa de estudos", "Gostaria de receber uma mentoria", "Outros"]

        const listaProgramas = ["Desafio a voz do jovem"]

        document.addEventListener("change", (e) => {
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
                    selectProgramaCurso.required = true
                    labelProgramasCursos.insertAdjacentElement("afterend", selectProgramaCurso)
                    const optionDisabledProgramaCurso = document.createElement("option")
                    optionDisabledProgramaCurso.innerText = "Selecione"
                    optionDisabledProgramaCurso.disabled = true
                    optionDisabledProgramaCurso.selected = true
                    selectProgramaCurso.appendChild(optionDisabledProgramaCurso)
                    for (let i = 0; i < listaProgramas.length; i++) {
                        let optionProgramaCurso = document.createElement("option")
                        optionProgramaCurso.innerText = listaProgramas[i]
                        optionProgramaCurso.value = listaProgramas[i][0]
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
                }
                if (document.querySelector(".div-geral-csd")) {
                    document.querySelector(".div-geral-csd").remove()
                }
                if (document.querySelector(".div-geral-mca")) {
                    document.querySelector(".div-geral-mca").remove()
                }
                if (document.querySelector("#div-input-outros-como-encontrou")) {
                    document.querySelector("#div-input-outros-como-encontrou").remove()
                }
                if (document.querySelector("#div-input-como-atencao")) {
                    document.querySelector("#div-input-como-atencao").remove()
                }
            }



            if (element.classList.contains("encontrou-como")) {
                const comoEncontrou = document.getElementsByName("como-encontrou")
                this.formProgramasEmCurso["indicacao"] = selecionarNomes(comoEncontrou)
                if (selecionarNomes(comoEncontrou) === "5" && !document.querySelector(".div-input-outros-como-encontrou")) {
                    const inputOutrosComoEncontrou = new CreateInputLabel(document.querySelector(".div-geral-csd"), "", "input-outros-como-encontrou")
                } else {
                    if (document.querySelector("#div-input-outros-como-encontrou")) {
                        document.querySelector("#div-input-outros-como-encontrou").remove()
                    }
                }
            }

            if (element.classList.contains("select-programas")) {
                if (element.value === "D" && !document.querySelector(".div-geral-csd")) {
                    const radiusSoubeDesafios = new CreateRadius(document.querySelector(".div-desafio"), "como-encontrou", "form-check-input encontrou-como", listaEncontrou, "label-desafio-encontro", "1. Como você ficou sabendo deste desafio?", "label-title", "form-check", "csd", "poe", "div-geral-csd")
                    const radiusAtencaoDesafio = new CreateRadius(document.querySelector(".div-chamou-desafio"), "atencao-desafio", "form-check-input chamou-atencao", listaChamouDesafio, "label-desafio-encontro", "2. O que mais te chamou a atenção neste desafio?", "label-title", "form-check", "mca", "oca", "div-geral-mca")
                }
            }

            if (element.classList.contains("chamou-atencao")) {
                const comoAtencao = document.getElementsByName("atencao-desafio")
                this.formProgramasEmCurso["chamou_atencao_desafio"] = selecionarNomes(comoAtencao)
                if (selecionarNomes(comoAtencao) === "4" && !document.querySelector(".div-input-como-atencao")) {
                    const inputComoAtencao = new CreateInputLabel(document.querySelector(".div-geral-mca"), "", "input-como-atencao")
                } else {
                    if (document.querySelector("#div-input-como-atencao")) {
                        document.querySelector("#div-input-como-atencao").remove()
                    }
                }
            }
        })

        document.addEventListener("input", (e) => {
            const element = e.target

            if (element.classList.contains("input-outros-como-encontrou")) {
                const validateSubmitProgramas = isComplemento(element.value.trim())

                if (validateSubmitProgramas) {
                    document.getElementById("msg-input-outros-como-encontrou").innerHTML = "";
                    this.formProgramasEmCurso["descricao_indicacao"] = element.value.trim();
                } else {
                    e.preventDefault();
                    // Enviar para o HTML a mensagem de erro
                    document.getElementById("msg-input-outros-como-encontrou").innerHTML = "<p>Campo outros inválido!</p>";
                    this.formProgramasEmCurso["descricao_indicacao"] = false;
                }
            }

            if (element.classList.contains("input-como-atencao")) {
                const validateSubmitProgramas = isComplemento(element.value.trim())

                if (validateSubmitProgramas) {
                    document.getElementById("msg-input-como-atencao").innerHTML = "";
                    this.formProgramasEmCurso["descricao_chamou_atencao"] = element.value.trim();
                } else {
                    e.preventDefault();
                    // Enviar para o HTML a mensagem de erro
                    document.getElementById("msg-input-como-atencao").innerHTML = "<p>Campo outros inválido!</p>";
                    this.formProgramasEmCurso["descricao_chamou_atencao"] = false;
                }
            }

        })
    }
}





module.exports = { ProgramasEmCurso }