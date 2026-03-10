"use client";

import React, { useState, useMemo, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { PanelCard } from "@ui/containers/PanelCard";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { FloatingSurface } from "@ui/atoms/FloatingSurface/FloatingSurface";
import { SecondaryNavSidebar, SECONDARY_NAV_SIDEBAR_WIDTH } from "@ui/molecules/SecondaryNavSidebar";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Tooltip } from "@ui/atoms/Tooltip";
import { Icon } from "@ui/atoms/Icon/Icon";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, colors, typography, radius, layout, breakpoints } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { useVisualPreset } from "@core/visual/visualPresetStore";
import { getThemeTokens } from "@core/visual/themeRegistry";
import { AccessDeniedState } from "@ui/containers/AccessDeniedState/AccessDeniedState";
import { PresetSelector } from "@ui/dev/PresetSelector";
import { DEV_UI_ENABLED } from "@core/flags/devFlags";
import { mockSession } from "@core/auth/mockSession";

/** Temas disponibles. Estructura preparada para múltiples (Control = tema base del sistema). */
const AVAILABLE_THEMES = [
    { value: "control", label: "Control" },
    // Futuro: { value: "security", label: "Security" },
] as const;

/** Datos para la galería de temas. previewColors se obtiene de themeRegistry en runtime. */
type GalleryTheme = {
    id: string;
    name: string;
    description: string;
    recommendedUse: string;
    tags: string[];
    isDefault: boolean;
};

const GALLERY_THEMES: GalleryTheme[] = [
    {
        id: "control",
        name: "Control",
        description: "Tema base del sistema",
        recommendedUse: "SaaS · Dashboards · Sistemas internos",
        tags: ["Dark", "Minimal", "Corporate"],
        isDefault: true,
    },
    {
        id: "security",
        name: "Security",
        description: "Tema para productos de seguridad y enterprise",
        recommendedUse: "Seguridad · Enterprise",
        tags: ["Dark", "Corporate"],
        isDefault: false,
    },
];

const CONTENT_MAX_WIDTH = 560;

const TABS_GROUPS = [
    {
        title: "General",
        items: [
            { label: "Galería", value: "Galería", icon: "grid" },
            { label: "Base", value: "Base", icon: "settings" },
        ],
    },
    {
        title: "Configuración",
        items: [
            { label: "Estados", value: "Estados", icon: "alert-circle" },
            { label: "Componentes", value: "Componentes", icon: "code" },
            { label: "Avanzado", value: "Avanzado", icon: "edit" },
        ],
    },
];

type BaseTokens = {
    background: string;
    surface: string;
    border: string;
    text: string;
    accent: string;
};

function baseFromTokens(t: {
    background: string;
    surface: string;
    border: string;
    text: string;
    accent: string;
}): BaseTokens {
    return {
        background: t.background,
        surface: t.surface,
        border: t.border,
        text: t.text,
        accent: t.accent,
    };
}

type ThemeEditMode = "dark" | "light";
type ColorSelectOption = { value: string; label: string };

type BaseTokenKey = "accent" | "background" | "surface" | "text";

const BASE_TOKEN_KEYS: { key: BaseTokenKey; label: string }[] = [
    { key: "accent", label: "Acento" },
    { key: "background", label: "Fondo" },
    { key: "surface", label: "Superficie" },
    { key: "text", label: "Texto" },
];

/** Dónde se usa cada token de color base en el sistema */
const COLOR_USAGE: Record<BaseTokenKey, string[]> = {
    accent: ["Buttons · Primary", "Links", "Focus states", "Surface highlights"],
    background: ["Page background", "App shell", "Surface base"],
    surface: ["Cards", "Panels", "Inputs", "Elevated surfaces"],
    text: ["Body text", "Labels", "Headings", "Text emphasis"],
};

function uniqueColorOptions(options: ColorSelectOption[]) {
    return options.filter(
        (option, index, all) => all.findIndex((candidate) => candidate.value === option.value) === index
    );
}

function ensureCurrentColorOption(value: string, options: ColorSelectOption[]) {
    if (options.some((option) => option.value === value)) {
        return options;
    }

    return [{ value, label: `● ${value.toUpperCase()}` }, ...options];
}

function hexToHsv(hex: string): { h: number; s: number; v: number } {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return { h: 0, s: 0, v: 100 };
    let r = 0,
        g = 0,
        b = 0;
    if (m[1].length === 3) {
        r = parseInt(m[1][0] + m[1][0], 16) / 255;
        g = parseInt(m[1][1] + m[1][1], 16) / 255;
        b = parseInt(m[1][2] + m[1][2], 16) / 255;
    } else {
        r = parseInt(m[1].slice(0, 2), 16) / 255;
        g = parseInt(m[1].slice(2, 4), 16) / 255;
        b = parseInt(m[1].slice(4, 6), 16) / 255;
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const v = max;
    const s = max === 0 ? 0 : (d / max) * 100;
    let h = 0;
    if (d !== 0) {
        switch (max) {
            case r:
                h = (60 * ((g - b) / d) + (g < b ? 360 : 0)) % 360;
                break;
            case g:
                h = 60 * ((b - r) / d) + 120;
                break;
            default:
                h = 60 * ((r - g) / d) + 240;
        }
    }
    return { h, s, v: v * 100 };
}

function hsvToHex(h: number, s: number, v: number): string {
    s /= 100;
    v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0,
        g = 0,
        b = 0;
    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }
    const R = Math.round((r + m) * 255);
    const G = Math.round((g + m) * 255);
    const B = Math.round((b + m) * 255);
    return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`.toUpperCase();
}

function isValidHex(hex: string): boolean {
    return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex);
}

function normalizeHex(hex: string): string {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return "#000000";
    if (m[1].length === 3) {
        return (
            "#" +
            m[1]
                .split("")
                .map((c) => c + c)
                .join("")
                .toUpperCase()
        );
    }
    return "#" + m[1].toUpperCase();
}

type ColorFormat = "hex" | "rgb" | "hsl";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const m = hex.replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    let r = 0, g = 0, b = 0;
    if (m[1].length === 3) {
        r = parseInt(m[1][0] + m[1][0], 16);
        g = parseInt(m[1][1] + m[1][1], 16);
        b = parseInt(m[1][2] + m[1][2], 16);
    } else {
        r = parseInt(m[1].slice(0, 2), 16);
        g = parseInt(m[1].slice(2, 4), 16);
        b = parseInt(m[1].slice(4, 6), 16);
    }
    return { r, g, b };
}

function hexToHsl(hex: string): { h: number; s: number; l: number } {
    const { r, g, b } = hexToRgb(hex);
    const rn = r / 255, gn = g / 255, bn = b / 255;
    const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        else if (max === gn) h = ((bn - rn) / d + 2) / 6;
        else h = ((rn - gn) / d + 4) / 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function rgbToHex(r: number, g: number, b: number): string {
    const R = Math.max(0, Math.min(255, Math.round(r)));
    const G = Math.max(0, Math.min(255, Math.round(g)));
    const B = Math.max(0, Math.min(255, Math.round(b)));
    return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`.toUpperCase();
}

function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

function parseRgb(str: string): { r: number; g: number; b: number } | null {
    const m = str.match(/^\s*rgb?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i);
    if (!m) return null;
    return { r: +m[1], g: +m[2], b: +m[3] };
}

