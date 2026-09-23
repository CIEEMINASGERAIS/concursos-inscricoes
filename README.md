# Sistema de Inscrições de Concursos

Aplicação web para inscrição de candidatos em concursos públicos (CIEE/MG).
Node.js + Express + Sequelize + MySQL, envio de e-mails via Office 365 SMTP.

---

## Stack

- **Runtime**: Node.js (Express)
- **Banco**: MySQL via Sequelize (queries brutas em vários pontos)
- **Frontend**: EJS + bundle JS em `public/assets/js/bundle.js`
- **E-mail**: `nodemailer` + Office 365 (`smtp.office365.com:587`)
- **Process manager**: PM2 (`ecosystem.config.js`)
- **Jobs agendados**: `node-cron` em `src/jobs/`

---

## Estrutura

```
app.js                    # bootstrap do Express
ecosystem.config.js       # config PM2
src/
  controllers/           # lógica dos endpoints
  db/
    config/config.js     # credenciais via .env
    migrations/          # schema versionado
    models/              # modelos Sequelize
  jobs/                  # CRONs (relatório semanal etc)
  middlewares/           # idempotency, errorHandler, requestLogger
  services/fetch.js      # cliente HTTP interno
  utils/                 # logger, controllersError, cadastroLogger
  views/                 # templates EJS
routes/                  # rotas HTTP
public/                  # assets estáticos (CSS, JS, imagens, uploads/laudos)
reenviar-emails-aviso.js # script standalone (veja seção abaixo)
```

---

## Setup local

### 1. Variáveis de ambiente (`.env`)

Crie o arquivo `.env` na raiz (use `.env.example` como base)

### 2. Instalar e subir

```bash
npm install
npm start                      # desenvolvimento (sem PM2)
```

### 3. Migrations

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
```

---

## Como descobrir quem NÃO recebeu e-mail

Existe a possibilidade de que algumas pessoas fiquem sem confirmação por email após o cadastro, apesar de as informações irem pro banco de dados. Os afetados não chegam nem a 0.5% dos participantes, então o código permaneceu inalterado. Para mapear os afetados:

### Passo 1 — Buscar falhas SMTP nos logs do app em produção

O `enviarEmail.js` loga erros com o evento `ERRO_ENVIO_EMAIL_POS_CADASTRO`. Pega os logs crus do PM2 e filtra:

# No servidor de produção
### Comandos pra ver quantas pessoas não receberam o email:
```bash
grep -c "EMAIL_RACE_FALHOU" ~/.pm2/logs/concursos-inscricoes-error.log
grep -c '"erro":"SMTP_TIMEOUT"' ~/.pm2/logs/concursos-inscricoes-error.log
grep -c '"erro":"Connection timeout"' ~/.pm2/logs/concursos-inscricoes-error.log
```
### Comandos pra ver quantas pessoas receberam o email:
```bash
grep -c "ENVIANDO_EMAIL" ~/.pm2/logs/concursos-inscricoes-out.log
```
### Comando para listar id das pessoas que não receberam o email
```bash
grep -hE "EMAIL_RACE_FALHOU|ERRO_ENVIO_EMAIL_POS_CADASTRO" ~/.pm2/logs/concursos-inscricoes-error.log \
  | jq -r '[.ip, .userAgent, .cadastroId, .cpf] | @tsv' \
  | sort -u
