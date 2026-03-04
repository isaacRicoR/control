import React from "react";
import { colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";

export const ToolbarActions: React.FC = () => {
    const { theme } = useTheme();
    const { semantic } = colors[theme];

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                cursor: "pointer",
                opacity: 0.8,
                transform: "rotate(90deg)", // Vertical kebab
            }}
        >
            <Icon name="more-horizontal" size={20} color={semantic.text.default} />
        </div>
    );
};