function parseHsl(str: string): { h: number; s: number; l: number } | null {
    const m = str.match(/^\s*hsl\s*\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)\s*$/i);
    if (!m) return null;
    return { h: +m[1], s: +m[2], l: +m[3] };
}

const RECENT_COLORS_MAX = 10;
const recentColorsStore: string[] = [];

function ModeSegmentedControl({
    value,
    onChange,
    semantic,
}: {
    value: ThemeEditMode;
    onChange: (v: ThemeEditMode) => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const options: { value: ThemeEditMode; label: string }[] = [
        { value: "dark", label: "Oscuro" },
        { value: "light", label: "Claro" },
    ];
    return (
        <div
            role="tablist"
            aria-label="Aspecto"
            style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "stretch",
                height: 40,
                borderRadius: radius.full,
                border: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: 2,
                gap: spacing[4],
            }}
        >
            {options.map((opt) => {
                const isActive = value === opt.value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(opt.value)}
                        style={{
                            flex: 1,
                            minWidth: 80,
                            padding: `${spacing[4]}px ${spacing[12]}px`,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: isActive ? "#1a1a1a" : semantic.text.muted,
                            backgroundColor: isActive ? "#ffffff" : "transparent",
                            border: "none",
                            borderRadius: radius.full,
                            cursor: "pointer",
                            transition: "color 0.2s, background-color 0.2s",
                            textAlign: "center",
                        }}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
}

function BaseTabs({
    value,
    onChange,
    semantic,
}: {
    value: "tema" | "colores";
    onChange: (v: "tema" | "colores") => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const tabs: { value: "tema" | "colores"; label: string }[] = [
        { value: "tema", label: "Tema" },
        { value: "colores", label: "Colores base" },
    ];
    const tabsRef = React.useRef<(HTMLButtonElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = React.useState({ left: 0, width: 0 });

    React.useEffect(() => {
        const id = requestAnimationFrame(() => {
            const activeIndex = value === "tema" ? 0 : 1;
            const currentTab = tabsRef.current[activeIndex];
            if (currentTab) {
                setUnderlineStyle({
                    left: currentTab.offsetLeft,
                    width: currentTab.offsetWidth,
                });
            }
        });
        return () => cancelAnimationFrame(id);
    }, [value]);

    return (
        <div
            role="tablist"
            aria-label="Subsecciones de Base"
            style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "stretch",
                gap: 0,
                flex: "0 0 auto",
                minWidth: "min-content",
                position: "relative",
            }}
        >
            {tabs.map((tab, index) => {
                const isActive = value === tab.value;
                return (
                    <button
                        key={tab.value}
                        ref={(el) => {
                            tabsRef.current[index] = el;
                        }}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(tab.value)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: `${spacing[12]}px ${spacing[16]}px`,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: isActive ? semantic.text.active : semantic.text.muted,
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "color 0.2s ease",
                            textAlign: "center",
                        }}
                    >
                        {tab.label}
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
                    borderRadius: 2,
                    backgroundColor: semantic.text.active,
                    transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
                aria-hidden
            />
        </div>
    );
}

function TokenRowWithSwatch({
    label,
    value,
    options,
    onChange,
    semantic,
}: {
    label: string;
    value: string;
    options: ColorSelectOption[];
    onChange: (v: string) => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto",
                alignItems: "center",
                gap: spacing[12],
                width: "100%",
                minWidth: 0,
            }}
        >
            <SelectSingle
                label={label}
                helperText={value.toUpperCase()}
                options={options}
                value={value}
                onChange={onChange}
            />
            <div
                style={{
                    width: spacing[40],
                    height: spacing[40],
                    flexShrink: 0,
                    borderRadius: radius.sm,
                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                    backgroundColor: value || semantic.surface.default,
                }}
                aria-hidden
            />
        </div>
    );
}

function BaseColorRowRightControl({
    children,
    onExpandClick,
    isExpanded,
    semantic,
}: {
    children: React.ReactNode;
    onExpandClick: (e: React.MouseEvent) => void;
    isExpanded: boolean;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const [chevronHovered, setChevronHovered] = useState(false);
    const iconDefault = semantic.icon?.muted ?? semantic.text.muted;
    const iconHover = semantic.icon?.active ?? semantic.text.hover;
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: spacing[4],
            }}
        >
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
            <button
                type="button"
                onClick={onExpandClick}
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
                    background: chevronHovered ? semantic.surface.hoverElevated ?? semantic.surface.hover : "transparent",
                    border: "none",
                    borderRadius: radius.md,
                    cursor: "pointer",
                    color: chevronHovered ? iconHover : iconDefault,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                }}
            >
                <span
                    style={{
                        display: "flex",
                        transform: isExpanded ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                    }}
                >
                    <Icon name="chevron-down" size={16} color="currentColor" />
                </span>
            </button>
        </div>
    );
}

type PopoverPosition = { top: number; left: number; placement: "right" | "left" } | null;

