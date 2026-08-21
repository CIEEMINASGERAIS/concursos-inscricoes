const nodemailer = require("nodemailer")
const { logger } = require("../utils/logger");

require("dotenv").config();

const tranposter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para 465, false para as outras
    auth: {
        user: "validacao.cadastro@cieeminas.com.br",
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

async function emailASerEnviadoProcessos(to, user, pass, context = {}) {
    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        bcc: 'faleconosco.cieemg@gmail.com',
        subject: `Senha para acesso do Portal Estudante ${new Date().getTime()}`,
        html: `
        <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div style="height: 100%;
                border: 1px solid rgb(190, 190, 190);
                padding: 1rem;
                max-width: 30rem;
                height: 20rem;
                margin: 0rem auto;
                background-color: white;
                margin-bottom: 3rem;">
                <img alt="Logo do CIEEMG" style="height: 3rem;" src="cid:logociee" />
                <div style="height: 1px;
                    background-color: rgb(216, 216, 216);
                    margin: 1rem 0rem 1rem 0rem;"></div>
                <p style="margin: 1rem 0rem;
                    color: black;">Prezado(a) <b>${user}</b>,
                </p>
                <p style="color: black;">

                    Esta é a sua senha, pedimos que altere sua senha no primeiro acesso ao sistema.</p>

                <p style="margin: 1rem 0rem;
                    color: black;">A senha é: <b>${pass}</b>.</p>
                <p style="color: black;">
                    Parabéns por sua inscrição no desafio a Voz do Jovem, <a
                    style="color: red; text-decoration: none; font-weight: bolder;"
                    onmouseover="this.style.textDecoration = 'underline'" onmouseout="this.style.textDecoration = 'none'"
                    rel="noopener noreferrer" target="_blank"
                    href="https://www.cieemg.org.br/noticia/desafio-a-voz-do-jovem">clique aqui</a> para leitura do regulamento.
                    Boa sorte!
                </p>
                <div style="height: 1px;
                    background-color: rgb(216, 216, 216);
                    margin: 1rem 0rem 0.5rem 0rem;"></div>
                <p style="font-size: 0.7em;
                    font-weight: 800;
                    text-align: center;
                    margin: 0.5rem;
                    color: black;">CIEEMG - Centro de Integração Empresa Escola de Minas Gerais</p>
                <p style="font-size: 0.7em;
                    font-weight: 800;
                    text-align: center;
                    margin: 0.5rem;
                    color: black;">Portal CIEE/MG &#40;<span><a href="https://bit.ly/4hvZ2Hq" rel="noopener noreferrer"
                    target="_blank">www.cieemg.org.br</a></span>&#41;</p>
            </div>
        </body>
        </html>
         `,
        attachments: [{
            filename: "CIEE-2023-atualizado.png",
            path: "public/assets/images/CIEE-2023-atualizado.png",
            cid: "logociee"
        }],
        text: `
        Prezado(a) ${user},

        Esta é a sua senha, pedimos que altere sua senha no primeiro acesso ao sistema.

        A senha é: ${pass}.

            CIEEMG - Centro de Integração Empresa Escola de Minas Gerais
            Portal CIEE/MG www.cieemg.org.br`
    })

    logger.info("EMAIL_ENVIADO", {
        ...context,
        messageId: info.messageId,
        destinatario: "processos",
    });
}

