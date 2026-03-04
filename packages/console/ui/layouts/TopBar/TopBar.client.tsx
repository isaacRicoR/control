"use client";

import type { FC } from "react";
import { colors, layout, spacing, zIndex, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { DevPanel } from "@ui/dev/DevPanel";

interface TopBarProps {
    hideDevPanel?: boolean;
}

/**
 * TopBar (Global Sticky Header)
 * Barra superior global fija (sticky)
 * Vive dentro del flujo del body (NO crea scroll propio)
 * UX/UI only — sin lógica
 */
export const TopBar: FC<TopBarProps> = ({ hideDevPanel = false }) => {
    const semantic = colors.semantic;
    const { theme, toggleTheme } = useTheme();

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: layout.sidebarWidth.expanded, // Starts after sidebar
                width: `calc(100% - ${layout.sidebarWidth.expanded}px)`, // Fills remaining space
                zIndex: zIndex.overlay, // encima del contenido, debajo de modales
                height: layout.appBarHeight,
                backgroundColor: semantic.surface.default,
                borderBottom: `1px solid ${semantic.border.default}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Spread content
                paddingLeft: spacing[24],
                paddingRight: spacing[24],
            }}
        >
            {/* Contenido temporal / placeholder */}
            <span
                style={{
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.sm,
                    color: semantic.text.disabled,
                }}
            >
                Top Bar Global
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: spacing[16] }}>
                {!hideDevPanel && <DevPanel />}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    style={{
                        background: "transparent",
                        border: `1px solid ${semantic.border.default}`,
                        borderRadius: radius.md,
                        cursor: "pointer",
                        padding: spacing[8],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: semantic.text.default,
                        outline: "none",
                    }}
                >
                    {theme === "light" ? (
                        // Moon Icon (for Light mode -> switch to Dark)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    ) : (
                        // Sun Icon (for Dark mode -> switch to Light)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
};
