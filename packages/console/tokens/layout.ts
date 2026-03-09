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
  /** Distancia vertical entre PageHeader (título + breadcrumb) y el primer bloque de contenido */
  pageHeaderToContentSpacing: number;
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

  pageHeaderToContentSpacing: 12,

  components: {
    avatar: {
      md: 40,
      lg: 64,
      xl: 120, // TODO: Validate this new token with design system
    },
  },
};
