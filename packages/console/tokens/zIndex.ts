// design/tokens/zIndex.ts
// Single source of truth for z-index layering tokens.

export type ZIndexKey =
  | "base"
  | "sidebar"
  | "dropdown"
  | "overlay"
  | "modal"
  | "tooltip";

export type ZIndexTokens = Record<ZIndexKey, number>;

/**
 * zIndex (capas):
 * Defines stacking order so UI elements layer consistently.
 */
export const zIndex: ZIndexTokens = {
  base: 0,
  sidebar: 10,
  dropdown: 20,
  overlay: 30,
  modal: 40,
  tooltip: 50,
};
