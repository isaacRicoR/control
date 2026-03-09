"use client";

import { FC, useState, useRef, useEffect } from "react";
import { useVisualPreset, VisualPreset } from "@core/visual/visualPresetStore";
import { colors, spacing, radius, typography, zIndex, shadows } from "@tokens";
import { Icon } from "@ui/atoms/Icon/Icon";

type PresetSelectorProps = {
    /** Si true, muestra "DEV" como prefijo (estilo TopBar) */
    showDevPrefix?: boolean;
};

/**
 * Selector de preset visual (Control / Security).
 * Mismo estilo que el botón DEV: compacto, dropdown con "Control (Oficial)" y "Security (Azul)".
 */
export const PresetSelector: FC<PresetSelectorProps> = ({ showDevPrefix = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentPreset, setPreset } = useVisualPreset();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (preset: VisualPreset) => {
        setPreset(preset);
        setIsOpen(false);
    };

    const semantic = colors.semantic;
    const presets: { value: VisualPreset; label: string }[] = [
        { value: "control", label: "Control (Oficial)" },
        { value: "security", label: "Security (Azul)" },
    ];

    return (
        <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: semantic.surface.default,
                    border: `1px solid ${semantic.border.default}`,
                    borderRadius: radius.full,
                    padding: `${spacing[4]}px ${spacing[16]}px`,
                    color: "#ffffff",
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.medium,
                    fontFamily: typography.fontFamily.primary,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[8],
                    height: 32,
                }}
                title={showDevPrefix ? "Dev Actions" : undefined}
            >
                {showDevPrefix && <span>DEV</span>}
                <span>{currentPreset === "control" ? "Control" : "Security"}</span>
                <Icon name="chevron-down" size={12} color={semantic.text.muted} />
            </button>

            {isOpen && (
                <div
                    role="listbox"
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        marginTop: spacing[4],
                        width: 160,
                        background: semantic.surface.default,
                        border: `1px solid ${semantic.border.default}`,
                        borderRadius: radius.md,
                        boxShadow: shadows.dropdown,
                        zIndex: zIndex.dropdown,
                        overflow: "hidden",
                    }}
                >
                    {presets.map((preset) => {
                        const isActive = currentPreset === preset.value;
                        return (
                            <div
                                key={preset.value}
                                role="option"
                                aria-selected={isActive}
                                style={{
                                    padding: `${spacing[8]}px ${spacing[12]}px`,
                                    fontSize: typography.fontSize.xs,
                                    color: isActive ? semantic.primary.default : semantic.text.default,
                                    backgroundColor: isActive ? semantic.surface.hover : "transparent",
                                    cursor: "pointer",
                                    transition: "background 0.2s",
                                }}
                                onClick={() => handleSelect(preset.value)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = semantic.surface.hover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        currentPreset === preset.value ? semantic.surface.hover : "transparent";
                                }}
                            >
                                {preset.label}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
