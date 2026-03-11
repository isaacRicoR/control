"use client";

import React from "react";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type SemanticLike = {
    surface?: { card?: string; default?: string };
    border?: { subtle?: string; default?: string };
    text?: { default?: string };
};

type AppearanceConfigCardProps = {
    title: string;
    titleAction?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

const BODY_PADDING = 20;
const FOOTER_PADDING_V = 16;
const FOOTER_PADDING_H = 20;

/**
 * Card contenedora para secciones de configuración de Apariencia.
 * Estructura: Card > CardBody (+ CardFooter opcional).
 * Usado en Base (Colores), Estados y Componentes.
 */
export const AppearanceConfigCard: React.FC<AppearanceConfigCardProps> = ({
    title,
    titleAction,
    children,
    footer,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as unknown as SemanticLike;
    const hasFooter = footer != null;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: 0,
                backgroundColor: semantic?.surface?.card ?? semantic?.surface?.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    flex: 1,
                    minHeight: 0,
                    paddingTop: BODY_PADDING,
                    paddingLeft: BODY_PADDING,
                    paddingRight: BODY_PADDING,
                    paddingBottom: hasFooter ? 0 : BODY_PADDING,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: spacing[8],
                        marginBottom: spacing[16],
                    }}
                >
                    {titleAction}
                    <h3
                        style={{
                            margin: 0,
                            fontFamily: typography.fontFamily.primary,
                            fontSize: typography.fontSize.md,
                            fontWeight: typography.fontWeight.semibold,
                            color: semantic?.text?.default,
                        }}
                    >
                        {title}
                    </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>{children}</div>
            </div>
            {hasFooter && (
                <div
                    style={{
                        flexShrink: 0,
                        borderTop: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                        paddingTop: FOOTER_PADDING_V,
                        paddingBottom: FOOTER_PADDING_V,
                        paddingLeft: FOOTER_PADDING_H,
                        paddingRight: FOOTER_PADDING_H,
                        display: "flex",
                        alignItems: "center",
                        gap: spacing[12],
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                    }}
                >
                    {footer}
                </div>
            )}
        </div>
    );
};
