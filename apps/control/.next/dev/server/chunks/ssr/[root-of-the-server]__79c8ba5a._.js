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
"[project]/packages/console/core/navigation/sidebar.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appName",
    ()=>appName,
    "createAccountLabel",
    ()=>createAccountLabel,
    "mockCompanies",
    ()=>mockCompanies,
    "sidebarConfig",
    ()=>sidebarConfig,
    "sidebarConfigFull",
    ()=>sidebarConfigFull,
    "sidebarConfigMinimal",
    ()=>sidebarConfigMinimal
]);
const mockCompanies = [
    {
        name: "Empresa ABC",
        label: "EM",
        count: "4 de 10",
        active: true,
        color: "#00C853"
    },
    {
        name: "Corporación Tech",
        label: "CO",
        count: "2 de 5",
        active: false,
        color: "#00796B"
    },
    {
        name: "Startup Innovación",
        label: "ST",
        count: "9 de 15",
        active: false,
        color: "#2E7D32"
    },
    {
        name: "Corporación Int...",
        label: "CO",
        count: "5 de 10",
        active: false,
        color: "#00695C"
    } // Dark Teal
];
const appName = "Control";
const createAccountLabel = "Crear cuenta";
const sidebarConfigFull = [
    {
        title: "Principal",
        items: [
            {
                label: "Panel",
                href: "/dashboard",
                icon: "grid",
                active: true
            },
            {
                label: "Métricas",
                href: "/metrics",
                icon: "bar-chart",
                expandable: true,
                children: [
                    {
                        label: "KPIs",
                        href: "/metrics/kpis"
                    },
                    {
                        label: "Análisis",
                        href: "/metrics/analysis"
                    },
                    {
                        label: "Historial",
                        href: "/metrics/history"
                    }
                ]
            }
        ]
    },
    {
        title: "Administración",
        items: [
            {
                label: "Usuarios",
                href: "/users",
                icon: "users",
                expandable: true,
                children: [
                    {
                        label: "Lista",
                        href: "/users/list"
                    },
                    {
                        label: "Crear",
                        href: "/users/create"
                    }
                ]
            },
            {
                label: "Dispositivos",
                href: "/devices",
                icon: "monitor",
                expandable: true,
                children: [
                    {
                        label: "Lista",
                        href: "/devices/list"
                    },
                    {
                        label: "Agregar",
                        href: "/devices/create"
                    }
                ]
            },
            {
                label: "Departamentos",
                href: "/departments",
                icon: "users-group",
                expandable: true,
                children: [
                    {
                        label: "Lista",
                        href: "/departments/list"
                    },
                    {
                        label: "Crear",
                        href: "/departments/create"
                    }
                ]
            },
            {
                label: "Ubicaciones",
                href: "/locations",
                icon: "map-pin",
                expandable: true,
                children: [
                    {
                        label: "Lista",
                        href: "/locations/list"
                    },
                    {
                        label: "Crear",
                        href: "/locations/create"
                    }
                ]
            },
            {
                label: "Organización",
                href: "/organization",
                icon: "building",
                expandable: true,
                children: [
                    {
                        label: "Usuarios",
                        href: "/organization/users"
                    },
                    {
                        label: "Roles",
                        href: "/organization/roles"
                    }
                ]
            },
            {
                label: "Configuración",
                href: "/settings",
                icon: "settings",
                expandable: true,
                children: [
                    {
                        label: "Empresa",
                        href: "/settings/company"
                    },
                    {
                        label: "Seguridad",
                        href: "/settings/security"
                    },
                    {
                        label: "Notificaciones",
                        href: "/settings/notifications"
                    },
                    {
                        label: "Reglas",
                        href: "/settings/rules"
                    },
                    {
                        label: "Catálogos",
                        href: "/settings/catalogs"
                    },
                    {
                        label: "Tipos de catálogo",
                        href: "/settings/catalog-types"
                    },
                    {
                        label: "Niveles de acceso",
                        href: "/settings/access-levels"
                    }
                ]
            }
        ]
    },
    {
        title: "Desarrollador",
        items: [
            {
                label: "Desarrollador",
                href: "/lab",
                icon: "code",
                expandable: true,
                children: [
                    {
                        label: "G. Permisos y acceso",
                        href: "/lab/permissions-check"
                    },
                    {
                        label: "Apariencia",
                        href: "/lab/apariencia"
                    }
                ]
            }
        ]
    }
];
const sidebarConfigMinimal = [
    {
        title: "",
        items: [
            {
                label: "Panel",
                href: "/panel",
                icon: "grid"
            },
            {
                label: "Sistema",
                href: "/settings",
                icon: "settings",
                expandable: true,
                children: [
                    {
                        label: "Apariencia",
                        href: "/settings"
                    },
                    {
                        label: "Futuro",
                        href: "/settings/futuro"
                    }
                ]
            }
        ]
    }
];
const sidebarConfig = sidebarConfigFull;
}),
"[project]/apps/control/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$hasModules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/navigation/hasModules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$sidebar$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/navigation/sidebar.config.ts [app-rsc] (ecmascript)");
;
;
;
function Home() {
    const modulesActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$hasModules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasModules"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$navigation$2f$sidebar$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sidebarConfigFull"]);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__79c8ba5a._.js.map