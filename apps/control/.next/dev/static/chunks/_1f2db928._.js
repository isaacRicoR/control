(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/control/app/(shell)/users/components/UserForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatarPlaceholder": "UserForm-module__YobMcW__avatarPlaceholder",
  "formCol": "UserForm-module__YobMcW__formCol",
  "formColumnGrid": "UserForm-module__YobMcW__formColumnGrid",
  "formFieldColumn": "UserForm-module__YobMcW__formFieldColumn",
  "layoutGrid": "UserForm-module__YobMcW__layoutGrid",
  "visualCol": "UserForm-module__YobMcW__visualCol",
});
}),
"[project]/apps/control/app/(shell)/users/components/UserForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserForm",
    ()=>UserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/users/components/UserForm.module.css [app-client] (css module)"); // Using local CSS module
(()=>{
    const e = new Error("Cannot find module '@core/auth/SessionProvider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/permissions/can'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/Input/Input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/patterns/form/FormLayout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/molecules/SelectSingle/SelectSingle'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/patterns/form/FormActions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tokens'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const UserForm = ({ mode, initialValues, onCancel, onSubmit, loading = false, error })=>{
    _s();
    const semantic = colors.semantic;
    const session = useSession();
    // Gobernanza: verificar si el usuario tiene permiso de edición
    const canEdit = can(session.role, 'users', 'edit');
    const isReadOnly = mode === 'edit' && !canEdit;
    // Form state initialized with initialValues for 'edit' mode or defaults
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.nombre || "");
    const [apellido, setApellido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.apellido || "");
    const [segundoApellido, setSegundoApellido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.segundoApellido || "");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.email || "");
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.telefono || "");
    const [rol, setRol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.rol || "");
    const [departamento, setDepartamento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.departamento || "");
    const [rolPlataforma, setRolPlataforma] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.rolPlataforma || "");
    const [estadoInicial, setEstadoInicial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues?.estadoInicial || "");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Update state when initialValues change (crucial for loading data in edit mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserForm.useEffect": ()=>{
            if (mode === "edit" && initialValues) {
                const timer = setTimeout({
                    "UserForm.useEffect.timer": ()=>{
                        setNombre(initialValues.nombre || "");
                        setApellido(initialValues.apellido || "");
                        setSegundoApellido(initialValues.segundoApellido || "");
                        setEmail(initialValues.email || "");
                        setTelefono(initialValues.telefono || "");
                        setRol(initialValues.rol || "");
                        setDepartamento(initialValues.departamento || "");
                        setRolPlataforma(initialValues.rolPlataforma || "");
                        setEstadoInicial(initialValues.estadoInicial || "");
                    }
                }["UserForm.useEffect.timer"], 0);
                return ({
                    "UserForm.useEffect": ()=>clearTimeout(timer)
                })["UserForm.useEffect"];
            }
        }
    }["UserForm.useEffect"], [
        mode,
        initialValues
    ]);
    const validateEmail = (email)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
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
        // Validations (copied from CreateUserPage)
        if (!nombre.trim()) newErrors.nombre = "Este campo es obligatorio";
        if (!apellido.trim()) newErrors.apellido = "Este campo es obligatorio";
        if (!rol.trim()) newErrors.rol = "Este campo es obligatorio";
        if (!departamento) newErrors.departamento = "Este campo es obligatorio";
        if (!rolPlataforma) newErrors.rolPlataforma = "Este campo es obligatorio";
        if (!email.trim()) {
            newErrors.email = "Este campo es obligatorio";
        } else if (!validateEmail(email)) {
            newErrors.email = "Ingresa un email válido";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit({
            nombre,
            apellido,
            segundoApellido,
            email,
            telefono,
            rol,
            departamento,
            rolPlataforma,
            estadoInicial
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormLayout, {
                leftSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarPlaceholder,
                            style: {
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                border: `1px dashed ${semantic.border.active}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "--avatar-bg": "transparent",
                                "--avatar-bg-hover": semantic.surface.hover,
                                "--avatar-icon": semantic.text.disabled,
                                "--avatar-icon-hover": semantic.text.hover
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 56,
                                height: 56,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 1.5,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                        lineNumber: 155,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                        lineNumber: 156,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                color: semantic.text.disabled
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        fontSize: typography.fontSize.sm
                                    },
                                    children: "Opcional • Formatos JPG, PNG •"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        fontSize: typography.fontSize.sm
                                    },
                                    children: "Máx 5MB"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                            lineNumber: 160,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formFieldColumn,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: spacing[24]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Nombre",
                                required: true,
                                value: nombre,
                                readOnly: isReadOnly,
                                onChange: (e)=>{
                                    setNombre(e.target.value);
                                    clearError("nombre");
                                },
                                error: !!errors.nombre,
                                errorMessage: errors.nombre
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 180,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Apellido",
                                required: true,
                                value: apellido,
                                readOnly: isReadOnly,
                                onChange: (e)=>{
                                    setApellido(e.target.value);
                                    clearError("apellido");
                                },
                                error: !!errors.apellido,
                                errorMessage: errors.apellido
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Segundo Apellido",
                                value: segundoApellido,
                                readOnly: isReadOnly,
                                onChange: (e)=>setSegundoApellido(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Email",
                                type: "email",
                                required: true,
                                value: email,
                                readOnly: isReadOnly,
                                onChange: (e)=>{
                                    setEmail(e.target.value);
                                    clearError("email");
                                },
                                error: !!errors.email,
                                errorMessage: errors.email
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 205,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Teléfono",
                                type: "tel",
                                value: telefono,
                                readOnly: isReadOnly,
                                onChange: (e)=>setTelefono(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formFieldColumn,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: spacing[24]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Rol / Puesto",
                                required: true,
                                value: rol,
                                readOnly: isReadOnly,
                                onChange: (e)=>{
                                    setRol(e.target.value);
                                    clearError("rol");
                                },
                                error: !!errors.rol,
                                errorMessage: errors.rol
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 230,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectSingle, {
                                label: "Departamento",
                                required: true,
                                value: departamento,
                                disabled: isReadOnly,
                                onChange: (value)=>{
                                    setDepartamento(value);
                                    clearError("departamento");
                                },
                                error: !!errors.departamento,
                                errorMessage: errors.departamento,
                                options: [
                                    {
                                        value: "Finanzas",
                                        label: "Finanzas"
                                    },
                                    {
                                        value: "Recursos Humanos",
                                        label: "Recursos Humanos"
                                    },
                                    {
                                        value: "TI",
                                        label: "Tecnología"
                                    },
                                    {
                                        value: "Ventas",
                                        label: "Ventas"
                                    },
                                    {
                                        value: "Marketing",
                                        label: "Marketing"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 243,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectSingle, {
                                label: "Rol de Plataforma",
                                required: true,
                                value: rolPlataforma,
                                disabled: isReadOnly,
                                onChange: (value)=>{
                                    setRolPlataforma(value);
                                    clearError("rolPlataforma");
                                },
                                error: !!errors.rolPlataforma,
                                errorMessage: errors.rolPlataforma,
                                options: [
                                    {
                                        value: "Administrador",
                                        label: "Administrador"
                                    },
                                    {
                                        value: "Usuario",
                                        label: "Usuario"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 263,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectSingle, {
                                label: "Estado inicial",
                                value: estadoInicial,
                                disabled: isReadOnly,
                                onChange: (value)=>setEstadoInicial(value),
                                options: [
                                    {
                                        value: "Activo",
                                        label: "Activo"
                                    },
                                    {
                                        value: "Pendiente",
                                        label: "Pendiente"
                                    },
                                    {
                                        value: "Inactivo",
                                        label: "Inactivo"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormActions, {
                error: error,
                loading: loading,
                mode: mode,
                onCancel: onCancel,
                onSubmit: handleSubmit,
                disabled: isReadOnly
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/users/components/UserForm.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(UserForm, "XtA/EuXklvApKVEgdfhLoW5/BzU=", false, function() {
    return [
        useSession
    ];
});
_c = UserForm;
var _c;
__turbopack_context__.k.register(_c, "UserForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsersListClient",
    ()=>UsersListClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@ui/context/ThemeProvider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/hooks/useDeepLinkedList'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/DataTable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/Badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/Icon/Icon'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tokens'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/TableToolbar/TableToolbar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/PageShell/PageShell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/Button/Button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/molecules/DeviceStatusCell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/ModalShell/ModalShell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/ActionIcon/ActionIcon'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/molecules/ActionMenu/ActionMenu'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/control/app/(shell)/users/components/UserForm.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@ui/atoms/SearchInput'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/access/PermissionGate'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/patterns/skeletons/ListSkeleton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/ErrorState/ErrorState'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@ui/containers/EmptyState/EmptyState'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/connector/httpClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/toast/useToast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@core/toast/errorToastHelper'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
function UsersListClient() {
    _s();
    const { showToast } = useToast();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const debugState = searchParams.get("debugState");
    const { activeTab, searchQuery, filters, setTab: handleTabChange, setSearch: handleSearchChange, setFilter } = useDeepLinkedList({
        defaultTab: "Todos",
        defaultSearch: "",
        filtersConfig: {
            role: "Todos los roles"
        }
    });
    const selectedRole = filters.role;
    const handleRoleChange = (role)=>setFilter("role", role);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetchError, setFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ─── Fetch ───────────────────────────────────────────────────────────────
    const STATUS_TABS = [
        {
            label: "Todos",
            filterValue: null
        },
        {
            label: "Activos",
            filterValue: "Activo",
            variant: "success"
        },
        {
            label: "Pendientes",
            filterValue: "Pendiente",
            variant: "warning"
        },
        {
            label: "Inactivos",
            filterValue: "Inactivo",
            variant: "neutral"
        },
        {
            label: "Bloqueados",
            filterValue: "Bloqueado",
            variant: "danger"
        }
    ];
    const activeTabConfig = STATUS_TABS.find((t)=>t.label === activeTab);
    const filteredRows = rows.filter((row)=>{
        if (activeTabConfig?.filterValue && row.status !== activeTabConfig.filterValue) return false;
        if (selectedRole !== "Todos los roles" && row.role !== selectedRole) return false;
        return true;
    });
    const getTabCount = (filterValue)=>{
        return rows.filter((row)=>{
            if (selectedRole !== "Todos los roles" && row.role !== selectedRole) return false;
            if (filterValue && row.status !== filterValue) return false;
            return true;
        }).length;
    };
    // Modal state
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditOpen, setIsEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleEdit = (row)=>{
        console.log('EDIT CLICK', row);
        setSelectedUser(row);
        setIsEditOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsEditOpen(false);
        setSelectedUser(null);
    };
    const handleSaveUser = (data)=>{
        console.log("Saving user changes:", data);
        // Here we would normally make an API call
        handleCloseModal();
    };
    // Columns defined inside component to access handlers
    const columns = [
        {
            key: "name",
            header: "Nombre",
            sortable: true,
            sortValue: (row)=>row.name,
            filterable: true,
            filterValue: (row)=>`${String(row.name ?? "")} ${String(row.email ?? "")}`,
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: spacing[12]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: row.initialsColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFF",
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: typography.fontFamily.primary
                            },
                            children: row.initials
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontWeight: 600,
                                        color: "#E2E8F0",
                                        fontFamily: typography.fontFamily.primary
                                    },
                                    children: row.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: "#94A3B8",
                                        fontFamily: typography.fontFamily.primary
                                    },
                                    children: row.email
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                }, this)
        },
        {
            key: "phone",
            header: "Teléfono",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "monospace",
                        color: "#E2E8F0"
                    },
                    children: row.phone
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 166,
                    columnNumber: 17
                }, this)
        },
        {
            key: "role",
            header: "Rol",
            filterable: true,
            filterValue: (row)=>String(row.role ?? ""),
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#94A3B8",
                        fontFamily: typography.fontFamily.primary
                    },
                    children: row.role
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 176,
                    columnNumber: 37
                }, this)
        },
        {
            key: "department",
            header: "Departamento",
            filterable: true,
            filterValue: (row)=>String(row.department ?? ""),
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#94A3B8",
                        fontFamily: typography.fontFamily.primary
                    },
                    children: row.department
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, this),
            hideBelow: "md"
        },
        {
            key: "status",
            header: "Estado",
            filterable: true,
            filterValue: (row)=>String(row.status ?? ""),
            cell: (row)=>{
                const variantMap = {
                    Activo: "success",
                    Inactivo: "neutral",
                    Pendiente: "warning"
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    label: row.status,
                    variant: variantMap[row.status],
                    appearance: "ghost",
                    interactive: false,
                    fontSize: typography.fontSize.sm
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 200,
                    columnNumber: 21
                }, this);
            }
        },
        {
            key: "devices",
            header: "Dispositivos",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeviceStatusCell, {
                    devices: row.devices,
                    status: row.status
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 214,
                    columnNumber: 17
                }, this),
            hideBelow: "lg"
        },
        {
            key: "lastActivity",
            header: "Última actividad",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "#94A3B8",
                        whiteSpace: "nowrap",
                        fontFamily: typography.fontFamily.primary
                    },
                    children: row.lastActivity
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 222,
                    columnNumber: 17
                }, this),
            hideBelow: "xl"
        },
        {
            key: "actions",
            header: "Acciones",
            align: "center",
            cell: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: spacing[4],
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionIcon, {
                            name: "user",
                            label: "Ver perfil",
                            onClick: ()=>router.push(`/users/${row.id}`)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionGate, {
                            entity: "users",
                            action: "edit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionIcon, {
                                name: "edit",
                                label: "Editar usuario",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleEdit(row);
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 238,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionGate, {
                            entity: "users",
                            action: "delete",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionMenu, {
                                trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionIcon, {
                                    name: "more-vertical",
                                    label: "Más acciones"
                                }, void 0, false, {
                                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                    lineNumber: 252,
                                    columnNumber: 38
                                }, void 0),
                                title: "Acciones de usuario",
                                align: "right",
                                sections: [
                                    [
                                        {
                                            type: "item",
                                            label: "Reenviar invitación",
                                            icon: "file-text",
                                            onClick: ()=>console.log("Reenviar invitación", row.id)
                                        },
                                        {
                                            type: "item",
                                            label: "Restablecer contraseña",
                                            icon: "lock",
                                            onClick: ()=>console.log("Restablecer contraseña", row.id)
                                        }
                                    ],
                                    [
                                        {
                                            type: "item",
                                            label: "Bloquear usuario",
                                            icon: "alert-circle",
                                            variant: "warning",
                                            onClick: ()=>console.log("Bloquear usuario", row.id)
                                        },
                                        {
                                            type: "item",
                                            label: "Eliminar usuario",
                                            icon: "trash",
                                            variant: "danger",
                                            onClick: ()=>console.log("Eliminar usuario", row.id)
                                        }
                                    ]
                                ]
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                lineNumber: 251,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 250,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this),
            hideBelow: "xl"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersListClient.useEffect": ()=>{
            const fetchUsers = {
                "UsersListClient.useEffect.fetchUsers": async ()=>{
                    try {
                        setLoading(true);
                        setFetchError(null);
                        const response = await request('/users?page=1&limit=20');
                        if (!response.ok) {
                            const toast = normalizedErrorToToast(response.error);
                            showToast(toast);
                            setFetchError(response.error.message);
                            setRows([]);
                            return;
                        }
                        const users = response.data ?? [];
                        const mappedRows = users.map({
                            "UsersListClient.useEffect.fetchUsers.mappedRows": (item)=>({
                                    id: item.id,
                                    initials: item.initials,
                                    initialsColor: item.initialsColor,
                                    name: item.name,
                                    email: item.email,
                                    phone: item.phone,
                                    role: item.role,
                                    department: item.department,
                                    status: item.status,
                                    devices: item.devices,
                                    lastActivity: item.lastActivity
                                })
                        }["UsersListClient.useEffect.fetchUsers.mappedRows"]);
                        setRows(mappedRows);
                    } catch (error) {
                        console.error('[UsersListClient] Unexpected error:', error);
                        setFetchError('Ocurrió un error inesperado al procesar los datos.');
                        setRows([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["UsersListClient.useEffect.fetchUsers"];
            fetchUsers();
        }
    }["UsersListClient.useEffect"], []);
    // ── Debug overrides (?debugState=loading|error|empty) — dev only ──────────
    if (("TURBOPACK compile-time value", "development") !== 'production' && debugState) {
        if (debugState === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListSkeleton, {
            rows: 7,
            columns: 5
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
            lineNumber: 343,
            columnNumber: 46
        }, this);
        if (debugState === "error") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
            title: "Error al cargar usuarios",
            description: "Simulated fetch error (debug)."
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
            lineNumber: 344,
            columnNumber: 44
        }, this);
        if (debugState === "empty") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
            title: "Sin resultados",
            description: "No hay usuarios registrados (debug).",
            icon: "users"
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
            lineNumber: 345,
            columnNumber: 44
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
            variant: "fluid",
            title: "Usuarios",
            breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Panel"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 355,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 356,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Usuarios"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 357,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 358,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: semantic.text.active
                        },
                        children: "Lista"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 359,
                        columnNumber: 25
                    }, void 0)
                ]
            }, void 0, true),
            headerStyle: {
                borderBottom: "none"
            },
            style: {
                display: "flex",
                flexDirection: "column",
                height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                overflow: "hidden",
                minHeight: 0
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListSkeleton, {
                rows: 7,
                columns: 5
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                lineNumber: 371,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
            lineNumber: 350,
            columnNumber: 13
        }, this);
    }
    if (fetchError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
            variant: "fluid",
            title: "Usuarios",
            breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Panel"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 383,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 384,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Usuarios"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 385,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 386,
                        columnNumber: 25
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: semantic.text.active
                        },
                        children: "Lista"
                    }, void 0, false, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 387,
                        columnNumber: 25
                    }, void 0)
                ]
            }, void 0, true),
            headerStyle: {
                borderBottom: "none"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorState, {
                title: "Error al cargar usuarios",
                description: fetchError,
                onRetry: ()=>{
                    setFetchError(null);
                    setLoading(true);
                }
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                lineNumber: 392,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
            lineNumber: 378,
            columnNumber: 13
        }, this);
    }
    // Helper to split name for form
    const splitName = (fullName)=>{
        const parts = fullName.split(" ");
        return {
            nombre: parts[0] || "",
            apellido: parts.slice(1).join(" ") || ""
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
                variant: "fluid",
                title: "Usuarios",
                breadcrumbs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Panel"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 417,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 418,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Usuarios"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 419,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 420,
                            columnNumber: 25
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: semantic.text.active
                            },
                            children: "Lista"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 421,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true),
                actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PermissionGate, {
                    entity: "users",
                    action: "create",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        size: "sm",
                        variant: "white",
                        onClick: ()=>router.push("/users/create"),
                        style: {
                            gap: spacing[8],
                            borderRadius: radius.xl
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                name: "plus",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                lineNumber: 432,
                                columnNumber: 29
                            }, void 0),
                            "Crear usuario"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                        lineNumber: 426,
                        columnNumber: 25
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 425,
                    columnNumber: 21
                }, void 0),
                headerStyle: {
                    borderBottom: "none"
                },
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                    overflow: "hidden",
                    minHeight: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: semantic.surface.default,
                        border: `1px solid ${semantic.border.default}`,
                        borderRadius: radius.md,
                        overflow: "hidden",
                        flex: 1,
                        minHeight: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableToolbar, {
                            tabs: STATUS_TABS.map((tab)=>({
                                    label: tab.label,
                                    count: getTabCount(tab.filterValue),
                                    variant: tab.variant
                                })),
                            activeTab: activeTab,
                            onTabChange: handleTabChange,
                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableDropdown, {
                                value: selectedRole,
                                options: [
                                    "Todos los roles",
                                    "Administrador",
                                    "Usuario",
                                    "Supervisor"
                                ],
                                onChange: handleRoleChange,
                                align: "left"
                            }, void 0, false, {
                                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                lineNumber: 472,
                                columnNumber: 29
                            }, void 0),
                            endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchInput, {
                                        value: searchQuery,
                                        onChange: (e)=>handleSearchChange(e.target.value),
                                        style: {
                                            width: 240
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                        lineNumber: 481,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 36,
                                            height: 36,
                                            cursor: "pointer",
                                            opacity: 0.8,
                                            transform: "rotate(90deg)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            name: "more-horizontal",
                                            size: 20,
                                            color: semantic.text.default
                                        }, void 0, false, {
                                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                            lineNumber: 487,
                                            columnNumber: 37
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                                        lineNumber: 486,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 463,
                            columnNumber: 21
                        }, this),
                        filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                            title: "Sin resultados",
                            description: searchQuery ? "No hay usuarios que coincidan con tu búsqueda." : "Aún no hay usuarios registrados.",
                            icon: "users"
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 495,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataTable, {
                            ariaLabel: "Tabla de usuarios",
                            columns: columns,
                            rows: filteredRows,
                            filterQuery: searchQuery
                        }, void 0, false, {
                            fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                            lineNumber: 501,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 450,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                lineNumber: 412,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalShell, {
                isOpen: isEditOpen,
                onClose: handleCloseModal,
                title: "Editar Usuario",
                children: selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$control$2f$app$2f28$shell$292f$users$2f$components$2f$UserForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserForm"], {
                    mode: "edit",
                    initialValues: {
                        ...splitName(selectedUser.name),
                        segundoApellido: "",
                        email: selectedUser.email,
                        telefono: selectedUser.phone,
                        rol: selectedUser.role,
                        departamento: selectedUser.department,
                        rolPlataforma: "Usuario",
                        estadoInicial: selectedUser.status
                    },
                    onCancel: handleCloseModal,
                    onSubmit: handleSaveUser
                }, void 0, false, {
                    fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                    lineNumber: 517,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/control/app/(shell)/users/list/UsersListClient.tsx",
                lineNumber: 511,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(UsersListClient, "2WuM/QCKLDvE4dHdxfhih8K11SA=", false, function() {
    return [
        useToast,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        useTheme,
        useDeepLinkedList
    ];
});
_c = UsersListClient;
var _c;
__turbopack_context__.k.register(_c, "UsersListClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1f2db928._.js.map