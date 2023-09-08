// Cria o elemento label para o nome, seta os atributos e preenche a label
const createLabel = (forAttribute, text) => {
  const label = document.createElement('label')
  label.setAttribute('for', forAttribute)
  label.innerText = text
  return label
}

// Cria um campo de entrada de texto para o nome e seta os atributos para colocar o parametro conforme necessário ao input
const createInput = (type, name, id, placeholder, classe) => {
  const input = document.createElement('input')
  input.setAttribute('type', type)
  input.setAttribute('name', name)
  input.setAttribute('id', id)
  input.setAttribute('placeholder', placeholder)
  input.setAttribute('class', classe)
  return input
}

// Cria o elemento <form>
const createForm = classe => {
  const form = document.createElement('form')
  form.setAttribute('class', classe)
  return form
}

// Cria o elemento link
const createLink = (rel, href) => {
  const cssLink = document.createElement('link')
  cssLink.setAttribute('rel', rel)
  cssLink.setAttribute('href', href)
  return cssLink
}

const createButton = (text, classe, type) => {
  const button = document.createElement('button')
  button.setAttribute('class', classe)
  button.setAttribute('type', type)
  button.innerText = text
  return button
}

const createDiv = (classe, text) => {
  const div = document.createElement('div')
  div.setAttribute('class', classe)
  div.innerText = text
  return div
}

const createSelect = (id, name) => {
  const select = document.createElement('select')
  select.setAttribute('id', id)
  select.setAttribute('name', name)
  return select
}

const createOption = (value, text, name) => {
  const options = document.createElement('option')
  if (options.text === 'Estágio Curricular') {
    options.value = 'esc'
  } else {
    options.value = value
  }

  options.text = text
  options.name = name
  return options
}

const putOption = list => {
  const placeholderOption = document.createElement('option')
  placeholderOption.disabled = true
  placeholderOption.selected = true
  placeholderOption.text = 'Selecione'

  const options = [placeholderOption]
  for (let i = 0; i < list.length; i++) {
    const option = createOption(list[i], list[i], list[i])

    options.push(option)
  }
  return options
}

const carregarPaginaHtml = async url => {
  try {
    const resposta = await fetch(url)
    const conteudoHtml = await resposta.text()
    return conteudoHtml
  } catch (erro) {
    console.error('Erro ao carregar a página:', erro)
  }
}

const adicionarPaginaHtml = async (url, elemento) => {
  const conteudoHtml = await carregarPaginaHtml(url)
  return (elemento.innerHTML = conteudoHtml)
}

const changeSubMainTitle = text => {
  const subTitle = document.querySelector('.sub-main-title h1')

  return (subTitle.innerText = text)
}

const changeMains = nameClass => {
  const screens = document.querySelectorAll('.screen')

  for (let i = 0; i < screens.length; i++) {
    screens[i].style.display = 'none'
  }
  const screen = document.querySelector(nameClass)
  if (screen) {
    screen.style.display = 'block'
  }
}

// Função com a lista de erros
const listInputValidate = () => {
  const listInputValidate = {
    name: 'Necessário preencher o campo nome!',
    cpf: 'Necessário preencher o campo CPF!',
    'nome-mae': 'Necessário preencher o campo nome da mãe!',
    'nome-pai': 'Necessário preencher o campo nome da pai!',
    'carteira-trabalho': 'Necessário preencher o campo carteira de trabalho!',
    naturalidade: 'Necessário preencher o campo naturalidade!',
    nacionalidade: 'Necessário preencher o campo nacionalidade!',
    'estado-civil': 'Necessário preencher o campo estado civil!',
    'data-nascimento': 'Necessário preencher o campo da data de nascimento!',
    sexo: 'Necessário preencher o campo sexo!',
    'uf-naturalidade': 'Necessário preencher o campo uf naturalidade!',
    deficiencias: 'Necessário preencher o campo "Se possui alguma deficiência?'
  }

  return listInputValidate
}

