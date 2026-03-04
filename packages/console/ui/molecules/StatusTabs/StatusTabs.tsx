"use client";

import React, { useRef, useState, useEffect } from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { StatusTabsProps } from "./StatusTabs.types";

/**
 * StatusTabs
 * Tabs de estado con badges y underline deslizante.
 * Desacoplado de TableToolbar.
 */
export const StatusTabs: React.FC<StatusTabsProps> = ({
    items,
    activeValue,
    onChange,
    className,
    style,
}) => {
    const { theme } = useTheme();
    const { semantic } = colors[theme];
    const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    // Calculate active tab position
    useEffect(() => {
        if (!items.length || !activeValue) return;

        const activeIndex = items.findIndex(item => item.value === activeValue);
        const currentTab = tabsRef.current[activeIndex];

        if (currentTab) {
            setUnderlineStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth
            });
        }
    }, [activeValue, items]);

    // Helper to get badge style based on variant
    const getBadgeStyle = (variant: string | undefined, isActive: boolean): React.CSSProperties => {
        if (!isActive) return {
            color: semantic.text.disabled,
            backgroundColor: "transparent",
        };

        switch (variant) {
            case "success":
                return {
                    backgroundColor: semantic.success[300],
                    color: semantic.text.onSolid ?? semantic.text.active,
                };
            case "warning":
                return {
                    backgroundColor: semantic.warning.emphasis,
                    color: semantic.text.onSolid ?? semantic.text.active,
                };
            case "danger":
                return {
                    backgroundColor: semantic.danger.default,
                    color: semantic.text.onSolid ?? semantic.text.active,
                };
            case "neutral":
                return {
                    backgroundColor: semantic.surface.hover,
                    border: `1px solid ${semantic.border.default}`,
                    color: semantic.text.default,
                };
            default:
                return {
                    color: semantic.text.active,
                    backgroundColor: "transparent",
                    opacity: 0.7,
                };
        }
    };

    const tabBaseStyle: React.CSSProperties = {
        cursor: "pointer",
        paddingRight: spacing[12],
        paddingLeft: spacing[12],
        height: spacing[48],
        display: "flex",
        alignItems: "center",
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.sm,
        transition: "all 0.2s ease",
        position: "relative",
    };

    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                boxShadow: "none",
                filter: "none",
                borderBottom: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                ...style,
            }}
        >
            <div
                className="status-tabs-scroll"
                style={{
                    display: "flex",
                    width: "100%",
                    height: spacing[48],
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    paddingLeft: spacing[24],
                    paddingRight: spacing[24],
                }}
            >
                {mounted && (
                    <style>{`
                        .status-tab:hover .tab-label {
                            color: ${semantic.text.active} !important;
                        }
                        .status-tabs-scroll {
                            overflow-x: auto;
                            white-space: nowrap;
                            scrollbar-width: none;
                        }
                        .status-tabs-scroll::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                )}
                <div style={{ display: "flex", height: "100%", gap: spacing[24], position: "relative" }}>
                    {items.map((item, index) => {
                        const isActive = activeValue === item.value;
                        const badgeStyle = getBadgeStyle(item.variant, isActive);

                        return (
                            <div
                                key={item.value}
                                ref={(el) => { tabsRef.current[index] = el; }}
                                onClick={() => onChange(item.value)}
                                className="status-tab"
                                style={{
                                    ...tabBaseStyle,
                                    color: isActive ? semantic.text.active : semantic.text.disabled,
                                    fontWeight: typography.fontWeight.medium,
                                }}
                            >
                                <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: spacing[8] }}>
                                    <span className="tab-label" style={{ transition: "color 0.2s ease", lineHeight: `${spacing[24]}px` }}>{item.label}</span>
                                    {item.count !== undefined && (
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                minWidth: 32,
                                                height: 24,
                                                padding: `0 ${spacing[8]}`,
                                                borderRadius: radius.md,
                                                fontSize: "0.75em",
                                                fontWeight: typography.fontWeight.medium,
                                                textAlign: "center",
                                                fontVariantNumeric: "tabular-nums",
                                                transition: "all 0.2s ease",
                                                lineHeight: `${spacing[24]}px`,
                                                ...badgeStyle
                                            }}
                                        >
                                            {item.count}
                                        </span>
                                    )}
                                </span>
                            </div>
                        );
                    })}

                    {/* Sliding Underline */}
                    {mounted && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: underlineStyle.left,
                                width: underlineStyle.width,
                                height: 2,
                                borderRadius: radius.sm,
                                backgroundColor: semantic.text.active,
                                transition: "left 180ms ease, width 180ms ease",
                                pointerEvents: "none",
                            }}
                        />
                    )}
                </div>
            </div>

        </div>
    );
};
