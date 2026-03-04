"use client";

import React, { useState } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { ConfirmDialog } from "@ui/molecules/ConfirmDialog/ConfirmDialog";
import { spacing, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export default function ConfirmDialogLabPage() {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const [isDefaultOpen, setIsDefaultOpen] = useState(false);
    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    return (
        <PageShell
            title="ConfirmDialog Lab (Unified Badge)"
            breadcrumbs={
                <>
                    <span>Lab</span>
                    <span>›</span>
                    <span>ConfirmDialog</span>
                </>
            }
        >
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[48] }}>

                <div style={{ padding: spacing[24], backgroundColor: `${semantic.primary.default}10`, borderRadius: 8, border: `1px solid ${semantic.border.default}` }}>
                    <h4 style={{ margin: 0, color: semantic.primary.default, marginBottom: 8 }}>Icon Badge Unificado</h4>
                    <p style={{ margin: 0, fontSize: 13, opacity: 0.8 }}>
                        Todos los tonos (info, warning, error, success) comparten la misma estructura circular con fondo traslúcido y borde suave.
                        <strong>Sin hardcode</strong>: Mapeo directo a tokens semánticos.
                    </p>
                </div>

                <section style={{ display: "flex", flexWrap: "wrap", gap: spacing[16] }}>

                    {/* Scenario: Info (Default) */}
                    <div>
                        <Button onClick={() => setIsDefaultOpen(true)}>
                            Contexto Info
                        </Button>
                        <ConfirmDialog
                            isOpen={isDefaultOpen}
                            tone="info"
                            icon="alert-circle"
                            title="Actualización disponible"
                            description="Hay una nueva versión del sistema lista para instalar. ¿Deseas aplicarla ahora?"
                            confirmLabel="Actualizar ahora"
                            onConfirm={() => setIsDefaultOpen(false)}
                            onCancel={() => setIsDefaultOpen(false)}
                        />
                    </div>

                    {/* Scenario: Warning */}
                    <div>
                        <Button variant="white" onClick={() => setIsWarningOpen(true)}>
                            Contexto Warning
                        </Button>
                        <ConfirmDialog
                            isOpen={isWarningOpen}
                            tone="warning"
                            icon="alert-circle"
                            title="Límite de almacenamiento"
                            description="Has alcanzado el 90% de tu capacidad de almacenamiento. Considera liberar espacio."
                            confirmLabel="Gestionar espacio"
                            onConfirm={() => setIsWarningOpen(false)}
                            onCancel={() => setIsWarningOpen(false)}
                        />
                    </div>

                    {/* Scenario: Success */}
                    <div>
                        <Button variant="white" onClick={() => setIsSuccessOpen(true)}>
                            Contexto Success
                        </Button>
                        <ConfirmDialog
                            isOpen={isSuccessOpen}
                            tone="success"
                            icon="check"
                            title="Cambios guardados"
                            description="La configuración se ha sincronizado correctamente con todos tus dispositivos."
                            confirmLabel="Entendido"
                            onConfirm={() => setIsSuccessOpen(false)}
                            onCancel={() => setIsSuccessOpen(false)}
                        />
                    </div>

                    {/* Scenario: Error */}
                    <div>
                        <Button variant="error" onClick={() => setIsErrorOpen(true)}>
                            Contexto Error
                        </Button>
                        <ConfirmDialog
                            isOpen={isErrorOpen}
                            tone="error"
                            icon="trash"
                            title="¿Eliminar usuario?"
                            description="Esta acción es irreversible y eliminará todos los datos asociados de forma permanente."
                            confirmLabel="Eliminar permanentemente"
                            onConfirm={() => setIsErrorOpen(false)}
                            onCancel={() => setIsErrorOpen(false)}
                        />
                    </div>

                </section>

            </div>
        </PageShell>
    );
}
