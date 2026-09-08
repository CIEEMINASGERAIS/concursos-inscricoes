const {
  isDateFormatura,
  isSchool,
  isCourse,
  removerMensagem,
  isvalid,
  isSemestre,
  isMesFormatura,
  isPeriodo,
  isHorario,
  changeMains,
  changeSubMainTitle,
  erroSelectSchool,
} = require("../utils/util");

/**
 * Habilita/desabilita o botão "Finalizar" da tela de Dados Acadêmicos
 * com base nos campos visíveis no momento.
 *
 * Regras:
 *   1. #nivel precisa ter valor selecionado (não-vazio).
 *   2. #tipo (Curso) precisa ter valor selecionado.
 *   3. Se a div `#div-curso-similar` NÃO estiver com a classe
 *      `div-curso-similar-hidden` (ou seja, está visível porque o curso
 *      escolhido foi "13" = "Ou Graduação similar em 'tecnologia'
 *      conforme edital" ou "15" = "Ou similar conforme edital"),
 *      então `#curso-similar` precisa estar preenchido.
 */
function atualizarBotaoFinalizar() {
  const btn = document.querySelector(".button-finish-school");
  if (!btn) return;

  let tudoPreenchido = true;

  const nivel = document.getElementById("nivel");
  const tipo = document.getElementById("tipo");
  const divCursoSimilar = document.getElementById("div-curso-similar");
  const cursoSimilar = document.getElementById("curso-similar");

  if (!nivel || !nivel.value) tudoPreenchido = false;
  if (!tipo || !tipo.value) tudoPreenchido = false;

  if (
    divCursoSimilar &&
    !divCursoSimilar.classList.contains("div-curso-similar-hidden")
  ) {
    if (!cursoSimilar || !cursoSimilar.value.trim()) {
      tudoPreenchido = false;
    }
  }

  btn.disabled = !tudoPreenchido;
}

// Importação lazy para evitar ciclo de require entre schoolData.js e
// app.js (app.js importa createFormSchoolData, e este módulo exporta
// enviarCadastro que schoolData.js consome).
let _enviarCadastro = null;
function getEnviarCadastro() {
  if (_enviarCadastro) return _enviarCadastro;
  // eslint-disable-next-line global-require
  const app = require("./app.js");
  _enviarCadastro = app.enviarCadastro;
  return _enviarCadastro;
}

const generator = require("generate-password");
const { clientLogger } = require("../utils/clientLogger.js");

