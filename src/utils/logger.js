const { maskCpf, maskCnpj } = require("./requestContext");

function normalizeError(error) {
    if (!(error instanceof Error)) {
        return error;
    }

    return {
        name: error.name,
        message: error.message,
        stack: error.stack,
    };
}

function createSeenTracker() {
    return new WeakSet();
}

function maskSensitiveValue(key, value) {
    if (value === undefined || value === null) {
        return value;
    }

    if (typeof value !== "string") {
        return value;
    }

    if (/cpf/i.test(key)) {
        return maskCpf(value);
    }

    if (/cnpj|empresa/i.test(key)) {
        return maskCnpj(value);
    }

    return value;
}

function normalizeValue(key, value, seen = createSeenTracker()) {
    if (value instanceof Error) {
        const normalizedError = normalizeError(value);

        if (value.cause !== undefined) {
            normalizedError.cause = normalizeValue("cause", value.cause, seen);
        }

        return normalizedError;
    }

    if (Array.isArray(value)) {
        return value.map((item) => normalizeValue(key, item, seen));
    }

    if (value && typeof value === "object") {
        if (seen.has(value)) {
            return "[Circular]";
        }

        seen.add(value);

        const normalizedObject = {};

        for (const [nestedKey, nestedValue] of Object.entries(value)) {
            normalizedObject[nestedKey] = normalizeValue(nestedKey, nestedValue, seen);
        }

        return normalizedObject;
    }

    return maskSensitiveValue(key, value);
}

function buildEntry(level, message, meta = {}) {
    const entry = {
        timestamp: new Date().toISOString(),
        level,
        message,
    };

    for (const [key, value] of Object.entries(meta || {})) {
        entry[key] = normalizeValue(key, value);
    }

    return entry;
}

function write(level, entry) {
    const line = JSON.stringify(entry);

    if (level === "error") {
        console.error(line);
        return;
    }

    if (level === "warn") {
        console.warn(line);
        return;
    }

    console.log(line);
}

function createLogger() {
    return {
        log(level, message, meta = {}) {
            write(level, buildEntry(level, message, meta));
        },
        debug(message, meta = {}) {
            write("debug", buildEntry("debug", message, meta));
        },
        info(message, meta = {}) {
            write("info", buildEntry("info", message, meta));
        },
        warn(message, meta = {}) {
            write("warn", buildEntry("warn", message, meta));
        },
        error(message, meta = {}) {
            write("error", buildEntry("error", message, meta));
        },
    };
}

const logger = createLogger();

module.exports = {
    createLogger,
    logger,
};