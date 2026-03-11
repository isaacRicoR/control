"use client";

import React from "react";
import { spacing } from "@tokens";

type AppearanceConfigGridProps = {
    children: React.ReactNode;
    minColumnWidth?: number;
};

/**
 * Grid responsive para variantes/cards en Apariencia (especialmente Componentes).
 */
export const AppearanceConfigGrid: React.FC<AppearanceConfigGridProps> = ({
    children,
    minColumnWidth = 300,
}) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
                gap: spacing[24],
                width: "100%",
                alignItems: "start",
            }}
        >
            {children}
        </div>
    );
};
