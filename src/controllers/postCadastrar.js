const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");
const path = require("path");
const fs = require("fs");

const enviandoEmail = require("./enviarEmail");
const { buildCadastroContext, logCadastroStep } = require("../utils/cadastroLogger");
const { handleControllerError } = require("../utils/controllerError");
const { logger } = require("../utils/logger");

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

const SocioEconomico = require("../db/models/socio_economico")(sequelize, DataTypes);

// const ProcessosEspeciais = require("../db/models/processos_especiais")(sequelize, DataTypes);

Estudante.hasOne(SocioEconomico);
SocioEconomico.belongsTo(Estudante);

const laudoUploadDir = path.resolve(__dirname, "..", "..", "public", "assets", "uploads", "laudos");

fs.mkdirSync(laudoUploadDir, { recursive: true });

// =====================================================================
// GATE DE ENVIO DE E-MAIL
// Regra de negocio revisada em 2026-08-24: o e-mail de confirmacao so
// eh enviado se o formulario de Cursos foi preenchido corretamente.
// Caso contrario, o cadastro prossegue normalmente mas SEM disparar
// `nodemailer.sendMail` — evita e-mails quebrados com senha undefined
// ou com campos obrigatorios faltando no template.
//
// Critérios:
//   1) payload.curso: obrigatório, string de 1-2 dígitos (os
//      índices 0..15 do select #tipo populado pelo schoolData.js).
//   2) Se `curso` for "13" (Graduacao Similar) ou "15" (Nivel Medio
//      Similar), `payload.curso_similar` tambem eh obrigatorio.
//
// O retorno eh { enviar: boolean, motivo: string|null } para
// registrar a razao exata no log estruturado (PM2) caso o envio seja
// suprimido.
// =====================================================================
function deveEnviarEmail(payload) {
    const curso = payload?.curso;

    if (curso === undefined || curso === null || curso === "") {
        return { enviar: false, motivo: "curso_vazio" };
    }
    if (typeof curso !== "string" || !/^\d{1,2}$/.test(curso)) {
        return { enviar: false, motivo: "curso_formato_invalido" };
    }

    const exigeSimilar = curso === "13" || curso === "15";
    if (exigeSimilar) {
        const similar = (payload?.curso_similar || "").toString().trim();
        if (!similar) {
            return { enviar: false, motivo: "curso_similar_obrigatorio" };
        }
    }

    return { enviar: true, motivo: null };
}

// (mapa de curso -> label reintroduzido quando voltamos a usar o
// template Comum — ver `CURSOS_LABEL` abaixo.)

// Mapa de indice -> label do curso. Mantem o backend independente
// do frontend (que tem o mesmo mapa embutido em schoolData.js):
// quando o frontend mandar `curso` (indice "0".."15"), podemos
// renderizar o nome legivel no e-mail sem precisar de JOIN.
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
    "13": "Graduação Similar",
    "14": "Técnico em Informática",
    "15": "Nível Médio Similar",
};

