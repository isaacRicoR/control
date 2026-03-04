"use client";

import { useState } from "react";
import { ModalShell } from "@ui/containers/ModalShell/ModalShell";
import { Button } from "@ui/atoms/Button/Button";
import { PageShell } from "@ui/containers/PageShell/PageShell"; // Assuming PageShell exists effectively
import { AppShell } from "@ui/layouts/AppShell/AppShell";
import { colors, spacing } from "@tokens";

export default function ModalShellLabPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <AppShell>
            <PageShell title="ModalShell Lab">
                <div style={{ padding: spacing[24] }}>
                    <p style={{ marginBottom: spacing[24], color: colors.dark.semantic.text.default }}>
                        Esta página valida la implementación aislada del componente <code>ModalShell</code>.
                    </p>

                    <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                        Abrir Modal
                    </Button>

                    <div style={{ marginTop: spacing[48], height: "150vh", background: "linear-gradient(to bottom, #1e293b, #0f172a)" }}>
                        <p style={{ padding: spacing[24], color: colors.dark.semantic.text.disabled }}>
                            Contenido largo para probar el bloqueo de scroll del body...
                        </p>
                    </div>

                    <ModalShell
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Título del Modal"
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                            <p style={{ color: colors.dark.semantic.text.default, margin: 0 }}>
                                Este es el contenido del modal. Verifica que:
                            </p>
                            <ul style={{ color: colors.dark.semantic.text.default, paddingLeft: spacing[24], margin: 0 }}>
                                <li>El fondo de la página tiene blur.</li>
                                <li>No se puede hacer scroll en la página principal.</li>
                                <li>Hacer clic fuera del modal lo cierra.</li>
                                <li>Presionar ESC lo cierra.</li>
                            </ul>

                            <div style={{ display: "flex", gap: spacing[12], marginTop: spacing[12] }}>
                                <Button variant="white" onClick={() => setIsModalOpen(false)}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                                    Confirmar Acción
                                </Button>
                            </div>
                        </div>
                    </ModalShell>
                </div>
            </PageShell>
        </AppShell>
    );
}