```
Os comandos acima devem ser o bastante para obter os emails das pessoas que não receberam o email pelo banco de dados, assim tornando possível o envio de um email pra cada um manualmente, ou pelo script nesse arquivo.


## Reenvio manual de e-mails

Script **standalone** pra reenviar e-mail de confirmação de inscrição para uma lista de endereços. Copia integralmente a função `emailASerEnviadoComum` de `src/controllers/enviarEmail.js`, conecta direto no MySQL e dispara via Office 365 SMTP.

Lê `.env` localmente e imprime JSON no stdout.

### ⚠️ PRÉ-REQUISITO IMPORTANTE

O `.env` **precisa apontar pro banco de PRODUÇÃO**, ou o banco onde a aplicação de fato está rodando (`DB_HOST`, `DB_BASE`, `DB_USER`, `DB_PASS` do servidor de produção). Sem isso o script lê o banco errado e os `EMAILS_PARA_REENVIAR` não vão bater com nenhum cadastro.

### Passo 1 — Copiar o arquivo

Copie o bloco abaixo num arquivo .js novo:

```javascript
/**
 * =============================================================================
 *  REENVIAR E-MAIL DE CONFIRMAÇÃO DE INSCRIÇÃO
 * =============================================================================
 *
 *  O QUE ESSE SCRIPT FAZ
 *  ----------------------
 *  Para cada email listado em `EMAILS_PARA_REENVIAR` (array no topo do
 *  arquivo), ele:
 *
 *    1. Conecta no banco MySQL e faz SELECT direto na tabela de inscritos
 *       buscando a pessoa pelo email (case-insensitive).
 *    2. Monta o e-mail de confirmação IGUALZINHO ao que `enviarEmail.js`
 *       envia no fluxo normal (mesma função `emailASerEnviadoComum`,
 *       copiada inteira pra cá pra rodar standalone).
 *    3. Envia via Office 365 SMTP (mesmo do `enviarEmail.js`).
 *    4. Loga TUDO no stdout em formato JSON estruturado — incluindo
 *       `messageId`, `envelope`, e em caso de erro, `err.message`,
 *       `err.code`, `err.responseCode`, `err.response`, `err.command`
 *       e `err.stack` completo.
 *
 *  POR QUE ELE EXISTE
 *  ------------------
 *  Em 2026-09-23, 5 CPFs em 2207 cadastros (0,226%) ficaram sem e-mail de
 *  confirmação porque o Office 365 throttlou o mailbox compartilhado. A
 *  solução em produção seria uma fila/retry, mas como o problema é raro e
 *  contido, optou-se por não mexer no código de produção — em vez disso,
 *  este script permite reenviar manualmente para os afetados, com
 *  rastreio completo.
 *
 *  COMO USAR
 *  ---------
 *  1. Edite a constante `EMAILS_PARA_REENVIAR` abaixo.
 *  2. Confirme que o `.env` na raiz do projeto tem `EMAIL_PASS` definido
 *     e que os dados de DB batem com o ambiente onde está rodando.
 *  3. Rode: `node reenviar-emails-aviso.js`
 *  4. Leia o JSON que sai no terminal — cada destinatário vira um evento
 *     `REENVIAR_*`. No fim sai um `REENVIAR_RESUMO` com sucessos/falhas.
 *
 *  IMPORTANTE
 *  ----------
 *  - Este arquivo NÃO deve ser commitado nem pushado.
 *  - Não usa PM2. Os logs vão direto pro terminal.
 *  - Não altera o banco de dados. Só lê.
 * ============================================================================= */

const dotenv = require("dotenv");
dotenv.config();

// =============================================================================
// EDITE APENAS ESTA LINHA PARA CONFIGURAR OS DESTINATÁRIOS
// =============================================================================
const EMAILS_PARA_REENVIAR = [
  "pedro.moreira@cieemg.org.br",
];
// =============================================================================


const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const sequelize = require("./src/db/models");
const { logger } = require("./src/utils/logger");

const SMTP_FROM = "validacao.cadastro@cieeminas.com.br";
const BCC = [
  // "concursotjmmg@cieemg.org.br", "controlador@cieemg.org.br"
];
const LOGO_PATH = path.resolve(__dirname, "public", "assets", "images", "CIEE-2023-atualizado.png");
const LAUDO_DIR = path.resolve(__dirname, "public", "assets", "uploads", "laudos");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_FROM,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

const DEFICIENCIA = {
  N: "Nenhuma",
  F: "Fisica",
  A: "Auditiva",
  V: "Visual",
  ME: "Mental",
  MU: "Multipla",
  TE: "Transtorno do Espectro Autista (TEA)",
};
const ETNIA = {
  N: "negro(a)",
  B: "branco(a)",
  P: "pardo(a)",
  A: "amarelo(a)",
  I: "indigena",
};

