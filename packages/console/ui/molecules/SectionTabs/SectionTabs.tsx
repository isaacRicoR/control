"use client";

import React, { useRef, useState, useEffect } from "react";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { SectionTabsProps } from "./SectionTabs.types";

/**
 * SectionTabs
 * Tabs de navegación de secciones.
 * Underline deslizante, altura estable, tokens del sistema.
 * Usado en Apariencia (Tema | Colores base) y otras vistas de configuración.
 */
export const SectionTabs: React.FC<SectionTabsProps> = ({
    items,
    activeValue,
    onChange,
    ariaLabel = "Subsecciones",
    className,
    style,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            const activeIndex = items.findIndex((item) => item.value === activeValue);
            const currentTab = tabsRef.current[activeIndex];
            if (currentTab) {
                setUnderlineStyle({
                    left: currentTab.offsetLeft,
                    width: currentTab.offsetWidth,
                });
            }
        });
        return () => cancelAnimationFrame(id);
    }, [activeValue, items]);

    return (
        <div
            className={`section-tabs-scroll ${className ?? ""}`.trim()}
            style={{
                display: "flex",
                width: "100%",
                height: spacing[48],
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                paddingLeft: spacing[24],
                paddingRight: spacing[24],
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                ...style,
            }}
        >
            <style>{`
                .section-tabs-scroll::-webkit-scrollbar { display: none; }
            `}</style>
            <div
                role="tablist"
                aria-label={ariaLabel}
                style={{
                    display: "flex",
                    height: "100%",
                    gap: spacing[24],
                    position: "relative",
                    flex: "0 0 auto",
                    minWidth: "min-content",
                }}
            >
                {items.map((item, index) => {
                    const isActive = activeValue === item.value;
                    return (
                        <button
                            key={item.value}
                            ref={(el) => {
                                tabsRef.current[index] = el;
                            }}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => onChange(item.value)}
                            style={{
                                cursor: "pointer",
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: spacing[12],
                                paddingRight: spacing[12],
                                height: spacing[48],
                                display: "flex",
                                alignItems: "center",
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.medium,
                                color: isActive ? semantic.text.active : semantic.text.muted,
                                backgroundColor: "transparent",
                                border: "none",
                                transition: "all 0.2s ease",
                                position: "relative",
                            }}
                        >
                            <span style={{ display: "inline-flex", alignItems: "center", lineHeight: `${spacing[24]}px` }}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: underlineStyle.left,
                        width: underlineStyle.width,
                        height: 2,
                        borderRadius: radius.sm,
                        backgroundColor: semantic.text.active,
                        transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                    aria-hidden
                />
            </div>
        </div>
    );
};