async function enviarEmailsPosCadastro(req, estudante, contextoBase, laudoUrl = null) {
    try {
        logCadastroStep(req, "ENVIANDO_EMAIL", {
            cadastroId: estudante.id,
            destinatario: "estudante",
        });

        // =====================================================================
        // E-MAIL PADRAO DE SUCESSO (cadastro concluido)
        // Template longo (`Comum`) — eh o que vai na caixa de entrada do
        // candidato quando o cadastro eh finalizado com sucesso.
        // Inclui: codigo de inscricao, curso registrado, deficiencia
        // (com descricao), flag de laudo anexado e etnia. Os BCCs vao
        // para faleconosco + concursotjmmj + controlador (time responsavel
        // pelo concurso TJMMG).
        // =====================================================================
        const cursoIndice = (req.body.curso || "").toString().trim();
        const cursoSimilar = (req.body.curso_similar || "").toString().trim();
        // Para os indices 13/15 ("Graduacao Similar" / "Nivel Medio
        // Similar") usamos o texto livre preenchido pelo candidato; para
        // os demais usamos o label canonico do indice.
        const cursoNome =
            (cursoIndice === "13" || cursoIndice === "15") && cursoSimilar
                ? cursoSimilar
                : CURSOS_LABEL[cursoIndice] || "";

        // =====================================================================
        // NOME USADO NO E-MAIL
        // Se a pessoa cadastrou um nome social (checkbox "Prefiro usar
        // nome social" marcado e campo preenchido com >=3 letras),
        // usamos o nome social na saudacao do e-mail — é como a pessoa
        // quer ser chamada. Caso contrario, cai para o nome civil.
        // O nome civil continua sendo gravado normalmente no banco.
        // =====================================================================
        const nomeSocialRaw = (req.body.nome_social || "").toString().trim();
        const nomeParaEmail = nomeSocialRaw.length >= 3 ? nomeSocialRaw : req.body.nome;

        await enviandoEmail.emailASerEnviadoComum(
            req.body.email,
            nomeParaEmail,
            req.body.senha,
            {
                ...contextoBase,
                cadastroId: estudante.id,
            },
            {
                curso_nome: cursoNome,
                deficiencia: req.body.deficiencia || "",
                deficiencia_descricao: req.body.deficiencia_descricao || "",
                etnia: req.body.etnia || "",
                laudo_deficiencia: laudoUrl || req.body.laudo_deficiencia || null,
            }
        );

        logCadastroStep(req, "ENVIANDO_EMAIL", {
            cadastroId: estudante.id,
            destinatario: "presp",
        });
        // O e-mail para o PRESP dependia de varios campos da avaliacao
        // social (aprendiz, responsavel, escola_estudou, imovel, etc.)
        // que foram removidos do fluxo. Para nao enviar dados
        // quebrados, deixamos o envio desativado ate que o template
        // seja adaptado (ou a avaliacao social volte a ser obrigatoria).
        // TODO: reativar quando a regra de negocio for revista.
        // await enviandoEmail.emailPresp(
        //     req.body.nome,
        //     req.body.telefone1,
        //     req.body.telefone2,
        //     req.body.email,
        //     req.body.aprendiz,
        //     req.body.responsavel,
        //     req.body.escola_estudou,
        //     req.body.imovel,
        //     req.body.pessoas_por_residencia,
        //     req.body.renda,
        //     req.body.genero,
        //     req.body.etnia,
        //     req.body.tem_filhos,
        //     req.body.situacao_judicial,
        //     estudante.id,
        //     req.body.cpf,
        //     {
        //         ...contextoBase,
        //         cadastroId: estudante.id,
        //     }
        // );
    } catch (emailError) {
        logger.error("ERRO_ENVIO_EMAIL_POS_CADASTRO", {
            ...contextoBase,
            cadastroId: estudante.id,
            erro: emailError?.message,
        });
    }
}

// Estudante.hasOne(ProcessosEspeciais)
// ProcessosEspeciais.belongsTo(Estudante)

