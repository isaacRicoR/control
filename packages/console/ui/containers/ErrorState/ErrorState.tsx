import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../atoms/Button/Button";

type ErrorStateProps = {
    title?: string;
    description: string;
    onRetry?: () => void;
    retryLabel?: string;
    onAction?: () => void;
    actionLabel?: string;
    icon?: string;
};

export const ErrorState: React.FC<ErrorStateProps> = ({
    title = "Algo salió mal",
    description,
    onRetry,
    retryLabel = "Reintentar",
    onAction,
    actionLabel,
    icon = "alert-circle",
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: spacing[48],
                textAlign: "center",
                fontFamily: typography.fontFamily.primary,
                width: "100%",
                height: "100%",
                minHeight: 200,
            }}
        >
            <div style={{ marginBottom: spacing[16] }}>
                <Icon name={icon} size={48} color={semantic.danger.default} />
            </div>
            <h3
                style={{
                    margin: 0,
                    marginBottom: spacing[8],
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.medium,
                    color: semantic.danger.default,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    margin: 0,
                    marginBottom: (onRetry || onAction) ? spacing[24] : 0,
                    fontSize: typography.fontSize.md,
                    color: semantic.text.default,
                    maxWidth: 400,
                }}
            >
                {description}
            </p>
            <div style={{ display: "flex", gap: spacing[16] }}>
                {onRetry && (
                    <Button onClick={onRetry} variant="primary">
                        {retryLabel}
                    </Button>
                )}
                {onAction && actionLabel && (
                    <Button onClick={onAction} variant="white">
                        {actionLabel}
                    </Button>
                )}
            </div>
        </div>
    );
};