const CURSOS_LABEL = {
  "0": "Pós-Graduação em Direito",
  "1": "Administração",
  "2": "Biblioteconomia",
  "3": "Comunicação Social",
  "4": "Comunicação Social com Habilitação em Publicidade",
  "5": "Direito",
  "6": "Engenharia Civil",
  "7": "Engenharia Elétrica",
  "8": "Jornalismo",
  "9": "Marketing",
  "10": "Publicidade e Propaganda",
  "11": "Ciência da Computação",
  "12": "Sistemas de Informação",
  "13": "Ou Graduação similar em \u201ctecnologia\u201d conforme edital",
  "14": "Técnico em Informática",
  "15": "Ou similar conforme edital",
};

function maskCpf(cpf) {
  if (!cpf) return null;
  const d = String(cpf).replace(/\D/g, "");
  if (d.length !== 11) return cpf;
  return `***.***.${d.slice(6, 9)}-${d.slice(9)}`;
}

function rotularCurso({ cursoIndice, cursoSimilar }) {
  const idx = (cursoIndice || "").toString().trim();
  const similar = (cursoSimilar || "").toString().trim();
  if ((idx === "13" || idx === "15") && similar) return similar;
  return CURSOS_LABEL[idx] || null;
}

function preflight() {
  if (!Array.isArray(EMAILS_PARA_REENVIAR) || EMAILS_PARA_REENVIAR.length === 0) {
    logger.error("REENVIAR_PRE_FLIGHT_FALHOU", {
      motivo: "EMAILS_PARA_REENVIAR está vazio",
      onde: "topo do arquivo",
    });
    process.exit(1);
  }

  if (!process.env.EMAIL_PASS) {
    logger.error("REENVIAR_PRE_FLIGHT_FALHOU", {
      motivo: "EMAIL_PASS não definido no .env",
    });
    process.exit(1);
  }

  const invalidos = EMAILS_PARA_REENVIAR.filter(
    (e) => typeof e !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())
  );
  if (invalidos.length > 0) {
    logger.error("REENVIAR_PRE_FLIGHT_FALHOU", {
      motivo: "Lista contém emails inválidos",
      invalidos,
    });
    process.exit(1);
  }
}

async function buscarCadastroPorEmail(email) {
  return await sequelize.query(
    `SELECT
         e.id,
         e.nome,
         e.cpf,
         e.email,
         e.deficiencia,
         e.deficiencia_descricao,
         e.etnia,
         e.laudo_deficiencia,
         IFNULL(e.curso, '') AS curso,
         IFNULL(e.curso_similar, '') AS curso_similar,
         IFNULL(e.ciente_curso_tecnologia, NULL) AS ciente_curso_tecnologia
     FROM concurso_inscritos e
     WHERE LOWER(e.email) = LOWER(?)
     LIMIT 1`,
    { replacements: [email], type: sequelize.QueryTypes.SELECT }
  );
}

