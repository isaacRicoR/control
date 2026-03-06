"use client";

import { colors, spacing, typography } from "@tokens";
import { Button } from "@ui/atoms/Button/Button";

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
                    variant="secondary"
                    size="sm"
                    shape="panel"
                    onClick={onCancel}
                    disabled={isDisabled}
                >
                    {cancelLabel}
                </Button>

                <Button
                    variant="actionPrimary"
                    size="sm"
                    shape="panel"
                    onClick={onSubmit}
                    disabled={isDisabled}
                >
                    {loading
                        ? "Guardando..."
                        : (submitLabel ?? (mode === "create" ? "Guardar" : "Guardar Cambios"))}
                </Button>
            </div>
        </div>
    );
};
