"use client";

import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Icon } from "@ui/atoms/Icon/Icon";
import { FloatingSurface } from "@ui/atoms/FloatingSurface/FloatingSurface";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import {
    COMPONENT_TOKEN_OPTIONS,
    resolveTokenPath,
    getTokenOptionsForProperty,
    type TokenOption,
} from "./componentTokenOptions";
import { AppearanceConfigRow, AppearanceConfigUsage } from "../../_components";
import { useComponentsEditMode } from "./ComponentsEditModeContext";

type SemanticLike = {
    border?: { subtle?: string; default?: string };
    surface?: { default?: string; hover?: string; selected?: string };
    text?: { default?: string; muted?: string; active?: string };
};

type ComponentTokenExpandableRowProps = {
    label: string;
    value: string;
    onChange: (path: string) => void;
    usage: string[];
    isExpanded: boolean;
    onToggle: () => void;
    /** Tipo de propiedad para filtrar tokens compatibles (ej. background, textColor, borderColor) */
    propertyKey?: string;
    /** Alternativa: filtro custom. Si no hay propertyKey ni filterOptions, se muestran todos. */
    filterOptions?: (opt: TokenOption) => boolean;
};

export const ComponentTokenExpandableRow: React.FC<ComponentTokenExpandableRowProps> = ({
    label,
    value,
    onChange,
    usage,
    isExpanded,
    onToggle,
    propertyKey,
    filterOptions,
}) => {
    const { theme } = useTheme();
    const componentsEditMode = useComponentsEditMode();
    const tokenMode = componentsEditMode?.editMode ?? theme;
    const semantic = colors[theme].semantic as unknown as SemanticLike;
    const semanticForTokens = colors[tokenMode].semantic as Record<string, unknown>;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownRect, setDropdownRect] = useState<{
        top: number;
        left: number;
        popoverWidth: number;
        /** Altura disponible en viewport antes de activar scroll */
        availableContentHeight: number;
        /** Ancho máximo para no desbordar viewport */
        availableWidth: number;
        /** minWidth seguro para no forzar overflow */
        minPopoverWidth: number;
    } | null>(null);
    const [isPopoverEntered, setIsPopoverEntered] = useState(false);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const options = propertyKey
        ? getTokenOptionsForProperty(propertyKey, COMPONENT_TOKEN_OPTIONS, value)
        : filterOptions
          ? COMPONENT_TOKEN_OPTIONS.filter(filterOptions)
          : COMPONENT_TOKEN_OPTIONS;
    const resolvedColor = resolveTokenPath(semanticForTokens, value);
    const displayValue = value || "—";
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;

    const VIEWPORT_MARGIN = 12;
    const POPOVER_WIDTH_BASE = 200;
    const ITEM_HEIGHT_ESTIMATE = 40;
    const INNER_PADDING_VERTICAL = 32;

    const calculatePosition = useCallback(() => {
        if (typeof window === "undefined") return null;
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return null;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = VIEWPORT_MARGIN;
        const availableWidth = vw - margin * 2;
        const popoverWidth = Math.min(POPOVER_WIDTH_BASE, availableWidth);
        const minPopoverWidth = Math.min(160, availableWidth);
        const gapToIcon = 8;
        const spaceLeft = rect.left - margin;
        const spaceRight = vw - rect.right - margin;

        let left: number;
        if (spaceLeft >= popoverWidth) {
            left = rect.left - popoverWidth - gapToIcon;
        } else if (spaceRight >= popoverWidth) {
            left = rect.right + gapToIcon;
        } else {
            left = (vw - popoverWidth) / 2;
        }

        // Vertical: anclar al trigger (sin forzar arriba)
        const top = rect.top;

        left = Math.max(margin, Math.min(left, vw - popoverWidth - margin));
        const topClamped = Math.max(margin, Math.min(top, vh - margin));

        const availableContentHeight = Math.max(120, vh - topClamped - margin - INNER_PADDING_VERTICAL);

        return { top: topClamped, left, popoverWidth, availableContentHeight, availableWidth, minPopoverWidth };
    }, []);

    useLayoutEffect(() => {
        if (!isDropdownOpen) {
            setDropdownRect(null);
            setIsPopoverEntered(false);
            return;
        }
        setDropdownRect(calculatePosition());
        setIsPopoverEntered(false);
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsPopoverEntered(true));
        });
        return () => cancelAnimationFrame(raf);
    }, [isDropdownOpen, calculatePosition]);

    // Ajuste post-render con tamaño REAL del popover (getBoundingClientRect)
    useLayoutEffect(() => {
        if (!isDropdownOpen || !dropdownRect || !dropdownRef.current) return;
        const popoverEl = dropdownRef.current;
        const rect = popoverEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = VIEWPORT_MARGIN;
        const realWidth = rect.width;
        const realHeight = rect.height;

        let { left, top } = dropdownRect;
        let changed = false;

        if (left < margin) {
            left = margin;
            changed = true;
        }
        if (left + realWidth > vw - margin) {
            left = vw - margin - realWidth;
            changed = true;
        }
        if (top < margin) {
            top = margin;
            changed = true;
        }
        if (top + realHeight > vh - margin) {
            top = vh - margin - realHeight;
            changed = true;
        }
        if (changed) {
            setDropdownRect((prev) => (prev ? { ...prev, left, top } : null));
        }
    }, [isDropdownOpen, dropdownRect]);

    const clampToViewport = useCallback(() => {
        if (!dropdownRef.current) return;
        const popoverEl = dropdownRef.current;
        const rect = popoverEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = VIEWPORT_MARGIN;
        let left = rect.left;
        let top = rect.top;
        const realWidth = rect.width;
        const realHeight = rect.height;
        let changed = false;
        if (left < margin) {
            left = margin;
            changed = true;
        }
        if (left + realWidth > vw - margin) {
            left = vw - margin - realWidth;
            changed = true;
        }
        if (top < margin) {
            top = margin;
            changed = true;
        }
        if (top + realHeight > vh - margin) {
            top = vh - margin - realHeight;
            changed = true;
        }
        if (changed) {
            setDropdownRect((prev) => (prev ? { ...prev, left, top } : null));
        }
    }, []);

    useEffect(() => {
        if (!isDropdownOpen) return;
        const handleResize = () => {
            const pos = calculatePosition();
            if (pos) setDropdownRect(pos);
        };
        const handleScroll = () => {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) {
                setIsDropdownOpen(false);
                return;
            }
            const margin = VIEWPORT_MARGIN;
            const inViewport =
                rect.top < window.innerHeight - margin &&
                rect.bottom > margin &&
                rect.left < window.innerWidth - margin &&
                rect.right > margin;
            if (!inViewport) {
                setIsDropdownOpen(false);
            } else {
                const pos = calculatePosition();
                if (pos) setDropdownRect(pos);
            }
        };
        let resizeObserver: ResizeObserver | null = null;
        if (dropdownRef.current && dropdownRect) {
            resizeObserver = new ResizeObserver(() => {
                clampToViewport();
            });
            resizeObserver.observe(dropdownRef.current);
        }
        window.addEventListener("scroll", handleScroll, { capture: true });
        window.addEventListener("resize", handleResize);
        return () => {
            resizeObserver?.disconnect();
            window.removeEventListener("scroll", handleScroll, { capture: true });
            window.removeEventListener("resize", handleResize);
        };
    }, [isDropdownOpen, calculatePosition, dropdownRect, clampToViewport]);

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

    const iconDefault = semantic?.icon?.muted ?? semantic?.text?.muted;
    const iconHover = semantic?.icon?.active ?? semantic?.text?.active;

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
                          width: dropdownRect.popoverWidth,
                          maxWidth: dropdownRect.availableWidth,
                          minWidth: dropdownRect.minPopoverWidth,
                          maxHeight: `calc(100vh - ${VIEWPORT_MARGIN * 2}px)`,
                          overflow: "visible",
                          opacity: isPopoverEntered ? 1 : 0,
                          transform: isPopoverEntered ? "none" : "translateY(6px)",
                          transition: "opacity 200ms ease-out, transform 200ms ease-out",
                      }}
                  >
                      <FloatingSurface style={{ padding: 0, overflow: "hidden" }}>
                          <div
                              className="floating-scroll"
                              style={{
                                  paddingLeft: spacing[8],
                                  paddingRight: spacing[8],
                                  paddingTop: spacing[8],
                                  paddingBottom: spacing[8],
                                  ...(options.length * ITEM_HEIGHT_ESTIMATE + INNER_PADDING_VERTICAL >
                                  dropdownRect.availableContentHeight
                                      ? {
                                            maxHeight: dropdownRect.availableContentHeight,
                                            overflowY: "auto" as const,
                                        }
                                      : { overflowY: "visible" as const }),
                              }}
                          >
                          {options.map((opt) => {
                              const isSelected = value === opt.value;
                              const hoverBg = semantic?.surface?.hover ?? "rgba(255,255,255,0.08)";
                              const selectedBg = semantic?.surface?.selected ?? semantic?.surface?.hover ?? "rgba(255,255,255,0.12)";
                              return (
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
                                          minHeight: 28,
                                          padding: "6px 10px",
                                          background: isSelected ? selectedBg : "none",
                                          border: "none",
                                          borderRadius: radius.sm,
                                          cursor: "pointer",
                                          fontFamily: typography.fontFamily.primary,
                                          fontSize: typography.fontSize.xs,
                                          color: isSelected ? semantic?.text?.active ?? semantic?.text?.default : semantic?.text?.default,
                                          fontWeight: isSelected ? typography.fontWeight.medium : typography.fontWeight.regular,
                                          textAlign: "left",
                                          transition: "background-color 0.15s ease",
                                      }}
                                      onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = isSelected ? selectedBg : hoverBg;
                                      }}
                                      onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor = isSelected ? selectedBg : "transparent";
                                      }}
                                  >
                                      <div
                                          style={{
                                              width: 14,
                                              height: 14,
                                              flexShrink: 0,
                                              borderRadius: "50%",
                                              border: `1px solid ${borderColor}`,
                                              backgroundColor:
                                                  resolveTokenPath(semanticForTokens, opt.value) ||
                                                  semantic?.surface?.default,
                                          }}
                                      />
                                      <span style={{ flex: 1 }}>{opt.label}</span>
                                      {isSelected && (
                                          <span style={{ flexShrink: 0, display: "flex" }}>
                                              <Icon
                                                  name="check"
                                                  size={12}
                                                  color={semantic?.text?.active ?? semantic?.text?.default}
                                              />
                                          </span>
                                      )}
                                  </button>
                              );
                          })}
                          </div>
                      </FloatingSurface>
                  </div>,
                  document.body
              )
            : null;

    return (
        <div ref={containerRef}>
            <AppearanceConfigRow
                label={label}
                swatchColor={resolvedColor || semantic?.surface?.default}
                valueDisplay={displayValue}
                editControl={
                    <>
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
                        {dropdownContent}
                    </>
                }
                isExpanded={isExpanded}
                onToggle={onToggle}
                expandedContent={<AppearanceConfigUsage usage={usage} />}
            />
        </div>
    );
};
