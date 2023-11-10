'use strict';

const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class SocioEconomico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SocioEconomico.init({
    estudante_id: {
      allowNull: false,
      type: DataTypes.INTEGER(11),
      references: {
        model: 'estudante',
        key: 'id'
      }
    },
    aprendiz: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
      },
    },
    responsavel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
      },
    },
    imovel: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
      },
    },
    pessoas_por_residencia: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
      },
    },
    tem_filhos: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
      },
    },
    escola_estudou: {
      type: DataTypes.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
        is: /^(0|1|2|3|4)$/,
      },
    },
    renda: {
      type: DataTypes.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
        is: /^(1|2|3|4)$/,
      },
    },
    genero: {
      type: DataTypes.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
        is: /^(C|T)$/,
      },
    },
    etnia: {
      type: DataTypes.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
        is: /^(N|B|P|A|I)$/,
      },
    },
    situacao_judicial: {
      type: DataTypes.STRING(2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio.",
        },
        is: /^(A|MP|MS|SP|N)$/,
      },
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'socio_economico',
    tableName: 'socio_economico'
  });

  // SocioEconomico.sync({ alter: true })

  return SocioEconomico;
};