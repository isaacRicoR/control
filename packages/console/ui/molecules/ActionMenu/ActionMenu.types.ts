import { ReactNode } from "react";
import { IconName } from "../../atoms/Icon/Icon";

export type ActionMenuItemType = "item" | "divider";

export type ActionMenuItemVariant = "default" | "warning" | "danger" | "disabled";

export interface ActionMenuItem {
    type: "item";
    label: string;
    icon?: IconName;
    onClick?: () => void;
    variant?: ActionMenuItemVariant;
    disabled?: boolean;
}

export interface ActionMenuDivider {
    type: "divider";
}

export type ActionMenuOption = ActionMenuItem | ActionMenuDivider;

export interface ActionMenuProps {
    trigger: ReactNode;
    title?: string;
    items?: ActionMenuOption[];
    sections?: ActionMenuItem[][]; // Support for grouped sections
    align?: "left" | "right";
    onOpenChange?: (isOpen: boolean) => void;
}
