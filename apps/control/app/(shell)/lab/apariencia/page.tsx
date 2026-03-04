"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { CardTabsHeader } from "@ui/molecules/CardTabsHeader";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, colors, typography, radius } from "@tokens";
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

function baseFromTokens(t: { background: string; surface: string; border: string; text: string; accent: string }): BaseTokens {
    return {
        background: t.background,
        surface: t.surface,
        border: t.border,
        text: t.text,
        accent: t.accent,
    };
}

export default function AparienciaPage() {
    const router = useRouter();
    const { theme } = useTheme();
    const { currentPreset } = useVisualPreset();
    const { showToast } = useToast();
    const semantic = colors[theme].semantic;

    const [activeTab, setActiveTab] = useState("Base");

    const canonicalTokens = useMemo(
        () => getThemeTokens(currentPreset, theme as "dark" | "light"),
        [currentPreset, theme]
    );

    const [localTokens, setLocalTokens] = useState<BaseTokens>(() => baseFromTokens(canonicalTokens));
    const [originalTokens, setOriginalTokens] = useState<BaseTokens>(() => baseFromTokens(canonicalTokens));

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
        showToast({ type: "success", title: "Guardado (mock)", description: "Los cambios se simularon correctamente." });
    };

    // Admin-only: Dev UI habilitado y rol OWNER
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
            <Card
                variant="panel"
                footer={
                    <div
                        style={{
                            borderTop: `1px solid ${semantic.border.default}`,
                            padding: spacing[16],
                            display: "flex",
                            gap: spacing[12],
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleCancel}
                            style={{
                                borderRadius: radius.xl,
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="actionPrimary"
                            size="sm"
                            onClick={handleSave}
                            style={{
                                borderRadius: radius.xl,
                            }}
                        >
                            Guardar
                        </Button>
                    </div>
                }
            >
                <CardTabsHeader
                    tabs={TABS}
                    value={activeTab}
                    onChange={setActiveTab}
                    leftSlot={
                        <ActionIcon
                            name="chevron-left"
                            label="Volver"
                            onClick={() => router.back()}
                        />
                    }
                    ariaLabel="Secciones de apariencia"
                />

                {activeTab === "Base" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[24], padding: spacing[24] }}>
                        {/* Lectura: preset y mode */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: spacing[16],
                                maxWidth: 400,
                                padding: spacing[16],
                                backgroundColor: semantic.surface.default,
                                border: `1px solid ${semantic.border.default}`,
                                borderRadius: radius.md,
                            }}
                        >
                            <Text variant="body" style={{ color: semantic.text.disabled }}>
                                Preset activo
                            </Text>
                            <Text variant="body" style={{ color: semantic.text.default, fontWeight: typography.fontWeight.medium }}>
                                {currentPreset === "control" ? "Control" : "Security"}
                            </Text>
                            <Text variant="body" style={{ color: semantic.text.disabled }}>
                                Modo
                            </Text>
                            <Text variant="body" style={{ color: semantic.text.default, fontWeight: typography.fontWeight.medium }}>
                                {theme === "dark" ? "Oscuro" : "Claro"}
                            </Text>
                        </div>

                        {/* Inputs para 5 tokens */}
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing[16], maxWidth: 400 }}>
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
                                label="Border"
                                value={localTokens.border}
                                onChange={(e) => handleChange("border", e.target.value)}
                            />
                            <Input
                                label="Text"
                                value={localTokens.text}
                                onChange={(e) => handleChange("text", e.target.value)}
                            />
                            <Input
                                label="Accent"
                                value={localTokens.accent}
                                onChange={(e) => handleChange("accent", e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {activeTab === "Estados" && (
                    <div style={{ padding: spacing[24], minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text variant="body" style={{ color: semantic.text.disabled }}>
                            Próximamente: Estados
                        </Text>
                    </div>
                )}

                {activeTab === "Componentes" && (
                    <div style={{ padding: spacing[24], minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text variant="body" style={{ color: semantic.text.disabled }}>
                            Próximamente: Componentes
                        </Text>
                    </div>
                )}

                {activeTab === "Avanzado" && (
                    <div style={{ padding: spacing[24], minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Text variant="body" style={{ color: semantic.text.disabled }}>
                            Próximamente: Avanzado
                        </Text>
                    </div>
                )}
            </Card>
        </PageShell>
    );
}
