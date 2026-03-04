"use client";

import React, { useState } from "react";
import { TableToolbar } from "@ui/containers/TableToolbar/TableToolbar";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Section } from "@ui/containers/Section/Section";
import { Button } from "@ui/atoms/Button/Button";
import { Icon } from "@ui/atoms/Icon/Icon";
import { TableDropdown } from "@ui/containers/DataTable/TableDropdown";
import { colors, spacing, radius } from "@tokens";

const ToolbarLabPage = () => {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("Todos");
    const [selectedRole, setSelectedRole] = useState("Todos los roles");

    const mockTabs = [
        { label: "Todos", count: 120 },
        { label: "Activos", count: 85, variant: "success" as const },
        { label: "Pendientes", count: 9, variant: "warning" as const },
        { label: "Bloqueados", count: 3, variant: "danger" as const },
        { label: "Archivados", count: 23, variant: "neutral" as const },
    ];

    return (
        <PageShell title="TableToolbar Lab — Evidencia de Patrón">

            <Section title="A) Escenario: Solo Búsqueda">
                <TableToolbar
                    showSearch
                    searchValue={search}
                    onSearchChange={setSearch}
                    searchPlaceholder="Buscar registros..."
                />
            </Section>

            <Section title="B) Escenario: Búsqueda + Tabs de Estado">
                <TableToolbar
                    showSearch
                    searchValue={search}
                    onSearchChange={setSearch}
                    statusTabs={mockTabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </Section>

            <Section title="C) Escenario: Búsqueda + Filtros Personalizados">
                <TableToolbar
                    showSearch
                    searchValue={search}
                    onSearchChange={setSearch}
                    filtersSlot={
                        <TableDropdown
                            value={selectedRole}
                            options={["Todos los roles", "Administrador", "Usuario", "Supervisor"]}
                            onChange={setSelectedRole}
                            align="left"
                        />
                    }
                />
            </Section>

            <Section title="D) Escenario: Búsqueda + Acciones Globales">
                <TableToolbar
                    showSearch
                    searchValue={search}
                    onSearchChange={setSearch}
                    actionsSlot={
                        <div style={{ display: "flex", gap: spacing[8] }}>
                            <Button size="sm" variant="secondary" style={{ gap: spacing[8] }}>
                                <Icon name="file-text" size={16} />
                                Exportar
                            </Button>
                            <Button size="sm" variant="white" style={{ gap: spacing[8] }}>
                                <Icon name="plus" size={16} />
                                Crear
                            </Button>
                        </div>
                    }
                />
            </Section>

            <Section title="E) Escenario: Combo Completo (Patrón Estándar)">
                <div
                    style={{
                        border: `1px solid ${colors.semantic.border.default}`,
                        borderRadius: radius.md,
                        overflow: "visible", // 👈 corregido
                    }}
                >
                    <TableToolbar
                        showSearch
                        searchValue={search}
                        onSearchChange={setSearch}
                        statusTabs={mockTabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        filtersSlot={
                            <TableDropdown
                                value={selectedRole}
                                options={["Todos los roles", "Administrador", "Usuario", "Supervisor"]}
                                onChange={setSelectedRole}
                                align="left"
                            />
                        }
                        actionsSlot={
                            <div style={{ display: "flex", gap: spacing[8] }}>
                                <Button size="sm" variant="secondary" style={{ gap: spacing[8] }}>
                                    <Icon name="file-text" size={16} />
                                    Exportar
                                </Button>
                                <Button size="sm" variant="white" style={{ gap: spacing[8] }}>
                                    <Icon name="plus" size={16} />
                                    Crear
                                </Button>
                            </div>
                        }
                    />
                </div>
            </Section>

        </PageShell>
    );
};

export default ToolbarLabPage;