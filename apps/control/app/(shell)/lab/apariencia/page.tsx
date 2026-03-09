"use client";

import React, { useState, useMemo } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { PanelCard } from "@ui/containers/PanelCard";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { SecondaryNavSidebar, SECONDARY_NAV_SIDEBAR_WIDTH } from "@ui/molecules/SecondaryNavSidebar";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, colors, typography, radius, layout } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { useVisualPreset } from "@core/visual/visualPresetStore";
import { getThemeTokens } from "@core/visual/themeRegistry";
import { AccessDeniedState } from "@ui/containers/AccessDeniedState/AccessDeniedState";
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
    { key: "accent", label: "Accent" },
    { key: "background", label: "Background" },
    { key: "surface", label: "Surface" },
    { key: "text", label: "Text" },
];

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
            aria-label="Modo editado"
            style={{
                display: "flex",
                flexWrap: "nowrap",
                borderRadius: radius.sm,
                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                backgroundColor: semantic.surface.hover || semantic.surface.default,
                padding: spacing[2],
                gap: spacing[2],
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
                            minWidth: 0,
                            padding: `${spacing[8]}px ${spacing[12]}px`,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.medium,
                            color: isActive ? semantic.text.active : semantic.text.muted,
                            backgroundColor: isActive ? semantic.surface.default : "transparent",
                            border: "none",
                            borderRadius: radius.sm,
                            cursor: "pointer",
                            transition: "color 0.2s, background-color 0.2s",
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
                gap: spacing.md,
                width: "100%",
            }}
        >
            <div
                style={{
                    backgroundColor: tokens.surface,
                    borderRadius: radius.md,
                    padding: spacing.md,
                    border: `1px solid ${tokens.border}`,
                }}
            >
                <Text
                    variant="body"
                    style={{
                        color: tokens.text,
                        fontWeight: typography.fontWeight.semibold,
                    }}
                >
                    Texto principal
                </Text>
                <Text
                    variant="body"
                    style={{
                        color: tokens.text,
                        fontSize: typography.fontSize.sm,
                        marginTop: spacing[4],
                        opacity: 0.75,
                    }}
                >
                    Texto secundario
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
                    borderRadius: radius.md,
                    cursor: "default",
                }}
            >
                Accent
            </button>
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
                            onChange={setActiveTab}
                            collapsed={sidebarCollapsed}
                            onCollapsedChange={setSidebarCollapsed}
                            ariaLabel="Secciones de apariencia"
                        />
                    </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: spacing[32],
                        minWidth: 0,
                        minHeight: 0,
                        overflowY: "auto",
                        padding: spacing[24],
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

                {/* Base — panel de configuración por secciones (sin card contenedora) */}
                {activeTab === "Base" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], width: "100%" }}>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Tema
                            </p>
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
                                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                                    gap: spacing[20],
                                    width: "100%",
                                }}
                            >
                                <div style={{ minWidth: 0 }}>
                                    <SelectSingle
                                        label="Preset activo"
                                        options={[...AVAILABLE_THEMES]}
                                        value={currentPreset}
                                        onChange={(v) => setPreset(v as "control" | "security")}
                                    />
                                </div>
                                <div style={{ minWidth: 0 }}>
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: spacing[8],
                                            fontFamily: typography.fontFamily.primary,
                                            fontSize: typography.fontSize.sm,
                                            fontWeight: typography.fontWeight.medium,
                                            color: semantic.text.muted,
                                        }}
                                    >
                                        Modo editado
                                    </label>
                                    <ModeSegmentedControl
                                        value={editMode}
                                        onChange={setEditMode}
                                        semantic={semantic}
                                    />
                                </div>
                            </div>
                        </section>

                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Colores base
                            </p>
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
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: spacing[20],
                                    width: "100%",
                                }}
                            >
                                {BASE_TOKEN_KEYS.map(({ key, label }) => (
                                    <TokenRowWithSwatch
                                        key={key}
                                        label={label}
                                        value={currentTokens[key]}
                                        options={baseColorOptions[key]}
                                        onChange={(v) => handleChange(editMode, key, v)}
                                        semantic={semantic}
                                    />
                                ))}
                            </div>
                        </section>

                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Vista previa
                            </p>
                            <div
                                style={{
                                    height: 1,
                                    backgroundColor: semantic.border.subtle || semantic.border.default,
                                    width: "100%",
                                }}
                                aria-hidden
                            />
                            <div style={{ width: "100%" }}>
                                <ThemePreview tokens={currentTokens} semantic={semantic} />
                            </div>
                        </section>
                    </div>
                )}

                {/* Estados — colores de feedback */}
                {activeTab === "Estados" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], width: "100%" }}>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Tema
                            </p>
                            <div
                                style={{
                                    height: 1,
                                    backgroundColor: semantic.border.subtle || semantic.border.default,
                                    width: "100%",
                                }}
                                aria-hidden
                            />
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </section>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Colores de feedback
                            </p>
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
                        </section>
                    </div>
                )}

                {/* Componentes — apariencia por componente */}
                {activeTab === "Componentes" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], width: "100%" }}>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Tema
                            </p>
                            <div
                                style={{
                                    height: 1,
                                    backgroundColor: semantic.border.subtle || semantic.border.default,
                                    width: "100%",
                                }}
                                aria-hidden
                            />
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </section>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Componentes
                            </p>
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
                        </section>
                    </div>
                )}

                {/* Avanzado — ajustes del sistema visual */}
                {activeTab === "Avanzado" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], width: "100%" }}>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Tema
                            </p>
                            <div
                                style={{
                                    height: 1,
                                    backgroundColor: semantic.border.subtle || semantic.border.default,
                                    width: "100%",
                                }}
                                aria-hidden
                            />
                            <div style={{ maxWidth: 320 }}>
                                <SelectSingle
                                    label="Preset activo"
                                    options={[...AVAILABLE_THEMES]}
                                    value={currentPreset}
                                    onChange={(v) => setPreset(v as "control" | "security")}
                                />
                            </div>
                        </section>
                        <section style={{ display: "flex", flexDirection: "column", gap: spacing[12], width: "100%" }}>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: typography.fontFamily.primary,
                                    fontSize: typography.fontSize.sm,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.muted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                Ajustes avanzados
                            </p>
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
                        </section>
                    </div>
                )}
                </div>
                </div>
            </PanelCard>
        </PageShell>
    );
}
