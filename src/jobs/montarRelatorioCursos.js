/**
 * Relatório semanal de cadastros por curso.
 *
 * Tabela consultada: `concurso_inscritos` (a mesma que o model
 * `estudante.js` aponta como `tableName`).
 *
 * Colunas usadas:
 *   - `curso`         VARCHAR(2)  → índice "0".."15" do <select>
 *                                     do frontend (schoolData.js).
 *   - `curso_similar` VARCHAR(255) → texto livre digitado pelo
 *                                     candidato quando escolhe os
 *                                     índices 13 ou 15 ("similar").
 *
 * O relatório SEMPRE mostra os 14 cursos canônicos (índices 0..12
 * e 14) do `CURSOS_LABEL` — mesmo os que têm zero inscritos na
 * semana. Isso garante que o destinatário vê o catálogo principal
 * do concurso e consegue notar quais cursos não receberam
 * cadastros.
 *
 * Os índices 13 e 15 ("Ou Graduação similar em 'tecnologia'..." e
 * "Ou similar conforme edital") NÃO aparecem como linhas próprias
 * — os textos livres digitados pelos candidatos (coluna
 * `curso_similar`) já viram linhas extras via etapa 1, então
 * duplicar com o rótulo longo do edital só polui a tabela.
 *
 * Além dos 16 canônicos, cada `curso_similar` distinto que aparece
 * pelo menos uma vez no banco vira uma linha extra. Isso reflete
 * fielmente o que os candidatos digitaram (não agrupamos variações
 * parecidas — "Ciência de Dados" e "ciencia de dados" viram duas
 * linhas separadas, mas isso é raro na prática).
 *
 * Rótulos: a rotulagem é feita em JS via `rotularCurso()` em
 * `cursosLabel.js`, MESMA lógica usada no e-mail de confirmação
 * enviado ao candidato (`postCadastrar.js`). Isso evita que o
 * relatório e o e-mail do candidato falem coisas diferentes sobre
 * o mesmo cadastro.
 *
 * Roda uma única query agregada para não trazer N cadastros para a
 * memória. A rotulagem e o catálogo completo acontecem em JS, depois.
 */

const { QueryTypes } = require("sequelize");
const sequelize = require("../db/models");
const { logger } = require("../utils/logger");
const { rotularCurso, CURSOS_LABEL, INDICES_COM_TEXTO_LIVRE } = require("./cursosLabel");

async function montarRelatorioCursos() {
    const inicio = Date.now();

    // Query agregada: conta cadastros por (curso, curso_similar).
    // Como `curso_similar` pode ser NULL, usamos COALESCE para
    // conseguir GROUP BY sem warnings de ONLY_FULL_GROUP_BY.
    //
    // Observação: usamos `''` como sentinela para NULL no GROUP BY
    // para que o `rotularCurso` em JS possa distinguir "índice 13
    // sem similar preenchido" de "índice 13 com similar preenchido".
    const linhas = await sequelize.query(
        `
        SELECT
            COUNT(*)                              AS quantidade,
            COALESCE(e.curso, '')                 AS curso_indice,
            COALESCE(e.curso_similar, '')         AS curso_similar
        FROM concurso_inscritos e
        GROUP BY COALESCE(e.curso, ''), COALESCE(e.curso_similar, '')
        ORDER BY quantidade DESC
        `,
        { type: QueryTypes.SELECT }
    );

    // =====================================================================
    // 1) Soma os cadastros vindos do banco.
    //    Cada combinação (indice, similar) gera uma entrada no mapa
    //    indexada por chave = "indice||similar".
    // =====================================================================
    const porChave = new Map();

    for (const row of linhas) {
        const chave = `${row.curso_indice}||${row.curso_similar}`;
        const atual = porChave.get(chave) || {
            cursoIndice: row.curso_indice,
            cursoSimilar: row.curso_similar,
            quantidade: 0,
        };
        atual.quantidade += Number(row.quantidade) || 0;
        porChave.set(chave, atual);
    }

    // =====================================================================
    // 2) Garante os cursos canônicos (exceto os índices "13" e "15")
    //    no mapa, com quantidade 0 quando não houver cadastro.
    //    Os índices 13/15 representam opções de "similar" — em vez de
    //    aparecer como linhas próprias do catálogo (com os rótulos
    //    longos do edital), são refletidos no relatório apenas pelos
    //    textos livres digitados pelos candidatos (etapa 1).
    //    Cada canônico fica indexado por chave = "indice||" (sem
    //    similar) para que o agrupamento case com a forma como o
    //    frontend grava quando o candidato NÃO preenche similar.
    // =====================================================================
    for (const indice of Object.keys(CURSOS_LABEL)) {
        if (INDICES_COM_TEXTO_LIVRE.has(indice)) continue;
        const chave = `${indice}||`;
        if (!porChave.has(chave)) {
            porChave.set(chave, {
                cursoIndice: indice,
                cursoSimilar: "",
                quantidade: 0,
            });
        }
    }

    // =====================================================================
    // 3) Renderiza cada entrada do mapa via `rotularCurso` (mesma
    //    regra do e-mail de confirmação do candidato).
    // =====================================================================
    const relatorio = Array.from(porChave.values()).map(r => ({
        curso: rotularCurso({
            cursoIndice: r.cursoIndice,
            cursoSimilar: r.cursoSimilar,
        }),
        quantidade: r.quantidade,
    }));

    // Ordena por quantidade desc, depois alfabético pra empate ficar
    // estável entre execuções.
    relatorio.sort((a, b) => {
        if (b.quantidade !== a.quantidade) return b.quantidade - a.quantidade;
        return a.curso.localeCompare(b.curso, "pt-BR");
    });

    const total = relatorio.reduce((acc, r) => acc + r.quantidade, 0);

    // Log estruturado: deixa rastro no PM2 para auditoria.
    logger.info("RELATORIO_CURSOS_MONTADO", {
        linhas_distintas: relatorio.length,
        total_cadastros: total,
        combinacoes_brutas: linhas.length,
        duracao_ms: Date.now() - inicio,
    });

    // Aviso amigável: se a tabela estiver vazia, loga explicitamente.
    // (concurso_inscritos é a tabela que o model aponta mas, durante
    // o desenvolvimento, foi observado que os dados reais estavam em
    // `estudante` — ver migration `create-estudantes.js`. O operador
    // precisa ver este aviso para entender o porquê.)
    if (total === 0) {
        logger.warn("RELATORIO_CURSOS_TABELA_VAZIA", {
            tabela: "concurso_inscritos",
            duracao_ms: Date.now() - inicio,
        });
    }

    return { linhas: relatorio, total };
}

module.exports = { montarRelatorioCursos };
