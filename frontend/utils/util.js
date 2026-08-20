const validator = require("validator");
const { clientLogger } = require("./clientLogger.js");
const { fetchJson } = require("./http.js");

const changeSubMainTitle = (text) => {
  const subTitle = document.querySelector(".sub-main-title h1");
  if (subTitle) {
    subTitle.innerText = text;
  }
};

// Helper tolerante a elementos ausentes: retorna o node OU null sem
// lançar. Usado por fluxos onde o markup de "alerta" foi removido do
// template, mas o JS legado ainda tenta manipulá-lo.
const safeQuerySelector = (selector) => {
  try {
    return document.querySelector(selector);
  } catch (err) {
    return null;
  }
};

// Mostra o card de feedback (.alert-cadastro) de forma idempotente.
// Usa a classe `.show` (display: flex) em vez de style.display para
// garantir a visibilidade mesmo se houver cache antigo. O botao
// "Confirmar" dentro do proprio card leva o usuario para o site
// do CIEE (padrao da versao antiga). Usa `.alert-cadastro` (e nao
// `.alert`) para nao colidir com a `.alert` do schoolData.css.
const showAlert = () => {
  const el = safeQuerySelector(".alert-cadastro");
  if (el) el.classList.add("show");
};

const hideAlert = () => {
  const el = safeQuerySelector(".alert-cadastro");
  if (el) el.classList.remove("show");
};

const changeMains = (nameClass) => {
  const screens = document.querySelectorAll(".screen");

  for (let i = 0; i < screens.length; i++) {
    screens[i].style.display = "none";
  }
  const screen = document.querySelector(nameClass);
  if (screen) {
    screen.style.display = "block";
  }
};

const isNome = (nome) => {
  if (typeof nome !== "string") return false;

  nome = nome.trim();

  // Remove TODOS os espaços (não só o primeiro) para checar tamanho real.
  const nomeSemEspaco = nome.replace(/\s+/g, "");

  if (
    nome.length === 0 ||
    nomeSemEspaco.length === 0 ||
    nomeSemEspaco.length < 3
  ) {
    return false;
  }

  const regex = new RegExp("^[0-9]+$");

  if (regex.test(nome)) {
    return false;
  }

  nome = parseInt(nome);
  if (nome) {
    return false;
  }

  return true;
};

const isSchool = async (school, idSchool) => {
  let likeSchool = {};

  let schoolVerification, idSchoolVerification;

  const termoCompleto = (school || "").trim();

  if (termoCompleto.length > 60 && termoCompleto.length <= 100) {
    clientLogger.warn("IS_SCHOOL_TERMO_LONGO", {
      tamanho: termoCompleto.length,
      navegador: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 100) : null,
    });
  }

  const termo = termoCompleto.slice(0, 80);

  try {
    const response = await fetch(`/cadastrarEscola?termo=${encodeURIComponent(termo)}`);
    if (response.ok) {
      likeSchool = await response.json();
      likeSchool = likeSchool.map((school) => {
        return { razaoSocial: school.razaosocial, id: school.id };
      });
    } else {
      console.log("Erro na solicitação:", response.statusText);
    }
  } catch (error) {
    console.error("Erro:", error);
  }

  for (chave in likeSchool) {
    if (
      likeSchool[chave]["razaoSocial"] === school &&
      likeSchool[chave]["id"] === idSchool
    ) {
      idSchoolVerification = likeSchool[chave]["id"];
      schoolVerification = likeSchool[chave]["razaoSocial"];
      break;
    }
  }

  if (schoolVerification !== school) {
    return false;
  }

  if (idSchool !== idSchoolVerification) {
    return false;
  }

  if (school.length === 0) {
    return false;
  }

  return true;
};