function BaseColorSelector({
    value,
    options,
    onChange,
    semantic,
    variant = "full",
    originalValue,
}: {
    value: string;
    options: ColorSelectOption[];
    onChange: (v: string) => void;
    semantic: (typeof colors.dark)["semantic"];
    variant?: "full" | "icon";
    originalValue?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownRect, setDropdownRect] = useState<PopoverPosition>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [colorFormat, setColorFormat] = useState<ColorFormat>("hex");
    const [showRecents, setShowRecents] = useState(false);
    const [recentColors, setRecentColors] = useState<string[]>(() => [...recentColorsStore]);
    const [formatInput, setFormatInput] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const initialHsv = useMemo(() => hexToHsv(value || "#000000"), []);
    const [hsv, setHsv] = useState(initialHsv);
    const [hexInput, setHexInput] = useState(() => {
        const v = value || "#000000";
        return v.startsWith("#") ? v.toUpperCase() : `#${v.toUpperCase()}`;
    });
    const displayLabel = options.find((o) => o.value.toLowerCase() === (value || "").toLowerCase())?.label ?? hexInput;

    useEffect(() => {
        if (!isOpen) return;
        const raw = value || "#000000";
        const hex = raw.startsWith("#") ? raw.toUpperCase() : `#${raw.toUpperCase()}`;
        setHsv(hexToHsv(hex));
        setHexInput(hex);
        setRecentColors([...recentColorsStore]);
    }, [isOpen, value]);

    useEffect(() => {
        if (!isOpen) return;
        const hex = hsvToHex(hsv.h, hsv.s, hsv.v);
        if (colorFormat === "hex") setFormatInput(hex);
        else if (colorFormat === "rgb") {
            const { r, g, b } = hexToRgb(hex);
            setFormatInput(`rgb(${r}, ${g}, ${b})`);
        } else {
            const { h, s, l } = hexToHsl(hex);
            setFormatInput(`hsl(${h}, ${s}%, ${l}%)`);
        }
    }, [isOpen, hsv.h, hsv.s, hsv.v, colorFormat]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < breakpoints.md);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const calculatePopoverPosition = useCallback((): PopoverPosition | null => {
        if (typeof window === "undefined") return null;
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return null;
        const popoverWidth = 320;
        const popoverHeight = 340;
        const margin = 8;
        const gapToIcon = -8;
        const spaceLeft = rect.left - margin;
        const placement: "right" | "left" = spaceLeft >= popoverWidth ? "left" : "right";
        let left = placement === "left" ? rect.left - popoverWidth - gapToIcon : rect.right + gapToIcon;
        let top = rect.top;
        const spaceBelow = window.innerHeight - rect.top - margin;
        if (spaceBelow < popoverHeight) {
            top = window.innerHeight - popoverHeight - margin * 2;
        }
        left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
        top = Math.max(margin, Math.min(top, window.innerHeight - popoverHeight - margin));
        return { top, left, placement };
    }, []);

    useEffect(() => {
        if (!isOpen || typeof window === "undefined") return;
        const handleResize = () => {
            const nextIsMobile = window.innerWidth < breakpoints.md;
            setIsMobile(nextIsMobile);
            if (nextIsMobile) {
                setDropdownRect({ top: 0, left: 0, placement: "right" });
            } else {
                const pos = calculatePopoverPosition();
                if (pos) setDropdownRect(pos);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen, calculatePopoverPosition]);

    useEffect(() => {
        if (!isOpen) {
            setDropdownRect(null);
            return;
        }
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        if (isMobile) {
            document.body.style.overflow = "hidden";
        }
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                containerRef.current?.contains(target) ||
                dropdownRef.current?.contains(target)
            ) {
                return;
            }
            setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
            if (isMobile) document.body.style.overflow = "";
        };
    }, [isOpen, isMobile]);

    useLayoutEffect(() => {
        if (!isOpen || typeof window === "undefined") return;
        if (isMobile) {
            setDropdownRect({ top: 0, left: 0, placement: "right" });
            return;
        }
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const popoverWidth = 320;
        const popoverHeight = 340;
        const margin = 8;
        const gapToIcon = -8;
        const spaceLeft = rect.left - margin;
        const placement: "right" | "left" = spaceLeft >= popoverWidth ? "left" : "right";
        let left = placement === "left" ? rect.left - popoverWidth - gapToIcon : rect.right + gapToIcon;
        let top = rect.top;
        const spaceBelow = window.innerHeight - rect.top - margin;
        if (spaceBelow < popoverHeight) {
            top = window.innerHeight - popoverHeight - margin * 2;
        }
        left = Math.max(margin, Math.min(left, window.innerWidth - popoverWidth - margin));
        top = Math.max(margin, Math.min(top, window.innerHeight - popoverHeight - margin));
        setDropdownRect({ top, left, placement });
    }, [isOpen, isMobile]);

    const applyHex = useCallback(
        (hex: string) => {
            const norm = normalizeHex(hex);
            if (isValidHex(hex)) {
                onChange(norm);
                setHsv(hexToHsv(norm));
                setHexInput(norm);
                const next = [norm, ...recentColorsStore.filter((c) => c.toUpperCase() !== norm.toUpperCase())].slice(0, RECENT_COLORS_MAX);
                recentColorsStore.length = 0;
                recentColorsStore.push(...next);
                setRecentColors([...recentColorsStore]);
            }
        },
        [onChange]
    );

    const updateFrom2D = useCallback(
        (clientX: number, clientY: number, target: HTMLDivElement) => {
            const rect = target.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
            const s = x * 100;
            const v = (1 - y) * 100;
            const hex = hsvToHex(hsv.h, s, v);
            setHsv((p) => ({ ...p, s, v }));
            setHexInput(hex);
            applyHex(hex);
        },
        [hsv.h, applyHex]
    );

    const updateFromHue = useCallback(
        (clientX: number, target: HTMLDivElement) => {
            const rect = target.getBoundingClientRect();
            const h = Math.max(0, Math.min(360, ((clientX - rect.left) / rect.width) * 360));
            const hex = hsvToHex(h, hsv.s, hsv.v);
            setHsv((p) => ({ ...p, h }));
            setHexInput(hex);
            applyHex(hex);
        },
        [hsv.s, hsv.v, applyHex]
    );

    const sbRef = useRef<HTMLDivElement>(null);
    const hueRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<"2d" | "hue" | null>(null);

    useEffect(() => {
        if (!dragging) return;
        const onMove = (e: MouseEvent) => {
            if (dragging === "2d" && sbRef.current) updateFrom2D(e.clientX, e.clientY, sbRef.current);
            if (dragging === "hue" && hueRef.current) updateFromHue(e.clientX, hueRef.current);
        };
        const onUp = () => setDragging(null);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
        };
    }, [dragging, updateFrom2D, updateFromHue]);

    const currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);

    const getFormatString = useCallback((hex: string) => {
        const norm = hex.startsWith("#") ? hex : `#${hex}`;
        if (colorFormat === "hex") return norm.toUpperCase();
        if (colorFormat === "rgb") {
            const { r, g, b } = hexToRgb(norm);
            return `rgb(${r}, ${g}, ${b})`;
        }
        const { h, s, l } = hexToHsl(norm);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }, [colorFormat]);

    const handleFormatBlur = () => {
        const current = value || "#000000";
        const fallback = getFormatString(current);
        if (colorFormat === "hex" && isValidHex(formatInput)) {
            applyHex(normalizeHex(formatInput));
        } else if (colorFormat === "rgb") {
            const parsed = parseRgb(formatInput);
            if (parsed) applyHex(rgbToHex(parsed.r, parsed.g, parsed.b));
            else setFormatInput(fallback);
        } else if (colorFormat === "hsl") {
            const parsed = parseHsl(formatInput);
            if (parsed) applyHex(hslToHex(parsed.h, parsed.s, parsed.l));
            else setFormatInput(fallback);
        } else {
            setFormatInput(fallback);
        }
    };

    const [eyedropperSupported] = useState(() => typeof window !== "undefined" && "EyeDropper" in window);
    const handleEyedropper = useCallback(async () => {
        if (typeof window === "undefined" || !("EyeDropper" in window)) return;
        try {
            const dropper = new (window as unknown as { EyeDropper: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper();
            const result = await dropper.open();
            const hex = result.sRGBHex.toUpperCase();
            applyHex(hex.startsWith("#") ? hex : `#${hex}`);
        } catch {
            // User cancelled or unsupported
        }
    }, [applyHex]);
    const isIconVariant = variant === "icon";

    const trigger = isIconVariant ? (
        <span ref={triggerRef} style={{ display: "inline-flex" }}>
            <ActionIcon
                name="edit"
                size={16}
                color={semantic.text.muted}
                label="Editar color"
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
        </span>
    ) : (
        <span ref={triggerRef} style={{ display: "block", width: "100%" }}>
        <div
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }
            }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: spacing[8],
                width: "100%",
                minHeight: spacing[48],
                padding: `0 ${spacing[12]}px`,
                backgroundColor: semantic.surface.default,
                border: `1px solid ${semantic.border.default}`,
                borderRadius: radius.md,
                cursor: "pointer",
                fontFamily: typography.fontFamily.primary,
                fontSize: typography.fontSize.sm,
                color: semantic.text.default,
            }}
        >
            <div
                style={{
                    width: spacing[24],
                    height: spacing[24],
                    flexShrink: 0,
                    borderRadius: "50%",
                    border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                    backgroundColor: value || semantic.surface.default,
                }}
            />
            <span style={{ flex: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis" }}>
                {displayLabel}
            </span>
            <Icon name="chevron-down" size={16} color={semantic.text.muted} />
        </div>
        </span>
    );

    const pickerContent = (
        <div style={{ padding: spacing[12] }}>
            {/* Color picker: 2D area + hue bar */}
            <div
                ref={sbRef}
                onMouseDown={(e) => {
                    e.preventDefault();
                    updateFrom2D(e.clientX, e.clientY, e.currentTarget);
                    setDragging("2d");
                }}
                style={{
                    width: "100%",
                    height: 140,
                    borderRadius: radius.md,
                    background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${hsv.h}, 100%, 50%)`,
                    cursor: "crosshair",
                    position: "relative",
                }}
            />
            <div
                ref={hueRef}
                onMouseDown={(e) => {
                    e.preventDefault();
                    updateFromHue(e.clientX, e.currentTarget);
                    setDragging("hue");
                }}
                style={{
                    width: "100%",
                    height: 10,
                    marginTop: spacing[8],
                    borderRadius: radius.full,
                    background: "linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
                    cursor: "pointer",
                }}
            />
            {/* Preview + format selector + input + eyedropper */}
            <div style={{ marginTop: spacing[12], display: "flex", flexDirection: "column", gap: spacing[8] }}>
                <div style={{ display: "flex", justifyContent: "center", gap: spacing[4] }}>
                    {(["hex", "rgb", "hsl"] as const).map((fmt) => (
                        <button
                            key={fmt}
                            type="button"
                            onClick={() => setColorFormat(fmt)}
                            style={{
                                padding: `${spacing[4]}px ${spacing[8]}px`,
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.medium,
                                color: colorFormat === fmt ? semantic.text.active : semantic.text.muted,
                                backgroundColor: colorFormat === fmt ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
                                border: "none",
                                borderRadius: radius.sm,
                                cursor: "pointer",
                                textTransform: "uppercase",
                            }}
                        >
                            {fmt}
                        </button>
                    ))}
                </div>
                <div style={{ display: "flex", alignItems: "stretch", gap: spacing[8] }}>
                    <div
                        style={{
                            width: spacing[40],
                            height: spacing[40],
                            borderRadius: "50%",
                            border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                            backgroundColor: hsvToHex(hsv.h, hsv.s, hsv.v),
                            flexShrink: 0,
                        }}
                    />
                    <input
                        type="text"
                        value={formatInput}
                        onChange={(e) => setFormatInput(e.target.value)}
                        onBlur={handleFormatBlur}
                        onKeyDown={(e) => e.key === "Enter" && handleFormatBlur()}
                        placeholder={colorFormat === "hex" ? "#000000" : colorFormat === "rgb" ? "rgb(0, 0, 0)" : "hsl(0, 0%, 0%)"}
                        style={{
                            flex: 1,
                            minWidth: 0,
                            padding: `0 ${spacing[8]}px`,
                            fontFamily: (typography.fontFamily as { mono?: string }).mono ?? typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            color: semantic.text.default,
                            backgroundColor: semantic.surface.hover ?? semantic.surface.default,
                            border: `1px solid ${semantic.border.default}`,
                            borderRadius: radius.sm,
                        }}
                    />
                    {eyedropperSupported && (
                        <Tooltip content="Cuentagotas">
                        <button
                            type="button"
                            onClick={handleEyedropper}
                            aria-label="Cuentagotas"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: spacing[40],
                                minHeight: 40,
                                flexShrink: 0,
                                padding: 0,
                                background: semantic.surface.hover ?? semantic.surface.default,
                                border: `1px solid ${semantic.border.default}`,
                                borderRadius: radius.sm,
                                cursor: "pointer",
                                color: semantic.text.muted,
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
                            </svg>
                        </button>
                        </Tooltip>
                    )}
                </div>
            </div>
            {/* Collapsible Recientes */}
            <div style={{ marginTop: spacing[12], borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`, paddingTop: spacing[12] }}>
                <button
                    type="button"
                    onClick={() => setShowRecents(!showRecents)}
                    aria-expanded={showRecents}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: 0,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: typography.fontFamily.primary,
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.medium,
                        color: semantic.text.muted,
                    }}
                >
                    Recientes
                    <span style={{ transform: showRecents ? "rotate(180deg)" : "none", transition: "transform 0.2s ease", display: "flex" }}>
                        <Icon name="chevron-down" size={16} color="currentColor" />
                    </span>
                </button>
                {showRecents && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[8], marginTop: spacing[8] }}>
                        {originalValue && (
                            <Tooltip content={`Original: ${originalValue}`}>
                            <button
                                type="button"
                                onClick={() => applyHex(originalValue)}
                                style={{
                                    width: 28,
                                    height: 28,
                                    padding: 0,
                                    borderRadius: radius.sm,
                                    border: `2px solid ${semantic.text.active ?? semantic.primary?.default ?? "#00FFA9"}`,
                                    backgroundColor: originalValue,
                                    cursor: "pointer",
                                    boxSizing: "border-box",
                                }}
                            />
                            </Tooltip>
                        )}
                        {recentColors
                            .filter((hex) => !originalValue || hex.toUpperCase() !== originalValue.toUpperCase())
                            .slice(0, RECENT_COLORS_MAX)
                            .map((hex) => (
                                <Tooltip key={hex} content={hex}>
                                <button
                                    type="button"
                                    onClick={() => applyHex(hex)}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        padding: 0,
                                        borderRadius: radius.sm,
                                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                        backgroundColor: hex,
                                        cursor: "pointer",
                                    }}
                                />
                                </Tooltip>
                            ))}
                        {!originalValue && recentColors.length === 0 && (
                            <p style={{ width: "100%", margin: 0, fontSize: typography.fontSize.xs, color: semantic.text.muted }}>
                                Sin colores recientes
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    const dropdownContent =
        isOpen &&
        dropdownRect &&
        typeof document !== "undefined" &&
        createPortal(
            <div ref={dropdownRef}>
                {isMobile ? (
                    <div
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsOpen(false);
                        }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: spacing[16],
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FloatingSurface
                            onClick={(e) => e.stopPropagation()}
                            style={{ minWidth: 280, width: "100%", maxWidth: 320 }}
                        >
                            {pickerContent}
                        </FloatingSurface>
                    </div>
                ) : (
                    <FloatingSurface
                        style={{
                            position: "fixed",
                            top: dropdownRect!.top,
                            left: dropdownRect!.left,
                            minWidth: 280,
                            zIndex: 1000,
                        }}
                    >
                        {pickerContent}
                    </FloatingSurface>
                )}
            </div>,
            document.body
        );

    return (
        <div ref={containerRef} style={{ position: "relative", minWidth: isIconVariant ? undefined : 120 }}>
            {trigger}
            {dropdownContent}
        </div>
    );
}

