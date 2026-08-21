'use strict';

/**
 * Adiciona as colunas `genero` e `etnia` na tabela `estudante`.
 *
 * Origem: novas perguntas do formulário de Dados Básicos
 * (gênero e etnia) para alinhamento com o edital. Os valores são
 * armazenados como 1 caractere:
 *   - genero: C (Cisgênero) | T (Transgênero)
 *   - etnia:  N (Negro) | B (Branco) | P (Pardo) | A (Amarelo) | I (Indígena)
 *
 * As colunas são `allowNull: true` para não quebrar cadastros
 * antigos e porque o usuário pode preencher sem selecionar nenhum
 * valor (a validação fica na camada de aplicação via required).
 *
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tolerar re-execução manual caso o DBA já tenha criado as colunas
    // direto no banco (mantém a migration idempotente).
    const tabela = 'estudante';
    const desc = await queryInterface.describeTable(tabela);
    const jaTemGenero = Object.prototype.hasOwnProperty.call(desc, 'genero');
    const jaTemEtnia = Object.prototype.hasOwnProperty.call(desc, 'etnia');

    if (!jaTemGenero) {
      await queryInterface.addColumn(tabela, 'genero', {
        type: Sequelize.STRING(1),
        allowNull: true,
      });
    }

    if (!jaTemEtnia) {
      await queryInterface.addColumn(tabela, 'etnia', {
        type: Sequelize.STRING(1),
        allowNull: true,
      });
    }
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('estudante', 'etnia');
    await queryInterface.removeColumn('estudante', 'genero');
  },
};
