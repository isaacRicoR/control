import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";

type AccessDeniedStateProps = {
    title?: string;
    description?: string;
    action?: React.ReactNode;
};

export const AccessDeniedState: React.FC<AccessDeniedStateProps> = ({
    title = "Sin acceso",
    description = "No tienes permisos para ver este contenido. Contacta a tu administrador si crees que esto es un error.",
    action,
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
                <Icon name="lock" size={48} color={semantic.warning.default} />
            </div>
            <h3
                style={{
                    margin: 0,
                    marginBottom: spacing[8],
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.medium,
                    color: semantic.warning.default,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    margin: 0,
                    marginBottom: action ? spacing[24] : 0,
                    fontSize: typography.fontSize.md,
                    color: semantic.text.disabled,
                    maxWidth: 400,
                }}
            >
                {description}
            </p>
            {action && <div>{action}</div>}
        </div>
    );
};
