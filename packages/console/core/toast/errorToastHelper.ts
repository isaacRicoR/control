import { NormalizedError } from "../connector/errorNormalizer";
import { ToastType } from "./ToastProvider";

export interface ToastPayload {
    type: ToastType;
    title: string;
    description: string;
}

/**
 * Mapea un error normalizado de la consola a un payload de Toast.
 * Centraliza los títulos y tipos (error/warning) por Kind o Code.
 */
export function normalizedErrorToToast(error: NormalizedError): ToastPayload {
    let type: ToastType = "error";
    let title = "Error";

    // Mapeo por Kind (Categoría)
    if (error.kind === "validation") {
        type = "warning";
        title = "Validación";
    } else if (error.kind === "network") {
        title = "Conexión";
    }

    // Mapeo por Códigos específicos (Seguridad)
    if (error.code === "HTTP_403" || error.code === "FORBIDDEN") {
        title = "Permisos";
    } else if (error.code === "HTTP_401" || error.code === "UNAUTHORIZED") {
        title = "Sesión";
    }

    return {
        type,
        title,
        description: error.message,
    };
}
