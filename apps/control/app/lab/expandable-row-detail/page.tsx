"use client";

import React from "react";
import { ExpandableRowDetail } from "@ui/containers/ExpandableRowDetail";
import { colors, spacing, typography, radius } from "@tokens";
import { PageShell } from "@ui/containers/PageShell/PageShell";

export default function ExpandableRowDetailLab() {
    const { semantic } = colors.dark;

    return (
        <PageShell
            title="Lab: ExpandableRowDetail"
            breadcrumbs={
                <React.Fragment>
                    <span style={{ opacity: 0.7 }}>Inicio</span>
                    <span style={{ opacity: 0.5 }}>/</span>
                    <span style={{ opacity: 0.7 }}>Lab</span>
                    <span style={{ opacity: 0.5 }}>/</span>
                    <span>Expandable Row</span>
                </React.Fragment>
            }
        >
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], paddingBottom: spacing[48] }}>
                <div style={{ color: semantic.text.default, marginBottom: spacing[16] }}>
                    Componente aislado para mostrar detalles de filas.
                </div>

                {/* Caso 1: Grid de Key-Value */}
                <section>
                    <h2 style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, marginBottom: spacing[16], color: semantic.text.active }}>
                        Caso 1: Grid Key-Value
                    </h2>
                    <div style={{ border: `1px solid ${semantic.border.default}`, borderRadius: radius.md, overflow: "hidden" }}>
                        {/* Mock Row Header */}
                        <div style={{ padding: spacing[16], backgroundColor: semantic.surface.default, borderBottom: `1px solid ${semantic.border.default}`, color: semantic.text.default }}>
                            Fila Padre (Simulada)
                        </div>

                        {/* Componente en prueba - Currently null implementation */}
                        <ExpandableRowDetail />
                    </div>
                </section>

            </div>
        </PageShell>
    );
}
