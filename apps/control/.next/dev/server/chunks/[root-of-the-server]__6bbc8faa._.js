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
"[project]/server/db/memory/users.store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In-Memory User Store (dev-only)
 *
 * Simple module-level storage for users.
 * Resets when the server restarts (npm run dev).
 * No persistence, no Postgres, no sessions.
 *
 * Seed data is initialized at module load time so the store is always
 * pre-populated regardless of which API route is called first.
 */ /**
 * User DTO (mínimo extensible + campos para la tabla)
 * Formato compatible con la UI existente
 */ __turbopack_context__.s([
    "addUser",
    ()=>addUser,
    "getAllUsers",
    ()=>getAllUsers,
    "seedUsersIfEmpty",
    ()=>seedUsersIfEmpty
]);
// ---------------------------------------------------------------------------
// Dev seed — loaded once at module init, shared across all route handlers.
// ---------------------------------------------------------------------------
const DEV_SEED = [
    {
        id: 'u_001',
        name: 'Marco Isaac',
        email: 'marco.isaac@empresa.com',
        initials: 'MI',
        initialsColor: '#6366f1',
        avatarUrl: null,
        phone: '+52 555 1234 567',
        role: 'Administrador',
        department: 'TI',
        status: 'Activo',
        devices: [
            'Desktop',
            'Mobile'
        ],
        lastActivity: 'Hace 2 min',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_002',
        name: 'Ana García',
        email: 'ana.garcia@empresa.com',
        initials: 'AG',
        initialsColor: '#8b5cf6',
        avatarUrl: null,
        phone: '+52 555 7654 321',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Activo',
        devices: [
            'Desktop'
        ],
        lastActivity: 'Hace 1 hora',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_003',
        name: 'Luis Torres',
        email: 'luis.torres@empresa.com',
        initials: 'LT',
        initialsColor: '#3b82f6',
        avatarUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=128&h=128&q=60',
        phone: '+52 555 9876 543',
        role: 'Usuario',
        department: 'Marketing',
        status: 'Inactivo',
        devices: [],
        lastActivity: 'Hace 2 días',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_004',
        name: 'Rosa Méndez',
        email: 'rosa.mendez@empresa.com',
        initials: 'RM',
        initialsColor: '#f59e0b',
        avatarUrl: null,
        phone: '+52 555 1112 233',
        role: 'Usuario',
        department: 'Recursos Humanos',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Pendiente de aprobación',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_005',
        name: 'Carlos Ruiz',
        email: 'carlos.ruiz@empresa.com',
        initials: 'CR',
        initialsColor: '#ef4444',
        avatarUrl: null,
        phone: '+52 555 4455 667',
        role: 'Supervisor',
        department: 'Operaciones',
        status: 'Bloqueado',
        devices: [],
        lastActivity: 'Hace 1 semana',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_006',
        name: 'Elena Moreno',
        email: 'elena.moreno@empresa.com',
        initials: 'EM',
        initialsColor: '#10b981',
        avatarUrl: null,
        phone: '+52 555 2223 334',
        role: 'Usuario',
        department: 'Finanzas',
        status: 'Activo',
        devices: [
            'Desktop'
        ],
        lastActivity: 'Hace 15 min',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_007',
        name: 'David Silva',
        email: 'david.silva@empresa.com',
        initials: 'DS',
        initialsColor: '#f43f5e',
        avatarUrl: null,
        phone: '+52 555 3334 445',
        role: 'Administrador',
        department: 'TI',
        status: 'Activo',
        devices: [
            'Desktop',
            'Mobile'
        ],
        lastActivity: 'Online',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_008',
        name: 'Beatriz Lira',
        email: 'beatriz.lira@empresa.com',
        initials: 'BL',
        initialsColor: '#0ea5e9',
        avatarUrl: null,
        phone: '+52 555 4445 556',
        role: 'Usuario',
        department: 'Soporte',
        status: 'Activo',
        devices: [
            'Mobile'
        ],
        lastActivity: 'Hace 3 horas',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_009',
        name: 'Jorge Ramos',
        email: 'jorge.ramos@empresa.com',
        initials: 'JR',
        initialsColor: '#84cc16',
        avatarUrl: null,
        phone: '+52 555 5556 667',
        role: 'Supervisor',
        department: 'Operaciones',
        status: 'Inactivo',
        devices: [
            'Desktop'
        ],
        lastActivity: 'Hace 3 días',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_010',
        name: 'Patricia Vega',
        email: 'patricia.vega@empresa.com',
        initials: 'PV',
        initialsColor: '#d946ef',
        avatarUrl: null,
        phone: '+52 555 6667 778',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Pendiente de aprobación',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_011',
        name: 'Ricardo Luna',
        email: 'ricardo.luna@empresa.com',
        initials: 'RL',
        initialsColor: '#f97316',
        avatarUrl: null,
        phone: '+52 555 7778 889',
        role: 'Usuario',
        department: 'Logística',
        status: 'Activo',
        devices: [
            'Desktop',
            'Mobile'
        ],
        lastActivity: 'Hace 5 min',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_012',
        name: 'Gabriela Solis',
        email: 'gabriela.solis@empresa.com',
        initials: 'GS',
        initialsColor: '#64748b',
        avatarUrl: null,
        phone: '+52 555 8889 990',
        role: 'Administrador',
        department: 'Dirección',
        status: 'Activo',
        devices: [
            'Desktop',
            'Mobile',
            'Tablet'
        ],
        lastActivity: 'Online',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_013',
        name: 'Fernando Díaz',
        email: 'fernando.diaz@empresa.com',
        initials: 'FD',
        initialsColor: '#ec4899',
        avatarUrl: null,
        phone: '+52 555 9990 001',
        role: 'Usuario',
        department: 'Legal',
        status: 'Inactivo',
        devices: [],
        lastActivity: 'Hace 1 mes',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_014',
        name: 'Silvia Cruz',
        email: 'silvia.cruz@empresa.com',
        initials: 'SC',
        initialsColor: '#06b6d4',
        avatarUrl: null,
        phone: '+52 555 0001 112',
        role: 'Supervisor',
        department: 'Marketing',
        status: 'Activo',
        devices: [
            'Laptop'
        ],
        lastActivity: 'Hace 45 min',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_015',
        name: 'Hugo Montes',
        email: 'hugo.montes@empresa.com',
        initials: 'HM',
        initialsColor: '#a855f7',
        avatarUrl: null,
        phone: '+52 555 1112 333',
        role: 'Usuario',
        department: 'TI',
        status: 'Bloqueado',
        devices: [
            'Desktop'
        ],
        lastActivity: 'Acceso denegado ayer',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_016',
        name: 'Mónica Soto',
        email: 'monica.soto@empresa.com',
        initials: 'MS',
        initialsColor: '#fbbf24',
        avatarUrl: null,
        phone: '+52 555 2223 444',
        role: 'Usuario',
        department: 'Recursos Humanos',
        status: 'Activo',
        devices: [
            'Laptop'
        ],
        lastActivity: 'Hace 10 min',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_017',
        name: 'Raúl Parra',
        email: 'raul.parra@empresa.com',
        initials: 'RP',
        initialsColor: '#2dd4bf',
        avatarUrl: null,
        phone: '+52 555 3334 555',
        role: 'Administrador',
        department: 'Operaciones',
        status: 'Activo',
        devices: [
            'Mobile'
        ],
        lastActivity: 'Online',
        createdAt: new Date().toISOString()
    },
    {
        id: 'u_018',
        name: 'Laura Bernal',
        email: 'laura.bernal@empresa.com',
        initials: 'LB',
        initialsColor: '#94a3b8',
        avatarUrl: null,
        phone: '+52 555 4445 666',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Invitación enviada hoy',
        createdAt: new Date().toISOString()
    }
];
/**
 * Module-level in-memory storage — pre-seeded at load time.
 */ let usersStore = [
    ...DEV_SEED
];
function getAllUsers() {
    return usersStore;
}
function seedUsersIfEmpty(seed) {
    if (usersStore.length === 0) {
        usersStore = [
            ...seed
        ];
    }
}
function addUser(user) {
    usersStore.push(user);
}
}),
"[project]/server/db/queries/users.queries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserById",
    ()=>getUserById,
    "insertUser",
    ()=>insertUser,
    "listUsers",
    ()=>listUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$users$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/db/memory/users.store.ts [app-route] (ecmascript)");
