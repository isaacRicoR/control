import { FC, HTMLAttributes, CSSProperties } from "react";
import { colors, radius, shadows } from "@tokens";
import "./FloatingSurface.css";

export interface FloatingSurfaceProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "strong";
}

import { useTheme } from "@ui/context/ThemeProvider";

export const FloatingSurface: FC<FloatingSurfaceProps> = ({
    children,
    className,
    style,
    variant = "default",
    ...props
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const isStrong = variant === "strong";

    return (
        <div
            className={`floating-surface ${className || ""}`}
            style={{
                ...style,
                "--floating-bg": semantic.surface.default,
                "--floating-border": semantic.border.default,
                "--floating-radius": `${radius.lg}px`,
                "--floating-shadow": shadows.dropdown,
                "--floating-glow-top": semantic.primary.default, // Greenish (Brand)
                "--floating-glow-bottom": semantic.danger.default, // Reddish (Danger)
                "--floating-border-active": semantic.border.active,
                // Intensity variables
                "--floating-glow-opacity-top": isStrong ? "0.22" : "0.15",
                "--floating-glow-opacity-bottom": isStrong ? "0.18" : "0.12",
                "--floating-glow-blur": isStrong ? "32px" : "16px",
            } as CSSProperties}
            {...props}
        >
            {children}
        </div>
    );
};
