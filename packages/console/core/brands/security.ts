import type { ColorScale } from "@tokens/colors";

export const securityBrand = {
    primary: {
        0: "#0b1221", // Deepest Blue
        50: "#101828", // Surface darkest (gray-900 like)
        100: "#1d2939", // gray-800
        200: "#344054", // gray-700
        300: "#475467", // gray-600
        400: "#667085", // gray-500
        500: "#2970ff", // Branding Blue Bright
        600: "#155eef", // Branding Blue Base (Premium)
        700: "#004eeb", // Deep Rich Blue
        800: "#0040c1",
        900: "#00359e",
        950: "#eif8ff",
        1000: "#f5faFF",
    } as ColorScale,
    neutral: {
        0: "#020617", // slate-950 (Main Bg)
        50: "#0f172a", // slate-900 (Sidebar / Alt Bg)
        100: "#1e293b", // slate-800 (Card Bg)
        200: "#334155", // slate-700 (Borders)
        300: "#475569", // slate-600 (Hover)
        400: "#64748b", // slate-500 
        500: "#94a3b8", // slate-400 (Text Muted)
        600: "#cbd5e1", // slate-300 (Text Default)
        700: "#e2e8f0", // slate-200
        800: "#f1f5f9", // slate-100
        900: "#f8fafc", // slate-50
        950: "#ffffff",
        1000: "#ffffff",
    } as ColorScale,
    success: {
        0: "#053321",
        50: "#053321",
        100: "#084c31",
        200: "#0b6542",
        300: "#0e7f52",
        400: "#12b774",
        500: "#16d98a",
        600: "#12b774", // Sober green
        700: "#0e7f52",
        800: "#0b6542",
        900: "#084c31",
        950: "#f0fdf4",
        1000: "#ffffff",
    } as ColorScale,
    warning: {
        0: "#332200",
        50: "#332200",
        100: "#4c3300",
        200: "#654400",
        300: "#7f5500",
        400: "#b77a00",
        500: "#d99100",
        600: "#b77a00", // Sober orange
        700: "#7f5500",
        800: "#654400",
        900: "#4c3300",
        950: "#fffbeb",
        1000: "#ffffff",
    } as ColorScale,
    danger: {
        0: "#330505",
        50: "#330505",
        100: "#4c0808",
        200: "#650b0b",
        300: "#7f0e0e",
        400: "#b71515",
        500: "#d91919",
        600: "#b71515", // Sober red
        700: "#7f0e0e",
        800: "#650b0b",
        900: "#4c0808",
        950: "#fef2f2",
        1000: "#ffffff",
    } as ColorScale,
    info: {
        0: "#051b33",
        50: "#051b33",
        100: "#08284c",
        200: "#0b3665",
        300: "#0e437f",
        400: "#1261b7",
        500: "#1673d9",
        600: "#1261b7", // Sober blue
        700: "#0e437f",
        800: "#0b3665",
        900: "#08284c",
        950: "#eff6ff",
        1000: "#ffffff",
    } as ColorScale,
};
