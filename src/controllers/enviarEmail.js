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

async function emailASerEnviado(to) {

    const info = await tranposter.sendMail({
        from: 'noreply@cieeminas.org',
        to: `${to}`,
        subject: 'Email teste',
        text: 'Email enviado com sucesso!',
    })

    console.log('Message sent: %s', info.messageId)
}


module.exports = { emailASerEnviado }