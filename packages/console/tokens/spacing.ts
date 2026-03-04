// design/tokens/spacing.ts
// Single source of truth for spacing tokens.
// Rule: do not hardcode spacing values anywhere else.

export type SpacingKey =
     | 0 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 64
  | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export type SpacingTokens = Record<SpacingKey, number>;

/**
 * Spacing (espaciado):
 * Used for padding, margin, gap, and layout spacing.
 * Includes both numeric scale and semantic aliases.
 */
export const spacing: SpacingTokens = {
  // Numeric scale (legacy/granular support)
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  64: 64,

  // Semantic aliases
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
  "4xl": 64, // Extended for larger layouts
};
