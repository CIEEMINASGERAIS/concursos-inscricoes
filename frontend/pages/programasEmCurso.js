async function programasEmCurso() {
    const response = await fetch("programa-curso")

    const htmlContent = await response.text()

    const screenProgramasCurso = document.querySelector(".screen-programas-cursos")

    screenProgramasCurso.innerHTML = htmlContent
}

module.exports = { programasEmCurso }