function BaseColorExpandableRow({
    label,
    value,
    hex,
    originalValue,
    options,
    onChange,
    usage,
    isExpanded,
    onToggle,
    semantic,
}: {
    label: string;
    value: string;
    hex: string;
    originalValue?: string;
    options: ColorSelectOption[];
    onChange: (v: string) => void;
    usage: string[];
    isExpanded: boolean;
    onToggle: () => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    return (
        <div
            style={{
                borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
            }}
        >
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
                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                        backgroundColor: value || semantic.surface.default,
                    }}
                    aria-hidden
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <span
                        style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: semantic.text.default,
                        }}
                    >
                        {label}
                    </span>
                    <span
                        style={{
                            display: "block",
                            fontFamily: (typography.fontFamily as { mono?: string }).mono ?? typography.fontFamily.primary,
                            fontSize: typography.fontSize.xs,
                            color: semantic.text.muted,
                            marginTop: spacing[4],
                        }}
                    >
                        {hex}
                    </span>
                </div>
                <BaseColorRowRightControl
                    onExpandClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                    }}
                    isExpanded={isExpanded}
                    semantic={semantic}
                >
                    <BaseColorSelector
                        variant="icon"
                        options={options}
                        value={value}
                        originalValue={originalValue}
                        onChange={(v) => onChange(v)}
                        semantic={semantic}
                    />
                </BaseColorRowRightControl>
            </div>
            <div
                style={{
                    overflow: "hidden",
                    maxHeight: isExpanded ? 400 : 0,
                    opacity: isExpanded ? 1 : 0,
                    transition: "max-height 220ms ease-out, opacity 200ms ease-out",
                }}
            >
                <div
                    style={{
                        padding: spacing[12],
                        paddingTop: 0,
                        paddingBottom: spacing[16],
                    }}
                >
                    <div
                        style={{
                            padding: spacing[12],
                            backgroundColor: semantic.surface.hover ?? semantic.surface.default,
                            borderRadius: radius.sm,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.medium,
                                color: semantic.text.muted,
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
                                        color: semantic.text.default,
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BaseColorsCard({
    mode,
    tokens,
    originalTokens,
    options,
    onChange,
    expandedByKey,
    onExpandToggle,
    titleAction,
    semantic,
}: {
    mode: "dark" | "light";
    tokens: BaseTokens;
    originalTokens: BaseTokens;
    options: Record<BaseTokenKey, ColorSelectOption[]>;
    onChange: (field: BaseTokenKey, value: string) => void;
    expandedByKey: Record<BaseTokenKey, boolean>;
    onExpandToggle: (key: BaseTokenKey) => void;
    titleAction?: React.ReactNode;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const title = mode === "dark" ? "Modo oscuro" : "Modo claro";
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                flex: 1,
                minHeight: 0,
                backgroundColor: semantic.surface.card ?? semantic.surface.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                padding: spacing[24],
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[8],
                    marginBottom: spacing[16],
                }}
            >
                {titleAction}
                <h3
                    style={{
                        margin: 0,
                        fontFamily: typography.fontFamily.primary,
                        fontSize: typography.fontSize.md,
                        fontWeight: typography.fontWeight.semibold,
                        color: semantic.text.default,
                    }}
                >
                    {title}
                </h3>
            </div>
            {BASE_TOKEN_KEYS.map(({ key, label }) => (
                <BaseColorExpandableRow
                    key={`${mode}-${key}`}
                    label={label}
                    value={tokens[key]}
                    hex={tokens[key].toUpperCase()}
                    originalValue={originalTokens[key]}
                    options={options[key]}
                    onChange={(v) => onChange(key, v)}
                    usage={COLOR_USAGE[key]}
                    isExpanded={expandedByKey[key]}
                    onToggle={() => onExpandToggle(key)}
                    semantic={semantic}
                />
            ))}
        </div>
    );
}

