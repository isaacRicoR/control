"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { request } from "@core/connector/httpClient";
import { useToast } from "@core/toast/useToast";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { FormActions } from "@ui/patterns/form/FormActions";
import { Input } from "@ui/atoms/Input/Input";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { Badge } from "@ui/atoms/Badge";
import { Icon } from "@ui/atoms/Icon/Icon";
import { spacing, colors, typography, radius } from "@tokens";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { NotFoundState } from "@ui/containers/NotFoundState/NotFoundState";
import { DetailSkeleton } from "@ui/patterns/skeletons/DetailSkeleton";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";
import type { DeviceDTO } from "@server/db/memory/devices.store";

interface DevicesDetailClientProps {
    deviceId: string;
}

const ROLE_OPTIONS = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" },
    { value: "Mantenimiento", label: "En Mantenimiento" },
    { value: "Bloqueado", label: "Bloqueado" },
];

const DEPT_OPTIONS = [
    { value: "Tecnología", label: "Tecnología" },
    { value: "Finanzas", label: "Finanzas" },
    { value: "Operaciones", label: "Operaciones" },
];

const UBICACION_OPTIONS = [
    { value: "Oficina Central", label: "Oficina Central" },
    { value: "Remoto", label: "Remoto" },
    { value: "Almacén", label: "Almacén" },
];

const TABS = ["Info general", "Historial", "Configuración"];

const STATUS_VARIANT: Record<string, "success" | "warning" | "error" | "neutral"> = {
    Activo: "success",
    Mantenimiento: "warning",
    Inactivo: "neutral",
    Bloqueado: "error",
};

