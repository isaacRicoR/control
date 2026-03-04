import type { ReactNode } from "react";

export type TextAs = "span" | "p" | "div" | "label";
export type TextVariant = "body" | "label" | "helper" | "asterisk";

export type TextProps = {
  children: ReactNode;
  as?: TextAs;
  variant?: TextVariant;
  error?: boolean;
  className?: string; // Add explicit className support
  style?: React.CSSProperties;
  htmlFor?: string; // For label variant
};
