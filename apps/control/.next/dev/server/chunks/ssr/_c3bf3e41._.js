module.exports = [
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
                                    color: semantic.text.muted,
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
"[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardHeader",
    ()=>PanelCardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const PanelCardHeader = ({ title, description, headerStart, tabs, actions })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasContent = title || description || headerStart || tabs || actions;
    if (!hasContent) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingBottom: tabs ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][0] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            borderBottom: tabs ? undefined : `1px solid ${semantic.border.subtle || semantic.border.default}`
        },
        children: [
            (title || description || headerStart || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            headerStart,
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                    color: semantic.text.active,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    marginTop: title ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4] : 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    color: semantic.text.muted,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary
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
                    actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            tabs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: title || description || headerStart || actions ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12] : 0,
                    marginLeft: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                    marginRight: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                        },
                        children: tabs
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            backgroundColor: semantic.border.subtle || semantic.border.default,
                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
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
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardBody",
    ()=>PanelCardBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const PanelCardBody = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card-body-scroll",
        style: {
            flex: 1,
            overflowY: "auto",
            minHeight: 0,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/console/ui/atoms/Spinner/Spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Spinner = ({ size = 24, color })=>{
    // We use useContext directly to avoid useTheme() throwing if Provider is missing
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeContext"]);
    const theme = themeContext?.theme || "light";
    // Fallback to global semantic tokens if theme is not found in tokens
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme]?.semantic || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic;
    const effectiveColor = color || semantic.primary.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "inline-block",
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    animation: "spin 1s linear infinite"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCardFooter",
    ()=>PanelCardFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Spinner$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Spinner/Spinner.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/** Variants, size y shape oficiales del Design System para panel footers. Igual que FormActions. NO cambiar. */ const FOOTER_BUTTON_SIZE = "sm";
const PanelCardFooter = ({ primaryLabel, primaryOnClick, primaryLoading = false, primaryDisabled = false, secondaryLabel, secondaryOnClick, secondaryDisabled = false, dangerLabel, dangerOnClick, dangerDisabled = false, status })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasDanger = Boolean(dangerLabel && dangerOnClick);
    const hasLeft = hasDanger || status;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            flexShrink: 0,
            borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
            display: "flex",
            alignItems: "center",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
            justifyContent: hasLeft ? "space-between" : "flex-end",
            flexWrap: "wrap"
        },
        children: [
            hasLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    hasDanger && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "actionPrimary",
                        size: FOOTER_BUTTON_SIZE,
                        shape: "panel",
                        onClick: primaryOnClick,
                        disabled: primaryDisabled,
                        children: primaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Spinner$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
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
}),
"[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelCard",
    ()=>PanelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const PanelCard = ({ title, description, headerStart, headerActions, tabs, children, footer })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            backgroundColor: semantic.surface.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            overflow: "hidden",
            fontFamily: "inherit"
        },
        "aria-label": title ?? "Panel",
        children: [
            (title || description || headerStart || tabs || headerActions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCardHeader"], {
                title: title,
                description: description,
                headerStart: headerStart,
                tabs: tabs,
                actions: headerActions
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCardBody"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            footer != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCardFooter"], {
                ...footer
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 56,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/console/ui/containers/PanelCard/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCardFooter.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/packages/console/ui/atoms/SelectField/SelectField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectField",
    ()=>SelectField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SelectField = ({ label, value, placeholder = "Selecciona...", error, errorMessage, helperText, disabled, required, open, onClick, onFocus, onBlur, id })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasValue = !!value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "select-field-container",
        style: {
            position: "relative",
            marginBottom: 0,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            "--select-height": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48]}px`,
            "--select-padding-x": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--select-padding-top": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]}px`,
            "--select-padding-bottom": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px`,
            "--select-radius": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md}px`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "select-field-value",
                        children: value || placeholder
                    }, void 0, false, {
                        fileName: "[project]/packages/console/ui/atoms/SelectField/SelectField.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "select-field-label",
                style: {
                    color: error ? semantic.danger.default : undefined
                },
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            (error || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "select-field-helper",
                role: error ? "alert" : undefined,
                style: {
                    display: "block",
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
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
}),
"[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectSingle",
    ()=>SelectSingle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$SelectField$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/SelectField/SelectField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const SelectSingle = ({ label, options, value, defaultValue, onChange, error, errorMessage, helperText, disabled, required, id })=>{
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uncontrolledValue, setUncontrolledValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValue || "");
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const isControlled = value !== undefined;
    const selectedValue = isControlled ? value : uncontrolledValue;
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                setHighlightedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        isOpen
    ]);
    // Keyboard navigation
    const handleSelectOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((optionValue)=>{
        if (!isControlled) {
            setUncontrolledValue(optionValue);
        }
        setIsOpen(false);
        setHighlightedIndex(-1);
        if (onChange) {
            onChange(optionValue);
        }
    }, [
        onChange,
        isControlled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleKeyDown = (event)=>{
            switch(event.key){
                case "Escape":
                    event.preventDefault();
                    setIsOpen(false);
                    setHighlightedIndex(-1);
                    break;
                case "ArrowDown":
                    event.preventDefault();
                    setHighlightedIndex((prev)=>prev < options.length - 1 ? prev + 1 : prev);
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    setHighlightedIndex((prev)=>prev > 0 ? prev - 1 : 0);
                    break;
                case "Enter":
                    event.preventDefault();
                    if (highlightedIndex >= 0 && highlightedIndex < options.length) {
                        handleSelectOption(options[highlightedIndex].value);
                    }
                    break;
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        isOpen,
        highlightedIndex,
        options,
        handleSelectOption
    ]);
    // Scroll highlighted option into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && highlightedIndex >= 0 && dropdownRef.current) {
            const highlightedElement = dropdownRef.current.children[highlightedIndex];
            if (highlightedElement) {
                highlightedElement.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth"
                });
            }
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "select-single-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$SelectField$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectField"], {
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
            isOpen && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingSurface"], {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: dropdownRef,
                    className: "floating-scroll",
                    style: {
                        maxHeight: "200px",
                        overflowY: "auto"
                    },
                    children: options.map((option, index)=>{
                        const isSelected = option.value === selectedValue;
                        const isHighlighted = index === highlightedIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `select-option ${isSelected ? "is-selected" : ""} ${isHighlighted ? "is-highlighted" : ""}`,
                            role: "option",
                            "aria-selected": isSelected,
                            onClick: ()=>handleSelectOption(option.value),
                            onMouseEnter: ()=>setHighlightedIndex(index),
                            style: {
                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
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
}),
"[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionIcon",
    ()=>ActionIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ActionIcon = ({ name, onClick, label, size = 16, color, hoverColor })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const effectiveColor = color || semantic.icon?.muted || semantic.text.muted || semantic.text.default;
    const effectiveHoverColor = hoverColor ?? semantic.icon?.active ?? semantic.text.hover;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        role: "button",
        "aria-label": label,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            cursor: "pointer",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
            backgroundColor: isHovered ? semantic.surface.hoverElevated ?? semantic.surface.hover : "transparent",
            transition: "all 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: isHovered ? effectiveHoverColor : effectiveColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
            name: name,
            size: size,
            color: "currentColor"
        }, void 0, false, {
            fileName: "[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/console/ui/atoms/Input/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
;
;
;
;
const Input = ({ label, error, errorMessage, helperText, id, className, required, style, size = "md", ...props })=>{
    // Generate a safe, stable ID if none provided
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const inputId = id || generatedId;
    const helperId = helperText || errorMessage ? `${inputId}-helper` : undefined;
    // Semantic Tokens
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].semantic;
    // Size logic
    const isSmall = size === "sm";
    const height = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32] + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48]; // 36px vs 48px
    const paddingX = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24];
    const paddingTop = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]; // 16-8=8px top vs 24-8=16px top
    const paddingBottom = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]; // 8px vs 4px
    const paddingLeft = isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12] : undefined; // Force 12px for sm instead of calc(12-7)=5px
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `input-container ${className || ""}`,
        style: {
            position: "relative",
            marginBottom: 0,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            // vars moved here for scope visibility to siblings (Label)
            "--input-height": `${height}px`,
            "--input-padding-x": `${paddingX}px`,
            "--input-padding-top": `${paddingTop}px`,
            "--input-padding-bottom": `${paddingBottom}px`,
            ...paddingLeft ? {
                "--input-padding-left": `${paddingLeft}px`
            } : {},
            "--input-radius": `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md}px`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "input-label",
                style: {
                    color: error ? semantic.danger.default : undefined
                },
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            (error || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: helperId,
                className: "input-helper",
                role: error ? "alert" : undefined,
                style: {
                    display: "block",
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
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
}),
"[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDeniedState",
    ()=>AccessDeniedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
;
;
;
;
const AccessDeniedState = ({ title = "Sin acceso", description = "No tienes permisos para ver este contenido. Contacta a tu administrador si crees que esto es un error.", action })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48],
            textAlign: "center",
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            width: "100%",
            height: "100%",
            minHeight: 200
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: 0,
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: semantic.warning.default
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0,
                    marginBottom: action ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24] : 0,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                    color: semantic.text.disabled,
                    maxWidth: 400
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/apps/control/app/(shell)/lab/apariencia/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AparienciaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Input/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/visualPresetStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/themeRegistry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$AccessDeniedState$2f$AccessDeniedState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$flags$2f$devFlags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/flags/devFlags.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$mockSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/auth/mockSession.ts [app-ssr] (ecmascript)");
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
const TABS = [
    {
        label: "Galería",
        value: "Galería"
    },
    {
        label: "Base",
        value: "Base"
    },
    {
        label: "Estados",
        value: "Estados"
    },
    {
        label: "Componentes",
        value: "Componentes"
    },
    {
        label: "Avanzado",
        value: "Avanzado"
    }
];
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
        label: "Accent"
    },
    {
        key: "background",
        label: "Background"
    },
    {
        key: "surface",
        label: "Surface"
    },
    {
        key: "text",
        label: "Text"
    }
];
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tablist",
        "aria-label": "Modo editado",
        style: {
            display: "flex",
            flexWrap: "nowrap",
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            backgroundColor: semantic.surface.hover || semantic.surface.default,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][2],
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][2]
        },
        children: options.map((opt)=>{
            const isActive = value === opt.value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "tab",
                "aria-selected": isActive,
                onClick: ()=>onChange(opt.value),
                style: {
                    flex: 1,
                    minWidth: 0,
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: isActive ? semantic.text.active : semantic.text.muted,
                    backgroundColor: isActive ? semantic.surface.default : "transparent",
                    border: "none",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                    cursor: "pointer",
                    transition: "color 0.2s, background-color 0.2s"
                },
                children: opt.label
            }, opt.value, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 140,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
function TokenRowWithSwatch({ label, value, options, onChange, semantic }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            alignItems: "center",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
            width: "100%",
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSingle"], {
                label: label,
                helperText: value.toUpperCase(),
                options: options,
                value: value,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][40],
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][40],
                    flexShrink: 0,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                    backgroundColor: value || semantic.surface.default
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 183,
        columnNumber: 9
    }, this);
}
function ThemePreview({ tokens, semantic }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: tokens.background,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: tokens.surface,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
                    border: `1px solid ${tokens.border}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: tokens.text,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                        },
                        children: "Texto principal"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: tokens.text,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                            opacity: 0.75
                        },
                        children: "Texto secundario"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                style: {
                    alignSelf: "flex-start",
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    backgroundColor: tokens.accent,
                    color: tokens.background,
                    border: "none",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                    cursor: "default"
                },
                children: "Accent"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 264,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 223,
        columnNumber: 9
    }, this);
}
function ModoAyudaSwitch({ value, onChange }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
        name: "alert-circle",
        size: 18,
        color: value ? semantic.primary.default : semantic.text.disabled,
        hoverColor: value ? semantic.primary.default : undefined,
        onClick: ()=>onChange(!value)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 296,
        columnNumber: 9
    }, this);
}
function ThemeGalleryCard({ theme: galleryTheme, isActive, onSelect, semantic }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const previewColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(galleryTheme.id, "dark");
        const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(galleryTheme.id, "light");
        return [
            dark.background,
            dark.surface,
            dark.accent,
            light.background,
            light.accent
        ];
    }, [
        galleryTheme.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
            overflow: "hidden",
            boxShadow: isHovered ? "0 4px 16px rgba(0,0,0,0.14)" : "none",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 88,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${previewColors[0]} 0%, ${previewColors[1]} 30%, ${previewColors[2]} 70%, ${previewColors[3]} 100%)`,
                    borderTopLeftRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
                    borderTopRightRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
                    position: "relative"
                },
                children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        top: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                        right: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                        lineHeight: 1,
                        backgroundColor: semantic.success[300],
                        color: semantic.text.onSolid ?? semantic.text.active
                    },
                    children: "Activo"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 354,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 343,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: semantic.text.default,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                        },
                        children: galleryTheme.name
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 389,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: semantic.text.muted,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minWidth: 0
                        },
                        children: galleryTheme.description
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: semantic.text.muted,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs
                        },
                        children: galleryTheme.recommendedUse
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 408,
                        columnNumber: 17
                    }, this),
                    galleryTheme.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: galleryTheme.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    color: semantic.text.muted,
                                    backgroundColor: semantic.surface.hover || semantic.surface.default,
                                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm
                                },
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 416,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 414,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 378,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
                    borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "actionPrimary",
                            size: "sm",
                            shape: "panel",
                            onClick: onSelect,
                            children: "Usar tema"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 452,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            name: "more-horizontal",
                            size: 16,
                            label: "Opciones"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 460,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 444,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 436,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 325,
        columnNumber: 9
    }, this);
}
function AparienciaPage() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { currentPreset, setPreset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVisualPreset"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Base");
    const [modoAyuda, setModoAyuda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const canonicalDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark"), [
        currentPreset
    ]);
    const canonicalLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light"), [
        currentPreset
    ]);
    const [localTokensByMode, setLocalTokensByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            dark: baseFromTokens(canonicalDark),
            light: baseFromTokens(canonicalLight)
        }));
    const currentTokens = localTokensByMode[editMode];
    const baseColorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", editMode);
        const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", editMode);
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
    }, [
        currentTokens,
        editMode
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
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$flags$2f$devFlags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEV_UI_ENABLED"] || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$mockSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockSession"].role !== "OWNER") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageShell"], {
            title: "Apariencia",
            breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Desarrollador"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 551,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 552,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: semantic.text.active
                        },
                        children: "Apariencia"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 553,
                        columnNumber: 25
                    }, void 0)
                ]
            }, void 0, true),
            showHeaderDivider: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$AccessDeniedState$2f$AccessDeniedState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessDeniedState"], {
                title: "Acceso restringido",
                description: "Esta pantalla solo está disponible para administradores en modo desarrollo."
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 558,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 547,
            columnNumber: 13
        }, this);
    }
    // Estructura según panel-layout.mdc: PageShell > PanelCard > Header, Tabs, Body (scroll), Footer (sticky)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageShell"], {
        variant: "fluid",
        title: "Apariencia",
        breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Desarrollador"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 573,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "›"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 574,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: semantic.text.active
                    },
                    children: "Apariencia"
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 575,
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
            height: `calc(100vh - ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"].appBarHeight}px - ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24] * 2}px)`,
            overflow: "hidden",
            minHeight: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCard"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "220px minmax(0, 1fr)",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                    width: "100%",
                    minHeight: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            alignSelf: "start",
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                            backgroundColor: semantic.surface.card ?? semantic.surface.default,
                            border: `1px solid ${semantic.border.default}`,
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card
                        },
                        "aria-label": "Secciones de apariencia",
                        children: TABS.map((tab)=>{
                            const isActive = activeTab === tab.value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab(tab.value),
                                "aria-pressed": isActive,
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                                    border: `1px solid ${isActive ? semantic.border.default : "transparent"}`,
                                    backgroundColor: isActive ? semantic.surface.hover : "transparent",
                                    color: isActive ? semantic.text.active : semantic.text.muted,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    fontWeight: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 37
                                    }, this),
                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        style: {
                                            width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                                            backgroundColor: semantic.primary.default,
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 41
                                    }, this) : null
                                ]
                            }, tab.value, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 613,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 597,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        style: {
                                            color: semantic.text.active,
                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.md
                                        },
                                        children: activeTab
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModoAyudaSwitch, {
                                        value: modoAyuda,
                                        onChange: setModoAyuda
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 682,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 664,
                                columnNumber: 25
                            }, this),
                            activeTab === "Galería" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        style: {
                                            color: semantic.text.muted,
                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                                        },
                                        children: "Temas disponibles"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 695,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 290px))",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                                            width: "100%",
                                            justifyContent: "start"
                                        },
                                        role: "list",
                                        "aria-label": "Galería de temas",
                                        children: GALLERY_THEMES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeGalleryCard, {
                                                theme: t,
                                                isActive: currentPreset === t.id,
                                                onSelect: ()=>setPreset(t.id),
                                                semantic: semantic
                                            }, t.id, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 704,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 687,
                                columnNumber: 21
                            }, this),
                            activeTab === "Base" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                        width: "100%",
                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                        backgroundColor: semantic.surface.card ?? semantic.surface.default,
                                        border: `1px solid ${semantic.border.default}`,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                            variant: "body",
                                                            style: {
                                                                color: semantic.text.default,
                                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                                                            },
                                                            children: "Tema"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 1,
                                                                backgroundColor: semantic.border.subtle || semantic.border.default
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        width: "100%"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                                                label: "Preset activo",
                                                                options: [
                                                                    ...AVAILABLE_THEMES
                                                                ],
                                                                value: currentPreset,
                                                                onChange: (v)=>setPreset(v)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                                                minWidth: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                                    variant: "body",
                                                                    style: {
                                                                        color: semantic.text.muted,
                                                                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium
                                                                    },
                                                                    children: "Modo editado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModeSegmentedControl, {
                                                                    value: editMode,
                                                                    onChange: setEditMode,
                                                                    semantic: semantic
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 814,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 750,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                            variant: "body",
                                                            style: {
                                                                color: semantic.text.default,
                                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                                                            },
                                                            children: "Colores base"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 1,
                                                                backgroundColor: semantic.border.subtle || semantic.border.default
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        width: "100%"
                                                    },
                                                    children: BASE_TOKEN_KEYS.map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenRowWithSwatch, {
                                                            label: label,
                                                            value: currentTokens[key],
                                                            options: baseColorOptions[key],
                                                            onChange: (v)=>handleChange(editMode, key, v),
                                                            semantic: semantic
                                                        }, key, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 863,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                            variant: "body",
                                                            style: {
                                                                color: semantic.text.default,
                                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold
                                                            },
                                                            children: "Vista previa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 889,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 1,
                                                                backgroundColor: semantic.border.subtle || semantic.border.default
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 898,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 882,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemePreview, {
                                                        tokens: currentTokens,
                                                        semantic: semantic
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 875,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 738,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 730,
                                columnNumber: 21
                            }, this),
                            activeTab === "Estados" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                variant: "body",
                                                style: {
                                                    color: semantic.text.muted,
                                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium
                                                },
                                                children: "Tema:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24] * 6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                                    options: [
                                                        ...AVAILABLE_THEMES
                                                    ],
                                                    value: currentPreset,
                                                    onChange: (v)=>setPreset(v)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 917,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        style: {
                                            color: semantic.text.muted,
                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: "Colores de feedback del sistema"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                            maxWidth: 400
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Success",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 960,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Warning",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 961,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Danger",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 962,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Info",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 952,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 916,
                                columnNumber: 21
                            }, this),
                            activeTab === "Componentes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                variant: "body",
                                                style: {
                                                    color: semantic.text.muted,
                                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium
                                                },
                                                children: "Tema:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 979,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24] * 6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                                    options: [
                                                        ...AVAILABLE_THEMES
                                                    ],
                                                    value: currentPreset,
                                                    onChange: (v)=>setPreset(v)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 989,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 988,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 971,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        style: {
                                            color: semantic.text.muted,
                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: "Apariencia específica de componentes"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 996,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                                        },
                                        children: [
                                            "Buttons",
                                            "Cards",
                                            "Inputs",
                                            "Tables",
                                            "Badges"
                                        ].map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                    backgroundColor: semantic.surface.default,
                                                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
                                                    color: semantic.text.muted,
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                                                },
                                                children: name
                                            }, name, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1006,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 970,
                                columnNumber: 21
                            }, this),
                            activeTab === "Avanzado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                                variant: "body",
                                                style: {
                                                    color: semantic.text.muted,
                                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium
                                                },
                                                children: "Tema:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24] * 6
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSingle"], {
                                                    options: [
                                                        ...AVAILABLE_THEMES
                                                    ],
                                                    value: currentPreset,
                                                    onChange: (v)=>setPreset(v)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1052,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        style: {
                                            color: semantic.text.muted,
                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                                        },
                                        children: "Ajustes avanzados del sistema visual"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                            maxWidth: 400
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Semantic tokens",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Radius",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Spacing",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1080,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Shadows",
                                                value: "",
                                                placeholder: "—",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 1034,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 656,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 588,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 587,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 568,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_c3bf3e41._.js.map