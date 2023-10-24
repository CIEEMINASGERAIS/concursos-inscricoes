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
} = require("../utils/util");

const generator = require('generate-password');

async function createFormSchoolData() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("schoolData");

    const htmlContent = await response.text();

    const schoolData = document.querySelector(".screen-school-data");

    schoolData.innerHTML = htmlContent;

    const formSchoolData = document.querySelector(".form-school-data");

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
      }
      else {
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

      for (let i = 0; i < horariosEstudos.length; i++) {
        const option = document.createElement("option");
        option.text = horariosEstudos[i];
        if (horariosEstudos[i] === "Estágio Curricular") {
          option.value = "EC";
        } else if (horariosEstudos[i] === "Formado") {
          option.value = "F";
        }
        else {
          option.value = horariosEstudos[i];
        }
        horario.appendChild(option);
      }

      $(horario).selectpicker("refresh");
    }

    const password = generator.generate({
      length: 6,
      numbers: true,
      lowercase: true,
      uppercase: true,
      excludeSimilarCharacters: true
    });


    const dataFormSchool = {};

    const escolas = document.querySelector(".escola-search select");
    const cursos = document.querySelector(".curso-search select");
    let codigoEscola = {};
    let idCursoFinal;
    let idCurso = {};
    let codeFinal;

    function mostrarOpcoesAutocompleteEscolas(opcoes) {
      escolas.innerHTML = "";

      const option1 = document.createElement("option");
      option1.disabled = "disabled";
      option1.selected = "selected";
      option1.text = "Selecione";
      escolas.appendChild(option1);

      for (let i = 0; i < opcoes.length; i++) {
        const option = document.createElement("option");
        option.text = opcoes[i].razaosocial;
        option.value = opcoes[i].razaosocial;
        escolas.appendChild(option);
      }

      $(escolas).selectpicker("refresh");
    }

    function mostrarOpcoesAutocompleteCursos(opcoes) {
      cursos.innerHTML = "";

      const option1 = document.createElement("option");
      option1.disabled = "disabled";
      option1.selected = "selected";
      option1.text = "Selecione";
      cursos.appendChild(option1);

      for (let i = 0; i < opcoes.length; i++) {
        const option = document.createElement("option");
        option.text = opcoes[i].descricao;
        option.value = opcoes[i].descricao;
        cursos.appendChild(option);
      }

      $(cursos).selectpicker("refresh");
    }

    function filtrarCursos(data) {
      for (let i = 0; i < codigoEscola.length; i++) {
        let codeEscola = {
          razaosocial: codigoEscola[i].razaosocial,
          id: codigoEscola[i].id,
        };
        if (codeEscola.razaosocial === data) {
          return (codeFinal = codeEscola.id);
        }
      }
    }

    function filtrarIdCurso(descricaoCurso) {
      for (let i = 0; i < idCurso.length; i++) {
        let cursoId = {
          descricao: idCurso[i].descricao,
          idcurso: idCurso[i].idcurso,
        };
        if (cursoId.descricao === descricaoCurso) {
          return idCursoFinal = cursoId.idcurso;
        }
      }
    }

    const periodoFinal = () => {
      for (let i = 0; i < idCurso.length; i++) {
        if (dataFormSchool.curso_id === idCurso[i].idcurso) {
          return idCurso[i].duracao
        }
      }
    }

    const anoIngresso = (formatura) => {
      for (let i = 0; i < idCurso.length; i++) {
        if (dataFormSchool.curso_id === idCurso[i].idcurso) {
          let tempoCurso = idCurso[i].duracao / 2
          tempoCurso = Math.ceil(tempoCurso)
          return dataFormSchool.anoingresso = formatura - tempoCurso
        }
      }
    }

    const callCourse = async () => {
      try {
        const response = await fetch(
          `http://appcadastro.cieemg.org.br/cadastrarCurso?termo=${codeFinal}`
        );
        if (response.ok) {
          const opcoes = await response.json();
          idCurso = opcoes;
          mostrarOpcoesAutocompleteCursos(opcoes);
        } else {
          console.log("Erro na solicitação:", response.statusText);
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    $(document).ready(async function () {
      $(".escola-search select").selectpicker();

      const input = document.querySelector(".escola-search input");

      let validate;

      let opcoes;

      input.addEventListener("input", async (e) => {
        const element = e.target;

        try {
          const response = await fetch(
            `http://appcadastro.cieemg.org.br/cadastrarEscola?termo=${element.value}`
          );
          if (response.ok) {
            opcoes = await response.json();
            mostrarOpcoesAutocompleteEscolas(opcoes);
            codigoEscola = opcoes;
          } else {
            console.log("Erro na solicitação:", response.statusText);
          }
        } catch (error) {
          console.error("Erro:", error);
        }

        const SchoolFound = document.querySelector(".school-found");

        if (opcoes.length === 0) {
          SchoolFound.style.display = "block";

          if (SchoolFound.style.display === "block") {
            document.addEventListener("click", (e) => {
              const element = e.target;

              if (element.classList.contains("button-confirm-school")) {
                SchoolFound.style.display = "none";
              }
            });
          }
        }
      });

      $(".escola-search select").change(async (e) => {
        let data = e.currentTarget.value;
        filtrarCursos(data);
        validate = await isSchool(data, codeFinal);
        if (validate) {
          document.getElementById("msg-escola").innerHTML = "";
          callCourse();
          dataFormSchool.escola_id = codeFinal;
        } else {
          document.getElementById("msg-escola").innerHTML =
            "<p>Escola inválida!</p>";
          dataFormSchool.escola_id = false;
        }
      });
    });

    let valid;

    $(document).ready(function () {
      $(".curso-search select").selectpicker();

      $(".curso-search select").change(async (e) => {
        let data = e.currentTarget.value;
        filtrarIdCurso(data);
        let validate = await isCourse(data, codeFinal, idCursoFinal);
        if (validate) {
          document.getElementById("msg-curso").innerHTML = "";
          dataFormSchool.curso_id = idCursoFinal;
          anoIngresso()
        } else {
          document.getElementById("msg-curso").innerHTML =
            "<p>Curso inválido!</p>";
          dataFormSchool.curso_id = false;
        }
      });

      $(".ano-formatura-search select").selectpicker();

      $(".ano-formatura-search select").change((e) => {
        let data = e.currentTarget.value;

        let validate;

        validate = isDateFormatura(data, inicio, fim);
        valid = isvalid(data);
        let horarioIncompleto;
        if (validate) {
          document.getElementById("msg-ano").innerHTML = "";
          dataFormSchool.previsao_ano = data;
          if (!valid) {
            horarioIncompleto = ["Estágio Curricular", "Formado"];
            mostrarOpcoesAutocompleteHorario(horarioIncompleto);
            document.getElementById("div-periodo").style.display = "none";
            document.getElementById("periodo").style.display = true;
          } else {
            document.getElementById("div-periodo").style.display = "block";
            document.getElementById("periodo").style.display = false;
            horarioIncompleto = [];
            mostrarOpcoesAutocompleteHorario(horariosEstudos);
          }
        } else {
          document.getElementById("msg-ano").innerHTML = "<p>Ano inválido!</p>";
          dataFormSchool.previsao_ano = false;
        }
      });

      $(".semestre-formatura-search select").selectpicker();

      $(".semestre-formatura-search select").change((e) => {
        let data = e.currentTarget.value;
        let validate;

        validate = isSemestre(data);

        if (validate) {
          document.getElementById("msg-semestre-formatura").innerHTML = "";
          dataFormSchool.previsao_semestre = data;
        } else {
          document.getElementById("msg-semestre-formatura").innerHTML =
            "<p>Semestre de fomartura inválido!</p>";
          dataFormSchool.previsao_semestre = false;
        }
      });

      $(".mes-formatura-search select").selectpicker();

      $(".mes-formatura-search select").change((e) => {
        let data = e.currentTarget.value;

        let validate = isMesFormatura(data);

        if (validate) {
          document.getElementById("msg-mes-formatura").innerHTML = "";
          dataFormSchool.previsao_mes = data;
        } else {
          document.getElementById("msg-mes-formatura").innerHTML =
            "<p>Mês de fomartura inválido!</p>";
          dataFormSchool.previsao_mes = false;
        }
      });

      $(".periodo-search select").selectpicker();

      $(".periodo-search select").change((e) => {
        let data = e.currentTarget.value;

        let validate = isPeriodo(data);

        if (validate) {
          document.getElementById("msg-periodo").innerHTML = "";
          dataFormSchool.periodo = data;
        } else {
          document.getElementById("msg-periodo").innerHTML =
            "<p>Período inválido!</p>";
          dataFormSchool.periodo = false;
        }
      });

      $(".horario-estudo-search select").selectpicker();

      $(".horario-estudo-search select").change((e) => {
        let data = e.currentTarget.value;

        let validate = isHorario(data);

        if (validate) {
          document.getElementById("msg-horario").innerHTML = "";
          dataFormSchool.horario = data;
        } else {
          document.getElementById("msg-horario").innerHTML =
            "<p>Horário de estudo inválido!</p>";
          dataFormSchool.horario = false;
        }
      });
    });

    const alertEnd = document.querySelector(".end");

    if (formSchoolData) {
      formSchoolData.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (
          dataFormSchool.escola_id &&
          dataFormSchool.curso_id &&
          dataFormSchool.previsao_semestre &&
          dataFormSchool.previsao_ano &&
          dataFormSchool.previsao_mes &&
          dataFormSchool.horario
          // dataFormSchool.periodo
        ) {
          if (!valid) {
            dataFormSchool.periodo = periodoFinal()
          }
          anoIngresso(dataFormSchool.previsao_ano)
          const today = new Date();
          dataFormSchool.ano = today.getFullYear();
          dataFormSchool.senha = password
          alertEnd.style.display = "block";
          resolve(dataFormSchool);
        } else {
          document.getElementById("msg-fracasso-school").innerHTML =
            "<p>Formulário incompleto!</p>";
          removerMensagem("msg-fracasso-school");
        }
      });
    } else {
      console.log("Erro ao enviar os dados para o banco!");
      reject(error);
    }
  });
}

module.exports = createFormSchoolData;
