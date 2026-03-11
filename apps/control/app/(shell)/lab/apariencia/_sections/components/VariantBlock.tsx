"use client";

import React from "react";
import { spacing, colors, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type VariantBlockProps = {
    variantLabel: string;
    children: React.ReactNode;
};

export const VariantBlock: React.FC<VariantBlockProps> = ({ variantLabel, children }) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as { text?: { muted?: string; default?: string }; border?: { subtle?: string; default?: string } };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
                style={{
                    paddingTop: spacing[16],
                    paddingBottom: spacing[8],
                    borderBottom: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                }}
            >
                <span
                    style={{
                        fontFamily: typography.fontFamily.primary,
                        fontSize: typography.fontSize.sm,
                        fontWeight: typography.fontWeight.medium,
                        color: semantic?.text?.muted ?? semantic?.text?.default,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    }}
                >
                    {variantLabel}
                </span>
            </div>
            <div style={{ paddingTop: spacing[8] }}>{children}</div>
        </div>
    );
};