const isCourse = async (course, codeCourse, idCourse) => {
  let likeCourse = {};

  let courseVerification, courseIdVerification;

  try {
    console.log(codeCourse);

    const response = await fetch(`/cadastrarCurso/${codeCourse}`);
    if (response.ok) {
      likeCourse = await response.json();
      likeCourse = likeCourse.map((course) => {
        return { descricao: course.descricao, idcurso: course.idcurso };
      });
    } else {
      console.log("Erro na solicitação:", response.statusText);
    }
  } catch (error) {
    console.error("Erro:", error);
  }

  for (chave in likeCourse) {
    if (
      likeCourse[chave]["descricao"] === course &&
      likeCourse[chave]["idcurso"] === idCourse
    ) {
      courseVerification = likeCourse[chave]["descricao"];
      courseIdVerification = likeCourse[chave]["idcurso"];
      break;
    }
  }

  if (courseVerification !== course) {
    return false;
  }

  if (courseIdVerification !== idCourse) {
    return false;
  }

  if (course.length === 0) {
    return false;
  }

  return true;
};

const conferirFormBasic = (objeto) => {
  for (let chave in objeto) {
    if (objeto[chave] === false && chave !== "nomepai" && chave !== "ctps") {
      return false;
    }
  }
  return true;
};

const conferirFormAddress = (objeto) => {
  for (let chave in objeto) {
    if (objeto[chave] === false && chave !== "complemento") {
      return false;
    }
  }
  return true;
};

const conferirFormSchool = (objeto) => {
  for (let chave in objeto) {
    if (objeto[chave] === false) {
      return false;
    }
  }
  return true;
};

const isNaturalidadeNacionalidade = (naturalidadeNacionalidade) => {
  naturalidadeNacionalidade = naturalidadeNacionalidade.trim();

  if (naturalidadeNacionalidade.length === 0) {
    return false;
  }

  const regex = new RegExp(/^[0-9]+$/);

  if (regex.test(naturalidadeNacionalidade)) {
    return false;
  }

  naturalidadeNacionalidade = parseInt(naturalidadeNacionalidade);

  if (naturalidadeNacionalidade) {
    return false;
  }

  return true;
};

const isCtps = (valor) => {
  valor = valor.trim();

  const regex = new RegExp(/^[0-9]+$/);

  if (!regex.test(valor)) {
    return false;
  }

  let valorSemEspaco = valor.replace(" ", "");

  if (
    valor.length === 0 ||
    valor != valorSemEspaco ||
    valorSemEspaco.length === 0
  ) {
    return false;
  }

  valor = parseInt(valor);

  if (!valor) {
    return false;
  }

  return true;
};

const isRg = (valor) => {
  valor = valor.trim();

  let valorSemEspaco = valor.replace(" ", "");

  if (
    valor.length === 0 ||
    valor != valorSemEspaco ||
    valorSemEspaco.length === 0
  ) {
    return false;
  }

  valor = parseInt(valor);

  if (!valor) {
    return false;
  }

  return true;
};

const isCpf = (cpf = 0) => {
  const regex = new RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/);

  if (!regex.test(cpf)) {
    return false;
  }

  const arrayCpf = ['000.000.000-00', '111.111.111-11', '222.222.222-22',
    '333.333.333-33', '444.444.444-44', '555.555.555-55', '666.666.666-66',
    '777.777.777-77', '888.888.888-88', '999.999.999-99']

  if (arrayCpf.indexOf(cpf) !== -1) {
    return false;
  }

  cpf = cpf.replace(/\.|-/g, "");
  if (!validaPrimeiroDigito(cpf)) {
    return false;
  }
  if (!validaSegundoDigito(cpf)) {
    return false;
  }
  return true;
};

const validaPrimeiroDigito = (cpf) => {
  let soma = 0;
  for (let i = 0; i < cpf.length - 2; i++) {
    soma += cpf[i] * (cpf.length - 1 - i);
  }

  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) {
    soma = 0;
  }

  if (soma != cpf[9]) {
    return false;
  }

  return true;
};

const validaSegundoDigito = (cpf) => {
  let soma = 0;
  for (let i = 0; i < cpf.length - 1; i++) {
    soma += cpf[i] * (cpf.length - i);
  }

  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) {
    soma = 0;
  }
  if (soma != cpf[10]) {
    return false;
  }

  return true;
};

