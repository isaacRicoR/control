"use client";

import React from "react";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type SemanticLike = {
    surface?: { hover?: string; default?: string };
    text?: { default?: string; muted?: string };
};

type AppearanceConfigUsageProps = {
    usage: string[];
};

/**
 * Bloque expandido "Dónde se usa" para filas de configuración de Apariencia.
 * Padding y estilo informativo secundario compartido.
 */
export const AppearanceConfigUsage: React.FC<AppearanceConfigUsageProps> = ({ usage }) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as unknown as SemanticLike;

    return (
        <div
            style={{
                width: "100%",
                boxSizing: "border-box",
                paddingTop: spacing[16],
                paddingBottom: spacing[16],
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: semantic?.surface?.hover ?? semantic?.surface?.default,
                borderRadius: radius.sm,
            }}
        >
            <span
                style={{
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.medium,
                    color: semantic?.text?.muted,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                }}
            >
                Dónde se usa
            </span>
            <ul
                style={{
                    margin: `${spacing[8]}px 0 0`,
                    paddingLeft: spacing[16],
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[4],
                }}
            >
                {usage.map((item) => (
                    <li
                        key={item}
                        style={{
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.sm,
                            color: semantic?.text?.default,
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
