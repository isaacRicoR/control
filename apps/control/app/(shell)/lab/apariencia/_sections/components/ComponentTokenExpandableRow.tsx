"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Icon } from "@ui/atoms/Icon/Icon";
import { FloatingSurface } from "@ui/atoms/FloatingSurface/FloatingSurface";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import {
    COMPONENT_TOKEN_OPTIONS,
    resolveTokenPath,
    type TokenOption,
} from "./componentTokenOptions";

type SemanticLike = {
    border?: { subtle?: string; default?: string };
    surface?: { default?: string; hover?: string; hoverElevated?: string };
    text?: { default?: string; muted?: string; active?: string };
    icon?: { muted?: string; active?: string };
};

type ComponentTokenExpandableRowProps = {
    label: string;
    value: string;
    onChange: (path: string) => void;
    usage: string[];
    isExpanded: boolean;
    onToggle: () => void;
    filterOptions?: (opt: TokenOption) => boolean;
};

export const ComponentTokenExpandableRow: React.FC<ComponentTokenExpandableRowProps> = ({
    label,
    value,
    onChange,
    usage,
    isExpanded,
    onToggle,
    filterOptions,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as unknown as SemanticLike;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number } | null>(null);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const options = filterOptions ? COMPONENT_TOKEN_OPTIONS.filter(filterOptions) : COMPONENT_TOKEN_OPTIONS;
    const resolvedColor = resolveTokenPath(colors[theme].semantic as Record<string, unknown>, value);
    const displayValue = value || "—";
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;
    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;

    const calculatePosition = () => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect || typeof window === "undefined") return null;
        const popoverWidth = 200;
        const popoverHeight = 280;
        const margin = 8;
        let left = rect.right + margin;
        let top = rect.top;
        if (left + popoverWidth > window.innerWidth - margin) left = rect.left - popoverWidth - margin;
        if (top + popoverHeight > window.innerHeight - margin) top = window.innerHeight - popoverHeight - margin;
        if (top < margin) top = margin;
        left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
        return { top, left };
    };

    useLayoutEffect(() => {
        if (!isDropdownOpen) {
            setDropdownRect(null);
            return;
        }
        setDropdownRect(calculatePosition());
    }, [isDropdownOpen]);

    useEffect(() => {
        if (!isDropdownOpen) return;
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsDropdownOpen(false);
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (containerRef.current?.contains(target)) return;
            if (dropdownRef.current?.contains(target)) return;
            setIsDropdownOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const [chevronHovered, setChevronHovered] = useState(false);

    const dropdownContent =
        isDropdownOpen && dropdownRect
            ? createPortal(
                  <div
                      ref={dropdownRef}
                      style={{
                          position: "fixed",
                          top: dropdownRect.top,
                          left: dropdownRect.left,
                          zIndex: 1000,
                          minWidth: 200,
                          maxHeight: 280,
                          overflowY: "auto",
                      }}
                  >
                      <FloatingSurface style={{ padding: spacing[8] }}>
                          {options.map((opt) => (
                              <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                      onChange(opt.value);
                                      setIsDropdownOpen(false);
                                  }}
                                  style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: spacing[8],
                                      width: "100%",
                                      padding: `${spacing[8]} ${spacing[12]}`,
                                      background: "none",
                                      border: "none",
                                      borderRadius: radius.sm,
                                      cursor: "pointer",
                                      fontFamily: typography.fontFamily.primary,
                                      fontSize: typography.fontSize.sm,
                                      color: value === opt.value ? semantic?.text?.active : semantic?.text?.default,
                                      textAlign: "left",
                                  }}
                                  onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = semantic?.surface?.hover;
                                  }}
                                  onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = "transparent";
                                  }}
                              >
                                  <div
                                      style={{
                                          width: spacing[20],
                                          height: spacing[20],
                                          flexShrink: 0,
                                          borderRadius: "50%",
                                          border: `1px solid ${borderColor}`,
                                          backgroundColor:
                                              resolveTokenPath(
                                                  colors[theme].semantic as Record<string, unknown>,
                                                  opt.value
                                              ) || semantic?.surface?.default,
                                      }}
                                  />
                                  {opt.label}
                              </button>
                          ))}
                      </FloatingSurface>
                  </div>,
                  document.body
              )
            : null;

    return (
        <div ref={containerRef} style={{ borderBottom: borderColor ? `1px solid ${borderColor}` : undefined }}>
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
                    padding: `${spacing[12]}px 0`,
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
                        backgroundColor: resolvedColor || semantic?.surface?.default,
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
                        {displayValue}
                    </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: spacing[4] }}>
                    <span ref={triggerRef} onClick={(e) => e.stopPropagation()} style={{ display: "inline-flex" }}>
                        <ActionIcon
                            name="edit"
                            size={16}
                            color={isDropdownOpen ? iconHover : iconDefault}
                            label="Editar token"
                            isActive={isDropdownOpen}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        />
                    </span>
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
                            padding: spacing[8],
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
                        <span style={{ display: "flex", transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
                            <Icon name="chevron-down" size={16} color="currentColor" />
                        </span>
                    </button>
                </div>
            </div>
            <div
                style={{
                    overflow: "hidden",
                    maxHeight: isExpanded ? 400 : 0,
                    opacity: isExpanded ? 1 : 0,
                    transition: "max-height 220ms ease-out, opacity 200ms ease-out",
                }}
            >
                <div style={{ padding: spacing[12], paddingTop: 0, paddingBottom: spacing[16] }}>
                    <div
                        style={{
                            padding: spacing[12],
                            backgroundColor: semantic?.surface?.hover ?? semantic?.surface?.default,
                            borderRadius: radius.sm,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.medium,
                                color: semantic?.text?.muted,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Dónde se usa
                        </span>
                        <ul
                            style={{
                                margin: `${spacing[8]}px 0 0`,
                                paddingLeft: spacing[16],
                                listStyle: "disc",
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[4],
                            }}
                        >
                            {usage.map((item) => (
                                <li
                                    key={item}
                                    style={{
                                        fontFamily: typography.fontFamily.primary,
                                        fontSize: typography.fontSize.sm,
                                        color: semantic?.text?.default,
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {dropdownContent}
        </div>
    );
};