async function emailASerEnviadoComum(
    to,
    user,
    pass,
    context = {},
    dadosCadastro = {}
) {
    // Mapeia o codigo da deficiencia para a descricao amigavel
    // exibida no email. Segue a mesma legenda usada em
    // `emailPresp` para manter consistencia com o PRESP.
    const deficienciasLegenda = {
        N: "Nenhuma",
        F: "Fisica",
        A: "Auditiva",
        V: "Visual",
        ME: "Mental",
        MU: "Multipla",
        TE: "Transtorno do Espectro Autista (TEA)",
    };
    const etniasLegenda = {
        N: "negro(a)",
        B: "branco(a)",
        P: "pardo(a)",
        A: "amarelo(a)",
        I: "indigena",
    };

    const defCodigo = (dadosCadastro.deficiencia || "").toString().toUpperCase();
    const etniaCodigo = (dadosCadastro.etnia || "").toString().toUpperCase();

    const deficienciaTexto = deficienciasLegenda[defCodigo] || "Nenhuma";
    const etniaTexto = etniasLegenda[etniaCodigo] || "Nao informada";

    const descricaoDeficiencia = (dadosCadastro.deficiencia_descricao || "").trim();
    const descricaoLinha = descricaoDeficiencia
        ? `<br><strong>Descricao:</strong> ${descricaoDeficiencia}`
        : "";

    const laudoPath = dadosCadastro.laudo_deficiencia || null;
    // Anexo so eh incluido se houver arquivo fisico salvo. Mantemos o
    // caminho absoluto porque o Nodemailer anexa a partir do FS do
    // servidor.
    const attachments = [
        {
            filename: "CIEE-2023-atualizado.png",
            path: "public/assets/images/CIEE-2023-atualizado.png",
            cid: "logociee",
        },
    ];
    if (laudoPath) {
        // laudoPath chega como `/uploads/laudos/xxx.pdf` (caminho web).
        // Converte para caminho absoluto no FS para o nodemailer anexar.
        const fs = require("fs");
        const path = require("path");
        const caminhoAbsoluto = path.join(
            __dirname,
            "..",
            "..",
            "public",
            laudoPath.replace(/^\//, "")
        );
        if (fs.existsSync(caminhoAbsoluto)) {
            attachments.push({
                filename: path.basename(caminhoAbsoluto),
                path: caminhoAbsoluto,
            });
        }
    }

    const cursoTexto = dadosCadastro.curso_nome
        ? `<strong>CURSO REGISTRADO:</strong> ${dadosCadastro.curso_nome}<br>`
        : "";

    const dataHoje = new Date().toLocaleDateString("pt-BR");

    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        // BCC mantido (faleconosco) + 2 enderecos novos informados
        // pelo time. Sempre em array para acomodar qualquer
        // combinacao.
        bcc: [
            'faleconosco.cieemg@gmail.com',
            'concursotjmmj@cieemg.org.br',
            'controlador@cieemg.org.br',
        ],
        subject: `CIEE/MG - Confirmacao de Inscricao Concurso TJMMG - Data: ${dataHoje}`,
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
                        <strong>CIEE/MG &ndash; Confirmacao de Inscricao Concurso TJMMG - Data: ${dataHoje}</strong>
                    </p>

                    <p style="margin: 1rem 0; color: black;">
                        Prezado(a) <strong>${user}</strong>,
                    </p>

                    <p style="color: black;">
                        Sua inscricao para o concurso do Tribunal de Justica Militar do Estado de Minas Gerais foi realizada com sucesso.
                    </p>

                    <p style="color: black;"><strong>Codigo de Inscricao:</strong> ${context.cadastroId ?? "ID do banco"}</p>

                    ${cursoTexto ? `<p style="color: black;">${cursoTexto}</p>` : ""}

                    <p style="color: black;"><strong>Necessidade especial:</strong> ${deficienciaTexto}${descricaoLinha}${laudoPath ? `<br><strong>Laudo medico anexado:</strong> Sim` : ""}</p>

                    <p style="color: black;"><strong>Como se considera (etnia):</strong> ${etniaTexto}</p>

                    <p style="color: black;">
                        <strong>Atencao:</strong> Todas as informacoes referentes a datas, local de prova e demais informacoes consulte o edital publicado em nosso portal <a href="https://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a>.
                    </p>

                    <p style="color: black;">
                        Caso voce tenha alguma duvida, entre em contato conosco pelos canais informados abaixo.
                    </p>

                    <p style="color: black;">Atenciosamente,</p>

                    <p style="color: black;"><strong>CIEE/MG - Concursos</strong><br>
                        Telefone/WhatsApp: (31) 3429-8100 &ndash; Opcao 6<br>
                        E-mail: concursotjmmg@cieemg.org.br<br>
                        <a href="http://www.cieemg.org.br" target="_blank" rel="noopener">www.cieemg.org.br</a><br>
                        <strong>Horario de funcionamento:</strong> 08:30 ate 17:30 de segunda a sexta-feira
                    </p>

                    <div style="height: 1px;
                        background-color: rgb(216, 216, 216);
                        margin: 1rem 0rem 0.5rem 0rem;"></div>
                    <p style="font-size: 0.7em;
                        font-weight: 800;
                        text-align: center;
                        margin: 0.5rem;
                        color: black;">CIEEMG - Centro de Integracao Empresa Escola de Minas Gerais</p>
                </div>
            </body>
            </html>`,
        attachments,
        text:
            `CIEE/MG - Confirmacao de Inscricao Concurso TJMMG - Data: ${dataHoje}

Prezado(a) ${user},

Sua inscricao para o concurso do Tribunal de Justica Militar do Estado de Minas Gerais foi realizada com sucesso.

Codigo de Inscricao: ${context.cadastroId ?? "ID do banco"}

${dadosCadastro.curso_nome ? `Curso registrado: ${dadosCadastro.curso_nome}\n` : ""}Necessidade especial: ${deficienciaTexto}${descricaoDeficiencia ? ` - ${descricaoDeficiencia}` : ""}${laudoPath ? " (laudo medico anexado)" : ""}

Como se considera (etnia): ${etniaTexto}

Atencao: Todas as informacoes referentes a datas, local de prova e demais informacoes consulte o edital publicado em nosso portal www.cieemg.org.br.

Caso voce tenha alguma duvida, entre em contato conosco pelos canais informados abaixo.

Atenciosamente,

CIEE/MG - Concursos
Telefone/WhatsApp: (31) 3429-8100 - Opcao 6
E-mail: concursotjmmg@cieemg.org.br
www.cieemg.org.br
Horario de funcionamento: 08:30 ate 17:30 de segunda a sexta-feira`
    });

    logger.info("EMAIL_ENVIADO", {
        ...context,
        messageId: info.messageId,
        destinatario: "estudante",
    });
}


async function emailPresp(user, telefone1, telefone2, email, aprendiz,
    responsavel,
    escola_estudou,
    imovel,
    pessoas_por_residencia,
    renda,
    genero,
    etnia,
    tem_filhos,
    situacao_judicial, id, cpf, context = {}) {
    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `presp@cieemg.org.br`,
        bcc: ['controlador@cieemg.org.br',
            'faleconosco.cieemg@gmail.com'],
        subject: `Socioecônomico - ${user}`,
        text: `Prezado(a),

E-mail gerado automaticamente, por favor não responda.

Segue o formulário socioeconômico do(a) estudante: ${user}.

Código de Cadastro: ${id}
CPF: ${cpf}

Telefone(s): ${telefone1} ${telefone2 ? '/ ' + telefone2 : ''}
E-mail: ${email}

1. Você já foi aprendiz? Se positivo, qual foi o curso realizado? (se possível descrever a CBO ou ARCO):

Resposta: ${aprendiz}

2. Se tem idade menor que 18 anos, possui responsavéis legais que não sejam seus pais? Se positivo, qual o parentesco ou situação?

Resposta: ${responsavel}

3. Estuda ou estudou em escola da:

Resposta: ${escola_estudou}

Legenda: 0 = Rede Pública Municipal / 1 = Escola Particular com Bolsa / 2 = Rede Pública Estadual / 3 = Escola Particular sem Bolsa / 4 = Rede Pública Federal

4. Você reside em imóvel alugado, próprio ou outro? Se o imóvel gera algum custo, como aluguel, financiamento e etc, favor informar o valor mensal pago.

Resposta: ${imovel}

5. Além de você, quantas pessoas do seu grupo familiar residem na sua casa?

Resposta: ${pessoas_por_residencia}

6. Informe o valor total da renda, formal ou informal, do seu grupo familiar, incluindo pensão alimentícia ou por falecimento, aposentadoria, benefícios do Governo, como BPC, BEM e outros (estas informações deverão ser comprovadas quando solicitadas):

Resposta: ${renda}

Legenda: 1 = Até 1 Salário Mínimo / 2 = Até 2 Salários Mínimos / 3 = Até 3 Salários Mínimos / 4 = A partir de 4 Salários Mínimos

7. Qual a sua identidade de gênero?

Resposta: ${genero}

Legenda: C = Cisgênero / T = Transgênero

8. Como você se declara:

Resposta: ${etnia}

Legenda: N = Negro / B = Branco / P = Pardo / A = Amarelo / I = Indígena

9. Se você tem filho(s), quantos são e informe se recebe ou paga auxílio financeiro para ele(a).

Resposta: ${tem_filhos}

10. Você se enquadra em uma das opções abaixo?

Resposta: ${situacao_judicial}

Legenda: A = Situação judicial: acolhimento institucional (abrigo) / MP = Medida Protetiva / MS = Medida Sócioeducativa / SP = Sistema Prisional / N = Não me Enquadro em Nenhuma


                                                                    Portal CIEE/MG - www.cieemg.org.br
`})
logger.info("EMAIL_ENVIADO", {
    ...context,
    messageId: info.messageId,
    destinatario: "presp",
});
}

module.exports = { emailASerEnviadoProcessos, emailASerEnviadoComum, emailPresp }