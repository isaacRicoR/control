module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/packages/console/core/permissions/permissionMatrix.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "permissionMatrix",
    ()=>permissionMatrix
]);
const permissionMatrix = {
    OWNER: {
        users: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        devices: {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    ADMIN: {
        users: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        devices: {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    MEMBER: {
        users: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        devices: {
            view: true,
            create: true,
            edit: true,
            delete: false
        }
    },
    VIEWER: {
        users: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        devices: {
            view: true,
            create: false,
            edit: false,
            delete: false
        }
    },
    GUEST: {
        users: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        devices: {
            view: true,
            create: false,
            edit: false,
            delete: false
        }
    }
};
}),
"[project]/packages/console/core/permissions/can.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "can",
    ()=>can
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$permissionMatrix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/permissions/permissionMatrix.ts [app-ssr] (ecmascript)");
;
function can(role, entity, action) {
    const permissions = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$permissionMatrix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["permissionMatrix"][role];
    if (!permissions) return false;
    const entityPermissions = permissions[entity];
    if (!entityPermissions) return false;
    return entityPermissions[action];
}
}),
"[project]/packages/console/core/access/PermissionGate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PermissionGate",
    ()=>PermissionGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$SessionProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/auth/SessionProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$can$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/permissions/can.ts [app-ssr] (ecmascript)");
