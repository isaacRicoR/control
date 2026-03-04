module.exports = [
"[project]/apps/control/app/favicon.ico.mjs { IMAGE => \"[project]/apps/control/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/control/app/favicon.ico.mjs { IMAGE => \"[project]/apps/control/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/control/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/control/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/packages/console/core/navigation/moduleResolver.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveActiveModules",
    ()=>resolveActiveModules
]);
function resolveActiveModules({ config, registry }) {
    // 1. Filtrar solo los módulos habilitados para este producto
    const activeModules = registry.filter((m)=>config.enabledModules.includes(m.id));
    // 2. Ordenar según navOrder de la config
    const sortedModules = [
        ...activeModules
    ].sort((a, b)=>{
        const indexA = config.navOrder.indexOf(a.id);
        const indexB = config.navOrder.indexOf(b.id);
        // Si no está en navOrder, lo mandamos al final
        const finalIndexA = indexA === -1 ? 999 : indexA;
        const finalIndexB = indexB === -1 ? 999 : indexB;
        return finalIndexA - finalIndexB;
    });
    // 3. Agrupar módulos
    const groupsMap = {};
    // Pre-inicializar grupos si vienen en config para mantener el orden de grupos
    const groupOrder = config.navGroups || [];
    groupOrder.forEach((name)=>{
        groupsMap[name] = {
            title: name,
            items: []
        };
    });
    sortedModules.forEach((m)=>{
        const groupName = m.navGroup || "General";
        if (!groupsMap[groupName]) {
            groupsMap[groupName] = {
                title: groupName,
                items: []
            };
        }
        groupsMap[groupName].items.push({
            label: m.label,
            href: m.routeBase,
            icon: m.icon,
            expandable: !!(m.children && m.children.length > 0),
            children: m.children?.map((c)=>({
                    label: c.label,
                    href: c.href
                }))
        });
    });
    // 4. Retornar en el orden de grupos especificado o por defecto
    if (groupOrder.length > 0) {
        return groupOrder.map((name)=>groupsMap[name]).filter((g)=>g && g.items.length > 0);
    }
    return Object.values(groupsMap).filter((g)=>g.items.length > 0);
}
}),
"[project]/packages/console/core/navigation/hasModules.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasModules",
    ()=>hasModules
]);
function hasModules(sidebarItems) {
    if (!sidebarItems || sidebarItems.length === 0) return false;
    // Rutas de sistema que NO cuentan como módulos de negocio
    const systemPaths = [
        "/",
        "/panel",
        "/settings",
        "/lab",
        "/developer",
        "/logout",
        "/login",
        "/forbidden"
    ];
    const isSystemPath = (href)=>{
        if (!href || href === "#" || href === "") return true;
        return systemPaths.some((path)=>{
            if (path === "/") return href === "/";
            return href === path || href.startsWith(path + "/");
        });
    };
    // Filtramos grupos que no sean de sistema explícitamente por título
    const potentialBusinessGroups = sidebarItems.filter((group)=>group.title !== "Desarrollador" && group.title !== "Lab" && group.title !== "");
    // Buscamos al menos un item navegable real que no sea de sistema
    return potentialBusinessGroups.some((group)=>group.items.some((item)=>{
            // Un item es real si tiene href y no es de sistema
            const isRealBusinessHref = item.href && !isSystemPath(item.href);
            // O si tiene hijos con hrefs de negocio
            const hasRealBusinessChildren = item.children && item.children.some((child)=>child.href && !isSystemPath(child.href));
            return isRealBusinessHref || hasRealBusinessChildren;
        }));
}
}),
"[project]/apps/control/product.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productConfig",
    ()=>productConfig
]);
const productConfig = {
    productId: "control",
    enabledModules: [
        "dashboard",
        "metrics",
        "users",
        "devices",
        "departments",
        "locations",
        "organization_admin",
        "settings"
    ],
    navOrder: [
        "dashboard",
        "metrics",
        "users",
        "devices",
        "departments",
        "locations",
        "organization_admin",
        "settings"
    ],
    navGroups: [
        "Principal",
        "Administración",
        "Configuración"
    ]
};
}),
"[project]/apps/control/modules.registry.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modulesRegistry",
    ()=>modulesRegistry
]);
const modulesRegistry = [
    {
        id: "dashboard",
        label: "Panel",
        routeBase: "/dashboard",
        navGroup: "Principal",
        icon: "grid",
        status: "ready"
    },
    {
        id: "metrics",
        label: "Métricas",
        routeBase: "/metrics",
        navGroup: "Principal",
        icon: "bar-chart",
        status: "wip",
        children: [
            {
                label: "KPIs",
                href: "/metrics/kpis",
                status: "wip"
            },
            {
                label: "Análisis",
                href: "/metrics/analysis",
                status: "wip"
            },
            {
                label: "Historial",
                href: "/metrics/history",
                status: "wip"
            }
        ]
    },
    {
        id: "users",
        label: "Usuarios",
        routeBase: "/users",
        navGroup: "Administración",
        icon: "users",
        status: "ready",
        children: [
            {
                label: "Lista",
                href: "/users/list",
                status: "ready"
            },
            {
                label: "Crear",
                href: "/users/create",
                status: "ready"
            }
        ]
    },
    {
        id: "devices",
        label: "Dispositivos",
        routeBase: "/devices",
        navGroup: "Administración",
        icon: "monitor",
        status: "ready",
        children: [
            {
                label: "Lista",
                href: "/devices/list",
                status: "ready"
            },
            {
                label: "Agregar",
                href: "/devices/create",
                status: "ready"
            }
        ]
    },
    {
        id: "departments",
        label: "Departamentos",
        routeBase: "/departments",
        navGroup: "Administración",
        icon: "users-group",
        status: "wip"
    },
    {
        id: "locations",
        label: "Ubicaciones",
        routeBase: "/locations",
        navGroup: "Administración",
        icon: "map-pin",
        status: "wip"
    },
    {
        id: "organization_admin",
        label: "Organización",
        routeBase: "/organization",
        navGroup: "Administración",
        icon: "building",
        status: "wip"
    },
    {
        id: "settings",
        label: "Sistema",
        routeBase: "/settings",
        navGroup: "Configuración",
        icon: "settings",
        status: "ready",
        children: [
            {
                label: "Apariencia",
                href: "/settings",
                status: "ready"
            },
            {
                label: "Módulos",
                href: "/settings/modules",
                status: "wip"
            },
            {
                label: "Seguridad y permisos",
                href: "/settings/security",
                status: "wip"
            },
            {
                label: "Auditoría / Logs",
                href: "/settings/audit",
                status: "wip"
            },
            {
                label: "Organización / Empresa",
                href: "/settings/organization",
                status: "wip"
            }
        ]
    }
];
}),
"[project]/apps/control/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$moduleResolver$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/navigation/moduleResolver.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$hasModules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/navigation/hasModules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$product$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/product.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$modules$2e$registry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/modules.registry.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function Home() {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$moduleResolver$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveActiveModules"])({
        config: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$product$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productConfig"],
        registry: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$modules$2e$registry$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["modulesRegistry"]
    });
    const modulesActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$hasModules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasModules"])(items);
    if (modulesActive) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
    }
    // Si no hay módulos instalados, el punto de entrada es /panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/panel");
}
}),
"[project]/apps/control/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/control/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9066b648._.js.map