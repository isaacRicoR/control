"use client";

import React from "react";
import { spacing, colors, typography, radius } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type ComponentsSectionCardProps = {
    title: string;
    children: React.ReactNode;
};

export const ComponentsSectionCard: React.FC<ComponentsSectionCardProps> = ({ title, children }) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic as { surface?: { card?: string; default?: string }; border?: { subtle?: string; default?: string } };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                flex: 1,
                minHeight: 0,
                backgroundColor: semantic?.surface?.card ?? semantic?.surface?.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic?.border?.subtle ?? semantic?.border?.default}`,
                paddingTop: spacing[24],
                paddingLeft: spacing[24],
                paddingRight: spacing[24],
                paddingBottom: 0,
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[8],
                    marginBottom: spacing[16],
                }}
            >
                <h3
                    style={{
                        margin: 0,
                        fontFamily: typography.fontFamily.primary,
                        fontSize: typography.fontSize.md,
                        fontWeight: typography.fontWeight.semibold,
                        color: (semantic as { text?: { default?: string } })?.text?.default,
                    }}
                >
                    {title}
                </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>{children}</div>
        </div>
    );
};
