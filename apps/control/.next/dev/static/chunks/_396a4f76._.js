(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"].pageHeaderToContentSpacing,
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
"[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardHeader",
    ()=>PanelCardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PanelCardHeader = ({ title, description, headerStart, tabs, actions })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasContent = title || description || headerStart || tabs || actions;
    if (!hasContent) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingBottom: tabs ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][0] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            borderBottom: tabs ? undefined : `1px solid ${semantic.border.subtle || semantic.border.default}`
        },
        children: [
            (title || description || headerStart || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            headerStart,
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                    color: semantic.text.active,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    marginTop: title ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4] : 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    color: semantic.text.muted,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary
                                },
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flexShrink: 0
                        },
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                        lineNumber: 76,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            tabs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: title || description || headerStart || actions ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12] : 0,
                    marginLeft: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    marginRight: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                        },
                        children: tabs
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            backgroundColor: semantic.border.subtle || semantic.border.default,
                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PanelCardHeader, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = PanelCardHeader;
var _c;
__turbopack_context__.k.register(_c, "PanelCardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardBody",
    ()=>PanelCardBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
"use client";
;
;
;
const PanelCardBody = ({ children, style: customStyle })=>{
    const baseStyle = {
        flex: 1,
        overflowY: "auto",
        minHeight: 0,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card-body-scroll",
        style: {
            ...baseStyle,
            ...customStyle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PanelCardBody;
var _c;
__turbopack_context__.k.register(_c, "PanelCardBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/Spinner/Spinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Spinner = ({ size = 24, color })=>{
    _s();
    // We use useContext directly to avoid useTheme() throwing if Provider is missing
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const theme = themeContext?.theme || "light";
    // Fallback to global semantic tokens if theme is not found in tokens
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme]?.semantic || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].semantic;
    const effectiveColor = color || semantic.primary.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "inline-block",
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/atoms/Spinner/Spinner.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    animation: "spin 1s linear infinite"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: effectiveColor,
                        strokeWidth: "3",
                        strokeOpacity: "0.25"
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/Spinner/Spinner.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12",
                        stroke: effectiveColor,
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/Spinner/Spinner.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/Spinner/Spinner.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/atoms/Spinner/Spinner.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Spinner, "Y26/CnccTa0PRifJ8EfxHm0U6Rk=");
_c = Spinner;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardFooter",
    ()=>PanelCardFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Spinner$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Spinner/Spinner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/** Variants, size y shape oficiales del Design System para panel footers. Igual que FormActions. NO cambiar. */ const FOOTER_BUTTON_SIZE = "sm";
const PanelCardFooter = ({ primaryLabel, primaryOnClick, primaryLoading = false, primaryDisabled = false, secondaryLabel, secondaryOnClick, secondaryDisabled = false, dangerLabel, dangerOnClick, dangerDisabled = false, status })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasDanger = Boolean(dangerLabel && dangerOnClick);
    const hasLeft = hasDanger || status;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            flexShrink: 0,
            borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
            display: "flex",
            alignItems: "center",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            justifyContent: hasLeft ? "space-between" : "flex-end",
            flexWrap: "wrap"
        },
        children: [
            hasLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    hasDanger && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "error",
                        size: FOOTER_BUTTON_SIZE,
                        shape: "panel",
                        onClick: dangerOnClick,
                        disabled: dangerDisabled,
                        children: dangerLabel
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                        lineNumber: 53,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    status
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        size: FOOTER_BUTTON_SIZE,
                        shape: "panel",
                        onClick: secondaryOnClick,
                        disabled: secondaryDisabled || primaryLoading,
                        children: secondaryLabel
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "actionPrimary",
                        size: FOOTER_BUTTON_SIZE,
                        shape: "panel",
                        onClick: primaryOnClick,
                        disabled: primaryDisabled,
                        children: primaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Spinner$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Guardando..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                            lineNumber: 84,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : primaryLabel
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PanelCardFooter, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = PanelCardFooter;
var _c;
__turbopack_context__.k.register(_c, "PanelCardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCard",
    ()=>PanelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PanelCard = ({ bodyStyle, title, description, headerStart, headerActions, tabs, children, footer })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            backgroundColor: semantic.surface.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            overflow: "hidden",
            fontFamily: "inherit"
        },
        "aria-label": title ?? "Panel",
        children: [
            (title || description || headerStart || tabs || headerActions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelCardHeader"], {
                title: title,
                description: description,
                headerStart: headerStart,
                tabs: tabs,
                actions: headerActions
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 46,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelCardBody"], {
                style: bodyStyle,
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            footer != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelCardFooter"], {
                ...footer
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 57,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PanelCard, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = PanelCard;
var _c;
__turbopack_context__.k.register(_c, "PanelCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/containers/PanelCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-client] (ecmascript)");
;
;
;
;
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
"use client";
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
                        lineNumber: 92,
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
                            lineNumber: 112,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                lineNumber: 75,
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
                        lineNumber: 126,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                lineNumber: 118,
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
                lineNumber: 135,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
        lineNumber: 45,
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
"[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecondaryNavSidebar",
    ()=>SecondaryNavSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ITEM_HEIGHT = 34;
const COLLAPSE_BUTTON_SIZE = 36;
const CHEVRON_ICON_SIZE = 18;
const ITEM_PADDING_HORIZONTAL = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4];
const groupTitleStyle = (semantic, isFirst)=>({
        textTransform: "uppercase",
        color: semantic.sidebar?.groupLabel ?? semantic.text.muted ?? semantic.text.disabled,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
        marginTop: isFirst ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
        paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
        letterSpacing: "0.05em",
        opacity: 0.8
    });
const SecondaryNavSidebar = ({ items = [], groups, value, onChange, collapsed = false, onCollapsedChange, ariaLabel = "Subsecciones" })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [hoveredValue, setHoveredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const resolvedGroups = groups ?? (items.length > 0 ? [
        {
            title: "",
            items
        }
    ] : []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .secondary-nav-sidebar-scroll::-webkit-scrollbar {
                    display: none;
                }
            `
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                style: {
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    padding: collapsed ? `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}`,
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: 0,
                    overflowY: "auto",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    minWidth: 0,
                    transition: "padding 0.25s ease"
                },
                className: "secondary-nav-sidebar-scroll",
                "aria-label": ariaLabel,
                children: [
                    onCollapsedChange != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: collapsed ? "center" : "flex-end",
                            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingBottom: 0,
                            marginBottom: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onCollapsedChange(!collapsed),
                            "aria-label": collapsed ? "Expandir sidebar" : "Colapsar sidebar",
                            "aria-expanded": !collapsed,
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: COLLAPSE_BUTTON_SIZE,
                                height: COLLAPSE_BUTTON_SIZE,
                                padding: 0,
                                border: "none",
                                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                                backgroundColor: "transparent",
                                color: semantic.text.muted ?? semantic.text.default,
                                cursor: "pointer",
                                transition: "background-color 0.2s ease, color 0.2s ease"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.backgroundColor = semantic.surface.hover;
                                e.currentTarget.style.color = semantic.text.hover;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = semantic.text.muted ?? semantic.text.default;
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                size: CHEVRON_ICON_SIZE,
                                name: collapsed ? "chevron-right" : "chevron-left",
                                title: collapsed ? "Expandir" : "Colapsar"
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                lineNumber: 140,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    resolvedGroups.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: groupIndex < resolvedGroups.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8] : 0
                            },
                            children: [
                                group.title.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...groupTitleStyle(semantic, groupIndex === 0),
                                        ...collapsed ? {
                                            position: "relative"
                                        } : {}
                                    },
                                    "aria-hidden": collapsed,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: collapsed ? {
                                                opacity: 0,
                                                display: "block"
                                            } : undefined,
                                            children: group.title
                                        }, void 0, false, {
                                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: 3,
                                                left: 0,
                                                right: 0,
                                                height: 1,
                                                backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                                pointerEvents: "none"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                            lineNumber: 162,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0,
                                        cursor: "default"
                                    },
                                    children: group.items.map((item)=>{
                                        const isActive = value === item.value;
                                        const isHovered = hoveredValue === item.value && !item.disabled;
                                        const isDisabled = Boolean(item.disabled);
                                        const showSelected = isActive;
                                        const showHover = isHovered && !showSelected;
                                        const bg = showSelected ? semantic.surface.selected : showHover ? semantic.surface.hover : "transparent";
                                        const fg = showSelected ? semantic.primary.default : showHover ? semantic.text.hover : semantic.text.default;
                                        const iconColor = fg;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isDisabled,
                                            "aria-pressed": isActive,
                                            onClick: ()=>!isDisabled && onChange(item.value),
                                            onMouseEnter: ()=>setHoveredValue(item.value),
                                            onMouseLeave: ()=>setHoveredValue(null),
                                            style: {
                                                padding: 0,
                                                paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                                                paddingLeft: ITEM_PADDING_HORIZONTAL,
                                                paddingRight: ITEM_PADDING_HORIZONTAL,
                                                margin: 0,
                                                border: "none",
                                                background: "none",
                                                cursor: isDisabled ? "not-allowed" : "pointer",
                                                width: "100%",
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                                textAlign: "left"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    height: ITEM_HEIGHT,
                                                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                                                    backgroundColor: bg,
                                                    color: fg,
                                                    opacity: isDisabled ? 0.5 : 1,
                                                    transition: "background-color 0.2s ease, color 0.2s ease"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: collapsed ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                                                        minWidth: 0,
                                                        justifyContent: collapsed ? "center" : "flex-start"
                                                    },
                                                    children: [
                                                        item.icon != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                flexShrink: 0,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                                                size: 16,
                                                                name: item.icon,
                                                                title: item.label,
                                                                color: iconColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
                                                                color: "inherit",
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap"
                                                            },
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                                lineNumber: 214,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, item.value, false, {
                                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                            lineNumber: 191,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                                    lineNumber: 177,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, group.title || groupIndex, true, {
                            fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(SecondaryNavSidebar, "GpmuWMj4xNVY1LNaO+ZKNUmv2Fo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SecondaryNavSidebar;
var _c;
__turbopack_context__.k.register(_c, "SecondaryNavSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/SecondaryNavSidebar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECONDARY_NAV_SIDEBAR_WIDTH",
    ()=>SECONDARY_NAV_SIDEBAR_WIDTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-client] (ecmascript)");
;
const SECONDARY_NAV_SIDEBAR_WIDTH = {
    collapsed: 52,
    expanded: 176
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionTabs",
    ()=>SectionTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SectionTabs = ({ items, activeValue, onChange, ariaLabel = "Subsecciones", className, style })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const tabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [underlineStyle, setUnderlineStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        width: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionTabs.useEffect": ()=>{
            const id = requestAnimationFrame({
                "SectionTabs.useEffect.id": ()=>{
                    const activeIndex = items.findIndex({
                        "SectionTabs.useEffect.id.activeIndex": (item)=>item.value === activeValue
                    }["SectionTabs.useEffect.id.activeIndex"]);
                    const currentTab = tabsRef.current[activeIndex];
                    if (currentTab) {
                        setUnderlineStyle({
                            left: currentTab.offsetLeft,
                            width: currentTab.offsetWidth
                        });
                    }
                }
            }["SectionTabs.useEffect.id"]);
            return ({
                "SectionTabs.useEffect": ()=>cancelAnimationFrame(id)
            })["SectionTabs.useEffect"];
        }
    }["SectionTabs.useEffect"], [
        activeValue,
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `section-tabs-scroll ${className ?? ""}`.trim(),
        style: {
            display: "flex",
            width: "100%",
            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48],
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .section-tabs-scroll::-webkit-scrollbar { display: none; }
            `
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": ariaLabel,
                style: {
                    display: "flex",
                    height: "100%",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    position: "relative",
                    flex: "0 0 auto",
                    minWidth: "min-content"
                },
                children: [
                    items.map((item, index)=>{
                        const isActive = activeValue === item.value;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: (el)=>{
                                tabsRef.current[index] = el;
                            },
                            type: "button",
                            role: "tab",
                            "aria-selected": isActive,
                            onClick: ()=>onChange(item.value),
                            style: {
                                cursor: "pointer",
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                                paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48],
                                display: "flex",
                                alignItems: "center",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                color: isActive ? semantic.text.active : semantic.text.muted,
                                backgroundColor: "transparent",
                                border: "none",
                                transition: "all 0.2s ease",
                                position: "relative"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    lineHeight: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]}px`
                                },
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                                lineNumber: 105,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.value, false, {
                            fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                            height: 2,
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                            backgroundColor: semantic.text.active,
                            transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            pointerEvents: "none",
                            zIndex: 1
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SectionTabs, "d0ALtQyiLG9M2i/DfeQtfMM2TR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SectionTabs;
var _c;
__turbopack_context__.k.register(_c, "SectionTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionIcon",
    ()=>ActionIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ActionIcon = ({ name, onClick, label, size = 16, color, hoverColor, isActive = false })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const effectiveColor = color || semantic.icon?.muted || semantic.text.muted || semantic.text.default;
    const effectiveHoverColor = hoverColor ?? semantic.icon?.active ?? semantic.text.hover;
    const showActive = isHovered || isActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        role: "button",
        "aria-label": label,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            cursor: "pointer",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
            backgroundColor: showActive ? semantic.surface.hoverElevated ?? semantic.surface.hover : "transparent",
            transition: "all 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: showActive ? effectiveHoverColor : effectiveColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
            name: name,
            size: size,
            color: "currentColor"
        }, void 0, false, {
            fileName: "[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ActionIcon, "kf0cEqXbC4v64QhXzEvMTKVpi+A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ActionIcon;
var _c;
__turbopack_context__.k.register(_c, "ActionIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/shadows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GAP = 8;
function Tooltip({ content, children, placement = "top", delayMs = 150 }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const updatePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[updatePosition]": ()=>{
            const trigger = triggerRef.current;
            const tooltip = tooltipRef.current;
            if (!trigger || !tooltip || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const triggerRect = trigger.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const left = Math.max(GAP, Math.min(triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2, window.innerWidth - tooltipRect.width - GAP));
            const top = placement === "top" ? triggerRect.top - tooltipRect.height - GAP : triggerRect.bottom + GAP;
            setPos({
                top,
                left
            });
        }
    }["Tooltip.useCallback[updatePosition]"], [
        placement
    ]);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[show]": ()=>{
            timeoutRef.current = setTimeout({
                "Tooltip.useCallback[show]": ()=>{
                    setVisible(true);
                }
            }["Tooltip.useCallback[show]"], delayMs);
        }
    }["Tooltip.useCallback[show]"], [
        delayMs
    ]);
    const hide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Tooltip.useCallback[hide]": ()=>{
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setVisible(false);
        }
    }["Tooltip.useCallback[hide]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Tooltip.useLayoutEffect": ()=>{
            if (visible) {
                updatePosition();
            }
        }
    }["Tooltip.useLayoutEffect"], [
        visible,
        updatePosition
    ]);
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
        ref: (el)=>{
            triggerRef.current = el;
            const originalRef = children.ref;
            if (typeof originalRef === "function") originalRef(el);
            else if (originalRef) originalRef.current = el;
        },
        onMouseEnter: (e)=>{
            show();
            children.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e)=>{
            hide();
            children.props.onMouseLeave?.(e);
        }
    });
    const tooltipEl = visible && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: tooltipRef,
        role: "tooltip",
        onMouseEnter: show,
        onMouseLeave: hide,
        style: {
            position: "fixed",
            top: pos.top,
            left: pos.left,
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
            backgroundColor: semantic.surface.default,
            color: semantic.text.default,
            border: `1px solid ${semantic.border.default}`,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"].dropdown,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
            whiteSpace: "nowrap",
            maxWidth: 280,
            overflow: "hidden",
            textOverflow: "ellipsis",
            zIndex: 9999,
            pointerEvents: "none"
        },
        children: content
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx",
        lineNumber: 87,
        columnNumber: 13
    }, this), document.body);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            child,
            tooltipEl
        ]
    }, void 0, true);
}
_s(Tooltip, "twKwOHqaJzDtdMw+70B/W2C+nvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Tooltip;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/console/ui/atoms/Tooltip/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
;
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
"[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDeniedState",
    ()=>AccessDeniedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const AccessDeniedState = ({ title = "Sin acceso", description = "No tienes permisos para ver este contenido. Contacta a tu administrador si crees que esto es un error.", action })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48],
            textAlign: "center",
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            width: "100%",
            height: "100%",
            minHeight: 200
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "lock",
                    size: 48,
                    color: semantic.warning.default
                }, void 0, false, {
                    fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: 0,
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: semantic.warning.default
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0,
                    marginBottom: action ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24] : 0,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                    color: semantic.text.disabled,
                    maxWidth: 400
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: action
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 60,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccessDeniedState, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AccessDeniedState;
var _c;
__turbopack_context__.k.register(_c, "AccessDeniedState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceSectionLayout",
    ()=>AppearanceSectionLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
"use client";
;
;
const AppearanceSectionLayout = ({ headerContent, headerVariant, borderColor, children })=>{
    const headerInner = headerVariant === "title" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48],
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
        },
        children: headerContent
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
        lineNumber: 31,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)) : headerContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    flexShrink: 0,
                    position: "relative",
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 1,
                            width: "100%",
                            backgroundColor: borderColor
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    headerInner
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "base-section-scroll",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    minHeight: 0,
                    flex: 1,
                    overflow: "auto",
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        minHeight: 0,
                        paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                        paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24]
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = AppearanceSectionLayout;
var _c;
__turbopack_context__.k.register(_c, "AppearanceSectionLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigCard",
    ()=>AppearanceConfigCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AppearanceConfigCard = ({ title, titleAction, children, footer })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 0,
            flex: 1,
            minHeight: 0,
            backgroundColor: semantic?.surface?.card ?? semantic?.surface?.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            border: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingBottom: 0,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: [
                    titleAction,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0,
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            color: semantic?.text?.default
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 0
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            footer != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    marginLeft: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    marginRight: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    borderTop: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    justifyContent: "flex-end",
                    flexWrap: "wrap"
                },
                children: footer
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppearanceConfigCard, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AppearanceConfigCard;
var _c;
__turbopack_context__.k.register(_c, "AppearanceConfigCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigRow",
    ()=>AppearanceConfigRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AppearanceConfigRow = ({ label, swatchColor, valueDisplay, editControl, isExpanded, onToggle, expandedContent })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [chevronHovered, setChevronHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderBottom: borderColor ? `1px solid ${borderColor}` : undefined
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "button",
                tabIndex: 0,
                onClick: onToggle,
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle();
                    }
                },
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    width: "100%",
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px 0`,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                },
                "aria-expanded": isExpanded,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][32],
                            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][32],
                            flexShrink: 0,
                            borderRadius: "50%",
                            border: `1px solid ${borderColor}`,
                            backgroundColor: swatchColor || semantic?.surface?.default
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                    color: semantic?.text?.default
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "block",
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    color: semantic?.text?.muted,
                                    marginTop: 2
                                },
                                children: valueDisplay
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>e.stopPropagation(),
                                children: editControl
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onToggle();
                                },
                                onMouseEnter: ()=>setChevronHovered(true),
                                onMouseLeave: ()=>setChevronHovered(false),
                                "aria-expanded": isExpanded,
                                "aria-label": isExpanded ? "Contraer" : "Expandir",
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                                    minWidth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][32],
                                    minHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][32],
                                    background: chevronHovered ? semantic?.surface?.hoverElevated ?? semantic?.surface?.hover ?? "transparent" : "transparent",
                                    border: "none",
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                                    cursor: "pointer",
                                    color: chevronHovered ? iconHover : iconDefault,
                                    transition: "background-color 0.2s ease, color 0.2s ease"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "flex",
                                        transform: isExpanded ? "rotate(180deg)" : "none",
                                        transition: "transform 0.2s ease"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-down",
                                        size: 16,
                                        color: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            expandedContent != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflow: "hidden",
                    maxHeight: isExpanded ? 400 : 0,
                    opacity: isExpanded ? 1 : 0,
                    transition: "max-height 220ms ease-out, opacity 200ms ease-out"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                        paddingTop: 0,
                        paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                    },
                    children: expandedContent
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppearanceConfigRow, "DH8wD+TWxzz1PRnpbQuybjg+ab4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AppearanceConfigRow;
var _c;
__turbopack_context__.k.register(_c, "AppearanceConfigRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigUsage",
    ()=>AppearanceConfigUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AppearanceConfigUsage = ({ usage })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
            backgroundColor: semantic?.surface?.hover ?? semantic?.surface?.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: semantic?.text?.muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                },
                children: "Dónde se usa"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    margin: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px 0 0`,
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
                },
                children: usage.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            color: semantic?.text?.default
                        },
                        children: item
                    }, item, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppearanceConfigUsage, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AppearanceConfigUsage;
var _c;
__turbopack_context__.k.register(_c, "AppearanceConfigUsage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigGrid",
    ()=>AppearanceConfigGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
"use client";
;
;
const AppearanceConfigGrid = ({ children, minColumnWidth = 300 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            width: "100%"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppearanceConfigGrid;
var _c;
__turbopack_context__.k.register(_c, "AppearanceConfigGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/componentTokenOptions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Token options for component overrides.
 * Solo referencias a tokens existentes (base + estados).
 * NO crea tokens nuevos.
 */ __turbopack_context__.s([
    "COMPONENT_TOKEN_OPTIONS",
    ()=>COMPONENT_TOKEN_OPTIONS,
    "TOKEN_ALLOWLIST_BY_PROPERTY",
    ()=>TOKEN_ALLOWLIST_BY_PROPERTY,
    "getTokenOptionsForProperty",
    ()=>getTokenOptionsForProperty,
    "resolveTokenPath",
    ()=>resolveTokenPath
]);
const TOKEN_ALLOWLIST_BY_PROPERTY = {
    // Buttons - solo tokens compatibles por categoría
    background: [
        "primary.default",
        "primary.hover",
        "primary.disabled",
        "surface.default",
        "surface.hover",
        "surface.selected",
        "surface.disabled",
        "background.default"
    ],
    textColor: [
        "text.default",
        "text.muted",
        "text.onSolid",
        "text.disabled"
    ],
    borderColor: [
        "border.default",
        "border.subtle",
        "border.focus",
        "border.disabled"
    ],
    hoverBackground: [
        "primary.hover",
        "surface.hover",
        "surface.selected"
    ],
    // Inputs
    focusRing: [
        "border.focus",
        "primary.default",
        "danger.default",
        "border.subtle"
    ],
    placeholderColor: [
        "text.muted",
        "text.disabled"
    ],
    // Tabs
    activeColor: [
        "text.active",
        "primary.default",
        "surface.selected"
    ],
    inactiveColor: [
        "text.muted",
        "text.default"
    ],
    hoverColor: [
        "text.hover",
        "surface.hover",
        "surface.default"
    ],
    // Cards / Tables
    headerBackground: [
        "surface.default",
        "surface.hover",
        "surface.card",
        "elevated.default"
    ],
    rowHoverColor: [
        "surface.hover",
        "surface.selected"
    ],
    rowDensity: [
        "surface.default",
        "surface.hover"
    ],
    paddingDensity: [
        "surface.default",
        "surface.hover"
    ]
};
function getTokenOptionsForProperty(propertyKey, allOptions, currentValue) {
    const allowed = TOKEN_ALLOWLIST_BY_PROPERTY[propertyKey];
    if (!allowed || allowed.length === 0) return allOptions;
    const allowedSet = new Set(allowed);
    const filtered = allOptions.filter((opt)=>allowedSet.has(opt.value));
    if (currentValue && !allowedSet.has(currentValue)) {
        const currentOpt = allOptions.find((o)=>o.value === currentValue);
        if (currentOpt) return [
            currentOpt,
            ...filtered
        ];
    }
    return filtered;
}
/** Rutas de tokens semánticos disponibles para mapeo de componentes */ const SEMANTIC_TOKEN_PATHS = [
    {
        path: "primary.default",
        label: "Acento (primary)"
    },
    {
        path: "primary.hover",
        label: "Acento hover"
    },
    {
        path: "primary.disabled",
        label: "Acento disabled"
    },
    {
        path: "surface.default",
        label: "Superficie"
    },
    {
        path: "surface.hover",
        label: "Superficie hover"
    },
    {
        path: "surface.card",
        label: "Superficie card"
    },
    {
        path: "surface.selected",
        label: "Superficie seleccionada"
    },
    {
        path: "surface.disabled",
        label: "Superficie disabled"
    },
    {
        path: "background.default",
        label: "Fondo"
    },
    {
        path: "border.default",
        label: "Borde"
    },
    {
        path: "border.subtle",
        label: "Borde sutil"
    },
    {
        path: "border.focus",
        label: "Borde focus"
    },
    {
        path: "border.disabled",
        label: "Borde disabled"
    },
    {
        path: "text.default",
        label: "Texto"
    },
    {
        path: "text.muted",
        label: "Texto muted"
    },
    {
        path: "text.active",
        label: "Texto activo"
    },
    {
        path: "text.hover",
        label: "Texto hover"
    },
    {
        path: "text.onSolid",
        label: "Texto on solid"
    },
    {
        path: "text.disabled",
        label: "Texto disabled"
    },
    {
        path: "danger.default",
        label: "Peligro"
    },
    {
        path: "danger.hover",
        label: "Peligro hover"
    },
    {
        path: "success.default",
        label: "Éxito"
    },
    {
        path: "success.hover",
        label: "Éxito hover"
    },
    {
        path: "warning.default",
        label: "Advertencia"
    },
    {
        path: "warning.hover",
        label: "Advertencia hover"
    },
    {
        path: "info.default",
        label: "Info"
    },
    {
        path: "info.hover",
        label: "Info hover"
    },
    {
        path: "secondary.default",
        label: "Secundario"
    },
    {
        path: "secondary.hover",
        label: "Secundario hover"
    },
    {
        path: "elevated.default",
        label: "Elevado"
    },
    {
        path: "elevated.hover",
        label: "Elevado hover"
    }
];
const COMPONENT_TOKEN_OPTIONS = SEMANTIC_TOKEN_PATHS.map(_c = ({ path, label })=>({
        value: path,
        label
    }));
_c1 = COMPONENT_TOKEN_OPTIONS;
function resolveTokenPath(semantic, path) {
    const parts = path.split(".");
    let current = semantic;
    for (const p of parts){
        if (current == null || typeof current !== "object") return "";
        current = current[p];
    }
    return typeof current === "string" ? current : "";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "COMPONENT_TOKEN_OPTIONS$SEMANTIC_TOKEN_PATHS.map");
__turbopack_context__.k.register(_c1, "COMPONENT_TOKEN_OPTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentTokenExpandableRow",
    ()=>ComponentTokenExpandableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/componentTokenOptions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-client] (ecmascript)");
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
const ComponentTokenExpandableRow = ({ label, value, onChange, usage, isExpanded, onToggle, propertyKey, filterOptions })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownRect, setDropdownRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const options = propertyKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTokenOptionsForProperty"])(propertyKey, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"], value) : filterOptions ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"].filter(filterOptions) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"];
    const resolvedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTokenPath"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic, value);
    const displayValue = value || "—";
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const calculatePosition = ()=>{
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect || ("TURBOPACK compile-time value", "object") === "undefined") return null;
        const popoverWidth = 200;
        const popoverHeight = 280;
        const margin = 8;
        let left = rect.right + margin;
        let top = rect.top;
        if (left + popoverWidth > window.innerWidth - margin) left = rect.left - popoverWidth - margin;
        if (top + popoverHeight > window.innerHeight - margin) top = window.innerHeight - popoverHeight - margin;
        if (top < margin) top = margin;
        left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
        return {
            top,
            left
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ComponentTokenExpandableRow.useLayoutEffect": ()=>{
            if (!isDropdownOpen) {
                setDropdownRect(null);
                return;
            }
            setDropdownRect(calculatePosition());
        }
    }["ComponentTokenExpandableRow.useLayoutEffect"], [
        isDropdownOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComponentTokenExpandableRow.useEffect": ()=>{
            if (!isDropdownOpen) return;
            const handleEsc = {
                "ComponentTokenExpandableRow.useEffect.handleEsc": (e)=>e.key === "Escape" && setIsDropdownOpen(false)
            }["ComponentTokenExpandableRow.useEffect.handleEsc"];
            const handleClickOutside = {
                "ComponentTokenExpandableRow.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (containerRef.current?.contains(target)) return;
                    if (dropdownRef.current?.contains(target)) return;
                    setIsDropdownOpen(false);
                }
            }["ComponentTokenExpandableRow.useEffect.handleClickOutside"];
            document.addEventListener("keydown", handleEsc);
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ComponentTokenExpandableRow.useEffect": ()=>{
                    document.removeEventListener("keydown", handleEsc);
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["ComponentTokenExpandableRow.useEffect"];
        }
    }["ComponentTokenExpandableRow.useEffect"], [
        isDropdownOpen
    ]);
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;
    const dropdownContent = isDropdownOpen && dropdownRect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        style: {
            position: "fixed",
            top: dropdownRect.top,
            left: dropdownRect.left,
            zIndex: 1000,
            minWidth: 200,
            maxHeight: 280,
            overflowY: "auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingSurface"], {
            style: {
                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
            },
            children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>{
                        onChange(opt.value);
                        setIsDropdownOpen(false);
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                        width: "100%",
                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}`,
                        background: "none",
                        border: "none",
                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                        cursor: "pointer",
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                        color: value === opt.value ? semantic?.text?.active : semantic?.text?.default,
                        textAlign: "left"
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.backgroundColor = semantic?.surface?.hover;
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.backgroundColor = "transparent";
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][20],
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][20],
                                flexShrink: 0,
                                borderRadius: "50%",
                                border: `1px solid ${borderColor}`,
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTokenPath"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic, opt.value) || semantic?.surface?.default
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                            lineNumber: 152,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)),
                        opt.label
                    ]
                }, opt.value, true, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                    lineNumber: 123,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
            lineNumber: 121,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
        lineNumber: 109,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)), document.body) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigRow"], {
            label: label,
            swatchColor: resolvedColor || semantic?.surface?.default,
            valueDisplay: displayValue,
            editControl: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: triggerRef,
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            display: "inline-flex"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            name: "edit",
                            size: 16,
                            color: isDropdownOpen ? iconHover : iconDefault,
                            label: "Editar token",
                            isActive: isDropdownOpen,
                            onClick: ()=>setIsDropdownOpen(!isDropdownOpen)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                            lineNumber: 184,
                            columnNumber: 29
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                        lineNumber: 183,
                        columnNumber: 25
                    }, void 0),
                    dropdownContent
                ]
            }, void 0, true),
            isExpanded: isExpanded,
            onToggle: onToggle,
            expandedContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigUsage"], {
                usage: usage
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                lineNumber: 198,
                columnNumber: 34
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
            lineNumber: 177,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
        lineNumber: 176,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ComponentTokenExpandableRow, "XNE4ABRtoz2HVIZYwfZynnABbmk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ComponentTokenExpandableRow;
