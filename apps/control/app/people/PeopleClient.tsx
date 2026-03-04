"use client";

import { Section } from "@ui/containers/Section";
import { DataTable } from "@ui/containers/DataTable";
import { Card } from "@ui/molecules/Card";

type PersonRow = {
    name: string;
    role: string;
    status: string;
    lastSeen: string;
};

const columns = [
    {
        key: "name",
        header: "Nombre",
        cell: (row: PersonRow) => row.name,
    },
    {
        key: "role",
        header: "Rol",
        cell: (row: PersonRow) => row.role,
    },
    {
        key: "status",
        header: "Estado",
        cell: (row: PersonRow) => row.status,
    },
    {
        key: "lastSeen",
        header: "Último acceso",
        cell: (row: PersonRow) => row.lastSeen,
    },
];

const rows: PersonRow[] = [
    { name: "Juan Pérez", role: "Administrador", status: "Activo", lastSeen: "Hoy 09:12" },
    { name: "María López", role: "Usuario", status: "Activo", lastSeen: "Ayer 18:40" },
    { name: "Carlos Ruiz", role: "Supervisor", status: "Inactivo", lastSeen: "Hace 7 días" },
];

export function PeopleClient() {
    return (
        <>
            <Section title="Personas">
                <Card subtitle="Listado base (copy temporal)">
                    Esta pantalla muestra personas y datos básicos. (UX/UI only)
                </Card>
            </Section>

            <Section title="Listado">
                <DataTable ariaLabel="Tabla de personas" columns={columns} rows={rows} />
            </Section>
        </>
    );
}