;
;
;
function PermissionGate({ entity, action, children, fallback = null }) {
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$SessionProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // Si no hay sesión (none), denegar todo
    if (!session) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: fallback
    }, void 0, false);
    const allowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$can$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["can"])(session.role, entity, action);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: allowed ? children : fallback
    }, void 0, false);
}
}),
"[project]/packages/console/core/brands/control.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "controlBrand",
    ()=>controlBrand
]);
const controlBrand = {
    primary: {
        0: "#001a10",
        50: "#00FFA91A",
        100: "#004a32",
        200: "#006145",
        300: "#007a58",
        400: "#00a176",
        500: "#00c98f",
        600: "#00FFA9",
        700: "#3dffb0",
        800: "#7cffc8",
        900: "#b6ffe1",
        950: "#ddfff1",
        1000: "#f2fffb"
    },
    neutral: {
        0: "#000000",
        50: "#141A21",
        100: "#111114",
        200: "#1C252E",
        300: "#2A3744",
        400: "#2c2c36",
        500: "#5A6672",
        600: "#8B95A5",
        700: "#7a7a8a",
        800: "#a6a6b3",
        900: "#d6d6de",
        950: "#eeeeF2",
        1000: "#ffffff"
    },
    success: {
        0: "#001a10",
        50: "#003322",
        100: "#004a32",
        200: "#006145",
        300: "#007a58",
        400: "#00a176",
        500: "#00c98f",
        600: "#00ff99",
        700: "#3dffb0",
        800: "#7cffc8",
        900: "#b6ffe1",
        950: "#ddfff1",
        1000: "#f2fffb"
    },
    warning: {
        0: "#1a1200",
        50: "#2b1f00",
        100: "#3b2a00",
        200: "#523900",
        300: "#6a4900",
        400: "#8a6100",
        500: "#b07c00",
        600: "#ffb020",
        700: "#ffc35c",
        800: "#ffd79a",
        900: "#ffe9cf",
        950: "#fff2e6",
        1000: "#fffbf5"
    },
    danger: {
        0: "#1a0000",
        50: "#2b0000",
        100: "#3b0000",
        200: "#520000",
        300: "#6a0000",
        400: "#8a0000",
        500: "#b00000",
        600: "#ff3344",
        700: "#ff6a76",
        800: "#ff9aa2",
        900: "#ffd0d4",
        950: "#ffe7e9",
        1000: "#fff5f6"
    },
    info: {
        0: "#00111a",
        50: "#001f2b",
        100: "#002a3b",
        200: "#003952",
        300: "#00496a",
        400: "#00618a",
        500: "#007cb0",
        600: "#29a3ff",
        700: "#64beff",
        800: "#9ad8ff",
        900: "#cfeeff",
        950: "#e6f6ff",
        1000: "#f5fcff"
    }
};
}),
"[project]/packages/console/core/brands/safebox.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeboxBrand",
    ()=>safeboxBrand
]);
const safeboxBrand = {
    primary: {
        0: "#000a1a",
        50: "#0066FF1A",
        100: "#001f4d",
        200: "#002e73",
        300: "#003d99",
        400: "#004cbf",
        500: "#005be6",
        600: "#0066FF",
        700: "#3385ff",
        800: "#66a3ff",
        900: "#99c2ff",
        950: "#cce0ff",
        1000: "#e6f0ff"
    },
    neutral: {
        0: "#000000",
        50: "#0f121a",
        100: "#1a1d26",
        200: "#242833",
        300: "#2f3440",
        400: "#383e4d",
        500: "#5A6672",
        600: "#8B95A5",
        700: "#7a7a8a",
        800: "#a6a6b3",
        900: "#d6d6de",
        950: "#eeeeF2",
        1000: "#ffffff"
    },
    success: {
        0: "#001a10",
        50: "#003322",
        100: "#004a32",
        200: "#006145",
        300: "#007a58",
        400: "#00a176",
        500: "#00c98f",
        600: "#00ff99",
        700: "#3dffb0",
        800: "#7cffc8",
        900: "#b6ffe1",
        950: "#ddfff1",
        1000: "#f2fffb"
    },
    warning: {
        0: "#1a1200",
        50: "#2b1f00",
        100: "#3b2a00",
        200: "#523900",
        300: "#6a4900",
        400: "#8a6100",
        500: "#b07c00",
        600: "#ffb020",
        700: "#ffc35c",
        800: "#ffd79a",
        900: "#ffe9cf",
        950: "#fff2e6",
        1000: "#fffbf5"
    },
    danger: {
        0: "#1a0000",
        50: "#2b0000",
        100: "#3b0000",
        200: "#520000",
        300: "#6a0000",
        400: "#8a0000",
        500: "#b00000",
        600: "#ff3344",
        700: "#ff6a76",
        800: "#ff9aa2",
        900: "#ffd0d4",
        950: "#ffe7e9",
        1000: "#fff5f6"
    },
    info: {
        0: "#00111a",
        50: "#001f2b",
        100: "#002a3b",
        200: "#003952",
        300: "#00496a",
        400: "#00618a",
        500: "#007cb0",
        600: "#29a3ff",
        700: "#64beff",
        800: "#9ad8ff",
        900: "#cfeeff",
        950: "#e6f6ff",
        1000: "#f5fcff"
    }
};
}),
"[project]/packages/console/core/brands/security.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "securityBrand",
    ()=>securityBrand
]);
const securityBrand = {
    primary: {
        0: "#0b1221",
        50: "#101828",
        100: "#1d2939",
        200: "#344054",
        300: "#475467",
        400: "#667085",
        500: "#2970ff",
        600: "#155eef",
        700: "#004eeb",
        800: "#0040c1",
        900: "#00359e",
        950: "#eif8ff",
        1000: "#f5faFF"
    },
    neutral: {
        0: "#020617",
        50: "#0f172a",
        100: "#1e293b",
        200: "#334155",
        300: "#475569",
        400: "#64748b",
        500: "#94a3b8",
        600: "#cbd5e1",
        700: "#e2e8f0",
        800: "#f1f5f9",
        900: "#f8fafc",
        950: "#ffffff",
        1000: "#ffffff"
    },
    success: {
        0: "#053321",
        50: "#053321",
        100: "#084c31",
        200: "#0b6542",
        300: "#0e7f52",
        400: "#12b774",
        500: "#16d98a",
        600: "#12b774",
        700: "#0e7f52",
        800: "#0b6542",
        900: "#084c31",
        950: "#f0fdf4",
        1000: "#ffffff"
    },
    warning: {
        0: "#332200",
        50: "#332200",
        100: "#4c3300",
        200: "#654400",
        300: "#7f5500",
        400: "#b77a00",
        500: "#d99100",
        600: "#b77a00",
        700: "#7f5500",
        800: "#654400",
        900: "#4c3300",
        950: "#fffbeb",
        1000: "#ffffff"
    },
    danger: {
        0: "#330505",
        50: "#330505",
        100: "#4c0808",
        200: "#650b0b",
        300: "#7f0e0e",
        400: "#b71515",
        500: "#d91919",
        600: "#b71515",
        700: "#7f0e0e",
        800: "#650b0b",
        900: "#4c0808",
        950: "#fef2f2",
        1000: "#ffffff"
    },
    info: {
        0: "#051b33",
        50: "#051b33",
        100: "#08284c",
        200: "#0b3665",
        300: "#0e437f",
        400: "#1261b7",
        500: "#1673d9",
        600: "#1261b7",
        700: "#0e437f",
        800: "#0b3665",
        900: "#08284c",
        950: "#eff6ff",
        1000: "#ffffff"
    }
};
}),
"[project]/packages/console/core/brands/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeBrand",
    ()=>activeBrand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$control$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/brands/control.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$safebox$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/brands/safebox.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$security$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/brands/security.ts [app-ssr] (ecmascript)");
