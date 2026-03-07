"use client";

import React from "react";
import { colors, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { PanelCardHeader } from "./PanelCardHeader";
import { PanelCardBody } from "./PanelCardBody";
import { PanelCardFooter } from "./PanelCardFooter";
import type { PanelCardProps } from "./PanelCard.types";

/**
 * PanelCard — Contenedor estándar para paneles administrativos.
 * Implementa el Panel Card Pattern definido en UI SYSTEM MAP.
 *
 * Usado por: Configuración, Perfil, Seguridad, Integraciones, Apariencia, Formularios administrativos.
 */
export const PanelCard: React.FC<PanelCardProps> = ({
    title,
    description,
    headerStart,
    headerActions,
    tabs,
    children,
    footer,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <section
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                backgroundColor: semantic.surface.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                overflow: "hidden",
                fontFamily: "inherit",
            }}
            aria-label={title ?? "Panel"}
        >
            {(title || description || headerStart || tabs || headerActions) && (
                <PanelCardHeader
                    title={title}
                    description={description}
                    headerStart={headerStart}
                    tabs={tabs}
                    actions={headerActions}
                />
            )}

            <PanelCardBody>{children}</PanelCardBody>

            {footer != null && <PanelCardFooter {...footer} />}
        </section>
    );
};
