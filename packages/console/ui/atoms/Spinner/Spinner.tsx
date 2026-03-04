"use client";

import React, { useContext } from "react";
import { colors } from "@tokens";
import { ThemeContext } from "@ui/context/ThemeProvider";

type SpinnerProps = {
    size?: number;
    color?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
    size = 24,
    color,
}) => {
    // We use useContext directly to avoid useTheme() throwing if Provider is missing
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || "light";
    
    // Fallback to global semantic tokens if theme is not found in tokens
    const semantic = (colors as any)[theme]?.semantic || colors.semantic;
    const effectiveColor = color || semantic.primary.default;

    return (
        <div style={{ display: "inline-block", width: size, height: size }}>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animation: "spin 1s linear infinite" }}
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={effectiveColor}
                    strokeWidth="3"
                    strokeOpacity="0.25"
                />
                <path
                    d="M12 2C6.47715 2 2 6.47715 2 12"
                    stroke={effectiveColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};
