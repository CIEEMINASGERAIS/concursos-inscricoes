module.exports = {
    apps: [
        {
            name: "app",
            script: "./app.js",
            env: {
                "NODE_ENV": "development",
                "host": process.env.DB_HOST,
                "database": process.env.DB_BASE,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASS
            },
        }
    ]
};