// Função responsável por enviar as informações para o banco de dados
async function postRegister(req, res) {
    const contextoBase = buildCadastroContext(req, {
        cpf: req.body.cpf,
        cnpj: req.body.cnpj || req.body.empresa_cnpj || req.body.empresa,
        usuario: req.body.usuario_id || req.body.usuarioId || req.user?.id || null,
    });

    logger.info("INICIO_CADASTRO", contextoBase);

    let transaction;

    try {
        logCadastroStep(req, "VALIDANDO_DADOS", {
            cadastroId: contextoBase.cadastroId,
        });

        // Laudo medico eh OPCIONAL. Historicamente o backend bloqueava o
        // cadastro quando o candidato declarava uma deficiencia que exigia
        // laudo (F, A, V, ME, MU, TE) e nao anexava o arquivo. A regra
        // de negocio foi revista: o laudo nao eh mais obrigatorio no fluxo
        // publico. Se vier anexado, salvamos normalmente; se nao vier,
        // seguimos com o cadastro sem o arquivo.
        const laudoBase64 = req.body.laudo_deficiencia_base64;
        const laudoNome = req.body.laudo_deficiencia_nome;

        let laudoUrl = null;

        if (laudoBase64) {
            logCadastroStep(req, "GERANDO_DOCUMENTOS", {
                documento: "laudo_deficiencia",
            });

            const base64Match = laudoBase64.match(/^data:([^;]+);base64,(.+)$/);
            const base64Data = base64Match ? base64Match[2] : laudoBase64;
            const safeName = `${Date.now()}-${laudoNome || "laudo-medico"}`.replace(/[^a-zA-Z0-9._-]/g, "_");
            const filePath = path.join(laudoUploadDir, safeName);

            await fs.promises.writeFile(filePath, Buffer.from(base64Data, "base64"));
            laudoUrl = `/uploads/laudos/${safeName}`;
        }

        const payload = {
            ...req.body,
            laudo_deficiencia: laudoUrl,
        };

        // O frontend antigo definia `enviar_email` na tela de avaliação
        // social (removida do fluxo). Como o campo é `allowNull: false`
        // no model, garantimos um default aqui para nao quebrar o
        // cadastro. 1 = envia e-mail de confirmação; 2 = nao envia.
        if (payload.enviar_email === undefined || payload.enviar_email === null) {
            payload.enviar_email = 1;
        }

        delete payload.laudo_deficiencia_base64;
        delete payload.laudo_deficiencia_nome;
        delete payload.laudo_deficiencia_tipo;

        transaction = await sequelize.transaction();

        logCadastroStep(req, "SALVANDO_ESTUDANTE");
        const novoEstudante = await Estudante.create(payload, { transaction });

        // A tabela socio_economico deixou de fazer parte do cadastro
        // obrigatorio. Os campos sao preenchidos em fluxo separado
        // (ou nunca sao preenchidos, dependendo da regra de negocio).
        // Por isso NAO criamos o SocioEconomico aqui: os campos
        // obrigatorios quebrariam o cadastro se o usuario nao
        // preencher a tela (que foi removida do fluxo).

        await transaction.commit();
        transaction = null;

        logCadastroStep(req, "CADASTRO_FINALIZADO", {
            cadastroId: novoEstudante.id,
        });

        // =====================================================================
        // ENVIO DE E-MAIL SÍNCRONO COM TIMEOUT
        // O frontend precisa saber se o e-mail foi enviado com sucesso (ou
        // suprimido pelo gate) ANTES de exibir a tela final. Se devolvermos
        // 200 imediatamente e o SMTP falhar, o usuário fica sem aviso.
        //
        // Estrategia:
        //   1) gate decide se e-mail deve sair (curso preenchido).
        //   2) Promise.race contra um timeout de 5s — protege contra SMTP
        //      travado (ex.: Office365 lento em horário de pico).
        //   3) Sucesso/falha/timeout/supressao viram `emailStatus` na
        //      resposta, e o `enviarEmailsPosCadastro` ainda eh chamado
        //      (sem await no top-level) pra nao atrasar a resposta quando
        //      o SMTP responde rapido.
        // =====================================================================
        const gate = deveEnviarEmail(req.body);
        let emailStatus = "suprimido";
        let emailMotivo = gate.motivo;
        let emailErro = null;

        if (!gate.enviar) {
            logger.warn("EMAIL_GATE_FALHOU", {
                ...contextoBase,
                cadastroId: novoEstudante.id,
                motivo: gate.motivo,
                curso: req.body.curso ?? null,
                curso_similar_present: Boolean(
                    (req.body.curso_similar || "").toString().trim()
                ),
            });
        } else {
            // Office365 costuma levar 6-9s em horário de pico. 5s era
            // curto e marcava `falhou` no frontend mesmo com o e-mail
            // chegando minutos depois (race perdido, envio OK).
            // 15s cobre o pior caso sem deixar a resposta pendurada
            // além do aceitável para o candidato.
            const EMAIL_TIMEOUT_MS = 15000;
            try {
                const envioPromise = enviarEmailsPosCadastro(
                    req,
                    novoEstudante,
                    contextoBase,
                    laudoUrl
                );
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(
                        () =>
                            reject(
                                Object.assign(new Error("SMTP_TIMEOUT"), {
                                    code: "SMTP_TIMEOUT",
                                })
                            ),
                        EMAIL_TIMEOUT_MS
                    )
                );
                await Promise.race([envioPromise, timeoutPromise]);
                emailStatus = "enviado";
                emailMotivo = null;
            } catch (errEnvio) {
                emailStatus = "falhou";
                emailErro = errEnvio?.message || "erro_desconhecido";
                emailMotivo = errEnvio?.code || null;
                // Log detalhado (mantem o `ERRO_ENVIO_EMAIL_POS_CADASTRO`
                // que ja existia dentro do catch de enviarEmailsPosCadastro
                // — aqui so registramos o timeout/erro do race).
                logger.error("EMAIL_RACE_FALHOU", {
                    ...contextoBase,
                    cadastroId: novoEstudante.id,
                    erro: emailErro,
                    code: emailMotivo,
                });
            }
        }

        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            cadastroId: novoEstudante.id,
            email: {
                status: emailStatus, // "enviado" | "falhou" | "suprimido"
                motivo: emailMotivo,
                erro: emailErro,
            },
        });
    } catch (err) {
        if (transaction) {
            try {
                await transaction.rollback();
            } catch (rollbackError) {
                logger.error("ERRO_ROLLBACK_CADASTRO", {
                    ...contextoBase,
                    erro: rollbackError?.message,
                });
            }
        }

        if (err && err.name === "SequelizeValidationError") {
            const camposInvalidos = Array.isArray(err.errors)
                ? err.errors.map((e) => ({ campo: e.path, mensagem: e.message }))
                : [];

            logger.warn("CADASTRO_VALIDACAO_FALHOU", {
                ...contextoBase,
                etapa: "VALIDANDO_DADOS",
                erro: err.message,
                camposInvalidos,
            });

            return res.status(400).json({
                erro: "Dados inválidos",
                detalhes: camposInvalidos,
            });
        }

        if (err && err.name === "SequelizeUniqueConstraintError") {
            const campoDuplicado = err.errors && err.errors[0] ? err.errors[0].path : "campo único";

            logger.warn("CADASTRO_DUPLICADO", {
                ...contextoBase,
                etapa: "SALVANDO_ESTUDANTE",
                campoDuplicado,
                valorDuplicado: campoDuplicado === "cpf" ? contextoBase.cpf : req.body.email,
            });

            return res.status(409).json({
                erro: `Já existe um cadastro com este ${campoDuplicado === "cpf" ? "CPF" : "e-mail"}.`,
                campo: campoDuplicado,
                jaCadastrado: true,
            });
        }

        return handleControllerError(req, res, err, {
            status: 500,
            etapa: "CADASTRO",
            message: "ERRO_CADASTRO",
            publicMessage: "Erro ao cadastrar usuário. Tente novamente em instantes.",
            context: {
                cadastroId: contextoBase.cadastroId,
                // DIAGNOSTICO: loga as chaves do payload recebido
                // para ajudar a identificar qual campo esta quebrando
                // o Estudante.create (causa comum: campo NOT NULL
                // novo na migration que ainda nao esta sendo enviado
                // pelo frontend apos a remocao da tela SocioEconomico).
                payloadKeys: Object.keys(req.body || {}).sort(),
                payloadAmostra: (() => {
                    const sample = {};
                    const keys = Object.keys(req.body || {}).slice(0, 30);
                    for (const k of keys) {
                        const v = req.body[k];
                        if (typeof v === "string") sample[k] = v.slice(0, 80);
                        else sample[k] = v;
                    }
                    return sample;
                })(),
                erroOriginal: err.message,
                nomeErro: err.name,
                sqlState: err.parent?.sqlState || err.original?.sqlState || null,
                sqlCode: err.parent?.code || err.original?.code || null,
                sqlMessage: err.parent?.sqlMessage || err.original?.sqlMessage || null,
            },
        });
    }
}

module.exports = { postRegister };