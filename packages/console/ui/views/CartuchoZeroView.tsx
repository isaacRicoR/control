import React from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { spacing, typography, colors } from "@tokens";
import { Button } from "@ui/atoms/Button/Button";
import Link from "next/link";

interface CartuchoZeroViewProps {
    hideBreadcrumbs?: boolean;
}

/**
 * CartuchoZeroView — Vista oficial cuando no hay módulos instalados.
 * 
 * Se muestra en el Panel principal (NASA Mode).
 */
export const CartuchoZeroView: React.FC<CartuchoZeroViewProps> = ({ hideBreadcrumbs = false }) => {
    return (
        <PageShell
            title="No hay módulos instalados"
            breadcrumbs={
                !hideBreadcrumbs ? (
                    <>
                        <span>Consola</span>
                        <span>›</span>
                        <span style={{ color: colors.dark.semantic.text.active }}>Sistema</span>
                    </>
                ) : undefined
            }
        >
            <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: spacing["4xl"] }}>
                <Card>
                    <div style={{ textAlign: "center", padding: spacing[48], display: "flex", flexDirection: "column", gap: spacing[24], alignItems: "center" }}>
                        <div style={{ fontSize: 48 }}>🔌</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
                            <h1 style={{ fontSize: typography.fontSize["2xl"], fontWeight: typography.fontWeight.bold, color: colors.dark.semantic.text.active }}>
                                No hay módulos instalados
                            </h1>
                            <p style={{ color: colors.dark.semantic.text.disabled, lineHeight: 1.5 }}>
                                Esta consola está operando sin cartuchos de negocio activos. 
                                Conecta un módulo para habilitar las funcionalidades de la plataforma.
                            </p>
                        </div>
                        
                        <div style={{ display: "flex", gap: spacing[16], marginTop: spacing[8] }}>
                            <Link href="/lab" style={{ textDecoration: "none" }}>
                                <Button variant="white">
                                    Abrir Lab
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </PageShell>
    );
};
