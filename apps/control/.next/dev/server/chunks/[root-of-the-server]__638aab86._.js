module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/server/db/memory/devices.store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In-Memory Device Store (dev-only)
 */ __turbopack_context__.s([
    "addDevice",
    ()=>addDevice,
    "getAllDevices",
    ()=>getAllDevices,
    "seedDevicesIfEmpty",
    ()=>seedDevicesIfEmpty
]);
const DEV_SEED = [
    {
        id: 'DEV-001',
        nombre: 'MacBook Pro 16"',
        tipo: 'Laptop',
        departamento: 'Tecnología',
        usuario: 'Ana Pérez',
        status: 'Activo',
        ultimaActividad: 'Hace 2 min',
        ubicacion: 'Oficina Central',
        notas: 'Equipo principal del equipo de desarrollo.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-002',
        nombre: 'Dell Monitor 27"',
        tipo: 'Monitor',
        departamento: 'Finanzas',
        usuario: 'Juan López',
        status: 'Activo',
        ultimaActividad: 'Hace 15 min',
        ubicacion: 'Oficina Central',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-003',
        nombre: 'iPhone 15 Pro',
        tipo: 'Smartphone',
        departamento: 'Operaciones',
        usuario: 'María García',
        status: 'Activo',
        ultimaActividad: 'Hace 1 hora',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-004',
        nombre: 'HP LaserJet Pro',
        tipo: 'Impresora',
        departamento: 'Finanzas',
        usuario: 'Carlos Ruiz',
        status: 'Mantenimiento',
        ultimaActividad: 'Hace 3 días',
        ubicacion: 'Oficina Central',
        notas: 'En reparación — cartucho dañado.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-005',
        nombre: 'Lenovo ThinkPad X1',
        tipo: 'Laptop',
        departamento: 'Tecnología',
        usuario: 'Laura Sánchez',
        status: 'Activo',
        ultimaActividad: 'Hace 30 min',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-006',
        nombre: 'iPad Air',
        tipo: 'Tablet',
        departamento: 'Operaciones',
        usuario: 'Pedro Martínez',
        status: 'Inactivo',
        ultimaActividad: 'Hace 2 sem',
        ubicacion: 'Almacén',
        notas: 'Sin uso desde la reestructuración del equipo.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-007',
        nombre: 'Samsung Galaxy S24',
        tipo: 'Smartphone',
        departamento: 'Tecnología',
        usuario: 'Sofía Torres',
        status: 'Activo',
        ultimaActividad: 'Hace 5 min',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-008',
        nombre: 'Dell Desktop OptiPlex',
        tipo: 'Desktop',
        departamento: 'Finanzas',
        usuario: '',
        status: 'Inactivo',
        ultimaActividad: 'Hace 1 mes',
        ubicacion: 'Almacén',
        notas: 'Sin usuario asignado.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-009',
        nombre: 'Cisco Router VPN',
        tipo: 'Red',
        departamento: 'Tecnología',
        usuario: '',
        status: 'Bloqueado',
        ultimaActividad: 'Hace 5 días',
        ubicacion: 'Oficina Central',
        notas: 'Bloqueado por política de seguridad.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'DEV-010',
        nombre: 'MacBook Air M3',
        tipo: 'Laptop',
        departamento: 'Operaciones',
        usuario: 'Diego Flores',
        status: 'Mantenimiento',
        ultimaActividad: 'Hace 1 día',
        ubicacion: 'Remoto',
        notas: 'Actualización de macOS en progreso.',
        imageUrl: null,
        createdAt: new Date().toISOString()
    }
];
let devicesStore = [
    ...DEV_SEED
];
function getAllDevices() {
    return devicesStore;
}
function seedDevicesIfEmpty(seed) {
    if (devicesStore.length === 0) {
        devicesStore = [
            ...seed
        ];
    }
}
function addDevice(device) {
    devicesStore.push(device);
}
}),
"[project]/server/db/queries/devices.queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDeviceById",
    ()=>getDeviceById,
    "insertDevice",
    ()=>insertDevice,
    "listDevices",
    ()=>listDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$devices$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/db/memory/devices.store.ts [app-route] (ecmascript)");
