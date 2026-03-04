"use client";

import { FC, useState, useRef, useEffect } from "react";
import { DEV_UI_ENABLED } from "@core/flags/devFlags";
import { mockSession } from "@core/auth/mockSession";
import { useVisualPreset, VisualPreset } from "@core/visual/visualPresetStore";
import { colors, spacing, radius, typography, zIndex } from "@tokens";

export const DevPanel: FC = () => {
    // 2. State for Dropdown
    const [isOpen, setIsOpen] = useState(false);
    const { currentPreset, setPreset } = useVisualPreset();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 1. Guard Clauses (Security/Visibility)
    // If flag is off OR user is not OWNER, render nothing.
    if (!DEV_UI_ENABLED || mockSession.role !== "OWNER") {
        return null; // Render nothing
    }

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (preset: VisualPreset) => {
        setPreset(preset);
        setIsOpen(false);
        // In a real app, this might trigger a theme reload or brand switch
        // For MVP, valid presets are: seguridad, corporativo, innovacion
        console.log(`[DevPanel] Switched to preset: ${preset}`);
    };

    // 3. Styles (Semantic Only)
    // Using semantic text/border/surface to match the theme
    const buttonStyle = {
        background: colors.semantic.surface.default,
        border: `1px solid ${colors.semantic.border.default}`,
        borderRadius: radius.md,
        padding: `${spacing[4]}px ${spacing[8]}px`,
        color: colors.semantic.text.default,
        fontSize: typography.fontSize.xs,
        fontFamily: typography.fontFamily.primary,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: spacing[8],
        height: 32, // Compact
    };

    const dropdownStyle: React.CSSProperties = {
        position: "absolute",
        top: "100%",
        right: 0,
        marginTop: spacing[4],
        width: 160,
        background: colors.semantic.surface.default,
        border: `1px solid ${colors.semantic.border.default}`,
        borderRadius: radius.md,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Shadow token pending, using conservative fallback or standard
        zIndex: zIndex.dropdown, // Assuming zIndex.dropdown exists in tokens
        overflow: "hidden",
        display: isOpen ? "block" : "none",
    };

    const itemStyle = (isActive: boolean) => ({
        padding: `${spacing[8]}px ${spacing[12]}px`,
        fontSize: typography.fontSize.xs,
        color: isActive ? colors.semantic.text.active : colors.semantic.text.default,
        // Fallback to text.default if not sure, or text.active
        backgroundColor: isActive ? colors.semantic.surface.hover : "transparent",
        cursor: "pointer",
        transition: "background 0.2s",
    });

    return (
        <div ref={dropdownRef} style={{ position: "relative" }}>
            <button onClick={toggleDropdown} style={buttonStyle} title="Dev Actions">
                <span style={{ fontWeight: typography.fontWeight.bold, color: colors.semantic.primary.default }}>DEV</span>
                <span>{currentPreset}</span>
            </button>

            <div style={dropdownStyle}>
                {(["control", "security"] as VisualPreset[]).map((preset) => (
                    <div
                        key={preset}
                        style={{
                            ...itemStyle(currentPreset === preset),
                            color: currentPreset === preset ? colors.semantic.primary.default : colors.semantic.text.default
                        }}
                        onClick={() => handleSelect(preset)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.semantic.surface.hover;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = currentPreset === preset ? colors.semantic.surface.hover : "transparent";
                        }}
                    >
                        {preset === "control" ? "Control (Oficial)" : "Security (Azul)"}
                    </div>
                ))}
            </div>
        </div>
    );
};
