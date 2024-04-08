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

async function emailASerEnviadoComum(to, user, pass) {

    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        bcc: 'faleconosco.cieemg@gmail.com',
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <html>
            <div style="height: 100%;
            border: 1px solid rgb(190, 190, 190);
            padding: 1rem;
            max-width: 30rem;
            height: 18rem;        
            margin: 0rem auto;
            background-color: white;">
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
                    color: black;">Portal CIEE/MG (<a href="https://cieemg.org.br/" rel="noopener noreferrer" target="_blank">www.cieemg.org.br</a>)</p>
            </div>

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
            Portal CIEE/MG (www.cieemg.org.br)`
    })

    console.log('Message sent: %s', info.messageId)
}

async function emailASerEnviadoProcessos(to, user, pass) {

    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        bcc: 'faleconosco.cieemg@gmail.com',
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <html>
            <div style="height: 100%;
            border: 1px solid rgb(190, 190, 190);
            padding: 1rem;
            max-width: 30rem;
            height: 18rem;        
            margin: 0rem auto;
            background-color: white;">
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
                    color: black;">Portal CIEE/MG (<a href="https://cieemg.org.br/" rel="noopener noreferrer" target="_blank">www.cieemg.org.br</a>)</p>
            </div>

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
            Portal CIEE/MG (www.cieemg.org.br)`
    })

    console.log('Message sent: %s', info.messageId)
}

module.exports = { emailASerEnviadoProcessos, emailASerEnviadoComum }