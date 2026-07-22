---
name: cadastrocieemg1
description: Skill profissional do projeto cadastroCieemg1 (CIEE MG - Cadastro Público de Estudantes/Estagiários). Use quando o usuário pedir para analisar, corrigir, evoluir, auditar ou documentar este projeto Node/Express + Sequelize + frontend Vanilla JS/Webpack. Cobre arquitetura, fluxos (cadastro, validação de CPF/e-mail, upload de laudo, e-mail), segurança, performance, logs PM2, deploy, comandos úteis e armadilhas comuns.
---

# Skill: cadastroCieemg1

## 1. Visão Geral

Projeto público do CIEE MG que permite a **qualquer estudante** se cadastrar para participar de programas de estágio/aprendizagem. O cadastro é dividido em 6 etapas e, ao final, o sistema:

1. Persiste o estudante + dados socioeconômicos no MySQL.
2. Gera uma senha aleatória que é enviada por e-mail (Office 365 SMTP).
3. O estudante usa essa senha no **Portal Estudante** externo (sistema separado, fora deste repositório) para acessar a área logada.

**Não há rota de login neste projeto.** O backend não autentica usuários. Quem autentica é o portal externo.

- **Produção**: `https://appcadastro.cieemg.org.br`
- **Banco (prod)**: MySQL — host `192.168.0.3`, base `ciee_restrict` (credenciais fora do escopo deste repo)
- **Process manager**: PM2 (processo `app`, instância 0)
- **Logs PM2**: `/home/cieemg/.pm2/logs/`

## 2. Stack Técnico

### Backend
- **Runtime**: Node.js (CommonJS, `"type": "commonjs"` no package.json)
- **Framework**: Express 4.18.2
- **ORM**: Sequelize 6.32.1 + `mysql2` 3.6.0
- **View engine**: EJS 3.1.9
- **Segurança**: Helmet 7.1.0, CORS 2.8.5 (whitelist)
- **E-mail**: Nodemailer 6.9.6 (SMTP Office 365: `smtp.office365.com:587`)
- **Senha**: `bcrypt` 5.1.1 (model) + `bcryptjs` 2.4.3 (controllers)
- **Geração de senha**: `generate-password` 1.7.1
- **Logs**: Winston (camada custom em `src/utils/logger.js`)
- **Upload**: Pasta `public/assets/uploads/laudos/`
- **Validação**: `validator` 13.15.0 + Sequelize validators

### Frontend
- **Sem framework**: Vanilla JS com Webpack 5.88.2 + Babel (`@babel/preset-env`)
- **UI**: Bootstrap 5.3.5 + jQuery + `bootstrap-select`
- **Máscaras/validação client**: implementação manual em `frontend/utils/util.js`
- **Polyfills**: `core-js`, `regenerator-runtime`
- **Bundle**: `public/assets/js/bundle.js`

### Dev
- `nodemon` (dev), `webpack -w` (watch)
- ESLint flat config (`eslint.config.js`)
- Sem testes automatizados (Jest não instalado)

## 3. Estrutura de Pastas

