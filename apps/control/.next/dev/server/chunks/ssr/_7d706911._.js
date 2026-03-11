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
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"].pageHeaderToContentSpacing,
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
const PanelCardBody = ({ children, style: customStyle })=>{
    const baseStyle = {
        flex: 1,
        overflowY: "auto",
        minHeight: 0,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const PanelCard = ({ bodyStyle, title, description, headerStart, headerActions, tabs, children, footer })=>{
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
                lineNumber: 46,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCardBody"], {
                style: bodyStyle,
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            footer != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCardFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PanelCardFooter"], {
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
"[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecondaryNavSidebar",
    ()=>SecondaryNavSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ITEM_HEIGHT = 34;
const COLLAPSE_BUTTON_SIZE = 36;
const CHEVRON_ICON_SIZE = 18;
const ITEM_PADDING_HORIZONTAL = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4];
const groupTitleStyle = (semantic, isFirst)=>({
        textTransform: "uppercase",
        color: semantic.sidebar?.groupLabel ?? semantic.text.muted ?? semantic.text.disabled,
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
        marginTop: isFirst ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4] : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
        marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
        paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
        letterSpacing: "0.05em",
        opacity: 0.8
    });
const SecondaryNavSidebar = ({ items = [], groups, value, onChange, collapsed = false, onCollapsedChange, ariaLabel = "Subsecciones" })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [hoveredValue, setHoveredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const resolvedGroups = groups ?? (items.length > 0 ? [
        {
            title: "",
            items
        }
    ] : []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                style: {
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    padding: collapsed ? `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}`,
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
                    onCollapsedChange != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: collapsed ? "center" : "flex-end",
                            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                            paddingBottom: 0,
                            marginBottom: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
                    resolvedGroups.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: groupIndex < resolvedGroups.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8] : 0
                            },
                            children: [
                                group.title.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...groupTitleStyle(semantic, groupIndex === 0),
                                        ...collapsed ? {
                                            position: "relative"
                                        } : {}
                                    },
                                    "aria-hidden": collapsed,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: "calc(100% - 7px)",
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: isDisabled,
                                            "aria-pressed": isActive,
                                            onClick: ()=>!isDisabled && onChange(item.value),
                                            onMouseEnter: ()=>setHoveredValue(item.value),
                                            onMouseLeave: ()=>setHoveredValue(null),
                                            style: {
                                                padding: 0,
                                                paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    height: ITEM_HEIGHT,
                                                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                                                    backgroundColor: bg,
                                                    color: fg,
                                                    opacity: isDisabled ? 0.5 : 1,
                                                    transition: "background-color 0.2s ease, color 0.2s ease"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: collapsed ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                                        minWidth: 0,
                                                        justifyContent: collapsed ? "center" : "flex-start"
                                                    },
                                                    children: [
                                                        item.icon != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                flexShrink: 0,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
                                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
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
}),
"[project]/packages/console/ui/molecules/SecondaryNavSidebar/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECONDARY_NAV_SIDEBAR_WIDTH",
    ()=>SECONDARY_NAV_SIDEBAR_WIDTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-ssr] (ecmascript)");
;
const SECONDARY_NAV_SIDEBAR_WIDTH = {
    collapsed: 52,
    expanded: 176
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
const ActionIcon = ({ name, onClick, label, size = 16, color, hoverColor, isActive = false })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const effectiveColor = color || semantic.icon?.muted || semantic.text.muted || semantic.text.default;
    const effectiveHoverColor = hoverColor ?? semantic.icon?.active ?? semantic.text.hover;
    const showActive = isHovered || isActive;
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
            backgroundColor: showActive ? semantic.surface.hoverElevated ?? semantic.surface.hover : "transparent",
            transition: "all 0.2s ease",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: showActive ? effectiveHoverColor : effectiveColor
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
"[project]/apps/control/app/(shell)/lab/apariencia/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/apps/control/app/(shell)/lab/apariencia/page.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_7d706911._.js.map