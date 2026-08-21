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

async function enviarEmailsPosCadastro(req, estudante, contextoBase) {
    try {
        logCadastroStep(req, "ENVIANDO_EMAIL", {
            cadastroId: estudante.id,
            destinatario: "estudante",
        });
        await enviandoEmail.emailASerEnviadoComum(req.body.email, req.body.nome, req.body.senha, {
            ...contextoBase,
            cadastroId: estudante.id,
        });

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

        const exigeLaudo = ["F", "A", "V", "ME", "MU", "TE"].includes(req.body.deficiencia);
        const laudoBase64 = req.body.laudo_deficiencia_base64;
        const laudoNome = req.body.laudo_deficiencia_nome;

        if (exigeLaudo && !laudoBase64) {
            logger.warn("VALIDACAO_FALHOU", {
                ...contextoBase,
                etapa: "VALIDANDO_DADOS",
                erro: "Anexe o laudo médico para a deficiência informada.",
            });

            return res.status(400).json({
                erro: "Anexe o laudo médico para a deficiência informada.",
            });
        }

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

        // Envia e-mails em segundo plano para não bloquear o retorno do cadastro.
        setImmediate(() => {
            enviarEmailsPosCadastro(req, novoEstudante, contextoBase);
        });

        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
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