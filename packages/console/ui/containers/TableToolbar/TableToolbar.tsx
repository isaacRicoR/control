"use client";

import React from "react";
import { spacing, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import type { TableToolbarProps } from "./TableToolbar.types";
import { SearchInput } from "../../atoms/SearchInput/SearchInput";
import { StatusTabs } from "../../molecules/StatusTabs";

/**
 * TableToolbar
 * Sección de herramientas para la tabla.
 * Centraliza la lógica de Tabs, Divider y Slots de contenido.
 */
export const TableToolbar: React.FC<TableToolbarProps> = ({
    className,
    style,
    tabs = [],
    statusTabs,
    activeTab,
    onTabChange,
    startContent,
    filtersSlot,
    endContent,
    actionsSlot,
    showSearch,
    searchValue,
    onSearchChange,
    searchPlaceholder,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const effectiveTabs = statusTabs ?? tabs;
    const effectiveFilters = filtersSlot ?? startContent;
    const effectiveActions = actionsSlot ?? endContent;

    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: spacing[12],
                paddingBottom: spacing[12],
                backgroundColor: "transparent",
                borderBottom: `1px solid ${semantic.border.default}`,
                boxShadow: "none",
                filter: "none",
                ...style,
            }}
        >
            {/* 1️⃣ ROW 1: Tabs Zone */}
            {effectiveTabs.length > 0 && (
                <StatusTabs
                    items={effectiveTabs.map(tab => ({
                        label: tab.label,
                        value: tab.label,
                        count: tab.count,
                        variant: tab.variant
                    }))}
                    activeValue={activeTab || ""}
                    onChange={(val) => onTabChange?.(val)}
                />
            )}

            {/* 2️⃣ ROW 2: Controls Zone */}
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", paddingLeft: spacing[24], paddingRight: spacing[24] }}>
                {/* Left: Start Content (e.g. Filter) */}
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    {effectiveFilters}
                </div>

                {/* Right: End Content (e.g. Search + Actions) */}
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    {showSearch && (
                        <SearchInput
                            value={searchValue}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                            placeholder={searchPlaceholder}
                            style={{ width: "240px" }}
                        />
                    )}
                    {effectiveActions}
                </div>
            </div>
        </div>
    );
};