/**
 * cpfInBd
 *
 * Verifica se um CPF já está cadastrado no backend. Usa `fetchJson`
 * (timeout + retry) para evitar o bug clássico do Samsung Browser / Safari
 * iOS onde o `fetch` cru lança "Failed to fetch" e o caller não distingue
 * "CPF disponível" de "não foi possível verificar".
 *
 * @param {string} cpf - CPF já formatado (com pontos e traço)
 * @returns {Promise<{status: "ok"|"duplicado"|"falha_rede", mensagem?: string}>}
 */
const cpfInBd = async (cpf) => {
  try {
    const resultado = await fetchJson(`/verificarEstudante?cpf=${encodeURIComponent(cpf)}`, {
      method: "GET",
      timeoutMs: 8000,
      maxTentativas: 3,
      retryOn5xx: true,
      logErros: false,
      contextoExtra: {
        origem: "cpfInBd",
        cpfMascarado: cpf ? `***.***.${cpf.slice(-5)}` : null,
      },
    });

    if (!resultado.ok) {
      clientLogger.warn("CPF_VERIFICACAO_ERRO_HTTP", {
        status: resultado.status,
        cpfMascarado: cpf ? `***.***.${cpf.slice(-5)}` : null,
      });
      return {
        status: "falha_rede",
        mensagem: "Não foi possível verificar o CPF agora. Verifique sua conexão e tente novamente.",
      };
    }

    // Backend corrigido agora retorna { existe: boolean, cpf }.
    // Mantemos fallback pro formato antigo (array) por compatibilidade.
    let existe = false;
    if (resultado.data && typeof resultado.data === "object" && !Array.isArray(resultado.data)) {
      existe = Boolean(resultado.data.existe);
    } else if (Array.isArray(resultado.data)) {
      existe = resultado.data.length > 0;
    }

    return existe
      ? { status: "duplicado", mensagem: "CPF já cadastrado!" }
      : { status: "ok" };
  } catch (error) {
    // fetch esgotou as tentativas com erro de rede (Failed to fetch / timeout / aborted).
    // NÃO retornamos "ok" silenciosamente — o caller deve bloquear o avanço
    // e pedir para o usuário tentar novamente.
    clientLogger.warn("CPF_VERIFICACAO_FALHA_REDE", {
      cpfMascarado: cpf ? `***.***.${cpf.slice(-5)}` : null,
      mensagem: error?.message,
      nomeErro: error?.name,
    });

    return {
      status: "falha_rede",
      mensagem: "Não foi possível verificar o CPF agora. Verifique sua conexão e tente novamente.",
    };
  }
};

const isEstadoCivil = (estadoCivil) => {
  const regex = new RegExp(/^[SCADV]$/);

  if (!regex.test(estadoCivil)) {
    return false;
  }

  estadoCivil = parseInt(estadoCivil);

  if (estadoCivil) {
    return false;
  }

  return true;
};

const isDate = (date) => {
  date = date.replace(/\-/g, "");

  const yearFilter = date.substring(0, 4);

  const monthFilter = date.substring(4, 6);

  const dayFilter = date.substring(6, 8);

  const today = new Date();

  const year = today.getFullYear();

  const month = today.getMonth() + 1;

  const dayInMonth = today.getDate();

  let idade = year - yearFilter;

  if (month < monthFilter || (month == monthFilter && dayInMonth < dayFilter)) {
    idade--;
  }

  if (idade < 14) {
    return false;
  }

  return true;
};

const age = (date) => {
  date = date.replace(/\-/g, "");

  const yearFilter = date.substring(0, 4);

  const monthFilter = date.substring(4, 6);

  const dayFilter = date.substring(6, 8);

  const today = new Date();

  const year = today.getFullYear();

  const month = today.getMonth() + 1;

  const dayInMonth = today.getDate();

  let idade = year - yearFilter;

  if (month < monthFilter || (month == monthFilter && dayInMonth < dayFilter)) {
    idade--;
  }

  if (idade < 14) {
    return false;
  }

  return idade;
};

