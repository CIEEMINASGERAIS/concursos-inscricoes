/**
 * Mapa de cursos do concurso + função de rotulagem.
 *
 * Fonte única da verdade usada tanto pelo `postCadastrar.js` (e-mail
 * de confirmação enviado ao candidato) quanto pelo relatório semanal
 * (CRON em `agendarRelatorioCursos.js`).
 *
 * Por que isto existe
 * -------------------
 *  - O frontend (`frontend/pages/schoolData.js`) tem um `<select>`
 *    com índices "0".."15".
 *  - Quando o candidato escolhe o índice **13** ("Ou Graduação
 *    similar em 'tecnologia' conforme edital") ou **15** ("Ou similar
 *    conforme edital"), um campo de texto livre (`curso_similar`)
 *    aparece e é gravado na coluna `curso_similar` da tabela
 *    `concurso_inscritos`.
 *  - O backend tem que saber mapear cada índice para um rótulo
 *    legível e, para 13/15, **preferir o texto livre digitado pelo
 *    candidato** em vez do rótulo canônico.
 *
 * Mantemos o backend independente do frontend: o frontend não nos
 * envia `descricao` nem `nome`, só o índice. É por isso que este
 * mapa vive aqui no servidor.
 */

const CURSOS_LABEL = {
    "0": "Pós-Graduação em Direito",
    "1": "Administração",
    "2": "Biblioteconomia",
    "3": "Comunicação Social",
    "4": "Comunicação Social com Habilitação em Publicidade",
    "5": "Direito",
    "6": "Engenharia Civil",
    "7": "Engenharia Elétrica",
    "8": "Jornalismo",
    "9": "Marketing",
    "10": "Publicidade e Propaganda",
    "11": "Ciência da Computação",
    "12": "Sistemas de Informação",
    "13": "Ou Graduação similar em \u201ctecnologia\u201d conforme edital",
    "14": "Técnico em Informática",
    "15": "Ou similar conforme edital",
};

// Índices que habilitam o campo livre `curso_similar`.
const INDICES_COM_TEXTO_LIVRE = new Set(["13", "15"]);

/**
 * Resolve o rótulo de um curso a partir dos campos gravados.
 *
 *   - Prioridade 1: `cursoSimilar` (texto livre do candidato), se o
 *     índice permite e foi preenchido.
 *   - Prioridade 2: `CURSOS_LABEL[cursoIndice]` (rótulo canônico).
 *   - Fallback: "Não informado".
 *
 * @param {object} args
 * @param {string|null|undefined} args.cursoIndice   Índice "0".."15".
 * @param {string|null|undefined} args.cursoSimilar  Texto livre (se houver).
 * @returns {string} Rótulo pronto para exibição.
 */
function rotularCurso({ cursoIndice, cursoSimilar }) {
    const indice = cursoIndice != null ? String(cursoIndice).trim() : "";
    const similar = cursoSimilar != null ? String(cursoSimilar).trim() : "";

    if (INDICES_COM_TEXTO_LIVRE.has(indice) && similar) {
        return similar;
    }
    if (indice && CURSOS_LABEL[indice]) {
        return CURSOS_LABEL[indice];
    }
    if (similar) {
        // Candidato digitou "similar" mas o índice não está entre os
        // que permitem. Aceitamos o texto dele mesmo assim (não joga
        // fora a informação).
        return similar;
    }
    return "Não informado";
}

module.exports = {
    CURSOS_LABEL,
    INDICES_COM_TEXTO_LIVRE,
    rotularCurso,
};
