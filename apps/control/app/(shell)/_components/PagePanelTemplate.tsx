"use client";

import React from "react";
import { spacing, colors, radius } from "@tokens";

interface PagePanelTemplateProps {
    header: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
}

export const PagePanelTemplate = ({ header, body, footer }: PagePanelTemplateProps) => {
    const semantic = colors.semantic;

    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                backgroundColor: semantic.surface.default,
                borderRadius: radius.card,
                border: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                overflow: "hidden",
                paddingTop: spacing[24],
            }}
        >
            {/* Header fixed */}
            <div style={{ flexShrink: 0 }}>
                {header}
            </div>

            {/* Body scrollable - padding top 0 because the main wrapper has padding top 24 */}
            <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: spacing[24], paddingTop: 0 }}>
                {body}
            </div>

            {/* Footer fixed */}
            {footer && (
                <div
                    style={{
                        borderTop: `1px solid ${semantic.border.default}`,
                        padding: spacing[16],
                        display: "flex",
                        gap: spacing[12],
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginTop: "auto",
                        flexShrink: 0,
                    }}
                >
                    {footer}
                </div>
            )}
        </div>
    );
};
