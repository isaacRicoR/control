"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { request } from "@core/connector/httpClient";
import { useToast } from "@core/toast/useToast";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { NotFoundState } from "@ui/containers/NotFoundState/NotFoundState";
import { DetailSkeleton } from "@ui/patterns/skeletons/DetailSkeleton";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { CardTabsHeader } from "@ui/molecules/CardTabsHeader";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import { PagePanelTemplate } from "../../_components/PagePanelTemplate";
import { Text } from "@ui/atoms/Text/Text";
import { Avatar } from "@ui/atoms/Avatar";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { spacing, colors, typography, radius, layout } from "@tokens";
import type { UserDTO } from "@server/db/memory/users.store";

interface UsersDetailClientProps {
    userId: string;
}

const ROLE_OPTIONS = [
    { value: "Administrador", label: "Administrador" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Usuario", label: "Usuario" }
];

const DEPT_OPTIONS = [
    { value: "Tecnología", label: "Tecnología" },
    { value: "Finanzas", label: "Finanzas" },
    { value: "Operaciones", label: "Operaciones" },
    { value: "Recursos Humanos", label: "Recursos Humanos" }
];

const STATUS_OPTIONS = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" },
    { value: "Pendiente", label: "Pendiente" }
];

const TABS = [
    { label: "Perfil", value: "Perfil" },
    { label: "Permisos", value: "Permisos" },
    { label: "Actividad", value: "Actividad" },
];

