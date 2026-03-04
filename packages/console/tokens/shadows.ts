// design/tokens/shadows.ts
// Single source of truth for shadow tokens.

export type ShadowTokens = {
    card: string;
    dropdown: string;
    modal: string;
    modalStrong: string;
};

export const shadows: ShadowTokens = {
    card: "0 0 10px rgba(0, 0, 0, 0.035), 0 0 4px rgba(0, 0, 0, 0.018)",
    dropdown: "0 12px 32px rgba(0, 0, 0, 0.45)",
    modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    modalStrong: "0 32px 64px -12px rgba(0, 0, 0, 0.6)",
};
