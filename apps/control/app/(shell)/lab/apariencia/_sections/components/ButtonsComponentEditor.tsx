"use client";

import React, { useState } from "react";
import { ComponentsSectionCard } from "./ComponentsSectionCard";
import { VariantBlock } from "./VariantBlock";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";

const BUTTON_VARIANTS = [
    { id: "primary", label: "Primary" },
    { id: "secondary", label: "Secondary" },
    { id: "outline", label: "Outline" },
    { id: "ghost", label: "Ghost" },
    { id: "danger", label: "Danger" },
] as const;

const BUTTON_PROPERTIES = [
    { key: "background", label: "Background", usage: ["Buttons", "Superficie principal"] },
    { key: "textColor", label: "Color de texto", usage: ["Buttons", "Texto sobre fondo"] },
    { key: "borderColor", label: "Color de borde", usage: ["Buttons", "Outline · Ghost"] },
    { key: "hoverBackground", label: "Hover background", usage: ["Buttons", "Estado hover"] },
] as const;

type ButtonOverrides = Record<string, Record<string, string>>;

const DEFAULT_BUTTON_OVERRIDES: ButtonOverrides = {
    primary: { background: "primary.default", textColor: "text.onSolid", borderColor: "border.default", hoverBackground: "primary.hover" },
    secondary: { background: "surface.default", textColor: "text.default", borderColor: "border.default", hoverBackground: "surface.hover" },
    outline: { background: "background.default", textColor: "text.default", borderColor: "border.default", hoverBackground: "surface.hover" },
    ghost: { background: "background.default", textColor: "text.default", borderColor: "border.subtle", hoverBackground: "surface.hover" },
    danger: { background: "danger.default", textColor: "text.onSolid", borderColor: "danger.default", hoverBackground: "danger.hover" },
};

export const ButtonsComponentEditor: React.FC = () => {
    const [overrides, setOverrides] = useState<ButtonOverrides>(() => ({ ...DEFAULT_BUTTON_OVERRIDES }));
    const [expandedByKey, setExpandedByKey] = useState<Record<string, boolean>>({});

    const handleChange = (variantId: string, key: string, value: string) => {
        setOverrides((prev) => ({
            ...prev,
            [variantId]: { ...(prev[variantId] ?? {}), [key]: value },
        }));
    };

    const toggleExpanded = (rowKey: string) => {
        setExpandedByKey((prev) => ({ ...prev, [rowKey]: !prev[rowKey] }));
    };

    return (
        <ComponentsSectionCard title="Buttons">
            {BUTTON_VARIANTS.map(({ id, label }) => (
                <VariantBlock key={id} variantLabel={label}>
                    {BUTTON_PROPERTIES.map(({ key, label: propLabel, usage }) => {
                        const rowKey = `${id}-${key}`;
                        return (
                            <ComponentTokenExpandableRow
                                key={rowKey}
                                label={propLabel}
                                value={overrides[id]?.[key] ?? DEFAULT_BUTTON_OVERRIDES[id]?.[key] ?? ""}
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
