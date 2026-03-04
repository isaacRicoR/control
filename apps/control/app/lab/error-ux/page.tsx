"use client";

import React, { useState } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { Card } from "@ui/molecules/Card/Card";
import { spacing, typography, colors } from "@tokens";
import { normalizeConnectorError, NormalizedError } from "@core/connector/errorNormalizer";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";

/**
 * ErrorUXLab — Laboratorio para validar el manejo global de errores.
 */
export default function ErrorUXLab() {
    const [shouldCrash, setShouldCrash] = useState(false);
    const [simulatedApiError, setSimulatedApiError] = useState<NormalizedError | null>(null);

    if (shouldCrash) {
        throw new Error("BOOM! Crash UI simulado en el laboratorio.");
    }

    const simulateNetworkError = () => {
        try {
            // Simulamos un error de fetch
            throw new TypeError("Failed to fetch");
        } catch (e) {
            setSimulatedApiError(normalizeConnectorError(e));
        }
    };

    const simulateServerError = () => {
        setSimulatedApiError(normalizeConnectorError({
            code: "INTERNAL_SERVER_ERROR",
            message: "El servidor de base de datos no responde (Simulado)."
        }));
    };

    return (
        <PageShell title="Laboratorio de Errores (Error UX)">
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[24] }}>
                
                <section>
                    <h3 style={{ marginBottom: spacing[16], fontSize: typography.fontSize.lg }}>Escenario 1: Crash Crítico (UI)</h3>
                    <Card subtitle="Provoca un error de React que debería ser capturado por el GlobalErrorBoundary.">
                        <div style={{ padding: spacing[16] }}>
                            <Button variant="error" onClick={() => setShouldCrash(true)}>
                                Simular Crash UI (Explosión)
                            </Button>
                        </div>
                    </Card>
                </section>

                <section>
                    <h3 style={{ marginBottom: spacing[16], fontSize: typography.fontSize.lg }}>Escenario 2: Errores de API (Normalizados)</h3>
                    <Card subtitle="Simula errores de red o servidor normalizados por el connector.">
                        <div style={{ padding: spacing[16], display: "flex", gap: spacing[16] }}>
                            <Button variant="white" onClick={simulateNetworkError}>
                                Error de Red
                            </Button>
                            <Button variant="white" onClick={simulateServerError}>
                                Error de Servidor (500)
                            </Button>
                            <Button variant="white" onClick={() => setSimulatedApiError(null)}>
                                Limpiar
                            </Button>
                        </div>
                    </Card>
                </section>

                {simulatedApiError && (
                    <section style={{ marginTop: spacing[24] }}>
                        <h3 style={{ marginBottom: spacing[16], fontSize: typography.fontSize.lg }}>Resultado del Error Normalizado</h3>
                        <div style={{ border: `1px solid ${colors.dark.semantic.border.default}`, borderRadius: 8, overflow: "hidden" }}>
                            <ErrorState
                                title={simulatedApiError.code}
                                description={simulatedApiError.message}
                                onRetry={simulatedApiError.retryable ? () => alert("Reintentando...") : undefined}
                                retryLabel="Intentar de nuevo"
                                actionLabel="Ver documentación"
                                onAction={() => alert("Redirect a docs...")}
                            />
                        </div>
                        <pre style={{ marginTop: spacing[16], padding: spacing[16], background: "#1a1a1a", color: "#00ff99", borderRadius: 8, fontSize: 12 }}>
                            {JSON.stringify(simulatedApiError, null, 2)}
                        </pre>
                    </section>
                )}

            </div>
        </PageShell>
    );
}