const isNome = nome => {
  nome = nome.trim()

  let nomeSemEspaco = nome.replace(' ', '')

  if (
    nome.length === 0 ||
    nomeSemEspaco === nome ||
    nomeSemEspaco.length === 0 ||
    nomeSemEspaco.length < 3
    // Depois tem que fazer uma regra para o numero de letras em cada nome
  ) {
    return false
  }

  const regex = new RegExp("^[0-9]+$")

  if (regex.test(nome)) {
    return false
  }

  nome = parseInt(nome)
  if (nome) {
    return false
  }

  // console.log(regex.test(nome))


  return true
}

const isSchool = async (school, idSchool) => {

  let likeSchool = {}

  let schoolVerification, idSchoolVerification

  try {
    const response = await fetch(
      `http://localhost:8080/cadastrarEscola?termo=${school}`
    )
    if (response.ok) {
      likeSchool = await response.json()
      likeSchool = likeSchool.map(school => { return { razaoSocial: school.razaosocial, id: school.id } })
    } else {
      console.log('Erro na solicitação:', response.statusText)
    }
  } catch (error) {
    console.error('Erro:', error)
  }


  for (chave in likeSchool) {
    if (likeSchool[chave]['razaoSocial'] === school && likeSchool[chave]['id'] === idSchool) {
      idSchoolVerification = likeSchool[chave]['id']
      schoolVerification = likeSchool[chave]['razaoSocial']
      break
    }
  }

  console.log(schoolVerification, idSchoolVerification)

  if (schoolVerification !== school) {
    return false
  }

  if (idSchool !== idSchoolVerification) {
    return false
  }

  if (school.length === 0) {
    return false
  }


  return true
}

const isCourse = async (course, codeCourse, idCourse) => {

  let likeCourse = {}

  let courseVerification, courseIdVerification

  try {
    const response = await fetch(
      `http://localhost:8080/cadastrarCurso?termo=${codeCourse}`
    )
    if (response.ok) {
      likeCourse = await response.json()
      likeCourse = likeCourse.map(course => {
        return { descricao: course.descricao, idcurso: course.idcurso }
      })
    } else {
      console.log('Erro na solicitação:', response.statusText)
    }
  } catch (error) {
    console.error('Erro:', error)
  }

  for (chave in likeCourse) {
    if (likeCourse[chave]['descricao'] === course && likeCourse[chave]['idcurso'] === idCourse) {
      courseVerification = likeCourse[chave]['descricao']
      courseIdVerification = likeCourse[chave]['idcurso']
      break
    }
  }

  if (courseVerification !== course) {
    return false
  }

  if (courseIdVerification !== idCourse) {
    return false
  }

  if (course.length === 0) {
    return false
  }


  return true
}



const isNaturalidadeNacionalidade = naturalidadeNacionalidade => {
  naturalidadeNacionalidade = naturalidadeNacionalidade.trim()

  if (naturalidadeNacionalidade.length === 0) {
    return false
  }

  const regex = new RegExp(/^[0-9]+$/)

  if (regex.test(naturalidadeNacionalidade)) {
    return false
  }

  naturalidadeNacionalidade = parseInt(naturalidadeNacionalidade)

  if (naturalidadeNacionalidade) {
    return false
  }

  return true
}

const isCtps = valor => {
  valor = valor.trim()

  const regex = new RegExp(/^[0-9]+$/)

  if (!regex.test(valor)) {
    return false
  }

  let valorSemEspaco = valor.replace(' ', '')

  if (
    valor.length === 0 ||
    valor != valorSemEspaco ||
    valorSemEspaco.length === 0 ||
    valorSemEspaco.length < 7
  ) {
    return false
  }

  valor = parseInt(valor)

  if (!valor) {
    return false
  }

  return true
}

const isRg = valor => {
  valor = valor.trim()

  valor = valor.replace(/[^0-9]/g, '')

  let valorSemEspaco = valor.replace(' ', '')

  if (
    valor.length === 0 ||
    valor != valorSemEspaco ||
    valorSemEspaco.length === 0
  ) {
    return false
  }

  valor = parseInt(valor)

  if (!valor) {
    return false
  }

  return true
}