```
cadastroCieemg1/
├── app.js                          # Bootstrap Express
├── ecosystem.config.js             # PM2
├── webpack.config.js               # Bundle do frontend
├── eslint.config.js                # Lint flat config
├── package.json                    # Dependências (CommonJS)
├── routes/
│   └── cursoRoute.js               # Rotas de curso (encapsuladas)
├── src/
│   ├── controllers/                # GET render + POST actions
│   │   ├── postCadastrar.js        # ⭐ fluxo principal de cadastro
│   │   ├── postClientLog.js        # POST /api/logs (sink de logs do front, LGPD-safe)
│   │   ├── enviarEmail.js          # ⭐ SMTP (Office 365)
│   │   ├── getVerificarEstudante.js
│   │   ├── getEmail.js
│   │   ├── getEndereco.js
│   │   ├── getCadastraCurso.js
│   │   ├── getCadastrarEscola.js
│   │   ├── renderIndex.js
│   │   ├── renderTermsConditions.js
│   │   ├── renderDataBasic.js
│   │   ├── renderAddress.js
│   │   ├── renderSchool.js
│   │   ├── renderSocialEconomy.js
│   │   └── renderProgramasEmCurso.js (não montado)
│   ├── middlewares/
│   │   ├── requestLogger.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── logger.js               # Winston + console JSON
│   │   ├── cadastroLogger.js       # Logger contextual do fluxo de cadastro
│   │   ├── controllerError.js      # Tratamento padronizado de erro em controllers
│   │   └── requestContext.js
│   ├── db/
│   │   ├── config/config.js        # Lê DB_HOST/DB_USER/DB_PASS/DB_BASE
│   │   ├── migrations/
│   │   ├── models/
│   │   │   ├── index.js            # ⭐ instancia Sequelize
│   │   │   ├── estudante.js        # ⭐ tem beforeSave (bcrypt)
│   │   │   ├── socio_economico.js
│   │   │   ├── escola.js
│   │   │   ├── curso.js
│   │   │   ├── cep.js
│   │   │   └── processos_especiais.js
│   └── views/
│       ├── index.ejs
│       ├── terms-and-conditions.ejs
│       ├── formDataBasic.ejs
│       ├── address.ejs
│       ├── schoolData.ejs
│       ├── socio-economic.ejs
│       └── manutencao.ejs
├── frontend/
│   ├── pages/
│   │   ├── app.js                  # ⭐ orquestrador (takeData, sendData, retry)
│   │   ├── terms-and-conditions.js
│   │   ├── dataBasic.js            # validação de CPF + formulário básico
│   │   ├── address.js
│   │   ├── schoolData.js           # gera senha e guarda em sessionStorage
│   │   ├── socioEconomic.js
│   │   └── programasEmCurso.js
│   └── utils/
│       ├── util.js                 # cpfInBd, isCpf, masks, helpers
│       └── clientLogger.js         # POST /api/logs
├── public/
│   ├── assets/css/                 # CSS por página
│   ├── assets/images/
│   ├── assets/js/bundle.js         # gerado pelo webpack
│   └── assets/uploads/laudos/      # laudos médicos enviados
└── routes/cursoRoute.js
```

## 4. Fluxos Principais

### 4.1 Cadastro público (`POST /cadastrar`)
Arquivo: `src/controllers/postCadastrar.js`.

1. `buildCadastroContext(req)` → gera `cadastroId` e contexto para logs estruturados.
2. `logger.info("INICIO_CADASTRO", contextoBase)`.
3. Valida laudo médico (deficiências `F/A/V/ME/MU/TE` exigem base64).
4. Decodifica `laudo_deficiencia_base64` → grava em `public/assets/uploads/laudos/`.
5. Abre **transação Sequelize** (`ESTUDANTE + SOCIOECONOMICO`).
6. `Estudante.create(payload, { transaction })` → dispara `beforeSave` que hasheia a senha (`bcrypt`, saltRounds=9).
7. `SocioEconomico.create({ estudante_id, ... }, { transaction })`.
8. `transaction.commit()`.
9. **E-mails em background** via `setImmediate(() => enviarEmailsPosCadastro(...))` para reduzir tempo de resposta (Safari iOS abortava antes).
10. Retorna `200 { mensagem: "Usuário cadastrado com sucesso!" }`.

Em caso de erro:
- `SequelizeValidationError` → `400` com `detalhes: [{campo, mensagem}]`.
- Qualquer outra falha → rollback + `500` via `handleControllerError`.

### 4.2 E-mail (Office 365)
Arquivos: `src/controllers/enviarEmail.js`.

- Três funções principais: `emailASerEnviadoComum`, `emailASerEnviadoProcessos`, `emailPresp`.
- `tranporter` é criado **uma única vez** no carregamento do módulo (stale connection é risco conhecido — ver §10).
- ⚠️ Há `tls: { rejectUnauthorized: false }` no transporter (problema de segurança já mapeado).
- Templates HTML inline; assunto: `Senha para acesso do Portal Estudante`.

