const sequelize = require("../db/models");

const DataTypes = require("sequelize/lib/data-types");
const path = require("path");
const fs = require("fs");

const enviandoEmail = require('./enviarEmail')

// Acessar o models estudante
const Estudante = require("../db/models/estudante")(sequelize, DataTypes);

const SocioEconomico = require("../db/models/socio_economico")(sequelize, DataTypes);

// const ProcessosEspeciais = require("../db/models/processos_especiais")(sequelize, DataTypes);

Estudante.hasOne(SocioEconomico)
SocioEconomico.belongsTo(Estudante)

const laudoUploadDir = path.resolve(__dirname, "..", "..", "public", "assets", "uploads", "laudos");

fs.mkdirSync(laudoUploadDir, { recursive: true });

// Estudante.hasOne(ProcessosEspeciais)
// ProcessosEspeciais.belongsTo(Estudante)

// Função responsável por enviar as informações para o banco de dados
async function postRegister(req, res) {

    try {
        const exigeLaudo = ["F", "A", "V", "ME", "MU", "TE"].includes(req.body.deficiencia);
        const laudoBase64 = req.body.laudo_deficiencia_base64;
        const laudoNome = req.body.laudo_deficiencia_nome;
        const laudoTipo = req.body.laudo_deficiencia_tipo;

        if (exigeLaudo && !laudoBase64) {
            return res.status(400).json({
                erro: "Anexe o laudo médico para a deficiência informada.",
            });
        }

        let laudoUrl = null;

        if (laudoBase64) {
            const base64Match = laudoBase64.match(/^data:([^;]+);base64,(.+)$/);
            const base64Data = base64Match ? base64Match[2] : laudoBase64;
            const safeName = `${Date.now()}-${laudoNome || "laudo-medico"}`.replace(/[^a-zA-Z0-9._-]/g, "_");
            const filePath = path.join(laudoUploadDir, safeName);

            fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));
            laudoUrl = `/uploads/laudos/${safeName}`;
        }

        const payload = {
            ...req.body,
            laudo_deficiencia: laudoUrl,
        };

        delete payload.laudo_deficiencia_base64;
        delete payload.laudo_deficiencia_nome;
        delete payload.laudo_deficiencia_tipo;

        const novoEstudante = await Estudante.create(payload)

        await SocioEconomico.create({
            estudante_id: novoEstudante.id,
            aprendiz: req.body.aprendiz,
            responsavel: req.body.responsavel,
            imovel: req.body.imovel,
            pessoas_por_residencia: req.body.pessoas_por_residencia,
            tem_filhos: req.body.tem_filhos,
            escola_estudou: req.body.escola_estudou,
            renda: req.body.renda,
            genero: req.body.genero,
            etnia: req.body.etnia,
            situacao_judicial: req.body.situacao_judicial
        });

        await enviandoEmail.emailASerEnviadoComum(req.body.email, req.body.nome, req.body.senha)

        await enviandoEmail.emailPresp(req.body.nome, req.body.telefone1,
            req.body.telefone2, req.body.email, req.body.aprendiz,
            req.body.responsavel, req.body.escola_estudou, req.body.imovel,
            req.body.pessoas_por_residencia, req.body.renda, req.body.genero,
            req.body.etnia, req.body.tem_filhos, req.body.situacao_judicial,
            novoEstudante.id, req.body.cpf
        )

        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
        });
    } catch (err) {
        return res.status(400).json({
            erro: `Erro ao cadastrar usuário: ${err.message}`
        });
    }
}

module.exports = { postRegister }