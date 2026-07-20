/**
 * clientLogger
 *
 * Substitui os console.log/console.error/console.warn no frontend por um canal
 * que envia os erros para o backend (`/api/logs`), preservando a auditoria em
 * ambiente aberto (sem login). Os payloads são saneados no backend, mas já
 * evitamos enviar aqui campos sensíveis como senha, token e base64 do laudo.
 */

const BACKEND_LOG_ENDPOINT = "/api/logs";
const SENSITIVE_KEYS = [
  "senha",
  "password",
  "pass",
  "token",
  "jwt",
  "authorization",
  "laudo_deficiencia_base64",
  "laudo_deficiencia_nome",
  "laudo_deficiencia_tipo",
  "codigo",
];

function sanitizeValue(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "string") return value.slice(0, 500);
  if (typeof value === "number" || typeof value === "boolean") return value;
  if (value instanceof Error) return sanitizeValue({ message: value.message, name: value.name, stack: value.stack });
  if (Array.isArray(value)) return value.map(sanitizeValue);
  if (typeof value === "object") {
    const safe = {};
    for (const [key, item] of Object.entries(value)) {
      if (SENSITIVE_KEYS.some((s) => key.toLowerCase().includes(s))) continue;
      safe[key] = sanitizeValue(item);
    }
    return safe;
  }
  return String(value);
}

function sanitizeContext(input) {
  if (!input || typeof input !== "object") return {};
  return sanitizeValue(input) || {};
}

function send(level, message, extra = {}) {
  const payload = {
    level,
    message: typeof message === "string" ? message.slice(0, 200) : "CLIENT_LOG",
    url: typeof window !== "undefined" ? window.location.href : null,
    context: sanitizeContext({
      ...extra,
      navegador: typeof navigator !== "undefined" ? navigator.userAgent : null,
    }),
  };

  try {
    if (typeof fetch === "undefined" || !navigator?.onLine) return;
    fetch(BACKEND_LOG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Falha silenciosa: nunca bloquear o fluxo do usuário por causa de log.
  }
}

const clientLogger = {
  debug: (message, extra) => send("debug", message, extra),
  info: (message, extra) => send("info", message, extra),
  warn: (message, extra) => send("warn", message, extra),
  error: (message, extra) => send("error", message, extra),
};

module.exports = { clientLogger };
