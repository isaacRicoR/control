import { controlBrand } from "./control";
import { safeboxBrand } from "./safebox";
import { securityBrand } from "./security";

export { controlBrand, safeboxBrand, securityBrand };
// Dynamic Brand using CSS Variables
export const activeBrand = {
    ...controlBrand, // Fallback for success, warning, etc.
    primary: {
        0: "var(--brand-primary-0)",
        50: "var(--brand-primary-50)",
        100: "var(--brand-primary-100)",
        200: "var(--brand-primary-200)",
        300: "var(--brand-primary-300)",
        400: "var(--brand-primary-400)",
        500: "var(--brand-primary-500)",
        600: "var(--brand-primary-600)",
        700: "var(--brand-primary-700)",
        800: "var(--brand-primary-800)",
        900: "var(--brand-primary-900)",
        950: "var(--brand-primary-950)",
        1000: "var(--brand-primary-1000)",
    },
    neutral: {
        0: "var(--brand-neutral-0)",
        50: "var(--brand-neutral-50)",
        100: "var(--brand-neutral-100)",
        200: "var(--brand-neutral-200)",
        300: "var(--brand-neutral-300)",
        400: "var(--brand-neutral-400)",
        500: "var(--brand-neutral-500)",
        600: "var(--brand-neutral-600)",
        700: "var(--brand-neutral-700)",
        800: "var(--brand-neutral-800)",
        900: "var(--brand-neutral-900)",
        950: "var(--brand-neutral-950)",
        1000: "var(--brand-neutral-1000)",
    },
};
