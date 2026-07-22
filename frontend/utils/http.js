/**
 * http
 *
 * Wrapper de fetch com:
 *  - Timeout via AbortController
 *  - Retry exponencial para erros de rede (não para 4xx)
 *  - Diagnóstico de erro (CORS, offline, abort, mixed content, etc.)
 *  - Métricas de rede (effectiveType, downlink, rtt, online)
 *
 * O objetivo é substituir todos os `fetch("/...", { ... })` espalhados pelo
 * frontend por uma chamada padronizada que entregue dados de telemetria
 * ricos para o backend, especialmente em devices móveis Samsung Browser
 * e Safari iOS, que costumam apresentar `Failed to fetch` por causa de
 * bloqueios de CORS / mixed content / offline momentâneo.
 */

const { clientLogger } = require("./clientLogger.js");

function readNetworkDiagnostics() {
    const nav = typeof navigator !== "undefined" ? navigator : {};
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection || null;

    return {
        online: nav.onLine ?? null,
        effectiveType: conn?.effectiveType ?? null,
        downlinkMbps: conn?.downlink ?? null,
        rttMs: conn?.rtt ?? null,
        saveData: conn?.saveData ?? null,
        cookieEnabled: nav.cookieEnabled ?? null,
        language: nav.language ?? null,
        platform: nav.platform ?? null,
    };
}

function classifyFetchError(error, url) {
    const message = error?.message || String(error);
    const name = error?.name || "";

    // Distingue AbortError disparado pelo nosso AbortController (timeout)
    // vs abort vindo do servidor/cliente (mensagem "signal is aborted without reason").
    // Quando o `AbortController.abort()` é chamado SEM motivo (sem parâmetro),
    // o fetch polyfill do Node/alguns browsers produz "signal is aborted without reason".
    // Quando o `AbortController` chama por timeout, a mensagem costuma ser só
    // "The operation was aborted" ou "This operation was aborted".
    if (name === "AbortError") {
        if (/without reason/i.test(message)) {
            return {
                tipo: "aborted",
                mensagem,
                label: "Conexão abortada pelo servidor/cliente antes da resposta",
            };
        }
        return { tipo: "timeout", mensagem, label: "Timeout na requisição" };
    }
    if (message === "Failed to fetch" || name === "TypeError") {
        return {
            tipo: "rede",
            mensagem,
            label: "Falha de rede genérica (CORS/offline/TLS/Service Worker)",
        };
    }
    if (/NetworkError/i.test(message)) {
        return { tipo: "rede", mensagem, label: "NetworkError (offline/sem DNS)" };
    }
    if (/Load failed/i.test(message)) {
        return { tipo: "rede", mensagem, label: "Load failed (Safari iOS)" };
    }
    if (/Mixed Content/i.test(message)) {
        return { tipo: "mixed_content", mensagem, label: "Mixed content bloqueado" };
    }
    return { tipo: "desconhecido", mensagem, label: "Erro desconhecido" };
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * fetchJson
 *
 * @param {string} url            - endpoint (relativo ou absoluto)
 * @param {object} options
 * @param {string} options.method          - GET/POST (default GET)
 * @param {object} options.body            - payload JSON serializável
 * @param {object} options.headers         - headers extras
 * @param {number} options.timeoutMs       - timeout por tentativa (default 15000)
 * @param {number} options.maxTentativas   - número máximo de tentativas (default 3)
 * @param {boolean} options.keepalive      - usar keepalive no fetch (default true para GET, false para POST com body grande)
 * @param {boolean} options.retryOn5xx     - tentar novamente em 5xx (default true)
 * @param {boolean} options.logErros       - enviar logs para o backend (default true)
 * @param {object} options.contextoExtra   - campos extras para o log de erro
 *
 * @returns {Promise<{ ok: boolean, status: number, data: any, attempts: number }>}
 */
async function fetchJson(url, options = {}) {
    const {
        method = "GET",
        body = null,
        headers = {},
        timeoutMs = 15000,
        maxTentativas = 3,
        keepalive,
        retryOn5xx = true,
        logErros = true,
        contextoExtra = {},
    } = options;

    const isPost = String(method).toUpperCase() === "POST";
    const useKeepalive = keepalive ?? !isPost;

    let lastError = null;
    let lastResult = null;

    for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
        const controller = new AbortController();
        const timeoutHandle = setTimeout(() => controller.abort(), timeoutMs);

        const startedAt = Date.now();

        try {
            const fetchOptions = {
                method,
                headers: {
                    Accept: "application/json",
                    ...headers,
                },
                signal: controller.signal,
                keepalive: useKeepalive,
                credentials: "same-origin",
            };

            if (body !== null && body !== undefined) {
                fetchOptions.headers["Content-Type"] =
                    fetchOptions.headers["Content-Type"] || "application/json";
                fetchOptions.body = JSON.stringify(body);
            }

            const response = await fetch(url, fetchOptions);

            clearTimeout(timeoutHandle);

            let data = null;
            const contentType = response.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
                try {
                    data = await response.json();
                } catch {
                    data = null;
                }
            } else {
                try {
                    data = await response.text();
                } catch {
                    data = null;
                }
            }

            const isSuccess = response.ok;
            const isClientError = response.status >= 400 && response.status < 500;
            const isServerError = response.status >= 500;

            lastResult = {
                ok: isSuccess,
                status: response.status,
                data,
                attempts: tentativa,
            };

            // 4xx: por padrão não tenta novamente (erro de negócio).
            // Exceção: 408 Request Timeout e 425 Too Early merecem retry,
            // pois podem ser race conditions de proxy reverso.
            if (isClientError) {
                if ((response.status === 408 || response.status === 425) && tentativa < maxTentativas) {
                    await sleep(500 * tentativa);
                    continue;
                }
                return lastResult;
            }

            // 5xx: tenta novamente se permitido
            if (isServerError && retryOn5xx && tentativa < maxTentativas) {
                await sleep(500 * tentativa);
                continue;
            }

            return lastResult;
        } catch (error) {
            clearTimeout(timeoutHandle);
            lastError = error;

            const classification = classifyFetchError(error, url);
            const duracaoMs = Date.now() - startedAt;

            if (logErros) {
                clientLogger.warn("HTTP_TENTATIVA_FALHOU", {
                    url,
                    method,
                    tentativa,
                    maxTentativas,
                    duracaoMs,
                    timeoutMs,
                    keepalive: useKeepalive,
                    tipoErro: classification.tipo,
                    labelErro: classification.label,
                    mensagemErro: classification.mensagem,
                    nomeErro: error?.name,
                    ...readNetworkDiagnostics(),
                    ...contextoExtra,
                });
            }

            // última tentativa: propaga
            if (tentativa >= maxTentativas) {
                throw Object.assign(error, { classification });
            }

            // backoff exponencial: 500ms, 1000ms, 2000ms...
            await sleep(500 * Math.pow(2, tentativa - 1));
        }
    }

    if (lastResult) return lastResult;

    throw lastError;
}

module.exports = {
    fetchJson,
    classifyFetchError,
    readNetworkDiagnostics,
};