"use client";

import React, { useState } from "react";
import { AppearanceConfigCard, AppearanceConfigGrid } from "../../_components";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";
import { useComponentsEditMode } from "./ComponentsEditModeContext";
import type { ComponentsEditMode } from "./ComponentsEditModeContext";

const TABS_VARIANTS = [
    { id: "underline", label: "Underline" },
    { id: "pill", label: "Pill" },
    { id: "segmented", label: "Segmented" },
] as const;

const TABS_PROPERTIES = [
    { key: "activeColor", label: "Color activo", usage: ["Indica el tab seleccionado", "Contenido visible actual"] },
    { key: "inactiveColor", label: "Color inactivo", usage: ["Opciones no seleccionadas", "Alternativas disponibles"] },
    { key: "hoverColor", label: "Color hover", usage: ["Respuesta visual al puntero", "Previsualización de selección"] },
    { key: "borderColor", label: "Color de borde", usage: ["Línea inferior o bordes del contenedor", "Separación entre tabs"] },
] as const;

type TabsOverrides = Record<string, Record<string, string>>;

type ModeKeyedTabsOverrides = Record<ComponentsEditMode, TabsOverrides>;

const DEFAULT_TABS_OVERRIDES: TabsOverrides = {
    underline: { activeColor: "text.active", inactiveColor: "text.muted", hoverColor: "text.hover", borderColor: "border.subtle" },
    pill: { activeColor: "primary.default", inactiveColor: "text.muted", hoverColor: "surface.hover", borderColor: "border.subtle" },
    segmented: { activeColor: "surface.selected", inactiveColor: "text.muted", hoverColor: "surface.hover", borderColor: "border.default" },
};

const DEFAULT_MODE_OVERRIDES: ModeKeyedTabsOverrides = {
    dark: { ...DEFAULT_TABS_OVERRIDES },
    light: { ...DEFAULT_TABS_OVERRIDES },
};

export const TabsComponentEditor: React.FC = () => {
    const editModeCtx = useComponentsEditMode();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = useState<ModeKeyedTabsOverrides>(() => DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (variantId: string, key: string, value: string) => {
        setOverrides((prev) => ({
            ...prev,
            [editMode]: {
                ...prev[editMode],
                [variantId]: { ...(prev[editMode][variantId] ?? {}), [key]: value },
            },
        }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    const modeOverrides = overrides[editMode];
    const getValue = (variantId: string, key: string) =>
        modeOverrides[variantId]?.[key] ?? DEFAULT_TABS_OVERRIDES[variantId]?.[key] ?? "";

    return (
        <AppearanceConfigGrid>
            {TABS_VARIANTS.map(({ id, label }) => (
                <AppearanceConfigCard key={id} title={label}>
                    {TABS_PROPERTIES.map(({ key, label: propLabel, usage }) => {
                        const rowKey = `${id}-${key}`;
                        return (
                            <ComponentTokenExpandableRow
                                key={rowKey}
                                label={propLabel}
                                value={getValue(id, key)}
                                onChange={(v) => handleChange(id, key, v)}
                                usage={usage}
                                isExpanded={!!expandedByKey[rowKey]}
                                onToggle={() => toggleExpanded(rowKey)}
                                propertyKey={key}
                            />
                        );
                    })}
                </AppearanceConfigCard>
            ))}
        </AppearanceConfigGrid>
    );
};
