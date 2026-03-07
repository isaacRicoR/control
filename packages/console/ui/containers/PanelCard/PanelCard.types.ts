import type { ReactNode } from "react";

/** Panel Footer Hard Lock — Props estrictas. NO acepta ReactNode de botones. */
export interface PanelCardFooterProps {
    primaryLabel: string;
    primaryOnClick: () => void;
    primaryLoading?: boolean;
    primaryDisabled?: boolean;
    secondaryLabel: string;
    secondaryOnClick: () => void;
    secondaryDisabled?: boolean;
    dangerLabel?: string;
    dangerOnClick?: () => void;
    dangerDisabled?: boolean;
    status?: ReactNode;
}

export interface PanelCardProps {
    /** Título del panel */
    title?: string;
    /** Descripción opcional del panel */
    description?: string;
    /** Contenido izquierdo del header (ej: flecha de regreso) */
    headerStart?: ReactNode;
    /** Acciones del header (alineadas a la derecha) */
    headerActions?: ReactNode;
    /** Tabs o navegación interna del header */
    tabs?: ReactNode;
    /** Contenido del body (formularios, secciones, etc.) */
    children: ReactNode;
    /** Footer: props estrictas (Panel Footer Hard Lock). NO pasar botones custom. */
    footer?: PanelCardFooterProps;
}

export interface PanelCardHeaderProps {
    title?: string;
    description?: string;
    headerStart?: ReactNode;
    tabs?: ReactNode;
    actions?: ReactNode;
}

export interface PanelCardBodyProps {
    children: ReactNode;
}
