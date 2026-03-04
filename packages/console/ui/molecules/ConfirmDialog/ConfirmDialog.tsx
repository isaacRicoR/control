"use client";

import React, { useEffect, useRef } from "react";
import { ModalShell } from "../../containers/ModalShell/ModalShell";
import { Button } from "../../atoms/Button/Button";
import { Icon, IconName } from "../../atoms/Icon/Icon";
import { spacing, typography, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * ConfirmDialog (Header Unification)
 * 
 * Intención:
 *   Estandarizar la posición del header (icono + título) para que sea idéntica
 *   en todos los casos, situando el icono más arriba como el estándar "red case".
 * 
 * Cambios Fase 10:
 *   - Padding superior unificado a spacing[32].
 *   - (Requiere ModalShell con botón de cierre absoluto en modo compact para evitar empuje).
 */

type ConfirmTone = "default" | "error" | "warning" | "info" | "success";

interface ConfirmDialogProps {
    title: string;
    description: string | React.ReactNode;
    icon?: IconName;
    confirmLabel?: string;
    cancelLabel?: string;
    tone?: ConfirmTone;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void;
    isOpen: boolean;
    isLoading?: boolean;
    disableConfirm?: boolean;
}

export function ConfirmDialog({
    title,
    description,
    icon,
    confirmLabel = "Confirmar",
    cancelLabel = "Cancelar",
    tone = "default",
    onConfirm,
    onCancel,
    isOpen,
    isLoading = false,
    disableConfirm = false,
}: ConfirmDialogProps) {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const cancelRef = useRef<HTMLButtonElement>(null);

    const getToneColor = () => {
        if (tone === "default") return semantic.primary.default;
        if (tone === "error") return semantic.error.default;
        if (tone === "warning") return semantic.warning.default;
        if (tone === "info") return semantic.info.default;
        if (tone === "success") return semantic.success.default;
        return semantic.primary.default;
    };

    const toneColor = getToneColor();

    useEffect(() => {
        if (isOpen && !isLoading) {
            const timer = setTimeout(() => {
                cancelRef.current?.focus();
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isLoading]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen && !isLoading) {
                onCancel();
            }
        };

        if (isOpen && !isLoading) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, isLoading, onCancel]);

    const handleClose = () => {
        if (!isLoading) onCancel();
    };

    return (
        <ModalShell
            isOpen={isOpen}
            onClose={handleClose}
            title={undefined}
            variant="compact"
            elevation="strong"
            showCloseButton={!isLoading}
            surfaceVariant="strong"
        >
            <div
                style={{
                    // Padding superior unificado para que el icono quede "arriba" (32px)
                    // Se combina con el cambio en ModalShell para que no haya padding extra del header.
                    padding: `${spacing[32]}px ${spacing[32]}px ${spacing[32]}px ${spacing[32]}px`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* Unified Icon Badge */}
                {icon && (
                    <div
                        style={{
                            marginBottom: spacing[32], // Reducido de 3xl (48px) a 32px
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: spacing["4xl"],
                            height: spacing["4xl"],
                            borderRadius: "50%",
                            backgroundColor: `${toneColor}1f`,
                            color: toneColor,
                            border: `1px solid ${toneColor}1a`,
                            boxShadow: `inset 0 0 12px ${toneColor}0d`,
                        }}
                    >
                        <Icon name={icon} size={32} />
                    </div>
                )}

                {/* Title */}
                <h2
                    style={{
                        margin: `0 0 ${spacing[8]}px 0`, // Reducido de 16 a 8
                        color: semantic.text.active,
                        fontSize: typography.fontSize.xl,
                        fontWeight: typography.fontWeight.bold,
                        fontFamily: typography.fontFamily.primary,
                    }}
                >
                    {title}
                </h2>

                {/* Description */}
                <div
                    style={{
                        marginBottom: spacing[40],
                        color: semantic.text.default,
                        fontSize: typography.fontSize.sm, // Reducido de md a sm
                        lineHeight: "1.5",
                        fontFamily: typography.fontFamily.primary,
                        maxWidth: "92%",
                    }}
                >
                    {description}
                </div>

                {/* Button Stack */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: spacing[12],
                        width: "100%",
                    }}
                >
                    <Button
                        variant={tone === "error" ? "error" : "white"}
                        onClick={onConfirm}
                        disabled={isLoading || disableConfirm}
                        style={{ width: "100%", height: 48 }}
                    >
                        {confirmLabel}
                    </Button>

                    <Button
                        ref={cancelRef as React.RefObject<HTMLButtonElement>}
                        onClick={handleClose}
                        disabled={isLoading}
                        style={{
                            width: "100%",
                            height: 48,
                            border: "none",
                            background: "transparent",
                            color: semantic.text.disabled,
                            fontSize: typography.fontSize.md,
                            fontWeight: typography.fontWeight.regular,
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.currentTarget.style.color = semantic.text.active;
                            e.currentTarget.style.background = "transparent";
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.currentTarget.style.color = semantic.text.disabled;
                            e.currentTarget.style.background = "transparent";
                        }}
                    >
                        {cancelLabel}
                    </Button>
                </div>
            </div>
        </ModalShell>
    );
}
