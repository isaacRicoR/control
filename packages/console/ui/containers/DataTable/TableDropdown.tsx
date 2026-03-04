"use client";

import React, { useState, useRef, useEffect } from "react";
import { colors, spacing, typography, radius, zIndex } from "@tokens";
import { Icon } from "../../atoms/Icon/Icon";
import { FloatingSurface } from "../../atoms/FloatingSurface/FloatingSurface";
import { useTheme } from "@ui/context/ThemeProvider";

type TableDropdownProps = {
    value: string;
    options: string[];
    onChange: (value: string) => void;
    direction?: "up" | "down";
    align?: "left" | "center";
    triggerLabel?: React.ReactNode;
    width?: number | string;
};

export const TableDropdown: React.FC<TableDropdownProps> = ({
    value,
    options,
    onChange,
    direction = "down",
    align = "center",
    triggerLabel,
    width = "auto",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    // Calculate widest option to stabilize width
    const longestOption = options.reduce((a, b) => a.length > b.length ? a : b, "");

    // Ensure we also account for the current value if it's not in options for some reason
    // and convert triggerLabel to string if possible, or ignore if complex node
    const displayValue = typeof triggerLabel === "string" ? triggerLabel : value;
    const ghostText = longestOption.length > displayValue.length ? longestOption : displayValue;

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            ref={containerRef}
            style={{ position: "relative", fontFamily: typography.fontFamily.primary, width }}
        >
            {/* Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: spacing[8],
                    padding: `${spacing[8]}px ${spacing[12]}px`,
                    backgroundColor: "transparent", // No existe token semántico para "sin fondo"; transparent es el valor CSS canónico.
                    border: `1px solid ${semantic.border.default}`,
                    borderRadius: radius.md,
                    cursor: "pointer",
                    color: semantic.text.active, // #FFF equivalent
                    minWidth: 60,
                    userSelect: "none",
                }}
            >
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    alignItems: "center",
                }}>
                    {/* Ghost element to reserve space based on longest content */}
                    <span style={{
                        gridArea: "1 / 1 / 2 / 2",
                        visibility: "hidden",
                        fontWeight: typography.fontWeight.medium,
                        fontSize: typography.fontSize.sm,
                        whiteSpace: "nowrap",
                        height: 0, // Prevent height impact
                    }}>
                        {ghostText}
                    </span>

                    {/* Visible element */}
                    <span style={{
                        gridArea: "1 / 1 / 2 / 2",
                        fontWeight: typography.fontWeight.medium,
                        fontSize: typography.fontSize.sm,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: semantic.text.active
                    }}>
                        {triggerLabel || value}
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    transform: isOpen
                        ? (direction === "up" ? "rotate(0deg)" : "rotate(180deg)")
                        : (direction === "up" ? "rotate(180deg)" : "rotate(0deg)"),
                    transition: "transform 0.2s ease"
                }}>
                    <Icon name="chevron-down" size={14} color={semantic.text.active} />
                </div>
            </div>

            {/* Popover */}
            {isOpen && (
                <>
                    <style>{`
                        .dropdown-option-item:hover {
                            background-color: ${semantic.surface.hover} !important;
                            color: ${semantic.text.hover} !important;
                        }
                    `}</style>
                    <FloatingSurface
                        style={{
                            position: "absolute",
                            [direction === "up" ? "bottom" : "top"]: "calc(100% + 8px)",
                            left: 0,
                            width: width === "auto" ? "100%" : width, // Match trigger width if auto
                            minWidth: "100%",
                            // backgroundColor, border, borderRadius, boxShadow handled by FloatingSurface
                            padding: spacing[4],
                            display: "flex",
                            flexDirection: "column",
                            gap: 0,
                            zIndex: zIndex.dropdown,
                            animation: "fadeIn 0.2s ease",
                        }}
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className="dropdown-option-item"
                                style={{
                                    padding: spacing[8],
                                    borderRadius: radius.sm,
                                    backgroundColor: option === value ? semantic.surface.selected : "transparent",
                                    color: option === value ? semantic.primary.default : semantic.text.default,
                                    textAlign: align,
                                    cursor: "pointer",
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: option === value ? typography.fontWeight.medium : typography.fontWeight.regular,
                                    transition: "background-color 0.2s ease, color 0.2s ease",
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </FloatingSurface>
                </>
            )}
        </div>
    );
};
