(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/console/core/connector/errorNormalizer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeConnectorError",
    ()=>normalizeConnectorError
]);
function normalizeConnectorError(error) {
    // Caso 1: Ya es un ApiError (del sobre de la API)
    if (typeof error === "object" && error !== null && "code" in error && "message" in error) {
        const apiErr = error;
        // Detectar tipo por código o prefijo si fuera necesario
        let kind = "server";
        if (apiErr.code.startsWith("VAL_") || apiErr.code === "BAD_REQUEST") {
            kind = "validation";
        }
        return {
            code: apiErr.code,
            message: apiErr.message,
            kind,
            retryable: kind === "server"
        };
    }
    // Caso 2: Error nativo de JavaScript / Fetch
    if (error instanceof Error) {
        const isNetwork = error.name === "TypeError" && error.message.includes("fetch");
        return {
            code: isNetwork ? "NETWORK_ERROR" : "UNKNOWN_ERROR",
            message: isNetwork ? "No se pudo conectar con el servidor. Revisa tu conexión." : error.message || "Ha ocurrido un error inesperado.",
            kind: isNetwork ? "network" : "unknown",
            retryable: isNetwork
        };
    }
    // Caso 3: Fallback total
    return {
        code: "UNKNOWN",
        message: "Algo salió mal. Por favor intenta de nuevo.",
        kind: "unknown",
        retryable: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/core/toast/errorToastHelper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizedErrorToToast",
    ()=>normalizedErrorToToast
]);
function normalizedErrorToToast(error) {
    let type = "error";
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
        description: error.message
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PageShell = ({ children, title, breadcrumbs, actions, style, headerStyle, variant = "contained", showHeaderDivider = true })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasHeader = title || breadcrumbs || actions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            maxWidth: variant === "contained" ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"].maxWidth.content : "none",
            margin: "0 auto",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            ...style
        },
        children: [
            hasHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: "sticky",
                    top: 0,
                    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zIndex"].sidebar,
                    backgroundColor: semantic.background.default,
                    ...showHeaderDivider ? {
                        borderBottom: `1px solid ${semantic.border.default}`
                    } : {},
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    ...headerStyle
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    color: semantic.text.active,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xl,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.bold
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PageShell/PageShell.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            breadcrumbs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: semantic.text.muted,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
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
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(PageShell, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = PageShell;
var _c;
__turbopack_context__.k.register(_c, "PageShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/Card/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/shadows.ts [app-client] (ecmascript)");
;
;
const Card = ({ title, subtitle, children, footer, noPadding, elevated, variant = "default" })=>{
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    const isPanel = variant === "panel";
    const shouldElevate = elevated || isPanel;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            background: semantic.surface.default,
            border: `1px solid ${semantic.border.default}`,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            padding: noPadding ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            boxShadow: shouldElevate ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].card : "none"
        },
        "aria-label": title ?? "Card",
        children: [
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: semantic.text.default,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].lineHeight.normal,
                            marginBottom: subtitle ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4] : 0
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: semantic.text.disabled,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
                            lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].lineHeight.normal
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: semantic.text.default,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
                    lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].lineHeight.normal
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    ...isPanel ? {
                        margin: `0 -${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px -${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px -${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`
                    } : {}
                },
                children: footer
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/molecules/Card/Card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/Input/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Input = ({ label, error, errorMessage, helperText, id, className, required, style, size = "md", ...props })=>{
    _s();
    // Generate a safe, stable ID if none provided
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const inputId = id || generatedId;
    const helperId = helperText || errorMessage ? `${inputId}-helper` : undefined;
    // Semantic Tokens
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    // Size logic
    const isSmall = size === "sm";
    const height = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][32] + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48]; // 36px vs 48px
    const paddingX = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24];
    const paddingTop = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]; // 16-8=8px top vs 24-8=16px top
    const paddingBottom = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]; // 8px vs 4px
    const paddingLeft = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12] : undefined; // Force 12px for sm instead of calc(12-7)=5px
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `input-container ${className || ""}`,
        style: {
            position: "relative",
            marginBottom: 0,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            // vars moved here for scope visibility to siblings (Label)
            "--input-height": `${height}px`,
            "--input-padding-x": `${paddingX}px`,
            "--input-padding-top": `${paddingTop}px`,
            "--input-padding-bottom": `${paddingBottom}px`,
            ...paddingLeft ? {
                "--input-padding-left": `${paddingLeft}px`
            } : {},
            "--input-radius": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md}px`,
            "--input-bg": semantic.surface.default,
            "--input-border": semantic.border.default,
            "--input-border-hover": semantic.border.active,
            "--input-border-focus": semantic.border.focus,
            "--input-border-error": semantic.danger.default,
            "--input-text": semantic.text.active,
            "--input-label": semantic.text.muted || semantic.text.default,
            "--input-label-focus": semantic.primary.default,
            "--input-label-error": semantic.danger.default,
            "--input-placeholder": semantic.text.muted || semantic.text.disabled,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: inputId,
                className: `input-field ${error ? "has-error" : ""}`,
                placeholder: " ",
                "aria-invalid": error,
                "aria-describedby": helperId,
                required: required,
                ...props
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Input/Input.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "input-label",
                style: {
                    color: error ? semantic.danger.default : undefined
                },
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "required-asterisk",
                        style: {
                            color: semantic.danger.default
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/Input/Input.tsx",
                        lineNumber: 90,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/Input/Input.tsx",
                lineNumber: 81,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            (error || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: helperId,
                className: "input-helper",
                role: error ? "alert" : undefined,
                style: {
                    display: "block",
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                    color: error ? semantic.danger.default : semantic.text.muted || semantic.text.disabled
                },
                children: error ? errorMessage : helperText
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Input/Input.tsx",
                lineNumber: 101,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/atoms/Input/Input.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Input, "P3bvVUypbBAHy0F8g4TFKgtieUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/Textarea/Textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Textarea = ({ label, error, errorMessage, helperText, id, className, required, rows = 1, style, ...props })=>{
    _s();
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const textareaId = id || generatedId;
    const helperId = helperText || errorMessage ? `${textareaId}-helper` : undefined;
    // Semantic Tokens
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `textarea-container ${className || ""}`,
        style: {
            position: "relative",
            marginBottom: 0,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            "--textarea-padding-x": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--textarea-padding-top": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--textarea-padding-bottom": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px`,
            "--textarea-radius": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md}px`,
            "--textarea-bg": semantic.surface.default,
            "--textarea-border": semantic.border.default,
            "--textarea-border-hover": semantic.border.active,
            "--textarea-border-focus": semantic.border.active,
            "--textarea-border-error": semantic.danger.default,
            "--textarea-text": semantic.text.active,
            "--textarea-label": semantic.text.default,
            "--textarea-label-focus": semantic.primary.default,
            "--textarea-label-error": semantic.danger.default,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: textareaId,
                className: `textarea-field ${error ? "has-error" : ""}`,
                placeholder: " ",
                "aria-invalid": error,
                "aria-describedby": helperId,
                required: required,
                rows: rows,
                ...props
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Textarea/Textarea.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: textareaId,
                className: "textarea-label",
                style: {
                    color: error ? semantic.danger.default : undefined
                },
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "textarea-required-asterisk",
                        style: {
                            color: semantic.danger.default
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/Textarea/Textarea.tsx",
                        lineNumber: 84,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/Textarea/Textarea.tsx",
                lineNumber: 75,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            (error || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: helperId,
                className: "textarea-helper",
                role: error ? "alert" : undefined,
                style: {
                    display: "block",
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                    color: error ? semantic.danger.default : semantic.text.disabled
                },
                children: error ? errorMessage : helperText
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Textarea/Textarea.tsx",
                lineNumber: 95,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/atoms/Textarea/Textarea.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Textarea, "P3bvVUypbBAHy0F8g4TFKgtieUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Textarea;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/SelectField/SelectField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectField",
    ()=>SelectField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SelectField = ({ label, value, placeholder = "Selecciona...", error, errorMessage, helperText, disabled, required, open, onClick, onFocus, onBlur, id })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasValue = !!value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "select-field-container",
        style: {
            position: "relative",
            marginBottom: 0,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            "--select-height": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48]}px`,
            "--select-padding-x": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--select-padding-top": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--select-padding-bottom": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px`,
            "--select-radius": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md}px`,
            "--select-bg": semantic.surface.default,
            "--select-border": semantic.border.default,
            "--select-border-hover": semantic.border.active,
            "--select-border-focus": semantic.border.active,
            "--select-border-error": semantic.danger.default,
            "--select-text": semantic.text.active,
            "--select-label": semantic.text.muted || semantic.text.default,
            "--select-label-focus": semantic.primary.default,
            "--select-label-error": semantic.danger.default,
            "--select-arrow": semantic.icon?.muted || semantic.text.muted || semantic.text.default
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: id,
                className: `select-field-box ${error ? "has-error" : ""} ${open ? "is-open" : ""}`,
                onClick: disabled ? undefined : onClick,
                onFocus: onFocus,
                onBlur: onBlur,
                tabIndex: disabled ? -1 : 0,
                role: "button",
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                "data-filled": hasValue,
                style: {
                    opacity: disabled ? 0.6 : 1,
                    cursor: disabled ? "not-allowed" : "pointer"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "select-field-value",
                        children: value || placeholder
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "select-field-arrow",
                        width: 20,
                        height: 20,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: {
                            transition: "transform 0.2s ease",
                            transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "6 9 12 15 18 9"
                        }, void 0, false, {
                            fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "select-field-label",
                style: {
                    color: error ? semantic.danger.default : undefined
                },
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "required-asterisk",
                        style: {
                            color: semantic.danger.default
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                        lineNumber: 124,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            (error || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "select-field-helper",
                role: error ? "alert" : undefined,
                style: {
                    display: "block",
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                    color: error ? semantic.danger.default : semantic.text.muted || semantic.text.disabled
                },
                children: error ? errorMessage : helperText
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                lineNumber: 133,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectField, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SelectField;
var _c;
__turbopack_context__.k.register(_c, "SelectField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectSingle",
    ()=>SelectSingle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$SelectField$2f$SelectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/SelectField/SelectField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SelectSingle = ({ label, options, value, defaultValue, onChange, error, errorMessage, helperText, disabled, required, id })=>{
    _s();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uncontrolledValue, setUncontrolledValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue || "");
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : uncontrolledValue;
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectSingle.useEffect": ()=>{
            if (!isOpen) return;
            const handleClickOutside = {
                "SelectSingle.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                        setHighlightedIndex(-1);
                    }
                }
            }["SelectSingle.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SelectSingle.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["SelectSingle.useEffect"];
        }
    }["SelectSingle.useEffect"], [
        isOpen
    ]);
    // Keyboard navigation
    const handleSelectOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectSingle.useCallback[handleSelectOption]": (optionValue)=>{
            if (!isControlled) {
                setUncontrolledValue(optionValue);
            }
            setIsOpen(false);
            setHighlightedIndex(-1);
            if (onChange) {
                onChange(optionValue);
            }
        }
    }["SelectSingle.useCallback[handleSelectOption]"], [
        onChange,
        isControlled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectSingle.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "SelectSingle.useEffect.handleKeyDown": (event)=>{
                    switch(event.key){
                        case "Escape":
                            event.preventDefault();
                            setIsOpen(false);
                            setHighlightedIndex(-1);
                            break;
                        case "ArrowDown":
                            event.preventDefault();
                            setHighlightedIndex({
                                "SelectSingle.useEffect.handleKeyDown": (prev)=>prev < options.length - 1 ? prev + 1 : prev
                            }["SelectSingle.useEffect.handleKeyDown"]);
                            break;
                        case "ArrowUp":
                            event.preventDefault();
                            setHighlightedIndex({
                                "SelectSingle.useEffect.handleKeyDown": (prev)=>prev > 0 ? prev - 1 : 0
                            }["SelectSingle.useEffect.handleKeyDown"]);
                            break;
                        case "Enter":
                            event.preventDefault();
                            if (highlightedIndex >= 0 && highlightedIndex < options.length) {
                                handleSelectOption(options[highlightedIndex].value);
                            }
                            break;
                    }
                }
            }["SelectSingle.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "SelectSingle.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["SelectSingle.useEffect"];
        }
    }["SelectSingle.useEffect"], [
        isOpen,
        highlightedIndex,
        options,
        handleSelectOption
    ]);
    // Scroll highlighted option into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectSingle.useEffect": ()=>{
            if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
                const highlightedElement = dropdownRef.current.children[highlightedIndex];
                if (highlightedElement) {
                    highlightedElement.scrollIntoView({
                        block: "nearest",
                        behavior: "smooth"
                    });
                }
            }
        }
    }["SelectSingle.useEffect"], [
        highlightedIndex,
        isOpen
    ]);
    const handleToggle = ()=>{
        if (disabled) return;
        setIsOpen(!isOpen);
        if (!isOpen) {
            const selectedIndex = options.findIndex((opt)=>opt.value === selectedValue);
            setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
        }
    };
    // Get display label for selected value
    const selectedOption = options.find((opt)=>opt.value === selectedValue);
    const displayValue = selectedOption ? selectedOption.label : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "select-single-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$SelectField$2f$SelectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectField"], {
                id: id,
                label: label,
                value: displayValue,
                placeholder: "Selecciona...",
                error: error,
                errorMessage: errorMessage,
                helperText: helperText,
                disabled: disabled,
                required: required,
                open: isOpen,
                onClick: handleToggle
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingSurface"], {
                className: "select-dropdown",
                role: "listbox",
                style: {
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: dropdownRef,
                    className: "floating-scroll",
                    style: {
                        maxHeight: "200px",
                        overflowY: "auto"
                    },
                    children: options.map((option, index)=>{
                        const isSelected = option.value === selectedValue;
                        const isHighlighted = index === highlightedIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `select-option ${isSelected ? "is-selected" : ""} ${isHighlighted ? "is-highlighted" : ""}`,
                            role: "option",
                            "aria-selected": isSelected,
                            onClick: ()=>handleSelectOption(option.value),
                            onMouseEnter: ()=>setHighlightedIndex(index),
                            style: {
                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                backgroundColor: isSelected ? semantic.surface.selected : isHighlighted ? semantic.surface.active : "transparent",
                                color: isSelected ? semantic.primary.default : semantic.text.active,
                                transition: "background-color 0.15s ease"
                            },
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx",
                            lineNumber: 187,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx",
                    lineNumber: 172,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx",
                lineNumber: 160,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx",
        lineNumber: 143,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectSingle, "MrTZyxdI18Ljh+LCcSfM9I6kmKM=");
_c = SelectSingle;
var _c;
__turbopack_context__.k.register(_c, "SelectSingle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/patterns/form/FormLayout.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "formCol": "FormLayout-module__wYnP4W__formCol",
  "formColumnGrid": "FormLayout-module__wYnP4W__formColumnGrid",
  "layoutGrid": "FormLayout-module__wYnP4W__layoutGrid",
  "visualCol": "FormLayout-module__wYnP4W__visualCol",
});
}),
"[project]/packages/console/ui/patterns/form/FormLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormLayout",
    ()=>FormLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/console/ui/patterns/form/FormLayout.module.css [app-client] (css module)"); // Reuse existing styles
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
;
;
;
const FormLayout = ({ leftSlot, children, footer, className, style })=>{
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layoutGrid} ${className || ""}`,
        style: {
            gap: 0,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualCol,
                style: {
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    borderRight: `1px solid ${semantic.border.default}`
                },
                children: leftSlot
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/patterns/form/FormLayout.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formCol,
                style: {
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formColumnGrid,
                        style: {
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/patterns/form/FormLayout.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    footer
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/patterns/form/FormLayout.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/patterns/form/FormLayout.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormLayout;
var _c;
__turbopack_context__.k.register(_c, "FormLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/patterns/form/FormActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormActions",
    ()=>FormActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
/** Opacity applied to interactive elements during loading state */ const LOADING_OPACITY = 0.6;
const FormActions = ({ error, success, loading = false, disabled = false, mode, onCancel, onSubmit, cancelLabel = "Cancelar", submitLabel })=>{
    const isDisabled = disabled || loading;
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            borderTop: `1px solid ${semantic.border.default}`,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            alignItems: "flex-end"
        },
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: semantic.danger.default,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !error && success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: semantic.success.default,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                },
                children: success
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        size: "sm",
                        onClick: onCancel,
                        disabled: isDisabled,
                        style: {
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].xl,
                            opacity: isDisabled ? LOADING_OPACITY : 1
                        },
                        children: cancelLabel
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "actionPrimary",
                        size: "sm",
                        onClick: onSubmit,
                        disabled: isDisabled,
                        style: {
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].xl,
                            opacity: isDisabled ? LOADING_OPACITY : 1
                        },
                        children: loading ? "Guardando..." : submitLabel ?? (mode === "create" ? "Guardar" : "Guardar Cambios")
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/patterns/form/FormActions.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormActions;
var _c;
__turbopack_context__.k.register(_c, "FormActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceForm",
    ()=>DeviceForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Textarea$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Textarea/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/patterns/form/FormLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/patterns/form/FormActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const DeviceForm = ({ mode, initialValues, onCancel, onSubmit, loading = false, error })=>{
    _s();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    // Form State
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.nombre || "");
    const [departamento, setDepartamento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.departamento || "");
    const [tipo, setTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.tipo || "");
    const [estadoInicial, setEstadoInicial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.estadoInicial || "Activo");
    const [usuarioAsignado, setUsuarioAsignado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.usuarioAsignado || "");
    const [ubicacion, setUbicacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.ubicacion || "");
    const [notas, setNotas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.notas || "");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceForm.useEffect": ()=>{
            if (mode === "edit" && initialValues) {
                const timer = setTimeout({
                    "DeviceForm.useEffect.timer": ()=>{
                        if (nombre !== initialValues.nombre) setNombre(initialValues.nombre || "");
                        if (departamento !== initialValues.departamento) setDepartamento(initialValues.departamento || "");
                        if (tipo !== initialValues.tipo) setTipo(initialValues.tipo || "");
                        if (estadoInicial !== initialValues.estadoInicial) setEstadoInicial(initialValues.estadoInicial || "Activo");
                        if (usuarioAsignado !== initialValues.usuarioAsignado) setUsuarioAsignado(initialValues.usuarioAsignado || "");
                        if (ubicacion !== initialValues.ubicacion) setUbicacion(initialValues.ubicacion || "");
                        if (notas !== initialValues.notas) setNotas(initialValues.notas || "");
                    }
                }["DeviceForm.useEffect.timer"], 0);
                return ({
                    "DeviceForm.useEffect": ()=>clearTimeout(timer)
                })["DeviceForm.useEffect"];
            }
        }
    }["DeviceForm.useEffect"], [
        mode,
        initialValues,
        nombre,
        departamento,
        tipo,
        estadoInicial,
        usuarioAsignado,
        ubicacion,
        notas
    ]);
    const clearError = (field)=>{
        if (errors[field]) {
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[field];
                return newErrors;
            });
        }
    };
    const handleSubmit = ()=>{
        const newErrors = {};
        // Validations
        if (!nombre.trim()) newErrors.nombre = "Este campo es obligatorio";
        if (!departamento) newErrors.departamento = "Este campo es obligatorio";
        if (!tipo) newErrors.tipo = "Este campo es obligatorio";
        if (!ubicacion) newErrors.ubicacion = "Este campo es obligatorio";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit({
            nombre,
            departamento,
            tipo,
            estadoInicial,
            usuarioAsignado,
            ubicacion,
            notas
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLayout"], {
                leftSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                border: `1px dashed ${semantic.border.active}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: semantic.text.disabled,
                                backgroundColor: "transparent"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "monitor",
                                size: 56
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 115,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                            lineNumber: 102,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                color: semantic.text.disabled
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                                },
                                children: "Icono del dispositivo"
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                label: "Nombre / Etiqueta",
                                required: true,
                                value: nombre,
                                onChange: (e)=>{
                                    setNombre(e.target.value);
                                    clearError("nombre");
                                },
                                error: !!errors.nombre,
                                errorMessage: errors.nombre
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                label: "Departamento",
                                required: true,
                                value: departamento,
                                onChange: (value)=>{
                                    setDepartamento(value);
                                    clearError("departamento");
                                },
                                error: !!errors.departamento,
                                errorMessage: errors.departamento,
                                options: [
                                    {
                                        value: "TI",
                                        label: "Tecnología"
                                    },
                                    {
                                        value: "Finanzas",
                                        label: "Finanzas"
                                    },
                                    {
                                        value: "Operaciones",
                                        label: "Operaciones"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                label: "Tipo de dispositivo",
                                required: true,
                                value: tipo,
                                onChange: (value)=>{
                                    setTipo(value);
                                    clearError("tipo");
                                },
                                error: !!errors.tipo,
                                errorMessage: errors.tipo,
                                options: [
                                    {
                                        value: "Laptop",
                                        label: "Laptop"
                                    },
                                    {
                                        value: "Desktop",
                                        label: "Desktop"
                                    },
                                    {
                                        value: "Tablet",
                                        label: "Tablet"
                                    },
                                    {
                                        value: "Smartphone",
                                        label: "Smartphone"
                                    },
                                    {
                                        value: "Monitor",
                                        label: "Monitor"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                label: "Estado inicial",
                                value: estadoInicial,
                                onChange: (value)=>setEstadoInicial(value),
                                options: [
                                    {
                                        value: "Activo",
                                        label: "Activo"
                                    },
                                    {
                                        value: "Inactivo",
                                        label: "Inactivo"
                                    },
                                    {
                                        value: "Mantenimiento",
                                        label: "En Mantenimiento"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                label: "Usuario asignado",
                                value: usuarioAsignado,
                                onChange: (value)=>setUsuarioAsignado(value),
                                options: [
                                    {
                                        value: "",
                                        label: "Ninguno"
                                    },
                                    {
                                        value: "Ana Perez",
                                        label: "Ana Perez"
                                    },
                                    {
                                        value: "Juan Lopez",
                                        label: "Juan Lopez"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                label: "Ubicación",
                                required: true,
                                value: ubicacion,
                                onChange: (value)=>{
                                    setUbicacion(value);
                                    clearError("ubicacion");
                                },
                                error: !!errors.ubicacion,
                                errorMessage: errors.ubicacion,
                                options: [
                                    {
                                        value: "Oficina Central",
                                        label: "Oficina Central"
                                    },
                                    {
                                        value: "Remoto",
                                        label: "Remoto"
                                    },
                                    {
                                        value: "Almacén",
                                        label: "Almacén"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Textarea$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                label: "Notas",
                                value: notas,
                                onChange: (e)=>setNotas(e.target.value),
                                rows: 2
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$patterns$2f$form$2f$FormActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormActions"], {
                error: error,
                loading: loading,
                mode: mode,
                onCancel: onCancel,
                onSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx",
                lineNumber: 227,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(DeviceForm, "amzca5lCjZmLcEV9tZviMWTUd0A=");
_c = DeviceForm;
var _c;
__turbopack_context__.k.register(_c, "DeviceForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/devices/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateDevicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/toast/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$connector$2f$errorNormalizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/connector/errorNormalizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$errorToastHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/toast/errorToastHelper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/Card/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$devices$2f$components$2f$DeviceForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/devices/components/DeviceForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CreateDevicePage() {
    _s();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic; // Changed from colors.dark.semantic to colors.semantic as per task 1
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalError, setGlobalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (formData)=>{
        setGlobalError("");
        setLoading(true);
        try {
            // Mock submission for now
            console.log("Submitting Device Data:", formData);
            // Simulate API delay
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            // Success redirect
            router.push("/devices/list");
        } catch (err) {
            const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$connector$2f$errorNormalizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeConnectorError"])(err);
            const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$errorToastHelper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedErrorToToast"])(normalized);
            showToast(toast);
            setGlobalError(err instanceof Error ? err.message : "Error al crear dispositivo");
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
        title: "Agregar dispositivo",
        breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Panel"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                    lineNumber: 49,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "›"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                    lineNumber: 50,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Dispositivos"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "›"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                    lineNumber: 52,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: semantic.text.active
                    },
                    children: "Agregar"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                    lineNumber: 53,
                    columnNumber: 21
                }, void 0)
            ]
        }, void 0, true),
        headerStyle: {
            borderBottom: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            noPadding: true,
            elevated: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$devices$2f$components$2f$DeviceForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceForm"], {
                mode: "create",
                onSubmit: handleSubmit,
                onCancel: ()=>router.push("/devices/list"),
                loading: loading,
                error: globalError
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
            lineNumber: 58,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/devices/create/page.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(CreateDevicePage, "9nsfGYZObKJVKEoyRr8pVejGCD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateDevicePage;
var _c;
__turbopack_context__.k.register(_c, "CreateDevicePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3eba64ad._.js.map