// design/tokens/typography.ts
// Single source of truth for typography tokens.

export type FontWeightKey =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type FontSizeKey =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export type LineHeightKey =
  | "tight"
  | "normal"
  | "relaxed";

export type TypographyTokens = {
  fontFamily: {
    primary: string;
  };
  fontSize: Record<FontSizeKey, number>;
  fontWeight: Record<FontWeightKey, number>;
  lineHeight: Record<LineHeightKey, number>;
};

/**
 * Typography (tipografía):
 * Used for all text elements in the UI.
 */
export const typography: TypographyTokens = {
  fontFamily: {
    primary: "Inter, system-ui, -apple-system, sans-serif",
  },

  fontSize: {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
};
