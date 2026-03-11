"use client";

import React from "react";
import { spacing } from "@tokens";

export type AppearanceSectionLayoutHeaderVariant = "tabs" | "title";

export type AppearanceSectionLayoutProps = {
    /** Contenido del header: SectionTabs (tabs) o título (title). */
    headerContent: React.ReactNode;
    /** "tabs" = header con SectionTabs; "title" = header con título simple (misma altura y alineación). */
    headerVariant: AppearanceSectionLayoutHeaderVariant;
    /** Color para la línea horizontal. */
    borderColor: string;
    /** Contenido de la sección (scrollable). */
    children: React.ReactNode;
};

/**
 * Layout reutilizable para secciones de Apariencia (Base, Galería, Estados).
 * Estructura: header interno + línea horizontal + área de contenido con scroll.
 */
export const AppearanceSectionLayout: React.FC<AppearanceSectionLayoutProps> = ({
    headerContent,
    headerVariant,
    borderColor,
    children,
}) => {
    const headerInner =
        headerVariant === "title" ? (
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: spacing[48],
                    paddingLeft: spacing[24],
                    paddingRight: spacing[24],
                }}
            >
                {headerContent}
            </div>
        ) : (
            headerContent
        );

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: spacing[16],
                    flexShrink: 0,
                    position: "relative",
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        width: "100%",
                        backgroundColor: borderColor,
                    }}
                    aria-hidden
                />
                {headerInner}
            </div>
            <div
                className="base-section-scroll"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    minHeight: 0,
                    flex: 1,
                    overflow: "auto",
                    paddingTop: spacing[12],
                }}
            >
                <div
                    style={{
                        flex: 1,
                        minHeight: 0,
                        paddingTop: spacing[16],
                        paddingBottom: spacing[24],
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
};
