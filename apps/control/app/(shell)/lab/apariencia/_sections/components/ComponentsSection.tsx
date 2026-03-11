"use client";

import React, { useState } from "react";
import { AppearanceSectionLayout, ModeSegmentedControl } from "../../_components";
import { SectionTabs } from "@ui/molecules/SectionTabs";
import { spacing, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { ComponentsEditModeProvider, useComponentsEditMode } from "./ComponentsEditModeContext";
import { ButtonsComponentEditor } from "./ButtonsComponentEditor";
import { InputsComponentEditor } from "./InputsComponentEditor";
import { TabsComponentEditor } from "./TabsComponentEditor";
import { CardsComponentEditor } from "./CardsComponentEditor";
import { TablesComponentEditor } from "./TablesComponentEditor";

const COMPONENT_TABS = [
    { value: "buttons", label: "Buttons" },
    { value: "inputs", label: "Inputs" },
    { value: "tabs", label: "Tabs" },
    { value: "cards", label: "Cards" },
    { value: "tables", label: "Tables" },
] as const;

const ComponentsSectionInner: React.FC = () => {
    const { theme } = useTheme();
    const editModeCtx = useComponentsEditMode();
    const semantic = colors[theme].semantic as { border?: { subtle?: string; default?: string }; text?: { active?: string }; surface?: { selected?: string; hover?: string } };
    const [activeSubTab, setActiveSubTab] = useState<string>("buttons");
    const borderColor = semantic?.border?.subtle ?? semantic?.border?.default;

    const renderEditor = () => {
        switch (activeSubTab) {
            case "buttons":
                return <ButtonsComponentEditor />;
            case "inputs":
                return <InputsComponentEditor />;
            case "tabs":
                return <TabsComponentEditor />;
            case "cards":
                return <CardsComponentEditor />;
            case "tables":
                return <TablesComponentEditor />;
            default:
                return <ButtonsComponentEditor />;
        }
    };

    return (
        <AppearanceSectionLayout
            headerContent={
                <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", width: "100%" }}>
                    <SectionTabs
                        items={[...COMPONENT_TABS]}
                        activeValue={activeSubTab}
                        onChange={setActiveSubTab}
                        ariaLabel="Subsecciones de Componentes"
                    />
                </div>
            }
            headerVariant="tabs"
            borderColor={borderColor ?? ""}
        >
            <div
                style={{
                    width: "100%",
                    flex: 1,
                    minHeight: 0,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[16],
                }}
            >
                {editModeCtx && (
                    <div style={{ display: "flex", alignItems: "center", gap: spacing[8], flexShrink: 0, paddingLeft: spacing[16] }}>
                        <span style={{ fontSize: 12, color: semantic?.text?.muted, whiteSpace: "nowrap" }}>Editando:</span>
                        <ModeSegmentedControl
                            value={editModeCtx.editMode}
                            onChange={editModeCtx.setEditMode}
                            semantic={semantic}
                            ariaLabel="Editando (Oscuro/Claro)"
                        />
                    </div>
                )}
                <div
                    className="appearance-cards-scroll"
                    style={{
                        width: "100%",
                        flex: 1,
                        minHeight: 0,
                        minWidth: 0,
                        padding: spacing[16],
                        boxSizing: "border-box",
                        overflowX: "auto",
                    }}
                >
                    {renderEditor()}
                </div>
            </div>
        </AppearanceSectionLayout>
    );
};

export const ComponentsSection: React.FC = () => {
    return (
        <ComponentsEditModeProvider>
            <ComponentsSectionInner />
        </ComponentsEditModeProvider>
    );
};
