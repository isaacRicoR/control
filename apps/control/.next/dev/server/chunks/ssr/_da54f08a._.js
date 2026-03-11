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
"[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionTabs",
    ()=>SectionTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SectionTabs = ({ items, activeValue, onChange, ariaLabel = "Subsecciones", className, style })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const tabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [underlineStyle, setUnderlineStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        width: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = requestAnimationFrame(()=>{
            const activeIndex = items.findIndex((item)=>item.value === activeValue);
            const currentTab = tabsRef.current[activeIndex];
            if (currentTab) {
                setUnderlineStyle({
                    left: currentTab.offsetLeft,
                    width: currentTab.offsetWidth
                });
            }
        });
        return ()=>cancelAnimationFrame(id);
    }, [
        activeValue,
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `section-tabs-scroll ${className ?? ""}`.trim(),
        style: {
            display: "flex",
            width: "100%",
            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48],
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .section-tabs-scroll::-webkit-scrollbar { display: none; }
            `
            }, void 0, false, {
                fileName: "[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": ariaLabel,
                style: {
                    display: "flex",
                    height: "100%",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                    position: "relative",
                    flex: "0 0 auto",
                    minWidth: "min-content"
                },
                children: [
                    items.map((item, index)=>{
                        const isActive = activeValue === item.value;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48],
                                display: "flex",
                                alignItems: "center",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                color: isActive ? semantic.text.active : semantic.text.muted,
                                backgroundColor: "transparent",
                                border: "none",
                                transition: "all 0.2s ease",
                                position: "relative"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    lineHeight: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]}px`
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                            height: 2,
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
}),
"[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.types.ts [app-ssr] (ecmascript)");
;
;
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
"[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/shadows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const GAP = 8;
function Tooltip({ content, children, placement = "top", delayMs = 150 }) {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const updatePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const trigger = triggerRef.current;
        const tooltip = tooltipRef.current;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const triggerRect = undefined;
        const tooltipRect = undefined;
        const left = undefined;
        const top = undefined;
    }, [
        placement
    ]);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        timeoutRef.current = setTimeout(()=>{
            setVisible(true);
        }, delayMs);
    }, [
        delayMs
    ]);
    const hide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setVisible(false);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (visible) {
            updatePosition();
        }
    }, [
        visible,
        updatePosition
    ]);
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
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
    const tooltipEl = visible && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: tooltipRef,
        role: "tooltip",
        onMouseEnter: show,
        onMouseLeave: hide,
        style: {
            position: "fixed",
            top: pos.top,
            left: pos.left,
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
            backgroundColor: semantic.surface.default,
            color: semantic.text.default,
            border: `1px solid ${semantic.border.default}`,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].dropdown,
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            child,
            tooltipEl
        ]
    }, void 0, true);
}
}),
"[project]/packages/console/ui/atoms/Tooltip/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-ssr] (ecmascript)");
;
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
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceSectionLayout",
    ()=>AppearanceSectionLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
"use client";
;
;
const AppearanceSectionLayout = ({ headerContent, headerVariant, borderColor, children })=>{
    const headerInner = headerVariant === "title" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48],
            paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
        },
        children: headerContent
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx",
        lineNumber: 31,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)) : headerContent;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                    flexShrink: 0,
                    position: "relative",
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "base-section-scroll",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    minHeight: 0,
                    flex: 1,
                    overflow: "auto",
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        minHeight: 0,
                        paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                        paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24]
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
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigCard",
    ()=>AppearanceConfigCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const BODY_PADDING = 20;
