"use client";

import { FC, TextareaHTMLAttributes, useId } from "react";
import { colors, spacing, radius, typography } from "@tokens";
import "./Textarea.css";

export interface TextareaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
    /** Floating label text */
    label?: string;
    /** Whether the field is in error state */
    error?: boolean;
    /** Error message displayed below the field */
    errorMessage?: string;
    /** Helper text displayed below the field (hidden when error is active) */
    helperText?: string;
}

export const Textarea: FC<TextareaProps> = ({
    label,
    error,
    errorMessage,
    helperText,
    id,
    className,
    required,
    rows = 1,
    style,
    ...props
}) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const helperId = helperText || errorMessage ? `${textareaId}-helper` : undefined;

    // Semantic Tokens
    const semantic = colors.semantic;

    return (
        <div
            className={`textarea-container ${className || ""}`}
            style={{
                position: "relative",
                marginBottom: 0,
                fontFamily: typography.fontFamily.primary,

                "--textarea-padding-x": `${spacing[24]}px`,
                "--textarea-padding-top": `${spacing[24]}px`,
                "--textarea-padding-bottom": `${spacing[4]}px`,
                "--textarea-radius": `${radius.md}px`,
                "--textarea-bg": semantic.surface.default,
                "--textarea-border": semantic.border.default,
                "--textarea-border-hover": semantic.border.active,
                "--textarea-border-focus": semantic.border.active,
                "--textarea-border-error": semantic.danger.default,
                "--textarea-text": semantic.text.active,
                "--textarea-label": semantic.text.default,
                "--textarea-label-focus": semantic.primary.default,
                "--textarea-label-error": semantic.danger.default,

                ...style,
            } as React.CSSProperties}
        >
            <textarea
                id={textareaId}
                className={`textarea-field ${error ? "has-error" : ""}`}
                placeholder=" " // Required for :placeholder-shown trick
                aria-invalid={error}
                aria-describedby={helperId}
                required={required}
                rows={rows}
                {...props}
            />

            {label && (
                <label
                    htmlFor={textareaId}
                    className="textarea-label"
                    style={{
                        color: error ? semantic.danger.default : undefined,
                    }}
                >
                    {label}{" "}
                    {required && (
                        <span
                            className="textarea-required-asterisk"
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
                    className="textarea-helper"
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
