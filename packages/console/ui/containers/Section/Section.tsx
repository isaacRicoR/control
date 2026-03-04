import type { FC } from "react";
import type { SectionProps } from "./Section.types";
import { colors, spacing, typography, radius } from "@tokens";


export const Section: FC<SectionProps> = ({ title, actions, children }) => {
  return (
    <div
      style={{
        backgroundColor: colors.semantic.surface.default,
        border: `1px solid ${colors.semantic.border.default}`,
        borderRadius: radius.lg,
        padding: spacing[24],
        marginBottom: spacing[24],
      }}
    >
      {(title || actions) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: spacing[16],
          }}
        >
          {title && (
            <h2
              style={{
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.medium,
                color: colors.semantic.text.default,
                margin: 0,
                fontFamily: typography.fontFamily.primary,
              }}
            >
              {title}
            </h2>
          )}
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
