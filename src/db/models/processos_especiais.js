'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProcessosEspeciais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProcessosEspeciais.init({
    estudante_id: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      references: {
        model: 'estudante',
        key: 'id'
      }
    },
    indicacao: {
      allowNull: false,
      type: DataTypes.STRING(10),
      validate: {
        notNull: { msg: "O campo indicacao precisa ser preenchido" },
        is: /^(0|1|2|3|4|5)$/,
      }
    },
    descricao_indicacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chamou_atencao_desafio: {
      allowNull: false,
      type: DataTypes.STRING(10),
      validate: {
        notNull: { msg: "O campo chamou_atencao_desafio precisa ser preenchido" },
        is: /^(0|1|2|3|4)$/,
      }
    },
    descricao_chamou_atencao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'processos_especiais',
    tableName: 'processos_especiais'
  });

  // Se a tabela existir vai sincronizar, se não vai criar uma tabela nova
  // ProcessosEspeciais.sync()

  // ProcessosEspeciais.sync({ alter: true })

  // ProcessosEspeciais.sync({ force: true });

  return ProcessosEspeciais;
};