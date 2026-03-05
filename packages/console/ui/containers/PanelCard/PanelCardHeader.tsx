"use client";

import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { PanelCardHeaderProps } from "./PanelCard.types";

/**
 * PanelCardHeader — Header del Panel Card Pattern.
 * Alineación horizontal: Title a la izquierda, HeaderActions a la derecha.
 */
export const PanelCardHeader: React.FC<PanelCardHeaderProps> = ({
    title,
    description,
    tabs,
    actions,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const hasContent = title || description || tabs || actions;

    if (!hasContent) return null;

    return (
        <header
            style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: spacing[12],
                padding: spacing[24],
                paddingBottom: tabs ? spacing[0] : spacing[24],
                borderBottom: tabs ? `1px solid ${semantic.border.subtle || semantic.border.default}` : undefined,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: spacing[16],
                }}
            >
                <div style={{ flex: 1, minWidth: 0 }}>
                    {title && (
                        <h2
                            style={{
                                margin: 0,
                                fontSize: typography.fontSize.lg,
                                fontWeight: typography.fontWeight.semibold,
                                color: semantic.text.active,
                                fontFamily: typography.fontFamily.primary,
                            }}
                        >
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p
                            style={{
                                margin: 0,
                                marginTop: title ? spacing[4] : 0,
                                fontSize: typography.fontSize.sm,
                                color: semantic.text.muted,
                                fontFamily: typography.fontFamily.primary,
                            }}
                        >
                            {description}
                        </p>
                    )}
                </div>
                {actions && <div style={{ flexShrink: 0 }}>{actions}</div>}
            </div>
            {tabs && <div style={{ marginTop: spacing[12] }}>{tabs}</div>}
        </header>
    );
};
