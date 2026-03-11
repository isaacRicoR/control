"use client";

import React, { useState } from "react";
import { AppearanceConfigCard, AppearanceConfigGrid } from "../../_components";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";
import { useComponentsEditMode } from "./ComponentsEditModeContext";
import type { ComponentsEditMode } from "./ComponentsEditModeContext";

const TABLES_PROPERTIES = [
    { key: "headerBackground", label: "Background header", usage: ["Zona de encabezados de columna", "Distinción header vs filas"] },
    { key: "rowHoverColor", label: "Color hover fila", usage: ["Respuesta visual al puntero sobre filas", "Feedback de interacción"] },
    { key: "borderColor", label: "Color de borde", usage: ["Bordes de celdas", "Separación entre datos"] },
    { key: "rowDensity", label: "Densidad de fila", usage: ["Altura de las filas", "Compactación o amplitud del listado"] },
] as const;

type TablesOverrides = Record<string, string>;

type ModeKeyedTablesOverrides = Record<ComponentsEditMode, TablesOverrides>;

const DEFAULT_TABLES_OVERRIDES: TablesOverrides = {
    headerBackground: "surface.hover",
    rowHoverColor: "surface.hover",
    borderColor: "border.subtle",
    rowDensity: "surface.default",
};

const DEFAULT_MODE_OVERRIDES: ModeKeyedTablesOverrides = {
    dark: { ...DEFAULT_TABLES_OVERRIDES },
    light: { ...DEFAULT_TABLES_OVERRIDES },
};

export const TablesComponentEditor: React.FC = () => {
    const editModeCtx = useComponentsEditMode();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = useState<ModeKeyedTablesOverrides>(() => DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (key: string, value: string) => {
        setOverrides((prev) => ({
            ...prev,
            [editMode]: { ...prev[editMode], [key]: value },
        }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    const modeOverrides = overrides[editMode];
    const getValue = (key: string) => modeOverrides[key] ?? DEFAULT_TABLES_OVERRIDES[key] ?? "";

    return (
        <AppearanceConfigGrid>
            <AppearanceConfigCard title="Tables">
                {TABLES_PROPERTIES.map(({ key, label, usage }) => (
                    <ComponentTokenExpandableRow
                        key={key}
                        label={label}
                        value={getValue(key)}
                        onChange={(v) => handleChange(key, v)}
                        usage={usage}
                        isExpanded={!!expandedByKey[key]}
                        onToggle={() => toggleExpanded(key)}
                        propertyKey={key}
                    />
                ))}
            </AppearanceConfigCard>
        </AppearanceConfigGrid>
    );
};
