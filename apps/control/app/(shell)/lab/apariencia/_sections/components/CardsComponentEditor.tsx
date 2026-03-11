"use client";

import React, { useState } from "react";
import { AppearanceConfigCard, AppearanceConfigGrid } from "../../_components";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";
import { useComponentsEditMode } from "./ComponentsEditModeContext";
import type { ComponentsEditMode } from "./ComponentsEditModeContext";

const CARDS_VARIANTS = [
    { id: "flat", label: "Flat" },
    { id: "subtleBorder", label: "SubtleBorder" },
    { id: "elevated", label: "Elevated" },
] as const;

const CARDS_PROPERTIES = [
    { key: "background", label: "Background", usage: ["Superficie principal del panel", "Área de contenido"] },
    { key: "borderColor", label: "Color de borde", usage: ["Contorno del panel", "Separación visual"] },
    { key: "headerBackground", label: "Background header", usage: ["Zona del encabezado", "Distinción header vs body"] },
    { key: "paddingDensity", label: "Densidad de padding", usage: ["Espaciado interno del contenido", "Respiración del panel"] },
] as const;

type CardsOverrides = Record<string, Record<string, string>>;

type ModeKeyedCardsOverrides = Record<ComponentsEditMode, CardsOverrides>;

const DEFAULT_CARDS_OVERRIDES: CardsOverrides = {
    flat: { background: "surface.card", borderColor: "border.subtle", headerBackground: "surface.default", paddingDensity: "surface.default" },
    subtleBorder: { background: "surface.card", borderColor: "border.subtle", headerBackground: "surface.hover", paddingDensity: "surface.default" },
    elevated: { background: "elevated.default", borderColor: "border.subtle", headerBackground: "elevated.hover", paddingDensity: "surface.default" },
};

const DEFAULT_MODE_OVERRIDES: ModeKeyedCardsOverrides = {
    dark: { ...DEFAULT_CARDS_OVERRIDES },
    light: { ...DEFAULT_CARDS_OVERRIDES },
};

export const CardsComponentEditor: React.FC = () => {
    const editModeCtx = useComponentsEditMode();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = useState<ModeKeyedCardsOverrides>(() => DEFAULT_MODE_OVERRIDES);
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
        modeOverrides[variantId]?.[key] ?? DEFAULT_CARDS_OVERRIDES[variantId]?.[key] ?? "";

    return (
        <AppearanceConfigGrid>
            {CARDS_VARIANTS.map(({ id, label }) => (
                <AppearanceConfigCard key={id} title={label}>
                    {CARDS_PROPERTIES.map(({ key, label: propLabel, usage }) => {
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