const isCpf = (cpf = 0) => {

  const regex = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/)

  if (!regex.test(cpf)) {
    return false
  }

  cpf = cpf.replace(/\.|-/g, '')
  if (!validaPrimeiroDigito(cpf)) {
    return false
  }
  if (!validaSegundoDigito(cpf)) {
    return false
  }
  return true
}

const validaPrimeiroDigito = (cpf) => {
  let soma = 0
  for (let i = 0; i < cpf.length - 2; i++) {
    soma += cpf[i] * ((cpf.length - 1) - i)
  }

  soma = (soma * 10) % 11

  if (soma === 10 || soma === 11) {
    soma = 0
  }

  if (soma != cpf[9]) {
    return false
  }

  return true
}

const validaSegundoDigito = (cpf) => {
  let soma = 0
  for (let i = 0; i < cpf.length - 1; i++) {
    soma += cpf[i] * ((cpf.length) - i)
  }

  soma = (soma * 10) % 11

  if (soma === 10 || soma === 11) {
    soma = 0
  }
  if (soma != cpf[10]) {
    return false
  }

  return true
}

const isEstadoCivil = estadoCivil => {
  const regex = new RegExp(/^[scadv]$/)

  if (!regex.test(estadoCivil)) {
    return false
  }

  estadoCivil = parseInt(estadoCivil)

  if (estadoCivil) {
    return false
  }

  return true
}


const isDate = date => {

  date = date.replace(/\-/g, '')

  const yearFilter = date.substring(0, 4)

  const monthFilter = date.substring(4, 6)

  const dayFilter = date.substring(6, 8)

  const today = new Date()

  const year = today.getFullYear()

  const month = today.getMonth() + 1

  const dayInMonth = today.getDate()

  let idade = year - yearFilter

  if (month < monthFilter || month == monthFilter && dayInMonth < dayFilter) {
    console.log(idade--)
  }

  if (idade < 14) {
    return false
  }



  return true
}


const isDateFormatura = (date, inicio, fim) => {

  const regex = new RegExp(/^(19[9][0-9]|20[0-2][0-9]|2030)$/)

  if (!regex.test(date)) {
    return false
  }

  if (date.length != 4) {
    return false
  }

  date = parseInt(date)

  if (date < inicio || date > fim) {
    return false
  }

  return true
}

const isvalid = (date) => {

  if (date.length != 4) {
    return false
  }

  date = parseInt(date)

  const today = new Date()

  const year = today.getFullYear()

  const anoValido = date - year

  if (!date || anoValido < 0) {
    return false
  }

  return true
}

const isSemestre = (data) => {

  const semestresFormaturas = [1, 2, 'Estágio Curricular']

  let semestre

  for (chave in semestresFormaturas) {
    if (semestresFormaturas[chave] == data) {
      semestre = semestresFormaturas[chave]
      break
    }
  }

  if (!semestre) {
    return false
  }

  return true
}

const isMesFormatura = (data) => {

  data = parseInt(data)

  if (!data) {
    return false
  }

  const regex = new RegExp(/^(1|2|3|4|5|6|7|8|9|10|11|12)$/)

  if (!regex.test(data)) {
    return false
  }

  if (data < 1 || data > 12) {
    return false
  }

  return true
}

const isPeriodo = (data) => {

  const periodos = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    'Estágio Curricular'
  ]

  let periodo

  for (chave in periodos) {
    if (periodos[chave] == data) {
      periodo = periodos[chave]
      break
    }
  }

  if (!periodo) {
    return false
  }

  return true
}

const isHorario = (data) => {

  const horariosEstudos = [
    'Manhã',
    'Tarde',
    'Noite',
    'EAD',
    'Estágio Curricular',
    'Formado'
  ]

  let horario

  for (let chave in horariosEstudos) {
    if (horariosEstudos[chave] === data) {
      horario = horariosEstudos[chave]
      break
    }
  }

  console.log(horario)

  if (!horario) {
    return false
  }

  return true
}