export function DevicesDetailClient({ deviceId }: DevicesDetailClientProps) {
    const { showToast } = useToast();
    const searchParams = useSearchParams();
    const debugState = searchParams.get("debugState");
    const semantic = colors.semantic;

    // ─── Tabs state ──────────────────────────────────────────────────────────
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useLayoutEffect(() => {
        const index = TABS.indexOf(activeTab);
        const el = tabsRef.current[index];
        if (el) {
            setUnderlineStyle({ left: el.offsetLeft, width: el.offsetWidth });
        }
    }, [activeTab]);

    // ─── Data state ──────────────────────────────────────────────────────────
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [notFound, setNotFound] = useState(false);

    // ─── Fetch ───────────────────────────────────────────────────────────────
    useEffect(() => {
        let cancelled = false;

        const fetchDevice = async () => {
            if (!deviceId) {
                setNotFound(true);
                setLoading(false);
                return;
            }

            try {
                const response = await request<DeviceDTO>(`/devices/${deviceId}`);

                if (cancelled) return;

                if (response.error?.code === "HTTP_404" || response.error?.code === "NOT_FOUND") {
                    setNotFound(true);
                } else if (!response.ok) {
                    const toast = normalizedErrorToToast(response.error!);
                    showToast(toast);
                    
                    setFetchError(response.error!.message);
                } else if (response.data) {
                    const d = response.data;
                    const loaded = {
                        nombre: d.nombre,
                        tipo: d.tipo,
                        departamento: d.departamento,
                        usuario: d.usuario,
                        status: d.status,
                        ultimaActividad: d.ultimaActividad,
                        ubicacion: d.ubicacion,
                        notas: d.notas,
                        imageUrl: d.imageUrl ?? null,
                    };
                    setFormData(loaded);
                    setOriginalData(loaded);
                } else {
                    setNotFound(true);
                }
            } catch (error) {
                if (!cancelled) {
                    console.error('[DevicesDetailClient] Unexpected error:', error);
                    setFetchError("Ocurrió un error inesperado al cargar el dispositivo.");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchDevice();
        return () => { cancelled = true; };
    }, [deviceId]);

    // ─── Form state ───────────────────────────────────────────────────────────
    const emptyForm = {
        nombre: "",
        tipo: "",
        departamento: "",
        usuario: "",
        status: "Activo",
        ultimaActividad: "",
        ubicacion: "",
        notas: "",
        imageUrl: null as string | null,
    };

    const [formData, setFormData] = useState(emptyForm);
    const [isEditing, setIsEditing] = useState(false);
    const [originalData, setOriginalData] = useState(emptyForm);

    const handleSave = () => {
        setOriginalData(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(originalData);
        setIsEditing(false);
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // ─── Styles ───────────────────────────────────────────────────────────────
    const tabBaseStyle: React.CSSProperties = {
        cursor: "pointer",
        padding: `${spacing[8]}px ${spacing[12]}px`,
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        position: "relative",
        transition: "color 0.2s ease",
    };

    // ── Debug overrides (?debugState=loading|error|notfound) — dev only ──────
    if (process.env.NODE_ENV !== 'production' && debugState) {
        if (debugState === "loading") return <DetailSkeleton />;
        if (debugState === "error") return <ErrorState title="Error al cargar dispositivo" description="Simulated fetch error (debug)." />;
        if (debugState === "notfound") return <NotFoundState description="El dispositivo no existe (debug)." />;
    }

    // ─── State guards ─────────────────────────────────────────────────────────
    if (loading) {
        return (
            <PageShell title="Cargando..." breadcrumbs={<><span>Panel</span><span>›</span><span>Dispositivos</span></>} headerStyle={{ borderBottom: "none" }}>
                <DetailSkeleton />
            </PageShell>
        );
    }

    if (fetchError) {
        return (
            <PageShell title="Error" breadcrumbs={<><span>Panel</span><span>›</span><span>Dispositivos</span></>} headerStyle={{ borderBottom: "none" }}>
                <ErrorState title="Error al cargar el dispositivo" description={fetchError} />
            </PageShell>
        );
    }

    if (notFound) {
        return (
            <PageShell title="No encontrado" breadcrumbs={<><span>Panel</span><span>›</span><span>Dispositivos</span></>} headerStyle={{ borderBottom: "none" }}>
                <NotFoundState description="El dispositivo que buscas no existe o fue dado de baja." />
            </PageShell>
        );
    }

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <PageShell
            title={formData.nombre}
            breadcrumbs={
                <>
                    <span>Panel</span>
                    <span>›</span>
                    <span>Dispositivos</span>
                    <span>›</span>
                    <span>Listado</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Detalle</span>
                </>
            }
            headerStyle={{ borderBottom: "none" }}
        >
            <Card variant="flat">
                <div style={{ borderBottom: `1px solid ${semantic.border.default}`, marginBottom: spacing[24], position: "relative" }}>
                    <div style={{ display: "flex", gap: spacing[8] }}>
                        {TABS.map((tab, index) => {
                            const isActive = activeTab === tab;
                            return (
                                <div
                                    key={tab}
                                    ref={(el) => { tabsRef.current[index] = el; }}
                                    onClick={() => setActiveTab(tab)}
                                    style={{ ...tabBaseStyle, color: isActive ? semantic.text.active : semantic.text.disabled }}
                                >
                                    {tab}
                                </div>
                            );
                        })}
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            bottom: -1,
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                            height: 2,
                            borderRadius: 2,
                            backgroundColor: semantic.text.active,
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    />
                </div>

                {activeTab === "Info general" ? (
                    <>
                        <div style={{ display: "flex", gap: spacing[32], flexWrap: "wrap", marginBottom: isEditing ? spacing[24] : 0 }}>
                            <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: spacing[12] }}>
                                {formData.imageUrl ? (
                                    <div style={{ position: "relative", width: 120, height: 120, borderRadius: radius.lg, overflow: "hidden", border: `1px solid ${semantic.border.default}` }}>
                                        <Image
                                            src={formData.imageUrl}
                                            alt={formData.nombre}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: radius.lg,
                                            border: `1px dashed ${semantic.border.active}`,
                                            backgroundColor: semantic.surface.hover,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: semantic.text.disabled,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon name="monitor" size={48} />
                                    </div>
                                )}

                                <span style={{ color: semantic.text.disabled, textAlign: "center", fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.primary }}>
                                    {formData.tipo || "Dispositivo"}
                                </span>

                                {formData.status && (
                                    <Badge
                                        label={formData.status}
                                        variant={STATUS_VARIANT[formData.status] ?? "neutral"}
                                        appearance="ghost"
                                        interactive={false}
                                    />
                                )}
                            </div>

                            <div style={{ flex: 1, minWidth: 240, display: "flex", flexDirection: "column", gap: spacing[16] }}>
                                <Input
                                    label="Nombre / Etiqueta"
                                    value={formData.nombre}
                                    disabled={!isEditing}
                                    onChange={(e) => handleChange("nombre", e.target.value)}
                                />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing[16] }}>
                                    <SelectSingle
                                        label="Departamento"
                                        value={formData.departamento}
                                        disabled={!isEditing}
                                        onChange={(v) => handleChange("departamento", v)}
                                        options={DEPT_OPTIONS}
                                    />
                                    <SelectSingle
                                        label="Estado"
                                        value={formData.status}
                                        disabled={!isEditing}
                                        onChange={(v) => handleChange("status", v)}
                                        options={ROLE_OPTIONS}
                                    />
                                </div>
                                <Input
                                    label="Usuario asignado"
                                    value={formData.usuario || "Sin asignar"}
                                    disabled={!isEditing}
                                    onChange={(e) => handleChange("usuario", e.target.value)}
                                />
                                <SelectSingle
                                    label="Ubicación"
                                    value={formData.ubicacion}
                                    disabled={!isEditing}
                                    onChange={(v) => handleChange("ubicacion", v)}
                                    options={UBICACION_OPTIONS}
                                />
                                <Input
                                    label="Notas"
                                    value={formData.notas}
                                    disabled={!isEditing}
                                    onChange={(e) => handleChange("notas", e.target.value)}
                                />
                            </div>
                        </div>

                        {isEditing ? (
                            <FormActions
                                mode="edit"
                                onCancel={handleCancel}
                                onSubmit={handleSave}
                            />
                        ) : (
                            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: spacing[16] }}>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    style={{
                                        background: "none",
                                        border: `1px solid ${semantic.border.default}`,
                                        borderRadius: radius.md,
                                        color: semantic.text.default,
                                        fontFamily: typography.fontFamily.primary,
                                        fontSize: typography.fontSize.sm,
                                        padding: `${spacing[8]}px ${spacing[16]}px`,
                                        cursor: "pointer",
                                    }}
                                >
                                    Editar
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div style={{ minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <EmptyState
                            title="Próximamente"
                            description={`El módulo de ${activeTab.toLowerCase()} está en construcción.`}
                            icon="info"
                        />
                    </div>
                )}
            </Card>
        </PageShell>
    );
}
