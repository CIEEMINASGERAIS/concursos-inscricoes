const nodemailer = require("nodemailer")

const tranposter = nodemailer.createTransport({
    host: '192.168.0.11',
    port: 587,
    secure: false, // true para 465, false para as outras
    auth: {
        user: "nao_responda@cieeminas.org.br",
        pass: "documentos#123",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

async function emailASerEnviado(to, user, pass) {

    const info = await tranposter.sendMail({
        from: 'noreply@cieemg.org.br',
        to: `${to}`,
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <html>
            <div id="box-email">
                <img alt="Logo do CIEEMG" src="https://cieemg.org.br/files/2023-09/logooficialsimplificada2023.png?58d4bae036"
                    id="logo-email" />
                <div id="line1-message"></div>
                <p class="body">Prezado(a) <b>${user}</b>,
                </p>
                <p class="body">

                    Esta é a sua senha, pedimos que altere sua senha no primeiro acesso ao sistema.</p>

                <p class="body">A senha é: <b>${pass}</b>.</p>
                <div id="line2-message"></div>
                <p class="foot">CIEEMG - Centro de Integração Empresa Escola de Minas Gerais</p>
                <p class="foot">Portal CIEE/MG (www.cieemg.org.br)</p>
            </div>
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    outline: 0;
                    font-family: 'Inter', sans-serif;
                }

                #box-email {
                    height: 100%;
                    border: 1px solid rgb(190, 190, 190);
                    padding: 1rem;
                    max-width: 30rem;
                    height: 18rem;
                    background-color: white;
                    margin: 0rem auto;
                }

                .body {
                    margin: 1rem 0rem;
                }


                #logo-email {
                    height: 3rem;
                }

                #line1-message {
                    height: 1px;
                    background-color: rgb(216, 216, 216);
                    margin: 1rem 0rem 1rem 0rem;
                }

                #line2-message {
                    height: 1px;
                    background-color: rgb(216, 216, 216);
                    margin: 1rem 0rem 0.5rem 0rem;
                }

                .foot {
                    font-size: 0.7em;
                    font-weight: 800;
                    text-align: center;
                    margin: 0.5rem;
                }
            </style>
        </html>
         `,
        text: `
        Prezado(a) ${user},        

        Esta é a sua senha, pedimos que altere sua senha no primeiro acesso ao sistema.

        A senha é: ${pass}.

            CIEEMG - Centro de Integração Empresa Escola de Minas Gerais
            Portal CIEE/MG (www.cieemg.org.br)`
    })

    console.log('Message sent: %s', info.messageId)
}


module.exports = { emailASerEnviado }