var _c;
__turbopack_context__.k.register(_c, "ComponentTokenExpandableRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonsComponentEditor",
    ()=>ButtonsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BUTTON_VARIANTS = [
    {
        id: "primary",
        label: "Primary"
    },
    {
        id: "secondary",
        label: "Secondary"
    },
    {
        id: "outline",
        label: "Outline"
    },
    {
        id: "ghost",
        label: "Ghost"
    },
    {
        id: "danger",
        label: "Danger"
    }
];
const BUTTON_PROPERTIES = [
    {
        key: "background",
        label: "Background",
        usage: [
            "Estado base de la variante",
            "Superficie principal de acción"
        ]
    },
    {
        key: "textColor",
        label: "Color de texto",
        usage: [
            "Texto visible sobre el fondo",
            "Contraste de legibilidad"
        ]
    },
    {
        key: "borderColor",
        label: "Color de borde",
        usage: [
            "Borde visual del estado base",
            "Separación visual del contenedor, si aplica"
        ]
    },
    {
        key: "hoverBackground",
        label: "Hover background",
        usage: [
            "Estado hover de la variante",
            "Respuesta visual al puntero"
        ]
    }
];
const DEFAULT_BUTTON_OVERRIDES = {
    primary: {
        background: "primary.default",
        textColor: "text.onSolid",
        borderColor: "border.default",
        hoverBackground: "primary.hover"
    },
    secondary: {
        background: "surface.default",
        textColor: "text.default",
        borderColor: "border.default",
        hoverBackground: "surface.hover"
    },
    outline: {
        background: "background.default",
        textColor: "text.default",
        borderColor: "border.default",
        hoverBackground: "surface.hover"
    },
    ghost: {
        background: "background.default",
        textColor: "text.default",
        borderColor: "border.subtle",
        hoverBackground: "surface.hover"
    },
    danger: {
        background: "danger.default",
        textColor: "text.onSolid",
        borderColor: "danger.default",
        hoverBackground: "danger.hover"
    }
};
const ButtonsComponentEditor = ()=>{
    _s();
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ButtonsComponentEditor.useState": ()=>({
                ...DEFAULT_BUTTON_OVERRIDES
            })
    }["ButtonsComponentEditor.useState"]);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [variantId]: {
                    ...prev[variantId] ?? {},
                    [key]: value
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: BUTTON_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
                title: label,
                children: BUTTON_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: overrides[id]?.[key] ?? DEFAULT_BUTTON_OVERRIDES[id]?.[key] ?? "",
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
                        lineNumber: 54,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ButtonsComponentEditor, "v8HDFYUNpPA94xOCzTBAxxD5q4E=");
