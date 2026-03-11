"use client";

import React, { useState } from "react";
import { AppearanceConfigCard, AppearanceConfigGrid } from "../../_components";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";
import { useComponentsEditMode } from "./ComponentsEditModeContext";
import type { ComponentsEditMode } from "./ComponentsEditModeContext";

const INPUT_STATES = [
    { id: "default", label: "Default" },
    { id: "focus", label: "Focus" },
    { id: "error", label: "Error" },
    { id: "disabled", label: "Disabled" },
] as const;

const INPUT_PROPERTIES = [
    { key: "borderColor", label: "Color de borde", usage: ["Línea de contorno del campo", "Definición visual del estado"] },
    { key: "background", label: "Background", usage: ["Fondo del área de entrada", "Superficie de escritura"] },
    { key: "focusRing", label: "Focus ring", usage: ["Resaltado cuando el campo tiene foco", "Indicador de accesibilidad"] },
    { key: "placeholderColor", label: "Color placeholder", usage: ["Texto de ejemplo cuando está vacío", "Texto de guía desvanecido"] },
] as const;

type InputOverrides = Record<string, Record<string, string>>;

type ModeKeyedInputOverrides = Record<ComponentsEditMode, InputOverrides>;

const DEFAULT_INPUT_OVERRIDES: InputOverrides = {
    default: { borderColor: "border.default", background: "surface.default", focusRing: "border.focus", placeholderColor: "text.muted" },
    focus: { borderColor: "border.focus", background: "surface.default", focusRing: "primary.default", placeholderColor: "text.muted" },
    error: { borderColor: "danger.default", background: "surface.default", focusRing: "danger.default", placeholderColor: "text.muted" },
    disabled: { borderColor: "border.disabled", background: "surface.disabled", focusRing: "border.subtle", placeholderColor: "text.disabled" },
};

const DEFAULT_MODE_OVERRIDES: ModeKeyedInputOverrides = {
    dark: { ...DEFAULT_INPUT_OVERRIDES },
    light: { ...DEFAULT_INPUT_OVERRIDES },
};

export const InputsComponentEditor: React.FC = () => {
    const editModeCtx = useComponentsEditMode();
    const editMode = editModeCtx?.editMode ?? "dark";
    const [overrides, setOverrides] = useState<ModeKeyedInputOverrides>(() => DEFAULT_MODE_OVERRIDES);
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (stateId: string, key: string, value: string) => {
        setOverrides((prev) => ({
            ...prev,
            [editMode]: {
                ...prev[editMode],
                [stateId]: { ...(prev[editMode][stateId] ?? {}), [key]: value },
            },
        }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    const modeOverrides = overrides[editMode];
    const getValue = (stateId: string, key: string) =>
        modeOverrides[stateId]?.[key] ?? DEFAULT_INPUT_OVERRIDES[stateId]?.[key] ?? "";

    return (
        <AppearanceConfigGrid>
            {INPUT_STATES.map(({ id, label }) => (
                <AppearanceConfigCard key={id} title={label}>
                    {INPUT_PROPERTIES.map(({ key, label: propLabel, usage }) => {
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
