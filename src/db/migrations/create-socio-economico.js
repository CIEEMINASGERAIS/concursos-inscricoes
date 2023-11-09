'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('socio_economico', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estudante',
          key: 'id'
        }
      },
      aprendiz: {
        type: Sequelize.STRING
      },
      responsavel: {
        type: Sequelize.STRING
      },
      imovel: {
        type: Sequelize.STRING
      },
      pessoas_por_residencia: {
        type: Sequelize.STRING
      },
      tem_filhos: {
        type: Sequelize.STRING
      },
      escola_estudou: {
        type: Sequelize.STRING
      },
      renda: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      etnia: {
        type: Sequelize.STRING
      },
      situacao_judicial: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('socio_economico');
  }
};