"use client";

import React, { useState } from "react";
import { AppearanceSectionLayout } from "../../_components/AppearanceSectionLayout";
import { SectionTabs } from "@ui/molecules/SectionTabs";
import { spacing, colors, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
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

export const ComponentsSection: React.FC = () => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as { border?: { subtle?: string; default?: string }; text?: { active?: string } };
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
                <div style={{ flex: 1, minWidth: 0, display: "flex", width: "100%" }}>
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
                className="appearance-cards-scroll"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: spacing[24],
                    width: "100%",
                    flex: 1,
                    minHeight: 0,
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    overflowX: "auto",
                    minWidth: 0,
                    padding: spacing[16],
                    boxSizing: "border-box",
                }}
            >
                <div style={{ minWidth: 320, maxWidth: 460, flex: "1 1 320", minHeight: 0, display: "flex" }}>
                    {renderEditor()}
                </div>
            </div>
        </AppearanceSectionLayout>
    );
};
