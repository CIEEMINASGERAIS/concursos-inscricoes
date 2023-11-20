const nodemailer = require("nodemailer")

const tranposter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para 465, false para as outras
    auth: {
        user: "validacao.cadastro@cieeminas.com.br",
        pass: "CadCAO#482@validDE$6910",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

async function emailASerEnviado(to, user, pass) {

    const info = await tranposter.sendMail({
        from: 'validacao.cadastro@cieeminas.com.br',
        to: `${to}`,
        subject: 'Senha para acesso do Portal Estudante',
        html: ` 
        <html>
<div style="height: 100%;
border: 1px solid rgb(190, 190, 190);
padding: 1rem;
max-width: 30rem;
height: 18rem;        
margin: 0rem auto;">
    <img alt="Logo do CIEEMG" style="height: 3rem;"
        src="https://lh3.googleusercontent.com/pw/ADCreHf_wW4N2QuwvssEmvc8VdEBplOu09ae_w1XGNrT3PnffGuUYdJGRqKWeRp8UuPE3V3AoL3DiaY1n6U70uMdh1lNCt4pGb9pnM9gpF7xG3_YiL1qlXoBAfTLIsp72z6p5rH5DYXYGZKEIjFwE0X59OoWfSP8r9UjB9V3p-nv8_2mGvR8qWXgaz-LtKNLIvhyAB7Olc-LBT7M2kGBQgbmoNPk_fHDWfW802NFHvRhbMCkxgoKmIUAShl8PSmwHBcUP-1210BEy_UlJ4t-HO71ACDUM_-1R5JdvwMSkYWE0LEAEB2zHbjhGqUr2iBbgoGRsH2LEZkWvZj3MUNLuyEGqWZzLlT0p-tRo17VXDQHh5sra_bVDZkcLkjHZ_eZtn7OzhwFJRcorgxAHsvIBjgz7PCx3RpChvbNT9c4IVU6lMZijZkfGefs2jgTfAQSLGRB2qnMuqqruuI4Eu70TX4g3Ksm2aseDpzuwVfBtep0GjuZUwgeGSiiFUadcJLzsO-HIOi2fXTt0DE8zu355KYys_8HAm3JkD0ikVgBi_tFkJL_VwZTbZG28GmIgr0Z7fyNLF7RHIto66rM-zaHjMB0uai7MlYxFmCfqCYLkRu_bFSaeZO0Y1vvUGsGD0Fipt15euIE76YjpMXuCDduLMSKifDqkDSqFB_SfOnHAav36GBtzG2tyR25o0s1e-pC1wQMrIkJdmjd3qmVHk3ov_T_d7dChx-x1-TY9zPucbRh12slTpukbX18bHOYRSvtetc7y5GKqe0HWXlsI111k5_2By3JPxZYTH57GOtjEE_yyplmbH-BF7X2G94QbmfLUUxDwrYJ70z5MCyJFgonyBcQsGOKIKBLyo4PGReA8k2VO03goikj8pS3TvhSzx8icsbJiduG4I3RQDFnAFUd8DOmHiTPqCSeDsE-gi4lWK5UWY72fI2FVbNrmyrOHhdTeAFZm6EOjzoorNGMAzdFpoRI4Ti3yS0cHDc9=w1000-h750-s-no-gm?authuser=3" />
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
    color: black;">Portal CIEE/MG (www.cieemg.org.br)</p>
</div>

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