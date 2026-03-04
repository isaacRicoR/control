"use client";

import React, { FC } from "react";
import { colors, radius, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export type BadgeVariant = "success" | "warning" | "error" | "neutral" | "info";
export type BadgeAppearance = "filled" | "ghost";

interface BadgeProps {
    label: React.ReactNode;
    variant?: BadgeVariant;
    appearance?: BadgeAppearance;
    interactive?: boolean;
    fontSize?: number;
}

const getBadgeStyles = (
    variant: BadgeVariant = "neutral",
    appearance: BadgeAppearance = "filled",
    interactive: boolean = false,
    fontSize?: number,
    theme: "light" | "dark" = "light"
): React.CSSProperties => {
    const { semantic } = colors[theme];

    let bg = semantic.surface.hover;        // neutral muted surface
    let text = semantic.text.disabled;      // muted text
    let border = "transparent";

    switch (variant) {
        case "success":
            if (theme === "light") {
                bg = "var(--semantic-status-success-bg, var(--semantic-success-disabled))";
                text = "var(--semantic-status-success-fg, var(--semantic-success-default))";
                border = "var(--semantic-status-success-border, var(--semantic-success-default))";
            } else {
                bg = semantic.success.disabled;
                text = semantic.success.default;
                border = semantic.success.default;
            }
            break;
        case "warning":
            bg = semantic.warning.disabled;
            text = semantic.warning.default;
            border = semantic.warning.default;
            break;
        case "error":
            bg = semantic.danger.disabled;
            text = semantic.danger.default;
            border = semantic.danger.default;
            break;
        case "info":
            bg = semantic.info.disabled;
            text = semantic.info.default;
            border = semantic.info.default;
            break;
        case "neutral":
        default:
            bg = semantic.surface.hover;
            text = semantic.text.disabled;
            border = "transparent";
            break;
    }

    if (appearance === "ghost") {
        bg = "transparent";
        border = "none";
        // Text color remains from variant
    }

    const isSuccessTextOnly = theme === "light" && variant === "success" && appearance === "ghost";

    return {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: appearance === "filled" ? `${spacing[4]}px ${spacing[8]}px` : 0,
        borderRadius: radius["2xl"],
        backgroundColor: bg,
        color: text,
        fontSize: fontSize || typography.fontSize.xs,
        fontWeight: isSuccessTextOnly ? 600 : typography.fontWeight.medium,
        lineHeight: 1,
        border: appearance === "filled" ? `1px solid ${border}` : "none",
        whiteSpace: "nowrap",
        cursor: interactive ? "pointer" : "default",
        transition: "opacity 0.2s ease",
    };
};

export const Badge: FC<BadgeProps> = ({
    label,
    variant = "neutral",
    appearance = "filled",
    interactive = false,
    fontSize
}) => {
    const { theme } = useTheme();

    return (
        <>
            <style>{`
                .badge-interactive:hover {
                    opacity: 0.8;
                }
            `}</style>
            <span
                className={interactive ? "badge-interactive" : undefined}
                style={getBadgeStyles(variant, appearance, interactive, fontSize, theme)}
            >
                {label}
            </span>
        </>
    );
};
