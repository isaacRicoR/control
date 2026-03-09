"use client";

import React, { useState } from "react";
import { colors, radius, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export type SecondaryNavSidebarItem = {
    label: string;
    value: string;
    disabled?: boolean;
};

export type SecondaryNavSidebarProps = {
    items: SecondaryNavSidebarItem[];
    value: string;
    onChange: (value: string) => void;
    ariaLabel?: string;
};

export const SecondaryNavSidebar: React.FC<SecondaryNavSidebarProps> = ({
    items,
    value,
    onChange,
    ariaLabel = "Subsecciones",
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
        <>
            <style>{`
                .secondary-nav-sidebar-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <aside
                style={{
                    alignSelf: "start",
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[8],
                    padding: spacing[12],
                    backgroundColor: semantic.surface.card ?? semantic.surface.default,
                    border: `1px solid ${semantic.border.default}`,
                    borderRadius: radius.card,
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
                className="secondary-nav-sidebar-scroll"
                aria-label={ariaLabel}
            >
                {items.map((item) => {
                    const isActive = value === item.value;
                    const isHovered = hoveredValue === item.value;
                    const isDisabled = Boolean(item.disabled);

                    return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => !isDisabled && onChange(item.value)}
                            onMouseEnter={() => setHoveredValue(item.value)}
                            onMouseLeave={() => setHoveredValue(null)}
                            aria-pressed={isActive}
                            disabled={isDisabled}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                padding: `${spacing[12]}px ${spacing[16]}px`,
                                borderRadius: radius.md,
                                border: `1px solid ${isActive ? semantic.border.default : "transparent"}`,
                                backgroundColor:
                                    isActive || isHovered ? semantic.surface.hover : "transparent",
                                color: isActive
                                    ? semantic.text.active
                                    : isHovered
                                        ? semantic.text.hover
                                        : semantic.text.muted,
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.sm,
                                fontWeight: isActive
                                    ? typography.fontWeight.semibold
                                    : typography.fontWeight.medium,
                                textAlign: "left",
                                cursor: isDisabled ? "not-allowed" : "pointer",
                                opacity: isDisabled ? 0.5 : 1,
                                transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                            }}
                        >
                            <span>{item.label}</span>
                            {isActive ? (
                                <span
                                    aria-hidden
                                    style={{
                                        width: spacing[8],
                                        height: spacing[8],
                                        borderRadius: radius.sm,
                                        backgroundColor: semantic.primary.default,
                                        flexShrink: 0,
                                    }}
                                />
                            ) : null}
                        </button>
                    );
                })}
            </aside>
        </>
    );
};
