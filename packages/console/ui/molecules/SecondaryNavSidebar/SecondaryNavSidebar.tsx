"use client";

import React, { useState } from "react";
import { colors, radius, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "@ui/atoms/Icon/Icon";

export type SecondaryNavSidebarItem = {
    label: string;
    value: string;
    icon?: string;
    disabled?: boolean;
};

export type SecondaryNavSidebarGroup = {
    title: string;
    items: SecondaryNavSidebarItem[];
};

export type SecondaryNavSidebarProps = {
    /** Lista plana (si no se usa groups) */
    items?: SecondaryNavSidebarItem[];
    /** Grupos con títulos (tiene prioridad sobre items) */
    groups?: SecondaryNavSidebarGroup[];
    value: string;
    onChange: (value: string) => void;
    /** Sidebar colapsada (solo iconos) */
    collapsed?: boolean;
    /** Callback al cambiar estado colapsado */
    onCollapsedChange?: (collapsed: boolean) => void;
    ariaLabel?: string;
};

const ITEM_HEIGHT = 34;
const COLLAPSE_BUTTON_SIZE = 36;
const CHEVRON_ICON_SIZE = 18;
const ITEM_PADDING_HORIZONTAL = spacing[4];

const groupTitleStyle = (semantic: (typeof colors.dark)["semantic"] & { sidebar?: { groupLabel?: string } }, isFirst: boolean): React.CSSProperties => ({
    textTransform: "uppercase",
    color: semantic.sidebar?.groupLabel ?? semantic.text.muted ?? semantic.text.disabled,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    marginTop: isFirst ? spacing[4] : spacing[12],
    marginBottom: spacing[12],
    paddingLeft: spacing[12],
    letterSpacing: "0.05em",
    opacity: 0.8,
});

/**
 * Navegación secundaria tipo settings: grupos, iconos, estados alineados
 * con la sidebar principal del sistema.
 */
export const SecondaryNavSidebar: React.FC<SecondaryNavSidebarProps> = ({
    items = [],
    groups,
    value,
    onChange,
    collapsed = false,
    onCollapsedChange,
    ariaLabel = "Subsecciones",
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    const resolvedGroups: SecondaryNavSidebarGroup[] = groups
        ?? (items.length > 0 ? [{ title: "", items }] : []);

    return (
        <>
            <style>{`
                .secondary-nav-sidebar-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <aside
                style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    padding: collapsed ? `${spacing[8]} ${spacing[8]} ${spacing[12]}` : `${spacing[8]} ${spacing[16]} ${spacing[12]}`,
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: 0,
                    overflowY: "auto",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    minWidth: 0,
                    transition: "padding 0.25s ease",
                }}
                className="secondary-nav-sidebar-scroll"
                aria-label={ariaLabel}
            >
                {onCollapsedChange != null && (
                    <div
                        style={{
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: collapsed ? "center" : "flex-end",
                            paddingTop: spacing[4],
                            paddingRight: spacing[4],
                            paddingLeft: spacing[4],
                            paddingBottom: 0,
                            marginBottom: 0,
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => onCollapsedChange(!collapsed)}
                            aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
                            aria-expanded={!collapsed}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: COLLAPSE_BUTTON_SIZE,
                                height: COLLAPSE_BUTTON_SIZE,
                                padding: 0,
                                border: "none",
                                borderRadius: radius.md,
                                backgroundColor: "transparent",
                                color: semantic.text.muted ?? semantic.text.default,
                                cursor: "pointer",
                                transition: "background-color 0.2s ease, color 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = semantic.surface.hover;
                                e.currentTarget.style.color = semantic.text.hover;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = semantic.text.muted ?? semantic.text.default;
                            }}
                        >
                            <Icon
                                size={CHEVRON_ICON_SIZE}
                                name={collapsed ? "chevron-right" : "chevron-left"}
                                title={collapsed ? "Expandir" : "Colapsar"}
                            />
                        </button>
                    </div>
                )}
                {resolvedGroups.map((group, groupIndex) => (
                    <div key={group.title || groupIndex} style={{ marginBottom: groupIndex < resolvedGroups.length - 1 ? spacing[8] : 0 }}>
                        {group.title.trim() !== "" && (
                            <div
                                style={{
                                    ...groupTitleStyle(semantic, groupIndex === 0),
                                    ...(collapsed ? { position: "relative" as const } : {}),
                                }}
                                aria-hidden={collapsed}
                            >
                                <span style={collapsed ? { opacity: 0, display: "block" } : undefined}>
                                    {group.title}
                                </span>
                                {collapsed && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "calc(100% - 7px)",
                                            left: 0,
                                            right: 0,
                                            height: 1,
                                            backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                            pointerEvents: "none",
                                        }}
                                        aria-hidden
                                    />
                                )}
                            </div>
                        )}
                        <div style={{ display: "flex", flexDirection: "column", gap: 0, cursor: "default" }}>
                            {group.items.map((item) => {
                                const isActive = value === item.value;
                                const isHovered = hoveredValue === item.value && !item.disabled;
                                const isDisabled = Boolean(item.disabled);

                                const showSelected = isActive;
                                const showHover = isHovered && !showSelected;

                                const bg = showSelected ? semantic.surface.selected : showHover ? semantic.surface.hover : "transparent";
                                const fg = showSelected ? semantic.primary.default : showHover ? semantic.text.hover : semantic.text.default;
                                const iconColor = fg;

                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        disabled={isDisabled}
                                        aria-pressed={isActive}
                                        onClick={() => !isDisabled && onChange(item.value)}
                                        onMouseEnter={() => setHoveredValue(item.value)}
                                        onMouseLeave={() => setHoveredValue(null)}
                                        style={{
                                            padding: 0,
                                            paddingBottom: spacing[4],
                                            paddingLeft: ITEM_PADDING_HORIZONTAL,
                                            paddingRight: ITEM_PADDING_HORIZONTAL,
                                            margin: 0,
                                            border: "none",
                                            background: "none",
                                            cursor: isDisabled ? "not-allowed" : "pointer",
                                            width: "100%",
                                            boxSizing: "border-box",
                                            fontFamily: "inherit",
                                            textAlign: "left",
                                        }}
                                    >
                                        <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            height: ITEM_HEIGHT,
                                            padding: `0 ${spacing[12]}px`,
                                            borderRadius: radius.md,
                                            backgroundColor: bg,
                                            color: fg,
                                            opacity: isDisabled ? 0.5 : 1,
                                            transition: "background-color 0.2s ease, color 0.2s ease",
                                        }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: collapsed ? 0 : spacing[12], minWidth: 0, justifyContent: collapsed ? "center" : "flex-start" }}>
                                                {item.icon != null && (
                                                    <span style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <Icon size={16} name={item.icon} title={item.label} color={iconColor} />
                                                    </span>
                                                )}
                                                {!collapsed && (
                                                    <span
                                                        style={{
                                                            fontFamily: typography.fontFamily.primary,
                                                            fontSize: typography.fontSize.sm,
                                                            fontWeight: typography.fontWeight.regular,
                                                            color: "inherit",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        {item.label}
                                                    </span>
                                                )}
                                            </div>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </aside>
        </>
    );
};