const isDateFormatura = (date, inicio, fim) => {
  const regex = new RegExp(/^(19[9][0-9]|20[0-2][0-9]|2030)$/);

  if (!regex.test(date)) {
    return false;
  }

  if (date.length != 4) {
    return false;
  }

  date = parseInt(date);

  if (date < inicio || date > fim) {
    return false;
  }

  return true;
};

const isvalid = (date) => {
  date = parseInt(date);

  const today = new Date();

  const year = today.getFullYear();

  const anoValido = date - year;

  if (!date || anoValido < 0) {
    return false;
  }

  return true;
};

const isSemestre = (data) => {
  data = parseInt(data);

  const semestreForm = [1, 2, 0];

  let semestre;

  for (let chave in semestreForm) {
    if (semestreForm[chave] === data) {
      semestre = semestreForm[chave];
      break;
    }
  }

  if (semestre === 0 || semestre === 1 || semestre === 2) {
    return true;
  }

  return false;
};

const isMesFormatura = (data) => {
  data = parseInt(data);

  if (!data) {
    return false;
  }

  const regex = new RegExp(/^(1|2|3|4|5|6|7|8|9|10|11|12)$/);

  if (!regex.test(data)) {
    return false;
  }

  if (data < 1 || data > 12) {
    return false;
  }

  return true;
};

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
    "Estágio Curricular",
  ];

  let periodo;

  for (let chave in periodos) {
    if (periodos[chave] == data) {
      periodo = periodos[chave];
      break;
    }
  }

  if (!periodo) {
    return false;
  }

  return true;
};

const isHorario = (data) => {
  const horariosEstudos = ["Manhã", "Tarde", "Noite", "EAD", "EC", "F"];

  let horario;

  for (let chave in horariosEstudos) {
    if (horariosEstudos[chave] === data) {
      horario = horariosEstudos[chave];
      break;
    }
  }

  if (!horario) {
    return false;
  }

  return true;
};

const isSexo = (sexo) => {
  const regex1 = new RegExp(/^[FM]$/);

  if (!regex1.test(sexo)) {
    return false;
  }

  sexo = parseInt(sexo);
  if (sexo) {
    return false;
  }

  return true;
};

const isUfNaturalidade = (ufNaturalidade) => {
  const listUfNaturalidade = [
    "RO",
    "AC",
    "AM",
    "RR",
    "PA",
    "AP",
    "TO",
    "MA",
    "PI",
    "CE",
    "RN",
    "PB",
    "PE",
    "AL",
    "SE",
    "BA",
    "MG",
    "ES",
    "RJ",
    "SP",
    "PR",
    "SC",
    "RS",
    "MS",
    "MT",
    "GO",
    "DF",
  ];

  let state;

  for (let i = 0; i < listUfNaturalidade.length; i++) {
    if (listUfNaturalidade[i] === ufNaturalidade) {
      state = listUfNaturalidade[i];
    }
  }

  if (
    state != ufNaturalidade ||
    ufNaturalidade.length === 0 ||
    ufNaturalidade.length != 2
  ) {
    return false;
  }

  ufNaturalidade = parseInt(ufNaturalidade);
  if (ufNaturalidade) {
    return false;
  }

  return true;
};

const isDeficiente = (listDeficiencias, deficiencia) => {
  let value;

  for (let i = 0; i < listDeficiencias.length; i++) {
    if (deficiencia === listDeficiencias[i]) {
      value = listDeficiencias[i];
    }
  }

  if (value !== deficiencia) {
    return false;
  }

  const regex = new RegExp(/^(N|F|A|V|ME|MU|TE)$/);

  if (!regex.test(deficiencia)) {
    return false;
  }

  deficiencia = parseInt(deficiencia);
  if (deficiencia) {
    return false;
  }

  return true;
};

