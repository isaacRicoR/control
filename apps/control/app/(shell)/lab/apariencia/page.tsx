"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { PanelCard } from "@ui/containers/PanelCard";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { FloatingSurface } from "@ui/atoms/FloatingSurface/FloatingSurface";
import { SecondaryNavSidebar, SECONDARY_NAV_SIDEBAR_WIDTH } from "@ui/molecules/SecondaryNavSidebar";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Icon } from "@ui/atoms/Icon/Icon";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, colors, typography, radius, layout } from "@tokens";
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

const BASE_TOKEN_KEYS: { key: keyof BaseTokens; label: string }[] = [
    { key: "accent", label: "Acento" },
    { key: "background", label: "Fondo" },
    { key: "surface", label: "Superficie" },
    { key: "text", label: "Texto" },
];

/** Dónde se usa cada token de color base en el sistema */
const COLOR_USAGE: Record<keyof BaseTokens, string[]> = {
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

function BaseColorSelector({
    value,
    options,
    onChange,
    semantic,
}: {
    value: string;
    options: ColorSelectOption[];
    onChange: (v: string) => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const initialHsv = useMemo(() => hexToHsv(value || "#000000"), []);
    const [hsv, setHsv] = useState(initialHsv);
    const [hexInput, setHexInput] = useState(() => {
        const v = value || "#000000";
        return v.startsWith("#") ? v.toUpperCase() : `#${v.toUpperCase()}`;
    });
    const displayLabel = options.find((o) => o.value.toLowerCase() === (value || "").toLowerCase())?.label ?? hexInput;

    useEffect(() => {
        if (isOpen && showPicker) {
            const h = hexToHsv(value || "#000000");
            setHsv(h);
            setHexInput((value || "#000000").toUpperCase().replace(/^#?/, value?.startsWith("#") ? value : `#${value}`));
        }
    }, [isOpen, showPicker, value]);

    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setShowPicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const applyHex = useCallback(
        (hex: string) => {
            const norm = normalizeHex(hex);
            if (isValidHex(hex)) {
                onChange(norm);
                setHsv(hexToHsv(norm));
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

    const handleHexBlur = () => {
        if (isValidHex(hexInput)) {
            const norm = normalizeHex(hexInput);
            onChange(norm);
            setHexInput(norm);
            setHsv(hexToHsv(norm));
        } else {
            setHexInput((value || "#000000").toUpperCase().replace(/^#?/, value?.startsWith("#") ? value : `#${value}`));
        }
    };

    const currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);

    return (
        <div ref={containerRef} style={{ position: "relative", minWidth: 120 }}>
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
                        borderRadius: radius.sm,
                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                        backgroundColor: value || semantic.surface.default,
                    }}
                />
                <span style={{ flex: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {displayLabel}
                </span>
                <Icon name="chevron-down" size={16} color={semantic.text.muted} />
            </div>

            {isOpen && (
                <FloatingSurface
                    style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        minWidth: 280,
                        zIndex: 1000,
                    }}
                >
                    <div style={{ padding: spacing[12] }}>
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                role="option"
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                    setShowPicker(false);
                                }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: spacing[8],
                                    padding: `${spacing[8]}px ${spacing[12]}px`,
                                    borderRadius: radius.sm,
                                    cursor: "pointer",
                                    backgroundColor: opt.value.toLowerCase() === (value || "").toLowerCase() ? semantic.surface.selected : "transparent",
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    color: semantic.text.default,
                                }}
                            >
                                <div
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: radius.sm,
                                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                        backgroundColor: opt.value,
                                    }}
                                />
                                {opt.label}
                            </div>
                        ))}

                        <div
                            role="button"
                            onClick={() => setShowPicker(!showPicker)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: spacing[8],
                                padding: `${spacing[8]}px ${spacing[12]}px`,
                                borderRadius: radius.sm,
                                cursor: "pointer",
                                marginTop: spacing[4],
                                borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                paddingTop: spacing[12],
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.medium,
                                color: semantic.primary.default ?? semantic.text.default,
                            }}
                        >
                            <Icon name="edit" size={16} color={semantic.primary.default} />
                            Personalizado
                        </div>

                        {showPicker && (
                            <div
                                style={{
                                    marginTop: spacing[12],
                                    paddingTop: spacing[12],
                                    borderTop: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                }}
                            >
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
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: spacing[12],
                                        marginTop: spacing[12],
                                    }}
                                >
                                    <div
                                        style={{
                                            width: spacing[40],
                                            height: spacing[40],
                                            borderRadius: radius.sm,
                                            border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                            backgroundColor: currentHex,
                                            flexShrink: 0,
                                        }}
                                    />
                                    <input
                                        type="text"
                                        value={hexInput}
                                        onChange={(e) => setHexInput(e.target.value)}
                                        onBlur={handleHexBlur}
                                        onKeyDown={(e) => e.key === "Enter" && handleHexBlur()}
                                        placeholder="#000000"
                                        style={{
                                            flex: 1,
                                            padding: `${spacing[8]}px ${spacing[12]}px`,
                                            fontFamily: typography.fontFamily.mono ?? typography.fontFamily.primary,
                                            fontSize: typography.fontSize.sm,
                                            color: semantic.text.default,
                                            backgroundColor: semantic.surface.hover ?? semantic.surface.default,
                                            border: `1px solid ${semantic.border.default}`,
                                            borderRadius: radius.sm,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </FloatingSurface>
            )}
        </div>
    );
}