function ThemePreview({
    tokens,
    semantic,
}: {
    tokens: BaseTokens;
    semantic: (typeof colors.dark)["semantic"];
}) {
    return (
        <div
            style={{
                backgroundColor: tokens.background,
                borderRadius: radius.card,
                padding: spacing.lg,
                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                display: "flex",
                flexDirection: "column",
                gap: spacing[16],
                width: "100%",
                minWidth: 280,
                maxWidth: 360,
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[8],
                }}
            >
                <Text
                    variant="body"
                    style={{
                        color: tokens.text,
                        fontWeight: typography.fontWeight.semibold,
                        fontSize: typography.fontSize.sm,
                    }}
                >
                    Texto principal
                </Text>
                <Text
                    variant="body"
                    style={{
                        color: tokens.text,
                        fontSize: typography.fontSize.sm,
                        opacity: 0.7,
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                    }}
                >
                    Texto secundario con menor énfasis.
                </Text>
            </div>
            <div
                style={{
                    width: "100%",
                    height: 36,
                    backgroundColor: tokens.surface,
                    borderRadius: radius.sm,
                    border: `1px solid ${tokens.border}`,
                    display: "flex",
                    alignItems: "center",
                    padding: `0 ${spacing[12]}px`,
                }}
            >
                <Text variant="body" style={{ color: tokens.text, fontSize: typography.fontSize.sm, opacity: 0.6 }}>
                    Campo de ejemplo
                </Text>
            </div>
            <button
                type="button"
                style={{
                    alignSelf: "flex-start",
                    padding: `${spacing[8]}px ${spacing[16]}px`,
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.medium,
                    backgroundColor: tokens.accent,
                    color: tokens.background,
                    border: "none",
                    borderRadius: radius.full,
                    cursor: "default",
                }}
            >
                Acento
            </button>
        </div>
    );
}

function SettingRowItem({
    label,
    rightContent,
    isSelected,
    onClick,
    textWhite,
}: {
    label: string;
    rightContent: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
    textWhite?: boolean;
}) {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const labelColor = isSelected ? semantic.text.default : semantic.text.muted;
    const chevronColor = semantic.text.muted;

    return (
        <button
            type="button"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: `${spacing[16]}px ${spacing[16]}px`,
                textAlign: "left",
                fontFamily: typography.fontFamily.primary,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                color: labelColor,
                backgroundColor: isSelected ? semantic.surface.selected ?? semantic.surface.hover : "transparent",
                border: "none",
                borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                borderRadius: 0,
                cursor: "pointer",
                transition: "background-color 0.2s, color 0.2s",
                gap: spacing[12],
            }}
        >
            <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
            <span style={{ display: "flex", alignItems: "center", gap: spacing[8], flexShrink: 0, color: textWhite ? "#ffffff" : "inherit" }}>
                {rightContent}
                <span style={{ color: textWhite ? "rgba(255,255,255,0.8)" : chevronColor, display: "flex" }} aria-hidden>
                    <Icon name="chevron-right" size={16} />
                </span>
            </span>
        </button>
    );
}

