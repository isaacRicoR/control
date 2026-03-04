/**
 * Theme Registry — Formal ThemePack definitions
 *
 * Values extracted from currently active tokens (globals.css [data-theme]).
 * NO runtime replacement — structure and documentation only.
 * Base for future themes (security, etc.).
 */

export type ThemeMode = "dark" | "light";

export interface ThemeTokens {
    // structure
    background: string;
    surface: string;
    border: string;
    text: string;
    accent: string;

    // states
    success: string;
    danger: string;
    warning: string;
    info: string;
    pending: string;

    // components
    buttonPrimaryBg: string;
    buttonPrimaryText: string;
}

export interface ThemePack {
    id: string;
    dark: ThemeTokens;
    light: ThemeTokens;
}

/**
 * Canonical theme packs. Values match globals.css [data-theme] semantic tokens
 * for data-brand="control".
 */
/**
 * Resolves ThemeTokens for a brand + mode. Falls back to "control" if brand unknown.
 */
export function getThemeTokens(
    brand: string,
    mode: ThemeMode
): ThemeTokens {
    const pack = themeRegistry[brand] ?? themeRegistry.control;
    return pack[mode];
}

export const themeRegistry: Record<string, ThemePack> = {
    control: {
        id: "control",
        dark: {
            background: "#141A21", // --semantic-background-default
            surface: "#1C252E",   // --semantic-surface-default
            border: "#2A3744",    // --semantic-border-default
            text: "#8B95A5",      // --semantic-text-default
            accent: "#00FFA9",    // --semantic-primary-default
            success: "#00ff99",   // --semantic-success-default
            danger: "#ff3344",    // --semantic-danger-default
            warning: "#ffb020",   // --semantic-warning-default
            info: "#29a3ff",      // --semantic-info-default
            pending: "#5A6672",   // NOTE: --semantic-text-muted; no explicit pending in CSS
            buttonPrimaryBg: "#00FFA9",   // --semantic-button-primary-bg (= primary)
            buttonPrimaryText: "#FFFFFF", // --semantic-button-primary-text
        },
        light: {
            background: "#F4F6F8", // --semantic-background-default
            surface: "#FFFFFF",    // --semantic-surface-default
            border: "#E4E4E7",    // --semantic-border-default
            text: "#18181B",      // --semantic-text-default
            accent: "#00A76F",    // --semantic-primary-default
            success: "#00A76F",   // --semantic-success-default
            danger: "#ff3344",    // --semantic-danger-default
            warning: "#ffb020",   // --semantic-warning-default
            info: "#29a3ff",      // --semantic-info-default
            pending: "#71717A",   // NOTE: --semantic-text-muted; no explicit pending in CSS
            buttonPrimaryBg: "#00A76F",   // --semantic-button-primary-bg (= primary)
            buttonPrimaryText: "#18181B",  // --semantic-button-primary-text (= text.default)
        },
    },

    // TODO: customize security palette
    security: {
        id: "security",
        dark: {
            background: "#0f172a",   // security brand neutral-50
            surface: "#334155",       // security brand neutral-200
            border: "#475569",        // security brand neutral-300
            text: "#cbd5e1",          // security brand neutral-600
            accent: "#155eef",        // security brand primary-600 (Premium Blue)
            success: "#00ff99",       // global (copy from control)
            danger: "#ff3344",        // global
            warning: "#ffb020",       // global
            info: "#29a3ff",          // global
            pending: "#94a3b8",       // security neutral-500
            buttonPrimaryBg: "#155eef",   // accent
            buttonPrimaryText: "#FFFFFF", // contrast on blue
        },
        light: {
            background: "#F4F6F8",    // clone control (no security-specific light in CSS)
            surface: "#FFFFFF",
            border: "#E4E4E7",
            text: "#18181B",
            accent: "#155eef",        // security primary-600
            success: "#00A76F",       // global
            danger: "#ff3344",        // global
            warning: "#ffb020",       // global
            info: "#29a3ff",          // global
            pending: "#71717A",      // global
            buttonPrimaryBg: "#155eef",   // accent
            buttonPrimaryText: "#FFFFFF",  // contrast on blue
        },
    },
};
