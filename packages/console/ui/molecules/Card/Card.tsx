import type { FC } from "react";
import type { CardProps } from "./Card.types";

import { colors, spacing, radius, typography, shadows } from "@tokens";

/**
 * Card genérica y mínima.
 * - Reutilizable
 * - Sin lógica
 * - Sin estados
 * - Tokens como única fuente de verdad
 *
 * Importante:
 * Tus colores semánticos viven en:
 * colors.semantic.<grupo>.<estado>
 */
export const Card: FC<CardProps> = ({ title, subtitle, children, footer, noPadding }) => {
  const semantic = colors.semantic;

  return (
    <section
      style={{
        background: semantic.surface.default,
        border: `1px solid ${semantic.border.default}`,
        borderRadius: radius.card,
        padding: noPadding ? 0 : spacing[24],
        fontFamily: typography.fontFamily.primary,
      }}
      aria-label={title ?? "Card"}
    >
      {(title || subtitle) && (
        <header
          style={{
            marginBottom: spacing[8],
          }}
        >
          {title && (
            <div
              style={{
                color: semantic.text.default,
                fontSize: typography.fontSize.md,
                fontWeight: typography.fontWeight.semibold,
                lineHeight: typography.lineHeight.normal,
                marginBottom: subtitle ? spacing[4] : 0,
              }}
            >
              {title}
            </div>
          )}

          {subtitle && (
            <div
              style={{
                color: semantic.text.disabled,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.regular,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              {subtitle}
            </div>
          )}
        </header>
      )}

      <div
        style={{
          color: semantic.text.default,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.regular,
          lineHeight: typography.lineHeight.normal,
        }}
      >
        {children}
      </div>

      {footer && (
        <footer
          style={{
            marginTop: spacing[24],
          }}
        >
          {footer}
        </footer>
      )}
    </section>
  );
};