_c = ButtonsComponentEditor;
var _c;
__turbopack_context__.k.register(_c, "ButtonsComponentEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx'\n\nExpected '</', got ')'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentsSectionCard",
    ()=>ComponentsSectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ComponentsSectionCard = ({ title, children })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 0,
            flex: 1,
            minHeight: 0,
            backgroundColor: semantic?.surface?.card ?? semantic?.surface?.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            border: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingBottom: 0,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        margin: 0,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                        color: semantic?.text?.default
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 0
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ComponentsSectionCard, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ComponentsSectionCard;
var _c;
__turbopack_context__.k.register(_c, "ComponentsSectionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsComponentEditor",
    ()=>TabsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TABS_VARIANTS = [
    {
        id: "underline",
        label: "Underline"
    },
    {
        id: "pill",
        label: "Pill"
    },
    {
        id: "segmented",
        label: "Segmented"
    }
];
const TABS_PROPERTIES = [
    {
        key: "activeColor",
        label: "Color activo",
        usage: [
            "Indica el tab seleccionado",
            "Contenido visible actual"
        ]
    },
    {
        key: "inactiveColor",
        label: "Color inactivo",
        usage: [
            "Opciones no seleccionadas",
            "Alternativas disponibles"
        ]
    },
    {
        key: "hoverColor",
        label: "Color hover",
        usage: [
            "Respuesta visual al puntero",
            "Previsualización de selección"
        ]
    },
    {
        key: "borderColor",
        label: "Color de borde",
        usage: [
            "Línea inferior o bordes del contenedor",
            "Separación entre tabs"
        ]
    }
];
const DEFAULT_TABS_OVERRIDES = {
    underline: {
        activeColor: "text.active",
        inactiveColor: "text.muted",
        hoverColor: "text.hover",
        borderColor: "border.subtle"
    },
    pill: {
        activeColor: "primary.default",
        inactiveColor: "text.muted",
        hoverColor: "surface.hover",
        borderColor: "border.subtle"
    },
    segmented: {
        activeColor: "surface.selected",
        inactiveColor: "text.muted",
        hoverColor: "surface.hover",
        borderColor: "border.default"
    }
};
const TabsComponentEditor = ()=>{
    _s();
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TabsComponentEditor.useState": ()=>({
                ...DEFAULT_TABS_OVERRIDES
            })
    }["TabsComponentEditor.useState"]);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [variantId]: {
                    ...prev[variantId] ?? {},
                    [key]: value
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            width: "100%"
        },
        children: TABS_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentsSectionCard"], {
                title: label,
                children: TABS_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: overrides[id]?.[key] ?? DEFAULT_TABS_OVERRIDES[id]?.[key] ?? "",
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
                        lineNumber: 58,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TabsComponentEditor, "lgiR+tfOmvubAaAmPamWHA6vf9Y=");
_c = TabsComponentEditor;
var _c;
__turbopack_context__.k.register(_c, "TabsComponentEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardsComponentEditor",
    ()=>CardsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CARDS_VARIANTS = [
    {
        id: "flat",
        label: "Flat"
    },
    {
        id: "subtleBorder",
        label: "SubtleBorder"
    },
    {
        id: "elevated",
        label: "Elevated"
    }
];
const CARDS_PROPERTIES = [
    {
        key: "background",
        label: "Background",
        usage: [
            "Superficie principal del panel",
            "Área de contenido"
        ]
    },
    {
        key: "borderColor",
        label: "Color de borde",
        usage: [
            "Contorno del panel",
            "Separación visual"
        ]
    },
    {
        key: "headerBackground",
        label: "Background header",
        usage: [
            "Zona del encabezado",
            "Distinción header vs body"
        ]
    },
    {
        key: "paddingDensity",
        label: "Densidad de padding",
        usage: [
            "Espaciado interno del contenido",
            "Respiración del panel"
        ]
    }
];
const DEFAULT_CARDS_OVERRIDES = {
    flat: {
        background: "surface.card",
        borderColor: "border.subtle",
        headerBackground: "surface.default",
        paddingDensity: "surface.default"
    },
    subtleBorder: {
        background: "surface.card",
        borderColor: "border.subtle",
        headerBackground: "surface.hover",
        paddingDensity: "surface.default"
    },
    elevated: {
        background: "elevated.default",
        borderColor: "border.subtle",
        headerBackground: "elevated.hover",
        paddingDensity: "surface.default"
    }
};
const CardsComponentEditor = ()=>{
    _s();
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CardsComponentEditor.useState": ()=>({
                ...DEFAULT_CARDS_OVERRIDES
            })
    }["CardsComponentEditor.useState"]);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [variantId]: {
                    ...prev[variantId] ?? {},
                    [key]: value
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            width: "100%"
        },
        children: CARDS_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentsSectionCard"], {
                title: label,
                children: CARDS_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: overrides[id]?.[key] ?? DEFAULT_CARDS_OVERRIDES[id]?.[key] ?? "",
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
                        lineNumber: 58,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardsComponentEditor, "VHOQuxMM8UpAW1X0hJls5ouS26c=");
