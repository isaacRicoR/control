import type { FC, CSSProperties } from "react";
import { colors, spacing, radius, typography } from "@tokens";
import "./SelectField.css";

export interface SelectFieldProps {
    label?: string;
    value?: string; // Texto a mostrar en el campo
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    open?: boolean; // Para rotar la flecha
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    id?: string;
}

import { useTheme } from "@ui/context/ThemeProvider";

export const SelectField: FC<SelectFieldProps> = ({
    label,
    value,
    placeholder = "Selecciona...",
    error,
    errorMessage,
    helperText,
    disabled,
    required,
    open,
    onClick,
    onFocus,
    onBlur,
    id,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const hasValue = !!value;

    return (
        <div
            className="select-field-container"
            style={
                {
                    position: "relative",
                    marginBottom: 0, // ✅ CLAVE: no inflar contenedor (evita gap del dropdown)
                    fontFamily: typography.fontFamily.primary,

                    "--select-height": `${spacing[48]}px`,
                    "--select-padding-x": `${spacing[24]}px`,
                    "--select-padding-top": `${spacing[24]}px`,
                    "--select-padding-bottom": `${spacing[4]}px`,
                    "--select-radius": `${radius.md}px`,

                    "--select-bg": semantic.surface.default,
                    "--select-border": semantic.border.default,
                    "--select-border-hover": semantic.border.active,
                    "--select-border-focus": semantic.border.active,
                    "--select-border-error": semantic.danger.default,

                    "--select-text": semantic.text.active,
                    "--select-label": semantic.text.muted || semantic.text.default,
                    "--select-label-focus": semantic.primary.default,
                    "--select-label-error": semantic.danger.default,

                    "--select-arrow": semantic.icon?.muted || semantic.text.muted || semantic.text.default,
                } as CSSProperties
            }
        >
            {/* Campo visual (caja clickeable) */}
            <div
                id={id}
                className={`select-field-box ${error ? "has-error" : ""} ${open ? "is-open" : ""}`}
                onClick={disabled ? undefined : onClick}
                onFocus={onFocus}
                onBlur={onBlur}
                tabIndex={disabled ? -1 : 0}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                data-filled={hasValue}
                style={{
                    opacity: disabled ? 0.6 : 1,
                    cursor: disabled ? "not-allowed" : "pointer",
                }}
            >
                {/* Texto del valor seleccionado o placeholder */}
                <span className="select-field-value">{value || placeholder}</span>

                {/* Icono flecha (chevron down) */}
                <svg
                    className="select-field-arrow"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        transition: "transform 0.2s ease",
                        transform: open
                            ? "translateY(-50%) rotate(180deg)"
                            : "translateY(-50%) rotate(0deg)",
                    }}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>

            {/* Label flotante */}
            {label && (
                <label
                    className="select-field-label"
                    style={{
                        color: error ? semantic.danger.default : undefined,
                    }}
                >
                    {label}{" "}
                    {required && (
                        <span className="required-asterisk" style={{ color: semantic.danger.default }}>
                            *
                        </span>
                    )}
                </label>
            )}

            {/* Helper text / Error message */}
            {(error || helperText) && (
                <span
                    className="select-field-helper"
                    role={error ? "alert" : undefined}
                    style={{
                        display: "block",
                        marginTop: spacing[4],
                        fontSize: typography.fontSize.xs,
                        color: error ? semantic.danger.default : semantic.text.muted || semantic.text.disabled,
                    }}
                >
                    {error ? errorMessage : helperText}
                </span>
            )}
        </div>
    );
};
