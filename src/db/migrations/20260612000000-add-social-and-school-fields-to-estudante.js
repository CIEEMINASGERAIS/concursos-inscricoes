'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('estudante', 'linkedin', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });

    await queryInterface.addColumn('estudante', 'instagram', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });

    await queryInterface.addColumn('estudante', 'matricula', {
      type: Sequelize.STRING(45),
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('estudante', 'matricula');
    await queryInterface.removeColumn('estudante', 'instagram');
    await queryInterface.removeColumn('estudante', 'linkedin');
  },
};