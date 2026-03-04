"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { request } from "@core/connector/httpClient";
import { useToast } from "@core/toast/useToast";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";
import { useDeepLinkedList } from "@core/hooks/useDeepLinkedList";
import { DataTable } from "@ui/containers/DataTable";
import type { DataTableColumn } from "@ui/containers/DataTable/DataTable.types";
import { Badge } from "@ui/atoms/Badge";
import { Icon } from "@ui/atoms/Icon/Icon";
import { layout, spacing, typography, colors, radius, shadows } from "@tokens";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import ActionMenu from "@ui/molecules/ActionMenu/ActionMenu";
import { TableDropdown } from "@ui/containers/DataTable";
import { TableToolbar } from "@ui/containers/TableToolbar/TableToolbar";
import { SearchInput } from "@ui/atoms/SearchInput";
import { useTheme } from "@ui/context/ThemeProvider";
import { PermissionGate } from "@core/access/PermissionGate";
import { ListSkeleton } from "@ui/patterns/skeletons/ListSkeleton";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";
import type { DeviceDTO } from "@server/db/memory/devices.store";

// ─── Types ───────────────────────────────────────────────────────────────────

type DeviceStatus = "Activo" | "Mantenimiento" | "Inactivo" | "Bloqueado";

type DeviceRow = {
    id: string;
    nombre: string;
    tipo: string;
    departamento: string;
    usuario: string;
    status: DeviceStatus;
    ultimaActividad: string;
};

// ─── Tabs Config ─────────────────────────────────────────────────────────────