function SettingSection({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
}) {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div
            style={{
                paddingBottom: spacing[16],
                borderBottom: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
            }}
        >
            <div style={{ marginBottom: spacing[12] }}>
                <p
                    style={{
                        margin: 0,
                        fontFamily: typography.fontFamily.primary,
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.semibold,
                        color: semantic.text.default,
                    }}
                >
                    {title}
                </p>
                {description != null && (
                    <p
                        style={{
                            margin: 0,
                            marginTop: spacing[4],
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            color: semantic.text.muted,
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}

function ModoAyudaSwitch({
    value,
    onChange,
}: {
    value: boolean;
    onChange: (v: boolean) => void;
}) {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <ActionIcon
            name="alert-circle"
            size={18}
            color={value ? semantic.primary.default : semantic.text.disabled}
            hoverColor={value ? semantic.primary.default : undefined}
            onClick={() => onChange(!value)}
        />
    );
}

function ThemeGalleryCard({
    theme: galleryTheme,
    isActive,
    onSelect,
    onEdit,
    semantic,
}: {
    theme: GalleryTheme;
    isActive: boolean;
    onSelect: () => void;
    onEdit: () => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const [isHovered, setIsHovered] = useState(false);
    const previewColors = useMemo(() => {
        const dark = getThemeTokens(galleryTheme.id as "control" | "security", "dark");
        const light = getThemeTokens(galleryTheme.id as "control" | "security", "light");
        return [dark.background, dark.surface, dark.accent, light.background, light.accent];
    }, [galleryTheme.id]);

    return (
        <div
            role="article"
            aria-label={`Tema ${galleryTheme.name}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                backgroundColor: semantic.surface.card ?? semantic.surface.default,
                border: `1px solid ${semantic.border.default}`,
                borderRadius: radius.card,
                overflow: "hidden",
                boxShadow: isHovered ? "0 4px 16px rgba(0,0,0,0.14)" : "none",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
            }}
        >
            {/* Header: preview del tema */}
            <div
                style={{
                    height: 88,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${previewColors[0]} 0%, ${previewColors[1]} 30%, ${previewColors[2]} 70%, ${previewColors[3]} 100%)`,
                    borderTopLeftRadius: radius.card,
                    borderTopRightRadius: radius.card,
                    position: "relative",
                }}
            >
                {isActive && (
                    <span
                        style={{
                            position: "absolute",
                            top: spacing[8],
                            left: spacing[8],
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: `${spacing[4]}px ${spacing[8]}px`,
                            borderRadius: radius.md,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.xs,
                            fontWeight: typography.fontWeight.medium,
                            lineHeight: 1,
                            backgroundColor: semantic.success[300],
                            color: semantic.text.onSolid ?? semantic.text.active,
                        }}
                    >
                        Activo
                    </span>
                )}
            </div>

            {/* Body: nombre, descripción, leyenda, tags */}
            <div
                style={{
                    flex: 1,
                    minHeight: 0,
                    padding: spacing.lg,
                    paddingTop: spacing.md,
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[8],
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: spacing[8],
                    }}
                >
                    <Text variant="body" style={{ color: semantic.text.default, fontWeight: typography.fontWeight.semibold }}>
                        {galleryTheme.name}
                    </Text>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: spacing[2],
                            borderRadius: radius.sm,
                            cursor: "pointer",
                            flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = semantic.surface.hover ?? semantic.surface.default;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                        role="button"
                        aria-label="Opciones"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
                        }}
                    >
                        <ActionIcon name="more-horizontal" size={14} label="Opciones" />
                    </span>
                </div>
                <Text
                    variant="body"
                    style={{
                        color: semantic.text.muted,
                        fontSize: typography.fontSize.sm,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minWidth: 0,
                    }}
                >
                    {galleryTheme.description}
                </Text>

                {/* Información secundaria */}
                <Text variant="body" style={{ color: semantic.text.muted, fontSize: typography.fontSize.xs }}>
                    {galleryTheme.recommendedUse}
                </Text>

                {/* Tags */}
                {galleryTheme.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[4] }}>
                        {galleryTheme.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: `${spacing.xs}px ${spacing[12]}px`,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.xs,
                                    color: semantic.text.muted,
                                    backgroundColor: semantic.surface.hover || semantic.surface.default,
                                    border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                    borderRadius: radius.sm,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer: acciones fijas abajo */}
            <div
                style={{
                    flexShrink: 0,
                    paddingTop: spacing.md,
                    paddingBottom: spacing.lg,
                    paddingLeft: spacing.lg,
                    paddingRight: spacing[12],
                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: spacing[8],
                    }}
                >
                    <Button
                        variant="actionPrimary"
                        size="sm"
                        shape="panel"
                        onClick={onSelect}
                    >
                        Usar tema
                    </Button>
                    <button
                        type="button"
                        onClick={onEdit}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: spacing[4],
                            padding: `${spacing[4]}px ${spacing[8]}px`,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: semantic.text.muted,
                            background: "none",
                            border: "none",
                            borderRadius: radius.sm,
                            cursor: "pointer",
                            transition: "color 0.2s ease",
                            marginLeft: "auto",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = semantic.text.default;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = semantic.text.muted;
                        }}
                    >
                        Editar
                        <span style={{ display: "inline-flex", transform: "translateY(2px)" }}>
                            <Icon name="chevron-right" size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function AparienciaPage() {
    const { theme } = useTheme();
    const { currentPreset, setPreset } = useVisualPreset();
    const semantic = colors[theme].semantic;

    const [activeTab, setActiveTab] = useState("Base");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [modoAyuda, setModoAyuda] = useState(false);
    const [selectedBaseSub, setSelectedBaseSub] = useState<"tema" | "colores" | null>("tema");
    const initialExpandedByKey = (): Record<BaseTokenKey, boolean> =>
        Object.fromEntries(BASE_TOKEN_KEYS.map(({ key }) => [key, false])) as Record<BaseTokenKey, boolean>;
    const [expandedColores, setExpandedColores] = useState<{
        dark: Record<BaseTokenKey, boolean>;
        light: Record<BaseTokenKey, boolean>;
    }>({ dark: initialExpandedByKey(), light: initialExpandedByKey() });
    const handleTabChange = (value: string) => setActiveTab(value);
    const [editMode, setEditMode] = useState<ThemeEditMode>("dark");

    const canonicalDark = useMemo(
        () => getThemeTokens(currentPreset, "dark"),
        [currentPreset]
    );
    const canonicalLight = useMemo(
        () => getThemeTokens(currentPreset, "light"),
        [currentPreset]
    );

    const [localTokensByMode, setLocalTokensByMode] = useState<{
        dark: BaseTokens;
        light: BaseTokens;
    }>(() => ({
        dark: baseFromTokens(canonicalDark),
        light: baseFromTokens(canonicalLight),
    }));
    const currentTokens = localTokensByMode[editMode];
    const baseColorOptions = useMemo<Record<(typeof BASE_TOKEN_KEYS)[number]["key"], ColorSelectOption[]>>(() => {
        const controlPack = getThemeTokens("control", editMode);
        const securityPack = getThemeTokens("security", editMode);

        return {
            accent: ensureCurrentColorOption(
                currentTokens.accent,
                uniqueColorOptions([
                    { value: controlPack.accent, label: "● Verde" },
                    { value: securityPack.accent, label: "● Azul" },
                    { value: controlPack.warning, label: "● Amarillo" },
                    { value: controlPack.danger, label: "● Rojo" },
                    { value: controlPack.info, label: "● Celeste" },
                ])
            ),
            background: ensureCurrentColorOption(
                currentTokens.background,
                uniqueColorOptions([
                    { value: controlPack.background, label: "● Base" },
                    { value: securityPack.background, label: "● Profundo" },
                    { value: controlPack.surface, label: "● Superficie" },
                    { value: controlPack.border, label: "● Pizarra" },
                ])
            ),
            surface: ensureCurrentColorOption(
                currentTokens.surface,
                uniqueColorOptions([
                    { value: controlPack.surface, label: "● Surface" },
                    { value: securityPack.surface, label: "● Elevada" },
                    { value: controlPack.border, label: "● Gris" },
                    { value: controlPack.background, label: "● Base" },
                ])
            ),
            text: ensureCurrentColorOption(
                currentTokens.text,
                uniqueColorOptions([
                    { value: controlPack.text, label: "● Texto base" },
                    { value: securityPack.text, label: "● Texto claro" },
                    { value: controlPack.pending, label: "● Muted" },
                    { value: controlPack.buttonActionPrimaryBg, label: "● Contraste" },
                ])
            ),
        };
    }, [currentTokens, editMode]);

    const baseColorOptionsByMode = useMemo<
        Record<ThemeEditMode, Record<(typeof BASE_TOKEN_KEYS)[number]["key"], ColorSelectOption[]>>
    >(() => {
        const controlPack = getThemeTokens("control", "dark");
        const securityPack = getThemeTokens("security", "dark");
        const controlLight = getThemeTokens("control", "light");
        const securityLight = getThemeTokens("security", "light");

        const buildOptions = (tokens: BaseTokens, mode: ThemeEditMode) => {
            const control = mode === "dark" ? controlPack : controlLight;
            const security = mode === "dark" ? securityPack : securityLight;
            return {
                accent: ensureCurrentColorOption(
                    tokens.accent,
                    uniqueColorOptions([
                        { value: control.accent, label: "● Verde" },
                        { value: security.accent, label: "● Azul" },
                        { value: control.warning, label: "● Amarillo" },
                        { value: control.danger, label: "● Rojo" },
                        { value: control.info, label: "● Celeste" },
                    ])
                ),
                background: ensureCurrentColorOption(
                    tokens.background,
                    uniqueColorOptions([
                        { value: control.background, label: "● Base" },
                        { value: security.background, label: "● Profundo" },
                        { value: control.surface, label: "● Superficie" },
                        { value: control.border, label: "● Pizarra" },
                    ])
                ),
                surface: ensureCurrentColorOption(
                    tokens.surface,
                    uniqueColorOptions([
                        { value: control.surface, label: "● Surface" },
                        { value: security.surface, label: "● Elevada" },
                        { value: control.border, label: "● Gris" },
                        { value: control.background, label: "● Base" },
                    ])
                ),
                text: ensureCurrentColorOption(
                    tokens.text,
                    uniqueColorOptions([
                        { value: control.text, label: "● Texto base" },
                        { value: security.text, label: "● Texto claro" },
                        { value: control.pending, label: "● Muted" },
                        { value: control.buttonActionPrimaryBg, label: "● Contraste" },
                    ])
                ),
            };
        };

        return {
            dark: buildOptions(localTokensByMode.dark, "dark"),
            light: buildOptions(localTokensByMode.light, "light"),
        };
    }, [localTokensByMode]);

    const handleChange = (mode: ThemeEditMode, field: BaseTokenKey, value: string) => {
        setLocalTokensByMode((prev) => ({
            ...prev,
            [mode]: { ...prev[mode], [field]: value },
        }));
    };

    if (!DEV_UI_ENABLED || mockSession.role !== "OWNER") {
        return (
            <PageShell
                title="Apariencia"
                breadcrumbs={
                    <>
                        <span>Desarrollador</span>
                        <span>›</span>
                        <span style={{ color: semantic.text.active }}>Apariencia</span>
                    </>
                }
                showHeaderDivider={false}
            >
                <AccessDeniedState
                    title="Acceso restringido"
                    description="Esta pantalla solo está disponible para administradores en modo desarrollo."
                />
            </PageShell>
        );
    }

    // Layout tipo settings: PageShell > PanelCard (gran superficie) > grid (sidebar | content)
    return (
        <>
        <style>{`.apariencia-content-scroll::-webkit-scrollbar { display: none; }
.apariencia-content-scroll { scrollbar-width: none; -ms-overflow-style: none; }`}</style>
        <PageShell
            variant="fluid"
            title="Apariencia"
            breadcrumbs={
                <>
                    <span>Desarrollador</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Apariencia</span>
                </>
            }
            headerStyle={{ borderBottom: "none" }}
            style={{
                display: "flex",
                flexDirection: "column",
                height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                overflow: "hidden",
                minHeight: 0,
            }}
        >
            <PanelCard bodyStyle={{ padding: 0, display: "flex", flexDirection: "column", minHeight: 0 }}>
                <div
                    style={{
                        flex: 1,
                        display: "grid",
                        gridTemplateColumns: `${sidebarCollapsed ? SECONDARY_NAV_SIDEBAR_WIDTH.collapsed : SECONDARY_NAV_SIDEBAR_WIDTH.expanded}px minmax(0, 1fr)`,
                        gridTemplateRows: "1fr",
                        width: "100%",
                        minHeight: 0,
                        overflow: "hidden",
                        transition: "grid-template-columns 0.25s ease",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            minHeight: 0,
                            minWidth: 0,
                            overflowX: "hidden",
                            gridRow: "1 / -1",
                            borderRight: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                        }}
                    >
                        <SecondaryNavSidebar
                            groups={TABS_GROUPS}
                            value={activeTab}
                            onChange={handleTabChange}
                            collapsed={sidebarCollapsed}
                            onCollapsedChange={setSidebarCollapsed}
                            ariaLabel="Secciones de apariencia"
                        />
                    </div>
                <div
                    className="apariencia-content-scroll"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: activeTab === "Base" ? 0 : spacing[16],
                        minWidth: 0,
                        minHeight: 0,
                        flex: 1,
                        overflowY: "auto",
                        overflowX: activeTab === "Base" ? "auto" : "hidden",
                        padding: activeTab === "Base" ? 0 : spacing[16],
                    }}
                >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: spacing[16],
                                flexShrink: 0,
                                position: "relative",
                                ...(activeTab === "Base"
                                    ? {
                                          paddingTop: spacing[8],
                                          paddingBottom: 0,
                                          paddingLeft: 0,
                                          paddingRight: 0,
                                          width: "100%",
                                      }
                                    : {}),
                            }}
                        >
                            {activeTab === "Base" && (
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: 1,
                                        width: "100%",
                                        backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                    }}
                                    aria-hidden
                                />
                            )}
                            {activeTab === "Base" ? (
                                <div
                                    className="base-tabs-scroll"
                                    style={{
                                        overflowX: "auto",
                                        overflowY: "visible",
                                        flex: 1,
                                        minWidth: 0,
                                        display: "flex",
                                        width: "100%",
                                        paddingLeft: spacing[16],
                                        paddingRight: spacing[16],
                                    }}
                                >
                                    <BaseTabs
                                        value={(selectedBaseSub ?? "tema") as "tema" | "colores"}
                                        onChange={(v) => setSelectedBaseSub(v)}
                                        semantic={semantic}
                                    />
                                </div>
                            ) : (
                                <h2
                                    style={{
                                        margin: 0,
                                        fontFamily: typography.fontFamily.primary,
                                        fontSize: typography.fontSize.lg,
                                        fontWeight: typography.fontWeight.semibold,
                                        color: semantic.text.active,
                                    }}
                                >
                                    {activeTab}
                                </h2>
                            )}
                        </div>

                {/* Galería — grid de temas */}
                {activeTab === "Galería" && (
                    <section style={{ display: "flex", flexDirection: "column", gap: spacing[16], width: "100%" }}>
                        <div
                            style={{
                                height: 1,
                                width: "100%",
                                backgroundColor: semantic.border.subtle ?? semantic.border.default,
                            }}
                            aria-hidden
                        />
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 290px))",
                                gap: spacing.lg,
                                width: "100%",
                                justifyContent: "start",
                            }}
                            role="list"
                            aria-label="Galería de temas"
                        >
                            {GALLERY_THEMES.map((t) => (
                                <ThemeGalleryCard
                                    key={t.id}
                                    theme={t}
                                    isActive={currentPreset === t.id}
                                    onSelect={() => setPreset(t.id as "control" | "security")}
                                    onEdit={() => {
                                        setActiveTab("Base");
                                        setSelectedBaseSub("tema");
                                        setPreset(t.id as "control" | "security");
                                    }}
                                    semantic={semantic}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Base — tabs horizontales + contenido */}
                {activeTab === "Base" && (
                    <>
                    <style>{`
                        .base-section-scroll::-webkit-scrollbar { display: none; }
                        .base-section-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                        .base-colores-cards-scroll::-webkit-scrollbar { display: none; }
                        .base-colores-cards-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                        .base-tabs-scroll::-webkit-scrollbar { display: none; }
                        .base-tabs-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                        .base-tema-scroll::-webkit-scrollbar { display: none; }
                        .base-tema-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                    `}</style>
                    <div className="base-section-scroll"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            minHeight: 0,
                            flex: 1,
                            overflow: "auto",
                            paddingTop: spacing[12],
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                minHeight: 0,
                                paddingTop: spacing[16],
                                paddingBottom: spacing[24],
                            }}
                        >
                            {(selectedBaseSub ?? "tema") === "tema" && (
                                <div
                                    className="base-tema-scroll"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        flex: 1,
                                        minHeight: 0,
                                        minWidth: 0,
                                        overflowX: "auto",
                                        padding: spacing[16],
                                        boxSizing: "border-box",
                                        width: "100%",
                                    }}
                                >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: spacing[24],
                                        minWidth: 460,
                                        maxWidth: 500,
                                        flexShrink: 0,
                                        backgroundColor: semantic.surface.card ?? semantic.surface.default,
                                        borderRadius: radius.card,
                                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                        padding: spacing[24],
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: spacing[16],
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: typography.fontFamily.primary,
                                                fontSize: typography.fontSize.sm,
                                                fontWeight: typography.fontWeight.medium,
                                                color: semantic.text.default,
                                            }}
                                        >
                                            Tema
                                        </span>
                                        <PresetSelector />
                                    </div>
                                    <div
                                        style={{
                                            height: 1,
                                            width: "100%",
                                            backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                        }}
                                        aria-hidden
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: spacing[16],
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: typography.fontFamily.primary,
                                                fontSize: typography.fontSize.sm,
                                                fontWeight: typography.fontWeight.medium,
                                                color: semantic.text.default,
                                            }}
                                        >
                                            Aspecto
                                        </span>
                                        <ModeSegmentedControl
                                            value={editMode}
                                            onChange={setEditMode}
                                            semantic={semantic}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            height: 1,
                                            width: "100%",
                                            backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                        }}
                                        aria-hidden
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: spacing[12],
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: typography.fontFamily.primary,
                                                fontSize: typography.fontSize.sm,
                                                fontWeight: typography.fontWeight.medium,
                                                color: semantic.text.default,
                                            }}
                                        >
                                            Vista previa
                                        </span>
                                        <div style={{ minWidth: 280, width: "100%", maxWidth: 400 }}>
                                            <ThemePreview tokens={currentTokens} semantic={semantic} />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )}
                            {selectedBaseSub === "colores" && (
                                <div
                                    className="base-colores-cards-scroll"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        gap: spacing[24],
                                        width: "100%",
                                        flex: 1,
                                        minHeight: 0,
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        overflowX: "auto",
                                        minWidth: 0,
                                        padding: spacing[16],
                                        boxSizing: "border-box",
                                    }}
                                >
                                    <div key="dark" style={{ minWidth: 320, maxWidth: 420, flex: "1 1 320", minHeight: 0, display: "flex" }}>
                                        <BaseColorsCard
                                            mode="dark"
                                            tokens={localTokensByMode.dark}
                                            originalTokens={canonicalDark}
                                            options={baseColorOptionsByMode.dark}
                                            onChange={(k, v) => handleChange("dark", k, v)}
                                            expandedByKey={expandedColores.dark}
                                            onExpandToggle={(k) =>
                                                setExpandedColores((prev) => ({
                                                    ...prev,
                                                    dark: { ...prev.dark, [k]: !prev.dark[k] },
                                                }))
                                            }
                                            titleAction={<ModoAyudaSwitch value={modoAyuda} onChange={setModoAyuda} />}
                                            semantic={semantic}
                                        />
                                    </div>
                                    <div key="light" style={{ minWidth: 320, maxWidth: 420, flex: "1 1 320", minHeight: 0, display: "flex" }}>
                                        <BaseColorsCard
                                            mode="light"
                                            tokens={localTokensByMode.light}
                                            originalTokens={canonicalLight}
                                            options={baseColorOptionsByMode.light}
                                            onChange={(k, v) => handleChange("light", k, v)}
                                            expandedByKey={expandedColores.light}
                                            onExpandToggle={(k) =>
                                                setExpandedColores((prev) => ({
                                                    ...prev,
                                                    light: { ...prev.light, [k]: !prev.light[k] },
                                                }))
                                            }
                                        titleAction={<ModoAyudaSwitch value={modoAyuda} onChange={setModoAyuda} />}
                                        semantic={semantic}
                                    />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    </>
                )}

                {/* Estados — secciones apiladas, ancho proporcional */}
                {activeTab === "Estados" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24], width: "100%", maxWidth: CONTENT_MAX_WIDTH }}>
                        <SettingSection title="Tema" description="Preset activo para estados.">
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </SettingSection>
                        <SettingSection title="Colores de feedback" description="Success, warning, danger, info.">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                    gap: spacing[16],
                                    width: "100%",
                                }}
                            >
                                <Input label="Success" value="" placeholder="—" disabled />
                                <Input label="Warning" value="" placeholder="—" disabled />
                                <Input label="Danger" value="" placeholder="—" disabled />
                                <Input label="Info" value="" placeholder="—" disabled />
                            </div>
                        </SettingSection>
                    </div>
                )}

                {/* Componentes — secciones apiladas, ancho proporcional */}
                {activeTab === "Componentes" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24], width: "100%", maxWidth: CONTENT_MAX_WIDTH }}>
                        <SettingSection title="Tema" description="Preset activo para componentes.">
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </SettingSection>
                        <SettingSection title="Componentes" description="Aspecto por tipo de componente.">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                                    gap: spacing[12],
                                    width: "100%",
                                }}
                            >
                                {["Buttons", "Cards", "Inputs", "Tables", "Badges"].map((name) => (
                                    <div
                                        key={name}
                                        style={{
                                            padding: `${spacing[12]} ${spacing[16]}`,
                                            backgroundColor: semantic.surface.default,
                                            border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                            borderRadius: radius.sm,
                                            color: semantic.text.muted,
                                            fontSize: typography.fontSize.sm,
                                            fontWeight: typography.fontWeight.medium,
                                        }}
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </SettingSection>
                    </div>
                )}

                {/* Avanzado — secciones apiladas, ancho proporcional */}
                {activeTab === "Avanzado" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24], width: "100%", maxWidth: CONTENT_MAX_WIDTH }}>
                        <SettingSection title="Tema" description="Preset activo para ajustes avanzados.">
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </SettingSection>
                        <SettingSection title="Ajustes avanzados" description="Semantic tokens, radius, spacing, sombras.">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                    gap: spacing[16],
                                    width: "100%",
                                }}
                            >
                                <Input label="Semantic tokens" value="" placeholder="—" disabled />
                                <Input label="Radius" value="" placeholder="—" disabled />
                                <Input label="Spacing" value="" placeholder="—" disabled />
                                <Input label="Shadows" value="" placeholder="—" disabled />
                            </div>
                        </SettingSection>
                    </div>
                )}
                </div>
                </div>
            </PanelCard>
        </PageShell>
        </>
    );
}
