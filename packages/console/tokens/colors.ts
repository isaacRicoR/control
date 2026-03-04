import { activeBrand } from "@core/brands";

// design/tokens/colors.ts
// Single source of truth for color tokens.

export type ColorScaleKey =
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | 1000;

export type ColorScale = Record<ColorScaleKey, string>;

export type SemanticState =
  | "default"
  | "hover"
  | "active"
  | "disabled"
  | "focus"
  | "selected";

export type SemanticGroup =
  | "background"
  | "surface"
  | "elevated"
  | "border"
  | "text"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "error"
  | "sidebar"
  | "button";

export type SemanticTokenGroup = Record<SemanticState, string> & {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  emphasis?: string;
  onSolid?: string;
};

export type SemanticPalette = Record<Exclude<SemanticGroup, "sidebar" | "button">, SemanticTokenGroup> & {
  sidebar?: {
    groupLabel: string;
  };
  button?: {
    white: {
      bg: string;
      text: string;
      border: string;
      hoverBg: string;
    };
    actionPrimary: {
      bg: string;
      text: string;
      hoverBg: string;
    };
  };
};

export type ThemeName = "dark" | "light";

export type ThemeColors = {
  base: BasePalette;
  semantic: SemanticPalette;
};

export type TokensColors = Record<ThemeName, ThemeColors>;

export type BasePalette = {
  neutral: ColorScale;
  brand: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
};

/**
 * Base palette (paleta base) — Dark
 * Conectado al Brand Layer (src/core/brands)
 */
const baseDark: BasePalette = {
  neutral: activeBrand.neutral,
  brand: activeBrand.primary,
  success: activeBrand.success,
  warning: activeBrand.warning,
  danger: activeBrand.danger,
  info: activeBrand.info,
};

/**
 * Base palette (paleta base) — Light placeholder
 */
const baseLight: BasePalette = {
  neutral: activeBrand.neutral,
  brand: activeBrand.primary,
  success: activeBrand.success,
  warning: activeBrand.warning,
  danger: activeBrand.danger,
  info: activeBrand.info,
};

/**
 * Semantic Active — Uses CSS Variables for dynamic themes.
 * This is the primary source for all semantic tokens.
 */
const semanticActive: SemanticPalette = {
  background: {
    default: "var(--semantic-background-default)",
    hover: "var(--semantic-background-hover)",
    active: "var(--semantic-background-active)",
    disabled: "var(--semantic-background-disabled)",
    focus: "var(--semantic-background-focus)",
    selected: "var(--semantic-background-selected)",
  },
  surface: {
    default: "var(--semantic-surface-default)",
    hover: "var(--semantic-surface-hover)",
    active: "var(--semantic-surface-active)",
    disabled: "var(--semantic-surface-disabled)",
    focus: "var(--semantic-surface-focus)",
    selected: "var(--semantic-surface-selected)",
  },
  border: {
    default: "var(--semantic-border-default)",
    hover: "var(--semantic-border-hover)",
    active: "var(--semantic-border-active)",
    disabled: "var(--semantic-border-disabled)",
    focus: "var(--semantic-border-focus)",
    selected: "var(--semantic-border-selected)",
  },
  text: {
    default: "var(--semantic-text-default)",
    hover: "var(--semantic-text-hover)",
    active: "var(--semantic-text-active)",
    disabled: "var(--semantic-text-disabled)",
    focus: "var(--semantic-text-focus)",
    selected: "var(--semantic-text-selected)",
    onSolid: "var(--semantic-text-on-solid)",
  },
  primary: {
    default: "var(--semantic-primary-default)",
    hover: "var(--semantic-primary-hover)",
    active: "var(--semantic-primary-active)",
    disabled: "var(--semantic-primary-disabled)",
    focus: "var(--semantic-primary-focus)",
    selected: "var(--semantic-primary-selected)",
  },
  danger: {
    default: "var(--semantic-danger-default)",
    hover: "var(--semantic-danger-hover)",
    active: "var(--semantic-danger-active)",
    disabled: "var(--semantic-danger-disabled)",
    focus: "var(--semantic-danger-focus)",
    selected: "var(--semantic-danger-selected)",
    100: "var(--status-danger-100)",
    200: "var(--status-danger-200)",
    300: "var(--status-danger-300)",
    400: "var(--status-danger-400)",
  },
  success: {
    default: "var(--semantic-success-default)",
    hover: "var(--semantic-success-hover)",
    active: "var(--semantic-success-active)",
    disabled: "var(--semantic-success-disabled)",
    focus: "var(--semantic-success-focus)",
    selected: "var(--semantic-success-selected)",
    100: "var(--status-success-100)",
    200: "var(--status-success-200)",
    300: "var(--status-success-300)",
  },
  warning: {
    default: "var(--semantic-warning-default)",
    hover: "var(--semantic-warning-hover)",
    active: "var(--semantic-warning-active)",
    disabled: "var(--semantic-warning-disabled)",
    focus: "var(--semantic-warning-focus)",
    selected: "var(--semantic-warning-selected)",
    100: "var(--status-warning-100)",
    200: "var(--status-warning-200)",
    300: "var(--status-warning-300)",
    400: "var(--status-warning-400)",
    emphasis: "var(--status-warning-emphasis)",
  },
  info: {
    default: "var(--semantic-info-default)",
    hover: "var(--semantic-info-hover)",
    active: "var(--semantic-info-active)",
    disabled: "var(--semantic-info-disabled)",
    focus: "var(--semantic-info-focus)",
    selected: "var(--semantic-info-selected)",
  },
  error: {
    default: "var(--semantic-error-default)",
    hover: "var(--semantic-error-hover)",
    active: "var(--semantic-error-active)",
    disabled: "var(--semantic-error-disabled)",
    focus: "var(--semantic-error-focus)",
    selected: "var(--semantic-error-selected)",
  },
  secondary: {
    default: "var(--semantic-secondary-default)",
    hover: "var(--semantic-secondary-hover)",
    active: "var(--semantic-secondary-active)",
    disabled: "var(--semantic-secondary-active)",
    focus: "var(--semantic-secondary-default)",
    selected: "var(--semantic-secondary-hover)",
  },
  elevated: {
    default: "var(--semantic-elevated-default)",
    hover: "var(--semantic-elevated-hover)",
    active: "var(--semantic-elevated-active)",
    disabled: "var(--semantic-elevated-default)",
    focus: "var(--semantic-elevated-hover)",
    selected: "var(--semantic-elevated-active)",
  },
  button: {
    white: {
      bg: "var(--semantic-button-white-bg)",
      text: "var(--semantic-button-white-text)",
      border: "var(--semantic-button-white-border)",
      hoverBg: "var(--semantic-button-white-hoverBg)",
    },
    actionPrimary: {
      bg: "var(--semantic-button-action-primary-bg)",
      text: "var(--semantic-button-action-primary-text)",
      hoverBg: "var(--semantic-button-action-primary-hover)",
    }
  },
  sidebar: {
    groupLabel: "var(--semantic-sidebar-group-label)",
  },
};

/**
 * Semantic palette — Dark/Light wrappers around semanticActive
 */
const semanticDark: SemanticPalette = {
  ...semanticActive,
};

const semanticLight: SemanticPalette = {
  ...semanticActive,
};

export const colors: TokensColors & { semantic: SemanticPalette } = {
  dark: { base: baseDark, semantic: semanticDark },
  light: { base: baseLight, semantic: semanticLight },
  semantic: semanticActive,
};
