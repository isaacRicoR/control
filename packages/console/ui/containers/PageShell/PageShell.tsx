"use client";
import type { FC } from "react";
import type { PageShellProps } from "./PageShell.types";

import { colors, layout as layoutTokens, spacing, typography, zIndex } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * PageShell
 * Contenedor base para páginas.
 * - Aplica padding con tokens
 * - Controla ancho máximo con tokens
 * - UX/UI only (sin lógica)
 */
export const PageShell: FC<PageShellProps> = ({
  children,
  title,
  breadcrumbs,
  actions,
  style,
  headerStyle,
  variant = "contained",
  showHeaderDivider = true,
}) => {
  const { theme } = useTheme();
  const semantic = colors[theme].semantic;

  const hasHeader = title || breadcrumbs || actions;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: variant === "contained" ? layoutTokens.maxWidth.content : "none",
        margin: "0 auto",
        padding: spacing[24],
        ...style,
      }}
    >
      {hasHeader && (
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: zIndex.sidebar,
            backgroundColor: semantic.background.default,
            ...(showHeaderDivider ? { borderBottom: `1px solid ${semantic.border.default}` } : {}),
            marginBottom: spacing[24],
            paddingBottom: spacing[16],
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: spacing[16],
            ...headerStyle,
          }}
        >
          {/* Left Column: Title + Breadcrumb Stack */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing[4],
            }}
          >
            {title && (
              <h1
                style={{
                  margin: 0,
                  color: semantic.text.active,
                  fontSize: typography.fontSize.xl,
                  fontFamily: typography.fontFamily.primary,
                  fontWeight: typography.fontWeight.bold
                }}
              >
                {title}
              </h1>
            )}
            {breadcrumbs && (
              <div
                style={{
                  color: semantic.text.muted,
                  fontSize: typography.fontSize.sm,
                  fontFamily: typography.fontFamily.primary,
                  display: "flex",
                  alignItems: "center",
                  gap: spacing[4]
                }}
              >
                {breadcrumbs}
              </div>
            )}
          </div>

          {/* Right Column: Actions (aligned to bottom) */}
          {actions && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              {actions}
            </div>
          )}
        </header>
      )}

      {children}
    </div>
  );
};
