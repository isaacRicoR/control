"use client";

import React, { useState } from "react";
import { Icon } from "@ui/atoms/Icon/Icon";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type SemanticLike = {
    border?: { subtle?: string; default?: string };
    surface?: { default?: string; hover?: string; hoverElevated?: string };
    text?: { default?: string; muted?: string };
    icon?: { muted?: string; active?: string };
};

type AppearanceConfigRowProps = {
    label: string;
    swatchColor: string;
    valueDisplay: React.ReactNode;
    editControl: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
    expandedContent?: React.ReactNode;
};

/**
 * Fila de configuración reutilizable: swatch, label, valor, control editar, chevron.
 * Usado en Base (Colores), Estados y Componentes.
 */
export const AppearanceConfigRow: React.FC<AppearanceConfigRowProps> = ({
    label,
    swatchColor,
    valueDisplay,
    editControl,
    isExpanded,
    onToggle,
    expandedContent,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as unknown as SemanticLike;
    const [chevronHovered, setChevronHovered] = useState(false);
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;

    return (
        <div style={{ borderBottom: borderColor ? `1px solid ${borderColor}` : undefined }}>
            <div
                role="button"
                tabIndex={0}
                onClick={onToggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle();
                    }
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[12],
                    width: "100%",
                    paddingTop: spacing[12],
                    paddingBottom: spacing[12],
                    paddingLeft: 0,
                    paddingRight: 0,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                }}
                aria-expanded={isExpanded}
            >
                <div
                    style={{
                        width: spacing[32],
                        height: spacing[32],
                        flexShrink: 0,
                        borderRadius: "50%",
                        border: `1px solid ${borderColor}`,
                        backgroundColor: swatchColor || semantic?.surface?.default,
                    }}
                    aria-hidden
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <span
                        style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: semantic?.text?.default,
                        }}
                    >
                        {label}
                    </span>
                    <span
                        style={{
                            display: "block",
                            fontFamily: (typography.fontFamily as { mono?: string }).mono ?? typography.fontFamily.primary,
                            fontSize: typography.fontSize.xs,
                            color: semantic?.text?.muted,
                            marginTop: 2,
                        }}
                    >
                        {valueDisplay}
                    </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: spacing[4] }}>
                    <div onClick={(e) => e.stopPropagation()}>{editControl}</div>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle();
                        }}
                        onMouseEnter={() => setChevronHovered(true)}
                        onMouseLeave={() => setChevronHovered(false)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Contraer" : "Expandir"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: spacing[8],
                            paddingBottom: spacing[8],
                            paddingLeft: spacing[8],
                            paddingRight: spacing[8],
                            minWidth: spacing[32],
                            minHeight: spacing[32],
                            background: chevronHovered
                                ? semantic?.surface?.hoverElevated ?? semantic?.surface?.hover ?? "transparent"
                                : "transparent",
                            border: "none",
                            borderRadius: radius.md,
                            cursor: "pointer",
                            color: chevronHovered ? iconHover : iconDefault,
                            transition: "background-color 0.2s ease, color 0.2s ease",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                transform: isExpanded ? "rotate(180deg)" : "none",
                                transition: "transform 0.2s ease",
                            }}
                        >
                            <Icon name="chevron-down" size={16} color="currentColor" />
                        </span>
                    </button>
                </div>
            </div>
            {expandedContent != null && (
                <div
                    style={{
                        width: "100%",
                        overflow: "hidden",
                        display: "grid",
                        gridTemplateRows: isExpanded ? "1fr" : "0fr",
                        opacity: isExpanded ? 1 : 0,
                        transition: "grid-template-rows 0.4s ease, opacity 0.4s ease",
                    }}
                >
                    <div style={{ overflow: "hidden" }}>
                        <div
                            style={{
                                width: "100%",
                                paddingTop: 0,
                                paddingBottom: spacing[16],
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            {expandedContent}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
