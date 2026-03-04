"use client";

import { forwardRef } from 'react';
import { colors, spacing, radius, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { useVisualPreset } from "@core/visual/visualPresetStore";
import { getThemeTokens } from "@core/visual/themeRegistry";

import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /**
   * primary       — Acción principal con color de marca (accent). Ej: "Guardar", "Confirmar".
   * actionPrimary — Acción primaria oficial del sistema (sin accent). Light: negro azulado. Dark: blanco.
   * white         — Acción principal de creación, sobre fondos de consola. Ej: "Crear".
   * create        — Botón neutro tipo "Crear usuario": gris claro/ Blanco según theme, texto oscuro.
   * secondary     — Acción funcional no primaria, fondo neutro. Ej: "Exportar".
   * error         — Acción destructiva. Ej: "Eliminar".
   */
  variant?: 'primary' | 'actionPrimary' | 'secondary' | 'white' | 'create' | 'error';
  size?: 'md' | 'sm';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
  size = 'md',
  style,
  className,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const { currentPreset } = useVisualPreset();
  const themeTokens = getThemeTokens(currentPreset, theme);

  let bg = colors.semantic.primary.default;
  let text = colors.semantic.text.default;
  let border = colors.semantic.border.default;
  let variantClass = "";
  let cssVariables: Record<string, string> = {};

  const isSmall = size === 'sm';
  const btnHeight = isSmall ? spacing[32] + spacing[4] : spacing[48];
  const paddingX = isSmall ? spacing[12] : spacing[16];

  if (disabled) {
    bg = colors.semantic.primary.disabled;
    text = colors.semantic.text.disabled;
    border = colors.semantic.border.disabled;
  } else if (variant === 'primary') {
    const pt = colors.semantic.button?.primary;
    const packBg = themeTokens?.buttonPrimaryBg;
    const packText = themeTokens?.buttonPrimaryText;
    bg = packBg ?? pt?.bg ?? colors.semantic.primary.default;
    text = packText ?? pt?.text ?? colors.semantic.text.active;
    border = bg;
    variantClass = "button-variant-primary";
    const hoverVal = pt?.hover ?? pt?.bg ?? colors.semantic.primary.hover;
    cssVariables = { "--button-primary-hover": hoverVal };
  } else if (variant === 'actionPrimary') {
    const ap = colors[theme].semantic.button?.actionPrimary;
    const packBg = themeTokens?.buttonActionPrimaryBg;
    const packText = themeTokens?.buttonActionPrimaryText;

    bg = packBg ?? ap?.bg ?? "var(--semantic-button-action-primary-bg)";
    text = packText ?? ap?.text ?? "var(--semantic-button-action-primary-text)";
    border = bg;
    variantClass = "button-variant-action-primary";
    cssVariables = { "--button-action-primary-hover": ap?.hoverBg ?? "var(--semantic-button-action-primary-hover)" };
  } else if (variant === 'secondary') {
    // Acción funcional no primaria: fondo neutro de superficie, texto de máximo contraste, borde visible.
    bg = colors.semantic.surface.default;
    text = colors.semantic.text.active;
    border = colors.semantic.border.default;
    variantClass = "button-variant-secondary";
    cssVariables = {
      "--button-secondary-hover-bg": colors.semantic.surface.hover,
      "--button-secondary-active-bg": colors.semantic.surface.active,
      "--button-secondary-hover-border": colors.semantic.border.default,
    };
  } else if (variant === 'white') {
    // 🔒 Refactored to use semantic tokens (No leaks)
    bg = colors.semantic.button?.white.bg ?? "white";
    text = colors.semantic.button?.white.text ?? "black";
    border = colors.semantic.button?.white.border ?? "white";
    variantClass = "button-variant-white";

    // Inject semantic token into CSS variable for the external CSS file to use
    // Using explicit cast for custom property
    cssVariables = {
      "--button-white-hover-bg": colors.semantic.button?.white.hoverBg ?? "#F4F4F5"
    };
  } else if (variant === 'create' && colors.semantic.button?.create) {
    const ct = colors.semantic.button.create;
    bg = ct.bg;
    text = ct.text;
    border = ct.border;
    variantClass = "button-variant-create";
    cssVariables = { "--button-create-hover": ct.hover };
  } else if (variant === 'error') {
    bg = colors.semantic.error.default;
    text = colors.semantic.text.active; // Using active text for better contrast on red
    border = colors.semantic.error.default;
  }

  return (
    <button
      ref={ref}
      className={`${className || ''} ${variantClass}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        /* 🔒 Comportamiento base correcto */
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        height: `${btnHeight}px`,

        /* 🎨 Tokens */
        padding: `0 ${paddingX}px`,
        borderRadius: radius.md,
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.md,
        lineHeight: "1", // Center text in explicit height
        fontWeight: typography.fontWeight.medium,

        background: bg,
        color: text,
        border: `1px solid ${border}`,

        cursor: disabled ? 'not-allowed' : 'pointer',
        outline: 'none',

        ...style,
        ...cssVariables,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
