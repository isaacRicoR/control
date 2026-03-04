"use client";

import { colors, spacing, radius, typography } from "@tokens";
import { Button } from "@ui/atoms/Button/Button";

/** Opacity applied to interactive elements during loading state */
const LOADING_OPACITY = 0.6;

interface FormActionsProps {
    error?: string;
    success?: string;
    loading?: boolean;
    disabled?: boolean;
    mode: "create" | "edit";
    onCancel: () => void;
    onSubmit: () => void;
    cancelLabel?: string;
    submitLabel?: string;
}

export const FormActions = ({
    error,
    success,
    loading = false,
    disabled = false,
    mode,
    onCancel,
    onSubmit,
    cancelLabel = "Cancelar",
    submitLabel,
}: FormActionsProps) => {
    const isDisabled = disabled || loading;
    const semantic = colors.semantic;

    return (
        <div
            style={{
                width: "100%",
                borderTop: `1px solid ${semantic.border.default}`,
                padding: spacing[16],
                display: "flex",
                flexDirection: "column",
                gap: spacing[12],
                alignItems: "flex-end",
            }}
        >
            {error && (
                <div
                    style={{
                        color: semantic.danger.default,
                        fontSize: typography.fontSize.sm,
                    }}
                >
                    {error}
                </div>
            )}

            {!error && success && (
                <div
                    style={{
                        color: semantic.success.default,
                        fontSize: typography.fontSize.sm,
                    }}
                >
                    {success}
                </div>
            )}

            <div style={{ display: "flex", gap: spacing[12], alignItems: "center" }}>
                <Button
                    onClick={onCancel}
                    disabled={isDisabled}
                    style={{
                        borderRadius: radius.xl,
                        paddingTop: spacing[8],
                        paddingBottom: spacing[8],
                        background: "transparent",
                        border: "1px solid transparent",
                        color: semantic.text.default,
                        opacity: isDisabled ? LOADING_OPACITY : 1,
                    }}
                >
                    {cancelLabel}
                </Button>

                <Button
                    variant="white"
                    onClick={onSubmit}
                    disabled={isDisabled}
                    style={{
                        borderRadius: radius.xl,
                        paddingTop: spacing[8],
                        paddingBottom: spacing[8],
                        opacity: isDisabled ? LOADING_OPACITY : 1,
                    }}
                >
                    {loading
                        ? "Guardando..."
                        : (submitLabel ?? (mode === "create" ? "Guardar" : "Guardar Cambios"))}
                </Button>
            </div>
        </div>
    );
};