// =============================================================================
// FUNÇÃO COPIADA DE `src/controllers/enviarEmail.js` (emailASerEnviadoComum).
// Mantida idêntica ao original, exceto pelo `transporter` (passado por
// fora pra rodar standalone).
// =============================================================================
async function enviarEmailConfirmacao(to, cadastro, context) {
  const defCodigo = (cadastro.deficiencia || "").toString().toUpperCase();
  const etniaCodigo = (cadastro.etnia || "").toString().toUpperCase();
  const defTexto = DEFICIENCIA[defCodigo] || "Nenhuma";
  const etniaTexto = ETNIA[etniaCodigo] || "Não informada";
  const descDeficiencia = (cadastro.deficiencia_descricao || "").trim();
  const descLinhaHTML = descDeficiencia
    ? `<br><strong>Descricao:</strong> ${descDeficiencia}`
    : "";
  const descLinhaTexto = descDeficiencia ? ` - ${descDeficiencia}` : "";

  const cursoNome = rotularCurso({
    cursoIndice: cadastro.curso,
    cursoSimilar: cadastro.curso_similar,
  });
  const cursoTexto = cursoNome ? `<strong>CURSO:</strong> ${cursoNome}<br>` : "";

  const cienteCursoTecnologia = cadastro.ciente_curso_tecnologia === 1;
  const cursoTecnologiaTextoHTML = cienteCursoTecnologia
    ? `<p style="color: black; margin: 0.75rem 0; padding: 0.6rem 0.8rem;
            border-left: 4px solid #f0ad4e; background-color: #fcf8e3;">
        <strong>Atenção:</strong> O curso informado na inscrição foi declarado como similar à área de Tecnologia, nos termos do edital. Entretanto, esclarece-se que o enquadramento de cursos similares é restrito aos cursos vinculados à área de Tecnologia, não abrangendo cursos pertencentes a outras áreas de conhecimento.
      </p>`
    : "";
  const cursoTecnologiaTexto = cienteCursoTecnologia
    ? `\nAtenção: O curso informado na inscrição foi declarado como similar à área de Tecnologia, nos termos do edital. Entretanto, esclarece-se que o enquadramento de cursos similares é restrito aos cursos vinculados à área de Tecnologia, não abrangendo cursos pertencentes a outras áreas de conhecimento.\n`
    : "";

  const laudoPath = cadastro.laudo_deficiencia || null;
  const attachments = [
    {
      filename: "CIEE-2023-atualizado.png",
      path: LOGO_PATH,
      cid: "logociee",
    },
  ];
  if (laudoPath) {
    const caminhoAbsoluto = path.join(LAUDO_DIR, path.basename(laudoPath));
    if (fs.existsSync(caminhoAbsoluto)) {
      attachments.push({
        filename: path.basename(caminhoAbsoluto),
        path: caminhoAbsoluto,
      });
    }
  }

  const dataHoje = new Date().toLocaleDateString("pt-BR");
  const subject = `CIEE/MG - Confirmação de Inscrição Concurso TJMMG - Data: ${dataHoje}`;
  const user = cadastro.nome;

  const info = await transporter.sendMail({
    from: SMTP_FROM,
    to: `${to}`,
    bcc: BCC,
    subject,
    html:
      `<html>
      <head>
          <meta charset="UTF-8">
      </head>
      <body>
          <div style="border: 1px solid rgb(190, 190, 190);
              padding: 1rem;
              max-width: 40rem;
              margin: 0rem auto;
              background-color: white;
              margin-bottom: 3rem;
              font-family: Arial, sans-serif;
              color: black;">
              <img alt="Logo do CIEEMG" style="height: 3rem;" src="cid:logociee" />
              <div style="height: 1px;
                  background-color: rgb(216, 216, 216);
                  margin: 1rem 0rem 1rem 0rem;"></div>

              <p style="color: black; margin: 0.5rem 0;">
                  <strong>CIEE/MG &ndash; Confirmação de Inscrição Concurso TJMMG - Data: ${dataHoje}</strong>
              </p>

              <p style="margin: 1rem 0; color: black;">
                  Prezado(a) <strong>${user}</strong>,
              </p>

              <p style="color: black;">
                  Sua inscrição para o concurso do Tribunal de Justiça Militar do Estado de Minas Gerais foi realizada com sucesso.
              </p>

              <p style="color: black;"><strong>Código de Inscrição:</strong> ${context.cadastroId ?? "ID do banco"}</p>

              ${cursoTexto ? `<p style="color: black;">${cursoTexto}</p>` : ""}

              ${cursoTecnologiaTextoHTML}

              <p style="color: black;"><strong>Necessidade especial:</strong> ${defTexto}${descLinhaHTML}${laudoPath ? `<br><strong>Laudo médico anexado:</strong> Sim` : ""}</p>

              <p style="color: black;"><strong>Como se considera (etnia):</strong> ${etniaTexto}</p>

              <p style="color: black;">
                  <strong>Atenção:</strong> Todas as informações referentes a datas, local de prova e demais informações consulte o edital publicado em nosso portal <a href="https://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a>.
              </p>

              <p style="color: black;">
                  Caso você tenha alguma dúvida, entre em contato conosco pelos canais informados abaixo.
              </p>

              <p style="color: black;">Atenciosamente,</p>

              <p style="color: black;"><strong>CIEE/MG - Concursos</strong><br>
                  Telefone/WhatsApp: (31) 3429-8100 &ndash; Opção 6<br>
                  E-mail: concursotjmmg@cieemg.org.br<br>
                  <a href="http://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a><br>
                  <strong>Horário de funcionamento:</strong> 08:30 até 17:30 de segunda a sexta-feira
              </p>

              <div style="height: 1px;
                  background-color: rgb(216, 216, 216);
                  margin: 1rem 0rem 0.5rem 0rem;"></div>
              <p style="font-size: 0.7em;
                  font-weight: 800;
                  text-align: center;
                  margin: 0.5rem;
                  color: black;">CIEEMG - Centro de Integração Empresa Escola de Minas Gerais</p>
          </div>
      </body>
      </html>`,
    attachments,
    text:
      `CIEE/MG - Confirmação de Inscrição Concurso TJMMG - Data: ${dataHoje}

Prezado(a) ${user},

Confirmação de inscrição no concurso do Tribunal de Justiça Militar do Estado de Minas Gerais.

Sua inscrição para o concurso do Tribunal de Justiça Militar do Estado de Minas Gerais foi realizada com sucesso.

Código de Inscrição: ${context.cadastroId ?? "ID do banco"}

${cursoNome ? `Curso: ${cursoNome}\n` : ""}${cursoTecnologiaTexto}Necessidade especial: ${defTexto}${descDeficiencia ? ` - ${descDeficiencia}` : ""}${laudoPath ? " (laudo médico anexado)" : ""}

Como se considera (etnia): ${etniaTexto}

Atenção: Todas as informações referentes a datas, local de prova e demais informações consulte o edital publicado em nosso portal www.cieemg.org.br.

Caso você tenha alguma dúvida, entre em contato conosco pelos canais informados abaixo.

Atenciosamente,

CIEE/MG - Concursos
Telefone/WhatsApp: (31) 3429-8100 - Opção 6
E-mail: concursotjmmg@cieemg.org.br
www.cieemg.org.br
Horário de funcionamento: 08:30 até 17:30 de segunda a sexta-feira`,
  });

  logger.info("REENVIAR_ENVIO_SUCESSO", {
    ...context,
    messageId: info.messageId,
    envelope: info.envelope,
    accepted: info.accepted,
    rejected: info.rejected,
    pending: info.pending,
  });

  return info;
}

