export type TableToolbarTab = {
    label: string;
    count?: number;
    // Maps to specific visual styles found in clients
    variant?: "success" | "warning" | "danger" | "neutral" | "default";
};

export type TableToolbarProps = {
    className?: string;
    style?: React.CSSProperties;

    // Tabs (statusTabs is alias for tabs)
    tabs?: TableToolbarTab[];
    statusTabs?: TableToolbarTab[];
    activeTab?: string;
    onTabChange?: (tab: string) => void;

    // Slots (filtersSlot = startContent, actionsSlot = endContent)
    startContent?: React.ReactNode;
    filtersSlot?: React.ReactNode;
    endContent?: React.ReactNode;
    actionsSlot?: React.ReactNode;

    // Search integrated
    showSearch?: boolean;
    searchValue?: string;
    onSearchChange?: (val: string) => void;
    searchPlaceholder?: string;
};
