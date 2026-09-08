const main = require("./main.js");
const termsAndConditions = require("./terms-and-conditions.js");
const initAddress = require("./address.js");
const initDataBasic = require("./dataBasic.js");
const createFormSchoolData = require("./schoolData.js");

// Helper para checar se os termos foram rejeitados. Enquanto o
// flag `data-termos-rejeitados="1"` estiver no <body>, qualquer
// tentativa de sair da tela de Termos e Condicoes (seja via
// sidenav, botao "Voltar" do form, atalho, etc.) e bloqueada.
// O flag e setado em terms-and-conditions.js ao clicar em
// "Rejeitar" e limpo ao re-aceitar.
const termosBloqueados = () => termsAndConditions.termosRejeitados();
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
    // Usamos closest() para detectar cliques tanto no proprio
    // botao da sidenav quanto em qualquer filho (ex.: <img>,
    // <span>, texto). Sem isso, clicar num filho fazia o
    // handler nao disparar e o usuario ficava "preso" na tela
    // atual.
    const element = event.target.closest(
      ".big-terms-conditions, .button-terms-conditions, " +
      ".big-address, .button-address, " +
      ".big-basic-data, .button-basic-data, " +
      ".big-school-data, .button-school-data, .main"
    ) || event.target;

    validateFormBasic = false;

    validateFormBasic = conferirFormBasic(formData);

    // Bloqueio de termos: se o usuario clicou em "Rejeitar" na
    // tela de Termos e Condicoes, qualquer tentativa de sair
    // daquela tela e ignorada ate que ele volte la e aceite.
    // Permitimos apenas o proprio botao "Termos" da sidenav,
    // para que ele consiga revisar/rejeitar de novo.
    const clicouEmTermos =
      element.classList.contains("big-terms-conditions") ||
      element.classList.contains("button-terms-conditions");
    if (termosBloqueados() && !clicouEmTermos) {
      event.preventDefault();
      // Se o usuario estiver em outra tela, redireciona de volta
      // para a tela de Termos para que o fluxo fique coerente.
      const screenTerms = document.querySelector(".screen-terms-conditions");
      if (screenTerms && screenTerms.style.display === "none") {
        changeMains(".screen-terms-conditions");
        changeSubMainTitle("Termos e Condições");
      }
      return;
    }

    if (validateFormBasic) {
      if (
        element.classList.contains("big-address") ||
        element.classList.contains("button-address")
      ) {
        changeMains(".screen-address");
        changeSubMainTitle("Formulário de Endereço");
      } else if (
        // Botao "Dados Basicos" da sidenav: volta para a tela de
        // Dados Basicos. Liberado sempre que o usuario ja preencheu
        // o formulario (validateFormBasic true). Nao precisa
        // revalidar o conteudo - o objetivo e apenas navegar.
        element.classList.contains("big-basic-data") ||
        element.classList.contains("button-basic-data")
      ) {
        changeMains(".screen-basic-data1");
        changeSubMainTitle("Formulário de Dados Básicos");
      }
    } else {
      // Dados Basicos ainda nao preenchido: permite voltar para a
      // tela de Dados Basicos (reabrir para editar) e tambem
      // para a tela de Termos (rever/aceitar), mas NAO deixa
      // pular para Endereco nem para os acionados depois dele.
      // Antes este else fazia `preventDefault()` para qualquer
      // `.main`, o que engolia o clique no botao "Termos" da
      // sidenav e impedia a navegacao de volta.
      if (
        element.classList.contains("big-basic-data") ||
        element.classList.contains("button-basic-data")
      ) {
        changeMains(".screen-basic-data1");
        changeSubMainTitle("Formulário de Dados Básicos");
      } else if (
        // Botao da sidenav de uma etapa POSTERIOR a Dados Basicos
        // (Endereco, Cursos): bloqueia. Os botoes de etapas
        // anteriores (Termos) sao tratados pelo bloco dedicado
        // mais abaixo.
        element.classList.contains("big-address") ||
        element.classList.contains("button-address") ||
        element.classList.contains("big-school-data") ||
        element.classList.contains("button-school-data")
      ) {
        event.preventDefault();
      }
    }

    // Botao "Termos e Condicoes" da sidenav: intencionalmente sem
    // acao. Pedido explicito do usuario: clicar no icone de Termos
    // na sidenav nao deve navegar para lugar nenhum. Mantemos
    // apenas o gate superior (`termosBloqueados`) que, quando
    // ativo, tambem impede a saida da propria tela de Termos -
    // ao clicar aqui nesse estado, nada acontece.
    if (
      element.classList.contains("big-terms-conditions") ||
      element.classList.contains("button-terms-conditions")
    ) {
      // no-op intencional
    }
  });

  const formAddress = await initAddress();
  _formAddress = formAddress;
  let validateFormAddress;
  document.addEventListener("click", function (event) {
    // Mesmo truque do listener anterior: closest() para que o
    // clique em qualquer filho do botao da sidenav seja
    // contabilizado. Inclui tambem os botoes das etapas
    // anteriores (Termos, Dados Basicos, Endereco) para que o
    // usuario possa navegar para tras a partir de School.
    const element = event.target.closest(
      ".big-terms-conditions, .button-terms-conditions, " +
      ".big-basic-data, .button-basic-data, " +
      ".big-address, .button-address, " +
      ".big-school-data, .button-school-data, .main"
    ) || event.target;

    validateFormAddress = false;

    validateFormAddress = conferirFormAddress(formAddress);

    // Mesmo gate do listener anterior: termos rejeitados => sem
    // saida para .screen-school-data. O usuario precisa voltar
    // para a tela de Termos e aceitar para liberar o fluxo.
    const clicouEmTermos =
      element.classList.contains("big-terms-conditions") ||
      element.classList.contains("button-terms-conditions");
    if (termosBloqueados() && !clicouEmTermos) {
      event.preventDefault();
      const screenTerms = document.querySelector(".screen-terms-conditions");
      if (screenTerms && screenTerms.style.display === "none") {
        changeMains(".screen-terms-conditions");
        changeSubMainTitle("Termos e Condições");
      }
      return;
    }

    // Botao "Termos e Condicoes" da sidenav: intencionalmente sem
    // acao. Pedido explicito do usuario: clicar no icone de Termos
    // na sidenav nao deve navegar. Se os termos estiverem
    // rejeitados, o gate superior ja bloqueia a saida da tela de
    // Termos; quando esta em outra tela, o clique aqui e
    // ignorado para manter coerencia.
    if (clicouEmTermos) {
      // no-op intencional
      return;
    }

    // Botoes das etapas anteriores (Dados Basicos, Endereco):
    // sempre liberados, para permitir voltar e editar.
    if (
      element.classList.contains("big-basic-data") ||
      element.classList.contains("button-basic-data")
    ) {
      changeMains(".screen-basic-data1");
      changeSubMainTitle("Formulário de Dados Básicos");
      return;
    }
    if (
      element.classList.contains("big-address") ||
      element.classList.contains("button-address")
    ) {
      changeMains(".screen-address");
      changeSubMainTitle("Formulário de Endereço");
      return;
    }

    if (validateFormAddress && validateFormBasic) {
      if (
        element.classList.contains("big-school-data") ||
        element.classList.contains("button-school-data")
      ) {
        changeMains(".screen-school-data");
        changeSubMainTitle("Formulário de Dados Acadêmicos");
      }
    } else {
      // Se a tela de Endereco ainda nao foi preenchida, nao
      // permite pular para School.
      if (
        element.classList.contains("big-school-data") ||
        element.classList.contains("button-school-data")
      ) {
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
    `E-mail: suportetjmmg@cieemg.org.br<br>` +
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
        mensagem: `Identificamos que este CPF ou e-mail já possui cadastro. Verifique sua caixa de entrada (incluindo spam) pelo e-mail de confirmação. Em caso de dúvidas, ligue (31) 3429-8100.`,
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
  const buttonEndEl = safeQuerySelector(".button-school-end");
  const subMainTitleEl = safeQuerySelector(".sub-main-title");

  showAlert();
  // Esconde o título "Cadastro finalizado" da barra superior quando o
  // card detalhado de feedback entra em cena, para evitar sobreposição.
  if (subMainTitleEl) subMainTitleEl.style.display = "none";
  if (titleEl) titleEl.innerHTML = `Carregando...`;
  if (dataErroEl) dataErroEl.innerHTML = ``;
  if (messageEl) {
    messageEl.innerHTML =
      `Estamos finalizando o seu cadastro, aguarde um momento.`;
  }
  // Botao "Confirmar" some enquanto o popup esta "Carregando..."
  // para nao confundir o usuario (clicar nao faz nada ainda).
  if (buttonEndEl) buttonEndEl.classList.add("hide");

  try {
    const resultado = await postCadastroWithRetry(data);

    if (resultado.ok) {
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
      // Resposta chegou -> botao "Confirmar" pode voltar a aparecer.
      if (buttonEndEl) buttonEndEl.classList.remove("hide");
      if (messageEl) {
        let mensagemSucesso =
          `Atenção: Todas as informações referentes a datas, local de prova e demais ` +
          `informações consulte o edital publicado em nosso portal ` +
          `<a href="https://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a>.`;

        // ===================================================================
        // AVISO SOBRE O E-MAIL DE CONFIRMAÇÃO
        // O backend agora devolve `email.status` em todas as respostas:
        //   - "enviado": SMTP OK, candidato recebeu a senha.
        //   - "falhou": SMTP explodiu ou timeout (>5s). Não chegamos a
        //               reenviar — o candidato precisa ser avisado pra
        //               entrar em contato com a central.
        //   - "suprimido": gate bloqueou (ex.: curso_similar vazio).
        //                  Cadastro OK, e-mail não vai sair — comportamento
        //                  intencional da regra de negócio.
        // ===================================================================
        let parsedBody = null;
        try {
          parsedBody = JSON.parse(resultado.body || "{}");
        } catch {
          parsedBody = null;
        }
        const emailStatus = parsedBody?.email?.status || null;
        const emailMotivo = parsedBody?.email?.motivo || null;

        if (emailStatus === "falhou") {
          mensagemSucesso +=
            `<br><br><strong style="color:#b30000;">⚠️ Não conseguimos enviar seu e-mail de confirmação agora.</strong> ` +
            `Anote seu código de inscrição (${codigoInscricao}) e entre em contato com a central ` +
            `<a href="tel:+553134298100">(31) 3429-8100</a> – Opção 6 para receber sua senha de acesso.`;
        } else if (emailStatus === "suprimido") {
          mensagemSucesso +=
            `<br><br><em>Observação: o e-mail automático não foi enviado porque alguns dados de curso não foram preenchidos. ` +
            `Nossa equipe entrará em contato em até 24h pelo canal informado no cadastro.</em>`;
        }

        messageEl.innerHTML = mensagemSucesso;
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
      // Resposta (com erro) chegou -> botao "Confirmar" volta a aparecer
      // para o usuario poder fechar o popup.
      if (buttonEndEl) buttonEndEl.classList.remove("hide");
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

    // Botao "Confirmar" so volta a aparecer quando a requisicao foi
    // resolvida (sucesso real OU sucesso provável por falha de rede).
    // Em erro de rede 'real' (timeout curto, sem chance de ter
    // chegado no backend), mantemos escondido para o usuario nao
    // fechar um popup de erro sem ter lido o que aconteceu.
    if (buttonEndEl) {
      if (isNetworkError) {
        buttonEndEl.classList.remove("hide");
      } else {
        buttonEndEl.classList.add("hide");
      }
    }

    // Se a falha foi de rede com provável sucesso (timeout longo
    // mas request pode ter chegado), tratamos como cadastro OK e
    // travamos os forms para evitar reenvio.
    if (isNetworkError) {
      lockAllForms();
    }

    if (messageEl) {
      messageEl.innerHTML = isNetworkError
        ? `Parabéns por finalizar a primeira etapa do seu cadastro, fique atento ao seu e-mail,
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