### 4.3 Validação de CPF
- Front: `frontend/utils/util.js`:
  - `isCpf(cpf)` → valida dígitos verificadores.
  - `cpfInBd(cpf)` → `GET /verificarEstudante?cpf=...`. **Retorna `null` em erro de rede** (em vez de `false`) para evitar falso-positivo de "CPF inválido".
- `dataBasic.js`: aplica **debounce de 400 ms** antes de chamar `cpfInBd`; durante a digitação (<11 dígitos) não marca erro; só marca `formDataBasic.cpf = false` se completar 11 dígitos e falhar.

### 4.4 Verificação de E-mail
- `GET /verificarEmail?email=...` → checa duplicidade antes de avançar.

### 4.5 Autocomplete Escola/Curso
- `GET /cadastrarEscola` e `/cadastrarCurso` (via `routes/cursoRoute.js`) → alimentam `selectpicker` com busca dinâmica.

### 4.6 Envio de logs do front
- `POST /api/logs` → recebe logs do frontend via `clientLogger.js`.
- `postClientLog.js` aplica **redaction LGPD** (chaves sensíveis: `senha`, `password`, `token`, `jwt`, `authorization`).

### 4.7 Geração de senha
- Gerada **no frontend** em `frontend/pages/schoolData.js`:
  ```js
  const password = generator.generate({
    length: 8,
    numbers: true,
    lowercase: true,
    uppercase: true,
    excludeSimilarCharacters: true,
    strict: true,
  });
  ```
- Persistida em `sessionStorage.cadastroCieemg_senha` (defesa contra reload entre telas).
- Recuperada em `frontend/pages/app.js` se o estado local perder a referência.
- Hasheada no backend em `estudante.js` (model) com `bcrypt.hash(senha, 9)`.

## 5. Rotas

| Método | Rota                              | Descrição                                 | Controller                          |
|--------|-----------------------------------|-------------------------------------------|-------------------------------------|
| GET    | `/`                                | Etapa 1 — Boas-vindas / termos            | `renderIndex`                       |
| GET    | `/terms-and-conditions`            | Etapa 2 — Termos                          | `renderTermsConditions`             |
| GET    | `/formDataBasic`                   | Etapa 3 — Dados básicos                   | `renderDataBasic`                   |
| GET    | `/address`                         | Etapa 4 — Endereço                        | `renderAddress`                     |
| GET    | `/schoolData`                      | Etapa 5 — Escola/curso                    | `renderSchool`                      |
| GET    | `/socio-economic`                  | Etapa 6 — Socioeconômico                  | `renderSocialEconomy`               |
| GET    | `/verificarEstudante?cpf=`         | Verifica se CPF já existe                 | `getVerificarEstudante`             |
| GET    | `/verificarEmail?email=`           | Verifica se e-mail já existe              | `getEmail`                          |
| GET    | `/cadastrarEndereco?cep=`          | Busca CEP                                 | `getEndereco`                       |
| GET    | `/cadastrarCurso?q=`               | Autocomplete de curso                     | `routes/cursoRoute.js`              |
| GET    | `/cadastrarEscola?q=`              | Autocomplete de escola                    | `getCadastrarEscola`                |
| POST   | `/cadastrar`                       | ⭐ Submissão do cadastro                  | `postCadastrar`                     |
| POST   | `/api/logs`                        | Recebe logs do front (LGPD-redacted)      | `postClientLog`                     |

## 6. Segurança (Estado Atual)

### Implementado
- Helmet + CSP configurado em `app.js` (default `self` + CDNs pontuais).
- CORS com whitelist (`https://appcadastro.cieemg.org.br`, `http://localhost:8080`).
- Bcrypt com `saltRounds = 9` para senhas.
- `postClientLog.js` redacta chaves sensíveis (LGPD).
- Limite de payload: `25mb` (URL encoded e JSON).
- `process.on('uncaughtException')` e `unhandledRejection` logados e `exit(1)` (PM2 reinicia).

