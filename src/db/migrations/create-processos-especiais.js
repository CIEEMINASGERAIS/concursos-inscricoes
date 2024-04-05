'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('processos_especiais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      estudante_id: {
        type: Sequelize.INTEGER
      },
      indicacao: {
        type: Sequelize.STRING
      },
      descricao_indicacao: {
        type: Sequelize.STRING
      },
      chamou_atencao_desafio: {
        type: Sequelize.STRING
      },
      descricao_chamou_atencao: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('processos_especiais');
  }
};