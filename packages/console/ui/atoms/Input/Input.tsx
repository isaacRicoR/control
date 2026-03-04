import { FC, InputHTMLAttributes, useId } from "react";
import { colors, spacing, radius, typography } from "@tokens";
import "./Input.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    size?: "md" | "sm";
}

export const Input: FC<InputProps> = ({
    label,
    error,
    errorMessage,
    helperText,
    id,
    className,
    required,
    style,
    size = "md",
    ...props
}) => {
    // Generate a safe, stable ID if none provided
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = helperText || errorMessage ? `${inputId}-helper` : undefined;

    // Semantic Tokens
    const semantic = colors.semantic;

    // Size logic
    const isSmall = size === "sm";
    const height = isSmall ? spacing[32] + spacing[4] : spacing[48]; // 36px vs 48px
    const paddingX = isSmall ? spacing[12] : spacing[24];
    const paddingTop = isSmall ? spacing[16] : spacing[24]; // 16-8=8px top vs 24-8=16px top
    const paddingBottom = isSmall ? spacing[8] : spacing[4]; // 8px vs 4px
    const paddingLeft = isSmall ? spacing[12] : undefined; // Force 12px for sm instead of calc(12-7)=5px

    return (
        <div
            className={`input-container ${className || ""}`}
            style={{
                position: "relative",
                marginBottom: 0, // ✅ CLAVE: sin margen externo (layout controla el spacing)
                fontFamily: typography.fontFamily.primary,

                // vars moved here for scope visibility to siblings (Label)
                "--input-height": `${height}px`,
                "--input-padding-x": `${paddingX}px`,
                "--input-padding-top": `${paddingTop}px`,
                "--input-padding-bottom": `${paddingBottom}px`,
                ...(paddingLeft ? { "--input-padding-left": `${paddingLeft}px` } : {}),
                "--input-radius": `${radius.md}px`,
                "--input-bg": semantic.surface.default,
                "--input-border": semantic.border.default,
                "--input-border-hover": semantic.border.active,
                "--input-border-focus": semantic.border.focus,
                "--input-border-error": semantic.danger.default,
                "--input-text": semantic.text.active,
                "--input-label": semantic.text.default,
                "--input-label-focus": semantic.primary.default,
                "--input-label-error": semantic.danger.default,
                "--input-placeholder": semantic.text.disabled,

                ...style,
            } as React.CSSProperties}
        >
            <input
                id={inputId}
                className={`input-field ${error ? "has-error" : ""}`}
                placeholder=" " // Required for :placeholder-shown trick
                aria-invalid={error}
                aria-describedby={helperId}
                required={required}
                {...props}
            />

            {label && (
                <label
                    htmlFor={inputId}
                    className="input-label"
                    style={{
                        color: error ? semantic.danger.default : undefined,
                    }}
                >
                    {label}{" "}
                    {required && (
                        <span
                            className="required-asterisk"
                            style={{ color: semantic.danger.default }}
                        >
                            *
                        </span>
                    )}
                </label>
            )}

            {(error || helperText) && (
                <span
                    id={helperId}
                    className="input-helper"
                    role={error ? "alert" : undefined}
                    style={{
                        display: "block",
                        marginTop: spacing[4],
                        fontSize: typography.fontSize.xs,
                        color: error ? semantic.danger.default : semantic.text.disabled,
                    }}
                >
                    {error ? errorMessage : helperText}
                </span>
            )}
        </div>
    );
};
