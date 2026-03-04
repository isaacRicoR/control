import { ReactNode, CSSProperties } from "react";
import styles from "./FormLayout.module.css"; // Reuse existing styles
import { colors, spacing } from "@tokens";

interface FormLayoutProps {
    leftSlot?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export const FormLayout = ({
    leftSlot,
    children,
    footer,
    className,
    style,
}: FormLayoutProps) => {
    const semantic = colors.semantic;

    return (
        <div className={`${styles.layoutGrid} ${className || ""}`} style={{ gap: 0, ...style }}>
            {/* Left Column */}
            <div
                className={styles.visualCol}
                style={{
                    gap: spacing[16],
                    padding: spacing[24],
                    borderRight: `1px solid ${semantic.border.default}`,
                }}
            >
                {leftSlot}
            </div>

            {/* Right Column */}
            <div
                className={styles.formCol}
                style={{
                    padding: spacing[24],
                }}
            >
                <div
                    className={styles.formColumnGrid}
                    style={{ gap: spacing[24] }}
                >
                    {children}
                </div>
                {footer}
            </div>
        </div>
    );
};
