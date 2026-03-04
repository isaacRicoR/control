"use client";

import { FC, ReactNode, CSSProperties } from "react";
import { spacing, typography, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export interface FormSectionProps {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
    style?: CSSProperties;
}

export const FormSection: FC<FormSectionProps> = ({
    children,
    title,
    description,
    className,
    style,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing[24], // Standard spacing between form rows/fields
                width: "100%",
                ...style,
            }}
        >
            {(title || description) && (
                <div style={{ marginBottom: spacing[8] }}>
                    {title && (
                        <h3
                            style={{
                                margin: 0,
                                fontSize: typography.fontSize.lg,
                                fontWeight: typography.fontWeight.medium,
                                color: semantic.text.default,
                                fontFamily: typography.fontFamily.primary,
                            }}
                        >
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p
                            style={{
                                margin: `${spacing[4]}px 0 0 0`,
                                fontSize: typography.fontSize.sm,
                                color: semantic.text.disabled,
                                fontFamily: typography.fontFamily.primary,
                            }}
                        >
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </div>
    );
};
