"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { PanelCard } from "@ui/containers/PanelCard";
import { CardTabsHeader } from "@ui/molecules/CardTabsHeader";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Input } from "@ui/atoms/Input/Input";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, colors, typography, radius, layout } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { useVisualPreset } from "@core/visual/visualPresetStore";
import { getThemeTokens } from "@core/visual/themeRegistry";
import { useToast } from "@core/toast/useToast";
import { AccessDeniedState } from "@ui/containers/AccessDeniedState/AccessDeniedState";
import { DEV_UI_ENABLED } from "@core/flags/devFlags";
import { mockSession } from "@core/auth/mockSession";

const TABS = [
    { label: "Base", value: "Base" },
    { label: "Estados", value: "Estados" },
    { label: "Componentes", value: "Componentes" },
    { label: "Avanzado", value: "Avanzado" },
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

const BASE_TOKEN_KEYS: { key: keyof BaseTokens; label: string }[] = [
    { key: "accent", label: "Accent" },
    { key: "background", label: "Background" },
    { key: "surface", label: "Surface" },
    { key: "text", label: "Text" },
];

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
    onChange,
    semantic,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    semantic: (typeof colors.dark)["semantic"];
}) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: spacing.md,
                width: "100%",
            }}
        >
            <Text
                variant="body"
                style={{
                    color: semantic.text.muted,
                    fontWeight: typography.fontWeight.medium,
                    minWidth: 88,
                    flexShrink: 0,
                }}
            >
                {label}
            </Text>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ flex: 1, minWidth: 0 }}
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
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: spacing[8],
            }}
        >
            <span
                style={{
                    fontSize: typography.fontSize.sm,
                    color: semantic.text.muted,
                    fontFamily: typography.fontFamily.primary,
                }}
            >
                Modo ayuda
            </span>
            <button
                type="button"
                role="switch"
                aria-checked={value}
                onClick={() => onChange(!value)}
                style={{
                    width: 44,
                    height: 24,
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: value ? semantic.primary.default : semantic.border.default,
                    padding: 2,
                    transition: "background-color 0.2s ease",
                }}
            >
                <span
                    style={{
                        display: "block",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        transform: value ? "translateX(20px)" : "translateX(0)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </button>
            <span
                style={{
                    fontSize: typography.fontSize.sm,
                    color: semantic.text.muted,
                    fontFamily: typography.fontFamily.primary,
                }}
            >
                {value ? "ON" : "OFF"}
            </span>
        </div>
    );
}

