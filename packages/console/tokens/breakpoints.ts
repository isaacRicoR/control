// design/tokens/breakpoints.ts
// Single source of truth for responsive breakpoints.

export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";

export type BreakpointsTokens = Record<BreakpointKey, number>;

/**
 * Breakpoints (puntos de quiebre):
 * Used to define responsive behavior across the app.
 *
 * NOTE: Replace with Figma or product standard if different.
 */
export const breakpoints: BreakpointsTokens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
