import React, { ReactNode } from "react";
import { spacing } from "@tokens";

interface FormFieldProps {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

/**
 * FormField Pattern — Wrapper estructural para campos de formulario.
 * 
 * Simplificado para respetar el diseño de "floating labels" interno de los atoms (Input, Select).
 * No renderiza labels externos para evitar duplicidad y mantener el lenguaje visual oficial.
 */
export const FormField: React.FC<FormFieldProps> = ({
    children,
    className,
    disabled
}) => {
    return (
        <div
            className={`form-field-wrapper ${className || ""}`}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing[4], // Aire mínimo si se agregan elementos adicionales
                width: "100%",
                opacity: disabled ? 0.6 : 1,
            }}
        >
            {children}
        </div>
    );
};
