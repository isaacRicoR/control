"use client";

import React from "react";
import { colors, spacing } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Button } from "@ui/atoms/Button/Button";
import { Spinner } from "@ui/atoms/Spinner/Spinner";
import type { PanelCardFooterProps } from "./PanelCard.types";

/** Variants, size y shape oficiales del Design System para panel footers. Igual que FormActions. NO cambiar. */
const FOOTER_BUTTON_SIZE = "sm" as const;

/**
 * PanelCardFooter — Footer del Panel Card Pattern.
 * Panel Footer Hard Lock: solo props estrictas. Renderiza Button internamente con variants oficiales.
 * Prohibido: styles manuales, wrappers extra, variants distintos.
 */
export const PanelCardFooter: React.FC<PanelCardFooterProps> = ({
    primaryLabel,
    primaryOnClick,
    primaryLoading = false,
    primaryDisabled = false,
    secondaryLabel,
    secondaryOnClick,
    secondaryDisabled = false,
    dangerLabel,
    dangerOnClick,
    dangerDisabled = false,
    status,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const hasDanger = Boolean(dangerLabel && dangerOnClick);
    const hasLeft = hasDanger || status;
    const hasRight = true; // secondary + primary siempre presentes

    return (
        <footer
            style={{
                flexShrink: 0,
                borderTop: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                padding: spacing[16],
                display: "flex",
                alignItems: "center",
                gap: spacing[12],
                justifyContent: hasLeft ? "space-between" : "flex-end",
                flexWrap: "wrap",
            }}
        >
            {hasLeft && (
                <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                    {hasDanger && (
                        <Button
                            variant="error"
                            size={FOOTER_BUTTON_SIZE}
                            shape="panel"
                            onClick={dangerOnClick!}
                            disabled={dangerDisabled}
                        >
                            {dangerLabel}
                        </Button>
                    )}
                    {status}
                </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: spacing[12] }}>
                <Button
                    variant="secondary"
                    size={FOOTER_BUTTON_SIZE}
                    shape="panel"
                    onClick={secondaryOnClick}
                    disabled={secondaryDisabled || primaryLoading}
                >
                    {secondaryLabel}
                </Button>
                <Button
                    variant="actionPrimary"
                    size={FOOTER_BUTTON_SIZE}
                    shape="panel"
                    onClick={primaryOnClick}
                    disabled={primaryDisabled}
                >
                    {primaryLoading ? (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: spacing[8] }}>
                            <Spinner size={16} />
                            Guardando...
                        </span>
                    ) : (
                        primaryLabel
                    )}
                </Button>
            </div>
        </footer>
    );
};
