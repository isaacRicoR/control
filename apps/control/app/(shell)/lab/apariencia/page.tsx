"use client";

import React, { useState, useMemo } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { PanelCard } from "@ui/containers/PanelCard";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
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
                            onChange={handleTabChange}
                            collapsed={sidebarCollapsed}
                            onCollapsedChange={setSidebarCollapsed}
                            ariaLabel="Secciones de apariencia"
                        />
                    </div>
                <div
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
                    <div
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
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: 1,
                                backgroundColor: semantic.border.subtle ?? semantic.border.default,
                                width: "100%",
                                flexShrink: 0,
                                alignSelf: "stretch",
                            }}
                            aria-hidden
                        />
                        <div
                            style={{
                                flex: 1,
                                minHeight: 0,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
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
                                minWidth: 0,
                                padding: spacing[24],
                                overflowY: "auto",
                                overflowX: "hidden",
                            }}
                        >
                            {(selectedBaseSub ?? "tema") === "tema" && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: spacing[24],
                                        maxWidth: 500,
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
                                            <ThemePreview tokens={currentTokens} semantic={semantic} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedBaseSub === "colores" && (
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                        gap: spacing[24],
                                        maxWidth: 500,
                                        backgroundColor: semantic.surface.card ?? semantic.surface.default,
                                        borderRadius: radius.card,
                                        border: `1px solid ${semantic.border.subtle ?? semantic.border.default}`,
                                        padding: spacing[24],
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
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
                            )}
                        </div>
                        </div>
                    </div>
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
    );
}
