import React from "react";
import { colors, spacing } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";

export const TableActionsCell: React.FC = () => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div style={{ display: "flex", gap: spacing[16], alignItems: "center" }}>
            <div style={{ cursor: "pointer", opacity: 0.7 }}>
                <Icon name="eye" size={16} color={semantic.text.default} />
            </div>
            <div style={{ cursor: "pointer", opacity: 0.7 }}>
                <Icon name="edit" size={16} color={semantic.text.default} />
            </div>
            <div style={{ cursor: "pointer", opacity: 0.7, transform: "rotate(90deg)" }}>
                <Icon name="more-horizontal" size={16} color={semantic.text.default} />
            </div>
        </div>
    );
};
