"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "@ui/context/ThemeProvider";
import { useDeepLinkedList } from "@core/hooks/useDeepLinkedList";
import { DataTable } from "@ui/containers/DataTable";
import type { DataTableColumn } from "@ui/containers/DataTable/DataTable.types";
import { Badge } from "@ui/atoms/Badge";
import { Icon } from "@ui/atoms/Icon/Icon";
import { layout, spacing, typography, colors, radius, shadows } from "@tokens";
import { TableDropdown } from "@ui/containers/DataTable";
import { TableToolbar } from "@ui/containers/TableToolbar/TableToolbar";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { DeviceStatusCell } from "@ui/molecules/DeviceStatusCell";
import { ModalShell } from "@ui/containers/ModalShell/ModalShell";
import { ActionIcon } from "@ui/atoms/ActionIcon/ActionIcon";
import ActionMenu from "@ui/molecules/ActionMenu/ActionMenu";
import { UserForm, UserFormData } from "../components/UserForm";
import { Avatar } from "@ui/atoms/Avatar";
import { SearchInput } from "@ui/atoms/SearchInput";
import { PermissionGate } from "@core/access/PermissionGate";
import type { UserDTO } from "@server/db/memory/users.store";
import { ListSkeleton } from "@ui/patterns/skeletons/ListSkeleton";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";

import { request } from "@core/connector/httpClient";
import { useToast } from "@core/toast/useToast";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";

type UserRow = {
    id: string; // ID para navegación
    initials: string;
    initialsColor: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    department: string;
    status: "Activo" | "Inactivo" | "Pendiente" | "Bloqueado";
    avatar: string | null;
    devices: string[];
    lastActivity: string;
};

