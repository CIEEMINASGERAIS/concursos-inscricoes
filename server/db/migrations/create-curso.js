'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('curso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      idescola: {
        allowNull: true,
        type: Sequelize.INTEGER(11)
      },
      idcurso: {
        allowNull: true,
        type: Sequelize.INTEGER(11)
      },
      descricao: {
        allowNull: true,
        type: Sequelize.STRING(70)
      },
      duracao: {
        allowNull: true,
        type: Sequelize.STRING(2)
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
    await queryInterface.dropTable('curso');
  }
};