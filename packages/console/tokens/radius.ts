// design/tokens/radius.ts
// Single source of truth for border radius tokens.

export type RadiusKey = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "card";

export type RadiusTokens = Record<RadiusKey, number>;

/**
 * Radius (radio):
 * Used for rounded corners on buttons, inputs, cards, modals, etc.
 */
export const radius: RadiusTokens = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  "2xl": 24,
  full: 9999,
  card: 18, // Official card radius (from radius.xl)
};
