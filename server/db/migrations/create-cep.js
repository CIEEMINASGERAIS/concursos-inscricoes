'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cep', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      logradouro: {
        type: Sequelize.STRING(70),
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      cidade: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      regiao: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cep');
  }
};