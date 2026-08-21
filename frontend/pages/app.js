const main = require("./main.js");
const termsAndConditions = require("./terms-and-conditions.js");
const initAddress = require("./address.js");
const initDataBasic = require("./dataBasic.js");
const createFormSchoolData = require("./schoolData.js");
const {
  conferirFormAddress,
  conferirFormBasic,
  changeMains,
  changeSubMainTitle,
  conferirFormSchool,
  dateTime,
  safeQuerySelector,
  showAlert,
  hideAlert,
  bindAlertDismiss,
  lockAllForms,
} = require("../utils/util.js");
const { clientLogger } = require("../utils/clientLogger.js");
const { fetchJson, classifyFetchError, readNetworkDiagnostics } = require("../utils/http.js");

// Referências mantidas no escopo do módulo para que `schoolData.js`
// consiga montar o payload completo quando o usuário clicar em
// "Finalizar" na última etapa (não usamos mais a página de
// avaliação social).
let _termsConditions = {};
let _formData = {};
let _formAddress = {};

// Liga o botao "Confirmar" do modal e o clique no overlay para
// fechar o modal. Idempotente.
bindAlertDismiss();

async function takeData() {
  const callMain = main();
  const termsConditions = await termsAndConditions();
  _termsConditions = termsConditions;

  const formData = await initDataBasic();
  _formData = formData;
  let validateFormBasic;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormBasic = false;

    validateFormBasic = conferirFormBasic(formData);

    if (validateFormBasic) {
      if (
        element.classList.contains("big-address") ||
        element.classList.contains("button-address")
      ) {
        changeMains(".screen-address");
        changeSubMainTitle("Formulário de Endereço");
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  const formAddress = await initAddress();
  _formAddress = formAddress;
  let validateFormAddress;
  document.addEventListener("click", function (event) {
    const element = event.target;

    validateFormAddress = false;

    validateFormAddress = conferirFormAddress(formAddress);

    if (validateFormAddress && validateFormBasic) {
      if (
        element.classList.contains("big-school-data") ||
        element.classList.contains("button-school-data")
      ) {
        changeMains(".screen-school-data");
        changeSubMainTitle("Formulário de Dados Acadêmicos");
      }
    } else {
      if (element.classList.contains("main")) {
        event.preventDefault();
      }
    }
  });

  await createFormSchoolData();
  // A página "Dados Acadêmicos" é a ÚLTIMA etapa do cadastro.
  // Nada mais acontece no `takeData` — o submit de schoolData
  // chama `enviarCadastro` diretamente, que monta o payload
  // com tudo o que já foi coletado.
}

// async function sendData() {
//   const data = await takeData();

//   const date = dateTime()

//   document.querySelector(".alert").style.display = "flex";

//   document.querySelector(".title-cadastro").innerHTML = `Carregando...`;

//   document.querySelector(".data-erro").innerHTML = ``;


//   document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, estamos finalizando o seu cadastro, aguarde um momento.`;

//   try {
//     const response = await fetch("/cadastrar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       error: false,
//       mensagem: "Usuário cadastrado com sucesso",
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {


//       document.querySelector(".alert").style.display = "flex";

//       document.querySelector(".title-cadastro").innerHTML = `Cadastro concluído!`;

//       document.querySelector(".data-erro").innerHTML = `<p>${date} v - 1.1.1</p>`;


//       document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
//       enviaremos em
//       até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`;
//     } else {
//       const erroResposta = await response.text();
//       document.querySelector(".alert").style.display = "flex";

//       document.querySelector(".title-cadastro").innerHTML = `Falha ao Realizar Cadastro.`;

//       document.querySelector(".data-erro").innerHTML = `<p>${date}</p>`;


//       document.querySelector(".message-final").innerHTML = `Olá ${data.nome}, ocorreu um erro desconhecido ao realizar o seu cadastro, favor entrar em contato através do número (31) 3429-8100.`;
//     }
//   } catch (error) {
//     console.log("Erro: ", error);
//   }
// }
// Gera (ou reaproveita) um ID único por TENTATIVA de cadastro do usuário.
// Esse ID é enviado no header X-Request-ID. Se o backend receber o MESMO
// header dentro de 5 min, retorna 200 com a resposta cacheada em vez de
// processar de novo — eliminando cadastro duplicado por "Failed to fetch"
// seguido de retry.
function obterOuGerarRequestId(cpf) {
  const storageKey = `cadastro_request_id:${cpf}`;
  let id = null;
  try {
    id = sessionStorage.getItem(storageKey);
  } catch {
    id = null;
  }

  if (!id) {
    id = `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    try {
      sessionStorage.setItem(storageKey, id);
    } catch {
      // sessionStorage indisponível (modo privado extremo). Fallback ok.
    }
  }
  return id;
}

async function postCadastroWithRetry(payload, maxTentativas = 5) {
  try {
    const requestId = obterOuGerarRequestId(payload.cpf);
    const resultado = await fetchJson("/cadastrar", {
      method: "POST",
      body: payload,
      headers: { "X-Request-ID": requestId },
      timeoutMs: 20000,
      maxTentativas,
      keepalive: false,
      retryOn5xx: true,
      contextoExtra: {
        cpf: payload.cpf,
        origem: "postCadastroWithRetry",
        payloadBytes: JSON.stringify(payload).length,
        requestId,
      },
    });

    // Se o backend sinalizou replay idempotente, marcar como sucesso
    // silencioso (sem erro de UI) — significa que o cadastro JÁ foi feito.
    const foiReplay = resultado.headersReplay || resultado.replay;

    return {
      ok: resultado.ok,
      status: resultado.status,
      body: typeof resultado.data === "string" ? resultado.data : JSON.stringify(resultado.data || ""),
      attempts: resultado.attempts,
      replay: foiReplay,
    };
  } catch (error) {
    const classification = error?.classification || classifyFetchError(error, "/cadastrar");

    clientLogger.warn("CADASTRO_TENTATIVA_FALHOU", {
      cpf: payload.cpf,
      tentativaFinal: maxTentativas,
      tipoErro: classification.tipo,
      labelErro: classification.label,
      mensagem: classification.mensagem,
      nomeErro: error?.name,
      ...readNetworkDiagnostics(),
    });

    throw Object.assign(error, { classification });
  }
}

async function enviarCadastro(dataFormSchool) {
  // Monta o payload final a partir dos 4 forms já coletados (terms,
  // dados básicos, endereço, dados acadêmicos). Não usamos mais a
  // página de avaliação social.
  const data = {
    ..._termsConditions,
    ..._formData,
    ..._formAddress,
    ...(dataFormSchool || {}),
  };

  // Campo obrigatório no model Estudante, antes definido pela tela
  // de avaliação social (removida). Default = 1 (envia e-mail de
  // confirmação). Pode ser sobrescrito se o backend ou um fluxo
  // futuro quiser desativar.
  if (data.enviar_email === undefined || data.enviar_email === null) {
    data.enviar_email = 1;
  }
  const date = dateTime();

  // Templates de feedback visual no popup de cadastro (alinhados com as
  // mensagens oficiais fornecidas pelo time de comunicação).
  const tituloErroPadrao = "Falha ao realizar sua Inscrição!";
  const mensagemErroPadrao =
    `Entre em contato com nossa central de concursos para análise do seu cadastro.<br><br>` +
    `Telefone/WhatsApp: (31) 3429-8100 – Opção 6<br>` +
    `E-mail: concursotjmmg@cieemg.org.br<br>` +
    `Horário de funcionamento: 08.30 até 17.30 de segunda a sexta-feira`;

  const parseErroBackend = (status, body) => {
    const bodyText = body || "";
    const bodyLower = bodyText.toLowerCase();

    // O backend pode responder com 400 (Validation error) OU 409 (UniqueConstraint)
    // dependendo de qual camada do catch pegou o erro. Ambos significam "duplicado"
    // quando o corpo menciona cpf/email "já cadastrado".
    const isDuplicado =
      bodyLower.includes("já cadastrad") ||
      bodyLower.includes("já existe um cadastro") ||
      bodyLower.includes("duplicate") ||
      bodyLower.includes("unique constraint") ||
      bodyLower.includes("already exists") ||
      status === 409;

    // Detecta especificamente erro de validação genérico do Sequelize
    // (não confundir com duplicado).
    const isValidationError = bodyLower.includes("validation error") && !isDuplicado;

    if (isDuplicado) {
      return {
        tipo: "duplicado",
        titulo: "Cadastro já realizado!",
        mensagem: `Olá ${data.nome}, identificamos que este CPF ou e-mail já possui cadastro. Verifique sua caixa de entrada (incluindo spam) pelo e-mail de confirmação. Em caso de dúvidas, ligue (31) 3429-8100.`,
      };
    }

    if (status === 413 || bodyLower.includes("payload too large") || bodyLower.includes("request entity too large")) {
      return {
        tipo: "payload_grande",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    if (status === 400) {
      if (isValidationError) {
        return {
          tipo: "dados_invalidos",
          titulo: tituloErroPadrao,
          mensagem: mensagemErroPadrao,
        };
      }
      return {
        tipo: "dados_invalidos",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    if (status >= 500) {
      return {
        tipo: "erro_servidor",
        titulo: tituloErroPadrao,
        mensagem: mensagemErroPadrao,
      };
    }

    return {
      tipo: "falha_generica",
      titulo: tituloErroPadrao,
      mensagem: mensagemErroPadrao,
    };
  };

  clientLogger.info("INICIO_CADASTRO_FRONTEND", {
    etapa: "INICIO_CADASTRO",
    cpf: data.cpf,
  });

  const alertEl = safeQuerySelector(".alert");
  const titleEl = safeQuerySelector(".title-cadastro");
  const dataErroEl = safeQuerySelector(".data-erro");
  const messageEl = safeQuerySelector(".message-final");
  const subMainTitleEl = safeQuerySelector(".sub-main-title");

  showAlert();
  // Esconde o título "Cadastro finalizado" da barra superior quando o
  // card detalhado de feedback entra em cena, para evitar sobreposição.
  if (subMainTitleEl) subMainTitleEl.style.display = "none";
  if (titleEl) titleEl.innerHTML = `Carregando...`;
  if (dataErroEl) dataErroEl.innerHTML = ``;
  if (messageEl) {
    messageEl.innerHTML =
      `Olá ${data.nome}, estamos finalizando o seu cadastro, aguarde um momento.`;
  }

  try {
    const resultado = await postCadastroWithRetry(data);

    if (resultado.ok) {
      // Limpa o requestId cacheado: cadastro concluído, próximo submit
      // deve poder gerar novo ID.
      try {
        sessionStorage.removeItem(`cadastro_request_id:${data.cpf}`);
      } catch {
        // ignore
      }
      showAlert();
      // Trava TODOS os forms e a navegacao lateral apos o cadastro
      // ser concluido. O usuario nao pode mais editar nada - apenas
      // fechar o popup (clicando no overlay borrado) ou clicar em
      // "Confirmar" (que redireciona para o portal do CIEE).
      lockAllForms();

      // Extrai o id do cadastro do corpo da resposta. O backend envia
      // `{ mensagem, cadastroId }`; toleramos tambem o caso de vir
      // apenas `{ mensagem }` exibindo o codigo de banco generico.
      let cadastroId = null;
      try {
        const parsed = JSON.parse(resultado.body || "{}");
        cadastroId = parsed?.cadastroId ?? parsed?.id ?? null;
      } catch {
        cadastroId = null;
      }
      const codigoInscricao = cadastroId ?? "ID DO BANCO";

      if (titleEl) {
        titleEl.innerHTML =
          `Inscrição concluída com sucesso!<br>` +
          `Código de Inscrição: ${codigoInscricao}`;
      }
      if (dataErroEl) dataErroEl.innerHTML = `<p>${date} v - 1.0.0</p>`;
      if (messageEl) {
        messageEl.innerHTML =
          `Atenção: Todas as informações referentes a datas, local de prova e demais ` +
          `informações consulte o edital publicado em nosso portal ` +
          `<a href="https://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a>.`;
      }
    } else {
      const erroCadastro = parseErroBackend(resultado.status, resultado.body);

      clientLogger[erroCadastro.tipo === "duplicado" ? "warn" : "error"]("FALHA_BACKEND_CADASTRO", {
        status: resultado.status,
        resposta: resultado.body,
        cpf: data.cpf,
        tipoErro: erroCadastro.tipo,
      });

      showAlert();
      if (titleEl) titleEl.innerHTML = erroCadastro.titulo;
      if (dataErroEl) {
        dataErroEl.innerHTML =
          `<p>${date} - status ${resultado.status}</p>`;
      }
      if (messageEl) messageEl.innerHTML = erroCadastro.mensagem;
    }
  } catch (error) {
    const classification = error?.classification || classifyFetchError(error, "/cadastrar");
    const isNetworkError = ["timeout", "rede", "mixed_content"].includes(classification.tipo);

    // CORREÇÃO: isProvavelSucesso era undefined (ReferenceError silencioso
    // engolido pelo try/catch). Como o backend tem idempotency middleware
    // respondendo 200 com a resposta cacheada em retentativas, podemos
    // SIM assumir que falha de rede com timeout longo = provável sucesso
    // (request pode ter chegado no backend e sido processado).
    // Default: warn (não error) para não poluir logs de PM2 com falsos erros.
    const isProvavelSucesso = isNetworkError;

    clientLogger[isProvavelSucesso ? "warn" : "error"]("CADASTRO_FALHA_REDE", {
      cpf: data.cpf,
      tipoErro: classification.tipo,
      labelErro: classification.label,
      mensagem: classification.mensagem,
      nomeErro: error?.name,
      attempts: error?.attempts || null,
      ...readNetworkDiagnostics(),
    });

    showAlert();
    if (titleEl) {
      titleEl.innerHTML =
        isNetworkError ? `Cadastro concluído!` : tituloErroPadrao;
    }
    if (dataErroEl) dataErroEl.innerHTML = `<p>${date} v - 1.0.0</p>`;

    // Se a falha foi de rede com provável sucesso (timeout longo
    // mas request pode ter chegado), tratamos como cadastro OK e
    // travamos os forms para evitar reenvio.
    if (isNetworkError) {
      lockAllForms();
    }

    if (messageEl) {
      messageEl.innerHTML = isNetworkError
        ? `Olá ${data.nome}, parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
      enviaremos em
      até 24 horas os dados para realizar seu primeiro login no nosso portal, para conclusão do seu cadastro.`
        : mensagemErroPadrao;
    }
  }
}

// Disparado pelo submit da tela "Dados Acadêmicos" (schoolData.js).
// A tela de avaliação social foi removida do fluxo.
takeData()
  .then(() => {
    // Nada a fazer aqui — o submit de schoolData aciona enviarCadastro().
  })
  .catch((err) => {
    clientLogger.error("FALHA_INICIALIZACAO_FLUXO", {
      mensagem: err?.message,
    });
  });

module.exports = { enviarCadastro, takeData };