"use client";

import React from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { DevPanel } from "@ui/dev/DevPanel";
import { spacing, typography, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * SettingsView — Vista de cliente para el Centro de Control.
 */
export default function SettingsView() {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <PageShell 
            title="Apariencia"
            breadcrumbs={
                <>
                    <span>Sistema</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Apariencia</span>
                </>
            }
        >
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                <section>
                    <div style={{ marginBottom: spacing[16] }}>
                        <p style={{ 
                            fontSize: typography.fontSize.sm, 
                            color: colors.semantic.text.disabled 
                        }}>
                            Preset de consola
                        </p>
                    </div>
                    
                    <Card>
                        <div style={{ padding: spacing[24] }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div>
                                    <p style={{ 
                                        fontSize: typography.fontSize.sm, 
                                        fontWeight: typography.fontWeight.medium,
                                        color: colors.semantic.text.default 
                                    }}>
                                        Seleccionar preset visual
                                    </p>
                                    <p style={{ 
                                        fontSize: typography.fontSize.xs, 
                                        color: colors.semantic.text.disabled 
                                    }}>
                                        Cambia el estilo visual de la consola (Control / Security)
                                    </p>
                                </div>
                                <DevPanel />
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </PageShell>
    );
}
