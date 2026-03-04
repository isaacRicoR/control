import React, { FC } from "react";
import { colors, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

interface AvatarProps {
    /** URL de la imagen. Si no se proporciona, muestra las iniciales. */
    src?: string | null;
    /** Nombre completo para generar iniciales automáticamente. */
    name?: string;
    /** Iniciales manuales (ej: "JD"). */
    initials?: string;
    /** Color de fondo para el círculo de iniciales. */
    backgroundColor?: string;
    /** Tamaño en píxeles (ancho y alto). Default: 40. */
    size?: number;
    /** Tamaño de fuente manual. */
    fontSize?: string | number;
    /** Estilos adicionales para el contenedor. */
    style?: React.CSSProperties;
}

/**
 * Avatar Atom — Círculo con imagen o iniciales de usuario.
 * 
 * Sigue la regla de usar var(--semantic-text-onSolid) para las iniciales
 * sobre fondos de color, asegurando legibilidad en modo dark.
 */
export const Avatar: FC<AvatarProps> = ({
    src,
    name,
    initials,
    backgroundColor,
    size = 40,
    fontSize,
    style,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const getInitials = () => {
        if (initials) return initials;
        if (!name) return "??";
        return name
            .split(" ")
            .filter(Boolean)
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    const text = getInitials();

    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: backgroundColor || semantic.surface.hover,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                ...style,
            }}
        >
            {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={src}
                    alt={name || "Avatar"}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            ) : (
                <span
                    style={{
                        color: semantic.text.onSolid, // Regla oficial: onSolid para iniciales
                        fontSize: fontSize || (size > 40 ? "2.5rem" : 14),
                        fontWeight: 600,
                        fontFamily: typography.fontFamily.primary,
                        lineHeight: 1,
                    }}
                >
                    {text}
                </span>
            )}
        </div>
    );
};
