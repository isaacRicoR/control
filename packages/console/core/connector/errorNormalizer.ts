import { ApiError } from "./types";

export type ErrorKind = "network" | "server" | "validation" | "unknown";

export interface NormalizedError {
    code: string;
    message: string;
    kind: ErrorKind;
    retryable: boolean;
    traceId?: string;
}

/**
 * normalizeConnectorError — Transforma un error crudo (Error, Fetch Error, o ApiError)
 * en un objeto estandarizado para la UI.
 * 
 * Estrategia:
 * - Network errors (offline, timeout) => retryable: true
 * - 4xx (validation) => retryable: false
 * - 5xx (server) => retryable: true
 */
export function normalizeConnectorError(error: unknown): NormalizedError {
    // Caso 1: Ya es un ApiError (del sobre de la API)
    if (typeof error === "object" && error !== null && "code" in error && "message" in error) {
        const apiErr = error as ApiError;
        
        // Detectar tipo por código o prefijo si fuera necesario
        let kind: ErrorKind = "server";
        if (apiErr.code.startsWith("VAL_") || apiErr.code === "BAD_REQUEST") {
            kind = "validation";
        }

        return {
            code: apiErr.code,
            message: apiErr.message,
            kind,
            retryable: kind === "server",
        };
    }

    // Caso 2: Error nativo de JavaScript / Fetch
    if (error instanceof Error) {
        const isNetwork = error.name === "TypeError" && error.message.includes("fetch");
        
        return {
            code: isNetwork ? "NETWORK_ERROR" : "UNKNOWN_ERROR",
            message: isNetwork 
                ? "No se pudo conectar con el servidor. Revisa tu conexión." 
                : error.message || "Ha ocurrido un error inesperado.",
            kind: isNetwork ? "network" : "unknown",
            retryable: isNetwork,
        };
    }

    // Caso 3: Fallback total
    return {
        code: "UNKNOWN",
        message: "Algo salió mal. Por favor intenta de nuevo.",
        kind: "unknown",
        retryable: true,
    };
}
