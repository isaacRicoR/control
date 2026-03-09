"use client";

import React from "react";
import { spacing } from "@tokens";
import type { PanelCardBodyProps } from "./PanelCard.types";
import "./PanelCardBody.css";

/**
 * PanelCardBody — Contenido scrolleable del Panel Card Pattern.
 * Layout flexible para formularios, configuraciones, secciones, listas.
 * Usa scrollbar custom del sistema (mismo patrón que SelectSingle, Textarea).
 */
export const PanelCardBody: React.FC<PanelCardBodyProps> = ({ children, style: customStyle }) => {
    const baseStyle: React.CSSProperties = {
        flex: 1,
        overflowY: "auto",
        minHeight: 0,
        padding: spacing[24],
    };
    return (
        <div
            className="panel-card-body-scroll"
            style={{ ...baseStyle, ...customStyle }}
        >
            {children}
        </div>
    );
};
