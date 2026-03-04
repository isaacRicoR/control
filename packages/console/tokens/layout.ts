// design/tokens/layout.ts
// Single source of truth for layout tokens.

export type LayoutTokens = {
  maxWidth: {
    app: number;
    content: number;
    modal: number;
    compact: number;
  };
  sidebarWidth: {
    collapsed: number;
    expanded: number;
  };
  appBarHeight: number;
  components: {
    avatar: {
      md: number;
      lg: number;
      xl: number;
    };
  };
};

/**
 * Layout (disposición):
 * Used for overall app shell sizing: sidebar, app bar, and max widths.
 *
 * NOTE: These are safe defaults. Replace with exact Figma values when confirmed.
 */
export const layout: LayoutTokens = {
  maxWidth: {
    app: 1440,
    content: 1200,
    modal: 1120, // Increased to 1120px as requested
    compact: 480, // Formal token for alert/confirmation dialogues
  },

  sidebarWidth: {
    collapsed: 80,
    expanded: 255,
  },

  appBarHeight: 64,

  components: {
    avatar: {
      md: 40,
      lg: 64,
      xl: 120, // TODO: Validate this new token with design system
    },
  },
};