;
;
;
;
const activeBrand = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$control$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["controlBrand"],
    primary: {
        0: "var(--brand-primary-0)",
        50: "var(--brand-primary-50)",
        100: "var(--brand-primary-100)",
        200: "var(--brand-primary-200)",
        300: "var(--brand-primary-300)",
        400: "var(--brand-primary-400)",
        500: "var(--brand-primary-500)",
        600: "var(--brand-primary-600)",
        700: "var(--brand-primary-700)",
        800: "var(--brand-primary-800)",
        900: "var(--brand-primary-900)",
        950: "var(--brand-primary-950)",
        1000: "var(--brand-primary-1000)"
    },
    neutral: {
        0: "var(--brand-neutral-0)",
        50: "var(--brand-neutral-50)",
        100: "var(--brand-neutral-100)",
        200: "var(--brand-neutral-200)",
        300: "var(--brand-neutral-300)",
        400: "var(--brand-neutral-400)",
        500: "var(--brand-neutral-500)",
        600: "var(--brand-neutral-600)",
        700: "var(--brand-neutral-700)",
        800: "var(--brand-neutral-800)",
        900: "var(--brand-neutral-900)",
        950: "var(--brand-neutral-950)",
        1000: "var(--brand-neutral-1000)"
    }
};
}),
"[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colors",
    ()=>colors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/core/brands/index.ts [app-ssr] (ecmascript) <locals>");
