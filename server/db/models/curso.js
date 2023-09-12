'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curso.init({
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    idescola: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    idcurso: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    duracao: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'curso',
    tableName: 'curso'
  });
  return Curso;
};