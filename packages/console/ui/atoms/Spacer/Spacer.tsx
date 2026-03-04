import { spacing } from "@tokens";

type SpacerProps = {
  size?: keyof typeof spacing; // usa la escala oficial
};

export function Spacer({ size = 16 }: SpacerProps) {
  return <div style={{ height: spacing[size] }} />;
}
