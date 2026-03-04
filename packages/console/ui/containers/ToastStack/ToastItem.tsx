"use client";

import React, { FC } from "react";
import { Toast } from "@core/toast/ToastProvider";
import { FloatingSurface } from "../../atoms/FloatingSurface/FloatingSurface";
import { Icon } from "../../atoms/Icon/Icon";
import { colors, spacing, radius, typography } from "@tokens";

interface ToastItemProps {
    toast: Toast;
    onClose: (id: string) => void;
}

export const ToastItem: FC<ToastItemProps> = ({ toast, onClose }) => {
    const semantic = colors.semantic;

    const getIcon = () => {
        switch (toast.type) {
            case "success": return "check";
            case "error": return "alert-circle";
            case "warning": return "alert-circle";
            case "info": return "alert-circle";
            default: return "check";
        }
    };

    const getColor = () => {
        switch (toast.type) {
            case "success": return semantic.success.default;
            case "error": return semantic.danger.default;
            case "warning": return semantic.warning.default;
            case "info": return semantic.info.default;
            default: return semantic.primary.default;
        }
    };

    return (
        <FloatingSurface
            variant="strong"
            style={{
                width: "100%",
                maxWidth: "400px",
                padding: spacing[16],
                display: "flex",
                gap: spacing[12],
                alignItems: "flex-start",
                position: "relative",
                borderLeft: `4px solid ${getColor()}`,
                animation: "toast-in 0.3s ease-out forwards",
            }}
        >
            <div style={{ marginTop: "2px" }}>
                <Icon name={getIcon()} size={20} color={getColor()} />
            </div>

            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: typography.fontSize.sm,
                    fontWeight: 600,
                    color: semantic.text.active,
                    marginBottom: toast.description ? spacing[4] : 0
                }}>
                    {toast.title}
                </div>
                {toast.description && (
                    <div style={{
                        fontSize: typography.fontSize.xs,
                        color: semantic.text.default,
                        lineHeight: 1.4
                    }}>
                        {toast.description}
                    </div>
                )}
            </div>

            <button
                onClick={() => onClose(toast.id)}
                style={{
                    background: "none",
                    border: "none",
                    padding: spacing[4],
                    cursor: "pointer",
                    color: semantic.text.disabled,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: radius.sm,
                    transition: "color 0.2s, background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = semantic.text.active;
                    e.currentTarget.style.backgroundColor = semantic.background.hover;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = semantic.text.disabled;
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
            >
                <Icon name="x" size={16} />
            </button>
        </FloatingSurface>
    );
};
