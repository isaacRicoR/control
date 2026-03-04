import type { ReactNode, CSSProperties } from "react";

/**
 * PageShellProps
 * Contenedor base para páginas.
 * - Controla padding y ancho máximo
 * - UX/UI only
 */
export type PageShellProps = {
  /** Contenido de la página */
  children: ReactNode;

  /** Título de la página (H1) */
  title?: string;

  /** Elementos de navegación (Breadcrumbs) */
  breadcrumbs?: ReactNode;

  /** Acciones principales (Botones) */
  actions?: ReactNode;

  /** Estilos opcionales para overrides de layout */
  style?: CSSProperties;

  /** Estilos opcionales para el header (título/breadcrumbs) */
  headerStyle?: CSSProperties;

  /** Si false, no muestra la línea/divider bajo el header. Default: true */
  showHeaderDivider?: boolean;

  /**
   * Variante de layout:
   * - contained: Ancho máximo controlado (default, para formularios).
   * - fluid: Ancho completo sin restricción (para listados/tablas).
   */
  variant?: "contained" | "fluid";
};
