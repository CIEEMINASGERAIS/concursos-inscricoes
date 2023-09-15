module.exports = {
    apps: [
        {
            name: "app",
            script: "/home/cieemg/app/cadastroCieemg/server/app.js",
            env: {
                NODE_ENV: "development", // Pode ser definido diretamente
                DB_HOST: process.env.DB_HOST, // Usando variável do arquivo .env
                DB_BASE: process.env.DB_BASE,
                DB_USER: process.env.DB_USER,
                DB_PASSWORD: process.env.DB_PASS
            },
        }
    ]
};