"use client";

import React, { useState } from "react";
import { AppearanceConfigCard, AppearanceConfigGrid } from "../../_components";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";
import { useComponentsEditMode } from "./ComponentsEditModeContext";
import type { ComponentsEditMode } from "./ComponentsEditModeContext";

const BUTTON_VARIANTS = [
    { id: "primary", label: "Primary" },
    { id: "secondary", label: "Secondary" },
    { id: "outline", label: "Outline" },
    { id: "ghost", label: "Ghost" },
    { id: "danger", label: "Danger" },
] as const;

const BUTTON_PROPERTIES = [
    { key: "background", label: "Background", usage: ["Estado base de la variante", "Superficie principal de acción"] },
    { key: "textColor", label: "Color de texto", usage: ["Texto visible sobre el fondo", "Contraste de legibilidad"] },
    { key: "borderColor", label: "Color de borde", usage: ["Borde visual del estado base", "Separación visual del contenedor, si aplica"] },
    { key: "hoverBackground", label: "Hover background", usage: ["Estado hover de la variante", "Respuesta visual al puntero"] },
] as const;

type ButtonOverrides = Record<string, Record<string, string>>;

type ModeKeyedButtonOverrides = Record<ComponentsEditMode, ButtonOverrides>;

const DEFAULT_BUTTON_OVERRIDES: ButtonOverrides = {
    primary: { background: "primary.default", textColor: "text.onSolid", borderColor: "border.default", hoverBackground: "primary.hover" },
    secondary: { background: "surface.default", textColor: "text.default", borderColor: "border.default", hoverBackground: "surface.hover" },
    outline: { background: "background.default", textColor: "text.default", borderColor: "border.default", hoverBackground: "surface.hover" },
    ghost: { background: "background.default", textColor: "text.default", borderColor: "border.subtle", hoverBackground: "surface.hover" },
    danger: { background: "danger.default", textColor: "text.onSolid", borderColor: "danger.default", hoverBackground: "danger.hover" },
};

const DEFAULT_MODE_OVERRIDES: ModeKeyedButtonOverrides = {
    dark: { ...DEFAULT_BUTTON_OVERRIDES },
    light: { ...DEFAULT_BUTTON_OVERRIDES },
};

export const ButtonsComponentEditor: React.FC = () => {
    const editModeCtx = useComponentsEditMode();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = useState<ModeKeyedButtonOverrides>(() => DEFAULT_MODE_OVERRIDES);
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
        modeOverrides[variantId]?.[key] ?? DEFAULT_BUTTON_OVERRIDES[variantId]?.[key] ?? "";

    return (
        <AppearanceConfigGrid>
            {BUTTON_VARIANTS.map(({ id, label }) => (
                <AppearanceConfigCard key={id} title={label}>
                    {BUTTON_PROPERTIES.map(({ key, label: propLabel, usage }) => {
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
