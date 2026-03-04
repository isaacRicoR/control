"use client";

import React from "react";
import { colors, spacing, typography } from "@tokens";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { AccessDeniedState } from "@ui/containers/AccessDeniedState/AccessDeniedState";
import { NotFoundState } from "@ui/containers/NotFoundState/NotFoundState";
import { ListSkeleton } from "@ui/patterns/skeletons/ListSkeleton";
import { DetailSkeleton } from "@ui/patterns/skeletons/DetailSkeleton";
import { Button } from "@ui/atoms/Button/Button";

function LabSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section style={{ marginBottom: spacing[48] }}>
            <h2
                style={{
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.medium,
                    color: colors.dark.semantic.text.disabled,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: spacing[16],
                    paddingBottom: spacing[8],
                    borderBottom: `1px solid ${colors.dark.semantic.border.default}`,
                }}
            >
                {title}
            </h2>
            <div
                style={{
                    border: `1px solid ${colors.dark.semantic.border.default}`,
                    borderRadius: 8,
                    overflow: "hidden",
                    backgroundColor: colors.dark.semantic.surface.default,
                }}
            >
                {children}
            </div>
        </section>
    );
}

export default function StatesLab() {
    return (
        <div
            style={{
                padding: spacing[48],
                backgroundColor: colors.dark.base.neutral[100],
                minHeight: "100vh",
                fontFamily: typography.fontFamily.primary,
            }}
        >
            <h1
                style={{
                    color: colors.dark.semantic.text.active,
                    fontSize: typography.fontSize.xl,
                    fontWeight: typography.fontWeight.semibold,
                    marginBottom: spacing[8],
                }}
            >
                State System Lab
            </h1>
            <p
                style={{
                    color: colors.dark.semantic.text.disabled,
                    marginBottom: spacing[48],
                    fontSize: typography.fontSize.md,
                }}
            >
                Validación visual de todos los estados del sistema.
            </p>

            <LabSection title="EmptyState (existente)">
                <EmptyState
                    title="Sin resultados"
                    description="No hay datos que coincidan con tu búsqueda."
                    icon="search"
                    action={<Button variant="primary">Limpiar filtros</Button>}
                />
            </LabSection>

            <LabSection title="ErrorState (existente)">
                <ErrorState
                    title="Error de conexión"
                    description="No se pudo cargar la información. Verifica tu conexión."
                    onRetry={() => console.log("retry")}
                />
            </LabSection>

            <LabSection title="AccessDeniedState — 403 (nuevo)">
                <AccessDeniedState
                    action={<Button variant="white">Volver</Button>}
                />
            </LabSection>

            <LabSection title="NotFoundState — 404 (nuevo)">
                <NotFoundState
                    action={<Button variant="white">Ir al inicio</Button>}
                />
            </LabSection>

            <LabSection title="ListSkeleton (nuevo)">
                <ListSkeleton rows={5} columns={4} />
            </LabSection>

            <LabSection title="DetailSkeleton (nuevo)">
                <DetailSkeleton />
            </LabSection>
        </div>
    );
}
