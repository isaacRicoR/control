import React, { FC, useState } from "react";
import { colors, spacing } from "@tokens";
import { SidebarItem } from "./SidebarItem";

export const SidebarFooter: FC = () => {
    const [hovered, setHovered] = useState(false);

    const footerStyle: React.CSSProperties = {
        marginTop: "auto", // Empuja al fondo pero flex column se encarga del resto
        paddingTop: spacing[24],
        borderTop: `1px solid ${colors.semantic.border.default}`,
        flexShrink: 0, // No encoger el footer
    };

    return (
        <div style={footerStyle}>
            <SidebarItem
                label="Cerrar sesión"
                icon="log-out"
                isHovered={hovered}
                onHover={setHovered}
            />
        </div>
    );
};
