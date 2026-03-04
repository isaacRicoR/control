"use client";

import React, { useState } from "react";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Button } from "@ui/atoms/Button/Button";
import { Input } from "@ui/atoms/Input/Input";
import { SelectSingle } from "@ui/molecules/SelectSingle/SelectSingle";
import { Textarea } from "@ui/atoms/Textarea/Textarea";
import { Text } from "@ui/atoms/Text/Text";
import { Icon } from "@ui/atoms/Icon/Icon";
import { Badge } from "@ui/atoms/Badge/Badge";
import { Avatar } from "@ui/atoms/Avatar";
import { Spinner } from "@ui/atoms/Spinner/Spinner";

import { Card } from "@ui/molecules/Card/Card";
import { ConfirmDialog } from "@ui/molecules/ConfirmDialog/ConfirmDialog";

import { Section } from "@ui/containers/Section/Section";
import { DataTable } from "@ui/containers/DataTable/DataTable";
import { TableToolbar } from "@ui/containers/TableToolbar/TableToolbar";
import { ModalShell } from "@ui/containers/ModalShell/ModalShell";
import { ToolbarActions } from "@ui/containers/TableToolbar/ToolbarActions";
import { EmptyState } from "@ui/containers/EmptyState/EmptyState";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";

import { FormLayout } from "@ui/patterns/form/FormLayout";
import { FormActions } from "@ui/patterns/form/FormActions";
import { ListSkeleton } from "@ui/patterns/skeletons/ListSkeleton";
import { FormField } from "@ui/patterns/FormField/FormField";

