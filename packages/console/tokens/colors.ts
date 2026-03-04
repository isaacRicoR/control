import { activeBrand } from "@core/brands";

// design/tokens/colors.ts
// Single source of truth for color tokens.
// Dark-first, structure ready for light later.

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
  | "warning"
  | "danger"
  | "info"
  | "error"
  | "sidebar"
  | "button";

/**
 * Base palette (paleta base) — nunca se usa directo en componentes.
 * Solo sirve para mapear a los semánticos.
 */
export type BasePalette = {
  neutral: ColorScale;
  brand: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  info: ColorScale;
};

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
 * Semantic palette (paleta semántica) — Dark
 * Esto SÍ lo consumen los componentes.
 */
const semanticDark: SemanticPalette = {
  background: {
    default: baseDark.neutral[50],
    hover: baseDark.neutral[100],
    active: baseDark.neutral[200],
    disabled: baseDark.neutral[100],
    focus: baseDark.neutral[50],
    selected: baseDark.neutral[100],
  },

  surface: {
    default: baseDark.neutral[200],
    hover: baseDark.neutral[300],
    active: baseDark.neutral[300],
    disabled: baseDark.neutral[200],
    focus: baseDark.neutral[100],
    selected: baseDark.brand[50],
  },

  elevated: {
    default: baseDark.neutral[200],
    hover: baseDark.neutral[300],
    active: baseDark.neutral[400],
    disabled: baseDark.neutral[300],
    focus: baseDark.neutral[200],
    selected: baseDark.neutral[300],
  },

  border: {
    default: baseDark.neutral[300],
    hover: baseDark.neutral[400],
    active: baseDark.neutral[500],
    disabled: baseDark.neutral[300],
    focus: baseDark.brand[600],
    selected: baseDark.brand[600],
  },

  text: {
    default: baseDark.neutral[600],
    hover: baseDark.neutral[1000],
    active: baseDark.neutral[1000],
    disabled: baseDark.neutral[500],
    focus: baseDark.neutral[1000],
    selected: baseDark.neutral[1000],
    onSolid: baseDark.neutral[1000],
  },

  primary: {
    default: baseDark.brand[600],
    hover: baseDark.brand[700],
    active: baseDark.brand[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.brand[600],
    selected: baseDark.brand[700],
  },

  secondary: {
    default: baseDark.neutral[300],
    hover: baseDark.neutral[400],
    active: baseDark.neutral[500],
    disabled: baseDark.neutral[200],
    focus: baseDark.neutral[300],
    selected: baseDark.neutral[400],
  },

  success: {
    default: baseDark.success[600],
    hover: baseDark.success[700],
    active: baseDark.success[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.success[600],
    selected: baseDark.success[700],
    100: baseDark.success[100],
    200: baseDark.success[200],
    300: baseDark.success[300],
  },

  warning: {
    default: baseDark.warning[600],
    hover: baseDark.warning[700],
    active: baseDark.warning[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.warning[600],
    selected: baseDark.warning[700],
    100: baseDark.warning[100],
    200: baseDark.warning[200],
    300: baseDark.warning[300],
    400: baseDark.warning[400],
    emphasis: "#ff8c00", // Corporate Orange (Dark Orange)
  },

  danger: {
    default: baseDark.danger[600],
    hover: baseDark.danger[700],
    active: baseDark.danger[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.danger[600],
    selected: baseDark.danger[700],
    100: baseDark.danger[100],
    200: baseDark.danger[200],
    300: baseDark.danger[300],
    400: baseDark.danger[400],
  },

  info: {
    default: baseDark.info[600],
    hover: baseDark.info[700],
    active: baseDark.info[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.info[600],
    selected: baseDark.info[700],
  },
  error: {
    default: baseDark.danger[600],
    hover: baseDark.danger[700],
    active: baseDark.danger[500],
    disabled: baseDark.neutral[400],
    focus: baseDark.danger[600],
    selected: baseDark.danger[700],
  },

  button: {
    white: {
      bg: baseDark.neutral[1000],
      text: baseDark.neutral[0],
      border: baseDark.neutral[1000],
      hoverBg: baseDark.neutral[950],
    },
    actionPrimary: {
      bg: baseDark.neutral[1000],
      text: baseDark.neutral[0],
      hoverBg: baseDark.neutral[950],
    },
  },

  sidebar: {
    groupLabel: baseDark.neutral[500], // #5A6672
  },
};

/**
 * Light theme placeholder (estructura lista, no se usa todavía).
 */
const baseLight: BasePalette = {
  // TODO: definir cuando se apruebe Light Mode
  neutral: baseDark.neutral,
  brand: baseDark.brand,
  success: baseDark.success,
  warning: baseDark.warning,
  danger: baseDark.danger,
  info: baseDark.info,
};

const semanticLight: SemanticPalette = {
  // TODO: definir cuando se apruebe Light Mode
  ...semanticDark,
  button: {
    ...semanticDark.button,
    actionPrimary: {
      bg: baseDark.neutral[0],
      text: baseDark.neutral[1000],
      hoverBg: baseDark.neutral[100],
    },
  },
};

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
  secondary: semanticDark.secondary, // Still using fallback (neutral)
  elevated: semanticDark.elevated,   // Still using fallback (neutral)

  button: {
    white: {
      bg: "var(--semantic-button-white-bg)",
      text: "var(--semantic-button-white-text)",
      border: "var(--semantic-button-white-border)",
      hoverBg: "var(--semantic-button-white-hoverBg)",
    }
  },

  sidebar: {
    groupLabel: "var(--semantic-sidebar-group-label)",
  },
};

export const colors: TokensColors & { semantic: SemanticPalette } = {
  dark: { base: baseDark, semantic: semanticDark },
  light: { base: baseLight, semantic: semanticLight },
  semantic: semanticActive,
};
