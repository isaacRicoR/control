"use client";

import React from "react";
import { spacing, typography, radius } from "@tokens";

export type ThemeEditMode = "dark" | "light";

type SemanticLike = {
    text?: { default?: string; muted?: string; onSolid?: string };
    surface?: { selected?: string; hover?: string; default?: string };
    border?: { subtle?: string; default?: string };
    primary?: { default?: string };
};

type ModeSegmentedControlProps = {
    value: ThemeEditMode;
    onChange: (v: ThemeEditMode) => void;
    semantic: SemanticLike;
    /** Optional override for aria-label */
    ariaLabel?: string;
};

const OPTIONS: { value: ThemeEditMode; label: string }[] = [
    { value: "dark", label: "Oscuro" },
    { value: "light", label: "Claro" },
];

const GAP = 2;
const PADDING = 2;

/**
 * Segmented control for switching between dark/light mode in editors.
 * Does NOT change the global theme - only which mode's tokens are shown/edited.
 * Uses a sliding thumb for smooth visual feedback.
 */
export const ModeSegmentedControl: React.FC<ModeSegmentedControlProps> = ({
    value,
    onChange,
    semantic,
    ariaLabel = "Modo de edición",
}) => {
    const borderColor = semantic?.border?.subtle ?? "rgba(255,255,255,0.08)";
    const bgColor = "rgba(255,255,255,0.03)";
    const activeColor = "#1a1a1a";

    return (
        <div
            role="tablist"
            aria-label={ariaLabel}
            style={{
                position: "relative",
                display: "inline-flex",
                flexWrap: "nowrap",
                alignItems: "stretch",
                width: "auto",
                height: 28,
                borderRadius: radius.full,
                border: `1px solid ${borderColor}`,
                backgroundColor: bgColor,
                padding: PADDING,
                gap: GAP,
            }}
        >
            {/* Sliding thumb */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: PADDING,
                    left: PADDING,
                    bottom: PADDING,
                    width: `calc(50% - ${PADDING + GAP / 2}px)`,
                    backgroundColor: "#ffffff",
                    borderRadius: radius.full,
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                    transition: "transform 180ms ease",
                    transform: value === "dark" ? "translateX(0)" : `translateX(calc(100% + ${GAP}px))`,
                    pointerEvents: "none",
                }}
            />
            {OPTIONS.map((opt) => {
                const isActive = value === opt.value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(opt.value)}
                        style={{
                            flex: 1,
                            minWidth: 52,
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingLeft: 10,
                            paddingRight: 10,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.xs,
                            fontWeight: typography.fontWeight.medium,
                            color: isActive ? activeColor : semantic?.text?.muted,
                            backgroundColor: "transparent",
                            border: "none",
                            borderRadius: radius.full,
                            cursor: "pointer",
                            transition: "color 180ms ease",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
};
