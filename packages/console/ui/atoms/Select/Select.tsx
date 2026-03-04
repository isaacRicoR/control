"use client";

import React, { FC, SelectHTMLAttributes, useState, useId } from "react";
import { colors, spacing, radius, typography } from "@tokens";
import "./Select.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    helperText?: string;
    options?: { value: string; label: string }[];
}

import { useTheme } from "@ui/context/ThemeProvider";

export const Select: FC<SelectProps> = ({
    label,
    error,
    errorMessage,
    helperText,
    id,
    className,
    required,
    options = [],
    children,
    style,
    value,
    defaultValue,
    onChange, // Destructure onChange to wrap it
    ...props
}) => {
    // Generate a safe, stable ID if none provided
    const generatedId = useId();
    const selectId = id || generatedId;
    const helperId = helperText || errorMessage ? `${selectId}-helper` : undefined;

    // Semantic Tokens
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    // Internal state to track if value is present (for floating label styling)
    // We use derived state to handle both controlled and uncontrolled modes
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
    const isControlled = value !== undefined;
    const effectiveValue = isControlled ? value : uncontrolledValue;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!isControlled) {
            setUncontrolledValue(e.target.value);
        }
        if (onChange) {
            onChange(e);
        }
    };

    const selectVars: Record<string, string> = {
        "--select-height": `${spacing[48]}px`,
        "--select-padding-x": `${spacing[24]}px`,
        "--select-padding-top": `${spacing[24]}px`,
        "--select-padding-bottom": `${spacing[4]}px`,
        "--select-radius": `${radius.md}px`,
        "--select-bg": semantic.surface.default,
        "--select-border": semantic.border.default,
        "--select-border-hover": semantic.border.active, // TODO: Validate correct semantic token definition for hover state
        "--select-border-focus": semantic.border.active, // TODO: Validate correct semantic token definition for focus state
        "--select-border-error": semantic.danger.default,
        "--select-text": semantic.text.active,
        "--select-label": semantic.text.default,
        "--select-label-focus": semantic.primary.default,
        "--select-label-error": semantic.danger.default,
        "--select-arrow": semantic.text.default,
    };

    // Determine correct props for controlled vs uncontrolled
    const valueProps = value !== undefined ? { value } : { defaultValue };

    return (
        <div
            className={`select-container ${className || ""}`}
            style={{
                position: "relative",
                marginBottom: spacing[24],
                fontFamily: typography.fontFamily.primary,
                ...selectVars,
                ...style,
            }}
        >
            <select
                id={selectId}
                className={`select-field ${error ? "has-error" : ""}`}
                aria-invalid={error}
                aria-describedby={helperId}
                required={required}
                onChange={handleChange}
                data-filled={!!effectiveValue}
                {...valueProps}
                {...props}
            >
                {/* Placeholder Option: Hidden but selected by default if value is empty */}
                <option value="" disabled hidden>
                    Selecciona...
                </option>

                {/* Render options from prop or children */}
                {options.length > 0
                    ? options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))
                    : children}
            </select>

            {label && (
                <label
                    htmlFor={selectId}
                    className="select-label"
                >
                    {label} {required && <span className="required-asterisk">*</span>}
                </label>
            )}

            {(error || helperText) && (
                <span
                    id={helperId}
                    className="select-helper"
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