;
function listDevices(page, limit) {
    const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$devices$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllDevices"])();
    const total = all.length;
    const start = (page - 1) * limit;
    return {
        items: all.slice(start, start + limit),
        total
    };
}
function getDeviceById(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$devices$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllDevices"])().find((d)=>d.id === id);
}
function insertDevice(device) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$devices$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addDevice"])(device);
}
}),
"[project]/server/services/devices.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDevice",
    ()=>createDevice,
    "getDeviceById",
    ()=>getDeviceById,
    "listDevices",
    ()=>listDevices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$devices$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/db/queries/devices.queries.ts [app-route] (ecmascript)");
;
function listDevices(page, limit) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$devices$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listDevices"](page, limit);
}
function getDeviceById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$devices$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDeviceById"](id);
}
function createDevice(input) {
    if (!input.nombre || input.nombre.trim() === '') {
        throw new Error('El campo "nombre" es requerido');
    }
    if (!input.tipo || input.tipo.trim() === '') {
        throw new Error('El campo "tipo" es requerido');
    }
    const id = `DEV-${Date.now()}`;
    const newDevice = {
        id,
        nombre: input.nombre.trim(),
        tipo: input.tipo.trim(),
        departamento: input.departamento ?? '',
        usuario: input.usuario ?? '',
        status: input.status ?? 'Activo',
        ultimaActividad: 'Ahora',
        ubicacion: input.ubicacion ?? '',
        notas: input.notas ?? '',
        imageUrl: input.imageUrl ?? null,
        createdAt: new Date().toISOString()
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$devices$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertDevice"](newDevice);
    return newDevice;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/server/http/envelope.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "badRequestResponse",
    ()=>badRequestResponse,
    "createdResponse",
    ()=>createdResponse,
    "errorEnvelope",
    ()=>errorEnvelope,
    "forbiddenResponse",
    ()=>forbiddenResponse,
    "internalErrorResponse",
    ()=>internalErrorResponse,
    "notFoundResponse",
    ()=>notFoundResponse,
    "okResponse",
    ()=>okResponse,
    "successEnvelope",
    ()=>successEnvelope,
    "unauthorizedResponse",
    ()=>unauthorizedResponse
]);
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// ---------------------------------------------------------------------------
// requestId generator — no external deps
// ---------------------------------------------------------------------------
/** Genera un requestId único por request. Sin dependencias externas. */ function generateRequestId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 9);
    return `req_${timestamp}_${random}`;
}
function successEnvelope(data, pagination) {
    const meta = {
        requestId: generateRequestId(),
        timestamp: new Date().toISOString()
    };
    if (pagination) {
        meta.pagination = pagination;
    }
    return {
        data,
        meta,
        error: null
    };
}
function errorEnvelope(code, message, details) {
    const meta = {
        requestId: generateRequestId(),
        timestamp: new Date().toISOString()
    };
    const error = {
        code,
        message
    };
    if (details) {
        error.details = details;
    }
    return {
        data: null,
        meta,
        error
    };
}
function okResponse(data, pagination) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(successEnvelope(data, pagination), {
        status: 200,
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
function createdResponse(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(successEnvelope(data), {
        status: 201
    });
}
function badRequestResponse(message, details) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorEnvelope('BAD_REQUEST', message, details), {
        status: 400
    });
}
function unauthorizedResponse() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorEnvelope('UNAUTHORIZED', 'Authentication required. Provide a valid Bearer token.'), {
        status: 401
    });
}
function forbiddenResponse() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorEnvelope('FORBIDDEN', 'You do not have permission to access this resource.'), {
        status: 403
    });
}
function notFoundResponse(message) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorEnvelope('NOT_FOUND', message ?? 'The requested resource was not found.'), {
        status: 404
    });
}
function internalErrorResponse(message) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorEnvelope('INTERNAL_ERROR', message ?? 'An unexpected error occurred.'), {
        status: 500
    });
}
}),
"[project]/apps/control/app/api/devices/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$services$2f$devices$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/services/devices.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/http/envelope.ts [app-route] (ecmascript)");
;
;
async function GET(_request, { params }) {
    try {
        const { id } = await params;
        if (!id) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFoundResponse"])('Device id is required.');
        const device = __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$services$2f$devices$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDeviceById"](id);
        if (!device) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFoundResponse"])('Device not found.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["okResponse"])(device);
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["internalErrorResponse"])();
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__638aab86._.js.map