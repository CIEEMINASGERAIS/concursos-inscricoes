"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Estudante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estudante.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo nome precisa ser preenchido" },
          len: {
            args: [3, 255],
            msg: "Esse campo deve ter 3 e 255 caracteres.",
          },
          is: /^[^0-9]*$/,
        },
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo CPF precisa ser preenchido" },
          len: {
            args: [14],
            msg: "Esse campo deve ter 14 caracteres.",
          },
          is: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/,
          isUnique(value, next) {
            Estudante.findOne({ where: { cpf: value } })
              .then((estudante) => {
                if (estudante) {
                  return next("CPF já cadastrado");
                }
                return next();
              })
              .catch((error) => {
                return next(error);
              });
          },
          isAnotherUnique(value, next) {
            value = value.replace(/\.|-/g, "");

            const validaPrimeiroDigito = (value) => {
              let soma = 0;
              for (let i = 0; i < value.length - 2; i++) {
                soma += value[i] * (value.length - 1 - i);
              }

              soma = (soma * 10) % 11;

              if (soma === 10 || soma === 11) {
                soma = 0;
              }
              if (soma != value[9]) {
                return false;
              }

              return true;
            };

            const validaSegundoDigito = (value) => {
              let soma = 0;
              for (let i = 0; i < value.length - 1; i++) {
                soma += value[i] * (value.length - i);
              }

              soma = (soma * 10) % 11;

              if (soma === 10 || soma === 11) {
                soma = 0;
              }
              if (soma != value[10]) {
                return false;
              }

              return true;
            };

            if (validaPrimeiroDigito(value) && validaSegundoDigito(value)) {
              return next();
            } else {
              return next("CPF inválido!");
            }
          },
        },
      },
      logradouro: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo logradouro precisa ser preenchido" },
        },
      },
      numero: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo numero precisa ser preenchido" },
        },
      },
      complemento: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo cep precisa ser preenchido" },
          is: /^[0-9]{5}-[0-9]{3}$/,
        },
      },
      telefone: {
        type: DataTypes.STRING(45),
        allowNull: true,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        },
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo email precisa ser preenchido" },
          is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          len: {
            args: [3, 45],
            msg: "Esse campo deve ter 3 e 45 caracteres.",
          },
          isUnique(value, next) {
            Estudante.findOne({ where: { email: value } })
              .then((estudante) => {
                if (estudante) {
                  return next("Email já cadastrado");
                }
                return next();
              })
              .catch((error) => {
                return next(error);
              });
          },
        },
      },
      cidade: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo cidade precisa ser preenchido" },
        },
      },
      bairro: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo bairro precisa ser preenchido" },
        },
      },
      senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      nomepai: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nomemae: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo nome precisa ser preenchido" },
        },
      },
      estadocivil: {
        type: DataTypes.STRING(1),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo nome precisa ser preenchido" },
          is: /^[SCADV]$/,
        },
      },
      sexo: {
        type: DataTypes.STRING(1),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo nome precisa ser preenchido" },
          is: /^[FM]$/,
        },
      },
      dt_nascimento: {
        type: DataTypes.DATEONLY(),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo data da nascimento precisa ser preenchido" },
        },
      },
      horario: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^(Manhã|Tarde|Noite|EAD|EC|F)$/
        },
      },
      // *************************** VERIFICAR ***************************
      rg: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo rg precisa ser preenchido" },
          is: /^\d+$/,
        },
        // Obrigatório e só permitir números
      },
      orgaoexpedidor: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          len: {
            args: [1, 45],
            msg: "Esse campo deve ter 1 e 45 caracteres.",
          },
        },
      },
      periodoano: {
        allowNull: false,
        type: DataTypes.STRING(3),
        defaultValue: "0°",
      },
      previsaoformatura: {
        allowNull: false,
        type: DataTypes.STRING(8),
        defaultValue: "0°/0000",
      },
      curso_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo curso_id precisa ser preenchido" },
          is: /^\d+$/,
        },
      },
      // *************************** VERIFICAR ***************************
      escola_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^\d+$/,
        },
      },
      dt_cadastro: {
        type: DataTypes.DATEONLY(),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio."
          }
        }
      },
      uf: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
        },
      },
      idade: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^[0-9]+$/,
          // Posso fazer uma regra de len para controlar o número de caracteres
        },
      },
      // *************************** VERIFICAR ***************************
      estagiario_ativo: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      dt_atualizacao: {
        type: DataTypes.DATEONLY(),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Este campo não pode ser vazio."
          }
        }
      },
      // *************************** VERIFICAR ***************************
      periodo: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Este campo não pode ser vazio."
          }
        }
      },
      ano: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          }
        },
      },
      previsao_semestre: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^(1|2|0)$/, // Validar no front para estágio curricular passar o valor 0
          len: {
            args: [1],
            msg: "Esse campo deve ser um dos itens da lista semestre de formatura.",
          },
        },
      },
      previsao_ano: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^(19[9][0-9]|20[0-2][0-9]|2030)$/,
          len: {
            args: [4],
            msg: "Esse campo deve ter 4 caracteres.",
          },
        },
      },
      previsao_mes: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^(1|2|3|4|5|6|7|8|9|10|11|12)$/,
          len: {
            args: [1, 2],
            msg: "Esse campo deve ter 1 e 2 caracteres.",
          },
        },
      },
      deficiencia: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          notNull: { msg: "O campo nome precisa ser preenchido" },
          is: /^(N|F|A|V|ME|MU|TE)$/,
        },
      },
      deficiencia_descricao: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      telefone1: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          }
        },
      },
      telefone2: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          }
        },
      },
      ctps: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      // *************************** VERIFICAR ***************************
      candidato_selecionado: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      anoingresso: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        // Fazer uma lógica para buscar o ano de ingresso e fazer o calculo
      },
      semestreingresso: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 1,
        // Fazer uma lógica para encontra o semestre ingresso
      },
      cpf_pai: {
        type: DataTypes.STRING(14),
        allowNull: true,
        // Não obrigatório
      },
      cpf_mae: {
        type: DataTypes.STRING(14),
        allowNull: true,
        // Obrigatório
      },
      notificacao: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      dt_alteracao_notificacao: {
        type: DataTypes.DATEONLY(),
        allowNull: true,
      },
      codigo: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "08sEt2023",
        // Temos que descobrir qual é este código
      },
      dt_expiracao_codigo: {
        type: DataTypes.DATE(),
        allowNull: true,
      },
      url_anexo_curriculo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nome_arquivo_curriculo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primeiro_acesso: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      // *************************** VERIFICAR ***************************
      termos_condicoes: {
        allowNull: false,
        type: DataTypes.INTEGER(4),
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^[1]$/,
          len: {
            args: [1],
            msg: "Esse campo deve ter 1 caracter.",
          },
        },
      },
      dt_aceite_termos: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      naturalidade: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^[^0-9]*$/,
          len: {
            args: [1, 100],
            msg: "Esse campo deve ter 1 e 100 caracteres.",
          },
        },
      },
      uf_naturalidade: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          len: {
            args: [2],
            msg: "Esse campo deve ter 1 e 2 caracteres.",
          },
        },
      },
      nacionalidade: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio.",
          },
          is: /^[^0-9]*$/,
          len: {
            args: [1, 100],
            msg: "Esse campo deve ter 1 e 100 caracteres.",
          },
        },
      },
      enviar_email: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        validate: {
          is: /^(1|2)$/,
        }
      },
      nome_social: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: {
            args: [3, 255],
            msg: "Esse campo deve ter 3 e 255 caracteres.",
          },
          is: /^[^0-9]*$/,
        },
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "estudante",
      tableName: "estudante",
    }
  );

  Estudante.beforeSave(async (estudante) => {
    if (estudante.changed('senha')) {
      try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(estudante.senha, saltRounds);
        estudante.senha = hash;
      } catch (error) {
        throw new Error('Erro na criptografia da senha: ' + error);
      }
    }
  })

  return Estudante;
};

// Se a tabela existir vai sincronizar, se não vai criar uma tabela nova
// Estudante.sync()

// Estudante.sync({ alter: true })