const STATUS_TABS: { label: string; filterValue: DeviceStatus | null; variant?: "success" | "warning" | "danger" | "neutral" }[] = [
    { label: "Todos", filterValue: null },
    { label: "Activos", filterValue: "Activo", variant: "success" },
    { label: "Mantenimiento", filterValue: "Mantenimiento", variant: "warning" },
    { label: "Inactivos", filterValue: "Inactivo", variant: "neutral" },
    { label: "Bloqueados", filterValue: "Bloqueado", variant: "danger" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function DevicesListClient() {
    const { showToast } = useToast();
    const router = useRouter();
    const searchParams = useSearchParams();
    const debugState = searchParams.get("debugState");
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const {
        activeTab,
        searchQuery,
        filters,
        setTab: handleTabChange,
        setSearch: handleSearchChange,
        setFilter,
    } = useDeepLinkedList({
        defaultTab: "Todos",
        defaultSearch: "",
        filtersConfig: {
            department: "Todos los departamentos"
        }
    });

    const selectedDepartment = filters.department;
    const handleDepartmentChange = (department: string) => setFilter("department", department);

    // ─── Data state ──────────────────────────────────────────────────────────
    const [rows, setRows] = useState<DeviceRow[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    // ─── Fetch ───────────────────────────────────────────────────────────────
    const fetchDevices = React.useCallback(async () => {
        try {
            const response = await request<DeviceDTO[]>("/devices?limit=100");

            if (!response.ok) {
                const toast = normalizedErrorToToast(response.error!);
                showToast(toast);
                
                setFetchError(response.error!.message);
                return;
            }

            const mapped: DeviceRow[] = (response.data ?? []).map((d) => ({
                id: d.id,
                nombre: d.nombre,
                tipo: d.tipo,
                departamento: d.departamento,
                usuario: d.usuario,
                status: d.status,
                ultimaActividad: d.ultimaActividad,
            }));
            setRows(mapped);
        } catch (error) {
            console.error('[DevicesListClient] Unexpected error:', error);
            setFetchError("Ocurrió un error inesperado al cargar los dispositivos.");
        } finally {
            setLoading(false);
        }
    }, [showToast]);

    useEffect(() => {
        fetchDevices();
    }, [fetchDevices]);

    // ── Debug overrides (?debugState=loading|error|empty) — dev only ──────────
    if (process.env.NODE_ENV !== 'production' && debugState) {
        if (debugState === "loading") return <ListSkeleton rows={7} columns={5} />;
        if (debugState === "error") return <ErrorState title="Error al cargar dispositivos" description="Simulated fetch error (debug)." />;
        if (debugState === "empty") return <EmptyState title="Sin dispositivos" description="No hay dispositivos registrados (debug)." icon="monitor" />;
    }

    // ─── Loading / error guards ───────────────────────────────────────────────
    if (loading) {
        return (
            <PageShell
                variant="fluid"
                title="Dispositivos"
                breadcrumbs={<><span>Panel</span><span>›</span><span>Dispositivos</span><span>›</span><span style={{ color: semantic.text.active }}>Lista</span></>}
                headerStyle={{ borderBottom: "none" }}
                style={{ display: "flex", flexDirection: "column", height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`, overflow: "hidden", minHeight: 0 }}
            >
                <ListSkeleton rows={7} columns={5} />
            </PageShell>
        );
    }

    if (fetchError) {
        return (
            <PageShell
                variant="fluid"
                title="Dispositivos"
                breadcrumbs={<><span>Panel</span><span>›</span><span>Dispositivos</span><span>›</span><span style={{ color: semantic.text.active }}>Lista</span></>}
            headerStyle={{ borderBottom: "none" }}
            style={{ display: "flex", flexDirection: "column", height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`, overflow: "hidden", minHeight: 0 }}
        >
                <ErrorState
                    title="Error al cargar dispositivos"
                    description={fetchError}
                    onRetry={() => {
                        setLoading(true);
                        setFetchError(null);
                        fetchDevices();
                    }}
                    retryLabel="Reintentar"
                />
            </PageShell>
        );
    }

    // ─── Filtering ────────────────────────────────────────────────────────────

    const activeTabConfig = STATUS_TABS.find(t => t.label === activeTab);

    const filteredRows = rows.filter(row => {
        // Tab filter
        if (activeTabConfig?.filterValue && row.status !== activeTabConfig.filterValue) return false;

        // Department filter
        if (selectedDepartment !== "Todos los departamentos" && row.departamento !== selectedDepartment) return false;

        return true;
    });

    // Tab counts (unfiltered by search, but filtered by department)
    const getTabCount = (filterValue: DeviceStatus | null) => {
        return rows.filter(row => {
            if (selectedDepartment !== "Todos los departamentos" && row.departamento !== selectedDepartment) return false;
            if (filterValue && row.status !== filterValue) return false;
            return true;
        }).length;
    };

    // Override for Acciones column only: LIGHT = muted/active, DARK = no override (internal defaults)
    const actionIconColor = theme === "light" ? (semantic.icon?.muted ?? semantic.text.muted) : undefined;
    const actionIconHoverColor = theme === "light" ? (semantic.icon?.active ?? semantic.text.active) : undefined;

    // Avatar icon (columna Dispositivo): DARK = text.default (igualar ActionIcon), LIGHT = muted
    const deviceAvatarIconColor =
        theme === "dark"
            ? semantic.text.default
            : (semantic.icon?.muted ?? semantic.text.muted);

    // ─── Columns ──────────────────────────────────────────────────────────────

    const columns: DataTableColumn<DeviceRow>[] = [
        {
            key: "nombre",
            header: "Dispositivo",
            sortable: true,
            sortValue: (row: DeviceRow) => row.nombre,
            filterable: true,
            filterValue: (row: DeviceRow) => `${row.nombre} ${row.tipo}`,
            cell: (row: DeviceRow) => (
                <div
                    style={{ display: "flex", alignItems: "center", gap: spacing[12], cursor: "pointer", userSelect: "none" }}
                    onClick={() => router.push(`/devices/${row.id}`)}
                >
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: radius.md,
                            backgroundColor: semantic.surface.hover,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: deviceAvatarIconColor,
                        }}
                    >
                        <Icon name="monitor" size={20} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, color: semantic.text.active, fontFamily: typography.fontFamily.primary }}>{row.nombre}</div>
                        <div style={{ fontSize: 12, color: semantic.text.muted, fontFamily: typography.fontFamily.primary }}>{row.tipo}</div>
                    </div>
                </div>
            ),
        },
        {
            key: "id",
            header: "ID",
            sortable: true,
            sortValue: (row: DeviceRow) => row.id,
            filterable: true,
            filterValue: (row: DeviceRow) => row.id,
            cell: (row: DeviceRow) => (
                <span style={{ fontFamily: "monospace", color: semantic.text.active }}>{row.id}</span>
            ),
        },
        {
            key: "usuario",
            header: "Usuario",
            filterable: true,
            filterValue: (row: DeviceRow) => row.usuario,
            cell: (row: DeviceRow) => (
                <span style={{ color: row.usuario ? semantic.text.muted : semantic.text.disabled, fontFamily: typography.fontFamily.primary }}>
                    {row.usuario || "Sin asignar"}
                </span>
            ),
            hideBelow: "md",
        },
        {
            key: "status",
            header: "Estado",
            filterable: true,
            filterValue: (row: DeviceRow) => row.status,
            cell: (row: DeviceRow) => {
                const variantMap: Record<string, "success" | "warning" | "error" | "neutral"> = {
                    Activo: "success",
                    Mantenimiento: "warning",
                    Inactivo: "neutral",
                    Bloqueado: "error",
                };
                return (
                    <Badge
                        label={row.status}
                        variant={variantMap[row.status]}
                        appearance="ghost"
                        interactive={false}
                        fontSize={typography.fontSize.sm}
                    />
                );
            },
        },
        {
            key: "ultimaActividad",
            header: "Última actividad",
            cell: (row: DeviceRow) => (
                <span style={{ color: semantic.text.muted, whiteSpace: "nowrap", fontFamily: typography.fontFamily.primary }}>{row.ultimaActividad}</span>
            ),
            hideBelow: "lg",
        },
        {
            key: "actions",
            header: "Acciones",
            align: "center",
            cell: (row: DeviceRow) => (
                <div style={{ display: "flex", gap: spacing[4], alignItems: "center", justifyContent: "center" }}>
                    <ActionIcon
                        name="monitor"
                        label="Ver dispositivo"
                        color={actionIconColor}
                        hoverColor={actionIconHoverColor}
                        onClick={() => router.push(`/devices/${row.id}`)}
                    />
                    <PermissionGate entity="devices" action="edit">
                        <ActionIcon
                            name="edit"
                            label="Editar dispositivo"
                            color={actionIconColor}
                            hoverColor={actionIconHoverColor}
                            onClick={() => console.log("Editar", row.id)}
                        />
                    </PermissionGate>
                    <PermissionGate entity="devices" action="delete">
                        <ActionMenu
                            trigger={<ActionIcon name="more-vertical" label="Más acciones" color={actionIconColor} hoverColor={actionIconHoverColor} />}
                            title="Acciones de dispositivo"
                            align="right"
                            sections={[
                                [
                                    { type: "item", label: "Reasignar usuario", icon: "user", onClick: () => console.log("Reasignar", row.id) },
                                    { type: "item", label: "Enviar a mantenimiento", icon: "settings", onClick: () => console.log("Mantenimiento", row.id) },
                                ],
                                [
                                    { type: "item", label: "Bloquear dispositivo", icon: "alert-circle", variant: "warning", onClick: () => console.log("Bloquear", row.id) },
                                    { type: "item", label: "Dar de baja", icon: "trash", variant: "danger", onClick: () => console.log("Dar de baja", row.id) },
                                ],
                            ]}
                        />
                    </PermissionGate>
                </div>
            ),
            hideBelow: "xl",
        },
    ];

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <PageShell
            variant="fluid"
            title="Dispositivos"
            breadcrumbs={
                <>
                    <span>Panel</span>
                    <span>›</span>
                    <span>Dispositivos</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Lista</span>
                </>
            }
            actions={
                <PermissionGate entity="devices" action="create">
                    <Button
                        size="sm"
                        variant="actionPrimary"
                        onClick={() => router.push("/devices/create")}
                        style={{ gap: spacing[8], borderRadius: radius.xl }}
                    >
                        <Icon name="plus" size={16} />
                        Agregar dispositivo
                    </Button>
                </PermissionGate>
            }
            headerStyle={{ borderBottom: "none" }}
            style={{ display: "flex", flexDirection: "column", height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`, overflow: "hidden", minHeight: 0 }}
        >
            <div
                data-table-card
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: semantic.surface.default,
                    borderRadius: radius.card,
                    boxShadow: "none",
                    overflow: "hidden",
                    flex: 1,
                    minHeight: 0,
                }}
            >
                <TableToolbar
                    tabs={STATUS_TABS.map(tab => ({
                        label: tab.label,
                        count: getTabCount(tab.filterValue),
                        variant: tab.variant,
                    }))}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    startContent={
                        <TableDropdown
                            value={selectedDepartment}
                            options={["Todos los departamentos", "Tecnología", "Finanzas", "Operaciones"]}
                            onChange={handleDepartmentChange}
                            align="left"
                        />
                    }
                    endContent={
                        <>
                            <SearchInput
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                style={{ width: 240 }}
                            />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, cursor: "pointer", opacity: 0.8, transform: "rotate(90deg)" }}>
                                <Icon name="more-horizontal" size={20} color={semantic.text.default} />
                            </div>
                        </>
                    }
                />

                <DataTable
                    ariaLabel="Tabla de dispositivos"
                    columns={columns}
                    rows={filteredRows}
                    filterQuery={searchQuery}
                    emptyMessage="No se encontraron dispositivos"
                />
            </div>
        </PageShell>
    );
}
