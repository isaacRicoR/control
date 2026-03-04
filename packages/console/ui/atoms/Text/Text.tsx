"use client";

import React from "react";
import { colors, typography } from "@tokens"; // Adjust import path if needed
import type { TextProps } from "./Text.types";
import "./Text.css";
import { useTheme } from "@ui/context/ThemeProvider";

export function Text({
  children,
  as = "span",
  variant = "body",
  error = false,
  className,
  style,
  ...props
}: TextProps) {
  const Component = as;
  const { theme } = useTheme();
  const semantic = colors[theme].semantic;

  // Map tokens to CSS vars for fallback/default usage if not inheriting from context
  const dynamicVars = {
    "--font-primary": typography.fontFamily.primary,
    "--semantic-danger": semantic.danger.default,
    "--text-disabled": semantic.text.disabled,
    // Default text color if not overridden
    "--text-color": semantic.text.default,
  } as React.CSSProperties;

  return (
    <Component
      className={`text-component text-variant-${variant} ${className || ""}`}
      data-error={error}
      style={{
        ...dynamicVars,
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