const isDescricao = (descricao) => {
  descricao = descricao.trim();
false
  const regex = new RegExp(/^[0-9]+$/);

  if (regex.test(descricao)) {
    return false;
  }

  if (descricao.length === 0) {
    return false;
  }

  return true;
};

const removerMensagem = (id) => {
  setTimeout(() => {
    const msg = (document.getElementById(id).innerHTML = "");
  }, 3000);
};

const isNumero = (numero) => {
  const regex = new RegExp(/^\d+$/);

  if (!regex.test(numero)) {
    return false;
  }

  if (numero.length === 0) {
    return false;
  }

  if (numero.length > 6) {
    return false;
  }

  numero = parseInt(numero);
  if (!numero) {
    return false;
  }

  return true;
};

const isComplemento = (complemento) => {
  if (complemento.length === 0) {
    return false;
  }

  return true;
};

const isTelefone = (telefone) => {
  const regex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/);

  if (!regex.test(telefone)) {
    return false;
  }

  telefone = telefone.replace(/[^0-9]/g, "");

  if (telefone.length === 0) {
    return false;
  }

  telefone = parseInt(telefone);

  if (!telefone) {
    return false;
  }

  return true;
};

const isEmail = (email) => {
  if (!validator.isEmail(email)) {
    return false;
  }

  return true;
};

const emailBd = async (emailBd) => {
  let email;

  try {
    const response = await fetch(`/verificarEmail?termo=${emailBd}`);
    if (response.ok) {
      const opcoes = await response.json();
      email = opcoes.map((email) => email.email);
    } else {
      console.log("Erro na solicitação:", response.statusText);
    }
  } catch (error) {
    console.error("Erro:", error);
  }

  if (email.length > 0) {
    return false;
  }

  return true;
};

const isCep = (cep) => {
  const regex = new RegExp(/^[0-9]{5}-[0-9]{3}$/);

  if (!regex.test(cep)) {
    return false;
  }

  cep = cep.replace(/[^0-9]/g, "");

  if (cep.length === 0 && cep.length !== 8) {
    return false;
  }

  cep = parseInt(cep);
  if (!cep) {
    return false;
  }

  return true;
};

const dateTime = () => {
  const today = new Date();

  return `${today
    .toLocaleDateString({
      year: "numeric",
      day: "2-digit",
      month: "2-digit",
    })
    .replace(/[/]/g, "-")} ${today.toLocaleTimeString("pt-BR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })}`;
};

const dateRegister = () => {
  const today = new Date();

  const year = today.getFullYear();

  let month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let dayInMonth = today.getDate();
  if (dayInMonth < 10) {
    dayInMonth = "0" + dayInMonth;
  }

  return year + "-" + month + "-" + dayInMonth;
};

const selecionarNomes = (name) => {
  for (let i = 0; i < name.length; i++) {
    if (name[i].checked) {
      return name[i].value;
    }
  }
};

