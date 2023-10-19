const nodemailer = require("nodemailer")

const tranposter = nodemailer.createTransport({
    host: '192.168.0.11',
    port: 25,
    secure: false,
    auth: {
        user: 'nao_responda@cieeminas.org.br',
        pass: 'documentos#123',
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

async function emailASerEnviado(to, user) {

    const info = await tranposter.sendMail({
        from: 'noreply@cieemg.org',
        to: `${to}`,
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <section>
            <img alt="Logo do CIEEMG" src="images/CIEE-2023-atualizado.png" id="logo-email" />
            <div id="line1-message"></div>
            <p class="body">Prezado(a) <b>Wesley Icaro Lima dos Santos</b>,
            </p>
            <p class="body">
        
                Esta é a sua senha, pedimos que altere sua senha no primeiro acesso ao sistema.</p>
        
            <p class="body">A senha é: <b>CSv0y1</b>.</p>
            <div id="line2-message"></div>
            <p class="foot">CIEEMG - Centro de Integração Empresa Escola de Minas Gerais</p>
            <p class="foot">Portal CIEE/MG (www.cieemg.org.br)</p>
        </section>
        <style>
            * {
                margin: 0;
                padding: 0;
                outline: none;
            }
        
            section {
                background-color: white;
                height: 100%;
                border: 1px solid rgb(190, 190, 190);
                padding: 1rem;
                width: 25rem;
                height: 18rem;
                background-color: rgb(161, 152, 204);
                margin: 0rem auto;
            }
        
            .body {
                margin: 1rem 0rem;
            }
        
        
            #logo-email {
                height: 4rem;
            }
        
            #line1-message {
                height: 1px;
                background-color: rgb(216, 216, 216);
                margin: 0rem 0rem 1rem 0rem;
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
         `,
    })

    console.log('Message sent: %s', info.messageId)
}


module.exports = { emailASerEnviado }