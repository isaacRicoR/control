"use client";

import { useState } from "react";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { colors, spacing, radius } from "@tokens";

// Copied and adapted from app/users/create/page.tsx
// to validate ModalShell performance with real-world content.

interface UserFormProps {
    initialValues?: {
        nombre: string;
        apellido: string;
        segundoApellido: string;
        email: string;
        telefono: string;
        rol: string;
        departamento: string;
        rolPlataforma: string;
        estadoInicial: string;
    };
    onCancel: () => void;
    onSubmit: (data: Record<string, string>) => void;
}

export const UserForm = ({ initialValues, onCancel, onSubmit }: UserFormProps) => {
    const semantic = colors.dark.semantic;

    // Form state initialized with initialValues or defaults
    const [nombre, setNombre] = useState(initialValues?.nombre || "");
    const [apellido, setApellido] = useState(initialValues?.apellido || "");
    const [segundoApellido, setSegundoApellido] = useState(initialValues?.segundoApellido || "");
    const [email, setEmail] = useState(initialValues?.email || "");
    const [telefono, setTelefono] = useState(initialValues?.telefono || "");
    const [rol, setRol] = useState(initialValues?.rol || "");
    const [departamento, setDepartamento] = useState(initialValues?.departamento || "");
    const [rolPlataforma, setRolPlataforma] = useState(initialValues?.rolPlataforma || "");
    const [estadoInicial, setEstadoInicial] = useState(initialValues?.estadoInicial || "");

    const [errors, setErrors] = useState<Record<string, string>>({});

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
        // Basic validation for visual feedback
        const newErrors: Record<string, string> = {};
        if (!nombre.trim()) newErrors.nombre = "Requerido";
        if (!apellido.trim()) newErrors.apellido = "Requerido";

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

    return (
        <div style={{ display: "flex", gap: 0, flexDirection: "column" }}> {/* Mimicking layoutGrid without the grid class for simplicity in lab, or we can inline styles */}

            <div style={{ display: "flex", flexDirection: "column", gap: spacing.lg }}>

                {/* Visual Avatar Placeholder - Left Col in original, Top/Inline here? 
                    Original uses a grid. Let's replicate the structure slightly simplified for the modal.
                    Modal is usually single column or simpler grid. 
                    Let's use a split layout if width allows, or stacked.
                    Given Modal is max-width responsive, let's stack for safety or use flex.
                */}

                <div style={{
                    display: "flex",
                    gap: spacing.lg,
                    flexDirection: "column",
                    // Simple responsive check: 
                }}>

                    {/* Form Fields Container */}
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing.lg }}>

                        {/* Row 1 */}
                        <div style={{ display: "flex", gap: spacing.lg, flexDirection: "row", flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input
                                    label="Nombre"
                                    required
                                    value={nombre}
                                    onChange={(e) => { setNombre(e.target.value); clearError("nombre"); }}
                                    error={!!errors.nombre}
                                    errorMessage={errors.nombre}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input
                                    label="Apellido"
                                    required
                                    value={apellido}
                                    onChange={(e) => { setApellido(e.target.value); clearError("apellido"); }}
                                    error={!!errors.apellido}
                                    errorMessage={errors.apellido}
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div style={{ display: "flex", gap: spacing.lg, flexDirection: "row", flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input label="Segundo Apellido" value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)} />
                            </div>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input
                                    label="Email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div style={{ display: "flex", gap: spacing.lg, flexDirection: "row", flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input label="Teléfono" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <Input
                                    label="Rol / Puesto"
                                    required
                                    value={rol}
                                    onChange={(e) => setRol(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div style={{ display: "flex", gap: spacing.lg, flexDirection: "row", flexWrap: "wrap" }}>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <SelectSingle
                                    label="Departamento"
                                    required
                                    value={departamento}
                                    onChange={setDepartamento}
                                    options={[
                                        { value: "Finanzas", label: "Finanzas" },
                                        { value: "TI", label: "Tecnología" },
                                        { value: "Ventas", label: "Ventas" },
                                    ]}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: "200px" }}>
                                <SelectSingle
                                    label="Rol de Plataforma"
                                    required
                                    value={rolPlataforma}
                                    onChange={setRolPlataforma}
                                    options={[
                                        { value: "Administrador", label: "Administrador" },
                                        { value: "Usuario", label: "Usuario" },
                                    ]}
                                />
                            </div>
                        </div>

                        <SelectSingle
                            label="Estado inicial"
                            value={estadoInicial}
                            onChange={setEstadoInicial}
                            options={[
                                { value: "Activo", label: "Activo" },
                                { value: "Inactivo", label: "Inactivo" },
                            ]}
                        />

                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div
                style={{
                    marginTop: spacing.xl,
                    paddingTop: spacing.lg,
                    borderTop: `1px solid ${semantic.border.default}`,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: spacing.md,
                }}
            >
                <Button variant="white" onClick={onCancel} style={{ borderRadius: radius.xl }}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit} style={{ borderRadius: radius.xl }}>
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
};
