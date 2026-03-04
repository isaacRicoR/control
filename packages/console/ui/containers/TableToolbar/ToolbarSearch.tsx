import React from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export const ToolbarSearch: React.FC = () => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: spacing[8],
                padding: `${spacing[8]}px ${spacing[12]}px`,
                backgroundColor: semantic.surface.default,
                border: `1px solid ${semantic.border.default}`,
                borderRadius: radius.md,
                width: 240,
            }}
        >
            {/* Style for placeholder specific targeting */}
            <style>{`
                .toolbar-search-input::placeholder {
                    color: ${semantic.text.disabled};
                    opacity: 1;
                }
            `}</style>

            {/* TODO: Search Icon Missing in Icon System. Asking User. */}
            {/* <Icon name="search" size={16} color={semantic.text.disabled} /> */}
            <input
                type="text"
                placeholder="Buscar..."
                className="toolbar-search-input"
                style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: semantic.text.default,
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.sm,
                    width: "100%",
                }}
            />
        </div>
    );
};
