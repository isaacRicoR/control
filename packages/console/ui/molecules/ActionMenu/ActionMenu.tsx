"use client";

import React, { useState, useRef, useEffect } from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";
import { FloatingSurface } from "../../atoms/FloatingSurface/FloatingSurface";
import { ActionMenuProps, ActionMenuItem } from "./ActionMenu.types";

export default function ActionMenu({
    trigger,
    title,
    items,
    sections,
    align = "right",
    onOpenChange,
}: ActionMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    // Notify parent of state change
    useEffect(() => {
        onOpenChange?.(isOpen);
    }, [isOpen, onOpenChange]);

    // Click outside handler & Scroll / Resize close
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is on trigger or menu
            const isTrigger = containerRef.current?.contains(event.target as Node);
            const isMenu = menuRef.current?.contains(event.target as Node);

            if (!isTrigger && !isMenu) {
                setIsOpen(false);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        const handleScrollOrResize = () => {
            // Close on scroll/resize for deterministic behavior
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        window.addEventListener("scroll", handleScrollOrResize, { capture: true });
        window.addEventListener("resize", handleScrollOrResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
            window.removeEventListener("scroll", handleScrollOrResize, { capture: true });
            window.removeEventListener("resize", handleScrollOrResize);
        };
    }, [isOpen]);

    // Positioning Logic
    React.useLayoutEffect(() => {
        if (isOpen && containerRef.current && menuRef.current) {
            const triggerRect = containerRef.current.getBoundingClientRect();
            const menuRect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const MARGIN = 16;

            // 1. Horizontal: Try Right Align first
            let left = triggerRect.right - menuRect.width;

            // Allow Left Align preference
            if (align === "left") {
                left = triggerRect.left;
            }

            // Clamp Horizontal
            if (left < MARGIN) left = MARGIN;
            if (left + menuRect.width > viewportWidth - MARGIN) {
                left = viewportWidth - MARGIN - menuRect.width;
            }

            // 2. Vertical: Try Bottom first
            let top = triggerRect.bottom + 8;

            // Check Flip
            if (top + menuRect.height > viewportHeight - MARGIN) {
                // Check if it fits above
                const topAbove = triggerRect.top - 8 - menuRect.height;
                if (topAbove > MARGIN) {
                    top = topAbove;
                } else {
                    // If it fits nowhere, flip to above is usually safer than hidden below
                    top = topAbove;
                }
            }

            setPosition({ top, left });
        } else {
            setPosition(null);
        }
    }, [isOpen, align]);

    const handleItemClick = (item: ActionMenuItem) => {
        if (item.disabled) return;
        item.onClick?.();
        setIsOpen(false);
    };

    return (
        <div
            ref={containerRef}
            style={{ position: "relative", display: "inline-block" }}
        >
            {/* Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {trigger}
            </div>

            {/* Menu */}
            {isOpen && (
                <div
                    ref={menuRef}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        // If position is calculated, use it. If not (first pass), hide it but render for measurement
                        transform: position ? `translate3d(${position.left}px, ${position.top}px, 0)` : "translate3d(-9999px, -9999px, 0)",
                        opacity: position ? 1 : 0,
                        zIndex: 9999,
                        width: 240 // Ensure width constraint for measurement
                    }}
                >
                    <FloatingSurface
                        style={{
                            width: "100%",
                            padding: 0,
                            overflow: "hidden"
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: `${spacing[16]}px ${spacing[8] + spacing[12]}px`, // 16px vertical, 20px horizontal (aligns with items)
                            borderBottom: `1px solid ${semantic.border.default}`,
                        }}>
                            <span style={{
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.medium,
                                color: semantic.text.default
                            }}>
                                {title}
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: spacing[4],
                                    color: semantic.text.disabled,
                                    borderRadius: radius.md,
                                    transition: "all 0.2s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = semantic.surface.hover;
                                    e.currentTarget.style.color = semantic.text.default;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                    e.currentTarget.style.color = semantic.text.disabled;
                                }}
                            >
                                <Icon name="x" size={16} />
                            </button>
                        </div>

                        {/* Items */}
                        <div style={{ padding: spacing[8] }}>
                            {sections ? (
                                sections.map((section, sectionIndex) => (
                                    <React.Fragment key={sectionIndex}>
                                        {/* Divider between sections */}
                                        {sectionIndex > 0 && (
                                            <div
                                                style={{
                                                    height: 1,
                                                    backgroundColor: semantic.border.default,
                                                    margin: `${spacing[8]} 0`
                                                }}
                                            />
                                        )}
                                        {/* Section Items */}
                                        {section.map((item, itemIndex) => {
                                            const isDanger = item.variant === "danger";
                                            const isDisabled = item.disabled;

                                            // Conditional spacing for visual separation (margin for hover gap, padding for internal)
                                            const isFirstInSection = itemIndex === 0;
                                            const isLastInSection = itemIndex === section.length - 1;
                                            const hasDividerBefore = sectionIndex > 0;
                                            const hasDividerAfter = sectionIndex < sections.length - 1;

                                            const marginTop = (isFirstInSection && hasDividerBefore) ? spacing[4] : (itemIndex === 0 ? 0 : 2);
                                            const marginBottom = (isLastInSection && hasDividerAfter) ? spacing[4] : 0;

                                            return (
                                                <button
                                                    key={`${sectionIndex}-${itemIndex}`}
                                                    onClick={() => handleItemClick(item)}
                                                    disabled={isDisabled}
                                                    style={{
                                                        width: "100%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: spacing[12],
                                                        paddingTop: spacing[8],
                                                        paddingBottom: spacing[8],
                                                        paddingLeft: spacing[12],
                                                        paddingRight: spacing[12],
                                                        background: "none",
                                                        border: "none",
                                                        cursor: isDisabled ? "not-allowed" : "pointer",
                                                        borderRadius: radius.sm,
                                                        color: isDisabled ? semantic.text.disabled :
                                                            isDanger ? semantic.danger.default :
                                                                semantic.text.default,
                                                        textAlign: "left",
                                                        fontFamily: typography.fontFamily.primary,
                                                        fontSize: typography.fontSize.sm,
                                                        lineHeight: typography.lineHeight.normal,
                                                        minHeight: spacing[32],
                                                        marginTop,
                                                        marginBottom,
                                                        transition: "background 0.2s ease"
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (!isDisabled) {
                                                            e.currentTarget.style.backgroundColor = isDanger ? (semantic.danger as { surfaceHover?: string }).surfaceHover ?? semantic.surface.hover : semantic.surface.hover;
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = "transparent";
                                                    }}
                                                >
                                                    {item.icon && <Icon name={item.icon} size={16} />}
                                                    <span>{item.label}</span>
                                                </button>
                                            );
                                        })}
                                    </React.Fragment>
                                ))
                            ) : (
                                items?.map((item, index) => {
                                    if (item.type === "divider") {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    height: 1,
                                                    backgroundColor: semantic.border.default,
                                                    margin: `${spacing[8]} 0`
                                                }}
                                            />
                                        );
                                    }

                                    const isDanger = item.variant === "danger";
                                    const isDisabled = item.disabled;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleItemClick(item)}
                                            disabled={isDisabled}
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: spacing[12],
                                                paddingTop: spacing[8],
                                                paddingBottom: spacing[8],
                                                paddingLeft: spacing[12],
                                                paddingRight: spacing[12],
                                                background: "none",
                                                border: "none",
                                                cursor: isDisabled ? "not-allowed" : "pointer",
                                                borderRadius: radius.sm,
                                                color: isDisabled ? semantic.text.disabled :
                                                    isDanger ? semantic.danger.default :
                                                        semantic.text.default,
                                                textAlign: "left",
                                                fontFamily: typography.fontFamily.primary,
                                                fontSize: typography.fontSize.sm,
                                                lineHeight: typography.lineHeight.normal,
                                                minHeight: spacing[32],
                                                marginTop: index > 0 && items[index - 1].type === "divider" ? 0 : 2,
                                                transition: "background 0.2s ease"
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isDisabled) {
                                                    e.currentTarget.style.backgroundColor = isDanger ? (semantic.danger as { surfaceHover?: string }).surfaceHover ?? semantic.surface.hover : semantic.surface.hover;
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }}
                                        >
                                            {item.icon && <Icon name={item.icon} size={16} />}
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </FloatingSurface>
                </div>
            )}
        </div>
    );
}
