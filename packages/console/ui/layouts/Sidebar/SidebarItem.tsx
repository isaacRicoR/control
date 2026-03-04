"use client";

import React, { FC, useState, useEffect } from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";
import { Text as AppText } from "../../atoms/Text/Text";

interface SidebarItemProps {
    label: string;
    icon: string;
    isSelectedLeaf?: boolean;
    disabled?: boolean;
    expandable?: boolean;
    isExpanded?: boolean;
    isHovered?: boolean;
    hasSelectedChild?: boolean;
    onClick?: () => void;
    onHover: (hovered: boolean) => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
    label,
    icon,
    isSelectedLeaf = false,
    disabled,
    expandable,
    isExpanded,
    isHovered,
    hasSelectedChild = false,
    onClick,
    onHover,
}) => {
    const { theme } = useTheme();
    const { semantic } = colors[theme];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    const isGroup = Boolean(expandable);

    // Estados visuales (unificados DARK + LIGHT):
    // - Selected: SOLO leaf con href === pathname
    // - Expanded/Over: grupo abierto (fondo neutral, texto normal; NUNCA verde)
    // - Hover: mouse encima
    const showSelected = isSelectedLeaf;
    const showExpandedOver = isGroup && isExpanded && !showSelected;
    const showHover = isHovered && !disabled;

    const getVisualStyle = (): React.CSSProperties => {
        const base = {
            display: "flex" as const,
            alignItems: "center" as const,
            justifyContent: "space-between" as const,
            height: 40,
            padding: `0 ${spacing[12]}px`,
            borderRadius: radius["md"],
            opacity: disabled ? 0.5 : 1,
            transition: "background-color 0.2s ease, color 0.2s ease",
        };

        if (theme === "light") {
            return {
                ...base,
                backgroundColor: showSelected
                    ? "var(--semantic-nav-active-bg)"
                    : (showExpandedOver || showHover)
                        ? "var(--semantic-nav-hover-bg)"
                        : "transparent",
                color: showSelected
                    ? "var(--semantic-nav-active-fg)"
                    : showHover
                        ? "var(--semantic-sidebar-item-hover)"
                        : "var(--semantic-sidebar-item-default)",
            };
        }
        return {
            ...base,
            backgroundColor: showSelected
                ? semantic.surface.selected
                : (showExpandedOver || showHover)
                    ? semantic.surface.hover
                    : "transparent",
            color: showSelected
                ? semantic.primary.default
                : showHover
                    ? semantic.text.hover
                    : semantic.text.default,
        };
    };

    const iconColor = theme === "light"
        ? (showSelected ? "var(--semantic-nav-active-fg)" : showHover ? "var(--semantic-sidebar-item-hover)" : "var(--semantic-sidebar-item-default)")
        : (showSelected ? semantic.primary.default : showHover ? semantic.text.hover : semantic.text.default);

    const wrapperStyle: React.CSSProperties = {
        paddingBottom: spacing[4],
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
    };

    const safeStyle = mounted ? getVisualStyle() : undefined;

    return (
        <div
            style={wrapperStyle}
            role="button"
            aria-disabled={disabled}
            onClick={() => !disabled && onClick?.()}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <div style={safeStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    <Icon size={16} title={icon} name={icon} color={iconColor} />
                    <AppText
                        style={{
                            fontSize: typography.fontSize.sm,
                            fontWeight: showSelected ? typography.fontWeight.medium : typography.fontWeight.regular,
                            color: "inherit",
                        }}
                    >
                        {label}
                    </AppText>
                </div>

                {expandable && (
                    <div
                        style={{
                            transition: "transform 0.2s ease, opacity 0.2s ease",
                            transform: mounted && isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            display: "flex",
                            /* Chevron secundario: default 0.22, hover 0.65, expandido 0.35 */
                            opacity: showHover ? 0.65 : (showExpandedOver ? 0.35 : 0.22),
                        }}
                    >
                        {/* Chevron: semantic.text.default + opacity para tono secundario */}
                        <Icon size={16} title="Expandir" name="chevron-down" color={semantic.text.default} />
                    </div>
                )}
            </div>
        </div>
    );
};
