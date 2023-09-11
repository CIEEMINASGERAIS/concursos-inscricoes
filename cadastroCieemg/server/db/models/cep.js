'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cep.init({
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    regiao: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'cep',
    tableName: 'cep'
  });
  return Cep;
};