const FOOTER_PADDING_V = 16;
const FOOTER_PADDING_H = 20;
const AppearanceConfigCard = ({ title, titleAction, children, footer })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const hasFooter = footer != null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
            backgroundColor: semantic?.surface?.card ?? semantic?.surface?.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
            border: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    paddingTop: BODY_PADDING,
                    paddingLeft: BODY_PADDING,
                    paddingRight: BODY_PADDING,
                    paddingBottom: hasFooter ? 0 : BODY_PADDING,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                        },
                        children: [
                            titleAction,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: 0,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.md,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                    color: semantic?.text?.default
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 0
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            hasFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    borderTop: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                    paddingTop: FOOTER_PADDING_V,
                    paddingBottom: FOOTER_PADDING_V,
                    paddingLeft: FOOTER_PADDING_H,
                    paddingRight: FOOTER_PADDING_H,
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    justifyContent: "flex-end",
                    flexWrap: "wrap"
                },
                children: footer
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigRow",
    ()=>AppearanceConfigRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AppearanceConfigRow = ({ label, swatchColor, valueDisplay, editControl, isExpanded, onToggle, expandedContent })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [chevronHovered, setChevronHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderBottom: borderColor ? `1px solid ${borderColor}` : undefined
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    width: "100%",
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    paddingLeft: 0,
                    paddingRight: 0,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                },
                "aria-expanded": isExpanded,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32],
                            height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32],
                            flexShrink: 0,
                            borderRadius: "50%",
                            border: `1px solid ${borderColor}`,
                            backgroundColor: swatchColor || semantic?.surface?.default
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                    color: semantic?.text?.default
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "block",
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    color: semantic?.text?.muted,
                                    marginTop: 2
                                },
                                children: valueDisplay
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: (e)=>e.stopPropagation(),
                                children: editControl
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                                    minWidth: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32],
                                    minHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][32],
                                    background: chevronHovered ? semantic?.surface?.hoverElevated ?? semantic?.surface?.hover ?? "transparent" : "transparent",
                                    border: "none",
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                                    cursor: "pointer",
                                    color: chevronHovered ? iconHover : iconDefault,
                                    transition: "background-color 0.2s ease, color 0.2s ease"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "flex",
                                        transform: isExpanded ? "rotate(180deg)" : "none",
                                        transition: "transform 0.2s ease"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-down",
                                        size: 16,
                                        color: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            expandedContent != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateRows: isExpanded ? "1fr" : "0fr",
                    opacity: isExpanded ? 1 : 0,
                    transition: "grid-template-rows 0.4s ease, opacity 0.4s ease"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            paddingTop: 0,
                            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                            paddingLeft: 0,
                            paddingRight: 0
                        },
                        children: expandedContent
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                        lineNumber: 163,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                    lineNumber: 162,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
                lineNumber: 152,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigUsage",
    ()=>AppearanceConfigUsage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const AppearanceConfigUsage = ({ usage })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            boxSizing: "border-box",
            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: semantic?.surface?.hover ?? semantic?.surface?.default,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: semantic?.text?.muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                },
                children: "Dónde se usa"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    margin: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px 0 0`,
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                },
                children: usage.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            color: semantic?.text?.default
                        },
                        children: item
                    }, item, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppearanceConfigGrid",
    ()=>AppearanceConfigGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
"use client";
;
;
const AppearanceConfigGrid = ({ children, minColumnWidth = 300 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
            width: "100%",
            alignItems: "start"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeSegmentedControl",
    ()=>ModeSegmentedControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
"use client";
;
;
const OPTIONS = [
    {
        value: "dark",
        label: "Oscuro"
    },
    {
        value: "light",
        label: "Claro"
    }
];
const GAP = 2;
const PADDING = 2;
const ModeSegmentedControl = ({ value, onChange, semantic, ariaLabel = "Modo de edición" })=>{
    const borderColor = semantic?.border?.subtle ?? "rgba(255,255,255,0.08)";
    const bgColor = "rgba(255,255,255,0.03)";
    const activeColor = "#1a1a1a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tablist",
        "aria-label": ariaLabel,
        style: {
            position: "relative",
            display: "inline-flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
            width: "auto",
            height: 28,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
            border: `1px solid ${borderColor}`,
            backgroundColor: bgColor,
            padding: PADDING,
            gap: GAP
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                style: {
                    position: "absolute",
                    top: PADDING,
                    left: PADDING,
                    bottom: PADDING,
                    width: `calc(50% - ${PADDING + GAP / 2}px)`,
                    backgroundColor: "#ffffff",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                    transition: "transform 180ms ease",
                    transform: value === "dark" ? "translateX(0)" : `translateX(calc(100% + ${GAP}px))`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            OPTIONS.map((opt)=>{
                const isActive = value === opt.value;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    role: "tab",
                    "aria-selected": isActive,
                    onClick: ()=>onChange(opt.value),
                    style: {
                        flex: 1,
                        minWidth: 52,
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                        color: isActive ? activeColor : semantic?.text?.muted,
                        backgroundColor: "transparent",
                        border: "none",
                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
                        cursor: "pointer",
                        transition: "color 180ms ease",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        position: "relative",
                        zIndex: 1
                    },
                    children: opt.label
                }, opt.value, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$ModeSegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentsEditModeProvider",
    ()=>ComponentsEditModeProvider,
    "useComponentsEditMode",
    ()=>useComponentsEditMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ComponentsEditModeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ComponentsEditModeProvider({ children }) {
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ComponentsEditModeContext.Provider, {
        value: {
            editMode,
            setEditMode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
function useComponentsEditMode() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ComponentsEditModeContext);
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/componentTokenOptions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const COMPONENT_TOKEN_OPTIONS = SEMANTIC_TOKEN_PATHS.map(({ path, label })=>({
        value: path,
        label
    }));
function resolveTokenPath(semantic, path) {
    const parts = path.split(".");
    let current = semantic;
    for (const p of parts){
        if (current == null || typeof current !== "object") return "";
        current = current[p];
    }
    return typeof current === "string" ? current : "";
}
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentTokenExpandableRow",
    ()=>ComponentTokenExpandableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/componentTokenOptions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
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
const ComponentTokenExpandableRow = ({ label, value, onChange, usage, isExpanded, onToggle, propertyKey, filterOptions })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const componentsEditMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const tokenMode = componentsEditMode?.editMode ?? theme;
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const semanticForTokens = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][tokenMode].semantic;
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownRect, setDropdownRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPopoverEntered, setIsPopoverEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const options = propertyKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTokenOptionsForProperty"])(propertyKey, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"], value) : filterOptions ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"].filter(filterOptions) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COMPONENT_TOKEN_OPTIONS"];
    const resolvedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTokenPath"])(semanticForTokens, value);
    const displayValue = value || "—";
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const VIEWPORT_MARGIN = 12;
    const POPOVER_WIDTH_BASE = 200;
    const ITEM_HEIGHT_ESTIMATE = 40;
    const INNER_PADDING_VERTICAL = 32;
    const calculatePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const rect = undefined;
        const vw = undefined;
        const vh = undefined;
        const margin = undefined;
        const availableWidth = undefined;
        const popoverWidth = undefined;
        const minPopoverWidth = undefined;
        const gapToIcon = undefined;
        const spaceLeft = undefined;
        const spaceRight = undefined;
        let left;
        // Vertical: anclar al trigger (sin forzar arriba)
        const top = undefined;
        const topClamped = undefined;
        const availableContentHeight = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!isDropdownOpen) {
            setDropdownRect(null);
            setIsPopoverEntered(false);
            return;
        }
        setDropdownRect(calculatePosition());
        setIsPopoverEntered(false);
        const raf = requestAnimationFrame(()=>{
            requestAnimationFrame(()=>setIsPopoverEntered(true));
        });
        return ()=>cancelAnimationFrame(raf);
    }, [
        isDropdownOpen,
        calculatePosition
    ]);
    // Ajuste post-render con tamaño REAL del popover (getBoundingClientRect)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!isDropdownOpen || !dropdownRect || !dropdownRef.current) return;
        const popoverEl = dropdownRef.current;
        const rect = popoverEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = VIEWPORT_MARGIN;
        const realWidth = rect.width;
        const realHeight = rect.height;
        let { left, top } = dropdownRect;
        let changed = false;
        if (left < margin) {
            left = margin;
            changed = true;
        }
        if (left + realWidth > vw - margin) {
            left = vw - margin - realWidth;
            changed = true;
        }
        if (top < margin) {
            top = margin;
            changed = true;
        }
        if (top + realHeight > vh - margin) {
            top = vh - margin - realHeight;
            changed = true;
        }
        if (changed) {
            setDropdownRect((prev)=>prev ? {
                    ...prev,
                    left,
                    top
                } : null);
        }
    }, [
        isDropdownOpen,
        dropdownRect
    ]);
    const clampToViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!dropdownRef.current) return;
        const popoverEl = dropdownRef.current;
        const rect = popoverEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = VIEWPORT_MARGIN;
        let left = rect.left;
        let top = rect.top;
        const realWidth = rect.width;
        const realHeight = rect.height;
        let changed = false;
        if (left < margin) {
            left = margin;
            changed = true;
        }
        if (left + realWidth > vw - margin) {
            left = vw - margin - realWidth;
            changed = true;
        }
        if (top < margin) {
            top = margin;
            changed = true;
        }
        if (top + realHeight > vh - margin) {
            top = vh - margin - realHeight;
            changed = true;
        }
        if (changed) {
            setDropdownRect((prev)=>prev ? {
                    ...prev,
                    left,
                    top
                } : null);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDropdownOpen) return;
        const handleResize = ()=>{
            const pos = calculatePosition();
            if (pos) setDropdownRect(pos);
        };
        const handleScroll = ()=>{
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) {
                setIsDropdownOpen(false);
                return;
            }
            const margin = VIEWPORT_MARGIN;
            const inViewport = rect.top < window.innerHeight - margin && rect.bottom > margin && rect.left < window.innerWidth - margin && rect.right > margin;
            if (!inViewport) {
                setIsDropdownOpen(false);
            } else {
                const pos = calculatePosition();
                if (pos) setDropdownRect(pos);
            }
        };
        let resizeObserver = null;
        if (dropdownRef.current && dropdownRect) {
            resizeObserver = new ResizeObserver(()=>{
                clampToViewport();
            });
            resizeObserver.observe(dropdownRef.current);
        }
        window.addEventListener("scroll", handleScroll, {
            capture: true
        });
        window.addEventListener("resize", handleResize);
        return ()=>{
            resizeObserver?.disconnect();
            window.removeEventListener("scroll", handleScroll, {
                capture: true
            });
            window.removeEventListener("resize", handleResize);
        };
    }, [
        isDropdownOpen,
        calculatePosition,
        dropdownRect,
        clampToViewport
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDropdownOpen) return;
        const handleEsc = (e)=>e.key === "Escape" && setIsDropdownOpen(false);
        const handleClickOutside = (e)=>{
            const target = e.target;
            if (containerRef.current?.contains(target)) return;
            if (dropdownRef.current?.contains(target)) return;
            setIsDropdownOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("keydown", handleEsc);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        isDropdownOpen
    ]);
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;
    const dropdownContent = isDropdownOpen && dropdownRect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        style: {
            position: "fixed",
            top: dropdownRect.top,
            left: dropdownRect.left,
            zIndex: 1000,
            width: dropdownRect.popoverWidth,
            maxWidth: dropdownRect.availableWidth,
            minWidth: dropdownRect.minPopoverWidth,
            maxHeight: `calc(100vh - ${VIEWPORT_MARGIN * 2}px)`,
            overflow: "visible",
            opacity: isPopoverEntered ? 1 : 0,
            transform: isPopoverEntered ? "none" : "translateY(6px)",
            transition: "opacity 200ms ease-out, transform 200ms ease-out"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingSurface"], {
            style: {
                padding: 0,
                overflow: "hidden"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "floating-scroll",
                style: {
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    ...options.length * ITEM_HEIGHT_ESTIMATE + INNER_PADDING_VERTICAL > dropdownRect.availableContentHeight ? {
                        maxHeight: dropdownRect.availableContentHeight,
                        overflowY: "auto"
                    } : {
                        overflowY: "visible"
                    }
                },
                children: options.map((opt)=>{
                    const isSelected = value === opt.value;
                    const hoverBg = semantic?.surface?.hover ?? "rgba(255,255,255,0.08)";
                    const selectedBg = semantic?.surface?.selected ?? semantic?.surface?.hover ?? "rgba(255,255,255,0.12)";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            onChange(opt.value);
                            setIsDropdownOpen(false);
                        },
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                            width: "100%",
                            minHeight: 28,
                            padding: "6px 10px",
                            background: isSelected ? selectedBg : "none",
                            border: "none",
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                            cursor: "pointer",
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                            color: isSelected ? semantic?.text?.active ?? semantic?.text?.default : semantic?.text?.default,
                            fontWeight: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.regular,
                            textAlign: "left",
                            transition: "background-color 0.15s ease"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = isSelected ? selectedBg : hoverBg;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = isSelected ? selectedBg : "transparent";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 14,
                                    height: 14,
                                    flexShrink: 0,
                                    borderRadius: "50%",
                                    border: `1px solid ${borderColor}`,
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$componentTokenOptions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTokenPath"])(semanticForTokens, opt.value) || semantic?.surface?.default
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                                lineNumber: 335,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flex: 1
                                },
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                                lineNumber: 347,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flexShrink: 0,
                                    display: "flex"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check",
                                    size: 12,
                                    color: semantic?.text?.active ?? semantic?.text?.default
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                                    lineNumber: 350,
                                    columnNumber: 47
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                                lineNumber: 349,
                                columnNumber: 43
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, opt.value, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                        lineNumber: 303,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                lineNumber: 282,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
            lineNumber: 281,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
        lineNumber: 264,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)), document.body) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigRow"], {
            label: label,
            swatchColor: resolvedColor || semantic?.surface?.default,
            valueDisplay: displayValue,
            editControl: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: triggerRef,
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            display: "inline-flex"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            name: "edit",
                            size: 16,
                            color: isDropdownOpen ? iconHover : iconDefault,
                            label: "Editar token",
                            isActive: isDropdownOpen,
                            onClick: ()=>setIsDropdownOpen(!isDropdownOpen)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                            lineNumber: 376,
                            columnNumber: 29
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                        lineNumber: 375,
                        columnNumber: 25
                    }, void 0),
                    dropdownContent
                ]
            }, void 0, true),
            isExpanded: isExpanded,
            onToggle: onToggle,
            expandedContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigUsage"], {
                usage: usage
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
                lineNumber: 390,
                columnNumber: 34
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
            lineNumber: 369,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx",
        lineNumber: 368,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonsComponentEditor",
    ()=>ButtonsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
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
const DEFAULT_MODE_OVERRIDES = {
    dark: {
        ...DEFAULT_BUTTON_OVERRIDES
    },
    light: {
        ...DEFAULT_BUTTON_OVERRIDES
    }
};
const ButtonsComponentEditor = ()=>{
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [editMode]: {
                    ...prev[editMode],
                    [variantId]: {
                        ...prev[editMode][variantId] ?? {},
                        [key]: value
                    }
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    const modeOverrides = overrides[editMode];
    const getValue = (variantId, key)=>modeOverrides[variantId]?.[key] ?? DEFAULT_BUTTON_OVERRIDES[variantId]?.[key] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: BUTTON_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
                title: label,
                children: BUTTON_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: getValue(id, key),
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
                        lineNumber: 72,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputsComponentEditor",
    ()=>InputsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const INPUT_STATES = [
    {
        id: "default",
        label: "Default"
    },
    {
        id: "focus",
        label: "Focus"
    },
    {
        id: "error",
        label: "Error"
    },
    {
        id: "disabled",
        label: "Disabled"
    }
];
const INPUT_PROPERTIES = [
    {
        key: "borderColor",
        label: "Color de borde",
        usage: [
            "Línea de contorno del campo",
            "Definición visual del estado"
        ]
    },
    {
        key: "background",
        label: "Background",
        usage: [
            "Fondo del área de entrada",
            "Superficie de escritura"
        ]
    },
    {
        key: "focusRing",
        label: "Focus ring",
        usage: [
            "Resaltado cuando el campo tiene foco",
            "Indicador de accesibilidad"
        ]
    },
    {
        key: "placeholderColor",
        label: "Color placeholder",
        usage: [
            "Texto de ejemplo cuando está vacío",
            "Texto de guía desvanecido"
        ]
    }
];
const DEFAULT_INPUT_OVERRIDES = {
    default: {
        borderColor: "border.default",
        background: "surface.default",
        focusRing: "border.focus",
        placeholderColor: "text.muted"
    },
    focus: {
        borderColor: "border.focus",
        background: "surface.default",
        focusRing: "primary.default",
        placeholderColor: "text.muted"
    },
    error: {
        borderColor: "danger.default",
        background: "surface.default",
        focusRing: "danger.default",
        placeholderColor: "text.muted"
    },
    disabled: {
        borderColor: "border.disabled",
        background: "surface.disabled",
        focusRing: "border.subtle",
        placeholderColor: "text.disabled"
    }
};
const DEFAULT_MODE_OVERRIDES = {
    dark: {
        ...DEFAULT_INPUT_OVERRIDES
    },
    light: {
        ...DEFAULT_INPUT_OVERRIDES
    }
};
const InputsComponentEditor = ()=>{
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (stateId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [editMode]: {
                    ...prev[editMode],
                    [stateId]: {
                        ...prev[editMode][stateId] ?? {},
                        [key]: value
                    }
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    const modeOverrides = overrides[editMode];
    const getValue = (stateId, key)=>modeOverrides[stateId]?.[key] ?? DEFAULT_INPUT_OVERRIDES[stateId]?.[key] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: INPUT_STATES.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
                title: label,
                children: INPUT_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: getValue(id, key),
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx",
                        lineNumber: 70,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsComponentEditor",
    ()=>TabsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
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
const DEFAULT_MODE_OVERRIDES = {
    dark: {
        ...DEFAULT_TABS_OVERRIDES
    },
    light: {
        ...DEFAULT_TABS_OVERRIDES
    }
};
const TabsComponentEditor = ()=>{
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [editMode]: {
                    ...prev[editMode],
                    [variantId]: {
                        ...prev[editMode][variantId] ?? {},
                        [key]: value
                    }
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    const modeOverrides = overrides[editMode];
    const getValue = (variantId, key)=>modeOverrides[variantId]?.[key] ?? DEFAULT_TABS_OVERRIDES[variantId]?.[key] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: TABS_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
                title: label,
                children: TABS_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: getValue(id, key),
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
                        lineNumber: 68,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
                lineNumber: 64,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardsComponentEditor",
    ()=>CardsComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
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
const DEFAULT_MODE_OVERRIDES = {
    dark: {
        ...DEFAULT_CARDS_OVERRIDES
    },
    light: {
        ...DEFAULT_CARDS_OVERRIDES
    }
};
const CardsComponentEditor = ()=>{
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (variantId, key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [editMode]: {
                    ...prev[editMode],
                    [variantId]: {
                        ...prev[editMode][variantId] ?? {},
                        [key]: value
                    }
                }
            }));
    };
    const toggleExpanded = (rowKey)=>{
        setExpandedByKey((prev)=>({
                ...prev,
                [rowKey]: !prev[rowKey]
            }));
    };
    const modeOverrides = overrides[editMode];
    const getValue = (variantId, key)=>modeOverrides[variantId]?.[key] ?? DEFAULT_CARDS_OVERRIDES[variantId]?.[key] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: CARDS_VARIANTS.map(({ id, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
                title: label,
                children: CARDS_PROPERTIES.map(({ key, label: propLabel, usage })=>{
                    const rowKey = `${id}-${key}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                        label: propLabel,
                        value: getValue(id, key),
                        onChange: (v)=>handleChange(id, key, v),
                        usage: usage,
                        isExpanded: !!expandedByKey[rowKey],
                        onToggle: ()=>toggleExpanded(rowKey),
                        propertyKey: key
                    }, rowKey, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
                        lineNumber: 68,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, id, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
                lineNumber: 64,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TablesComponentEditor",
    ()=>TablesComponentEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentTokenExpandableRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
