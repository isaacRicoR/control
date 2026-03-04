import { ApiEnvelope, ApiMetadata } from "./types";
import { normalizeConnectorError, NormalizedError } from "./errorNormalizer";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export interface ApiResponse<T> {
    ok: boolean;
    data: T | null;
    error: NormalizedError | null;
    meta?: ApiMetadata;
}

async function getAuthHeaders(): Promise<HeadersInit> {
    // Placeholder for token retrieval
    // const token = await getToken(); 
    const token = "";
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
}

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const headers = await getAuthHeaders();

    const config: RequestInit = {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        },
    };

    let response: Response;
    try {
        response = await fetch(`${BASE_URL}${endpoint}`, config);
    } catch (error) {
        // Network error or fetch failure
        return {
            ok: false,
            data: null,
            error: normalizeConnectorError(error),
        };
    }

    let result: ApiEnvelope<T>;

    try {
        // We expect JSON back for everything, even errors (per contract)
        result = await response.json() as ApiEnvelope<T>;
    } catch {
        // Parsing error or non-JSON response
        return {
            ok: false,
            data: null,
            error: normalizeConnectorError(new Error(`Invalid JSON response: ${response.status} ${response.statusText}`)),
        };
    }

    // Per contract: "error" is not null if there was an error.
    if (!response.ok || result.error) {
        // Prefer the structured error from the envelope
        const errToNormalize = result.error || {
            code: `HTTP_${response.status}`,
            message: response.statusText || "Unknown HTTP Error"
        };

        return {
            ok: false,
            data: null,
            error: normalizeConnectorError(errToNormalize),
        };
    }

    return {
        ok: true,
        data: result.data,
        error: null,
        meta: result.meta,
    };
}
