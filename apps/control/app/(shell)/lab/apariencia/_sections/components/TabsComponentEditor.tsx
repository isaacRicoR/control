"use client";

import React, { useState } from "react";
import { ComponentsSectionCard } from "./ComponentsSectionCard";
import { VariantBlock } from "./VariantBlock";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";

const TABS_VARIANTS = [
    { id: "underline", label: "Underline" },
    { id: "pill", label: "Pill" },
    { id: "segmented", label: "Segmented" },
] as const;

const TABS_PROPERTIES = [
    { key: "activeColor", label: "Color activo", usage: ["Tabs", "Tab seleccionado"] },
    { key: "inactiveColor", label: "Color inactivo", usage: ["Tabs", "Tabs no seleccionados"] },
    { key: "hoverColor", label: "Color hover", usage: ["Tabs", "Estado hover"] },
    { key: "borderColor", label: "Color de borde", usage: ["Tabs", "Línea inferior · bordes"] },
] as const;

type TabsOverrides = Record<string, Record<string, string>>;

const DEFAULT_TABS_OVERRIDES: TabsOverrides = {
    underline: { activeColor: "text.active", inactiveColor: "text.muted", hoverColor: "text.hover", borderColor: "border.subtle" },
    pill: { activeColor: "primary.default", inactiveColor: "text.muted", hoverColor: "surface.hover", borderColor: "border.subtle" },
    segmented: { activeColor: "surface.selected", inactiveColor: "text.muted", hoverColor: "surface.hover", borderColor: "border.default" },
};

export const TabsComponentEditor: React.FC = () => {
    const [overrides, setOverrides] = useState<TabsOverrides>(() => ({ ...DEFAULT_TABS_OVERRIDES }));
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
        <ComponentsSectionCard title="Tabs">
            {TABS_VARIANTS.map(({ id, label }) => (
                <VariantBlock key={id} variantLabel={label}>
                    {TABS_PROPERTIES.map(({ key, label: propLabel, usage }) => {
                        const rowKey = `${id}-${key}`;
                        return (
                            <ComponentTokenExpandableRow
                                key={rowKey}
                                label={propLabel}
                                value={overrides[id]?.[key] ?? DEFAULT_TABS_OVERRIDES[id]?.[key] ?? ""}
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