_c = CardsComponentEditor;
var _c;
__turbopack_context__.k.register(_c, "CardsComponentEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TablesComponentEditor",
    ()=>TablesComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSectionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TABLES_PROPERTIES = [
    {
        key: "headerBackground",
        label: "Background header",
        usage: [
            "Zona de encabezados de columna",
            "Distinción header vs filas"
        ]
    },
    {
        key: "rowHoverColor",
        label: "Color hover fila",
        usage: [
            "Respuesta visual al puntero sobre filas",
            "Feedback de interacción"
        ]
    },
    {
        key: "borderColor",
        label: "Color de borde",
        usage: [
            "Bordes de celdas",
            "Separación entre datos"
        ]
    },
    {
        key: "rowDensity",
        label: "Densidad de fila",
        usage: [
            "Altura de las filas",
            "Compactación o amplitud del listado"
        ]
    }
];
const DEFAULT_TABLES_OVERRIDES = {
    headerBackground: "surface.hover",
    rowHoverColor: "surface.hover",
    borderColor: "border.subtle",
    rowDensity: "surface.default"
};
const TablesComponentEditor = ()=>{
    _s();
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TablesComponentEditor.useState": ()=>({
                ...DEFAULT_TABLES_OVERRIDES
            })
    }["TablesComponentEditor.useState"]);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSectionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentsSectionCard"], {
            title: "Tables",
            children: TABLES_PROPERTIES.map(({ key, label, usage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                    label: label,
                    value: overrides[key] ?? DEFAULT_TABLES_OVERRIDES[key] ?? "",
                    onChange: (v)=>handleChange(key, v),
                    usage: usage,
                    isExpanded: !!expandedByKey[key],
                    onToggle: ()=>toggleExpanded(key),
                    propertyKey: key
                }, key, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
                    lineNumber: 47,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
            lineNumber: 45,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TablesComponentEditor, "X/AMTxTzczFLfRbG11N+Iq8ij2k=");
_c = TablesComponentEditor;
var _c;
__turbopack_context__.k.register(_c, "TablesComponentEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentsSection",
    ()=>ComponentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$InputsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TabsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$CardsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TablesComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx [app-client] (ecmascript)");
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
;
const COMPONENT_TABS = [
    {
        value: "buttons",
        label: "Buttons"
    },
    {
        value: "inputs",
        label: "Inputs"
    },
    {
        value: "tabs",
        label: "Tabs"
    },
    {
        value: "cards",
        label: "Cards"
    },
    {
        value: "tables",
        label: "Tables"
    }
];
const ComponentsSection = ()=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("buttons");
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const renderEditor = ()=>{
        switch(activeSubTab){
            case "buttons":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 31,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "inputs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$InputsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 33,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "tabs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TabsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 35,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "cards":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$CardsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 37,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "tables":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TablesComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TablesComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 39,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 41,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                minWidth: 0,
                display: "flex",
                width: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTabs"], {
                items: [
                    ...COMPONENT_TABS
                ],
                activeValue: activeSubTab,
                onChange: setActiveSubTab,
                ariaLabel: "Subsecciones de Componentes"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                lineNumber: 49,
                columnNumber: 21
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
            lineNumber: 48,
            columnNumber: 17
        }, void 0),
        headerVariant: "tabs",
        borderColor: borderColor ?? "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "appearance-cards-scroll",
            style: {
                width: "100%",
                flex: 1,
                minHeight: 0,
                minWidth: 0,
                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                boxSizing: "border-box",
                overflowX: "auto"
            },
            children: renderEditor()
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ComponentsSection, "VD/YBYEEQAjHXrscn+bmh9BwWKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ComponentsSection;
var _c;
__turbopack_context__.k.register(_c, "ComponentsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AparienciaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/breakpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/visualPresetStore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/toast/useToast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/themeRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$AccessDeniedState$2f$AccessDeniedState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$dev$2f$PresetSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/dev/PresetSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$flags$2f$devFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/flags/devFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$mockSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/auth/mockSession.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
;
;
;
/** Temas disponibles. Estructura preparada para múltiples (Control = tema base del sistema). */ const AVAILABLE_THEMES = [
    {
        value: "control",
        label: "Control"
    }
];
const GALLERY_THEMES = [
    {
        id: "control",
        name: "Control",
        description: "Tema base del sistema",
        recommendedUse: "SaaS · Dashboards · Sistemas internos",
        tags: [
            "Dark",
            "Minimal",
            "Corporate"
        ],
        isDefault: true
    },
    {
        id: "security",
        name: "Security",
        description: "Tema para productos de seguridad y enterprise",
        recommendedUse: "Seguridad · Enterprise",
        tags: [
            "Dark",
            "Corporate"
        ],
        isDefault: false
    }
];
const CONTENT_MAX_WIDTH = 560;
const LAB_APARIENCIA_OVERIDES_KEY = "control.lab.apariencia.overrides";
const LAB_APARIENCIA_STATES_KEY = "control.lab.apariencia.states";
const TABS_GROUPS = [
    {
        title: "General",
        items: [
            {
                label: "Galería",
                value: "Galería",
                icon: "grid"
            },
            {
                label: "Base",
                value: "Base",
                icon: "settings"
            }
        ]
    },
    {
        title: "Configuración",
        items: [
            {
                label: "Estados",
                value: "Estados",
                icon: "alert-circle"
            },
            {
                label: "Componentes",
                value: "Componentes",
                icon: "code"
            },
            {
                label: "Avanzado",
                value: "Avanzado",
                icon: "edit"
            }
        ]
    }
];
function baseTokensEqual(a, b) {
    return a.accent === b.accent && a.background === b.background && a.surface === b.surface && a.text === b.text && a.border === b.border;
}
function baseFromTokens(t) {
    return {
        background: t.background,
        surface: t.surface,
        border: t.border,
        text: t.text,
        accent: t.accent
    };
}
const BASE_TOKEN_KEYS = [
    {
        key: "accent",
        label: "Acento"
    },
    {
        key: "background",
        label: "Fondo"
    },
    {
        key: "surface",
        label: "Superficie"
    },
    {
        key: "text",
        label: "Texto"
    }
];
const STATE_TOKEN_KEYS = [
    {
        key: "success",
        themeKey: "success"
    },
    {
        key: "warning",
        themeKey: "warning"
    },
    {
        key: "error",
        themeKey: "danger"
    },
    {
        key: "info",
        themeKey: "info"
    }
];
const STATE_LABELS = {
    success: "Success",
    warning: "Warning",
    error: "Error",
    info: "Info"
};
/** Dónde se usa cada token de estado en el sistema */ const STATE_USAGE = {
    success: [
        "Toasts",
        "Badges",
        "Validaciones",
        "Estados positivos"
    ],
    warning: [
        "Toasts",
        "Badges",
        "Alertas",
        "Estados de advertencia"
    ],
    error: [
        "Toasts",
        "Badges",
        "Errores",
        "Validaciones fallidas"
    ],
    info: [
        "Toasts",
        "Badges",
        "Información",
        "Estados neutros"
    ]
};
function stateTokensEqual(a, b) {
    return a.success === b.success && a.warning === b.warning && a.error === b.error && a.info === b.info;
}
/** Dónde se usa cada token de color base en el sistema */ const COLOR_USAGE = {
    accent: [
        "Buttons · Primary",
        "Links",
        "Focus states",
        "Surface highlights"
    ],
    background: [
        "Page background",
        "App shell",
        "Surface base"
    ],
    surface: [
        "Cards",
        "Panels",
        "Inputs",
        "Elevated surfaces"
    ],
    text: [
        "Body text",
        "Labels",
        "Headings",
        "Text emphasis"
    ]
};
function uniqueColorOptions(options) {
    return options.filter((option, index, all)=>all.findIndex((candidate)=>candidate.value === option.value) === index);
}
function ensureCurrentColorOption(value, options) {
    if (options.some((option)=>option.value === value)) {
        return options;
    }
    return [
        {
            value,
            label: `● ${value.toUpperCase()}`
        },
        ...options
    ];
}
function hexToHsv(hex) {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return {
        h: 0,
        s: 0,
        v: 100
    };
    let r = 0, g = 0, b = 0;
    if (m[1].length === 3) {
        r = parseInt(m[1][0] + m[1][0], 16) / 255;
        g = parseInt(m[1][1] + m[1][1], 16) / 255;
        b = parseInt(m[1][2] + m[1][2], 16) / 255;
    } else {
        r = parseInt(m[1].slice(0, 2), 16) / 255;
        g = parseInt(m[1].slice(2, 4), 16) / 255;
        b = parseInt(m[1].slice(4, 6), 16) / 255;
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const v = max;
    const s = max === 0 ? 0 : d / max * 100;
    let h = 0;
    if (d !== 0) {
        switch(max){
            case r:
                h = (60 * ((g - b) / d) + (g < b ? 360 : 0)) % 360;
                break;
            case g:
                h = 60 * ((b - r) / d) + 120;
                break;
            default:
                h = 60 * ((r - g) / d) + 240;
        }
    }
    return {
        h,
        s,
        v: v * 100
    };
}
function hsvToHex(h, s, v) {
    s /= 100;
    v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;
    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }
    const R = Math.round((r + m) * 255);
    const G = Math.round((g + m) * 255);
    const B = Math.round((b + m) * 255);
    return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`.toUpperCase();
}
function isValidHex(hex) {
    return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex);
}
function normalizeHex(hex) {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return "#000000";
    if (m[1].length === 3) {
        return "#" + m[1].split("").map((c)=>c + c).join("").toUpperCase();
    }
    return "#" + m[1].toUpperCase();
}
function hexToRgb(hex) {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return {
        r: 0,
        g: 0,
        b: 0
    };
    let r = 0, g = 0, b = 0;
    if (m[1].length === 3) {
        r = parseInt(m[1][0] + m[1][0], 16);
        g = parseInt(m[1][1] + m[1][1], 16);
        b = parseInt(m[1][2] + m[1][2], 16);
    } else {
        r = parseInt(m[1].slice(0, 2), 16);
        g = parseInt(m[1].slice(2, 4), 16);
        b = parseInt(m[1].slice(4, 6), 16);
    }
    return {
        r,
        g,
        b
    };
}
function hexToHsl(hex) {
    const { r, g, b } = hexToRgb(hex);
    const rn = r / 255, gn = g / 255, bn = b / 255;
    const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        else if (max === gn) h = ((bn - rn) / d + 2) / 6;
        else h = ((rn - gn) / d + 4) / 6;
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}
function rgbToHex(r, g, b) {
    const R = Math.max(0, Math.min(255, Math.round(r)));
    const G = Math.max(0, Math.min(255, Math.round(g)));
    const B = Math.max(0, Math.min(255, Math.round(b)));
    return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`.toUpperCase();
}
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }
    return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}
function parseRgb(str) {
    const m = str.match(/^\s*rgb?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i);
    if (!m) return null;
    return {
        r: +m[1],
        g: +m[2],
        b: +m[3]
    };
}
function parseHsl(str) {
    const m = str.match(/^\s*hsl\s*\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)\s*$/i);
    if (!m) return null;
    return {
        h: +m[1],
        s: +m[2],
        l: +m[3]
    };
}
const RECENT_COLORS_MAX = 10;
const recentColorsStore = [];
function ModeSegmentedControl({ value, onChange, semantic }) {
    const options = [
        {
            value: "dark",
            label: "Oscuro"
        },
        {
            value: "light",
            label: "Claro"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tablist",
        "aria-label": "Aspecto",
        style: {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
            height: 40,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: 2,
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
        },
        children: options.map((opt)=>{
            const isActive = value === opt.value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "tab",
                "aria-selected": isActive,
                onClick: ()=>onChange(opt.value),
                style: {
                    flex: 1,
                    minWidth: 80,
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: isActive ? "#1a1a1a" : semantic.text.muted,
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    border: "none",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
                    cursor: "pointer",
                    transition: "color 0.2s, background-color 0.2s",
                    textAlign: "center"
                },
                children: opt.label
            }, opt.value, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 388,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 370,
        columnNumber: 9
    }, this);
}
_c = ModeSegmentedControl;
const BASE_SECTION_TABS = [
    {
        value: "tema",
        label: "Tema"
    },
    {
        value: "colores",
        label: "Colores base"
    }
];
function TokenRowWithSwatch({ label, value, options, onChange, semantic }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            alignItems: "center",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
            width: "100%",
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                label: label,
                helperText: value.toUpperCase(),
                options: options,
                value: value,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 447,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][40],
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][40],
                    flexShrink: 0,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                    backgroundColor: value || semantic.surface.default
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 454,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 437,
        columnNumber: 9
    }, this);
}
_c1 = TokenRowWithSwatch;
function BaseColorSelector({ value, options, onChange, semantic, variant = "full", originalValue }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownRect, setDropdownRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [colorFormat, setColorFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hex");
    const [showRecents, setShowRecents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentColors, setRecentColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BaseColorSelector.useState": ()=>[
                ...recentColorsStore
            ]
    }["BaseColorSelector.useState"]);
    const [formatInput, setFormatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialHsv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BaseColorSelector.useMemo[initialHsv]": ()=>hexToHsv(value || "#000000")
    }["BaseColorSelector.useMemo[initialHsv]"], []);
    const [hsv, setHsv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialHsv);
    const [hexInput, setHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BaseColorSelector.useState": ()=>{
            const v = value || "#000000";
            return v.startsWith("#") ? v.toUpperCase() : `#${v.toUpperCase()}`;
        }
    }["BaseColorSelector.useState"]);
    const displayLabel = options.find((o)=>o.value.toLowerCase() === (value || "").toLowerCase())?.label ?? hexInput;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            if (!isOpen) return;
            const raw = value || "#000000";
            const hex = raw.startsWith("#") ? raw.toUpperCase() : `#${raw.toUpperCase()}`;
            setHsv(hexToHsv(hex));
            setHexInput(hex);
            setRecentColors([
                ...recentColorsStore
            ]);
        }
    }["BaseColorSelector.useEffect"], [
        isOpen,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            if (!isOpen) return;
            const hex = hsvToHex(hsv.h, hsv.s, hsv.v);
            if (colorFormat === "hex") setFormatInput(hex);
            else if (colorFormat === "rgb") {
                const { r, g, b } = hexToRgb(hex);
                setFormatInput(`rgb(${r}, ${g}, ${b})`);
            } else {
                const { h, s, l } = hexToHsl(hex);
                setFormatInput(`hsl(${h}, ${s}%, ${l}%)`);
            }
        }
    }["BaseColorSelector.useEffect"], [
        isOpen,
        hsv.h,
        hsv.s,
        hsv.v,
        colorFormat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            const checkMobile = {
                "BaseColorSelector.useEffect.checkMobile": ()=>setIsMobile(("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth < __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].md)
            }["BaseColorSelector.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "BaseColorSelector.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["BaseColorSelector.useEffect"];
        }
    }["BaseColorSelector.useEffect"], []);
    const calculatePopoverPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[calculatePopoverPosition]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return null;
            const popoverWidth = 320;
            const popoverHeight = 340;
            const margin = 8;
            const gapToIcon = -8;
            const spaceLeft = rect.left - margin;
            const placement = spaceLeft >= popoverWidth ? "left" : "right";
            let left = placement === "left" ? rect.left - popoverWidth - gapToIcon : rect.right + gapToIcon;
            let top = rect.top;
            const spaceBelow = window.innerHeight - rect.top - margin;
            if (spaceBelow < popoverHeight) {
                top = window.innerHeight - popoverHeight - margin * 2;
            }
            left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
            top = Math.max(margin, Math.min(top, window.innerHeight - popoverHeight - margin));
            return {
                top,
                left,
                placement
            };
        }
    }["BaseColorSelector.useCallback[calculatePopoverPosition]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            if (!isOpen || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const handleResize = {
                "BaseColorSelector.useEffect.handleResize": ()=>{
                    const nextIsMobile = window.innerWidth < __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].md;
                    setIsMobile(nextIsMobile);
                    if (nextIsMobile) {
                        setDropdownRect({
                            top: 0,
                            left: 0,
                            placement: "right"
                        });
                    } else {
                        const pos = calculatePopoverPosition();
                        if (pos) setDropdownRect(pos);
                    }
                }
            }["BaseColorSelector.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "BaseColorSelector.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["BaseColorSelector.useEffect"];
        }
    }["BaseColorSelector.useEffect"], [
        isOpen,
        calculatePopoverPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            if (!isOpen) {
                setDropdownRect(null);
                return;
            }
            const handleEsc = {
                "BaseColorSelector.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") setIsOpen(false);
                }
            }["BaseColorSelector.useEffect.handleEsc"];
            document.addEventListener("keydown", handleEsc);
            if (isMobile) {
                document.body.style.overflow = "hidden";
            }
            const handleClickOutside = {
                "BaseColorSelector.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (containerRef.current?.contains(target) || dropdownRef.current?.contains(target)) {
                        return;
                    }
                    setIsOpen(false);
                }
            }["BaseColorSelector.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "BaseColorSelector.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleEsc);
                    if (isMobile) document.body.style.overflow = "";
                }
            })["BaseColorSelector.useEffect"];
        }
    }["BaseColorSelector.useEffect"], [
        isOpen,
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "BaseColorSelector.useLayoutEffect": ()=>{
            if (!isOpen || ("TURBOPACK compile-time value", "object") === "undefined") return;
            if (isMobile) {
                setDropdownRect({
                    top: 0,
                    left: 0,
                    placement: "right"
                });
                return;
            }
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const popoverWidth = 320;
            const popoverHeight = 340;
            const margin = 8;
            const gapToIcon = -8;
            const spaceLeft = rect.left - margin;
            const placement = spaceLeft >= popoverWidth ? "left" : "right";
            let left = placement === "left" ? rect.left - popoverWidth - gapToIcon : rect.right + gapToIcon;
            let top = rect.top;
            const spaceBelow = window.innerHeight - rect.top - margin;
            if (spaceBelow < popoverHeight) {
                top = window.innerHeight - popoverHeight - margin * 2;
            }
            left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
            top = Math.max(margin, Math.min(top, window.innerHeight - popoverHeight - margin));
            setDropdownRect({
                top,
                left,
                placement
            });
        }
    }["BaseColorSelector.useLayoutEffect"], [
        isOpen,
        isMobile
    ]);
    const applyHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[applyHex]": (hex)=>{
            const norm = normalizeHex(hex);
            if (isValidHex(hex)) {
                onChange(norm);
                setHsv(hexToHsv(norm));
                setHexInput(norm);
                const next = [
                    norm,
                    ...recentColorsStore.filter({
                        "BaseColorSelector.useCallback[applyHex].next": (c)=>c.toUpperCase() !== norm.toUpperCase()
                    }["BaseColorSelector.useCallback[applyHex].next"])
                ].slice(0, RECENT_COLORS_MAX);
                recentColorsStore.length = 0;
                recentColorsStore.push(...next);
                setRecentColors([
                    ...recentColorsStore
                ]);
            }
        }
    }["BaseColorSelector.useCallback[applyHex]"], [
        onChange
    ]);
    const updateFrom2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[updateFrom2D]": (clientX, clientY, target)=>{
            const rect = target.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
            const s = x * 100;
            const v = (1 - y) * 100;
            const hex = hsvToHex(hsv.h, s, v);
            setHsv({
                "BaseColorSelector.useCallback[updateFrom2D]": (p)=>({
                        ...p,
                        s,
                        v
                    })
            }["BaseColorSelector.useCallback[updateFrom2D]"]);
            setHexInput(hex);
            applyHex(hex);
        }
    }["BaseColorSelector.useCallback[updateFrom2D]"], [
        hsv.h,
        applyHex
    ]);
    const updateFromHue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[updateFromHue]": (clientX, target)=>{
            const rect = target.getBoundingClientRect();
            const h = Math.max(0, Math.min(360, (clientX - rect.left) / rect.width * 360));
            const hex = hsvToHex(h, hsv.s, hsv.v);
            setHsv({
                "BaseColorSelector.useCallback[updateFromHue]": (p)=>({
                        ...p,
                        h
                    })
            }["BaseColorSelector.useCallback[updateFromHue]"]);
            setHexInput(hex);
            applyHex(hex);
        }
    }["BaseColorSelector.useCallback[updateFromHue]"], [
        hsv.s,
        hsv.v,
        applyHex
    ]);
    const sbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseColorSelector.useEffect": ()=>{
            if (!dragging) return;
            const onMove = {
                "BaseColorSelector.useEffect.onMove": (e)=>{
                    if (dragging === "2d" && sbRef.current) updateFrom2D(e.clientX, e.clientY, sbRef.current);
                    if (dragging === "hue" && hueRef.current) updateFromHue(e.clientX, hueRef.current);
                }
            }["BaseColorSelector.useEffect.onMove"];
            const onUp = {
                "BaseColorSelector.useEffect.onUp": ()=>setDragging(null)
            }["BaseColorSelector.useEffect.onUp"];
            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
            return ({
                "BaseColorSelector.useEffect": ()=>{
                    document.removeEventListener("mousemove", onMove);
                    document.removeEventListener("mouseup", onUp);
                }
            })["BaseColorSelector.useEffect"];
        }
    }["BaseColorSelector.useEffect"], [
        dragging,
        updateFrom2D,
        updateFromHue
    ]);
    const currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);
    const getFormatString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[getFormatString]": (hex)=>{
            const norm = hex.startsWith("#") ? hex : `#${hex}`;
            if (colorFormat === "hex") return norm.toUpperCase();
            if (colorFormat === "rgb") {
                const { r, g, b } = hexToRgb(norm);
                return `rgb(${r}, ${g}, ${b})`;
            }
            const { h, s, l } = hexToHsl(norm);
            return `hsl(${h}, ${s}%, ${l}%)`;
        }
    }["BaseColorSelector.useCallback[getFormatString]"], [
        colorFormat
    ]);
    const handleFormatBlur = ()=>{
        const current = value || "#000000";
        const fallback = getFormatString(current);
        if (colorFormat === "hex" && isValidHex(formatInput)) {
            applyHex(normalizeHex(formatInput));
        } else if (colorFormat === "rgb") {
            const parsed = parseRgb(formatInput);
            if (parsed) applyHex(rgbToHex(parsed.r, parsed.g, parsed.b));
            else setFormatInput(fallback);
        } else if (colorFormat === "hsl") {
            const parsed = parseHsl(formatInput);
            if (parsed) applyHex(hslToHex(parsed.h, parsed.s, parsed.l));
            else setFormatInput(fallback);
        } else {
            setFormatInput(fallback);
        }
    };
    const [eyedropperSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "BaseColorSelector.useState": ()=>("TURBOPACK compile-time value", "object") !== "undefined" && "EyeDropper" in window
    }["BaseColorSelector.useState"]);
    const handleEyedropper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BaseColorSelector.useCallback[handleEyedropper]": async ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !("EyeDropper" in window)) return;
            try {
                const dropper = new window.EyeDropper();
                const result = await dropper.open();
                const hex = result.sRGBHex.toUpperCase();
                applyHex(hex.startsWith("#") ? hex : `#${hex}`);
            } catch  {
            // User cancelled or unsupported
            }
        }
    }["BaseColorSelector.useCallback[handleEyedropper]"], [
        applyHex
    ]);
    const isIconVariant = variant === "icon";
    const trigger = isIconVariant ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: triggerRef,
        style: {
            display: "inline-flex"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
            name: "edit",
            size: 16,
            color: semantic.text.muted,
            label: "Editar color",
            isActive: isOpen,
            onClick: ()=>setIsOpen(!isOpen)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 735,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 734,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: triggerRef,
        style: {
            display: "block",
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "button",
            tabIndex: 0,
            onClick: ()=>setIsOpen(!isOpen),
            onKeyDown: (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }
            },
            style: {
                display: "flex",
                alignItems: "center",
                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                width: "100%",
                minHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][48],
                padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                backgroundColor: semantic.surface.default,
                border: `1px solid ${semantic.border.default}`,
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                cursor: "pointer",
                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                color: semantic.text.default
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                        flexShrink: 0,
                        borderRadius: "50%",
                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                        backgroundColor: value || semantic.surface.default
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 772,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        flex: 1,
                        textAlign: "left",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    children: displayLabel
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 782,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                    name: "chevron-down",
                    size: 16,
                    color: semantic.text.muted
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 785,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 746,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 745,
        columnNumber: 9
    }, this);
    const pickerContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sbRef,
                onMouseDown: (e)=>{
                    e.preventDefault();
                    updateFrom2D(e.clientX, e.clientY, e.currentTarget);
                    setDragging("2d");
                },
                style: {
                    width: "100%",
                    height: 140,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                    background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${hsv.h}, 100%, 50%)`,
                    cursor: "crosshair",
                    position: "relative"
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 793,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hueRef,
                onMouseDown: (e)=>{
                    e.preventDefault();
                    updateFromHue(e.clientX, e.currentTarget);
                    setDragging("hue");
                },
                style: {
                    width: "100%",
                    height: 10,
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
                    background: "linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
                    cursor: "pointer"
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 809,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            "hex",
                            "rgb",
                            "hsl"
                        ].map((fmt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setColorFormat(fmt),
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                    color: colorFormat === fmt ? semantic.text.active : semantic.text.muted,
                                    backgroundColor: colorFormat === fmt ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
                                    border: "none",
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                    cursor: "pointer",
                                    textTransform: "uppercase"
                                },
                                children: fmt
                            }, fmt, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 829,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 827,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "stretch",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][40],
                                    height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][40],
                                    borderRadius: "50%",
                                    border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                    backgroundColor: hsvToHex(hsv.h, hsv.s, hsv.v),
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 851,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formatInput,
                                onChange: (e)=>setFormatInput(e.target.value),
                                onBlur: handleFormatBlur,
                                onKeyDown: (e)=>e.key === "Enter" && handleFormatBlur(),
                                placeholder: colorFormat === "hex" ? "#000000" : colorFormat === "rgb" ? "rgb(0, 0, 0)" : "hsl(0, 0%, 0%)",
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    color: semantic.text.default,
                                    backgroundColor: semantic.surface.hover ?? semantic.surface.default,
                                    border: `1px solid ${semantic.border.default}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 861,
                                columnNumber: 21
                            }, this),
                            eyedropperSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: "Cuentagotas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleEyedropper,
                                    "aria-label": "Cuentagotas",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][40],
                                        minHeight: 40,
                                        flexShrink: 0,
                                        padding: 0,
                                        background: semantic.surface.hover ?? semantic.surface.default,
                                        border: `1px solid ${semantic.border.default}`,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                        cursor: "pointer",
                                        color: semantic.text.muted
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 901,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 882,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 881,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 850,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 826,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowRecents(!showRecents),
                        "aria-expanded": showRecents,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            padding: 0,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                            color: semantic.text.muted
                        },
                        children: [
                            "Recientes",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    transform: showRecents ? "rotate(180deg)" : "none",
                                    transition: "transform 0.2s ease",
                                    display: "flex"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "chevron-down",
                                    size: 16,
                                    color: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 932,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 931,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 911,
                        columnNumber: 17
                    }, this),
                    showRecents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                        },
                        children: [
                            originalValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: `Original: ${originalValue}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>applyHex(originalValue),
                                    style: {
                                        width: 28,
                                        height: 28,
                                        padding: 0,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                        border: `2px solid ${semantic.text.active ?? semantic.primary?.default ?? "#00FFA9"}`,
                                        backgroundColor: originalValue,
                                        cursor: "pointer",
                                        boxSizing: "border-box"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 939,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 938,
                                columnNumber: 29
                            }, this),
                            recentColors.filter((hex)=>!originalValue || hex.toUpperCase() !== originalValue.toUpperCase()).slice(0, RECENT_COLORS_MAX).map((hex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    content: hex,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyHex(hex),
                                        style: {
                                            width: 28,
                                            height: 28,
                                            padding: 0,
                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                            border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                            backgroundColor: hex,
                                            cursor: "pointer"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 960,
                                        columnNumber: 33
                                    }, this)
                                }, hex, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 33
                                }, this)),
                            !originalValue && recentColors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    width: "100%",
                                    margin: 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    color: semantic.text.muted
                                },
                                children: "Sin colores recientes"
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 976,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 936,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 910,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 791,
        columnNumber: 9
    }, this);
    const dropdownContent = isOpen && dropdownRect && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            onClick: (e)=>{
                if (e.target === e.currentTarget) setIsOpen(false);
            },
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingSurface"], {
                onClick: (e)=>e.stopPropagation(),
                style: {
                    minWidth: 280,
                    width: "100%",
                    maxWidth: 320
                },
                children: pickerContent
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1010,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 993,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingSurface"], {
            style: {
                position: "fixed",
                top: dropdownRect.top,
                left: dropdownRect.left,
                minWidth: 280,
                zIndex: 1000
            },
            children: pickerContent
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 1018,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 991,
        columnNumber: 13
    }, this), document.body);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: "relative",
            minWidth: isIconVariant ? undefined : 120
        },
        children: [
            trigger,
            dropdownContent
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1035,
        columnNumber: 9
    }, this);
}
_s(BaseColorSelector, "LbsaHAWe4WiJ1JGvwYC5hiAn9pE=");
_c2 = BaseColorSelector;
function BaseColorExpandableRow({ label, value, hex, originalValue, options, onChange, usage, isExpanded, onToggle, semantic, onCopyHex }) {
    const valueDisplay = onCopyHex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: (e)=>{
            e.stopPropagation();
            onCopyHex(hex);
        },
        "aria-label": "Copiar color",
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            padding: 0,
            margin: 0,
            background: "none",
            border: "none",
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
            cursor: "pointer",
            color: semantic.text.muted,
            opacity: 0.85,
            transition: "opacity 0.2s ease, color 0.2s ease"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.color = semantic.text.default;
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.color = semantic.text.muted;
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-block",
                    transform: "scale(0.7)",
                    transformOrigin: "left center"
                },
                children: hex
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1098,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                name: "copy",
                size: 10
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1099,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1068,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            transform: "scale(0.7)",
            transformOrigin: "left center"
        },
        children: hex
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1102,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigRow"], {
        label: label,
        swatchColor: value || semantic.surface.default,
        valueDisplay: valueDisplay,
        editControl: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorSelector, {
            variant: "icon",
            options: options,
            value: value,
            originalValue: originalValue,
            onChange: (v)=>onChange(v),
            semantic: semantic
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 1110,
            columnNumber: 17
        }, void 0),
        isExpanded: isExpanded,
        onToggle: onToggle,
        expandedContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigUsage"], {
            usage: usage
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 1121,
            columnNumber: 30
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1105,
        columnNumber: 9
    }, this);
}
_c3 = BaseColorExpandableRow;
function BaseColorsCardWithLocalExpansion(props) {
    _s1();
    const initialExpanded = ()=>Object.fromEntries(BASE_TOKEN_KEYS.map(({ key })=>[
                key,
                false
            ]));
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialExpanded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCard, {
        ...props,
        expandedByKey: expandedByKey,
        onExpandToggle: (k)=>setExpandedByKey((prev)=>({
                    ...prev,
                    [k]: !prev[k]
                }))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1136,
        columnNumber: 9
    }, this);
}
_s1(BaseColorsCardWithLocalExpansion, "0kjhGgqgp6MS335kR6uT8I6mbcQ=");
_c4 = BaseColorsCardWithLocalExpansion;
function BaseColorsCard({ mode, tokens, originalTokens, options, onChange, expandedByKey, onExpandToggle, titleAction, semantic, isDirty, onSave, onCopyHex }) {
    const title = mode === "dark" ? "Modo oscuro" : "Modo claro";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
        title: title,
        titleAction: titleAction,
        footer: onSave != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "actionPrimary",
            size: "sm",
            shape: "panel",
            onClick: onSave,
            disabled: !isDirty,
            children: "Guardar cambios"
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 1178,
            columnNumber: 21
        }, void 0) : undefined,
        children: BASE_TOKEN_KEYS.map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorExpandableRow, {
                label: label,
                value: tokens[key],
                hex: tokens[key].toUpperCase(),
                originalValue: originalTokens[key],
                options: options[key],
                onChange: (v)=>onChange(key, v),
                usage: COLOR_USAGE[key],
                isExpanded: expandedByKey[key],
                onToggle: ()=>onExpandToggle(key),
                semantic: semantic,
                onCopyHex: onCopyHex
            }, `${mode}-${key}`, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1191,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1173,
        columnNumber: 9
    }, this);
}
_c5 = BaseColorsCard;
function EstadosCard({ tokens, originalTokens, options, onChange, expandedByKey, onExpandToggle, semantic, isDirty, onSave, onCopyHex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
        title: "Estados",
        footer: onSave != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "actionPrimary",
            size: "sm",
            shape: "panel",
            onClick: onSave,
            disabled: !isDirty,
            children: "Guardar cambios"
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 1238,
            columnNumber: 21
        }, void 0) : undefined,
        children: STATE_TOKEN_KEYS.map(({ key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorExpandableRow, {
                label: STATE_LABELS[key],
                value: tokens[key],
                hex: tokens[key].toUpperCase(),
                originalValue: originalTokens[key],
                options: options[key],
                onChange: (v)=>onChange(key, v),
                usage: STATE_USAGE[key],
                isExpanded: expandedByKey[key],
                onToggle: ()=>onExpandToggle(key),
                semantic: semantic,
                onCopyHex: onCopyHex
            }, key, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1251,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1234,
        columnNumber: 9
    }, this);
}
_c6 = EstadosCard;
function ThemePreview({ tokens, semantic }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: tokens.background,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
            width: "100%",
            minWidth: 280,
            maxWidth: 360,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: tokens.text,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                        },
                        children: "Texto principal"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1300,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: tokens.text,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            opacity: 0.7,
                            whiteSpace: "normal",
                            overflowWrap: "break-word"
                        },
                        children: "Texto secundario con menor énfasis."
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1310,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1293,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: 36,
                    backgroundColor: tokens.surface,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                    border: `1px solid ${tokens.border}`,
                    display: "flex",
                    alignItems: "center",
                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    variant: "body",
                    style: {
                        color: tokens.text,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                        opacity: 0.6
                    },
                    children: "Campo de ejemplo"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 1335,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1323,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                style: {
                    alignSelf: "flex-start",
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    backgroundColor: tokens.accent,
                    color: tokens.background,
                    border: "none",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
                    cursor: "default"
                },
                children: "Acento"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1339,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1278,
        columnNumber: 9
    }, this);
}
_c7 = ThemePreview;
function SettingRowItem({ label, rightContent, isSelected, onClick, textWhite }) {
    _s2();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const labelColor = isSelected ? semantic.text.default : semantic.text.muted;
    const chevronColor = semantic.text.muted;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
            textAlign: "left",
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
            color: labelColor,
            backgroundColor: isSelected ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
            border: "none",
            borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
            borderRadius: 0,
            cursor: "pointer",
            transition: "background-color 0.2s, color 0.2s",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1,
                    minWidth: 0
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1402,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                    flexShrink: 0,
                    color: textWhite ? "#ffffff" : "inherit"
                },
                children: [
                    rightContent,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: textWhite ? "rgba(255,255,255,0.8)" : chevronColor,
                            display: "flex"
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "chevron-right",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 1406,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1405,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1403,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1379,
        columnNumber: 9
    }, this);
}
_s2(SettingRowItem, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c8 = SettingRowItem;
function SettingSection({ title, description, children }) {
    _s3();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
            borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            color: semantic.text.default
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1433,
                        columnNumber: 17
                    }, this),
                    description != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            color: semantic.text.muted
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1445,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1432,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1458,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1426,
        columnNumber: 9
    }, this);
}
_s3(SettingSection, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c9 = SettingSection;
function ModoAyudaSwitch({ value, onChange }) {
    _s4();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
        name: "alert-circle",
        size: 18,
        color: value ? semantic.primary.default : semantic.text.disabled,
        hoverColor: value ? semantic.primary.default : undefined,
        onClick: ()=>onChange(!value)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1474,
        columnNumber: 9
    }, this);
}
_s4(ModoAyudaSwitch, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c10 = ModoAyudaSwitch;
function ThemeGalleryCard({ theme: galleryTheme, isActive, onSelect, onEdit, semantic }) {
    _s5();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const previewColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeGalleryCard.useMemo[previewColors]": ()=>{
            const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(galleryTheme.id, "dark");
            const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(galleryTheme.id, "light");
            return [
                dark.background,
                dark.surface,
                dark.accent,
                light.background,
                light.accent
            ];
        }
    }["ThemeGalleryCard.useMemo[previewColors]"], [
        galleryTheme.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "article",
        "aria-label": `Tema ${galleryTheme.name}`,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            backgroundColor: semantic.surface.card ?? semantic.surface.default,
            border: `1px solid ${semantic.border.default}`,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
            overflow: "hidden",
            boxShadow: isHovered ? "0 4px 16px rgba(0,0,0,0.14)" : "none",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 88,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${previewColors[0]} 0%, ${previewColors[1]} 30%, ${previewColors[2]} 70%, ${previewColors[3]} 100%)`,
                    borderTopLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
                    borderTopRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
                    position: "relative"
                },
                children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        top: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                        left: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8],
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                        lineHeight: 1,
                        backgroundColor: semantic.success[300],
                        color: semantic.text.onSolid ?? semantic.text.active
                    },
                    children: "Activo"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 1534,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1523,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body",
                                style: {
                                    color: semantic.text.default,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                                },
                                children: galleryTheme.name
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 1578,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][2],
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                    cursor: "pointer",
                                    flexShrink: 0
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = semantic.surface.hover ?? semantic.surface.default;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = "transparent";
                                },
                                role: "button",
                                "aria-label": "Opciones",
                                tabIndex: 0,
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    name: "more-horizontal",
                                    size: 14,
                                    label: "Opciones"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 1581,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1569,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: semantic.text.muted,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minWidth: 0
                        },
                        children: galleryTheme.description
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1607,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: semantic.text.muted,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs
                        },
                        children: galleryTheme.recommendedUse
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1623,
                        columnNumber: 17
                    }, this),
                    galleryTheme.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: galleryTheme.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    color: semantic.text.muted,
                                    backgroundColor: semantic.surface.hover || semantic.surface.default,
                                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
                                },
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 1631,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1629,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1558,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12],
                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "actionPrimary",
                            size: "sm",
                            shape: "panel",
                            onClick: onSelect,
                            children: "Usar tema"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 1670,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onEdit,
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4],
                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                color: semantic.text.muted,
                                background: "none",
                                border: "none",
                                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
                                cursor: "pointer",
                                transition: "color 0.2s ease",
                                marginLeft: "auto"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.color = semantic.text.default;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.color = semantic.text.muted;
                            },
                            children: [
                                "Editar",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-flex",
                                        transform: "translateY(2px)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1706,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 1705,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 1678,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 1661,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1651,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1505,
        columnNumber: 9
    }, this);
}
_s5(ThemeGalleryCard, "P/dGmejhZ5ab0OFNip4Wwoapu1E=");
_c11 = ThemeGalleryCard;
function loadLabOverrides(preset) {
    try {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.localStorage) return {
            dark: null,
            light: null
        };
        const raw = window.localStorage.getItem(`${LAB_APARIENCIA_OVERIDES_KEY}.${preset}`);
        if (!raw) return {
            dark: null,
            light: null
        };
        const parsed = JSON.parse(raw);
        return {
            dark: parsed.dark ?? null,
            light: parsed.light ?? null
        };
    } catch  {
        return {
            dark: null,
            light: null
        };
    }
}
function saveLabOverrides(preset, mode, tokens) {
    try {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.localStorage) return;
        const existing = loadLabOverrides(preset);
        const next = {
            ...existing,
            [mode]: tokens
        };
        window.localStorage.setItem(`${LAB_APARIENCIA_OVERIDES_KEY}.${preset}`, JSON.stringify(next));
    } catch  {
    // no-op
    }
}
function loadLabStateOverrides(preset) {
    try {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.localStorage) return {
            dark: null,
            light: null
        };
        const raw = window.localStorage.getItem(`${LAB_APARIENCIA_STATES_KEY}.${preset}`);
        if (!raw) return {
            dark: null,
            light: null
        };
        const parsed = JSON.parse(raw);
        return {
            dark: parsed.dark ?? null,
            light: parsed.light ?? null
        };
    } catch  {
        return {
            dark: null,
            light: null
        };
    }
}
function saveLabStateOverrides(preset, mode, tokens) {
    try {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.localStorage) return;
        const existing = loadLabStateOverrides(preset);
        const next = {
            ...existing,
            [mode]: tokens
        };
        window.localStorage.setItem(`${LAB_APARIENCIA_STATES_KEY}.${preset}`, JSON.stringify(next));
    } catch  {
    // no-op
    }
}
function stateTokensFromTheme(t) {
    return {
        success: t.success,
        warning: t.warning,
        error: t.danger,
        info: t.info
    };
}
function AparienciaPage() {
    _s6();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { currentPreset, setPreset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualPreset"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Base");
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modoAyuda, setModoAyuda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBaseSub, setSelectedBaseSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tema");
    const initialExpandedEstados = ()=>Object.fromEntries(STATE_TOKEN_KEYS.map(({ key })=>[
                key,
                false
            ]));
    const [expandedEstados, setExpandedEstados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialExpandedEstados);
    const handleTabChange = (value)=>setActiveTab(value);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const canonicalDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AparienciaPage.useMemo[canonicalDark]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark")
    }["AparienciaPage.useMemo[canonicalDark]"], [
        currentPreset
    ]);
    const canonicalLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AparienciaPage.useMemo[canonicalLight]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light")
    }["AparienciaPage.useMemo[canonicalLight]"], [
        currentPreset
    ]);
    const getInitialTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AparienciaPage.useCallback[getInitialTokens]": ()=>{
            const ov = loadLabOverrides(currentPreset);
            return {
                dark: ov.dark ?? baseFromTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark")),
                light: ov.light ?? baseFromTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light"))
            };
        }
    }["AparienciaPage.useCallback[getInitialTokens]"], [
        currentPreset
    ]);
    const [localTokensByMode, setLocalTokensByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AparienciaPage.useState": ()=>getInitialTokens()
    }["AparienciaPage.useState"]);
    const [lastSavedByMode, setLastSavedByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AparienciaPage.useState": ()=>getInitialTokens()
    }["AparienciaPage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AparienciaPage.useEffect": ()=>{
            const next = getInitialTokens();
            setLocalTokensByMode(next);
            setLastSavedByMode(next);
        }
    }["AparienciaPage.useEffect"], [
        currentPreset,
        getInitialTokens
    ]);
    const getInitialStateTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AparienciaPage.useCallback[getInitialStateTokens]": ()=>{
            const ov = loadLabStateOverrides(currentPreset);
            const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark");
            const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light");
            return {
                dark: ov.dark ?? stateTokensFromTheme(dark),
                light: ov.light ?? stateTokensFromTheme(light)
            };
        }
    }["AparienciaPage.useCallback[getInitialStateTokens]"], [
        currentPreset
    ]);
    const [localStatesByMode, setLocalStatesByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AparienciaPage.useState": ()=>getInitialStateTokens()
    }["AparienciaPage.useState"]);
    const [lastSavedStatesByMode, setLastSavedStatesByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AparienciaPage.useState": ()=>getInitialStateTokens()
    }["AparienciaPage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AparienciaPage.useEffect": ()=>{
            const next = getInitialStateTokens();
            setLocalStatesByMode(next);
            setLastSavedStatesByMode(next);
        }
    }["AparienciaPage.useEffect"], [
        currentPreset,
        getInitialStateTokens
    ]);
    const currentTokens = localTokensByMode[editMode];
    const currentStates = localStatesByMode[theme];
    const baseColorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AparienciaPage.useMemo[baseColorOptions]": ()=>{
            const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", editMode);
            const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", editMode);
            return {
                accent: ensureCurrentColorOption(currentTokens.accent, uniqueColorOptions([
                    {
                        value: controlPack.accent,
                        label: "● Verde"
                    },
                    {
                        value: securityPack.accent,
                        label: "● Azul"
                    },
                    {
                        value: controlPack.warning,
                        label: "● Amarillo"
                    },
                    {
                        value: controlPack.danger,
                        label: "● Rojo"
                    },
                    {
                        value: controlPack.info,
                        label: "● Celeste"
                    }
                ])),
                background: ensureCurrentColorOption(currentTokens.background, uniqueColorOptions([
                    {
                        value: controlPack.background,
                        label: "● Base"
                    },
                    {
                        value: securityPack.background,
                        label: "● Profundo"
                    },
                    {
                        value: controlPack.surface,
                        label: "● Superficie"
                    },
                    {
                        value: controlPack.border,
                        label: "● Pizarra"
                    }
                ])),
                surface: ensureCurrentColorOption(currentTokens.surface, uniqueColorOptions([
                    {
                        value: controlPack.surface,
                        label: "● Surface"
                    },
                    {
                        value: securityPack.surface,
                        label: "● Elevada"
                    },
                    {
                        value: controlPack.border,
                        label: "● Gris"
                    },
                    {
                        value: controlPack.background,
                        label: "● Base"
                    }
                ])),
                text: ensureCurrentColorOption(currentTokens.text, uniqueColorOptions([
                    {
                        value: controlPack.text,
                        label: "● Texto base"
                    },
                    {
                        value: securityPack.text,
                        label: "● Texto claro"
                    },
                    {
                        value: controlPack.pending,
                        label: "● Muted"
                    },
                    {
                        value: controlPack.buttonActionPrimaryBg,
                        label: "● Contraste"
                    }
                ]))
            };
        }
    }["AparienciaPage.useMemo[baseColorOptions]"], [
        currentTokens,
        editMode
    ]);
    const baseColorOptionsByMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AparienciaPage.useMemo[baseColorOptionsByMode]": ()=>{
            const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", "dark");
            const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", "dark");
            const controlLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", "light");
            const securityLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", "light");
            const buildOptions = {
                "AparienciaPage.useMemo[baseColorOptionsByMode].buildOptions": (tokens, mode)=>{
                    const control = mode === "dark" ? controlPack : controlLight;
                    const security = mode === "dark" ? securityPack : securityLight;
                    return {
                        accent: ensureCurrentColorOption(tokens.accent, uniqueColorOptions([
                            {
                                value: control.accent,
                                label: "● Verde"
                            },
                            {
                                value: security.accent,
                                label: "● Azul"
                            },
                            {
                                value: control.warning,
                                label: "● Amarillo"
                            },
                            {
                                value: control.danger,
                                label: "● Rojo"
                            },
                            {
                                value: control.info,
                                label: "● Celeste"
                            }
                        ])),
                        background: ensureCurrentColorOption(tokens.background, uniqueColorOptions([
                            {
                                value: control.background,
                                label: "● Base"
                            },
                            {
                                value: security.background,
                                label: "● Profundo"
                            },
                            {
                                value: control.surface,
                                label: "● Superficie"
                            },
                            {
                                value: control.border,
                                label: "● Pizarra"
                            }
                        ])),
                        surface: ensureCurrentColorOption(tokens.surface, uniqueColorOptions([
                            {
                                value: control.surface,
                                label: "● Surface"
                            },
                            {
                                value: security.surface,
                                label: "● Elevada"
                            },
                            {
                                value: control.border,
                                label: "● Gris"
                            },
                            {
                                value: control.background,
                                label: "● Base"
                            }
                        ])),
                        text: ensureCurrentColorOption(tokens.text, uniqueColorOptions([
                            {
                                value: control.text,
                                label: "● Texto base"
                            },
                            {
                                value: security.text,
                                label: "● Texto claro"
                            },
                            {
                                value: control.pending,
                                label: "● Muted"
                            },
                            {
                                value: control.buttonActionPrimaryBg,
                                label: "● Contraste"
                            }
                        ]))
                    };
                }
            }["AparienciaPage.useMemo[baseColorOptionsByMode].buildOptions"];
            return {
                dark: buildOptions(localTokensByMode.dark, "dark"),
                light: buildOptions(localTokensByMode.light, "light")
            };
        }
    }["AparienciaPage.useMemo[baseColorOptionsByMode]"], [
        localTokensByMode
    ]);
    const stateColorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AparienciaPage.useMemo[stateColorOptions]": ()=>{
            const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", theme);
            const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", theme);
            return {
                success: ensureCurrentColorOption(currentStates.success, uniqueColorOptions([
                    {
                        value: controlPack.success,
                        label: "● Control"
                    },
                    {
                        value: securityPack.success,
                        label: "● Security"
                    }
                ])),
                warning: ensureCurrentColorOption(currentStates.warning, uniqueColorOptions([
                    {
                        value: controlPack.warning,
                        label: "● Control"
                    },
                    {
                        value: securityPack.warning,
                        label: "● Security"
                    }
                ])),
                error: ensureCurrentColorOption(currentStates.error, uniqueColorOptions([
                    {
                        value: controlPack.danger,
                        label: "● Control"
                    },
                    {
                        value: securityPack.danger,
                        label: "● Security"
                    }
                ])),
                info: ensureCurrentColorOption(currentStates.info, uniqueColorOptions([
                    {
                        value: controlPack.info,
                        label: "● Control"
                    },
                    {
                        value: securityPack.info,
                        label: "● Security"
                    }
                ]))
            };
        }
    }["AparienciaPage.useMemo[stateColorOptions]"], [
        currentStates,
        theme
    ]);
    const handleChange = (mode, field, value)=>{
        setLocalTokensByMode((prev)=>({
                ...prev,
                [mode]: {
                    ...prev[mode],
                    [field]: value
                }
            }));
    };
    const handleSaveBaseColors = (mode)=>{
        const tokens = localTokensByMode[mode];
        setLastSavedByMode((prev)=>({
                ...prev,
                [mode]: tokens
            }));
        saveLabOverrides(currentPreset, mode, tokens);
        showToast({
            title: "Cambios guardados",
            type: "success"
        });
    };
    const handleChangeState = (field, value)=>{
        const mode = theme;
        setLocalStatesByMode((prev)=>({
                ...prev,
                [mode]: {
                    ...prev[mode],
                    [field]: value
                }
            }));
    };
    const handleSaveEstados = ()=>{
        const mode = theme;
        const tokens = localStatesByMode[mode];
        setLastSavedStatesByMode((prev)=>({
                ...prev,
                [mode]: tokens
            }));
        saveLabStateOverrides(currentPreset, mode, tokens);
        showToast({
            title: "Cambios guardados",
            type: "success"
        });
    };
    const handleCopyHex = (hex)=>{
        navigator.clipboard.writeText(hex);
        showToast({
            title: "Color copiado",
            type: "success",
            duration: 1500
        });
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$flags$2f$devFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEV_UI_ENABLED"] || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$mockSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSession"].role !== "OWNER") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
            title: "Apariencia",
            breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Desarrollador"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2007,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2008,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: semantic.text.active
                        },
                        children: "Apariencia"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2009,
                        columnNumber: 25
                    }, void 0)
                ]
            }, void 0, true),
            showHeaderDivider: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$AccessDeniedState$2f$AccessDeniedState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessDeniedState"], {
                title: "Acceso restringido",
                description: "Esta pantalla solo está disponible para administradores en modo desarrollo."
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 2014,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 2003,
            columnNumber: 13
        }, this);
    }
    // Layout tipo settings: PageShell > PanelCard (gran superficie) > grid (sidebar | content)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `.apariencia-content-scroll::-webkit-scrollbar { display: none; }
