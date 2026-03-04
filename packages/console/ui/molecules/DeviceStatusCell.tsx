import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "@ui/atoms/Icon/Icon";
import { Badge, type BadgeVariant } from "@ui/atoms/Badge";

type DeviceStatusCellProps = {
    devices?: unknown[]; // Optional because sometimes we might use it differently, but keeping compatible
    status: string;
};

export const DeviceStatusCell: React.FC<DeviceStatusCellProps> = ({ devices = [], status }) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const count = Array.isArray(devices) ? devices.length : 0;
    const isZero = count === 0;

    const variantMap: Record<string, BadgeVariant> = {
        Activo: "success",
        Inactivo: "neutral",
        Pendiente: "warning",
    };

    // If zero, fallback to neutral but we also have specific styling for it
    const variant = variantMap[status] || "neutral";

    return (
        <div className={`table-devices-cell ${isZero ? "table-devices-cell-zero" : "table-devices-cell-has-devices"}`}>
            <style>{`
                /* Specific Adjustment: Devices Badge Padding */
                .table-devices-cell > span {
                  padding-left: ${spacing[12]}px !important;
                  padding-right: ${spacing[24]}px !important;
                }
        
                /* Specific Adjustment: Devices Badge Gap (Icon - Text) */
                .table-devices-cell > span > div {
                  gap: 8px !important;
                }
        
                /* Specific Adjustment: Devices Badge Text Offset */
                .table-devices-cell > span > div > span {
                  padding-left: ${spacing[4]}px !important;
                }
        
                /* Zero State Badge Override (Neutral Gray) */
                .table-devices-cell-zero > span {
                  background-color: ${semantic.surface.disabled} !important;
                  color: ${semantic.text.disabled} !important;
                  border-color: ${semantic.border.disabled} !important;
                }
        
                /* Count > 0: Devices chip (green theme) */
                .table-devices-cell-has-devices > span {
                  background-color: var(--devices-chip-bg) !important;
                  color: var(--devices-chip-fg) !important;
                  border-color: var(--devices-chip-border) !important;
                }
                .table-devices-cell-has-devices > span svg {
                  stroke: var(--devices-chip-fg);
                }
            `}</style>
            <Badge
                label={
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Icon name="monitor" size={16} />
                        <span>{count}</span>
                    </div>
                }
                variant={variant}
                appearance="filled"
                interactive={true}
                fontSize={typography.fontSize.sm}
            />
        </div>
    );
};
