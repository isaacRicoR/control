import type { ReactNode } from "react";

export interface SectionProps {
  title?: string;
  actions?: ReactNode;
  children: ReactNode;
}
