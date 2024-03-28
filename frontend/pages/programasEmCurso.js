async function programasEmCurso() {
    const response = await fetch("programa-curso")

    const htmlContent = await response.text()

    const screenProgramasCurso = document.querySelector(".screen-programa-curso")

    screenProgramasCurso.innerHTML = htmlContent
}

module.exports = { programasEmCurso }