"use client";

import React from "react";
import { spacing } from "@tokens";
import type { PanelCardBodyProps } from "./PanelCard.types";

/**
 * PanelCardBody — Contenido scrolleable del Panel Card Pattern.
 * Layout flexible para formularios, configuraciones, secciones, listas.
 */
export const PanelCardBody: React.FC<PanelCardBodyProps> = ({ children }) => {
    return (
        <div
            style={{
                flex: 1,
                overflowY: "auto",
                minHeight: 0,
                padding: spacing[24],
            }}
        >
            {children}
        </div>
    );
};
