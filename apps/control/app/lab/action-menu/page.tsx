"use client";

import React from "react";
import ActionMenu from "@ui/molecules/ActionMenu/ActionMenu";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { Button } from "@ui/atoms/Button/Button";
import { colors, spacing, typography } from "@tokens";

export default function ActionMenuLab() {
    return (
        <div style={{
            padding: spacing[48],
            backgroundColor: colors.dark.base.neutral[100],
            minHeight: "100vh",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1 style={{ marginBottom: spacing[32], fontFamily: typography.fontFamily.primary }}>ActionMenu Lab</h1>

            <div style={{
                display: "flex",
                gap: spacing[48],
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                maxWidth: 1000
            }}>

                {/* Case 1: Standard Right Align */}
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 style={{ marginBottom: spacing[16], color: colors.dark.semantic.text.default }}>Standard (Right)</h3>
                    <div style={{ padding: spacing[24], border: `1px solid ${colors.dark.semantic.border.default}`, borderRadius: 8 }}>
                        <ActionMenu
                            trigger={<ActionIcon name="more-vertical" label="Menu" />}
                            title="Acciones de usuario"
                            sections={[
                                [
                                    { type: "item", label: "Reenviar invitación", icon: "file-text" },
                                    { type: "item", label: "Restablecer contraseña", icon: "edit" }
                                ],
                                [
                                    { type: "item", label: "Bloquear usuario", icon: "alert-circle", variant: "warning" },
                                    { type: "item", label: "Eliminar usuario", icon: "trash", variant: "danger" },
                                    { type: "item", label: "Bloquear acceso", icon: "lock", variant: "warning" }
                                ]
                            ]}
                        />
                    </div>
                </section>

                {/* Case 2: Left Align */}
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 style={{ marginBottom: spacing[16], color: colors.dark.semantic.text.default }}>Left Align</h3>
                    <div style={{ padding: spacing[24], border: `1px solid ${colors.dark.semantic.border.default}`, borderRadius: 8 }}>
                        <ActionMenu
                            align="left"
                            trigger={<Button variant="primary">Open Menu</Button>}
                            title="Opciones"
                            items={[
                                { type: "item", label: "Descargar", icon: "file-text" },
                            ]}
                        />
                    </div>
                </section>

                {/* Case 3: Bottom Area */}
                <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 style={{ marginBottom: spacing[16], color: colors.dark.semantic.text.default }}>Bottom Area</h3>
                    <div style={{
                        padding: spacing[24],
                        border: `1px solid ${colors.dark.semantic.border.default}`,
                        borderRadius: 8,
                        height: 200,
                        display: "flex",
                        alignItems: "flex-end"
                    }}>
                        <ActionMenu
                            trigger={<ActionIcon name="settings" label="Config" />}
                            title="Configuración"
                            items={[
                                { type: "item", label: "General" },
                            ]}
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}