.apariencia-content-scroll { scrollbar-width: none; -ms-overflow-style: none; }
.base-section-scroll::-webkit-scrollbar { display: none; }
.base-section-scroll { scrollbar-width: none; -ms-overflow-style: none; }
.appearance-cards-scroll::-webkit-scrollbar { display: none; }
.appearance-cards-scroll { scrollbar-width: none; -ms-overflow-style: none; }
.base-tema-scroll::-webkit-scrollbar { display: none; }
.base-tema-scroll { scrollbar-width: none; -ms-overflow-style: none; }`
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 2025,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
                variant: "fluid",
                title: "Apariencia",
                breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Desarrollador"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2038,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2039,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Apariencia"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2040,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2041,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: semantic.text.active
                            },
                            children: activeTab
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2042,
                            columnNumber: 21
                        }, void 0)
                    ]
                }, void 0, true),
                headerStyle: {
                    borderBottom: "none"
                },
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: `calc(100vh - ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"].appBarHeight}px - ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24] * 2}px)`,
                    overflow: "hidden",
                    minHeight: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelCard"], {
                    bodyStyle: {
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: `${sidebarCollapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SECONDARY_NAV_SIDEBAR_WIDTH"].collapsed : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SECONDARY_NAV_SIDEBAR_WIDTH"].expanded}px minmax(0, 1fr)`,
                            gridTemplateRows: "1fr",
                            width: "100%",
                            minHeight: 0,
                            overflow: "hidden",
                            transition: "grid-template-columns 0.25s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: 0,
                                    minWidth: 0,
                                    overflowX: "hidden",
                                    gridRow: "1 / -1",
                                    position: "relative",
                                    borderRight: sidebarCollapsed ? "none" : `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                    paddingRight: sidebarCollapsed ? 3 : 0
                                },
                                children: [
                                    sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            right: 2,
                                            bottom: 0,
                                            width: 1,
                                            backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                            pointerEvents: "none"
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2081,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecondaryNavSidebar"], {
                                        groups: TABS_GROUPS,
                                        value: activeTab,
                                        onChange: handleTabChange,
                                        collapsed: sidebarCollapsed,
                                        onCollapsedChange: setSidebarCollapsed,
                                        ariaLabel: "Secciones de apariencia"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2094,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 2067,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "apariencia-content-scroll",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: activeTab === "Base" || activeTab === "Galería" || activeTab === "Estados" || activeTab === "Componentes" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                    minWidth: 0,
                                    minHeight: 0,
                                    flex: 1,
                                    overflowY: "auto",
                                    overflowX: activeTab === "Base" || activeTab === "Estados" || activeTab === "Componentes" ? "auto" : "hidden",
                                    padding: activeTab === "Base" || activeTab === "Galería" || activeTab === "Estados" || activeTab === "Componentes" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                    marginLeft: sidebarCollapsed ? -3 : 0
                                },
                                children: [
                                    activeTab === "Galería" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                color: semantic.text.active
                                            },
                                            children: "Galería"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2121,
                                            columnNumber: 37
                                        }, void 0),
                                        headerVariant: "title",
                                        borderColor: semantic.border.subtle ?? semantic.border.default,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                boxSizing: "border-box",
                                                width: "100%"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 290px))",
                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
                                                    width: "100%",
                                                    justifyContent: "start"
                                                },
                                                role: "list",
                                                "aria-label": "Galería de temas",
                                                children: GALLERY_THEMES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeGalleryCard, {
                                                        theme: t,
                                                        isActive: currentPreset === t.id,
                                                        onSelect: ()=>setPreset(t.id),
                                                        onEdit: ()=>{
                                                            setActiveTab("Base");
                                                            setSelectedBaseSub("tema");
                                                            setPreset(t.id);
                                                        },
                                                        semantic: semantic
                                                    }, t.id, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2149,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2137,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2136,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2119,
                                        columnNumber: 29
                                    }, this),
                                    activeTab === "Base" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                            headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0,
                                                    display: "flex",
                                                    width: "100%"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTabs"], {
                                                    items: BASE_SECTION_TABS,
                                                    activeValue: selectedBaseSub ?? "tema",
                                                    onChange: (v)=>setSelectedBaseSub(v),
                                                    ariaLabel: "Subsecciones de Base"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2172,
                                                    columnNumber: 41
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2171,
                                                columnNumber: 37
                                            }, void 0),
                                            headerVariant: "tabs",
                                            borderColor: semantic.border.subtle ?? semantic.border.default,
                                            children: [
                                                (selectedBaseSub ?? "tema") === "tema" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "base-tema-scroll",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "flex-start",
                                                        flex: 1,
                                                        minHeight: 0,
                                                        minWidth: 0,
                                                        overflowX: "auto",
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        boxSizing: "border-box",
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                                                            minWidth: 460,
                                                            maxWidth: 500,
                                                            flexShrink: 0,
                                                            backgroundColor: semantic.surface.card ?? semantic.surface.default,
                                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].card,
                                                            border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                                                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Tema"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2222,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$dev$2f$PresetSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetSelector"], {}, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2232,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2214,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    width: "100%",
                                                                    backgroundColor: semantic.border.subtle ?? semantic.border.default
                                                                },
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2234,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Aspecto"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2250,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModeSegmentedControl, {
                                                                        value: editMode,
                                                                        onChange: setEditMode,
                                                                        semantic: semantic
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2260,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2242,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    width: "100%",
                                                                    backgroundColor: semantic.border.subtle ?? semantic.border.default
                                                                },
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2266,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][12]
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Vista previa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2281,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            minWidth: 280,
                                                                            width: "100%",
                                                                            maxWidth: 400
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemePreview, {
                                                                            tokens: currentTokens,
                                                                            semantic: semantic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                            lineNumber: 2292,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2291,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2274,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2199,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2184,
                                                    columnNumber: 33
                                                }, this),
                                                selectedBaseSub === "colores" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "appearance-cards-scroll",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        flexWrap: "wrap",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                                                        width: "100%",
                                                        flex: 1,
                                                        minHeight: 0,
                                                        alignItems: "flex-start",
                                                        justifyContent: "flex-start",
                                                        overflowX: "auto",
                                                        minWidth: 0,
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 320,
                                                                maxWidth: 420,
                                                                flex: "1 1 320",
                                                                minHeight: 0,
                                                                display: "flex"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCardWithLocalExpansion, {
                                                                mode: "dark",
                                                                tokens: localTokensByMode.dark,
                                                                originalTokens: canonicalDark,
                                                                options: baseColorOptionsByMode.dark,
                                                                onChange: (k, v)=>handleChange("dark", k, v),
                                                                titleAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModoAyudaSwitch, {
                                                                    value: modoAyuda,
                                                                    onChange: setModoAyuda
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2324,
                                                                    columnNumber: 58
                                                                }, void 0),
                                                                semantic: semantic,
                                                                isDirty: !baseTokensEqual(localTokensByMode.dark, lastSavedByMode.dark),
                                                                onSave: ()=>handleSaveBaseColors("dark"),
                                                                onCopyHex: handleCopyHex
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2318,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, "dark", false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2317,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 320,
                                                                maxWidth: 420,
                                                                flex: "1 1 320",
                                                                minHeight: 0,
                                                                display: "flex"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCardWithLocalExpansion, {
                                                                mode: "light",
                                                                tokens: localTokensByMode.light,
                                                                originalTokens: canonicalLight,
                                                                options: baseColorOptionsByMode.light,
                                                                onChange: (k, v)=>handleChange("light", k, v),
                                                                titleAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModoAyudaSwitch, {
                                                                    value: modoAyuda,
                                                                    onChange: setModoAyuda
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2338,
                                                                    columnNumber: 58
                                                                }, void 0),
                                                                semantic: semantic,
                                                                isDirty: !baseTokensEqual(localTokensByMode.light, lastSavedByMode.light),
                                                                onSave: ()=>handleSaveBaseColors("light"),
                                                                onCopyHex: handleCopyHex
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2332,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, "light", false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2331,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2299,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2169,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false),
                                    activeTab === "Estados" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                color: semantic.text.active
                                            },
                                            children: "Estados"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2354,
                                            columnNumber: 29
                                        }, void 0),
                                        headerVariant: "title",
                                        borderColor: semantic.border.subtle ?? semantic.border.default,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "appearance-cards-scroll",
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                                                width: "100%",
                                                flex: 1,
                                                minHeight: 0,
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                overflowX: "auto",
                                                minWidth: 0,
                                                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                boxSizing: "border-box"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: 320,
                                                    maxWidth: 420,
                                                    flex: "1 1 320",
                                                    minHeight: 0,
                                                    display: "flex"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EstadosCard, {
                                                    tokens: currentStates,
                                                    originalTokens: stateTokensFromTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, theme)),
                                                    options: stateColorOptions,
                                                    onChange: handleChangeState,
                                                    expandedByKey: expandedEstados,
                                                    onExpandToggle: (key)=>setExpandedEstados((prev)=>({
                                                                ...prev,
                                                                [key]: !prev[key]
                                                            })),
                                                    semantic: semantic,
                                                    isDirty: !stateTokensEqual(currentStates, lastSavedStatesByMode[theme]),
                                                    onSave: handleSaveEstados,
                                                    onCopyHex: handleCopyHex
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2388,
                                                    columnNumber: 33
                                                }, this)
                                            }, "estados", false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2387,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2369,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2352,
                                        columnNumber: 21
                                    }, this),
                                    activeTab === "Componentes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentsSection"], {}, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2407,
                                        columnNumber: 49
                                    }, this),
                                    activeTab === "Avanzado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                    flexShrink: 0,
                                                    paddingLeft: 0,
                                                    paddingRight: 0,
                                                    width: "100%"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        margin: 0,
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                        color: semantic.text.active
                                                    },
                                                    children: "Avanzado"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2422,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2411,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][24],
                                                    width: "100%",
                                                    maxWidth: CONTENT_MAX_WIDTH,
                                                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16]
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingSection, {
                                                        title: "Tema",
                                                        description: "Preset activo para ajustes avanzados.",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                maxWidth: 320
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                                                label: "Preset activo",
                                                                options: [
                                                                    ...AVAILABLE_THEMES
                                                                ],
                                                                value: currentPreset,
                                                                onChange: (v)=>setPreset(v)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2437,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2436,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2435,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingSection, {
                                                        title: "Ajustes avanzados",
                                                        description: "Semantic tokens, radius, spacing, sombras.",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"][16],
                                                                width: "100%"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Semantic tokens",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2454,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Radius",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2455,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Spacing",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2456,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Shadows",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2457,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2446,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2445,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2434,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 2103,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2055,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 2054,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 2033,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s6(AparienciaPage, "qTIgR3fTIZkJFC3F/DgXtL/CyrY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualPreset"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c12 = AparienciaPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "ModeSegmentedControl");
__turbopack_context__.k.register(_c1, "TokenRowWithSwatch");
__turbopack_context__.k.register(_c2, "BaseColorSelector");
__turbopack_context__.k.register(_c3, "BaseColorExpandableRow");
__turbopack_context__.k.register(_c4, "BaseColorsCardWithLocalExpansion");
__turbopack_context__.k.register(_c5, "BaseColorsCard");
__turbopack_context__.k.register(_c6, "EstadosCard");
__turbopack_context__.k.register(_c7, "ThemePreview");
__turbopack_context__.k.register(_c8, "SettingRowItem");
__turbopack_context__.k.register(_c9, "SettingSection");
__turbopack_context__.k.register(_c10, "ModoAyudaSwitch");
__turbopack_context__.k.register(_c11, "ThemeGalleryCard");
__turbopack_context__.k.register(_c12, "AparienciaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_396a4f76._.js.map