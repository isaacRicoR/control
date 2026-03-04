/**
 * envelope.ts — UNIVERSAL_CONNECTOR_CONTRACT_v2.1 (LTS)
 *
 * Intención:
 *   Helper para construir respuestas API que cumplan el envelope v2.1.
 *   Toda respuesta del backend (éxito o error) DEBE usar estas funciones.
 *
 * Cómo usarlo:
 *   import { successEnvelope, errorEnvelope } from '@/server/http/envelope'
 *   return NextResponse.json(successEnvelope(data, meta), { status: 200 })
 *   return NextResponse.json(errorEnvelope('VALIDATION_ERROR', 'Campo requerido'), { status: 400 })
 *
 * ⛔ No hacer:
 *   - No responder sin envelope (e.g. `NextResponse.json(rawData)`)
 *   - No omitir meta.requestId
 *   - No inventar formatos alternativos
 */

import { NextResponse } from 'next/server'

// ---------------------------------------------------------------------------
// Types (mirrored from src/core/connector/types.ts — no import cruzado server↔client)
// ---------------------------------------------------------------------------

interface PaginationMeta {
    page?: number
    limit?: number
    total?: number
    totalPages?: number
    cursor?: string
    hasMore?: boolean
}

interface ApiMetadata {
    requestId: string
    timestamp: string
    pagination?: PaginationMeta
}

interface ApiErrorShape {
    code: string
    message: string
    details?: { field: string; issue: string }[]
}

interface ApiEnvelopeShape<T> {
    data: T | null
    meta: ApiMetadata
    error: ApiErrorShape | null
}

// ---------------------------------------------------------------------------
// requestId generator — no external deps
// ---------------------------------------------------------------------------

/** Genera un requestId único por request. Sin dependencias externas. */
function generateRequestId(): string {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).slice(2, 9)
    return `req_${timestamp}_${random}`
}

// ---------------------------------------------------------------------------
// Builders
// ---------------------------------------------------------------------------

/**
 * Construye un envelope de respuesta exitosa.
 *
 * @param data     Payload de la respuesta (array o objeto)
 * @param pagination  Opcional — metadatos de paginación
 */
export function successEnvelope<T>(
    data: T,
    pagination?: PaginationMeta
): ApiEnvelopeShape<T> {
    const meta: ApiMetadata = {
        requestId: generateRequestId(),
        timestamp: new Date().toISOString(),
    }
    if (pagination) {
        meta.pagination = pagination
    }
    return {
        data,
        meta,
        error: null,
    }
}

/**
 * Construye un envelope de respuesta de error.
 *
 * @param code     Código de error en UPPER_SNAKE (e.g. 'VALIDATION_ERROR')
 * @param message  Mensaje legible por humanos
 * @param details  Opcional — errores de campo específicos
 */
export function errorEnvelope(
    code: string,
    message: string,
    details?: { field: string; issue: string }[]
): ApiEnvelopeShape<null> {
    const meta: ApiMetadata = {
        requestId: generateRequestId(),
        timestamp: new Date().toISOString(),
    }
    const error: ApiErrorShape = { code, message }
    if (details) {
        error.details = details
    }
    return {
        data: null,
        meta,
        error,
    }
}

// ---------------------------------------------------------------------------
// NextResponse shortcuts
// ---------------------------------------------------------------------------

/** NextResponse 200 con envelope v2.1 */
export function okResponse<T>(data: T, pagination?: PaginationMeta): NextResponse {
    return NextResponse.json(successEnvelope(data, pagination), {
        status: 200,
        headers: { 'Cache-Control': 'no-store' },
    })
}

/** NextResponse 201 con envelope v2.1 */
export function createdResponse<T>(data: T): NextResponse {
    return NextResponse.json(successEnvelope(data), { status: 201 })
}

/** NextResponse 400 con envelope v2.1 */
export function badRequestResponse(
    message: string,
    details?: { field: string; issue: string }[]
): NextResponse {
    return NextResponse.json(errorEnvelope('BAD_REQUEST', message, details), { status: 400 })
}

/** NextResponse 401 con envelope v2.1 */
export function unauthorizedResponse(): NextResponse {
    return NextResponse.json(
        errorEnvelope('UNAUTHORIZED', 'Authentication required. Provide a valid Bearer token.'),
        { status: 401 }
    )
}

/** NextResponse 403 con envelope v2.1 */
export function forbiddenResponse(): NextResponse {
    return NextResponse.json(
        errorEnvelope('FORBIDDEN', 'You do not have permission to access this resource.'),
        { status: 403 }
    )
}

/** NextResponse 404 con envelope v2.1 */
export function notFoundResponse(message?: string): NextResponse {
    return NextResponse.json(
        errorEnvelope('NOT_FOUND', message ?? 'The requested resource was not found.'),
        { status: 404 }
    )
}

/** NextResponse 500 con envelope v2.1 */
export function internalErrorResponse(message?: string): NextResponse {
    return NextResponse.json(
        errorEnvelope('INTERNAL_ERROR', message ?? 'An unexpected error occurred.'),
        { status: 500 }
    )
}