export const UsersDetailClient = ({ userId }: UsersDetailClientProps) => {
    const [activeTab, setActiveTab] = useState("Perfil");
    const router = useRouter();
    const { showToast } = useToast();
    const searchParams = useSearchParams();
    const debugState = searchParams.get("debugState");

    // Fetch state
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [notFound, setNotFound] = useState(false);

    // TODO(api): fetch user by id from real API endpoint
    useEffect(() => {
        let cancelled = false;

        const fetchUser = async () => {
            if (!userId) {
                setNotFound(true);
                setLoading(false);
                return;
            }

            try {
                const response = await request<UserDTO>(`/users/${userId}`);

                if (cancelled) return;

                if (response.error?.code === 'HTTP_404' || response.error?.code === 'NOT_FOUND') {
                    setNotFound(true);
                } else if (!response.ok) {
                    const toast = normalizedErrorToToast(response.error!);
                    showToast(toast);
                    
                    setFetchError(response.error!.message);
                } else if (response.data) {
                    const u = response.data;
                    const loaded = {
                        name: u.name,
                        email: u.email,
                        phone: u.phone ?? '',
                        role: u.role ?? '',
                        department: u.department ?? '',
                        status: u.status ?? 'Activo',
                        avatar: u.avatarUrl ?? null,
                        initialsColor: u.initialsColor,
                    };
                    setFormData(loaded);
                    setOriginalData(loaded); // snapshot for cancel
                } else {
                    // ok but no data — treat as not found
                    setNotFound(true);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error('[UsersDetailClient] Unexpected error:', error);
                    setFetchError('Ocurrió un error inesperado al cargar el usuario.');
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchUser();
        return () => { cancelled = true; };
    }, [userId]);

    // Form state — populated from API response after fetch
    const emptyForm = {
        name: "",
        email: "",
        phone: "",
        role: "",
        department: "",
        status: "Activo",
        avatar: null as string | null,
        initialsColor: "",
    };

    const [formData, setFormData] = useState(emptyForm);

    // Placeholder: footer aparece si isEditing o hasChanges
    const isEditing = true;
    const hasChanges = false;
    const showFooter = isEditing || hasChanges;

    // Store snapshot for cancel (updated when edit mode opens)
    const [originalData, setOriginalData] = useState(emptyForm);

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };



    const handleSave = () => {
        setOriginalData(formData);
        // TODO: setIsEditing(false) cuando se conecte el estado
    };

    const handleCancel = () => {
        setFormData(originalData);
        // TODO: setIsEditing(false) cuando se conecte el estado
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const semantic = colors.semantic;

    // ── Debug overrides (?debugState=loading|error|notfound) — dev only ──────
    if (process.env.NODE_ENV !== 'production' && debugState) {
        if (debugState === "loading") return <DetailSkeleton />;
        if (debugState === "error") return <ErrorState title="Error al cargar usuario" description="Simulated fetch error (debug)." />;
        if (debugState === "notfound") return <NotFoundState description="El usuario no existe (debug)." />;
    }

    // --- State guards ---
    if (loading) {
        return (
            <PageShell title="Cargando..." breadcrumbs={<><span>Panel</span><span>›</span><span>Usuarios</span></>} headerStyle={{ borderBottom: "none" }}>
                <DetailSkeleton />
            </PageShell>
        );
    }

    if (fetchError) {
        return (
            <PageShell title="Error" breadcrumbs={<><span>Panel</span><span>›</span><span>Usuarios</span></>} headerStyle={{ borderBottom: "none" }}>
                <ErrorState title="Error al cargar usuario" description={fetchError} onRetry={() => { setFetchError(null); setLoading(true); }} />
            </PageShell>
        );
    }

    if (notFound) {
        return (
            <PageShell title="No encontrado" breadcrumbs={<><span>Panel</span><span>›</span><span>Usuarios</span></>} headerStyle={{ borderBottom: "none" }}>
                <NotFoundState description="El usuario que buscas no existe o fue eliminado." />
            </PageShell>
        );
    }

    return (
        <PageShell
            title={formData.name}
            breadcrumbs={
                <>
                    <span>Panel</span>
                    <span>›</span>
                    <span>Usuarios</span>
                    <span>›</span>
                    <span>Listado</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Detalle</span>
                </>
            }

            headerStyle={{ borderBottom: "none" }}
            style={{
                display: "flex",
                flexDirection: "column",
                height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                overflow: "hidden",
                minHeight: 0,
            }}
        >
            <PagePanelTemplate
                header={
                    <CardTabsHeader
                        tabs={TABS}
                        value={activeTab}
                        onChange={setActiveTab}
                        tabsGap={spacing[16]}
                        leftSlot={
                            <div style={{ paddingLeft: spacing[12], paddingRight: spacing[8], paddingTop: spacing[12], paddingBottom: spacing[12], display: "flex", alignItems: "center" }}>
                                <ActionIcon
                                    name="chevron-left"
                                    label="Volver"
                                    onClick={() => router.back()}
                                />
                            </div>
                        }
                        ariaLabel="Secciones del perfil"
                    />
                }
                body={
                    <>
                        {
                            activeTab === "Perfil" ? (
                                <>
                                    <div style={{
                                        display: "flex",
                                        gap: spacing[32],
                                        flexWrap: "wrap",
                                    }}>

                                        {/* Avatar Column */}
                                        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
                                            <Avatar
                                                src={formData.avatar}
                                                name={formData.name}
                                                backgroundColor={formData.initialsColor}
                                                size={120}
                                            />
                                        </div>

                                        {/* Details Column */}
                                        <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: spacing[24] }}>
                                            {/* Header for Profile Content */}
                                            <Text
                                                variant="body"
                                            style={{
                                                fontSize: typography.fontSize.md,
                                                fontWeight: typography.fontWeight.semibold,
                                                color: semantic.text.muted
                                            }}
                                            >
                                                Información Personal
                                            </Text>

                                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: spacing[16], maxWidth: "400px", width: "100%" }}>
                                                <Input
                                                    label="Nombre Completo"
                                                    value={formData.name}
                                                    onChange={(e) => handleChange("name", e.target.value)}
                                                    readOnly={!isEditing}
                                                />
                                                <Input
                                                    label="Correo Electrónico"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange("email", e.target.value)}
                                                    readOnly={!isEditing}
                                                />
                                                <Input
                                                    label="Teléfono"
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange("phone", e.target.value)}
                                                    readOnly={!isEditing}
                                                />

                                                {isEditing ? (
                                                    <SelectSingle
                                                        label="Rol"
                                                        value={formData.role}
                                                        onChange={(val) => handleChange("role", val)}
                                                        options={ROLE_OPTIONS}
                                                    />
                                                ) : (
                                                    <Input
                                                        label="Rol"
                                                        value={ROLE_OPTIONS.find(o => o.value === formData.role)?.label || formData.role}
                                                        readOnly
                                                    />
                                                )}

                                                {isEditing ? (
                                                    <SelectSingle
                                                        label="Departamento"
                                                        value={formData.department}
                                                        onChange={(val) => handleChange("department", val)}
                                                        options={DEPT_OPTIONS}
                                                    />
                                                ) : (
                                                    <Input
                                                        label="Departamento"
                                                        value={DEPT_OPTIONS.find(o => o.value === formData.department)?.label || formData.department}
                                                        readOnly
                                                    />
                                                )}

                                                {isEditing ? (
                                                    <SelectSingle
                                                        label="Estado"
                                                        value={formData.status}
                                                        onChange={(val) => handleChange("status", val)}
                                                        options={STATUS_OPTIONS}
                                                    />
                                                ) : (
                                                    <Input
                                                        label="Estado"
                                                        value={STATUS_OPTIONS.find(o => o.value === formData.status)?.label || formData.status}
                                                        readOnly
                                                    />
                                                )}

                                                {/* Read-only field example */}
                                                {!isEditing && (
                                                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-y-1 lg:gap-y-0 items-center" style={{ padding: `${spacing[12]}px 0`, borderBottom: `1px solid ${semantic.border.default}` }}>
                                                        <Text variant="body" style={{ color: semantic.text.disabled }}>Miembro desde</Text>
                                                        <Text variant="body" style={{ color: semantic.text.default, fontWeight: typography.fontWeight.medium }}>01 Ene 2024</Text>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div style={{
                                    minHeight: 300,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <EmptyState
                                        title="Próximamente"
                                        description={`El módulo de ${activeTab.toLowerCase()} está en construcción.`}
                                        icon="info"
                                    />
                                </div>
                            )
                        }
                    </>
                }
                footer={showFooter ? (
                    <>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleCancel}
                            style={{
                                borderRadius: radius.card,
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="actionPrimary"
                            size="sm"
                            onClick={handleSave}
                            style={{
                                borderRadius: radius.card,
                            }}
                        >
                            Guardar
                        </Button>
                    </>
                ) : undefined}
            />
        </PageShell>
    );
};
