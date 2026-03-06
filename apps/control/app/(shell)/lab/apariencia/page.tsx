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

    const canonicalTokens = useMemo(
        () => getThemeTokens(currentPreset, theme as "dark" | "light"),
        [currentPreset, theme]
    );

    const [localTokens, setLocalTokens] = useState<BaseTokens>(() =>
        baseFromTokens(canonicalTokens)
    );
    const [originalTokens, setOriginalTokens] = useState<BaseTokens>(() =>
        baseFromTokens(canonicalTokens)
    );

    const handleChange = (field: keyof BaseTokens, value: string) => {
        setLocalTokens((prev) => ({ ...prev, [field]: value }));
    };

    const handleCancel = () => {
        setLocalTokens(originalTokens);
    };

    const handleSave = () => {
        const payload = { ...localTokens, preset: currentPreset, mode: theme };
        console.log("[Apariencia] Guardar (mock):", payload);
        setOriginalTokens(localTokens);
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
                {/* Sección Base — Identidad visual global */}
                {activeTab === "Base" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                        <Text
                            variant="body"
                            style={{
                                color: semantic.text.muted,
                                fontWeight: typography.fontWeight.semibold,
                                marginBottom: spacing[8],
                            }}
                        >
                            Identidad visual del tema
                        </Text>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: spacing[16],
                                maxWidth: 400,
                                padding: spacing[16],
                                backgroundColor: semantic.surface.default,
                                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                                borderRadius: radius.card,
                            }}
                        >
                            <Text variant="body" style={{ color: semantic.text.disabled }}>
                                Preset activo
                            </Text>
                            <Text
                                variant="body"
                                style={{
                                    color: semantic.text.default,
                                    fontWeight: typography.fontWeight.medium,
                                }}
                            >
                                {currentPreset === "control" ? "Control" : "Security"}
                            </Text>
                            <Text variant="body" style={{ color: semantic.text.disabled }}>
                                Modo
                            </Text>
                            <Text
                                variant="body"
                                style={{
                                    color: semantic.text.default,
                                    fontWeight: typography.fontWeight.medium,
                                }}
                            >
                                {theme === "dark" ? "Oscuro" : "Claro"}
                            </Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: spacing[16],
                                maxWidth: 400,
                            }}
                        >
                            <Input
                                label="Accent"
                                value={localTokens.accent}
                                onChange={(e) => handleChange("accent", e.target.value)}
                            />
                            <Input
                                label="Background"
                                value={localTokens.background}
                                onChange={(e) => handleChange("background", e.target.value)}
                            />
                            <Input
                                label="Surface"
                                value={localTokens.surface}
                                onChange={(e) => handleChange("surface", e.target.value)}
                            />
                            <Input
                                label="Text"
                                value={localTokens.text}
                                onChange={(e) => handleChange("text", e.target.value)}
                            />
                            <Input
                                label="Border"
                                value={localTokens.border}
                                onChange={(e) => handleChange("border", e.target.value)}
                            />
                        </div>
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
