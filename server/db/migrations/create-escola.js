'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('escola', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      razaosocial: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cnpj: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      numero: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      complemento: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cep: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      nomecontato: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      importado: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: 0
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      codescola: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('escola')
  }
}
