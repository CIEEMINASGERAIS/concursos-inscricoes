'use strict'

const Sequelize = require('sequelize')

const db = require('./index')

const estudantes = db.define(
  'estudantes',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        len: {
          args: [3, 255],
          msg: "Esse campo deve ter 3 e 255 caracteres."
        },
        is: /^[a-zA-Z \b]+$/
      }
    },
    cpf: {
      type: Sequelize.STRING(14),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo CPF precisa ser preenchido" },
        len: {
          args: [14],
          msg: "Esse campo deve ter 14 caracteres."
        },
        is: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/,
        isUnique(value, next) {
          estudantes.findOne({ where: { cpf: value } })
            .then((estudante) => {
              if (estudante) {
                return next('CPF já cadastrado')
              }
              return next()
            })
            .catch((error) => {
              return next(error)
            })
        },
        isAnotherUnique(value, next) {

          value = value.replace(/\.|-/g, '')

          const validaPrimeiroDigito = (value) => {
            let soma = 0
            for (let i = 0; i < value.length - 2; i++) {
              soma += value[i] * ((value.length - 1) - i)
            }

            soma = (soma * 10) % 11

            if (soma === 10 || soma === 11) {
              soma = 0
            }
            if (soma != value[9]) {
              return false
            }

            return true
          }

          const validaSegundoDigito = (value) => {
            let soma = 0
            for (let i = 0; i < value.length - 1; i++) {
              soma += value[i] * ((value.length) - i)
            }

            soma = (soma * 10) % 11

            if (soma === 10 || soma === 11) {
              soma = 0
            }
            if (soma != value[10]) {
              return false
            }

            return true
          }

          if (validaPrimeiroDigito(value) && validaSegundoDigito(value)) {
            return next()
          } else {
            return next("CPF inválido!")
          }

        }
      }
    },
    logradouro: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo logradouro precisa ser preenchido" }
      }
    },
    numero: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo numero precisa ser preenchido" }
      }
    },
    complemento: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    cep: {
      type: Sequelize.STRING(10),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo cep precisa ser preenchido" },
        is: /^[0-9]{5}-[0-9]{3}$/
      }
    },
    telefone: {
      type: Sequelize.STRING(45),
      allowNull: true,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        is: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
      }
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo email precisa ser preenchido" },
        is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        len: {
          args: [3, 45],
          msg: "Esse campo deve ter 3 e 45 caracteres."
        },
        isUnique(value, next) {
          estudantes.findOne({ where: { email: value } })
            .then((estudante) => {
              if (estudante) {
                return next('Email já cadastrado')
              }
              return next()
            })
            .catch((error) => {
              return next(error)
            })
        },
      }
    },
    cidade: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" }
      }
    },
    bairro: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" }
      }
    },
    senha: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    nomepai: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    nomemae: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" }
      }
    },
    estadocivil: {
      type: Sequelize.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[scadv]$/
      }
    },
    sexo: {
      type: Sequelize.STRING(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[fm]$/
      }
    },
    dt_nascimento: {
      type: Sequelize.DATEONLY(),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo data da nascimento precisa ser preenchido" }
      }
    },
    horario: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        isHorario(value, next) {
          const horariosEstudos = [
            "Manhã",
            "Tarde",
            "Noite",
            "EAD",
            "Estágio Curricular",
            "Formado"
          ]

          let horario

          for (let chave in horariosEstudos) {
            if (horariosEstudos[chave] === value) {
              horario = horariosEstudos[chave]
              break
            }
          }

          if (!horario) {
            return next('Horario incorreto!')
          }
          return next()
        }
      }
    },
    // *************************** VERIFICAR ***************************
    rg: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo rg precisa ser preenchido" },
        is: /^\d+$/
      }
      // Obrigatório e só permitir números
    },
    orgaoexpedidor: {
      type: Sequelize.STRING(45),
      allowNull: false,
      validate: {
        len: {
          args: [1, 45],
          msg: "Esse campo deve ter 1 e 45 caracteres."
        },
      }
    },
    periodoano: {
      allowNull: false,
      type: Sequelize.STRING(3),
      defaultValue: '0°'
    },
    previsaoformatura: {
      allowNull: false,
      type: Sequelize.STRING(8),
      defaultValue: '0°/0000'
    },
    curso_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^\d+$/
      }
    },
    // *************************** VERIFICAR ***************************
    escola_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O id da escola precisa ser preenchido" },
        is: /^\d+$/
      }
    },
    // *************************** VERIFICAR ***************************
    dt_cadastro: {
      type: Sequelize.DATEONLY(),
      allowNull: false,
      // validate: {
      //   notEmpty: {
      //     msg: "Esse campo não pode ser vazio."
      //   },
      //   notNull: { msg: "O campo data de cadastro precisa ser preenchido" },
      //   // is: /^\d+$/
      // }
      // Data do dia de cadastro
    },
    // *************************** VERIFICAR ***************************
    uf: {
      type: Sequelize.STRING(2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        isUf(value, next) {
          const listUfNaturalidade = [
            'RO',
            'AC',
            'AM',
            'RR',
            'PA',
            'AP',
            'TO',
            'MA',
            'PI',
            'CE',
            'RN',
            'PB',
            'PE',
            'AL',
            'SE',
            'BA',
            'MG',
            'ES',
            'RJ',
            'SP',
            'PR',
            'SC',
            'RS',
            'MS',
            'MT',
            'GO',
            'DF'
          ]

          let state

          for (let i = 0; i < listUfNaturalidade.length; i++) {
            if (listUfNaturalidade[i] === value) {
              state = listUfNaturalidade[i]
            }
          }

          if (state != value || value.length === 0 || value.length != 2) {
            return next('Estado incorreto!')
          }

          value = parseInt(value)
          if (value) {
            return next('É permitido somente os estados da lista.')
          }

          return next()
        }
      }
    },
    idade: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[0-9]+$/
        // Posso fazer uma regra de len para controlar o número de caracteres
      }
    },
    // *************************** VERIFICAR ***************************
    estagiario_ativo: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    dt_atualizacao: {
      type: Sequelize.DATEONLY(),
      allowNull: true
      // Data do dia de cadastro
    },
    // *************************** VERIFICAR ***************************
    periodo: {
      type: Sequelize.INTEGER(4),
      allowNull: true
      // Esse é o período que vamos utilizar
    },
    ano: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" }
        // Ano atual
      }
    },
    previsao_semestre: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo semestre de formatura precisa ser preenchido" },
        is: /^(1|2|0)$/, // Validar no front para estágio curricular passar o valor 0
        len: {
          args: [1],
          msg: "Esse campo deve ser um dos itens da lista semestre de formatura."
        }
      }
    },
    previsao_ano: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo ano de formatura precisa ser preenchido" },
        is: /^(19[9][0-9]|20[0-2][0-9]|2030)$/,
        len: {
          args: [4],
          msg: "Esse campo deve ter 4 caracteres."
        }
        // Previsão de formatura que vamos utilizar
      }
    },
    previsao_mes: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo mês de formatura precisa ser preenchido" },
        is: /^(1|2|3|4|5|6|7|8|9|10|11|12)$/,
        len: {
          args: [1, 2],
          msg: "Esse campo deve ter 1 e 2 caracteres."
        }
        // Previsão do mês de formatura que vamos utilizar
      }
    },
    deficiencia: {
      type: Sequelize.STRING(2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^(N|F|A|V|ME|MU|TE)$/
      }
    },
    deficiencia_descricao: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    telefone1: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo telefone precisa ser preenchido" },
        is: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
      }
    },
    telefone2: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo telefone precisa ser preenchido" },
        is: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
      }
    },
    ctps: {
      type: Sequelize.STRING(20),
      allowNull: true,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        is: /^\d+$/,
        len: {
          args: [7, 20],
          msg: "Esse campo deve ter 7 e 20 caracteres."
        }
      }
    },
    // *************************** VERIFICAR ***************************
    candidato_selecionado: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    anoingresso: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: 2021
      // Fazer uma lógica para buscar o ano de ingresso e fazer o calculo 
    },
    semestreingresso: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: 1
      // Fazer uma lógica para encontra o semestre ingresso
    },
    cpf_pai: {
      type: Sequelize.STRING(14),
      allowNull: true
      // Não obrigatório
    },
    cpf_mae: {
      type: Sequelize.STRING(14),
      allowNull: true
      // Obrigatório
    },
    notificacao: {
      type: Sequelize.STRING(2),
      allowNull: true
    },
    dt_alteracao_notificacao: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    codigo: {
      type: Sequelize.STRING(20),
      allowNull: true,
      defaultValue: "08sEt2023"
      // Temos que descobrir qual é este código
    },
    dt_expiracao_codigo: {
      type: Sequelize.DATE,
      allowNull: true
    },
    url_anexo_curriculo: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    nome_arquivo_curriculo: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    primeiro_acesso: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    // *************************** VERIFICAR ***************************
    termos_condicoes: {
      allowNull: false,
      type: Sequelize.INTEGER(4),
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[1]$/,
        len: {
          args: [1],
          msg: "Esse campo deve ter 1 caracter."
        }
      }
    },
    // **************** VERIFICAR ****************
    dt_aceite_termos: {
      type: Sequelize.DATE(),
      allowNull: false
      // Está pronto, agora é só verificar com o Lídio
    },
    // **************** VERIFICAR ****************
    naturalidade: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[a-zA-Z ]+$/,
        len: {
          args: [1, 100],
          msg: "Esse campo deve ter 1 e 100 caracteres."
        }
      }
    },
    uf_naturalidade: {
      type: Sequelize.STRING(2),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        len: {
          args: [2],
          msg: "Esse campo deve ter 1 e 2 caracteres."
        }
      }
    },
    nacionalidade: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Esse campo não pode ser vazio."
        },
        notNull: { msg: "O campo nome precisa ser preenchido" },
        is: /^[a-zA-Z ]+$/,
        len: {
          args: [1, 100],
          msg: "Esse campo deve ter 1 e 100 caracteres."
        }
      }
    },
    enviar_email: {
      type: Sequelize.STRING(1),
      allowNull: false,
      defaultValue: 1
    }
  },
  {
    timestamps: false
  }
)

// Se a tabela existir vai sincronizar, se não vai criar uma tabela nova
// estudantes.sync()

// estudantes.sync({alter: true})

module.exports = estudantes
