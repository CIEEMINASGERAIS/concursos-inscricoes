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
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estudante',
          key: 'id'
        }
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