"use client";
;
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
const DEFAULT_MODE_OVERRIDES = {
    dark: {
        ...DEFAULT_TABLES_OVERRIDES
    },
    light: {
        ...DEFAULT_TABLES_OVERRIDES
    }
};
const TablesComponentEditor = ()=>{
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleChange = (key, value)=>{
        setOverrides((prev)=>({
                ...prev,
                [editMode]: {
                    ...prev[editMode],
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
    const modeOverrides = overrides[editMode];
    const getValue = (key)=>modeOverrides[key] ?? DEFAULT_TABLES_OVERRIDES[key] ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigGrid"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
            title: "Tables",
            children: TABLES_PROPERTIES.map(({ key, label, usage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentTokenExpandableRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentTokenExpandableRow"], {
                    label: label,
                    value: getValue(key),
                    onChange: (v)=>handleChange(key, v),
                    usage: usage,
                    isExpanded: !!expandedByKey[key],
                    onToggle: ()=>toggleExpanded(key),
                    propertyKey: key
                }, key, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
                    lineNumber: 56,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComponentsSection",
    ()=>ComponentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$ModeSegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/ModeSegmentedControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsEditModeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ButtonsComponentEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$InputsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/InputsComponentEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TabsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TabsComponentEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$CardsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/CardsComponentEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TablesComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/TablesComponentEditor.tsx [app-ssr] (ecmascript)");
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
const ComponentsSectionInner = ()=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const editModeCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComponentsEditMode"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("buttons");
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const renderEditor = ()=>{
        switch(activeSubTab){
            case "buttons":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 33,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "inputs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$InputsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 35,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "tabs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TabsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 37,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "cards":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$CardsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 39,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case "tables":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$TablesComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TablesComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 41,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ButtonsComponentEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonsComponentEditor"], {}, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 43,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                width: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTabs"], {
                items: [
                    ...COMPONENT_TABS
                ],
                activeValue: activeSubTab,
                onChange: setActiveSubTab,
                ariaLabel: "Subsecciones de Componentes"
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                lineNumber: 51,
                columnNumber: 21
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
            lineNumber: 50,
            columnNumber: 17
        }, void 0),
        headerVariant: "tabs",
        borderColor: borderColor ?? "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                flex: 1,
                minHeight: 0,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
            },
            children: [
                editModeCtx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                        flexShrink: 0,
                        paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 12,
                                color: semantic?.text?.muted,
                                whiteSpace: "nowrap"
                            },
                            children: "Editando:"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$ModeSegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeSegmentedControl"], {
                            value: editModeCtx.editMode,
                            onChange: editModeCtx.setEditMode,
                            semantic: semantic,
                            ariaLabel: "Editando (Oscuro/Claro)"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                            lineNumber: 76,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 74,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "appearance-cards-scroll",
                    style: {
                        width: "100%",
                        flex: 1,
                        minHeight: 0,
                        minWidth: 0,
                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                        boxSizing: "border-box",
                        overflowX: "auto"
                    },
                    children: renderEditor()
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ComponentsSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsEditModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentsEditModeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ComponentsSectionInner, {}, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
            lineNumber: 106,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx",
        lineNumber: 105,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PageShell/PageShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PanelCard$2f$PanelCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/PanelCard/PanelCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SelectSingle$2f$SelectSingle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SelectSingle/SelectSingle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/FloatingSurface/FloatingSurface.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SecondaryNavSidebar/SecondaryNavSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/molecules/SectionTabs/SectionTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/ActionIcon/ActionIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Tooltip/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Icon/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Input/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/console/tokens/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/radius.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$layout$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/layout.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/tokens/breakpoints.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/context/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/visualPresetStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/toast/useToast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/core/visual/themeRegistry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$AccessDeniedState$2f$AccessDeniedState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/containers/AccessDeniedState/AccessDeniedState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_components/AppearanceConfigUsage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/lab/apariencia/_sections/components/ComponentsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$dev$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/console/ui/dev/PresetSelector.tsx [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tablist",
        "aria-label": "Aspecto",
        style: {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
            height: 40,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: 2,
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
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
                    minWidth: 80,
                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                    color: isActive ? "#1a1a1a" : semantic.text.muted,
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    border: "none",
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
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
                lineNumber: 447,
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
function BaseColorSelector({ value, options, onChange, semantic, variant = "full", originalValue }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dropdownRect, setDropdownRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [colorFormat, setColorFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hex");
    const [showRecents, setShowRecents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentColors, setRecentColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[
            ...recentColorsStore
        ]);
    const [formatInput, setFormatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initialHsv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>hexToHsv(value || "#000000"), []);
    const [hsv, setHsv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialHsv);
    const [hexInput, setHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const v = value || "#000000";
        return v.startsWith("#") ? v.toUpperCase() : `#${v.toUpperCase()}`;
    });
    const displayLabel = options.find((o)=>o.value.toLowerCase() === (value || "").toLowerCase())?.label ?? hexInput;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const raw = value || "#000000";
        const hex = raw.startsWith("#") ? raw.toUpperCase() : `#${raw.toUpperCase()}`;
        setHsv(hexToHsv(hex));
        setHexInput(hex);
        setRecentColors([
            ...recentColorsStore
        ]);
    }, [
        isOpen,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        isOpen,
        hsv.h,
        hsv.s,
        hsv.v,
        colorFormat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$breakpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breakpoints"].md);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    const calculatePopoverPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const rect = undefined;
        const popoverWidth = undefined;
        const popoverHeight = undefined;
        const margin = undefined;
        const gapToIcon = undefined;
        const spaceLeft = undefined;
        const placement = undefined;
        let left;
        let top;
        const spaceBelow = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleResize = undefined;
    }, [
        isOpen,
        calculatePopoverPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            setDropdownRect(null);
            return;
        }
        const handleEsc = (e)=>{
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        if (isMobile) {
            document.body.style.overflow = "hidden";
        }
        const handleClickOutside = (e)=>{
            const target = e.target;
            if (containerRef.current?.contains(target) || dropdownRef.current?.contains(target)) {
                return;
            }
            setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
            if (isMobile) document.body.style.overflow = "";
        };
    }, [
        isOpen,
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const rect = undefined;
        const popoverWidth = undefined;
        const popoverHeight = undefined;
        const margin = undefined;
        const gapToIcon = undefined;
        const spaceLeft = undefined;
        const placement = undefined;
        let left;
        let top;
        const spaceBelow = undefined;
    }, [
        isOpen,
        isMobile
    ]);
    const applyHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((hex)=>{
        const norm = normalizeHex(hex);
        if (isValidHex(hex)) {
            onChange(norm);
            setHsv(hexToHsv(norm));
            setHexInput(norm);
            const next = [
                norm,
                ...recentColorsStore.filter((c)=>c.toUpperCase() !== norm.toUpperCase())
            ].slice(0, RECENT_COLORS_MAX);
            recentColorsStore.length = 0;
            recentColorsStore.push(...next);
            setRecentColors([
                ...recentColorsStore
            ]);
        }
    }, [
        onChange
    ]);
    const updateFrom2D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, clientY, target)=>{
        const rect = target.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        const s = x * 100;
        const v = (1 - y) * 100;
        const hex = hsvToHex(hsv.h, s, v);
        setHsv((p)=>({
                ...p,
                s,
                v
            }));
        setHexInput(hex);
        applyHex(hex);
    }, [
        hsv.h,
        applyHex
    ]);
    const updateFromHue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((clientX, target)=>{
        const rect = target.getBoundingClientRect();
        const h = Math.max(0, Math.min(360, (clientX - rect.left) / rect.width * 360));
        const hex = hsvToHex(h, hsv.s, hsv.v);
        setHsv((p)=>({
                ...p,
                h
            }));
        setHexInput(hex);
        applyHex(hex);
    }, [
        hsv.s,
        hsv.v,
        applyHex
    ]);
    const sbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!dragging) return;
        const onMove = (e)=>{
            if (dragging === "2d" && sbRef.current) updateFrom2D(e.clientX, e.clientY, sbRef.current);
            if (dragging === "hue" && hueRef.current) updateFromHue(e.clientX, hueRef.current);
        };
        const onUp = ()=>setDragging(null);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        return ()=>{
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
        };
    }, [
        dragging,
        updateFrom2D,
        updateFromHue
    ]);
    const currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);
    const getFormatString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((hex)=>{
        const norm = hex.startsWith("#") ? hex : `#${hex}`;
        if (colorFormat === "hex") return norm.toUpperCase();
        if (colorFormat === "rgb") {
            const { r, g, b } = hexToRgb(norm);
            return `rgb(${r}, ${g}, ${b})`;
        }
        const { h, s, l } = hexToHsl(norm);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }, [
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
    const [eyedropperSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time value", "undefined") !== "undefined" && "EyeDropper" in window);
    const handleEyedropper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("EyeDropper" in window)) return;
        //TURBOPACK unreachable
        ;
    }, [
        applyHex
    ]);
    const isIconVariant = variant === "icon";
    const trigger = isIconVariant ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: triggerRef,
        style: {
            display: "inline-flex"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
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
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: triggerRef,
        style: {
            display: "block",
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                width: "100%",
                minHeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][48],
                padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`,
                backgroundColor: semantic.surface.default,
                border: `1px solid ${semantic.border.default}`,
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                cursor: "pointer",
                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                color: semantic.text.default
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
    const pickerContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sbRef,
                onMouseDown: (e)=>{
                    e.preventDefault();
                    updateFrom2D(e.clientX, e.clientY, e.currentTarget);
                    setDragging("2d");
                },
                style: {
                    width: "100%",
                    height: 140,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].md,
                    background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${hsv.h}, 100%, 50%)`,
                    cursor: "crosshair",
                    position: "relative"
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 793,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hueRef,
                onMouseDown: (e)=>{
                    e.preventDefault();
                    updateFromHue(e.clientX, e.currentTarget);
                    setDragging("hue");
                },
                style: {
                    width: "100%",
                    height: 10,
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
                    background: "linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
                    cursor: "pointer"
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 809,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]
                        },
                        children: [
                            "hex",
                            "rgb",
                            "hsl"
                        ].map((fmt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setColorFormat(fmt),
                                style: {
                                    padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
                                    fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                    color: colorFormat === fmt ? semantic.text.active : semantic.text.muted,
                                    backgroundColor: colorFormat === fmt ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
                                    border: "none",
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "stretch",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][40],
                                    height: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][40],
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: formatInput,
                                onChange: (e)=>setFormatInput(e.target.value),
                                onBlur: handleFormatBlur,
                                onKeyDown: (e)=>e.key === "Enter" && handleFormatBlur(),
                                placeholder: colorFormat === "hex" ? "#000000" : colorFormat === "rgb" ? "rgb(0, 0, 0)" : "hsl(0, 0%, 0%)",
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.mono ?? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                    color: semantic.text.default,
                                    backgroundColor: semantic.surface.hover ?? semantic.surface.default,
                                    border: `1px solid ${semantic.border.default}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 861,
                                columnNumber: 21
                            }, this),
                            eyedropperSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: "Cuentagotas",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleEyedropper,
                                    "aria-label": "Cuentagotas",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][40],
                                        minHeight: 40,
                                        flexShrink: 0,
                                        padding: 0,
                                        background: semantic.surface.hover ?? semantic.surface.default,
                                        border: `1px solid ${semantic.border.default}`,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                                        cursor: "pointer",
                                        color: semantic.text.muted
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                            color: semantic.text.muted
                        },
                        children: [
                            "Recientes",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    transform: showRecents ? "rotate(180deg)" : "none",
                                    transition: "transform 0.2s ease",
                                    display: "flex"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
                    showRecents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                        },
                        children: [
                            originalValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                content: `Original: ${originalValue}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>applyHex(originalValue),
                                    style: {
                                        width: 28,
                                        height: 28,
                                        padding: 0,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
                            recentColors.filter((hex)=>!originalValue || hex.toUpperCase() !== originalValue.toUpperCase()).slice(0, RECENT_COLORS_MAX).map((hex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    content: hex,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyHex(hex),
                                        style: {
                                            width: 28,
                                            height: 28,
                                            padding: 0,
                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
                            !originalValue && recentColors.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    width: "100%",
                                    margin: 0,
                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.xs,
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
    const dropdownContent = isOpen && dropdownRect && typeof document !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingSurface"], {
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
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$FloatingSurface$2f$FloatingSurface$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingSurface"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function BaseColorExpandableRow({ label, value, hex, originalValue, options, onChange, usage, isExpanded, onToggle, semantic, onCopyHex }) {
    const valueDisplay = onCopyHex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigRow"], {
        label: label,
        swatchColor: value || semantic.surface.default,
        valueDisplay: valueDisplay,
        editControl: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorSelector, {
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
        expandedContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigUsage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigUsage"], {
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
function BaseColorsCardWithLocalExpansion(props) {
    const initialExpanded = ()=>Object.fromEntries(BASE_TOKEN_KEYS.map(({ key })=>[
                key,
                false
            ]));
    const [expandedByKey, setExpandedByKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialExpanded);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCard, {
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
function BaseColorsCard({ mode, tokens, originalTokens, options, onChange, expandedByKey, onExpandToggle, titleAction, semantic, isDirty, onSave, onCopyHex }) {
    const title = mode === "dark" ? "Modo oscuro" : "Modo claro";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
        title: title,
        titleAction: titleAction,
        footer: onSave != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
        children: BASE_TOKEN_KEYS.map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorExpandableRow, {
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
function EstadosCard({ tokens, originalTokens, options, onChange, expandedByKey, onExpandToggle, semantic, isDirty, onSave, onCopyHex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceConfigCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceConfigCard"], {
        title: "Estados",
        footer: onSave != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
        children: STATE_TOKEN_KEYS.map(({ key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorExpandableRow, {
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
function ThemePreview({ tokens, semantic }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: tokens.background,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
            display: "flex",
            flexDirection: "column",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
            width: "100%",
            minWidth: 280,
            maxWidth: 360,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
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
                            color: tokens.text,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm
                        },
                        children: "Texto principal"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1300,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        style: {
                            color: tokens.text,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: 36,
                    backgroundColor: tokens.surface,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
                    border: `1px solid ${tokens.border}`,
                    display: "flex",
                    alignItems: "center",
                    padding: `0 ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    variant: "body",
                    style: {
                        color: tokens.text,
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
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
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].full,
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
function SettingRowItem({ label, rightContent, isSelected, onClick, textWhite }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const labelColor = isSelected ? semantic.text.default : semantic.text.muted;
    const chevronColor = semantic.text.muted;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]}px`,
            textAlign: "left",
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
            color: labelColor,
            backgroundColor: isSelected ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
            border: "none",
            borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
            borderRadius: 0,
            cursor: "pointer",
            transition: "background-color 0.2s, color 0.2s",
            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
                    flexShrink: 0,
                    color: textWhite ? "#ffffff" : "inherit"
                },
                children: [
                    rightContent,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: textWhite ? "rgba(255,255,255,0.8)" : chevronColor,
                            display: "flex"
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
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
function SettingSection({ title, description, children }) {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
            borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                            color: semantic.text.default
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1433,
                        columnNumber: 17
                    }, this),
                    description != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: 0,
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        lineNumber: 1474,
        columnNumber: 9
    }, this);
}
function ThemeGalleryCard({ theme: galleryTheme, isActive, onSelect, onEdit, semantic }) {
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
                        left: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8],
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
                    lineNumber: 1534,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1523,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    display: "flex",
                    flexDirection: "column",
                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
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
                                lineNumber: 1580,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][2],
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$ActionIcon$2f$ActionIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    name: "more-horizontal",
                                    size: 14,
                                    label: "Opciones"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 1606,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 1583,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1571,
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
                        lineNumber: 1609,
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
                        lineNumber: 1625,
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
                                lineNumber: 1633,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 1631,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1558,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
                    paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingLeft: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
                    paddingRight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12],
                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
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
                            lineNumber: 1672,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onEdit,
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4],
                                padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][4]}px ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][8]}px`,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                color: semantic.text.muted,
                                background: "none",
                                border: "none",
                                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-flex",
                                        transform: "translateY(2px)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Icon$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "chevron-right",
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 1708,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                    lineNumber: 1707,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 1680,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 1663,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 1653,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
        lineNumber: 1505,
        columnNumber: 9
    }, this);
}
function loadLabOverrides(preset) {
    try {
        if ("TURBOPACK compile-time truthy", 1) return {
            dark: null,
            light: null
        };
        //TURBOPACK unreachable
        ;
        const raw = undefined;
        const parsed = undefined;
    } catch  {
        return {
            dark: null,
            light: null
        };
    }
}
function saveLabOverrides(preset, mode, tokens) {
    try {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const existing = undefined;
        const next = undefined;
    } catch  {
    // no-op
    }
}
function loadLabStateOverrides(preset) {
    try {
        if ("TURBOPACK compile-time truthy", 1) return {
            dark: null,
            light: null
        };
        //TURBOPACK unreachable
        ;
        const raw = undefined;
        const parsed = undefined;
    } catch  {
        return {
            dark: null,
            light: null
        };
    }
}
function saveLabStateOverrides(preset, mode, tokens) {
    try {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const existing = undefined;
        const next = undefined;
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
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$context$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { currentPreset, setPreset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$visualPresetStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVisualPreset"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$toast$2f$useToast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const semantic = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"][theme].semantic;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Base");
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modoAyuda, setModoAyuda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBaseSub, setSelectedBaseSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("tema");
    const initialExpandedEstados = ()=>Object.fromEntries(STATE_TOKEN_KEYS.map(({ key })=>[
                key,
                false
            ]));
    const [expandedEstados, setExpandedEstados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialExpandedEstados);
    const handleTabChange = (value)=>setActiveTab(value);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const canonicalDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark"), [
        currentPreset
    ]);
    const canonicalLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light"), [
        currentPreset
    ]);
    const getInitialTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const ov = loadLabOverrides(currentPreset);
        return {
            dark: ov.dark ?? baseFromTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark")),
            light: ov.light ?? baseFromTokens((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light"))
        };
    }, [
        currentPreset
    ]);
    const [localTokensByMode, setLocalTokensByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialTokens());
    const [lastSavedByMode, setLastSavedByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialTokens());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const next = getInitialTokens();
        setLocalTokensByMode(next);
        setLastSavedByMode(next);
    }, [
        currentPreset,
        getInitialTokens
    ]);
    const getInitialStateTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const ov = loadLabStateOverrides(currentPreset);
        const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "dark");
        const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, "light");
        return {
            dark: ov.dark ?? stateTokensFromTheme(dark),
            light: ov.light ?? stateTokensFromTheme(light)
        };
    }, [
        currentPreset
    ]);
    const [localStatesByMode, setLocalStatesByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialStateTokens());
    const [lastSavedStatesByMode, setLastSavedStatesByMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getInitialStateTokens());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const next = getInitialStateTokens();
        setLocalStatesByMode(next);
        setLastSavedStatesByMode(next);
    }, [
        currentPreset,
        getInitialStateTokens
    ]);
    const currentTokens = localTokensByMode[editMode];
    const currentStates = localStatesByMode[theme];
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
    const baseColorOptionsByMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", "dark");
        const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", "dark");
        const controlLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", "light");
        const securityLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", "light");
        const buildOptions = (tokens, mode)=>{
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
        };
        return {
            dark: buildOptions(localTokensByMode.dark, "dark"),
            light: buildOptions(localTokensByMode.light, "light")
        };
    }, [
        localTokensByMode
    ]);
    const stateColorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const controlPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("control", theme);
        const securityPack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])("security", theme);
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
    }, [
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
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$flags$2f$devFlags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEV_UI_ENABLED"] || __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$auth$2f$mockSession$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockSession"].role !== "OWNER") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageShell"], {
            title: "Apariencia",
            breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Desarrollador"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2009,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2010,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: semantic.text.active
                        },
                        children: "Apariencia"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2011,
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
                lineNumber: 2016,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
            lineNumber: 2005,
            columnNumber: 13
        }, this);
    }
    // Layout tipo settings: PageShell > PanelCard (gran superficie) > grid (sidebar | content)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
                lineNumber: 2027,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$containers$2f$PageShell$2f$PageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageShell"], {
                variant: "fluid",
                title: "Apariencia",
                breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Desarrollador"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2040,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2041,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Apariencia"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2042,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2043,
                            columnNumber: 21
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: semantic.text.active
                            },
                            children: activeTab
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                            lineNumber: 2044,
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
                    bodyStyle: {
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            display: "grid",
                            gridTemplateColumns: `${sidebarCollapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SECONDARY_NAV_SIDEBAR_WIDTH"].collapsed : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SECONDARY_NAV_SIDEBAR_WIDTH"].expanded}px minmax(0, 1fr)`,
                            gridTemplateRows: "1fr",
                            width: "100%",
                            minHeight: 0,
                            overflow: "hidden",
                            transition: "grid-template-columns 0.25s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 2083,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SecondaryNavSidebar$2f$SecondaryNavSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SecondaryNavSidebar"], {
                                        groups: TABS_GROUPS,
                                        value: activeTab,
                                        onChange: handleTabChange,
                                        collapsed: sidebarCollapsed,
                                        onCollapsedChange: setSidebarCollapsed,
                                        ariaLabel: "Secciones de apariencia"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2096,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 2069,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "apariencia-content-scroll",
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: activeTab === "Base" || activeTab === "Galería" || activeTab === "Estados" || activeTab === "Componentes" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                    minWidth: 0,
                                    minHeight: 0,
                                    flex: 1,
                                    overflowY: "auto",
                                    overflowX: activeTab === "Base" || activeTab === "Estados" || activeTab === "Componentes" ? "auto" : "hidden",
                                    padding: activeTab === "Base" || activeTab === "Galería" || activeTab === "Estados" || activeTab === "Componentes" ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                    marginLeft: sidebarCollapsed ? -3 : 0
                                },
                                children: [
                                    activeTab === "Galería" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                color: semantic.text.active
                                            },
                                            children: "Galería"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2123,
                                            columnNumber: 37
                                        }, void 0),
                                        headerVariant: "title",
                                        borderColor: semantic.border.subtle ?? semantic.border.default,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                boxSizing: "border-box",
                                                width: "100%"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        onEdit: ()=>{
                                                            setActiveTab("Base");
                                                            setSelectedBaseSub("tema");
                                                            setPreset(t.id);
                                                        },
                                                        semantic: semantic
                                                    }, t.id, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2151,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2139,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2138,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2121,
                                        columnNumber: 29
                                    }, this),
                                    activeTab === "Base" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                            headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0,
                                                    display: "flex",
                                                    width: "100%"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$molecules$2f$SectionTabs$2f$SectionTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTabs"], {
                                                    items: BASE_SECTION_TABS,
                                                    activeValue: selectedBaseSub ?? "tema",
                                                    onChange: (v)=>setSelectedBaseSub(v),
                                                    ariaLabel: "Subsecciones de Base"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2174,
                                                    columnNumber: 41
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2173,
                                                columnNumber: 37
                                            }, void 0),
                                            headerVariant: "tabs",
                                            borderColor: semantic.border.subtle ?? semantic.border.default,
                                            children: [
                                                (selectedBaseSub ?? "tema") === "tema" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "base-tema-scroll",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "flex-start",
                                                        flex: 1,
                                                        minHeight: 0,
                                                        minWidth: 0,
                                                        overflowX: "auto",
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        boxSizing: "border-box",
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                                            minWidth: 460,
                                                            maxWidth: 500,
                                                            flexShrink: 0,
                                                            backgroundColor: semantic.surface.card ?? semantic.surface.default,
                                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$radius$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].card,
                                                            border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                                            boxShadow: "0 1px 3px rgba(0,0,0,0.12)"
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Tema"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2224,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$dev$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetSelector"], {}, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2234,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2216,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    width: "100%",
                                                                    backgroundColor: semantic.border.subtle ?? semantic.border.default
                                                                },
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2236,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Aspecto"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2252,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModeSegmentedControl, {
                                                                        value: editMode,
                                                                        onChange: setEditMode,
                                                                        semantic: semantic
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2262,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2244,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: 1,
                                                                    width: "100%",
                                                                    backgroundColor: semantic.border.subtle ?? semantic.border.default
                                                                },
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2268,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][12]
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.sm,
                                                                            fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.medium,
                                                                            color: semantic.text.default
                                                                        },
                                                                        children: "Vista previa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2283,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            minWidth: 280,
                                                                            width: "100%",
                                                                            maxWidth: 400
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemePreview, {
                                                                            tokens: currentTokens,
                                                                            semantic: semantic
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                            lineNumber: 2294,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                        lineNumber: 2293,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2276,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2201,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2186,
                                                    columnNumber: 33
                                                }, this),
                                                selectedBaseSub === "colores" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "appearance-cards-scroll",
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        flexWrap: "wrap",
                                                        gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                                        width: "100%",
                                                        flex: 1,
                                                        minHeight: 0,
                                                        alignItems: "flex-start",
                                                        justifyContent: "flex-start",
                                                        overflowX: "auto",
                                                        minWidth: 0,
                                                        padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                        boxSizing: "border-box"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 320,
                                                                maxWidth: 420,
                                                                flex: "1 1 320",
                                                                minHeight: 0,
                                                                display: "flex"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCardWithLocalExpansion, {
                                                                mode: "dark",
                                                                tokens: localTokensByMode.dark,
                                                                originalTokens: canonicalDark,
                                                                options: baseColorOptionsByMode.dark,
                                                                onChange: (k, v)=>handleChange("dark", k, v),
                                                                titleAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModoAyudaSwitch, {
                                                                    value: modoAyuda,
                                                                    onChange: setModoAyuda
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2326,
                                                                    columnNumber: 58
                                                                }, void 0),
                                                                semantic: semantic,
                                                                isDirty: !baseTokensEqual(localTokensByMode.dark, lastSavedByMode.dark),
                                                                onSave: ()=>handleSaveBaseColors("dark"),
                                                                onCopyHex: handleCopyHex
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2320,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, "dark", false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2319,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 320,
                                                                maxWidth: 420,
                                                                flex: "1 1 320",
                                                                minHeight: 0,
                                                                display: "flex"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BaseColorsCardWithLocalExpansion, {
                                                                mode: "light",
                                                                tokens: localTokensByMode.light,
                                                                originalTokens: canonicalLight,
                                                                options: baseColorOptionsByMode.light,
                                                                onChange: (k, v)=>handleChange("light", k, v),
                                                                titleAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModoAyudaSwitch, {
                                                                    value: modoAyuda,
                                                                    onChange: setModoAyuda
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2340,
                                                                    columnNumber: 58
                                                                }, void 0),
                                                                semantic: semantic,
                                                                isDirty: !baseTokensEqual(localTokensByMode.light, lastSavedByMode.light),
                                                                onSave: ()=>handleSaveBaseColors("light"),
                                                                onCopyHex: handleCopyHex
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                lineNumber: 2334,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, "light", false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2333,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2301,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2171,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false),
                                    activeTab === "Estados" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_components$2f$AppearanceSectionLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppearanceSectionLayout"], {
                                        headerContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                color: semantic.text.active
                                            },
                                            children: "Estados"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2356,
                                            columnNumber: 29
                                        }, void 0),
                                        headerVariant: "title",
                                        borderColor: semantic.border.subtle ?? semantic.border.default,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "appearance-cards-scroll",
                                            style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                                width: "100%",
                                                flex: 1,
                                                minHeight: 0,
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                overflowX: "auto",
                                                minWidth: 0,
                                                padding: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                boxSizing: "border-box"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: 320,
                                                    maxWidth: 420,
                                                    flex: "1 1 320",
                                                    minHeight: 0,
                                                    display: "flex"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EstadosCard, {
                                                    tokens: currentStates,
                                                    originalTokens: stateTokensFromTheme((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$core$2f$visual$2f$themeRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeTokens"])(currentPreset, theme)),
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
                                                    lineNumber: 2390,
                                                    columnNumber: 33
                                                }, this)
                                            }, "estados", false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2389,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                            lineNumber: 2371,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2354,
                                        columnNumber: 21
                                    }, this),
                                    activeTab === "Componentes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$lab$2f$apariencia$2f$_sections$2f$components$2f$ComponentsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComponentsSection"], {}, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                        lineNumber: 2409,
                                        columnNumber: 49
                                    }, this),
                                    activeTab === "Avanzado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                    flexShrink: 0,
                                                    paddingLeft: 0,
                                                    paddingRight: 0,
                                                    width: "100%"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        margin: 0,
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontFamily.primary,
                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontSize.lg,
                                                        fontWeight: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].fontWeight.semibold,
                                                        color: semantic.text.active
                                                    },
                                                    children: "Avanzado"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                    lineNumber: 2424,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2413,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][24],
                                                    width: "100%",
                                                    maxWidth: CONTENT_MAX_WIDTH,
                                                    paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16]
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingSection, {
                                                        title: "Tema",
                                                        description: "Preset activo para ajustes avanzados.",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                maxWidth: 320
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
                                                                lineNumber: 2439,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2438,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2437,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingSection, {
                                                        title: "Ajustes avanzados",
                                                        description: "Semantic tokens, radius, spacing, sombras.",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                                                gap: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$tokens$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"][16],
                                                                width: "100%"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Semantic tokens",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2456,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Radius",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2457,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Spacing",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2458,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$console$2f$ui$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                                    label: "Shadows",
                                                                    value: "",
                                                                    placeholder: "—",
                                                                    disabled: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                                    lineNumber: 2459,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                            lineNumber: 2448,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                        lineNumber: 2447,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                                lineNumber: 2436,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                                lineNumber: 2105,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                        lineNumber: 2057,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                    lineNumber: 2056,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/lab/apariencia/page.tsx",
                lineNumber: 2035,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_da54f08a._.js.map