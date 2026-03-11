"use client";

import React, { useState } from "react";
import { ComponentsSectionCard } from "./ComponentsSectionCard";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";

const TABLES_PROPERTIES = [
    { key: "headerBackground", label: "Background header", usage: ["Tables", "DataTable", "Header de columas"] },
    { key: "rowHoverColor", label: "Color hover fila", usage: ["Tables", "Hover en filas"] },
    { key: "borderColor", label: "Color de borde", usage: ["Tables", "Bordes de celdas"] },
    { key: "rowDensity", label: "Densidad de fila", usage: ["Tables", "Altura de filas"] },
] as const;

type TablesOverrides = Record<string, string>;

const DEFAULT_TABLES_OVERRIDES: TablesOverrides = {
    headerBackground: "surface.hover",
    rowHoverColor: "surface.hover",
    borderColor: "border.subtle",
    rowDensity: "surface.default",
};

export const TablesComponentEditor: React.FC = () => {
    const [overrides, setOverrides] = useState<TablesOverrides>(() => ({ ...DEFAULT_TABLES_OVERRIDES }));
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (key: string, value: string) => {
        setOverrides((prev) => ({ ...prev, [key]: value }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    return (
        <ComponentsSectionCard title="Tables">
            {TABLES_PROPERTIES.map(({ key, label, usage }) => (
                <ComponentTokenExpandableRow
                    key={key}
                    label={label}
                    value={overrides[key] ?? DEFAULT_TABLES_OVERRIDES[key] ?? ""}
                    onChange={(v) => handleChange(key, v)}
                    usage={usage}
                    isExpanded={!!expandedByKey[key]}
                    onToggle={() => toggleExpanded(key)}
                />
            ))}
        </ComponentsSectionCard>
    );
};