const isSexo = sexo => {

  const regex1 = new RegExp(/^[fm]$/)

  if (!regex1.test(sexo)) {
    return false
  }

  sexo = parseInt(sexo)
  if (sexo) {
    return false
  }

  return true
}


const isUfNaturalidade = (ufNaturalidade) => {

  const listUfNaturalidade = [
    'RO',
    'AC',
    'AM',
    'RR',
    'PA',
    'AP',
    'TO',
    'MA',
    'PI',
    'CE',
    'RN',
    'PB',
    'PE',
    'AL',
    'SE',
    'BA',
    'MG',
    'ES',
    'RJ',
    'SP',
    'PR',
    'SC',
    'RS',
    'MS',
    'MT',
    'GO',
    'DF'
  ]

  let state

  for (let i = 0; i < listUfNaturalidade.length; i++) {
    if (listUfNaturalidade[i] === ufNaturalidade) {
      state = listUfNaturalidade[i]
    }
  }

  if (state != ufNaturalidade || ufNaturalidade.length === 0 || ufNaturalidade.length != 2) {
    return false
  }

  ufNaturalidade = parseInt(ufNaturalidade)
  if (ufNaturalidade) {
    return false
  }

  return true
}

const isDeficiente = (listDeficiencias, deficiencia) => {

  let value

  for (let i = 0; i < listDeficiencias.length; i++) {
    if (deficiencia === listDeficiencias[i]) {
      value = listDeficiencias[i]
    }
  }

  if (value !== deficiencia) {
    return false
  }

  const regex = new RegExp(/^(N|F|A|V|ME|MU|TE)$/)

  if (!regex.test(deficiencia)) {
    return false
  }

  deficiencia = parseInt(deficiencia)
  if (deficiencia) {
    return false
  }

  return true
}


const isDescricao = descricao => {

  const regex = new RegExp(/^[0-9]+$/)

  if (regex.test(descricao)) {
    return false
  }

  if (descricao.length === 0) {
    return false
  }

  return true
}

const removerMensagem = (id) => {
  setTimeout(() => {

    const msg = document.getElementById(id).innerHTML = ''

  }, 3000)
}

const isNumero = numero => {

  const regex = new RegExp(/^\d+$/)

  if (!regex.test(numero)) {
    return false
  }

  if (numero.length === 0) {
    return false
  }

  numero = parseInt(numero)
  if (!numero) {
    return false
  }

  return true
}

const isComplemento = complemento => {

  if (complemento.length === 0) {
    return false
  }

  return true
}

const isTelefone = telefone => {

  const regex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)

  if (!regex.test(telefone)) {
    return false
  }

  telefone = telefone.replace(/[^0-9]/g, '')

  if (telefone.length === 0) {
    return false
  }

  telefone = parseInt(telefone)

  if (!telefone) {
    return false
  }

  return true
}


const isEmail = email => {

  const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

  if (!regex.test(email)) {
    return false
  }

  return true
}


const isCep = cep => {

  const regex = new RegExp(/^[0-9]{5}-[0-9]{3}$/)

  if (!regex.test(cep)) {
    return false
  }

  cep = cep.replace(/[^0-9]/g, '')

  if (cep.length === 0 && cep.length !== 8) {
    return false
  }

  cep = parseInt(cep)
  if (!cep) {
    return false
  }

  return true
}

// value="s"
// value="c"
// value="a"
// value="d"
// value="v"

// formData.addEventListener('submit', async (e) => {

// const listaDeInput = document.querySelectorAll('.input-form-validate')

// // Laço de repetição para ler os campos
// for (let contador = 0; contador < listaDeInput.length; contador++){

//   // Receber o campo completo
//   const inputField = listaDeInput[contador]
//   console.log(inputField)

//   // Recuperar o nome do primeiro seletor dentro do atributo class
//   const nameInput = inputField.classList[0]
//   console.log(nameInput)

//   // Receber o valor do campo
//   const valueInputValidate = document.getElementById(nameInput).value

//   console.log(valueInputValidate)

//   // Verificar se o campo está vazio
//   if (valueInputValidate === '' || valueInputValidate === "Selecione") {
//     // Bloquear a atualização da página
//     e.preventDefault()