function BaseColorExpandableRow({
    label,
    value,
    hex,
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
            <button
                type="button"
                onClick={onToggle}
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
                        borderRadius: radius.sm,
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
                            fontFamily: typography.fontFamily.mono ?? typography.fontFamily.primary,
                            fontSize: typography.fontSize.xs,
                            color: semantic.text.muted,
                            marginTop: spacing[4],
                        }}
                    >
                        {hex}
                    </span>
                </div>
                <div style={{ minWidth: 120, maxWidth: 180 }} onClick={(e) => e.stopPropagation()}>
                    <BaseColorSelector
                        options={options}
                        value={value}
                        onChange={(v) => onChange(v)}
                        semantic={semantic}
                    />
                </div>
                <span
                    style={{
                        display: "flex",
                        alignItems: "center",
                        transform: isExpanded ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                    }}
                >
                    <Icon name="chevron-down" size={16} color={semantic.text.muted} />
                </span>
            </button>
            {isExpanded && (
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
            )}
        </div>
    );
}

function BaseColorsCard({
    mode,
    tokens,
    options,
    onChange,
    expandedKey,
    onExpandToggle,
    semantic,
}: {
    mode: "dark" | "light";
    tokens: BaseTokens;
    options: Record<keyof BaseTokens, ColorSelectOption[]>;
    onChange: (field: keyof BaseTokens, value: string) => void;
    expandedKey: keyof BaseTokens | null;
    onExpandToggle: (key: keyof BaseTokens) => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    const title = mode === "dark" ? "Modo oscuro" : "Modo claro";
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                backgroundColor: semantic.surface.card ?? semantic.surface.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                padding: spacing[24],
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            }}
        >
            <h3
                style={{
                    margin: 0,
                    marginBottom: spacing[16],
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.semibold,
                    color: semantic.text.default,
                }}
            >
                {title}
            </h3>
            {BASE_TOKEN_KEYS.map(({ key, label }) => (
                <BaseColorExpandableRow
                    key={key}
                    label={label}
                    value={tokens[key]}
                    hex={tokens[key].toUpperCase()}
                    options={options[key]}
                    onChange={(v) => onChange(key, v)}
                    usage={COLOR_USAGE[key]}
                    isExpanded={expandedKey === key}
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
    semantic,
}: {
    theme: GalleryTheme;
    isActive: boolean;
    onSelect: () => void;
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
                            right: spacing[8],
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
                <Text variant="body" style={{ color: semantic.text.default, fontWeight: typography.fontWeight.semibold }}>
                    {galleryTheme.name}
                </Text>
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
                    padding: spacing.lg,
                    paddingTop: spacing.md,
                    borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                    <ActionIcon name="more-horizontal" size={16} label="Opciones" />
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
    const [expandedColoresKey, setExpandedColoresKey] = useState<string | null>(null);
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

    const handleChange = (mode: ThemeEditMode, field: keyof BaseTokens, value: string) => {
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
                        gap: spacing[16],
                        minWidth: 0,
                        minHeight: 0,
                        flex: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        padding: spacing[16],
                    }}
                >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: spacing[16],
                                flexShrink: 0,
                            }}
                        >
                            {activeTab === "Base" ? (
                                <h2
                                    style={{
                                        margin: 0,
                                        fontFamily: typography.fontFamily.primary,
                                        fontSize: typography.fontSize.lg,
                                        fontWeight: typography.fontWeight.semibold,
                                        color: semantic.text.active,
                                    }}
                                >
                                    Base
                                </h2>
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
                            <ModoAyudaSwitch value={modoAyuda} onChange={setModoAyuda} />
                        </div>

                {/* Galería — grid de temas */}
                {activeTab === "Galería" && (
                    <section style={{ display: "flex", flexDirection: "column", gap: spacing[16], width: "100%" }}>
                        <div
                            style={{
                                height: 1,
                                backgroundColor: semantic.border.subtle || semantic.border.default,
                                width: "100%",
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
                                    semantic={semantic}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Base — línea horizontal y vertical que llegan a los bordes */}
                {activeTab === "Base" && (
                    <>
                    <style>{`
                        .base-section-scroll::-webkit-scrollbar { display: none; }
                        .base-section-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                    `}</style>
                    <div className="base-section-scroll"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: `calc(100% + ${spacing[16] * 2}px)`,
                            marginLeft: -spacing[16],
                            marginRight: -spacing[16],
                            marginBottom: -spacing[16],
                            minHeight: 0,
                            flex: 1,
                            alignSelf: "stretch",
                            overflow: "auto",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                minWidth: 804,
                                flex: 1,
                                minHeight: 0,
                            }}
                        >
                        <div
                            style={{
                                height: 1,
                                width: "100%",
                                flexShrink: 0,
                                backgroundColor: semantic.border.subtle ?? semantic.border.default,
                            }}
                            aria-hidden
                        />
                        <div
                            style={{
                                flex: 1,
                                minHeight: 0,
                                overflow: "visible",
                            }}
                        >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                minHeight: "100%",
                                minWidth: 804,
                            }}
                        >
                        <div
                            style={{
                                width: 280,
                                minHeight: "100%",
                                flexShrink: 0,
                                borderRight: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: semantic.surface.default,
                            }}
                        >
                            <SettingRowItem
                                label="Tema"
                                textWhite
                                rightContent={
                                    <span style={{ color: "#ffffff", fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium }}>
                                        {currentPreset === "control" ? "Cóntrol" : currentPreset}
                                    </span>
                                }
                                isSelected={(selectedBaseSub ?? "tema") === "tema"}
                                onClick={() => setSelectedBaseSub("tema")}
                            />
                            <SettingRowItem
                                label="Colores base"
                                textWhite
                                rightContent={
                                    <span style={{ color: "#ffffff", fontSize: typography.fontSize.sm }}>
                                        {BASE_TOKEN_KEYS.length} colores
                                    </span>
                                }
                                isSelected={selectedBaseSub === "colores"}
                                onClick={() => setSelectedBaseSub("colores")}
                            />
                        </div>
                        <div
                            style={{
                                flex: 1,
                                minWidth: 460,
                                padding: spacing[24],
                                paddingRight: spacing[40],
                            }}
                        >
                            {(selectedBaseSub ?? "tema") === "tema" && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: spacing[24],
                                        minWidth: 460,
                                        maxWidth: 500,
                                        flexShrink: 0,
                                        marginRight: spacing[16],
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
                                            alignItems: "flex-start",
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
                                            Vista previa
                                        </span>
                                        <div style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "flex-end" }}>
                                            <div style={{ minWidth: 280, flexShrink: 0 }}>
                                                <ThemePreview tokens={currentTokens} semantic={semantic} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedBaseSub === "colores" && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: spacing[24],
                                        maxWidth: 560,
                                    }}
                                >
                                    <h3
                                        style={{
                                            margin: 0,
                                            fontFamily: typography.fontFamily.primary,
                                            fontSize: typography.fontSize.md,
                                            fontWeight: typography.fontWeight.semibold,
                                            color: semantic.text.default,
                                        }}
                                    >
                                        Colores base
                                    </h3>
                                    <BaseColorsCard
                                        mode="dark"
                                        tokens={localTokensByMode.dark}
                                        options={baseColorOptionsByMode.dark}
                                        onChange={(k, v) => handleChange("dark", k, v)}
                                        expandedKey={
                                            expandedColoresKey?.startsWith("dark-")
                                                ? (expandedColoresKey.replace("dark-", "") as keyof BaseTokens)
                                                : null
                                        }
                                        onExpandToggle={(k) =>
                                            setExpandedColoresKey((prev) => (prev === `dark-${k}` ? null : `dark-${k}`))
                                        }
                                        semantic={semantic}
                                    />
                                    <BaseColorsCard
                                        mode="light"
                                        tokens={localTokensByMode.light}
                                        options={baseColorOptionsByMode.light}
                                        onChange={(k, v) => handleChange("light", k, v)}
                                        expandedKey={
                                            expandedColoresKey?.startsWith("light-")
                                                ? (expandedColoresKey.replace("light-", "") as keyof BaseTokens)
                                                : null
                                        }
                                        onExpandToggle={(k) =>
                                            setExpandedColoresKey((prev) => (prev === `light-${k}` ? null : `light-${k}`))
                                        }
                                        semantic={semantic}
                                    />
                                </div>
                            )}
                        </div>
                        </div>
                        </div>
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