async function enviarUm(email) {
  const tagBase = { email, cpfMascarado: null };

  logger.info("REENVIAR_BUSCA_INICIO", tagBase);

  const linhas = await buscarCadastroPorEmail(email);
  if (linhas.length === 0) {
    logger.error("REENVIAR_FALHA_SEM_CADASTRO", {
      ...tagBase,
      motivo: "Nenhum cadastro encontrado com esse email",
    });
    return { ok: false, motivo: "sem_cadastro" };
  }
  const cadastro = linhas[0];
  tagBase.cpfMascarado = maskCpf(cadastro.cpf);
  tagBase.cadastroId = cadastro.id;
  tagBase.nome = cadastro.nome;

  logger.info("REENVIAR_ENVIO_INICIO", {
    ...tagBase,
    curso: cadastro.curso,
    curso_similar: cadastro.curso_similar,
    ciente_curso_tecnologia: cadastro.ciente_curso_tecnologia,
    tem_laudo: Boolean(cadastro.laudo_deficiencia),
  });

  try {
    await enviarEmailConfirmacao(email, cadastro, tagBase);
    return { ok: true };
  } catch (err) {
    logger.error("REENVIAR_ENVIO_FALHA", {
      ...tagBase,
      erro: err.message,
      codigo: err.code || null,
      responseCode: err.responseCode || null,
      response: err.response || null,
      comando: err.command || null,
      stack: err.stack,
    });
    return { ok: false, motivo: "smtp_erro", erro: err.message, codigo: err.code || null };
  }
}

async function main() {
  preflight();

  logger.info("REENVIAR_INICIO", {
    total: EMAILS_PARA_REENVIAR.length,
    emails: EMAILS_PARA_REENVIAR.map((e) => e.trim()),
  });

  const resultados = [];
  for (const email of EMAILS_PARA_REENVIAR) {
    const r = await enviarUm(email.trim());
    resultados.push({ email, ...r });
  }

  const sucessos = resultados.filter((r) => r.ok).length;
  const falhas = resultados.length - sucessos;

  logger.info("REENVIAR_RESUMO", {
    total: resultados.length,
    sucessos,
    falhas,
    resultados,
  });

  await sequelize.close();
}

