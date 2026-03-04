import React from "react";
import { colors, radius as radiusTokens } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type SkeletonBlockProps = {
    width?: number | string;
    height?: number | string;
    /** Pass a number (from radius tokens) or a CSS string like "50%". */
    borderRadius?: number | string;
};

/**
 * SkeletonBlock — Bloque de placeholder de carga.
 *
 * Usa tokens exclusivamente. Sin animaciones complejas.
 * Úsalo como primitiva para componer ListSkeleton y DetailSkeleton.
 */
export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({
    width = "100%",
    height = 16,
    borderRadius = radiusTokens.sm,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div
            style={{
                width,
                height,
                borderRadius,
                backgroundColor: semantic.surface.hover,
                opacity: 0.5,
            }}
        />
    );
};
