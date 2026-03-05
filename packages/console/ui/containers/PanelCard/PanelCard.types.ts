import type { ReactNode } from "react";

export interface PanelCardProps {
    /** Título del panel */
    title?: string;
    /** Descripción opcional del panel */
    description?: string;
    /** Acciones del header (alineadas a la derecha) */
    headerActions?: ReactNode;
    /** Tabs o navegación interna del header */
    tabs?: ReactNode;
    /** Contenido del body (formularios, secciones, etc.) */
    children: ReactNode;
    /** Contenido del footer (acciones) */
    footer?: ReactNode;
    /** Acción destructiva (opcional, separada visualmente) */
    dangerAction?: ReactNode;
    /** Acción secundaria (ej: Cancelar) */
    secondaryAction?: ReactNode;
    /** Acción primaria (ej: Guardar / Aplicar) */
    primaryAction?: ReactNode;
    /** Estado de guardado (ej: "Guardado", mensaje de error) */
    status?: ReactNode;
}

export interface PanelCardHeaderProps {
    title?: string;
    description?: string;
    tabs?: ReactNode;
    actions?: ReactNode;
}

export interface PanelCardBodyProps {
    children: ReactNode;
}

export interface PanelCardFooterProps {
    /** Acción destructiva (alineada a la izquierda, separada) */
    dangerAction?: ReactNode;
    /** Acción secundaria (ej: Cancelar) */
    secondaryAction?: ReactNode;
    /** Acción primaria (ej: Guardar) */
    primaryAction?: ReactNode;
    /** Estado de guardado o feedback */
    status?: ReactNode;
    /** Contenido custom del footer (si se usa, ignora las props de acción) */
    children?: ReactNode;
}
