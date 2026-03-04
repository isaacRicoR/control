"use client";

import React from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { spacing, typography, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * FuturoView — Vista de cliente para funcionalidades futuras.
 */
export default function FuturoView() {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <PageShell 
            title="Futuro"
            breadcrumbs={
                <>
                    <span>Sistema</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Futuro</span>
                </>
            }
        >
            <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: spacing["4xl"] }}>
                <Card>
                    <div style={{ textAlign: "center", padding: spacing[48], display: "flex", flexDirection: "column", gap: spacing[24], alignItems: "center" }}>
                        <div style={{ fontSize: 48 }}>🚀</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
                            <h2 style={{ fontSize: typography.fontSize["2xl"], fontWeight: typography.fontWeight.bold, color: colors.dark.semantic.text.active }}>
                                Próximamente
                            </h2>
                            <p style={{ color: colors.dark.semantic.text.disabled, lineHeight: 1.5 }}>
                                Estamos trabajando en nuevas funcionalidades para el Centro de Control. 
                                Muy pronto podrás encontrar aquí más herramientas de gestión.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </PageShell>
    );
}