export function UsersListClient() {
    const { showToast } = useToast();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const debugState = searchParams.get("debugState");
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
            role: "Todos los roles"
        }
    });

    const selectedRole = filters.role;
    const handleRoleChange = (role: string) => setFilter("role", role);

    const [rows, setRows] = useState<UserRow[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    // ─── Fetch ───────────────────────────────────────────────────────────────

    const STATUS_TABS: { label: string; filterValue: string | null; variant?: "success" | "warning" | "neutral" | "danger" }[] = [
        { label: "Todos", filterValue: null },
        { label: "Activos", filterValue: "Activo", variant: "success" },
        { label: "Pendientes", filterValue: "Pendiente", variant: "warning" },
        { label: "Inactivos", filterValue: "Inactivo", variant: "neutral" },
        { label: "Bloqueados", filterValue: "Bloqueado", variant: "danger" },
    ];



    const activeTabConfig = STATUS_TABS.find(t => t.label === activeTab);
    const filteredRows = rows.filter(row => {
        if (activeTabConfig?.filterValue && row.status !== activeTabConfig.filterValue) return false;
        if (selectedRole !== "Todos los roles" && row.role !== selectedRole) return false;
        return true;
    });

    const getTabCount = (filterValue: string | null) => {
        return rows.filter(row => {
            if (selectedRole !== "Todos los roles" && row.role !== selectedRole) return false;
            if (filterValue && row.status !== filterValue) return false;
            return true;
        }).length;
    };



    // Modal state
    const [selectedUser, setSelectedUser] = useState<UserRow | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleEdit = (row: UserRow) => {
        console.log('EDIT CLICK', row);
        setSelectedUser(row);
        setIsEditOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditOpen(false);
        setSelectedUser(null);
    };



    const handleSaveUser = (data: UserFormData) => {
        console.log("Saving user changes:", data);
        // Here we would normally make an API call
        handleCloseModal();
    };

    // Override for Acciones column only: LIGHT = muted/active, DARK = no override (internal defaults)
    const actionIconColor = theme === "light" ? (semantic.icon?.muted ?? semantic.text.muted) : undefined;
    const actionIconHoverColor = theme === "light" ? (semantic.icon?.active ?? semantic.text.active) : undefined;

    // Columns defined inside component to access handlers
    const columns: DataTableColumn<UserRow>[] = [
        {
            key: "name",
            header: "Nombre",
            sortable: true,
            sortValue: (row: UserRow) => row.name,
            filterable: true,
            filterValue: (row: UserRow) => `${String(row.name ?? "")} ${String(row.email ?? "")}`,
            cell: (row: UserRow) => (
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    <Avatar
                        src={row.avatar}
                        name={row.name}
                        backgroundColor={row.initialsColor}
                    />
                    <div>
                        <div style={{ fontWeight: 600, color: semantic.text.active, fontFamily: typography.fontFamily.primary }}>{row.name}</div>
                        <div style={{ fontSize: 12, color: semantic.text.muted, fontFamily: typography.fontFamily.primary }}>{row.email}</div>
                    </div>
                </div>
            ),
        },
        {
            key: "phone",
            header: "Teléfono",
            cell: (row: UserRow) => (
                <span style={{ fontFamily: "monospace", color: semantic.text.active }}>
                    {row.phone}
                </span>
            ),
        },
        {
            key: "role",
            header: "Rol",
            filterable: true,
            filterValue: (row: UserRow) => String(row.role ?? ""),
            cell: (row: UserRow) => <span style={{ color: semantic.text.muted, fontFamily: typography.fontFamily.primary }}>{row.role}</span>,
        },
        {
            key: "department",
            header: "Departamento",
            filterable: true,
            filterValue: (row: UserRow) => String(row.department ?? ""),
            cell: (row: UserRow) => (
                <span style={{ color: semantic.text.muted, fontFamily: typography.fontFamily.primary }}>{row.department}</span>
            ),
            hideBelow: "md",
        },
        {
            key: "status",
            header: "Estado",
            filterable: true,
            filterValue: (row: UserRow) => String(row.status ?? ""),
            cell: (row: UserRow) => {
                const variantMap: Record<string, "success" | "warning" | "neutral" | "error"> = {
                    Activo: "success",
                    Inactivo: "neutral",
                    Pendiente: "warning",
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
            key: "devices",
            header: "Dispositivos",
            cell: (row: UserRow) => (
                <DeviceStatusCell devices={row.devices} status={row.status} />
            ),
            hideBelow: "lg",
        },
        {
            key: "lastActivity",
            header: "Última actividad",
            cell: (row: UserRow) => (
                <span style={{ color: semantic.text.muted, whiteSpace: "nowrap", fontFamily: typography.fontFamily.primary }}>{row.lastActivity}</span>
            ),
            hideBelow: "xl",
        },
        {
            key: "actions",
            header: "Acciones",
            align: "center",
            cell: (row: UserRow) => (
                <div style={{ display: "flex", gap: spacing[4], alignItems: "center", justifyContent: "center" }}>
                    <ActionIcon
                        name="user"
                        label="Ver perfil"
                        color={actionIconColor}
                        hoverColor={actionIconHoverColor}
                        onClick={() => router.push(`/users/${row.id}`)}
                    />
                    {/* PermissionGate: oculta el botón de edición si el rol no tiene permiso. */}
                    <PermissionGate entity="users" action="edit">
                        <ActionIcon
                            name="edit"
                            label="Editar usuario"
                            color={actionIconColor}
                            hoverColor={actionIconHoverColor}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(row);
                            }}
                        />
                    </PermissionGate>
                    {/* PermissionGate: oculta el menú de acciones cuando el rol
                        no tiene permiso de delete sobre users. Sin lógica inline de rol. */}
                    <PermissionGate entity="users" action="delete">
                        <ActionMenu
                            trigger={<ActionIcon name="more-vertical" label="Más acciones" color={actionIconColor} hoverColor={actionIconHoverColor} />}
                            title="Acciones de usuario"
                            align="right"
                            sections={[
                                [
                                    {
                                        type: "item",
                                        label: "Reenviar invitación",
                                        icon: "file-text",
                                        onClick: () => console.log("Reenviar invitación", row.id)
                                    },
                                    {
                                        type: "item",
                                        label: "Restablecer contraseña",
                                        icon: "lock",
                                        onClick: () => console.log("Restablecer contraseña", row.id)
                                    }
                                ],
                                [
                                    {
                                        type: "item",
                                        label: "Bloquear usuario",
                                        icon: "alert-circle",
                                        variant: "warning",
                                        onClick: () => console.log("Bloquear usuario", row.id)
                                    },
                                    {
                                        type: "item",
                                        label: "Eliminar usuario",
                                        icon: "trash",
                                        variant: "danger",
                                        onClick: () => console.log("Eliminar usuario", row.id)
                                    }
                                ]
                            ]}
                        />
                    </PermissionGate>
                </div>
            ),
            hideBelow: "xl",
        },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setFetchError(null);
                
                const response = await request<UserDTO[]>('/users?page=1&limit=20');

                if (!response.ok) {
                    const toast = normalizedErrorToToast(response.error!);
                    showToast(toast);
                    
                    setFetchError(response.error!.message);
                    setRows([]);
                    return;
                }

                const users: UserDTO[] = response.data ?? [];

                const mappedRows: UserRow[] = users.map((item) => ({
                    id: item.id,
                    initials: item.initials,
                    initialsColor: item.initialsColor,
                    name: item.name,
                    email: item.email,
                    phone: item.phone,
                    role: item.role,
                    department: item.department,
                    status: item.status,
                    avatar: item.avatarUrl,
                    devices: item.devices,
                    lastActivity: item.lastActivity,
                }));

                setRows(mappedRows);
            } catch (error) {
                console.error('[UsersListClient] Unexpected error:', error);
                setFetchError('Ocurrió un error inesperado al procesar los datos.');
                setRows([]);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // ── Debug overrides (?debugState=loading|error|empty) — dev only ──────────
    if (process.env.NODE_ENV !== 'production' && debugState) {
        if (debugState === "loading") return <ListSkeleton rows={7} columns={5} />;
        if (debugState === "error") return <ErrorState title="Error al cargar usuarios" description="Simulated fetch error (debug)." />;
        if (debugState === "empty") return <EmptyState title="Sin resultados" description="No hay usuarios registrados (debug)." icon="users" />;
    }

    if (loading) {
        return (
            <PageShell
                variant="fluid"
                title="Usuarios"
                breadcrumbs={
                    <>
                        <span>Panel</span>
                        <span>›</span>
                        <span>Usuarios</span>
                        <span>›</span>
                        <span style={{ color: semantic.text.active }}>Lista</span>
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
                <ListSkeleton rows={7} columns={5} />
            </PageShell>
        );
    }

    if (fetchError) {
        return (
            <PageShell
                variant="fluid"
                title="Usuarios"
                breadcrumbs={
                    <>
                        <span>Panel</span>
                        <span>›</span>
                        <span>Usuarios</span>
                        <span>›</span>
                        <span style={{ color: semantic.text.active }}>Lista</span>
                    </>
                }
                headerStyle={{ borderBottom: "none" }}
            >
                <ErrorState
                    title="Error al cargar usuarios"
                    description={fetchError}
                    onRetry={() => { setFetchError(null); setLoading(true); }}
                />
            </PageShell>
        );
    }

    // Helper to split name for form
    const splitName = (fullName: string) => {
        const parts = fullName.split(" ");
        return {
            nombre: parts[0] || "",
            apellido: parts.slice(1).join(" ") || "",
        };
    };

    return (
        <>
            <PageShell
                variant="fluid"
                title="Usuarios"
                breadcrumbs={
                    <>
                        <span>Panel</span>
                        <span>›</span>
                        <span>Usuarios</span>
                        <span>›</span>
                        <span style={{ color: semantic.text.active }}>Lista</span>
                    </>
                }
                actions={
                    <PermissionGate entity="users" action="create">
                        <Button
                            size="sm"
                            variant="actionPrimary"
                            onClick={() => router.push("/users/create")}
                            style={{ gap: spacing[8], borderRadius: radius.xl }}
                        >
                            <Icon name="plus" size={16} />
                            Crear usuario
                        </Button>
                    </PermissionGate>
                }
                headerStyle={{
                    borderBottom: "none",
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: `calc(100vh - ${layout.appBarHeight}px - ${spacing[24] * 2}px)`,
                    overflow: "hidden",
                    minHeight: 0, // Critical for flex sizing
                }}
            >

                {/* Unified Card Container */}
                <div
                    data-table-card
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: semantic.surface.default,
                        border: `1px solid ${semantic.border.default}`,
                        borderRadius: radius.card,
                        boxShadow: shadows.card,
                        overflow: "hidden",
                        flex: 1,
                        minHeight: 0, // Crucial for nested flex scroll
                    }}
                >
                    {/* ─── Table Toolbar ─── */}
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
                                value={selectedRole}
                                options={["Todos los roles", "Administrador", "Usuario", "Supervisor"]}
                                onChange={handleRoleChange}
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

                    {/* DataTable / Empty state */}
                    {filteredRows.length === 0 ? (
                        <EmptyState
                            title="Sin resultados"
                            description={searchQuery ? "No hay usuarios que coincidan con tu búsqueda." : "Aún no hay usuarios registrados."}
                            icon="users"
                        />
                    ) : (
                        <DataTable
                            ariaLabel="Tabla de usuarios"
                            columns={columns}
                            rows={filteredRows}
                            filterQuery={searchQuery}
                        />
                    )}
                </div>
            </PageShell>

            <ModalShell
                isOpen={isEditOpen}
                onClose={handleCloseModal}
                title="Editar Usuario"
            >
                {selectedUser && (
                    <UserForm
                        mode="edit"
                        initialValues={{
                            ...splitName(selectedUser.name),
                            segundoApellido: "", // Not available in list data
                            email: selectedUser.email,
                            telefono: selectedUser.phone,
                            rol: selectedUser.role,
                            departamento: selectedUser.department,
                            rolPlataforma: "Usuario", // Default, not available in list data
                            estadoInicial: selectedUser.status,
                        }}
                        onCancel={handleCloseModal}
                        onSubmit={handleSaveUser}
                    />
                )}
            </ModalShell>
        </>
    );
}
