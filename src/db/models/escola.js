'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Escola extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Escola.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      razaosocial: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      cnpj: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      logradouro: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      numero: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      complemento: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      telefone: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      nomecontato: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      importado: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: 0
      },
      senha: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      bairro: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      codescola: {
        type: DataTypes.STRING(10),
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
    },
    {
      sequelize,
      modelName: 'escola',
      tableName: 'escola',
      timestamps: false
    }
  )
  return Escola
}