import { useToast } from "@core/toast/useToast";
import { spacing, colors, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * UI Kit Showroom — Matriz de Aprobación Visual e Inventario Real.
 */
export default function UIKitShowroom() {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const { showToast } = useToast();

    // States for interactive components
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const metadataLabelStyle: React.CSSProperties = {
        color: semantic.text.disabled,
        textTransform: "uppercase",
        fontSize: 10,
        letterSpacing: 0.5,
        display: "block",
        marginBottom: spacing[4],
        fontWeight: 600
    };

    const metadataPathStyle: React.CSSProperties = {
        fontSize: 10,
        color: semantic.text.disabled,
        fontFamily: "monospace",
        display: "block",
        marginBottom: spacing[8]
    };

    const StatusBadge = ({ status }: { status: "APPROVED" | "PENDING" }) => (
        <div style={{
            display: "inline-flex",
            padding: `${spacing[4]}px ${spacing[8]}px`,
            borderRadius: radius.sm,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            backgroundColor: status === "APPROVED" ? `${semantic.success.default}15` : `${semantic.warning.default}15`,
            color: status === "APPROVED" ? semantic.success.default : semantic.warning.emphasis || semantic.warning.default,
            border: `1px solid ${status === "APPROVED" ? `${semantic.success.default}30` : `${semantic.warning.default}30`}`,
            marginBottom: spacing[12]
        }}>
            {status}
        </div>
    );

    const UsageCollapsible = ({ paths }: { paths: string[] }) => (
        <details style={{ cursor: "pointer", marginTop: spacing[8] }}>
            <summary style={{ fontSize: 10, color: semantic.text.default, opacity: 0.6, listStyle: "none", fontWeight: 500 }}>
                ▶ Ver usos ({paths.length})
            </summary>
            <div style={{ marginTop: spacing[8], paddingLeft: spacing[12], borderLeft: `1px solid ${semantic.border.default}` }}>
                {paths.map((path, i) => (
                    <Text key={i} style={metadataPathStyle}>{path}</Text>
                ))}
            </div>
        </details>
    );

    // Mock Data for Table (Devices Real Context)
    type DeviceRow = { id: string; nombre: string; tipo: string; departamento: string; status: string; ultimaActividad: string; };
    const mockDevices: DeviceRow[] = [
        { id: "DEV-001", nombre: "Workstation Pro", tipo: "Desktop", departamento: "Tecnología", status: "Activo", ultimaActividad: "Hoy, 10:45 AM" },
        { id: "DEV-002", nombre: "MacBook Air M2", tipo: "Laptop", departamento: "Diseño", status: "Inactivo", ultimaActividad: "Ayer, 06:12 PM" },
    ];

    const deviceColumns = [
        {
            key: "nombre",
            header: "Dispositivo",
            cell: (row: DeviceRow) => (
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    <div style={{ width: 32, height: 32, borderRadius: radius.sm, backgroundColor: semantic.surface.hover, display: "flex", alignItems: "center", justifyContent: "center", color: semantic.text.default }}>
                        <Icon name="monitor" size={16} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, color: semantic.text.active, fontSize: 13 }}>{row.nombre}</div>
                        <div style={{ fontSize: 11, color: semantic.text.default }}>{row.tipo}</div>
                    </div>
                </div>
            ),
        },
        { key: "id", header: "ID", cell: (row: DeviceRow) => <span style={{ fontFamily: "monospace", color: semantic.text.active, fontSize: 12 }}>{row.id}</span> },
        { 
            key: "status", 
            header: "Estado", 
            cell: (row: DeviceRow) => (
                <Badge 
                    label={row.status} 
                    variant={row.status === "Activo" ? "success" : "neutral"} 
                    appearance="ghost"
                    fontSize={11}
                />
            ) 
        },
        { key: "ultimaActividad", header: "Última actividad", cell: (row: DeviceRow) => <span style={{ color: semantic.text.default, fontSize: 12 }}>{row.ultimaActividad}</span> },
    ];

    return (
        <PageShell
            title="Matriz de Aprobación Visual"
            breadcrumbs={
                <>
                    <Text>Lab</Text>
                    <Text>›</Text>
                    <Text style={{ color: semantic.text.active }}>Visual Approval</Text>
                </>
            }
        >
            <div style={{ maxWidth: 1400, margin: "0 auto", paddingBottom: spacing[64] }}>

                {/* REAL VIEW SECTION - FULL WIDTH DATATABLE */}
                <Section title="Vista Real: DataTable (Contexto Completo)">
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        backgroundColor: semantic.surface.default, 
                        border: `1px solid ${semantic.border.default}`, 
                        borderRadius: radius.card, 
                        overflow: "hidden",
                        width: "100%"
                    }}>
                        <TableToolbar 
                            tabs={[
                                { label: "Todos", count: 2 },
                                { label: "Activos", count: 1, variant: "success" },
                                { label: "Inactivos", count: 1, variant: "neutral" }
                            ]}
                            activeTab="Todos"
                            showSearch
                            searchPlaceholder="Buscar dispositivo..."
                            actionsSlot={
                                <div style={{ display: "flex", gap: spacing[12], alignItems: "center" }}>
                                    <Button variant="actionPrimary" size="sm" style={{ borderRadius: radius.xl, gap: spacing[8] }}>
                                        <Icon name="plus" size={14} />
                                        Agregar dispositivo
                                    </Button>
                                    <ToolbarActions />
                                </div>
                            }
                        />
                        <DataTable 
                            ariaLabel="Tabla de dispositivos"
                            columns={deviceColumns} 
                            rows={mockDevices} 
                            getRowKey={(r) => r.id}
                        />
                    </div>
                    <div style={{ marginTop: spacing[16] }}>
                        <StatusBadge status="APPROVED" />
                        <UsageCollapsible paths={["app/(shell)/devices/list/DevicesListClient.tsx", "app/(shell)/users/list/UsersListClient.tsx"]} />
                    </div>
                </Section>

                {/* OVERLAYS & DIALOGS REAL CASES */}
                <Section title="Overlays & Diálogos (Casos Reales)">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: spacing[24] }}>
                        
                        {/* ModalShell Case */}
                        <Card title="ModalShell (Edición)" subtitle="Contenedor de formularios rápidos">
                            <div style={{ padding: spacing[4] }}>
                                <StatusBadge status="APPROVED" />
                                <Text variant="body" style={{ display: "block", marginBottom: spacing[16], fontSize: 13 }}>
                                    Utilizado para el formulario de edición de usuarios en la lista principal.
                                </Text>
                                <Button variant="white" size="sm" onClick={() => setIsModalOpen(true)}>Abrir: Editar Usuario</Button>
                                <UsageCollapsible paths={["app/(shell)/users/list/UsersListClient.tsx"]} />
                            </div>
                        </Card>

                        {/* ConfirmDialog Case */}
                        <Card title="ConfirmDialog" subtitle="Confirmación de acciones críticas">
                            <div style={{ padding: spacing[4] }}>
                                <StatusBadge status="PENDING" />
                                <Text variant="body" style={{ display: "block", marginBottom: spacing[16], fontSize: 13, color: semantic.text.disabled }}>
                                    No se encontraron usos de ConfirmDialog en pantallas de producción actualmente.
                                </Text>
                                <div style={{ padding: spacing[16], border: `1px dashed ${semantic.border.default}`, borderRadius: radius.md, textAlign: "center" }}>
                                    <Text style={{ fontSize: 11, color: semantic.text.disabled }}>No existe demo real aún</Text>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Section>

                {/* CRITICAL PIECES MATRIX */}
                <Section title="Estado de Certificación (Otras Piezas)">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: spacing[24] }}>
                        
                        {/* ToastStack Case */}
                        <Card title="ToastStack / useToast" subtitle="Sistema de notificaciones globales">
                            <div style={{ padding: spacing[4] }}>
                                <StatusBadge status="APPROVED" />
                                <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[8], marginBottom: spacing[16] }}>
                                    <Button variant="actionPrimary" size="sm" onClick={() => showToast({ title: "Operación exitosa", type: "success" })}>Success</Button>
                                    <Button variant="secondary" size="sm" onClick={() => showToast({ title: "Información importante", type: "info" })}>Info</Button>
                                    <Button variant="white" size="sm" onClick={() => showToast({ title: "Advertencia", type: "warning" })}>Warning</Button>
                                    <Button variant="error" size="sm" onClick={() => showToast({ title: "Error inesperado", type: "error" })}>Error</Button>
                                </div>
                                <UsageCollapsible paths={["app/(shell)/layout.tsx (Global usage)"]} />
                            </div>
                        </Card>

                        {/* EmptyState Case */}
                        <Card title="EmptyState" subtitle="Feedback visual para listas vacías" noPadding>
                            <div style={{ padding: spacing[24] }}>
                                <StatusBadge status="APPROVED" />
                                <div style={{ height: 140, border: `1px solid ${semantic.border.default}`, borderRadius: radius.md, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: spacing[16] }}>
                                    <EmptyState title="Sin registros" icon="search" />
                                </div>
                                <UsageCollapsible paths={[
                                    "app/(shell)/users/list/UsersListClient.tsx",
                                    "app/(shell)/devices/list/DevicesListClient.tsx"
                                ]} />
                            </div>
                        </Card>

                        {/* ErrorState Case */}
                        <Card title="ErrorState" subtitle="Manejo visual de errores de API" noPadding>
                            <div style={{ padding: spacing[24] }}>
                                <StatusBadge status="APPROVED" />
                                <div style={{ height: 140, border: `1px solid ${semantic.border.default}`, borderRadius: radius.md, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: spacing[16] }}>
                                    <ErrorState title="Fallo de conexión" description="No se pudo cargar la información." />
                                </div>
                                <UsageCollapsible paths={[
                                    "app/(shell)/users/list/UsersListClient.tsx",
                                    "app/(shell)/devices/list/DevicesListClient.tsx"
                                ]} />
                            </div>
                        </Card>

                    </div>
                </Section>

                {/* ATOMS INVENTORY */}
                <Section title="Inventario de Átomos (Real usage)">
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing[48], padding: `${spacing[24]}px 0` }}>
                        
                        {/* Buttons Block */}
                        <div>
                            <Text variant="label" style={{ color: semantic.text.disabled, textTransform: "uppercase", fontSize: 11, letterSpacing: 1, display: "block" }}>
                                Avatar
                            </Text>
                            <div style={{ height: "1px", backgroundColor: semantic.border.default, margin: `${spacing[12]}px 0 ${spacing[24]}px 0` }} />
                            
                            <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[32], alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8], alignItems: "center" }}>
                                    <Text style={metadataLabelStyle}>Con Iniciales</Text>
                                    <Avatar name="Juan Pérez" backgroundColor="#6366f1" />
                                    <Text style={{ fontSize: 9, fontFamily: "monospace", color: semantic.text.disabled, opacity: 0.7 }}>onSolid text</Text>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8], alignItems: "center" }}>
                                    <Text style={metadataLabelStyle}>Grande (Perfil)</Text>
                                    <Avatar name="Juan Pérez" backgroundColor="#8b5cf6" size={80} fontSize="2rem" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8], alignItems: "center" }}>
                                    <Text style={metadataLabelStyle}>Sin Color</Text>
                                    <Avatar name="User" />
                                </div>
                            </div>
                        </div>

                        {/* Buttons Block */}
                        <div>
                            <Text variant="label" style={{ color: semantic.text.disabled, textTransform: "uppercase", fontSize: 11, letterSpacing: 1, display: "block" }}>
                                Buttons
                            </Text>
                            <div style={{ height: "1px", backgroundColor: semantic.border.default, margin: `${spacing[12]}px 0 ${spacing[24]}px 0` }} />
                            
                            <div style={{ display: "flex", flexWrap: "wrap", gap: spacing[32], alignItems: "flex-start" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8], minWidth: 200 }}>
                                    <Text style={metadataLabelStyle}>Caso: Acción Principal</Text>
                                    <Button variant="actionPrimary" size="sm">Crear nuevo</Button>
                                    <Text style={{ fontSize: 9, fontFamily: "monospace", color: semantic.text.disabled, opacity: 0.7 }}>props: variant=&quot;actionPrimary&quot; size=&quot;sm&quot;</Text>
                                    <UsageCollapsible paths={["app/(shell)/users/list/UsersListClient.tsx"]} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8], minWidth: 200 }}>
                                    <Text style={metadataLabelStyle}>Caso: Acción Secundaria</Text>
                                    <Button variant="white">Importar</Button>
                                    <Text style={{ fontSize: 9, fontFamily: "monospace", color: semantic.text.disabled, opacity: 0.7 }}>props: variant=&quot;white&quot;</Text>
                                    <UsageCollapsible paths={["app/(shell)/users/list/UsersListClient.tsx"]} />
                                </div>
                            </div>
                        </div>

                        {/* Inputs Block */}
                        <div>
                            <Text variant="label" style={{ color: semantic.text.disabled, textTransform: "uppercase", fontSize: 11, letterSpacing: 1, display: "block" }}>
                                Inputs & Fields
                            </Text>
                            <div style={{ height: "1px", backgroundColor: semantic.border.default, margin: `${spacing[12]}px 0 ${spacing[24]}px 0` }} />
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing[32], maxWidth: 900 }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
                                    <Text style={metadataLabelStyle}>Caso: Formulario Edición</Text>
                                    <Input label="Nombre completo" required placeholder="Ej: Juan Pérez" />
                                    <UsageCollapsible paths={["app/(shell)/users/components/UserForm.tsx"]} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
                                    <Text style={metadataLabelStyle}>Caso: Selección Catálogo</Text>
                                    <SelectSingle label="Departamento" options={[{ value: "1", label: "Tecnología" }]} required />
                                    <UsageCollapsible paths={["app/(shell)/users/components/UserForm.tsx"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* MODAL SIMULATION TARGETS */}
                <ModalShell 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)}
                    title="Editar Usuario (Demo Real)"
                >
                    <div style={{ padding: spacing[32] }}>
                        <FormLayout>
                            <FormField><Input label="Nombre" defaultValue="Juan Pérez" /></FormField>
                            <FormField><Input label="Email" defaultValue="juan@example.com" /></FormField>
                        </FormLayout>
                        <div style={{ marginTop: spacing[32] }}>
                            <FormActions mode="edit" onCancel={() => setIsModalOpen(false)} onSubmit={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                </ModalShell>

            </div>
        </PageShell>
    );
}
