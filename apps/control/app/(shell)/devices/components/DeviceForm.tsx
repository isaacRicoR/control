"use client";

import { useState, useEffect } from "react";
import { Input } from "@ui/atoms/Input/Input";
import { Textarea } from "@ui/atoms/Textarea/Textarea";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { FormLayout } from "@ui/patterns/form/FormLayout";
import { FormActions } from "@ui/patterns/form/FormActions";
import { colors, spacing, typography } from "@tokens";
import { Icon } from "@ui/atoms/Icon/Icon";


export interface DeviceFormData {
    nombre: string;
    departamento: string;
    tipo: string;
    estadoInicial: string;
    usuarioAsignado: string;
    ubicacion: string;
    notas: string;
}

interface DeviceFormProps {
    mode: "create" | "edit";
    initialValues?: Partial<DeviceFormData>;
    onCancel: () => void;
    onSubmit: (data: DeviceFormData) => void;
    loading?: boolean;
    error?: string;
}

export const DeviceForm = ({ mode, initialValues, onCancel, onSubmit, loading = false, error }: DeviceFormProps) => {
    const semantic = colors.semantic;

    // Form State
    const [nombre, setNombre] = useState(initialValues?.nombre || "");
    const [departamento, setDepartamento] = useState(initialValues?.departamento || "");
    const [tipo, setTipo] = useState(initialValues?.tipo || "");
    const [estadoInicial, setEstadoInicial] = useState(initialValues?.estadoInicial || "Activo");
    const [usuarioAsignado, setUsuarioAsignado] = useState(initialValues?.usuarioAsignado || "");
    const [ubicacion, setUbicacion] = useState(initialValues?.ubicacion || "");
    const [notas, setNotas] = useState(initialValues?.notas || "");

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (mode === "edit" && initialValues) {
            const timer = setTimeout(() => {
                if (nombre !== initialValues.nombre) setNombre(initialValues.nombre || "");
                if (departamento !== initialValues.departamento) setDepartamento(initialValues.departamento || "");
                if (tipo !== initialValues.tipo) setTipo(initialValues.tipo || "");
                if (estadoInicial !== initialValues.estadoInicial) setEstadoInicial(initialValues.estadoInicial || "Activo");
                if (usuarioAsignado !== initialValues.usuarioAsignado) setUsuarioAsignado(initialValues.usuarioAsignado || "");
                if (ubicacion !== initialValues.ubicacion) setUbicacion(initialValues.ubicacion || "");
                if (notas !== initialValues.notas) setNotas(initialValues.notas || "");
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [mode, initialValues, nombre, departamento, tipo, estadoInicial, usuarioAsignado, ubicacion, notas]);

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
            notas,
        });
    };

    return (
        <>
            <FormLayout
                leftSlot={
                    <>
                        {/* Device Icon Placeholder */}
                        <div
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                border: `1px dashed ${semantic.border.active}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: semantic.text.disabled,
                                backgroundColor: "transparent", // Use transparent as standard
                            }}
                        >
                            <Icon name="monitor" size={56} />
                        </div>

                        <div style={{ textAlign: "center", color: semantic.text.disabled }}>
                            <p style={{ margin: 0, fontSize: typography.fontSize.sm }}>
                                Icono del dispositivo
                            </p>
                        </div>
                    </>
                }
            >
                {/* Left Column Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                    <Input
                        label="Nombre / Etiqueta"
                        required
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                            clearError("nombre");
                        }}
                        error={!!errors.nombre}
                        errorMessage={errors.nombre}
                    />

                    <SelectSingle
                        label="Departamento"
                        required
                        value={departamento}
                        onChange={(value) => {
                            setDepartamento(value);
                            clearError("departamento");
                        }}
                        error={!!errors.departamento}
                        errorMessage={errors.departamento}
                        options={[
                            { value: "TI", label: "Tecnología" },
                            { value: "Finanzas", label: "Finanzas" },
                            { value: "Operaciones", label: "Operaciones" },
                        ]}
                    />

                    <SelectSingle
                        label="Tipo de dispositivo"
                        required
                        value={tipo}
                        onChange={(value) => {
                            setTipo(value);
                            clearError("tipo");
                        }}
                        error={!!errors.tipo}
                        errorMessage={errors.tipo}
                        options={[
                            { value: "Laptop", label: "Laptop" },
                            { value: "Desktop", label: "Desktop" },
                            { value: "Tablet", label: "Tablet" },
                            { value: "Smartphone", label: "Smartphone" },
                            { value: "Monitor", label: "Monitor" },
                        ]}
                    />

                    <SelectSingle
                        label="Estado inicial"
                        value={estadoInicial}
                        onChange={(value) => setEstadoInicial(value)}
                        options={[
                            { value: "Activo", label: "Activo" },
                            { value: "Inactivo", label: "Inactivo" },
                            { value: "Mantenimiento", label: "En Mantenimiento" },
                        ]}
                    />
                </div>

                {/* Right Column Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                    <SelectSingle
                        label="Usuario asignado"
                        value={usuarioAsignado}
                        onChange={(value) => setUsuarioAsignado(value)}
                        options={[
                            { value: "", label: "Ninguno" },
                            { value: "Ana Perez", label: "Ana Perez" },
                            { value: "Juan Lopez", label: "Juan Lopez" },
                        ]}
                    />

                    <SelectSingle
                        label="Ubicación"
                        required
                        value={ubicacion}
                        onChange={(value) => {
                            setUbicacion(value);
                            clearError("ubicacion");
                        }}
                        error={!!errors.ubicacion}
                        errorMessage={errors.ubicacion}
                        options={[
                            { value: "Oficina Central", label: "Oficina Central" },
                            { value: "Remoto", label: "Remoto" },
                            { value: "Almacén", label: "Almacén" },
                        ]}
                    />

                    <Textarea
                        label="Notas"
                        value={notas}
                        onChange={(e) => setNotas(e.target.value)}
                        rows={2}
                    />
                </div>
            </FormLayout>

            <FormActions
                error={error}
                loading={loading}
                mode={mode}
                onCancel={onCancel}
                onSubmit={handleSubmit}
            />
        </>
    );
};
