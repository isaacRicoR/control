"use client";

import { ToastProvider } from "@core/toast/ToastProvider";
import { ToastStack } from "@ui/containers/ToastStack/ToastStack";
import { useToast } from "@core/toast/useToast";
import { Button } from "@ui/atoms/Button/Button";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Section } from "@ui/containers/Section/Section";
import { spacing } from "@tokens";

const ToastsLabContent = () => {
    const { showToast } = useToast();

    return (
        <PageShell title="Toast System Lab">
            <Section title="Validation Controls">
                <div style={{ display: "flex", gap: spacing[12], flexWrap: "wrap", paddingBottom: spacing[24] }}>
                    <Button
                        variant="primary"
                        onClick={() => showToast({
                            type: "success",
                            title: "Éxito",
                            description: "La operación se completó correctamente."
                        })}
                    >
                        Mostrar éxito
                    </Button>

                    <Button
                        variant="white"
                        style={{ borderColor: "#ef4444", color: "#ef4444" }}
                        onClick={() => showToast({
                            type: "error",
                            title: "Error",
                            description: "Ocurrió un problema al procesar la solicitud.",
                            duration: 6000
                        })}
                    >
                        Mostrar error
                    </Button>

                    <Button
                        variant="white"
                        style={{ borderColor: "#f59e0b", color: "#f59e0b" }}
                        onClick={() => showToast({
                            type: "warning",
                            title: "Advertencia",
                            description: "Revisa la información antes de continuar."
                        })}
                    >
                        Mostrar advertencia
                    </Button>

                    <Button
                        variant="white"
                        style={{ borderColor: "#3b82f6", color: "#3b82f6" }}
                        onClick={() => showToast({
                            type: "info",
                            title: "Información",
                            description: "Este es un mensaje informativo."
                        })}
                    >
                        Mostrar información
                    </Button>
                </div>

                <p style={{ fontSize: "14px", color: "var(--semantic-text-disabled)" }}>
                    Check stacking, auto-dismiss (4s/6s), manual dismiss, and mobile responsive behavior.
                </p>
            </Section>
        </PageShell>
    );
};

export default function ToastsLabPage() {
    return (
        <ToastProvider>
            <ToastsLabContent />
            <ToastStack />
        </ToastProvider>
    );
}
