import React from "react";

export type StatusTabVariant = "success" | "warning" | "danger" | "neutral" | "default";

export interface StatusTabItem {
    label: string;
    value: string;
    count?: number;
    variant?: StatusTabVariant;
}

export interface StatusTabsProps {
    items: StatusTabItem[];
    activeValue: string;
    onChange: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
