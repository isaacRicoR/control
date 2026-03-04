"use client";

import React, { useState } from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
// Removed import: mockCompanies
import { useTheme } from "@ui/context/ThemeProvider";
import { SystemCompany } from "./Sidebar.types";

interface CompanySelectorProps {
    companies: SystemCompany[];
    createLabel?: string;
}

export const CompanySelector: React.FC<CompanySelectorProps> = ({
    companies,
    createLabel = "Crear cuenta"
}) => {
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isCompanyHovered, setIsCompanyHovered] = useState(false);
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const activeCompany = companies.find(c => c.active) || companies[0];

    return (
        <>
            {/* 2. Selector de Empresa (Unified Clickable Row) */}
            <div
                role="button"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                onMouseEnter={() => setIsCompanyHovered(true)}
                onMouseLeave={() => setIsCompanyHovered(false)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 40,
                    padding: `0 ${spacing[12]}px`,
                    borderRadius: radius["md"],
                    cursor: "pointer",
                    marginBottom: spacing[8],
                    backgroundColor: (isCompanyHovered || isCompanyOpen) ? semantic.surface.hover : "transparent",
                    color: (isCompanyHovered || isCompanyOpen) ? semantic.text.hover : semantic.text.default,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                }}
            >
                {/* Left: Avatar + Text */}
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    {/* Avatar Circle */}
                    <div style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: activeCompany?.color || "#10B981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <span style={{ color: "#FFF", fontSize: typography.fontSize.xs, fontWeight: "bold" }}>{activeCompany?.label || "EM"}</span>
                    </div>

                    <Text style={{
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.medium,
                        color: "inherit",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: 150,
                    }}>
                        {activeCompany?.name || "Empresa"}
                    </Text>
                </div>

                {/* Right: Chevron (Simple flex container) */}
                <div style={{
                    display: "flex",
                    transition: "transform 0.2s ease",
                    transform: isCompanyOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                    <Icon size={18} title="Toggle" name="chevron-down" />
                </div>
            </div>

            {/* Company Dropdown List (Consuming Mock Data) */}
            <div style={{
                display: "grid",
                gridTemplateRows: isCompanyOpen ? "1fr" : "0fr",
                opacity: isCompanyOpen ? 1 : 0,
                marginTop: isCompanyOpen ? spacing[4] : 0,
                marginBottom: isCompanyOpen ? spacing[16] : 0,
                transition: "grid-template-rows 0.3s ease, opacity 0.3s ease, margin 0.3s ease",
            }}>
                <div style={{ overflow: "hidden" }}>
                    <div style={{ paddingTop: spacing[8] }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: spacing[4],
                            maxHeight: 260, // Scroll limit
                            overflowY: "auto",
                            paddingRight: spacing[4], // Prevent scrollbar overlap
                            marginRight: -spacing[4]
                        }}>

                            {/* Companies from Config */}
                            {companies.map((company, index) => (
                                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: spacing[4] }}>
                                    {/* Left: Main Action (Select Company) - Has Background */}
                                    <div
                                        style={{
                                            flex: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            padding: `${spacing[4]}px ${spacing[12]}px`,
                                            borderRadius: radius["md"],
                                            backgroundColor: company.active ? semantic.surface.selected : "transparent",
                                            cursor: "pointer",
                                            transition: "background-color 0.2s ease",
                                            marginRight: spacing[4], // Gap between item and chevron
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!company.active) e.currentTarget.style.backgroundColor = semantic.surface.hover;
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!company.active) e.currentTarget.style.backgroundColor = "transparent";
                                        }}
                                    >
                                        {/* Avatar */}
                                        <div style={{
                                            width: 24,
                                            height: 24,
                                            minWidth: 24,
                                            borderRadius: "50%",
                                            backgroundColor: company.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: spacing[12],
                                            // Removed hardcoded shadow to comply with strict token rules
                                            border: `1px solid ${semantic.border.default}`
                                        }}>
                                            <span style={{ color: "#FFF", fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold }}>
                                                {company.label}
                                            </span>
                                        </div>

                                        {/* Info Column */}
                                        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", marginRight: spacing[8], minWidth: 0 }}>
                                            <Text style={{
                                                fontSize: typography.fontSize.sm, // Was 12, now sm (14) or should I use xs (10)? Sidebar often uses smaller text. Let's use 12px via calc or just sm if acceptable. User wanted 12. Token system has xs=10, sm=14. I will use xs (10) for count and sm (14) for name, or maybe 12 is needed. But user said "No hardcodear sizes". I'll use sm (14) for name and xs (10) for count.
                                                fontWeight: typography.fontWeight.medium,
                                                color: company.active ? semantic.primary.default : semantic.text.default,
                                                // Note: Active text often white on dark active bg, but standard tokens might diff. 
                                                // Logic: if company.active (selected), bg is surface.selected.
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "block"
                                            }}>
                                                {company.name}
                                            </Text>
                                            <Text style={{
                                                fontSize: typography.fontSize.xs, // Was 10
                                                color: semantic.text.disabled,
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}>
                                                {company.count}
                                            </Text>
                                        </div>

                                        {/* Pro Badge (Inside Item) */}
                                        <div style={{
                                            padding: "1px 6px",
                                            borderRadius: radius.sm, // Was 4
                                            border: `1px solid ${company.active ? company.color : semantic.border.default}`,
                                            color: company.active ? company.color : semantic.text.disabled,
                                            fontSize: typography.fontSize.xs, // Was 9
                                            fontWeight: typography.fontWeight.medium,
                                            letterSpacing: 0.5
                                        }}>
                                            Pro
                                        </div>
                                    </div>

                                    {/* Right: Chevron Action (Navigate) - Outside Background */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 24,
                                            height: 32,
                                            cursor: "pointer",
                                            borderRadius: radius["md"],
                                            transition: "background-color 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = semantic.surface.hover}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                                    >
                                        <Icon size={14} color={semantic.text.disabled} name="chevron-right" />
                                    </div>
                                </div>
                            ))}

                            {/* Item: Action Crear cuenta */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: `${spacing[8]}px ${spacing[12]}px`,
                                    borderRadius: radius["md"],
                                    cursor: "pointer",
                                    transition: "background-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = semantic.surface.hover}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                            >
                                <div style={{
                                    width: 24,
                                    height: 24,
                                    minWidth: 24,
                                    borderRadius: radius.sm, // Was 8
                                    backgroundColor: semantic.surface.hover,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: spacing[12],
                                }}>
                                    <Icon size={14} color={semantic.text.active} name="plus" />
                                </div>
                                <Text style={{ fontSize: typography.fontSize.sm, color: semantic.text.default }}>
                                    {createLabel}
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
