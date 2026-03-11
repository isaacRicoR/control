import React from "react";

export interface SectionTabItem {
    label: string;
    value: string;
}

export interface SectionTabsProps {
    /** Lista de tabs */
    items: SectionTabItem[];
    /** Valor del tab activo */
    activeValue: string;
    /** Callback al cambiar de tab */
    onChange: (value: string) => void;
    /** Etiqueta de accesibilidad para el tablist */
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
}