const erroInput = (object) => {
  for (let chave in object) {
    if (object[chave] === false && chave !== "nomepai" && chave !== "ctps") {
      if (chave === "nomemae") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo nome mãe inválido!</p>`;
        break
      } else if (chave === "orgaoexpedidor") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo orgão expedidor inválido!</p>`;
        break
      } else if (chave === "idade") {
        continue;
      } else if (chave === "dt_nascimento") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo data de nascimento inválido!</p>`;
        break
      }
      else if (chave === "dt_nascimento") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo data de nascimento inválido!</p>`;
        break
      } else if (chave === "deficiencia_descricao") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo descreva a deficiência inválido!</p>`;
        break
      } else if (chave === "nome_social") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo nome social inválido!</p>`;
        break
      } else if (chave === "cpf_mae") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo CPF mãe inválido!</p>`;
        break
      } else if (chave === "cpf_pai") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo CPF pai inválido!</p>`;
        break
      } else {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Campo ${chave} inválido!</p>`;
        break
      }
    }
  }
};

const erroInputProgramasEmCurso = (object) => {
  for (let chave in object) {
    if (chave === "indicacao") {
      document.getElementById(
        `msg-fracasso-programa-curso`
      ).innerHTML = `<p>Campo "Como você ficou sabendo deste desafio?" inválido!</p>`;
      break
    } else if (chave === "chamou_atencao_desafio") {
      document.getElementById(
        `msg-fracasso-programa-curso`
      ).innerHTML = `<p>Campo "O que mais te chamou a atenção neste desafio?" inválido!</p>`;
      break
    } else if (chave === "descricao_indicacao") {
      document.getElementById(
        `msg-fracasso-programa-curso`
      ).innerHTML = `<p>Campo "Descrição de como você ficou sabendo deste desafio?" inválido!</p>`;
      break
    } else if (chave === "descricao_chamou_atencao") {
      document.getElementById(
        `msg-fracasso-programa-curso`
      ).innerHTML = `<p>Campo "Descrição do que mais te chamou a atenção neste desafio?" inválido!</p>`;
      break
    }
  }
};

const erroSelect = (select) => {
  const selects = document.querySelectorAll(select);

  for (let i = 0; i < selects.length; i++) {
    if (selects[i].value === "Selecione") {
      if (selects[i].name === "estadoCivil") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Selecione o seu estado civil!</p>`;
        break
      } else if (selects[i].name === "sexos") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Selecione o sexo!</p>`;
        break
      } else if (selects[i].name === "ufNaturalidade") {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Selecione o seu uf de naturalidade!</p>`;
        break
      } else {
        document.getElementById(
          `msg-fracasso`
        ).innerHTML = `<p>Selecione uma opção em "Possui alguma deficiência?"!</p>`;
        break
      }
    }
  }
};

const erroInputAddress = (object) => {
  for (let chave in object) {
    if (object[chave] === false && chave !== "complemento") {
      if (chave === "telefone1") {
        document.getElementById(
          `msg-fracasso-address`
        ).innerHTML = `<p>Campo telefone 1 inválido!</p>`;
        break
      } else if (chave === "telefone2") {
        document.getElementById(
          `msg-fracasso-address`
        ).innerHTML = `<p>Campo telefone 2 inválido!</p>`;
        break
      } else {
        document.getElementById(
          `msg-fracasso-address`
        ).innerHTML = `<p>Campo ${chave} inválido!</p>`;
        console.log(object[chave]);
        break
      }
    }
  }
}

const erroInputSocioEconomic = (object) => {
  for (let chave in object) {
    if (object[chave] === false) {
      if (chave === "pessoas_por_residencia") {
        document.getElementById(
          `msg-fracasso-socio-economy`
        ).innerHTML = `<p>Campo pessoas por residência inválido!</p>`;
        removerMensagem(`msg-fracasso-socio-economy`)
        break
      } else if (chave === "tem_filhos") {
        document.getElementById(
          `msg-fracasso-socio-economy`
        ).innerHTML = `<p>Campo tem filhos inválido!</p>`;
        removerMensagem(`msg-fracasso-socio-economy`)
        break
      } else {
        document.getElementById(
          `msg-fracasso-socio-economy`
        ).innerHTML = `<p>Campo ${chave} inválido!</p>`;
        removerMensagem(`msg-fracasso-socio-economy`)
        break
      }
    }
  }
}

const erroSelectSchool = (select, ano) => {
  const selects = document.querySelectorAll(select, ano);

  for (let i = 0; i < selects.length; i++) {
    if (selects[i].value === "Selecione" || selects[i].value === "") {
      if (selects[i].name === "escolas") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista de escolas.</p>`;
        break
      } else if (selects[i].name === "cursos") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista de cursos.</p>`;
        break
      }
      else if (selects[i].name === "anoFormatura") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista ano de formatura.</p>`;
        break
      } else if (selects[i].name === "semestreFormatura") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista semestre de formatura.</p>`;
        break
      } else if (selects[i].name === "mesFormatura") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista Mês de Formatura.</p>`;
        break
      } else if (selects[i].name === "periodo" && isvalid(ano)) {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista período/ano/ciclo/módulo.</p>`;
        break
      } else if (selects[i].name === "horarioEstudo") {
        document.getElementById(
          `msg-fracasso-school`
        ).innerHTML = `<p>Selecione um item da lista horário de estudo.</p>`;
        break
      }
    }
  }
}

