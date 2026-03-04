"use client";

import { useState, useEffect } from "react";
import styles from "./UserForm.module.css"; // Using local CSS module
import { useSession } from "@core/auth/SessionProvider";
import { can } from "@core/permissions/can";
import { Input } from "@ui/atoms/Input/Input";
import { FormLayout } from "@ui/patterns/form/FormLayout";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { FormActions } from "@ui/patterns/form/FormActions";
import { colors, spacing, typography } from "@tokens";
import { Avatar } from "@ui/atoms/Avatar";

// Extracted from app/users/create/page.tsx to be the canonical UserForm
// Supports both 'create' and 'edit' modes

export interface UserFormData {
    nombre: string;
    apellido: string;
    segundoApellido: string;
    email: string;
    telefono: string;
    rol: string;
    departamento: string;
    rolPlataforma: string;
    estadoInicial: string;
    avatarUrl?: string | null;
}

interface UserFormProps {
    mode: "create" | "edit";
    initialValues?: Partial<UserFormData>;
    onCancel: () => void;
    onSubmit: (data: UserFormData) => void;
    loading?: boolean;
    error?: string;
}

export const UserForm = ({ mode, initialValues, onCancel, onSubmit, loading = false, error }: UserFormProps) => {
    const semantic = colors.semantic;
    const session = useSession();

    // Gobernanza: verificar si el usuario tiene permiso de edición
    const canEdit = can(session.role, 'users', 'edit');
    const isReadOnly = mode === 'edit' && !canEdit;

    // Form state initialized with initialValues for 'edit' mode or defaults
    const [nombre, setNombre] = useState(initialValues?.nombre || "");
    const [apellido, setApellido] = useState(initialValues?.apellido || "");
    const [segundoApellido, setSegundoApellido] = useState(initialValues?.segundoApellido || "");
    const [email, setEmail] = useState(initialValues?.email || "");
    const [telefono, setTelefono] = useState(initialValues?.telefono || "");
    const [rol, setRol] = useState(initialValues?.rol || "");
    const [departamento, setDepartamento] = useState(initialValues?.departamento || "");
    const [rolPlataforma, setRolPlataforma] = useState(initialValues?.rolPlataforma || "");
    const [estadoInicial, setEstadoInicial] = useState(initialValues?.estadoInicial || "");
    const [avatarUrl, setAvatarUrl] = useState(initialValues?.avatarUrl || null);

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Update state when initialValues change (crucial for loading data in edit mode)
    useEffect(() => {
        if (mode === "edit" && initialValues) {
            const timer = setTimeout(() => {
                setNombre(initialValues.nombre || "");
                setApellido(initialValues.apellido || "");
                setSegundoApellido(initialValues.segundoApellido || "");
                setEmail(initialValues.email || "");
                setTelefono(initialValues.telefono || "");
                setRol(initialValues.rol || "");
                setDepartamento(initialValues.departamento || "");
                setRolPlataforma(initialValues.rolPlataforma || "");
                setEstadoInicial(initialValues.estadoInicial || "");
                setAvatarUrl(initialValues.avatarUrl || null);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [mode, initialValues]);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const clearError = (field: string) => {
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleSubmit = () => {
        const newErrors: Record<string, string> = {};

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
            estadoInicial,
            avatarUrl
        });
    };

    return (
        <>
            <FormLayout
                leftSlot={
                    <>
                        <div
                            className={styles.avatarPlaceholder}
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                border: avatarUrl ? "none" : `1px dashed ${semantic.border.active}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "--avatar-bg": "transparent",
                                "--avatar-bg-hover": semantic.surface.hover,
                                "--avatar-icon": semantic.text.disabled,
                                "--avatar-icon-hover": semantic.text.hover,
                                overflow: "hidden", // Important for Avatar
                            } as unknown as React.CSSProperties}
                        >
                            {avatarUrl ? (
                                <Avatar
                                    src={avatarUrl}
                                    name={`${nombre} ${apellido}`}
                                    size={120}
                                />
                            ) : (
                                <svg
                                    width={56}
                                    height={56}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            )}
                        </div>

                        <div style={{ textAlign: "center", color: semantic.text.muted }}>
                            <p style={{ margin: 0, fontSize: typography.fontSize.xs }}>
                                Opcional • Formatos JPG, PNG
                            </p>
                            <p style={{ margin: 0, fontSize: typography.fontSize.xs }}>
                                •
                            </p>
                            <p style={{ margin: 0, fontSize: typography.fontSize.xs }}>
                                Máx 5MB
                            </p>
                        </div>
                    </>
                }
            >
                {/* Left fields */}
                <div
                    className={styles.formFieldColumn}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: spacing[24],
                    }}
                >
                    <Input
                        label="Nombre"
                        required
                        value={nombre}
                        readOnly={isReadOnly}
                        onChange={(e) => {
                            setNombre(e.target.value);
                            clearError("nombre");
                        }}
                        error={!!errors.nombre}
                        errorMessage={errors.nombre}
                    />
                    <Input
                        label="Apellido"
                        required
                        value={apellido}
                        readOnly={isReadOnly}
                        onChange={(e) => {
                            setApellido(e.target.value);
                            clearError("apellido");
                        }}
                        error={!!errors.apellido}
                        errorMessage={errors.apellido}
                    />
                    <Input label="Segundo Apellido" value={segundoApellido} readOnly={isReadOnly} onChange={(e) => setSegundoApellido(e.target.value)} />
                    <Input
                        label="Email"
                        type="email"
                        required
                        value={email}
                        readOnly={isReadOnly}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            clearError("email");
                        }}
                        error={!!errors.email}
                        errorMessage={errors.email}
                    />
                    <Input label="Teléfono" type="tel" value={telefono} readOnly={isReadOnly} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                {/* Right fields */}
                <div
                    className={styles.formFieldColumn}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: spacing[24],
                    }}
                >
                    <Input
                        label="Rol / Puesto"
                        required
                        value={rol}
                        readOnly={isReadOnly}
                        onChange={(e) => {
                            setRol(e.target.value);
                            clearError("rol");
                        }}
                        error={!!errors.rol}
                        errorMessage={errors.rol}
                    />

                    <SelectSingle
                        label="Departamento"
                        required
                        value={departamento}
                        disabled={isReadOnly}
                        onChange={(value) => {
                            setDepartamento(value);
                            clearError("departamento");
                        }}
                        error={!!errors.departamento}
                        errorMessage={errors.departamento}
                        options={[
                            { value: "Finanzas", label: "Finanzas" },
                            { value: "Recursos Humanos", label: "Recursos Humanos" },
                            { value: "TI", label: "Tecnología" },
                            { value: "Ventas", label: "Ventas" },
                            { value: "Marketing", label: "Marketing" },
                        ]}
                    />

                    <SelectSingle
                        label="Rol de Plataforma"
                        required
                        value={rolPlataforma}
                        disabled={isReadOnly}
                        onChange={(value) => {
                            setRolPlataforma(value);
                            clearError("rolPlataforma");
                        }}
                        error={!!errors.rolPlataforma}
                        errorMessage={errors.rolPlataforma}
                        options={[
                            { value: "Administrador", label: "Administrador" },
                            { value: "Usuario", label: "Usuario" },
                        ]}
                    />

                    <SelectSingle
                        label="Estado inicial"
                        value={estadoInicial}
                        disabled={isReadOnly}
                        onChange={(value) => setEstadoInicial(value)}
                        options={[
                            { value: "Activo", label: "Activo" },
                            { value: "Pendiente", label: "Pendiente" },
                            { value: "Inactivo", label: "Inactivo" },
                        ]}
                    />
                </div>
            </FormLayout>

            {/* Footer */}
            <FormActions
                error={error}
                loading={loading}
                mode={mode}
                onCancel={onCancel}
                onSubmit={handleSubmit}
                disabled={isReadOnly}
            />
        </>
    );
};
