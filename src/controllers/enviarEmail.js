const nodemailer = require("nodemailer")

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

async function emailASerEnviadoProcessos(to, user, pass) {

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

    console.log('Message sent: %s', info.messageId)
}

async function emailASerEnviadoComum(to, user, pass) {
    console.log("Enviando e-mail para:", to);
    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        bcc: 'faleconosco.cieemg@gmail.com',
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <html>
        <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div style="height: 100%;
            border: 1px solid rgb(190, 190, 190);
            padding: 1rem;
            max-width: 30rem;
            height: 18rem;        
            margin: 0rem auto;
            background-color: white;
            margin-bottom: 5rem;">
                <img alt="Logo do CIEEMG" style="height: 3rem;"
                    src="cid:logociee" />
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
                    color: black;">Portal CIEE/MG &#40;<span><a href="https://bit.ly/4hvZ2Hq" rel="noopener noreferrer" target="_blank">www.cieemg.org.br</a>&#41;</span></p>
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
    console.log("E-mail enviado:", info.messageId);
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
    situacao_judicial, id, cpf) {
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
console.log("E-mail enviado:", info.messageId);
}

module.exports = { emailASerEnviadoProcessos, emailASerEnviadoComum, emailPresp }