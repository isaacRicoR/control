import type { ReactNode } from "react";

/**
 * Card genérica y mínima.
 * - Reutilizable
 * - Sin lógica
 * - Sin estados
 * - Copy temporal
 */
export type CardProps = {
  /** Título simple (opcional) */
  title?: string;

  /** Subtítulo simple (opcional) */
  subtitle?: string;

  /** Contenido principal del Card */
  children: ReactNode;

  /** Contenido opcional al final del Card */
  footer?: ReactNode;

  /** Enables full control of internal layout by removing default padding. Use for full-bleed content. */
  noPadding?: boolean;
};
