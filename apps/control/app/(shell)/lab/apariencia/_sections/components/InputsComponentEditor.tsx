"use client";

import React, { useState } from "react";
import { ComponentsSectionCard } from "./ComponentsSectionCard";
import { VariantBlock } from "./VariantBlock";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";

const INPUT_STATES = [
    { id: "default", label: "Default" },
    { id: "focus", label: "Focus" },
    { id: "error", label: "Error" },
    { id: "disabled", label: "Disabled" },
] as const;

const INPUT_PROPERTIES = [
    { key: "borderColor", label: "Color de borde", usage: ["Inputs", "Borde del campo"] },
    { key: "background", label: "Background", usage: ["Inputs", "Fondo del campo"] },
    { key: "focusRing", label: "Focus ring", usage: ["Inputs", "Estado focus"] },
    { key: "placeholderColor", label: "Color placeholder", usage: ["Inputs", "Texto placeholder"] },
] as const;

type InputOverrides = Record<string, Record<string, string>>;

const DEFAULT_INPUT_OVERRIDES: InputOverrides = {
    default: { borderColor: "border.default", background: "surface.default", focusRing: "border.focus", placeholderColor: "text.muted" },
    focus: { borderColor: "border.focus", background: "surface.default", focusRing: "primary.default", placeholderColor: "text.muted" },
    error: { borderColor: "danger.default", background: "surface.default", focusRing: "danger.default", placeholderColor: "text.muted" },
    disabled: { borderColor: "border.disabled", background: "surface.disabled", focusRing: "border.subtle", placeholderColor: "text.disabled" },
};

export const InputsComponentEditor: React.FC = () => {
    const [overrides, setOverrides] = useState<InputOverrides>(() => ({ ...DEFAULT_INPUT_OVERRIDES }));
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (stateId: string, key: string, value: string) => {
        setOverrides((prev) => ({
            ...prev,
            [stateId]: { ...(prev[stateId] ?? {}), [key]: value },
        }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    return (
        <ComponentsSectionCard title="Inputs">
            {INPUT_STATES.map(({ id, label }) => (
                <VariantBlock key={id} variantLabel={label}>
                    {INPUT_PROPERTIES.map(({ key, label: propLabel, usage }) => {
                        const rowKey = `${id}-${key}`;
                        return (
                            <ComponentTokenExpandableRow
                                key={rowKey}
                                label={propLabel}
                                value={overrides[id]?.[key] ?? DEFAULT_INPUT_OVERRIDES[id]?.[key] ?? ""}
                                onChange={(v) => handleChange(id, key, v)}
                                usage={usage}
                                isExpanded={!!expandedByKey[rowKey]}
                                onToggle={() => toggleExpanded(rowKey)}
                            />
                        );
                    })}
                </VariantBlock>
            ))}
        </ComponentsSectionCard>
    );
};
