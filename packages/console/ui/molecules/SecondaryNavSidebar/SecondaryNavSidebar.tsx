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
    ariaLabel?: string;
};

const ITEM_HEIGHT = 40;

const groupTitleStyle = (semantic: (typeof colors.dark)["semantic"], isFirst: boolean): React.CSSProperties => ({
    textTransform: "uppercase",
    color: semantic.text.muted ?? semantic.text.disabled,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    marginTop: isFirst ? spacing[24] : spacing[16],
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
                    padding: `${spacing[20]} ${spacing[16]}`,
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: 0,
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    minWidth: 0,
                }}
                className="secondary-nav-sidebar-scroll"
                aria-label={ariaLabel}
            >
                {resolvedGroups.map((group, groupIndex) => (
                    <div key={group.title || groupIndex} style={{ marginBottom: groupIndex < resolvedGroups.length - 1 ? spacing[16] : 0 }}>
                        {group.title.trim() !== "" && (
                            <div style={groupTitleStyle(semantic, groupIndex === 0)}>{group.title}</div>
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
                                    <div
                                        key={item.value}
                                        style={{
                                            paddingBottom: spacing[4],
                                            paddingLeft: spacing[4],
                                            paddingRight: spacing[4],
                                            cursor: isDisabled ? "not-allowed" : "pointer",
                                            width: "100%",
                                            boxSizing: "border-box",
                                        }}
                                        role="button"
                                        tabIndex={isDisabled ? -1 : 0}
                                        aria-pressed={isActive}
                                        aria-disabled={isDisabled}
                                        onClick={() => !isDisabled && onChange(item.value)}
                                        onMouseEnter={() => setHoveredValue(item.value)}
                                        onMouseLeave={() => setHoveredValue(null)}
                                        onKeyDown={(e) => {
                                            if (isDisabled) return;
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                onChange(item.value);
                                            }
                                        }}
                                    >
                                        <div
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
                                            <div style={{ display: "flex", alignItems: "center", gap: spacing[12], minWidth: 0 }}>
                                                {item.icon != null && (
                                                    <span style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <Icon size={16} name={item.icon} title={item.label} color={iconColor} />
                                                    </span>
                                                )}
                                                <span
                                                    style={{
                                                        fontFamily: typography.fontFamily.primary,
                                                        fontSize: typography.fontSize.sm,
                                                        fontWeight: showSelected ? typography.fontWeight.medium : typography.fontWeight.regular,
                                                        color: "inherit",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {item.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </aside>
        </>
    );
};