class CreateInputLabel {

  constructor(tagAnterior, textLabel, idClass) {
    this.tagAnterior = tagAnterior;
    this.textLabel = textLabel;
    this.idClass = idClass;

    this.doLabelInput();
  }

  doLabelInput() {
    this.createInputLabel()
  }

  createInputLabel() {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const p = document.createElement('p')
    const span = document.createElement("span")
    this.tagAnterior.insertAdjacentElement("afterend", div);
    div.appendChild(label);
    div.id = `div-${this.idClass}`
    label.innerText = this.textLabel;
    label.htmlFor = this.idClass
    label.insertAdjacentElement("afterend", input);
    input.className = this.idClass;
    input.id = this.idClass;
    input.required = true;
    p.className = "obrigatorio"
    p.innerText = "Obrigatório"
    span.id = `msg-${this.idClass}`
    input.insertAdjacentElement("afterend", p)
    p.insertAdjacentElement("afterend", span)
  }
}

class CreateRadius {
  constructor(tagAnterior, nameRadiu, inputClass, label, labelClass, title, titleNameClass, divNameClass, sgTitleGeral, sgAsk, divGeral) {
    this.tagAnterior = tagAnterior;
    this.divGeral = divGeral;
    this.label = label;
    this.title = title;
    this.titleNameClass = titleNameClass;
    this.divNameClass = divNameClass;
    this.sgTitleGeral = sgTitleGeral;
    this.sgAsk = sgAsk;
    this.labelClass = labelClass;
    this.nameRadiu = nameRadiu;
    this.inputClass = inputClass;

    this.createRadius()
  }

  createRadius() {
    const divTemp = document.createElement('div');
    divTemp.className = this.divGeral
    for (let i = 0; i < this.label.length; i++) {
      let div = document.createElement('div');
      div.className = this.divNameClass;
      div.id = `{${this.sgTitleGeral}${i}}`;
      if (i === 0) {
        const h4 = document.createElement("h4");
        h4.innerText = this.title;
        h4.className = this.titleNameClass;
        this.tagAnterior.insertAdjacentElement("afterbegin", divTemp);
        divTemp.insertAdjacentElement("afterbegin", h4);
        h4.insertAdjacentElement("afterend", div);
        const span = document.createElement("span")
        span.className = "span-obrigatorio"
        span.innerText = "Obrigatório"
        h4.insertAdjacentElement("beforeend", span);
      }
      if (i !== 0) {
        document.getElementById(`{${this.sgTitleGeral}${i - 1}}`).insertAdjacentElement("afterend", div);
      }
      let input = document.createElement('input');
      let label = document.createElement('label');
      label.htmlFor = `${this.sgAsk}${i}`
      label.innerText = this.label[i]
      label.className = this.labelClass
      input.id = `${this.sgAsk}${i}`
      input.value = i
      input.type = "radio"
      input.required = true;
      input.name = this.nameRadiu;
      input.className = this.inputClass;
      div.insertAdjacentElement("afterbegin", input);
      input.insertAdjacentElement("afterend", label);
    }
  }
}

module.exports = {
  CreateInputLabel,
  CreateRadius,
  erroInputSocioEconomic,
  erroSelect,
  erroInput,
  erroInputAddress,
  erroSelectSchool,
  isCpf,
  isNome,
  changeMains,
  changeSubMainTitle,
  safeQuerySelector,
  showAlert,
  hideAlert,
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
  isRg,
  dateTime,
  dateRegister,
  age,
  emailBd,
  cpfInBd,
  conferirFormBasic,
  conferirFormAddress,
  conferirFormSchool,
  selecionarNomes,
  erroInputProgramasEmCurso
};