async function createFormSchoolData() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("schoolData");
    const htmlContent = await response.text();

    const schoolData = document.querySelector(".screen-school-data");

    schoolData.innerHTML = htmlContent;

    const formSchoolData = document.querySelector(".form-school-data");

    // ====================================================================
    // LÓGICA ANTIGA DE DADOS ACADÊMICOS (ano, semestre, mês, período,
    // horário de estudo) — comentada para preservar referência enquanto
    // o novo formulário de Cursos está em construção.
    // ====================================================================

    /*
    const anoFormatura = document.getElementById("ano-formatura");

    const inicio = 1990;

    const fim = 2030;

    const anosFormaturas = [];

    for (let i = inicio; i <= fim; i++) {
      anosFormaturas.push(i);
    }

    for (let i = 0; i < anosFormaturas.length; i++) {
      const option = document.createElement("option");
      option.text = anosFormaturas[i];
      option.value = anosFormaturas[i];
      anoFormatura.appendChild(option);
    }

    const semestreFormatura = document.getElementById("semestre-formatura");

    const semestresFormaturas = [1, 2, "Estágio Curricular"];

    for (let i = 0; i < semestresFormaturas.length; i++) {
      const option = document.createElement("option");
      option.text = semestresFormaturas[i];
      if (semestresFormaturas[i] === "Estágio Curricular") {
        option.value = 0;
      } else {
        option.value = semestresFormaturas[i];
      }
      semestreFormatura.appendChild(option);
    }

    const mesFormatura = document.getElementById("mes-formatura");

    const mesesFormaturas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    for (let i = 0; i < mesesFormaturas.length; i++) {
      const option = document.createElement("option");
      option.text = mesesFormaturas[i];
      option.value = mesesFormaturas[i];
      mesFormatura.appendChild(option);
    }

    const periodo = document.getElementById("periodo");

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

    for (let i = 0; i < periodos.length; i++) {
      const option = document.createElement("option");
      option.text = periodos[i];
      option.value = periodos[i];
      periodo.appendChild(option);
    }

    const horario = document.querySelector(".horario-estudo-search select");

    horariosEstudos = [
      "Manhã",
      "Tarde",
      "Noite",
      "EAD",
      "Estágio Curricular",
      "Formado",
    ];

    for (let i = 0; i < horariosEstudos.length; i++) {
      const option = document.createElement("option");
      option.text = horariosEstudos[i];
      if (horariosEstudos[i] === "Estágio Curricular") {
        option.value = "EC";
      } else if (horariosEstudos[i] === "Formado") {
        option.value = "F";
      } else {
        option.value = horariosEstudos[i];
      }
      horario.appendChild(option);
    }

    function mostrarOpcoesAutocompleteHorario(horariosEstudos) {
      horario.innerHTML = "";

      const option1 = document.createElement("option");
      option1.disabled = "disabled";
      option1.selected = "selected";
      option1.text = "Selecione";
      horario.appendChild(option1);

      dataFormSchool.horario = false

      for (let i = 0; i < horariosEstudos.length; i++) {
        const option = document.createElement("option");
        option.text = horariosEstudos[i];
        if (horariosEstudos[i] === "Estágio Curricular") {
          option.value = "EC";
        } else if (horariosEstudos[i] === "Formado") {
          option.value = "F";
        } else {
          option.value = horariosEstudos[i];
        }
        horario.appendChild(option);
      }

      $(horario).selectpicker("refresh");
    }
    */

    // Gera a senha temporária UMA vez e amarra ao `dataFormSchool`.
    // O backend persiste no model (criptografa via `beforeSave` +
    // bcrypt) e envia por e-mail na confirmação. Era gerada no
    // formulário antigo mas nunca era injetada no payload — bug
    // encontrado em 2026-08-24: o backend respondia 400
    // "concurso_inscritos.senha cannot be null".
    const password = generator.generate({
      length: 6,
      numbers: true,
      lowercase: true,
      uppercase: true,
      excludeSimilarCharacters: true,
    });

    // Inicializa dataFormSchool já com a senha gerada. Sem isso, o
    // POST saía sem `senha`, o backend respondia 400
    // (`senha cannot be null`) e o e-mail de confirmação não saía
    // porque `req.body.senha` virava `undefined` no template.
    const dataFormSchool = { senha: password };

    // ====================================================================
    // Captura de matrícula (campo antigo) — comentado junto com o
    // restante do formulário acadêmico.
    // ====================================================================

    /*
    const matricula = document.getElementById("matricula");

    if (matricula) {
      matricula.addEventListener("input", (e) => {
        dataFormSchool.matricula = e.target.value.trim();
      });
    }
    */

    // ====================================================================
    // Busca de escola — comentada. A escola deixou de ser coletada nesta
    // tela; quando voltar, restaurar este bloco.
    // ====================================================================

    /*
    const escolas = document.querySelector(".escola-search select");
    */

    // ====================================================================
    // NOVO FORMULÁRIO DE CURSOS — cascata:
    //   select #nivel  ->  popula #tipo (Curso)
    //                  ->  se #tipo = "Graduação Similar", mostra input #curso-similar
    //
    // IMPORTANTE: as referências DOM (`#nivel`, `#tipo`, `#curso-similar`)
    // DEVEM ser capturadas DEPOIS do `schoolData.innerHTML = htmlContent`
    // acima. Se forem capturadas antes, apontam para elementos fora do
    // DOM e os listeners `.change` nunca disparam (bug encontrado em
    // teste com Playwright em 2026-08-24).
    // ====================================================================

    const nivel = document.getElementById("nivel");
    const tipo = document.getElementById("tipo");
    const divCursoSimilar = document.getElementById("div-curso-similar");
    const cursoSimilarInput = document.getElementById("curso-similar");

    // Mapa Nível -> Cursos. Os `value` são índices 0..15 (lista flat);
    // as `label` são exatamente os textos enviados. Os valores
    // "13" ("Ou Graduação similar em 'tecnologia' conforme edital") e
    // "15" ("Ou similar conforme edital") disparam o input condicional
    // #curso-similar — ver `onTipoChange` mais abaixo.
    // Obs.: o nível "graduacao-tecnologica" deixou de existir; os
    // cursos 11/12/13 migraram para "graduacao".
    const CURSOS_POR_NIVEL = {
      "pos-graduacao": [
        { value: "0", label: "Pós-Graduação em Direito" },
      ],
      "graduacao": [
        { value: "1",  label: "Administração" },
        { value: "2",  label: "Biblioteconomia" },
        { value: "3",  label: "Comunicação Social" },
        { value: "4",  label: "Comunicação Social com Habilitação em Publicidade" },
        { value: "5",  label: "Direito" },
        { value: "6",  label: "Engenharia Civil" },
        { value: "7",  label: "Engenharia Elétrica" },
        { value: "8",  label: "Jornalismo" },
        { value: "9",  label: "Marketing" },
        { value: "10", label: "Publicidade e Propaganda" },
        { value: "11", label: "Ciência da Computação" },
        { value: "12", label: "Sistemas de Informação" },
        { value: "13", label: "Ou Graduação similar em “tecnologia” conforme edital" },
      ],
      "ensino-medio": [
        { value: "14", label: "Técnico em Informática" },
        { value: "15", label: "Ou similar conforme edital" },
      ],
    };

    function popularTipo(listaCursos) {
      // Limpa opções antigas, mantém só o placeholder "Selecione".
      tipo.innerHTML = "";

      const optionDefault = document.createElement("option");
      optionDefault.value = "";
      optionDefault.disabled = "disabled";
      optionDefault.selected = "selected";
      optionDefault.text = "Selecione";
      tipo.appendChild(optionDefault);

      for (let i = 0; i < listaCursos.length; i++) {
        const option = document.createElement("option");
        option.value = listaCursos[i].value;
        option.text = listaCursos[i].label;
        tipo.appendChild(option);
      }

      $(tipo).selectpicker("refresh");
    }

    function resetCursoSimilar() {
      if (cursoSimilarInput) {
        cursoSimilarInput.value = "";
      }
      if (divCursoSimilar) {
        divCursoSimilar.classList.add("div-curso-similar-hidden");
      }
      dataFormSchool.cursoSimilar = "";
    }

    $(document).ready(function () {
      $(".nivel-search select").selectpicker();
      $(".tipo-search select").selectpicker();

      // ------------------------------------------------------------------------
      // IMPORTANTE: bootstrap-select@1.13.14 consome o evento `change` do
      // <select> subjacente e dispara seu próprio evento
      // `changed.bs.select` no wrapper `.bootstrap-select`. Listener direto
      // em `.change()` no <select> pode não receber o evento em todos os
      // cenários (browser não-PointerEvent, sync dispatch, etc.). Usamos os
      // dois para garantir (defesa em profundidade).
      // ------------------------------------------------------------------------
      const onNivelChange = (nivelSelecionado) => {
        dataFormSchool.nivel = nivelSelecionado;
        dataFormSchool.curso = "";
        document.getElementById("msg-nivel").innerHTML = "";
        document.getElementById("msg-tipo").innerHTML = "";

        const lista = CURSOS_POR_NIVEL[nivelSelecionado] || [];
        popularTipo(lista);
        resetCursoSimilar();
        // Mudou o nível → reset do tipo libera/bloqueia conforme regra.
        atualizarBotaoFinalizar();
      };

      const onTipoChange = (cursoSelecionado) => {
        dataFormSchool.curso = cursoSelecionado;
        document.getElementById("msg-tipo").innerHTML = "";

        if (
          cursoSelecionado === "13" ||
          cursoSelecionado === "15"
        ) {
          if (divCursoSimilar) {
            divCursoSimilar.classList.remove("div-curso-similar-hidden");
          }
        } else {
          resetCursoSimilar();
        }
        // Mudou o curso → pode liberar/bloquear conforme o input
        // #curso-similar ficar visível ou não.
        atualizarBotaoFinalizar();
      };

      // 1) evento nativo `change` no <select>
      nivel.addEventListener("change", (e) => onNivelChange(e.target.value));
      tipo.addEventListener("change", (e) => onTipoChange(e.target.value));

      // 2) evento do bootstrap-select no wrapper
      $(nivel).on("changed.bs.select", function (e, clickedIndex, newValue) {
        onNivelChange(newValue || nivel.value);
      });
      $(tipo).on("changed.bs.select", function (e, clickedIndex, newValue) {
        onTipoChange(newValue || tipo.value);
      });

      // Captura do input similar (apenas se existir/estiver visível).
      if (cursoSimilarInput) {
        cursoSimilarInput.addEventListener("input", (e) => {
          dataFormSchool.cursoSimilar = e.target.value.trim();
          // Digitar no campo similar afeta diretamente a regra do botão.
          atualizarBotaoFinalizar();
        });
      }
    });

    // Estado inicial do botão "Finalizar" — bloqueado até que
    // #nivel, #tipo e (condicionalmente) #curso-similar estejam OK.
    atualizarBotaoFinalizar();

    let valid;

    // ====================================================================
    // Validações acadêmicas antigas removidas — o novo formulário de
    // Cursos tem sua própria cascata registrada acima.
    // ====================================================================

    if (formSchoolData) {
      formSchoolData.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Captura os 3 campos do novo formulário de Cursos. O
        // `dataFormSchool.curso` recebe o value do <select #tipo>
        // ("0".."15"). O `dataFormSchool.cursoSimilar` só é
        // preenchido se o input estiver visível (a classe
        // `.div-curso-similar-hidden` é a fonte de verdade — checamos
        // por ela em vez de `.style.display` porque o bootstrap-select
        // zera inline style quando (re)inicializa).
        dataFormSchool.nivel = nivel ? nivel.value : "";
        dataFormSchool.curso = tipo ? tipo.value : "";
        dataFormSchool.curso_similar =
          cursoSimilarInput &&
          divCursoSimilar &&
          !divCursoSimilar.classList.contains("div-curso-similar-hidden")
            ? cursoSimilarInput.value.trim()
            : "";

        // O backend espera o payload com as chaves `curso` (VARCHAR2
        // preenchido pelo value do #tipo) e `curso_similar` (string
        // do input visível, ou vazio). Não enviamos `nivel` porque a
        // coluna correspondente ainda não existe — e o spread
        // ...req.body no controller só persiste colunas que existem
        // no model (Sequelize ignora chaves desconhecidas no create).

        const enviarCadastro = getEnviarCadastro();

        // Avisos de UX: o cadastro prossegue mesmo sem esses campos
        // preenchidos. O backend (gate `deveEnviarEmail` em
        // postCadastrar.js) é quem decide se o e-mail de confirmação
        // sai ou não. Aqui só registramos no clientLogger para
        // diagnóstico e exibimos uma mensagem inline no campo.
        if (!dataFormSchool.curso) {
          clientLogger.warn("CADASTRO_CURSO_NAO_SELECIONADO", {
            nivel: dataFormSchool.nivel,
          });
          const msg = document.getElementById("msg-tipo");
          if (msg) msg.innerHTML = "Selecione um curso.";
          // Não retornamos: cadastro segue, mas e-mail nao sera
          // enviado (gate do backend).
        }
        if (
          (dataFormSchool.curso === "13" || dataFormSchool.curso === "15") &&
          !dataFormSchool.curso_similar
        ) {
          clientLogger.warn("CADASTRO_CURSO_SIMILAR_VAZIO", {
            curso: dataFormSchool.curso,
          });
          const msg = document.getElementById("msg-curso-similar");
          if (msg) msg.innerHTML = "Especifique o curso.";
          // Mesmo motivo: nao bloqueamos o submit.
        }

        try {
          await enviarCadastro(dataFormSchool);
          resolve(dataFormSchool);
        } catch (envioErr) {
          // Erros de rede/validação já são tratados e logados dentro
          // de enviarCadastro → postCadastroWithRetry. Aqui só
          // mantemos a promise rejeitada para que `takeData()` em
          // app.js saiba que algo falhou.
          clientLogger.error("CADASTRO_ERRO_ENVIO", {
            mensagem: envioErr?.message,
            classificacao: envioErr?.classification,
          });
          reject(envioErr);
        }
      });
    } else {
      reject(new Error("O formulário não foi encontrado!"));
    }
  });
}

module.exports = createFormSchoolData;