### Pendente (já mapeado)
- `tls.rejectUnauthorized: false` no Nodemailer — risco MITM.
- `excludeSimilarCharacters: true` ainda pode confundir (ajustar se houver queixas).
- Senha com 8 chars atende, mas políticas de senha do portal externo podem pedir mais — alinhar com o time do portal.
- Sem rate-limit (abuso possível em `POST /api/logs` e `POST /cadastrar`).
- Sem CSRF (formulário público não usa sessão, então risco menor, mas considere tokens de origem no POST).

## 7. Performance (Estado Atual)

### Implementado
- E-mail enviado em **background** via `setImmediate()` (Safari iOS não aborta mais).
- Persistência Estudante + SocioEconomico em **transação única** (rollback atômico).
- `fs.promises.writeFile` (não-bloqueante) para laudos.
- Webpack em modo `production`.

### Pendente
- Sem cache HTTP para estáticos.
- Sem compressão gzip/brotli (`compression` middleware ausente).
- Validação de CPF no front poderia usar cache local (já tem dedupe de in-flight em `dataBasic.js`).

## 8. Logging

- **Backend**: `src/utils/logger.js` (Winston) + `src/utils/cadastroLogger.js` (contexto do fluxo de cadastro).
- Eventos do fluxo de cadastro:
  - `INICIO_CADASTRO`
  - `VALIDACAO_FALHOU`
  - `SALVANDO_ESTUDANTE`
  - `SALVANDO_SOCIOECONOMICO`
  - `CADASTRO_FINALIZADO`
  - `ERRO_ENVIO_EMAIL_POS_CADASTRO`
  - `ERRO_ROLLBACK_CADASTRO`
  - `UNCAUGHT_EXCEPTION`, `UNHANDLED_REJECTION`

- **Frontend**: `frontend/utils/clientLogger.js` → `POST /api/logs` com redaction automática.

## 9. Variáveis de Ambiente (lidas por `src/db/config/config.js` e `app.js`)

| Variável                | Uso                                      |
|-------------------------|------------------------------------------|
| `PORT`                  | Porta do Express                         |
| `NODE_ENV`              | `production` em PM2                      |
| `DB_HOST`               | Host do MySQL                            |
| `DB_USER`               | Usuário do MySQL                         |
| `DB_PASS`               | Senha do MySQL                           |
| `DB_BASE`               | Nome do banco                            |
| `EMAIL_USER`            | Usuário SMTP (Office 365)                |
| `EMAIL_PASS`            | Senha SMTP                               |

⚠️ O `.env` **NÃO** deve ser commitado. `.env.example` é a referência.

## 10. Armadilhas e Problemas Conhecidos

1. **`excludeSimilarCharacters: true`** remove `i, l, 1, L, o, 0, O` — usuário pode confundir `B` com `8` se houver troca de fonte. Aceitável para 8 chars.
2. **`tls.rejectUnauthorized: false`** no SMTP — remover em produção.
3. **`tranporter` único no módulo** — após longa inatividade o Office 365 fecha o socket. Em produção, recriar transporter a cada envio ou usar pool.
4. **`renderProgramasEmCurso.js` importado mas a rota está comentada** — código morto.
5. **Sem CSRF** — em formulário público, mitigation é confiar no CSP + mesma origem.
6. **Sem rate-limit** — abuse vector em `POST /cadastrar` (gera hash bcrypt = caro) e `POST /api/logs` (enchimento de log).
7. **Sem testes automatizados** — regressões são descobertas em produção via PM2 logs.
8. **`postClientLog.js`** não tem limite de tamanho — pode crescer indefinidamente.
9. **Webpack alias `process: 'process/browser'`** — necessário por causa de deps Node-only em `frontend/utils/util.js` (`assert`, `crypto`, etc.).
10. **Senha gerada no front** — se um futuro refactor mover para o backend, manter **sempre no backend** (cliente não pode "vazar" senha válida em logs/redes).
11. **Hash de senha vazia** — bloqueado por `beforeSave` em `estudante.js` (`Senha inválida para cadastro do estudante.`).
12. **Geração de senha em `schoolData.js`** — mover para o backend em uma rota dedicada é a evolução natural (não confiar no client).