export default function AparienciaPage() {
    const router = useRouter();
    const { theme } = useTheme();
    const { currentPreset } = useVisualPreset();
    const { showToast } = useToast();
    const semantic = colors[theme].semantic;

    const [activeTab, setActiveTab] = useState("Base");
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
    const [originalTokensByMode, setOriginalTokensByMode] = useState<{
        dark: BaseTokens;
        light: BaseTokens;
    }>(() => ({
        dark: baseFromTokens(canonicalDark),
        light: baseFromTokens(canonicalLight),
    }));

    const currentTokens = localTokensByMode[editMode];

    const handleChange = (mode: ThemeEditMode, field: keyof BaseTokens, value: string) => {
        setLocalTokensByMode((prev) => ({
            ...prev,
            [mode]: { ...prev[mode], [field]: value },
        }));
    };

    const handleCancel = () => {
        setLocalTokensByMode(originalTokensByMode);
    };

    const handleSave = () => {
        const payload = {
            dark: localTokensByMode.dark,
            light: localTokensByMode.light,
            preset: currentPreset,
        };
        console.log("[Apariencia] Guardar (mock):", payload);
        setOriginalTokensByMode(localTokensByMode);
        showToast({
            type: "success",
            title: "Guardado (mock)",
            description: "Los cambios se simularon correctamente.",
        });
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

    // Estructura según panel-layout.mdc: PageShell > PanelCard > Header, Tabs, Body (scroll), Footer (sticky)
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
            headerStyle={{ borderBottom: "none" }}
            style={{
                display: "flex",
                flexDirection: "column",
                height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                overflow: "hidden",
                minHeight: 0,
            }}
        >
            <PanelCard
                title="Apariencia"
                description="Configuración del tema visual del sistema"
                headerActions={<ModoAyudaSwitch value={modoAyuda} onChange={setModoAyuda} />}
                tabs={
                    <CardTabsHeader
                        tabs={TABS}
                        value={activeTab}
                        onChange={setActiveTab}
                        tabsGap={spacing[16]}
                        leftSlot={
                            <div
                                style={{
                                    paddingLeft: spacing[12],
                                    paddingRight: spacing[8],
                                    paddingTop: spacing[12],
                                    paddingBottom: spacing[12],
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <ActionIcon
                                    name="chevron-left"
                                    label="Volver"
                                    onClick={() => router.back()}
                                />
                            </div>
                        }
                        ariaLabel="Secciones de apariencia"
                    />
                }
                footer={{
                    primaryLabel: "Guardar cambios",
                    primaryOnClick: handleSave,
                    secondaryLabel: "Cancelar",
                    secondaryOnClick: handleCancel,
                }}
            >
                {/* Sección Base — Centro de control visual del tema */}
                {activeTab === "Base" && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: spacing.lg,
                            maxWidth: 480,
                            alignSelf: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        {/* 1. Identidad visual del tema */}
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                            }}
                        >
                            Identidad visual del tema
                        </Text>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing.lg,
                                width: "100%",
                                padding: spacing.lg,
                                backgroundColor: semantic.surface.default,
                                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                borderRadius: radius.card,
                            }}
                        >
                            <Text variant="body" style={{ color: semantic.text.muted }}>
                                Preset activo:{" "}
                                <span
                                    style={{
                                        color: semantic.text.default,
                                        fontWeight: typography.fontWeight.medium,
                                    }}
                                >
                                    {currentPreset === "control" ? "Control" : "Security"}
                                </span>
                            </Text>
                            <div>
                                <Text
                                    variant="body"
                                    style={{
                                        color: semantic.text.muted,
                                        marginBottom: spacing.sm,
                                        display: "block",
                                    }}
                                >
                                    Modo editado
                                </Text>
                                <ModeSegmentedControl
                                    value={editMode}
                                    onChange={setEditMode}
                                    semantic={semantic}
                                />
                            </div>
                        </div>

                        {/* 2. Tokens base */}
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                            }}
                        >
                            Tokens base
                        </Text>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing.lg,
                                width: "100%",
                            }}
                        >
                            {BASE_TOKEN_KEYS.map(({ key, label }) => (
                                <TokenRowWithSwatch
                                    key={key}
                                    label={label}
                                    value={currentTokens[key]}
                                    onChange={(v) => handleChange(editMode, key, v)}
                                    semantic={semantic}
                                />
                            ))}
                        </div>

                        {/* 3. Vista previa */}
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                            }}
                        >
                            Vista previa
                        </Text>

                        <ThemePreview tokens={currentTokens} semantic={semantic} />
                    </div>
                )}

                {/* Sección Estados — Colores de feedback */}
                {activeTab === "Estados" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                                marginBottom: spacing[8],
                            }}
                        >
                            Colores de feedback del sistema
                        </Text>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[16],
                                maxWidth: 400,
                            }}
                        >
                            <Input label="Success" value="" placeholder="—" disabled />
                            <Input label="Warning" value="" placeholder="—" disabled />
                            <Input label="Danger" value="" placeholder="—" disabled />
                            <Input label="Info" value="" placeholder="—" disabled />
                        </div>
                    </div>
                )}

                {/* Sección Componentes — Apariencia de componentes */}
                {activeTab === "Componentes" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                                marginBottom: spacing[8],
                            }}
                        >
                            Apariencia específica de componentes
                        </Text>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[12],
                            }}
                        >
                            {["Buttons", "Cards", "Inputs", "Tables", "Badges"].map((name) => (
                                <div
                                    key={name}
                                    style={{
                                        padding: spacing[16],
                                        backgroundColor: semantic.surface.default,
                                        border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                        borderRadius: radius.card,
                                        color: semantic.text.muted,
                                        fontSize: typography.fontSize.sm,
                                    }}
                                >
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Sección Avanzado — Ajustes avanzados */}
                {activeTab === "Avanzado" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                                marginBottom: spacing[8],
                            }}
                        >
                            Ajustes avanzados del sistema visual
                        </Text>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[16],
                                maxWidth: 400,
                            }}
                        >
                            <Input label="Semantic tokens" value="" placeholder="—" disabled />
                            <Input label="Radius" value="" placeholder="—" disabled />
                            <Input label="Spacing" value="" placeholder="—" disabled />
                            <Input label="Shadows" value="" placeholder="—" disabled />
                        </div>
                    </div>
                )}
            </PanelCard>
        </PageShell>
    );
}
