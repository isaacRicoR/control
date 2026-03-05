"use client";

import React from "react";
import { colors, spacing } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { PanelCardFooterProps } from "./PanelCard.types";

/**
 * PanelCardFooter — Footer del Panel Card Pattern.
 * Compacto, sticky. DangerAction separado a la izquierda; acciones principales alineadas a la derecha.
 * Padding: spacing[16] (estándar formularios).
 */
export const PanelCardFooter: React.FC<PanelCardFooterProps> = ({
    dangerAction,
    secondaryAction,
    primaryAction,
    status,
    children,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const baseFooterStyle: React.CSSProperties = {
        flexShrink: 0,
        borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
        padding: spacing[16],
        display: "flex",
        alignItems: "center",
        gap: spacing[12],
    };

    if (children) {
        return (
            <footer
                style={{
                    ...baseFooterStyle,
                    justifyContent: "flex-end",
                }}
            >
                {children}
            </footer>
        );
    }

    const hasLeft = dangerAction || status;
    const hasRight = secondaryAction || primaryAction;
    const hasActions = hasLeft || hasRight;
    if (!hasActions) return null;

    return (
        <footer
            style={{
                ...baseFooterStyle,
                justifyContent: hasLeft && hasRight ? "space-between" : "flex-end",
                flexWrap: "wrap",
            }}
        >
            {hasLeft && (
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    {dangerAction}
                    {status}
                </div>
            )}
            {hasRight && (
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    {secondaryAction}
                    {primaryAction}
                </div>
            )}
        </footer>
    );
};
