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
    headerStart,
    tabs,
    actions,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const hasContent = title || description || headerStart || tabs || actions;

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
                borderBottom: tabs ? undefined : `1px solid ${semantic.border.subtle || semantic.border.default}`,
            }}
        >
            {(title || description || headerStart || actions) && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: spacing[16],
                    }}
                >
                    <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center" }}>
                        {headerStart}
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
            )}
            {tabs && (
                <div
                    style={{
                        marginTop: (title || description || headerStart || actions) ? spacing[12] : 0,
                        marginLeft: -spacing[24],
                        marginRight: -spacing[24],
                    }}
                >
                    <div style={{ paddingLeft: spacing[24], paddingRight: spacing[24] }}>
                        {tabs}
                    </div>
                    <div
                        style={{
                            height: 1,
                            backgroundColor: semantic.border.subtle || semantic.border.default,
                            marginBottom: spacing[16],
                        }}
                    />
                </div>
            )}
        </header>
    );
};