## 11. Comandos Úteis

### Local
```bash
npm install              # instalar dependências
npm run dev              # webpack -w (build contínuo)
npm start                # nodemon ./app.js
npx webpack              # build único
```

### PM2 (servidor de produção)
```bash
pm2 status
pm2 logs app --lines 200
pm2 restart app
pm2 reload app
pm2 monit
```

### Sequelize CLI
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:seed:all
```

### Diagnóstico rápido
```bash
# Buscar erros de validação recentes
pm2 logs app | grep -i "VALIDACAO_FALHOU"

# Cadastros concluídos
pm2 logs app | grep "CADASTRO_FINALIZADO"

# Falhas de e-mail
pm2 logs app | grep "ERRO_ENVIO_EMAIL_POS_CADASTRO"
```

## 12. Boas Práticas deste Repositório

- **CommonJS** (não ESM) — manter consistência.
- **Controllers finos**, lógica em `src/utils/*` e nos models Sequelize.
- **Logs estruturados** com `cadastroId` e contexto de request.
- **Transações** para qualquer operação que envolva >1 tabela.
- **E-mail em background** (`setImmediate`) para manter SLA de resposta.
- **Redaction LGPD** em logs do front (`senha`, `password`, `token`, `jwt`, `authorization`).
- **CSP via Helmet** ativo no `app.js`.

## 13. Roadmap Sugerido

1. Remover `tls.rejectUnauthorized: false`.
2. Recriar transporter por envio (ou usar `nodemailer.createTransport` com pool).
3. Adicionar rate-limit (geral + específico em `POST /cadastrar` e `POST /api/logs`).
4. Adicionar `compression` middleware.
5. Mover geração de senha para o backend (POST dedicado).
6. Adicionar testes Jest (mínimo: fluxo de cadastro happy-path e rollback).
7. Cachear lookup de escola/curso (já são tabelas pequenas — fácil).
8. Padronizar mensagens de erro no front (já feito em `parseErroBackend`).
9. Documentar `.env.example` (atualmente parece ausente).
10. Revisar `webpack` — está em modo `production` por padrão (ok para prod, mas dificultar dev local).

## 14. Como Debugar Problemas em Produção

1. Identifique o `cadastroId` no log (`INICIO_CADASTRO`).
2. Filtre a timeline:
   ```
   pm2 logs app --lines 5000 | grep "<cadastroId>"
   ```
3. Procure os eventos do fluxo:
   - `INICIO_CADASTRO` → início
   - `VALIDANDO_DADOS` / `VALIDACAO_FALHOU` → validação
   - `GERANDO_DOCUMENTOS` → laudo
   - `SALVANDO_ESTUDANTE` → `SALVANDO_SOCIOECONOMICO` → persistência
   - `CADASTRO_FINALIZADO` → sucesso
   - `ENVIANDO_EMAIL` (2x) → background
   - `ERRO_ENVIO_EMAIL_POS_CADASTRO` → falha SMTP
4. Em caso de timeout do front, olhe se `setImmediate` foi disparado e se o Office 365 respondeu.

## 15. Referências Cruzadas

- Este projeto **não compartilha código** com `apiCadastroEmpresa` (Cadastro de Empresas). São projetos distintos.
- O login/senha vive em outro sistema (Portal Estudante). Este repo é apenas a porta de entrada de novos cadastros.
- A senha gerada aqui **é a mesma** que o usuário digita no Portal Estudante.
