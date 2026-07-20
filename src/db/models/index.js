const Sequelize = require("sequelize");
const { logger } = require("../../utils/logger");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    timezone: config.timezone,
  }
);

sequelize
  .authenticate()
  .then(function () {
    logger.info("DB_CONNECTION_OK", {
      database: config.database,
      host: config.host,
    });
  })
  .catch(function (error) {
    logger.error("DB_CONNECTION_ERROR", {
      erro: error.message,
      stack: error.stack,
      originalError: error,
      database: config.database,
      host: config.host,
    });
    throw error;
  });

module.exports = sequelize;
