"use client";

import { useState } from "react";
import { Icon, IconName } from "../Icon/Icon";
import { colors, radius, spacing } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type ActionIconProps = {
    name: IconName;
    onClick?: (e: React.MouseEvent) => void;
    label?: string;
    size?: number;
    color?: string;
    /** Optional: hover color when provided (e.g. for Users list Acciones) */
    hoverColor?: string;
};

export const ActionIcon = ({
    name,
    onClick,
    label,
    size = 16,
    color,
    hoverColor,
}: ActionIconProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const effectiveColor = color || semantic.icon?.muted || semantic.text.muted || semantic.text.default;
    const effectiveHoverColor = hoverColor ?? semantic.icon?.active ?? semantic.text.hover;

    return (
        <div
            onClick={onClick}
            role="button"
            aria-label={label}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor: "pointer",
                padding: spacing[8], // 8px ensures 32-34px target
                borderRadius: radius.md,
                backgroundColor: isHovered ? semantic.surface.hover : "transparent",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: isHovered ? effectiveHoverColor : effectiveColor,
                // No border to keep it clean
            }}
        >
            <Icon
                name={name}
                size={size}
                color="currentColor" // Use parent color for hover effect
            />
        </div>
    );
};
