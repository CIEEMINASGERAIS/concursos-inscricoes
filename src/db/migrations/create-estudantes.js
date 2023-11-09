'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estudante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      nomepai: {
        type: Sequelize.STRING
      },
      nomemae: {
        type: Sequelize.STRING
      },
      estadocivil: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      dt_nascimento: {
        type: Sequelize.DATEONLY
      },
      horario: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      orgaoexpedidor: {
        type: Sequelize.STRING
      },
      periodoano: {
        type: Sequelize.STRING
      },
      previsaoformatura: {
        type: Sequelize.STRING
      },
      curso_id: {
        type: Sequelize.INTEGER
      },
      escola_id: {
        type: Sequelize.INTEGER
      },
      dt_cadastro: {
        type: Sequelize.DATEONLY
      },
      uf: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      estagiario_ativo: {
        type: Sequelize.STRING
      },
      dt_atualizacao: {
        type: Sequelize.DATEONLY
      },
      periodo: {
        type: Sequelize.INTEGER
      },
      ano: {
        type: Sequelize.INTEGER
      },
      previsao_semestre: {
        type: Sequelize.INTEGER
      },
      previsao_ano: {
        type: Sequelize.INTEGER
      },
      previsao_mes: {
        type: Sequelize.INTEGER
      },
      deficiencia: {
        type: Sequelize.STRING
      },
      deficiencia_descricao: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      ctps: {
        type: Sequelize.STRING
      },
      candidato_selecionado: {
        type: Sequelize.INTEGER
      },
      anoingresso: {
        type: Sequelize.INTEGER
      },
      semestreingresso: {
        type: Sequelize.INTEGER
      },
      cpf_pai: {
        type: Sequelize.STRING
      },
      cpf_mae: {
        type: Sequelize.STRING
      },
      notificacao: {
        type: Sequelize.STRING
      },
      dt_alteracao_notificacao: {
        type: Sequelize.DATEONLY
      },
      codigo: {
        type: Sequelize.STRING
      },
      dt_expiracao_codigo: {
        type: Sequelize.DATE
      },
      url_anexo_curriculo: {
        type: Sequelize.STRING
      },
      nome_arquivo_curriculo: {
        type: Sequelize.STRING
      },
      primeiro_acesso: {
        type: Sequelize.STRING
      },
      termos_condicoes: {
        type: Sequelize.INTEGER
      },
      dt_aceite_termos: {
        type: Sequelize.DATE
      },
      naturalidade: {
        type: Sequelize.STRING
      },
      uf_naturalidade: {
        type: Sequelize.STRING
      },
      nacionalidade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estudante');
  }
};