main().catch((err) => {
  logger.error("REENVIAR_ERRO_FATAL", {
    erro: err.message,
    stack: err.stack,
  });
  process.exit(1);
});
```

### Passo 2 — Editar os destinatários

No arquivo copiado, edite o array `EMAILS_PARA_REENVIAR`:

```javascript
const EMAILS_PARA_REENVIAR = [
  "candidato1@email.com",
  "candidato2@email.com",
  "candidato3@email.com",
  "candidato4@email.com",
  "candidato5@email.com",
];
```

### Passo 3 — Garantir que o `.env` aponta pra PRODUÇÃO

```ini
DB_HOST=ENDERECO_DO_BANCO_DE_PRODUCAO
DB_BASE=ciee_restrict       # ou nome equivalente em prod
DB_USER=usuario_prod
DB_PASS=senha_prod
EMAIL_PASS=senha_do_mailbox_validacao
```

Sem isso o script lê o banco errado e os emails não batem.

### Passo 4 — Rodar

```bash
cd /caminho/do/projeto
node reenviar-emails-aviso.js
```

Pra salvar tudo num arquivo:

```bash
node reenviar-emails-aviso.js 2>&1 | tee /tmp/reenvio-$(date +%Y%m%d-%H%M%S).jsonl
```

### Eventos de log

| Evento | Quando | Campos-chave |
|---|---|---|
| `REENVIAR_INICIO` | Antes do loop | `total`, `emails` |
| `REENVIAR_BUSCA_INICIO` | Antes do SELECT | `email` |
| `REENVIAR_FALHA_SEM_CADASTRO` | SELECT retornou 0 linhas | `email`, `motivo` |
| `REENVIAR_ENVIO_INICIO` | Antes do SMTP | `cadastroId`, `curso`, `tem_laudo`, `ciente_curso_tecnologia` |
| `REENVIAR_ENVIO_SUCESSO` | SMTP aceitou | `messageId`, `envelope`, `accepted`, `rejected` |
| `REENVIAR_ENVIO_FALHA` | SMTP rejeitou | `erro`, `codigo`, `responseCode`, `response`, `stack` |
| `REENVIAR_RESUMO` | Final | `total`, `sucessos`, `falhas`, `resultados` |
| `REENVIAR_PRE_FLIGHT_FALHOU` | Lista vazia ou `EMAIL_PASS` faltando | `motivo` |
| `REENVIAR_ERRO_FATAL` | Exceção não-tratada | `erro`, `stack` |

### Anexos (laudo médico)

Se o cadastro tem `laudo_deficiencia` preenchido, o script anexa automaticamente o arquivo físico:

- O caminho gravado no banco é o caminho web (ex: `/uploads/laudos/1737000000000-laudo.pdf`)
- O script resolve o caminho absoluto como `public/assets/uploads/laudos/<basename>`
- Se o arquivo não existir no FS, o e-mail é enviado **sem** o anexo (sem erro)

### ⚠️ NÃO commitar

Não comite o arquivo js criado pra evitar problemas em produção, ter ele no README.md é o bastante.

---

## Jobs agendados (CRON)

| Job | Arquivo | Frequência | Descrição |
|---|---|---|---|
| Relatório semanal de cursos | `src/jobs/agendarRelatorioCursos.js` | Semanal | Lista cursos inscritos e manda por e-mail |

```bash
pm2 list                                          # ver jobs rodando
node -e "require('./src/jobs/montarRelatorioCursos')()"   # rodar manualmente
```

---

## Troubleshooting

| Sintoma | Causa provável | Solução |
|---|---|---|
| `REENVIAR_PRE_FLIGHT_FALHOU` | `EMAIL_PASS` vazio no `.env` | Preencher `.env` e rodar de novo |
| `REENVIAR_FALHA_SEM_CADASTRO` | Email não consta na tabela `concurso_inscritos` | Conferir capitalização / banco errado |
| `REENVIAR_ENVIO_FALHA` com `EAUTH` | Senha do mailbox expirada | Atualizar `EMAIL_PASS` no `.env` |
| `REENVIAR_ENVIO_FALHA` com `EENVELOPE` | Destinatário inválido | Checar `EMAILS_PARA_REENVIAR` |
| Laudo não chega no anexo | Arquivo apagado do FS ou caminho divergente | Validar `public/assets/uploads/laudos/` |

---

## Contato

- Operacional → time CIEE/MG
- SMTP/TI → `validacao.cadastro@cieeminas.com.br` (remetente compartilhado)
