"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SessionProvider } from "@core/auth/SessionProvider";
import { type Session, type UserRole } from "@core/auth/session.types";
import { can } from "@core/permissions/can";
import { type Entity, type Action } from "@core/permissions/permissionMatrix";
import { PermissionGate } from "@core/access/PermissionGate";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { Badge } from "@ui/atoms/Badge";
import { spacing, colors, radius, typography } from "@tokens";
import { type SemanticPalette } from "@tokens/colors";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * Lab: Permissions Check
 * 
 * Página para verificar rápidamente la Permission Matrix y el comportamiento
 * de PermissionGate con diferentes roles vía ?debugAuth.
 */
export default function PermissionsCheckPage() {
    return (
        <Suspense fallback={<div>Cargando Lab...</div>}>
            <PermissionsCheckContent />
        </Suspense>
    );
}

function PermissionsCheckContent() {
    const { theme } = useTheme();
    const searchParams = useSearchParams();
    const semantic = colors[theme].semantic;

    // ─── Sincronización Client-Side Debug Auth ───
    const debugAuthParam = searchParams.get("debugAuth");

    // Mapeo de query param a UserRole estricto
    const labSession = useMemo((): Session | null => {
        if (debugAuthParam === "none") return null;

        const roleMap: Record<string, UserRole> = {
            owner: 'OWNER',
            admin: 'ADMIN',
            member: 'MEMBER',
            viewer: 'VIEWER',
            guest: 'GUEST'
        };

        const role = roleMap[debugAuthParam || ''] || 'OWNER'; // Default OWNER si no hay param

        return {
            userId: "lab-user",
            role
        };
    }, [debugAuthParam]);

    // Envolvemos el contenido con un SessionProvider local para que use el rol de la URL
    return (
        <SessionProvider session={labSession || undefined}>
            <PermissionsCheckUI session={labSession} semantic={semantic} />
        </SessionProvider>
    );
}

function PermissionsCheckUI({ session, semantic }: { session: Session | null, semantic: SemanticPalette }) {
    const entities = ["users", "devices"] as const;
    const actions = ["view", "create", "edit", "delete"] as const;

    const boxStyle: React.CSSProperties = {
        padding: spacing[24],
        backgroundColor: semantic.surface.default,
        border: `1px solid ${semantic.border.default}`,
        borderRadius: radius.md,
        display: "flex",
        flexDirection: "column",
        gap: spacing[16],
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
        color: semantic.text.active,
        marginBottom: spacing[8],
    };

    return (
        <PageShell
            title="Permission Matrix Check"
            breadcrumbs={
                <>
                    <span>Lab</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Permissions Check</span>
                </>
            }
        >
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[32], maxWidth: 800 }}>

                {/* ─── 1. Estado de Sesión ─── */}
                <div style={boxStyle}>
                    <h2 style={sectionTitleStyle}>1. Sesión Actual (Debug Sync)</h2>
                    <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                        <span style={{ color: semantic.text.default }}>Rol Detectado:</span>
                        <Badge
                            label={session ? session.role : "NONE (No Session)"}
                            variant={session ? "info" : "neutral"}
                        />
                    </div>
                    <p style={{ fontSize: typography.fontSize.sm, color: semantic.text.disabled }}>
                        Cambiando <code>?debugAuth=guest</code> en la barra de direcciones, la UI debe reaccionar.
                    </p>
                </div>

                {/* ─── 2. Tabla de Permisos (Calculada con can()) ─── */}
                <div style={boxStyle}>
                    <h2 style={sectionTitleStyle}>2. Matriz Calculada (Helper can())</h2>
                    <table style={{ width: "100%", borderCollapse: "collapse", color: semantic.text.default }}>
                        <thead>
                            <tr style={{ borderBottom: `1px solid ${semantic.border.default}` }}>
                                <th style={{ textAlign: "left", padding: spacing[8] }}>Entidad</th>
                                {actions.map(a => <th key={a} style={{ padding: spacing[8] }}>{a}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {entities.map(entity => (
                                <tr key={entity} style={{ borderBottom: `1px solid ${semantic.border.default}` }}>
                                    <td style={{ padding: spacing[8], fontWeight: "bold" }}>{entity}</td>
                                    {actions.map(action => {
                                        // Si no hay sesión (none), can() devolverá false automáticamente
                                        const allowed = session ? can(session.role, entity as Entity, action as Action) : false;
                                        return (
                                            <td key={action} style={{ textAlign: "center", padding: spacing[8] }}>
                                                {allowed ? (
                                                    <span style={{ color: colors.dark.semantic.success.default }}>✅</span>
                                                ) : (
                                                    <span style={{ color: colors.dark.semantic.danger.default }}>❌</span>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ─── 3. Pruebas de UI (PermissionGate) ─── */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing[24] }}>

                    {/* Sección Users */}
                    <div style={boxStyle}>
                        <h2 style={sectionTitleStyle}>Users UI</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[12] }}>
                            <PermissionGate entity="users" action="create">
                                <Button size="sm" variant="actionPrimary">Create User</Button>
                            </PermissionGate>
                            <PermissionGate entity="users" action="edit">
                                <Button size="sm" variant="actionPrimary">Edit User</Button>
                            </PermissionGate>
                            <PermissionGate entity="users" action="delete">
                                <Button size="sm" variant="error">Delete User</Button>
                            </PermissionGate>
                        </div>
                        <p style={{ fontSize: typography.fontSize.xs, color: semantic.text.disabled }}>
                            Los botones usan <code>PermissionGate</code> internamente.
                        </p>
                    </div>

                    {/* Sección Devices */}
                    <div style={boxStyle}>
                        <h2 style={sectionTitleStyle}>Devices UI</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[12] }}>
                            <PermissionGate entity="devices" action="create">
                                <Button size="sm" variant="actionPrimary">Create Device</Button>
                            </PermissionGate>
                            <PermissionGate entity="devices" action="edit">
                                <Button size="sm" variant="actionPrimary">Edit Device</Button>
                            </PermissionGate>
                            <PermissionGate entity="devices" action="delete">
                                <Button size="sm" variant="error">Delete Device</Button>
                            </PermissionGate>
                        </div>
                        <p style={{ fontSize: typography.fontSize.xs, color: semantic.text.disabled }}>
                            Refleja permisos de <code>devices</code>.
                        </p>
                    </div>

                </div>

            </div>
        </PageShell>
    );
}