//     const listInputValidate = html.listInputValidate()
//     console.log(listInputValidate)

//     // Verificar se existe o campo lista de erros
//     if (listInputValidate.hasOwnProperty(nameInput)) {
//       console.log(`msg-${nameInput}`)
//       // Enviar para o HTML a mensagem de erro
//       document.getElementById(`msg-${nameInput}`).innerHTML = "<p style='color: #f00;'>"+listInputValidate[nameInput]+ "</p>"
//     } else {
//       // Enviar para o HTML a mensagem de erro
//       document.getElementById('msg').innerHTML = "<p style='color: #f00;'>Erro: Necessário preencher todos os campos obrigatórios!</p>"
//     }

//     return
//   } else {
//     document.getElementById(`msg-${nameInput}`).innerHTML = "<p style='color: #f00;'></p>"
//       if (nameInput === 'deficiencias') {
//         e.preventDefault()

//         html.changeMains('.screen-address')
//         html.changeSubMainTitle('Formulário de Endereço')
//       }
//     }
// }

// formDataBasic.cpf = e.target.cpf.value
// formDataBasic.rg = e.target.registroGeral.value
// formDataBasic.orgaoexpedidor = e.target.orgaoExpedidor.value
// formDataBasic.ctps = e.target.carteiraDeTrabalho.value
// formDataBasic.nomepai = e.target.nomeDoPai.value
// formDataBasic.nomemae = e.target.nomeDaMae.value
// formDataBasic.sexo = e.target.sexos.value
// formDataBasic.estadocivil = e.target.estadoCivil.value
// formDataBasic.dt_nascimento = e.target.dataDeNascimento.value
// formDataBasic.naturalidade = e.target.naturalidade.value
// formDataBasic.uf_naturalidade = e.target.ufNaturalidade.value
// formDataBasic.nacionalidade = e.target.nacionalidade.value
// formDataBasic.deficiencia_descricao = e.target.deficiencias.value

// formDataBasic.telefone = 4578556933
// formDataBasic.senha = ''
// formDataBasic.periodoano = ''
// formDataBasic.previsaoformatura = ''
// formDataBasic.dt_cadastro = ''
// formDataBasic.idade = ''
// formDataBasic.estagiario_ativo = ''
// formDataBasic.dt_atualizacao = ''
// formDataBasic.ano = ''
// formDataBasic.deficiencia_descricao = ''
// formDataBasic.candidato_selecionado = ''
// formDataBasic.anoingresso = ''
// formDataBasic.semestreingresso = ''
// formDataBasic.cpf_pai = ''
// formDataBasic.cpf_mae = ''
// formDataBasic.notificacao = ''
// formDataBasic.dt_alteracao_notificacao = ''
// formDataBasic.codigo = ''
// formDataBasic.dt_expiracao_codigo = ''
// formDataBasic.url_anexo_curriculo = ''
// formDataBasic.nome_arquivo_curriculo = ''
// formDataBasic.primeiro_acesso = ''
// formDataBasic.termos_condicoes = ''
// formDataBasic.dt_aceite_termos = ''

// resolve(formDataBasic)
// console.log(formDataBasic)
// })

module.exports = {
  isCpf,
  isNome,
  listInputValidate,
  changeMains,
  changeSubMainTitle,
  adicionarPaginaHtml,
  carregarPaginaHtml,
  putOption,
  createOption,
  createSelect,
  createDiv,
  createButton,
  createLink,
  createForm,
  createInput,
  createLabel,
  isCtps,
  isNaturalidadeNacionalidade,
  isEstadoCivil,
  isDate,
  isSexo,
  isUfNaturalidade,
  isDeficiente,
  isDescricao,
  removerMensagem,
  isNumero,
  isComplemento,
  isTelefone,
  isEmail,
  isCep,
  isDateFormatura,
  isSchool,
  isCourse,
  isvalid,
  isSemestre,
  isMesFormatura,
  isPeriodo,
  isHorario,
  isRg
}