;
function listUsers(page, limit) {
    const allUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$users$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllUsers"])();
    const total = allUsers.length;
    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = allUsers.slice(start, end);
    return {
        items,
        total
    };
}
function insertUser(user) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$users$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addUser"])(user);
}
function getUserById(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$memory$2f$users$2e$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllUsers"])().find((u)=>u.id === id);
}
}),
"[project]/server/services/users.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUser",
    ()=>createUser,
    "getUserById",
    ()=>getUserById,
    "listUsers",
    ()=>listUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$users$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/db/queries/users.queries.ts [app-route] (ecmascript)");
;
/**
 * Helper: Generate initials from name
 * Example: "Marco Isaac" => "MI"
 */ function generateInitials(name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0) return '??';
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
/**
 * Helper: Generate consistent color from string
 */ function generateColor(str) {
    const colors = [
        '#6366f1',
        '#8b5cf6',
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#ec4899'
    ];
    const hash = str.split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
}
function createUser(input) {
    // Validate required fields
    if (!input.name || input.name.trim() === '') {
        throw new Error('El campo "name" es requerido');
    }
    if (!input.email || input.email.trim() === '') {
        throw new Error('El campo "email" es requerido');
    }
    // Generate server-side fields
    const id = `u_${Date.now()}`;
    const createdAt = new Date().toISOString();
    const initials = generateInitials(input.name);
    const initialsColor = generateColor(id);
    // Build complete user object with defaults
    const newUser = {
        id,
        name: input.name.trim(),
        email: input.email.trim(),
        initials,
        initialsColor,
        avatarUrl: input.avatarUrl ?? null,
        phone: input.phone ?? '',
        role: input.role ?? '',
        department: input.department ?? '',
        status: input.status ?? 'Activo',
        devices: [],
        lastActivity: 'Ahora',
        createdAt
    };
    // Insert via queries layer
    __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$users$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertUser"](newUser);
    return newUser;
}
function listUsers(page, limit) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$users$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listUsers"](page, limit);
}
function getUserById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$db$2f$queries$2f$users$2e$queries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserById"](id);
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
"[project]/apps/control/app/api/users/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/services/users.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/http/envelope.ts [app-route] (ecmascript)");
;
;
async function GET(_request, { params }) {
    try {
        const { id } = await params;
        if (!id || typeof id !== 'string') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFoundResponse"])('User id is required.');
        }
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserById"](id);
        if (!user) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFoundResponse"])(`User with id "${id}" was not found.`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["okResponse"])(user);
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$http$2f$envelope$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["internalErrorResponse"])();
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6bbc8faa._.js.map