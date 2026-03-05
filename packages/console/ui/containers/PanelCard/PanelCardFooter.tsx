"use client";

import React from "react";
import { colors, spacing } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { PanelCardFooterProps } from "./PanelCard.types";

/**
 * PanelCardFooter — Footer del Panel Card Pattern.
 * DangerAction separado a la izquierda; acciones principales alineadas a la derecha.
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

    if (children) {
        return (
            <footer
                style={{
                    flexShrink: 0,
                    borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                    padding: spacing[24],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: spacing[12],
                }}
            >
                {children}
            </footer>
        );
    }

    const hasActions = dangerAction || secondaryAction || primaryAction || status;
    if (!hasActions) return null;

    return (
        <footer
            style={{
                flexShrink: 0,
                borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                padding: spacing[24],
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: spacing[16],
                flexWrap: "wrap",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[12],
                    order: 1,
                }}
            >
                {dangerAction}
                {status}
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[12],
                    order: 2,
                }}
            >
                {secondaryAction}
                {primaryAction}
            </div>
        </footer>
    );
};
