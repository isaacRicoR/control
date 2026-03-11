"use client";

import React, { useState } from "react";
import { ComponentsSectionCard } from "./ComponentsSectionCard";
import { VariantBlock } from "./VariantBlock";
import { ComponentTokenExpandableRow } from "./ComponentTokenExpandableRow";

const CARDS_VARIANTS = [
    { id: "flat", label: "Flat" },
    { id: "subtleBorder", label: "SubtleBorder" },
    { id: "elevated", label: "Elevated" },
] as const;

const CARDS_PROPERTIES = [
    { key: "background", label: "Background", usage: ["Cards", "PanelCard", "Panel backgrounds"] },
    { key: "borderColor", label: "Color de borde", usage: ["Cards", "Borde del panel"] },
    { key: "headerBackground", label: "Background header", usage: ["Cards", "Header del panel"] },
    { key: "paddingDensity", label: "Densidad de padding", usage: ["Cards", "Espaciado interno"] },
] as const;

type CardsOverrides = Record<string, Record<string, string>>;

const DEFAULT_CARDS_OVERRIDES: CardsOverrides = {
    flat: { background: "surface.card", borderColor: "border.subtle", headerBackground: "surface.default", paddingDensity: "surface.default" },
    subtleBorder: { background: "surface.card", borderColor: "border.subtle", headerBackground: "surface.hover", paddingDensity: "surface.default" },
    elevated: { background: "elevated.default", borderColor: "border.subtle", headerBackground: "elevated.hover", paddingDensity: "surface.default" },
};

export const CardsComponentEditor: React.FC = () => {
    const [overrides, setOverrides] = useState<CardsOverrides>(() => ({ ...DEFAULT_CARDS_OVERRIDES }));
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
        <ComponentsSectionCard title="Cards / Panels">
            {CARDS_VARIANTS.map(({ id, label }) => (
                <VariantBlock key={id} variantLabel={label}>
                    {CARDS_PROPERTIES.map(({ key, label: propLabel, usage }) => {
                        const rowKey = `${id}-${key}`;
                        return (
                            <ComponentTokenExpandableRow
                                key={rowKey}
                                label={propLabel}
                                value={overrides[id]?.[key] ?? DEFAULT_CARDS_OVERRIDES[id]?.[key] ?? ""}
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