;
/**
 * Base palette (paleta base) — Dark
 * Conectado al Brand Layer (src/core/brands)
 */ const baseDark = {
    neutral: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].neutral,
    brand: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].primary,
    success: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].success,
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].warning,
    danger: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].danger,
    info: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$brands$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activeBrand"].info
};
/**
 * Semantic palette (paleta semántica) — Dark
 * Esto SÍ lo consumen los componentes.
 */ const semanticDark = {
    background: {
        default: baseDark.neutral[50],
        hover: baseDark.neutral[100],
        active: baseDark.neutral[200],
        disabled: baseDark.neutral[100],
        focus: baseDark.neutral[50],
        selected: baseDark.neutral[100]
    },
    surface: {
        default: baseDark.neutral[200],
        hover: baseDark.neutral[300],
        active: baseDark.neutral[300],
        disabled: baseDark.neutral[200],
        focus: baseDark.neutral[100],
        selected: baseDark.brand[50]
    },
    elevated: {
        default: baseDark.neutral[200],
        hover: baseDark.neutral[300],
        active: baseDark.neutral[400],
        disabled: baseDark.neutral[300],
        focus: baseDark.neutral[200],
        selected: baseDark.neutral[300]
    },
    border: {
        default: baseDark.neutral[300],
        hover: baseDark.neutral[400],
        active: baseDark.neutral[500],
        disabled: baseDark.neutral[300],
        focus: baseDark.brand[600],
        selected: baseDark.brand[600]
    },
    text: {
        default: baseDark.neutral[600],
        hover: baseDark.neutral[1000],
        active: baseDark.neutral[1000],
        disabled: baseDark.neutral[500],
        focus: baseDark.neutral[1000],
        selected: baseDark.neutral[1000],
        onSolid: baseDark.neutral[1000]
    },
    primary: {
        default: baseDark.brand[600],
        hover: baseDark.brand[700],
        active: baseDark.brand[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.brand[600],
        selected: baseDark.brand[700]
    },
    secondary: {
        default: baseDark.neutral[300],
        hover: baseDark.neutral[400],
        active: baseDark.neutral[500],
        disabled: baseDark.neutral[200],
        focus: baseDark.neutral[300],
        selected: baseDark.neutral[400]
    },
    success: {
        default: baseDark.success[600],
        hover: baseDark.success[700],
        active: baseDark.success[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.success[600],
        selected: baseDark.success[700],
        100: baseDark.success[100],
        200: baseDark.success[200],
        300: baseDark.success[300]
    },
    warning: {
        default: baseDark.warning[600],
        hover: baseDark.warning[700],
        active: baseDark.warning[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.warning[600],
        selected: baseDark.warning[700],
        100: baseDark.warning[100],
        200: baseDark.warning[200],
        300: baseDark.warning[300],
        400: baseDark.warning[400],
        emphasis: "#ff8c00"
    },
    danger: {
        default: baseDark.danger[600],
        hover: baseDark.danger[700],
        active: baseDark.danger[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.danger[600],
        selected: baseDark.danger[700],
        100: baseDark.danger[100],
        200: baseDark.danger[200],
        300: baseDark.danger[300],
        400: baseDark.danger[400],
        surfaceHover: baseDark.danger[950]
    },
    info: {
        default: baseDark.info[600],
        hover: baseDark.info[700],
        active: baseDark.info[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.info[600],
        selected: baseDark.info[700]
    },
    error: {
        default: baseDark.danger[600],
        hover: baseDark.danger[700],
        active: baseDark.danger[500],
        disabled: baseDark.neutral[400],
        focus: baseDark.danger[600],
        selected: baseDark.danger[700]
    },
    button: {
        white: {
            bg: baseDark.neutral[1000],
            text: baseDark.neutral[0],
            border: baseDark.neutral[1000],
            hoverBg: baseDark.neutral[950]
        },
        actionPrimary: {
            bg: baseDark.neutral[0],
            text: baseDark.neutral[950],
            hoverBg: baseDark.neutral[100]
        }
    },
    sidebar: {
        groupLabel: baseDark.neutral[500]
    },
    icon: {
        muted: baseDark.neutral[400],
        active: baseDark.neutral[600]
    }
};
/**
 * Light theme — SaaS moderno: fondo #F6F8F8, cards #FFFFFF, acento #00A76F
 */ const baseLight = {
    neutral: baseDark.neutral,
    brand: baseDark.brand,
    success: baseDark.success,
    warning: baseDark.warning,
    danger: baseDark.danger,
    info: baseDark.info
};
const semanticLight = {
    background: {
        default: "#F4F6F8",
        hover: "#EEF2F7",
        active: "#E4E4E7",
        disabled: "#F4F4F5",
        focus: "#F4F6F8",
        selected: "#F4F4F5"
    },
    surface: {
        default: "#FFFFFF",
        hover: "#F4F4F5",
        active: "#EEEEF0",
        disabled: "#FFFFFF",
        focus: "#FFFFFF",
        selected: "#E1F0EE"
    },
    border: {
        default: "#E4E4E7",
        hover: "#D4D4D8",
        active: "#A1A1AA",
        disabled: "#E4E4E7",
        focus: "#00A76F",
        selected: "#00A76F"
    },
    text: {
        default: "#18181B",
        muted: "#71717A",
        hover: "#000000",
        active: "#18181B",
        disabled: "#A1A1AA",
        focus: "#18181B",
        selected: "#18181B",
        onSolid: "#FFFFFF"
    },
    primary: {
        default: "#00A76F",
        hover: "#007a58",
        active: "#00c98f",
        disabled: "#94a3b8",
        focus: "#00A76F",
        selected: "#007a58"
    },
    secondary: semanticDark.secondary,
    elevated: semanticDark.elevated,
    success: {
        ...semanticDark.success,
        default: "#00A76F",
        hover: "#007a58",
        active: "#00c98f"
    },
    warning: semanticDark.warning,
    danger: {
        ...semanticDark.danger,
        surfaceHover: baseDark.danger[1000]
    },
    info: semanticDark.info,
    error: semanticDark.error,
    button: {
        ...semanticDark.button,
        actionPrimary: {
            bg: baseDark.neutral[950],
            text: baseDark.neutral[0],
            hoverBg: baseDark.neutral[900]
        }
    },
    sidebar: {
        groupLabel: "#71717A",
        itemDefault: "#71717A",
        itemHover: "#52525B"
    },
    icon: {
        muted: "#637381",
        active: "#18181B"
    }
};
const semanticActive = {
    background: {
        default: "var(--semantic-background-default)",
        hover: "var(--semantic-background-hover)",
        active: "var(--semantic-background-active)",
        disabled: "var(--semantic-background-disabled)",
        focus: "var(--semantic-background-focus)",
        selected: "var(--semantic-background-selected)"
    },
    surface: {
        default: "var(--semantic-surface-default)",
        hover: "var(--semantic-surface-hover)",
        active: "var(--semantic-surface-active)",
        disabled: "var(--semantic-surface-disabled)",
        focus: "var(--semantic-surface-focus)",
        selected: "var(--semantic-surface-selected)"
    },
    border: {
        default: "var(--semantic-border-default)",
        hover: "var(--semantic-border-hover)",
        active: "var(--semantic-border-active)",
        disabled: "var(--semantic-border-disabled)",
        focus: "var(--semantic-border-focus)",
        selected: "var(--semantic-border-selected)"
    },
    text: {
        default: "var(--semantic-text-default)",
        muted: "var(--semantic-text-muted)",
        hover: "var(--semantic-text-hover)",
        active: "var(--semantic-text-active)",
        disabled: "var(--semantic-text-disabled)",
        focus: "var(--semantic-text-focus)",
        selected: "var(--semantic-text-selected)",
        onSolid: "var(--semantic-text-on-solid)"
    },
    primary: {
        default: "var(--semantic-primary-default)",
        hover: "var(--semantic-primary-hover)",
        active: "var(--semantic-primary-active)",
        disabled: "var(--semantic-primary-disabled)",
        focus: "var(--semantic-primary-focus)",
        selected: "var(--semantic-primary-selected)"
    },
    danger: {
        default: "var(--semantic-danger-default)",
        hover: "var(--semantic-danger-hover)",
        active: "var(--semantic-danger-active)",
        disabled: "var(--semantic-danger-disabled)",
        focus: "var(--semantic-danger-focus)",
        selected: "var(--semantic-danger-selected)",
        100: "var(--status-danger-100)",
        200: "var(--status-danger-200)",
        300: "var(--status-danger-300)",
        400: "var(--status-danger-400)",
        surfaceHover: "var(--semantic-danger-surface-hover)"
    },
    success: {
        default: "var(--semantic-success-default)",
        hover: "var(--semantic-success-hover)",
        active: "var(--semantic-success-active)",
        disabled: "var(--semantic-success-disabled)",
        focus: "var(--semantic-success-focus)",
        selected: "var(--semantic-success-selected)",
        100: "var(--status-success-100)",
        200: "var(--status-success-200)",
        300: "var(--status-success-300)"
    },
    warning: {
        default: "var(--semantic-warning-default)",
        hover: "var(--semantic-warning-hover)",
        active: "var(--semantic-warning-active)",
        disabled: "var(--semantic-warning-disabled)",
        focus: "var(--semantic-warning-focus)",
        selected: "var(--semantic-warning-selected)",
        100: "var(--status-warning-100)",
        200: "var(--status-warning-200)",
        300: "var(--status-warning-300)",
        400: "var(--status-warning-400)",
        emphasis: "var(--status-warning-emphasis)"
    },
    info: {
        default: "var(--semantic-info-default)",
        hover: "var(--semantic-info-hover)",
        active: "var(--semantic-info-active)",
        disabled: "var(--semantic-info-disabled)",
        focus: "var(--semantic-info-focus)",
        selected: "var(--semantic-info-selected)"
    },
    error: {
        default: "var(--semantic-error-default)",
        hover: "var(--semantic-error-hover)",
        active: "var(--semantic-error-active)",
        disabled: "var(--semantic-error-disabled)",
        focus: "var(--semantic-error-focus)",
        selected: "var(--semantic-error-selected)"
    },
    secondary: semanticDark.secondary,
    elevated: semanticDark.elevated,
    button: {
        primary: {
            bg: "var(--semantic-button-primary-bg, var(--semantic-primary-default))",
            hover: "var(--semantic-button-primary-hover, var(--semantic-primary-hover))",
            text: "var(--semantic-button-primary-text, var(--semantic-text-active))"
        },
        white: {
            bg: "var(--semantic-button-white-bg)",
            text: "var(--semantic-button-white-text)",
            border: "var(--semantic-button-white-border)",
            hoverBg: "var(--semantic-button-white-hoverBg)"
        },
        create: {
            bg: "var(--semantic-button-create-bg)",
            text: "var(--semantic-button-create-text)",
            border: "var(--semantic-button-create-border)",
            hover: "var(--semantic-button-create-hover)"
        }
    },
    sidebar: {
        groupLabel: "var(--semantic-sidebar-group-label)"
    },
    icon: {
        muted: "var(--semantic-icon-muted)",
        active: "var(--semantic-icon-active)"
    }
};
const colors = {
    dark: {
        base: baseDark,
        semantic: semanticDark
    },
    light: {
        base: baseLight,
        semantic: semanticLight
    },
    semantic: semanticActive
};
}),
"[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/spacing.ts
// Single source of truth for spacing tokens.
// Rule: do not hardcode spacing values anywhere else.
__turbopack_context__.s([
    "spacing",
    ()=>spacing
]);
const spacing = {
    // Numeric scale (legacy/granular support)
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    // Semantic aliases
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 64
};
}),
"[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/radius.ts
// Single source of truth for border radius tokens.
__turbopack_context__.s([
    "radius",
    ()=>radius
]);
const radius = {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 18,
    "2xl": 24,
    full: 9999
};
}),
"[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/typography.ts
// Single source of truth for typography tokens.
__turbopack_context__.s([
    "typography",
    ()=>typography
]);
const typography = {
    fontFamily: {
        primary: "Inter, system-ui, -apple-system, sans-serif"
    },
    fontSize: {
        xs: 10,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        "2xl": 24,
        "3xl": 32
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
    },
    lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.7
    }
};
}),
"[project]/packages/console/tokens/layout.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/layout.ts
// Single source of truth for layout tokens.
__turbopack_context__.s([
    "layout",
    ()=>layout
]);
const layout = {
    maxWidth: {
        app: 1440,
        content: 1200,
        modal: 1120,
        compact: 480
    },
    sidebarWidth: {
        collapsed: 80,
        expanded: 255
    },
    appBarHeight: 64,
    components: {
        avatar: {
            md: 40,
            lg: 64,
            xl: 120
        }
    }
};
}),
"[project]/packages/console/tokens/breakpoints.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/breakpoints.ts
// Single source of truth for responsive breakpoints.
__turbopack_context__.s([
    "breakpoints",
    ()=>breakpoints
]);
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
};
}),
"[project]/packages/console/tokens/zIndex.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/zIndex.ts
// Single source of truth for z-index layering tokens.
__turbopack_context__.s([
    "zIndex",
    ()=>zIndex
]);
const zIndex = {
    base: 0,
    sidebar: 10,
    dropdown: 20,
    overlay: 30,
    modal: 40,
    tooltip: 50
};
}),
"[project]/packages/console/tokens/shadows.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// design/tokens/shadows.ts
// Single source of truth for shadow tokens.
__turbopack_context__.s([
    "shadows",
    ()=>shadows
]);
const shadows = {
    card: "0 0 10px rgba(0, 0, 0, 0.035), 0 0 4px rgba(0, 0, 0, 0.018)",
    dropdown: "0 12px 32px rgba(0, 0, 0, 0.45)",
    modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    modalStrong: "0 32px 64px -12px rgba(0, 0, 0, 0.6)"
};
}),
"[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// design/tokens/index.ts
// Barrel exports (exportación central) for all design tokens.
// Rule: import tokens from here, not from individual files.
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/breakpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$zIndex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/zIndex.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/shadows.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$zIndex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/zIndex.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const PageShell = ({ children, title, breadcrumbs, actions, style, headerStyle, variant = "contained", showHeaderDivider = true })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasHeader = title || breadcrumbs || actions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            maxWidth: variant === "contained" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"].maxWidth.content : "none",
            margin: "0 auto",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            ...style
        },
        children: [
            hasHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: "sticky",
                    top: 0,
                    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$zIndex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zIndex"].sidebar,
                    backgroundColor: semantic.background.default,
                    ...showHeaderDivider ? {
                        borderBottom: `1px solid ${semantic.border.default}`
                    } : {},
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                    ...headerStyle
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    color: semantic.text.active,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xl,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.bold
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            breadcrumbs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: semantic.text.disabled,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                                },
                                children: breadcrumbs
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end"
                        },
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/console/core/visual/themeRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Theme Registry — Formal ThemePack definitions
 *
 * Values extracted from currently active tokens (globals.css [data-theme]).
 * NO runtime replacement — structure and documentation only.
 * Base for future themes (security, etc.).
 */ __turbopack_context__.s([
    "getThemeTokens",
    ()=>getThemeTokens,
    "themeRegistry",
    ()=>themeRegistry
]);
function getThemeTokens(brand, mode) {
    const pack = themeRegistry[brand] ?? themeRegistry.control;
    return pack[mode];
}
const themeRegistry = {
    control: {
        id: "control",
        dark: {
            background: "#141A21",
            surface: "#1C252E",
            border: "#2A3744",
            text: "#8B95A5",
            accent: "#00FFA9",
            success: "#00ff99",
            danger: "#ff3344",
            warning: "#ffb020",
            info: "#29a3ff",
            pending: "#5A6672",
            buttonPrimaryBg: "#00FFA9",
            buttonPrimaryText: "#FFFFFF"
        },
        light: {
            background: "#F4F6F8",
            surface: "#FFFFFF",
            border: "#E4E4E7",
            text: "#18181B",
            accent: "#00A76F",
            success: "#00A76F",
            danger: "#ff3344",
            warning: "#ffb020",
            info: "#29a3ff",
            pending: "#71717A",
            buttonPrimaryBg: "#00A76F",
            buttonPrimaryText: "#18181B"
        }
    },
    // TODO: customize security palette
    security: {
        id: "security",
        dark: {
            background: "#0f172a",
            surface: "#334155",
            border: "#475569",
            text: "#cbd5e1",
            accent: "#155eef",
            success: "#00ff99",
            danger: "#ff3344",
            warning: "#ffb020",
            info: "#29a3ff",
            pending: "#94a3b8",
            buttonPrimaryBg: "#155eef",
            buttonPrimaryText: "#FFFFFF"
        },
        light: {
            background: "#F4F6F8",
            surface: "#FFFFFF",
            border: "#E4E4E7",
            text: "#18181B",
            accent: "#155eef",
            success: "#00A76F",
            danger: "#ff3344",
            warning: "#ffb020",
            info: "#29a3ff",
            pending: "#71717A",
            buttonPrimaryBg: "#155eef",
            buttonPrimaryText: "#FFFFFF"
        }
    }
};
}),
"[project]/packages/console/ui/atoms/Button/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/visualPresetStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/themeRegistry.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, disabled = false, onClick, variant = 'primary', size = 'md', style, className, ...props }, ref)=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { currentPreset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVisualPreset"])();
    const themeTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, theme);
    let bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.primary.default;
    let text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.default;
    let border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.default;
    let variantClass = "";
    let cssVariables = {};
    const isSmall = size === 'sm';
    const btnHeight = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32] + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48];
    const paddingX = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16];
    if (disabled) {
        bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.primary.disabled;
        text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.disabled;
        border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.disabled;
    } else if (variant === 'primary') {
        const pt = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.primary;
        const packBg = themeTokens?.buttonPrimaryBg;
        const packText = themeTokens?.buttonPrimaryText;
        bg = packBg ?? pt?.bg ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.primary.default;
        text = packText ?? pt?.text ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.active;
        border = bg;
        variantClass = "button-variant-primary";
        const hoverVal = pt?.hover ?? pt?.bg ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.primary.hover;
        cssVariables = {
            "--button-primary-hover": hoverVal
        };
    } else if (variant === 'actionPrimary') {
        const actionTheme = theme === 'light' ? 'dark' : 'light';
        const ap = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][actionTheme].semantic.button?.actionPrimary;
        if (ap) {
            bg = ap.bg;
            text = ap.text;
            border = ap.bg;
            variantClass = "button-variant-action-primary";
            cssVariables = {
                "--button-action-primary-hover": ap.hoverBg
            };
        } else {
            bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.surface.default;
            text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.active;
            border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.default;
        }
    } else if (variant === 'secondary') {
        // Acción funcional no primaria: fondo neutro de superficie, texto de máximo contraste, borde visible.
        bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.surface.default;
        text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.active;
        border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.default;
        variantClass = "button-variant-secondary";
        cssVariables = {
            "--button-secondary-hover-bg": __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.surface.hover,
            "--button-secondary-active-bg": __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.surface.active,
            "--button-secondary-hover-border": __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.hover,
            "--button-secondary-focus-ring": __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.border.focus
        };
    } else if (variant === 'white') {
        // 🔒 Refactored to use semantic tokens (No leaks)
        bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.white.bg ?? "white";
        text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.white.text ?? "black";
        border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.white.border ?? "white";
        variantClass = "button-variant-white";
        // Inject semantic token into CSS variable for the external CSS file to use
        // Using explicit cast for custom property
        cssVariables = {
            "--button-white-hover-bg": __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.white.hoverBg ?? "#F4F4F5"
        };
    } else if (variant === 'create' && __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button?.create) {
        const ct = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.button.create;
        bg = ct.bg;
        text = ct.text;
        border = ct.border;
        variantClass = "button-variant-create";
        cssVariables = {
            "--button-create-hover": ct.hover
        };
    } else if (variant === 'error') {
        bg = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.error.default;
        text = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.text.active; // Using active text for better contrast on red
        border = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic.error.default;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `${className || ''} ${variantClass}`,
        disabled: disabled,
        onClick: onClick,
        style: {
            /* 🔒 Comportamiento base correcto */ display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'fit-content',
            height: `${btnHeight}px`,
            /* 🎨 Tokens */ padding: `0 ${paddingX}px`,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
            lineHeight: "1",
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
            background: bg,
            color: text,
            border: `1px solid ${border}`,
            cursor: disabled ? 'not-allowed' : 'pointer',
            outline: 'none',
            ...style,
            ...cssVariables
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/atoms/Button/Button.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
}),
"[project]/packages/console/ui/atoms/Badge/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
;
;
;
const getBadgeStyles = (variant = "neutral", appearance = "filled", interactive = false, fontSize, theme = "light")=>{
    const { semantic } = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme];
    let bg = semantic.surface.hover; // neutral muted surface
    let text = semantic.text.disabled; // muted text
    let border = "transparent";
    switch(variant){
        case "success":
            if (theme === "light") {
                bg = "var(--semantic-status-success-bg, var(--semantic-success-disabled))";
                text = "var(--semantic-status-success-fg, var(--semantic-success-default))";
                border = "var(--semantic-status-success-border, var(--semantic-success-default))";
            } else {
                bg = semantic.success.disabled;
                text = semantic.success.default;
                border = semantic.success.default;
            }
            break;
        case "warning":
            bg = semantic.warning.disabled;
            text = semantic.warning.default;
            border = semantic.warning.default;
            break;
        case "error":
            bg = semantic.danger.disabled;
            text = semantic.danger.default;
            border = semantic.danger.default;
            break;
        case "info":
            bg = semantic.info.disabled;
            text = semantic.info.default;
            border = semantic.info.default;
            break;
        case "neutral":
        default:
            bg = semantic.surface.hover;
            text = semantic.text.disabled;
            border = "transparent";
            break;
    }
    if (appearance === "ghost") {
        bg = "transparent";
        border = "none";
    // Text color remains from variant
    }
    const isSuccessTextOnly = theme === "light" && variant === "success" && appearance === "ghost";
    return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: appearance === "filled" ? `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px` : 0,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"]["2xl"],
        backgroundColor: bg,
        color: text,
        fontSize: fontSize || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
        fontWeight: isSuccessTextOnly ? 600 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
        lineHeight: 1,
        border: appearance === "filled" ? `1px solid ${border}` : "none",
        whiteSpace: "nowrap",
        cursor: interactive ? "pointer" : "default",
        transition: "opacity 0.2s ease"
    };
};
const Badge = ({ label, variant = "neutral", appearance = "filled", interactive = false, fontSize })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .badge-interactive:hover {
                    opacity: 0.8;
                }
            `
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Badge/Badge.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: interactive ? "badge-interactive" : undefined,
                style: getBadgeStyles(variant, appearance, interactive, fontSize, theme),
                children: label
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Badge/Badge.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/packages/console/ui/atoms/Badge/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Badge/Badge.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/control/app/lab/permissions-check/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PermissionsCheckPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$SessionProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/auth/SessionProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$can$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/permissions/can.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/access/PermissionGate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Badge$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Badge/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Badge/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function PermissionsCheckPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Cargando Lab..."
        }, void 0, false, {
            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
            lineNumber: 25,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionsCheckContent, {}, void 0, false, {
            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function PermissionsCheckContent() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    // ─── Sincronización Client-Side Debug Auth ───
    const debugAuthParam = searchParams.get("debugAuth");
    // Mapeo de query param a UserRole estricto
    const labSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (debugAuthParam === "none") return null;
        const roleMap = {
            owner: 'OWNER',
            admin: 'ADMIN',
            member: 'MEMBER',
            viewer: 'VIEWER',
            guest: 'GUEST'
        };
        const role = roleMap[debugAuthParam || ''] || 'OWNER'; // Default OWNER si no hay param
        return {
            userId: "lab-user",
            role
        };
    }, [
        debugAuthParam
    ]);
    // Envolvemos el contenido con un SessionProvider local para que use el rol de la URL
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$SessionProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: labSession || undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionsCheckUI, {
            session: labSession,
            semantic: semantic
        }, void 0, false, {
            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
function PermissionsCheckUI({ session, semantic }) {
    const entities = [
        "users",
        "devices"
    ];
    const actions = [
        "view",
        "create",
        "edit",
        "delete"
    ];
    const boxStyle = {
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
        backgroundColor: semantic.surface.default,
        border: `1px solid ${semantic.border.default}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
    };
    const sectionTitleStyle = {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.bold,
        color: semantic.text.active,
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageShell"], {
        title: "Permission Matrix Check",
        breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Lab"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 93,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "›"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: semantic.text.active
                    },
                    children: "Permissions Check"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 95,
                    columnNumber: 21
                }, void 0)
            ]
        }, void 0, true),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32],
                maxWidth: 800
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: boxStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: sectionTitleStyle,
                            children: "1. Sesión Actual (Debug Sync)"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: semantic.text.default
                                    },
                                    children: "Rol Detectado:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    label: session ? session.role : "NONE (No Session)",
                                    variant: session ? "info" : "neutral"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                color: semantic.text.disabled
                            },
                            children: [
                                "Cambiando ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "?debugAuth=guest"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 35
                                }, this),
                                " en la barra de direcciones, la UI debe reaccionar."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: boxStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: sectionTitleStyle,
                            children: "2. Matriz Calculada (Helper can())"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: "100%",
                                borderCollapse: "collapse",
                                color: semantic.text.default
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: `1px solid ${semantic.border.default}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    textAlign: "left",
                                                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                },
                                                children: "Entidad"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 33
                                            }, this),
                                            actions.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                    },
                                                    children: a
                                                }, a, false, {
                                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 51
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: entities.map((entity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: `1px solid ${semantic.border.default}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                                        fontWeight: "bold"
                                                    },
                                                    children: entity
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 37
                                                }, this),
                                                actions.map((action)=>{
                                                    // Si no hay sesión (none), can() devolverá false automáticamente
                                                    const allowed = session ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$permissions$2f$can$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["can"])(session.role, entity, action) : false;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            textAlign: "center",
                                                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                        },
                                                        children: allowed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].dark.semantic.success.default
                                                            },
                                                            children: "✅"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 53
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].dark.semantic.danger.default
                                                            },
                                                            children: "❌"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, action, false, {
                                                        fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            ]
                                        }, entity, true, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: boxStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: sectionTitleStyle,
                                    children: "Users UI"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "users",
                                            action: "create",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "white",
                                                children: "Create User"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "users",
                                            action: "edit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "primary",
                                                children: "Edit User"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "users",
                                            action: "delete",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "error",
                                                children: "Delete User"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                        color: semantic.text.disabled
                                    },
                                    children: [
                                        "Los botones usan ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "PermissionGate"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 46
                                        }, this),
                                        " internamente."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: boxStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: sectionTitleStyle,
                                    children: "Devices UI"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "devices",
                                            action: "create",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "white",
                                                children: "Create Device"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "devices",
                                            action: "edit",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "primary",
                                                children: "Edit Device"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$access$2f$PermissionGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PermissionGate"], {
                                            entity: "devices",
                                            action: "delete",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "error",
                                                children: "Delete Device"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                        color: semantic.text.disabled
                                    },
                                    children: [
                                        "Refleja permisos de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "devices"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 49
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                            lineNumber: 172,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
            lineNumber: 99,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/lab/permissions-check/page.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a07dd0f8._.js.map