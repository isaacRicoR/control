import React, { FC } from "react";
import { colors, spacing, typography, radius } from "@tokens";
import { Icon } from "../../atoms/Icon/Icon";
import { Text as AppText } from "../../atoms/Text/Text";
import { useTheme } from "@ui/context/ThemeProvider";

interface SidebarHeaderProps {
    appName: string;
    isNASA?: boolean;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ appName, isNASA = false }) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const headerStyle: React.CSSProperties = {
        height: 64, // Altura fija compacta
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Logo a izq, icono a der
        marginBottom: 0, // Unificado con el divider
        paddingLeft: spacing[8],
        paddingRight: spacing[8],
        flexShrink: 0, // No encoger
    };

    const logoContainerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: spacing[12],
    };

    // Logo circular simulado con tokens
    const logoCircleStyle: React.CSSProperties = {
        width: 32,
        height: 32,
        borderRadius: radius["md"], // "Rounded square" look
        backgroundColor: isNASA ? semantic.border.default : semantic.primary.default, // Neutro en NASA
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isNASA ? semantic.text.disabled : colors.semantic.button?.white.text,
        fontWeight: typography.fontWeight.medium, // No bold
        fontSize: typography.fontSize.xs,
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* 1. Header Superior */}
            <div style={headerStyle}>
                <div style={logoContainerStyle}>
                    <div style={logoCircleStyle}>
                        {isNASA ? "ID" : "C"}
                    </div>
                    <AppText
                        as="span"
                        style={{
                            fontWeight: typography.fontWeight.medium,
                            fontSize: typography.fontSize.lg,
                            color: isNASA ? semantic.text.disabled : semantic.text.default,
                        }}
                    >
                        {isNASA ? "Sin identidad" : appName}
                    </AppText>
                </div>

                {/* Icono de colapso neutro */}
                <div style={{ color: semantic.text.disabled, display: "flex" }}>
                    <Icon size={20} title="Colapsar" name="chevron-left" />
                </div>
            </div>

            {/* Divider Separator (Top) */}
            <div
                style={{
                    height: 1,
                    backgroundColor: semantic.border.default,
                    marginBottom: spacing[8], // Reduced from 16 to 8 for centering
                    width: "100%",
                    flexShrink: 0,
                }}
            />
        </div>
    );
};
