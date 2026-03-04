import { useEffect, useState, CSSProperties } from "react";
import { createPortal } from "react-dom";
import { colors, radius, spacing, typography, layout, shadows } from "@tokens";
import { FloatingSurface } from "../../atoms/FloatingSurface/FloatingSurface";


interface ModalShellProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    elevation?: "soft" | "strong";
    variant?: "default" | "compact";
    showCloseButton?: boolean;
    surfaceVariant?: "default" | "strong";
}

export function ModalShell({
    isOpen,
    onClose,
    title,
    children,
    elevation = "soft",
    variant = "default",
    showCloseButton = true,
    surfaceVariant = "default",
}: ModalShellProps) {
    const semantic = colors.semantic;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => {
            clearTimeout(timer);
            setMounted(false);
        };
    }, []);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    // Use createPortal to render outside the DOM hierarchy
    if (typeof document === "undefined") return null;

    const shadow = elevation === "strong" ? shadows.modalStrong : shadows.modal;
    const maxWidth = variant === "compact" ? layout.maxWidth.compact : layout.maxWidth.modal;

    // Dynamic overlay based on elevation preset
    const backdropOpacity = elevation === "strong" ? 0.75 : 0.5;
    const backdropBlur = elevation === "strong" ? 8 : 4;

    return createPortal(
        <div
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
                backdropFilter: `blur(${backdropBlur}px)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 110,
                padding: spacing[24],
                pointerEvents: "auto",
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget && showCloseButton) {
                    onClose();
                }
            }}
        >
            <FloatingSurface
                role="dialog"
                aria-modal="true"
                variant={surfaceVariant}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: maxWidth,
                    maxHeight: "90vh",
                    position: "relative", // Needed for absolute close button
                    "--floating-shadow": shadow,
                    "--floating-radius": `${radius.lg}px`,
                } as CSSProperties}
            >
                {/* Header */}
                {(title || (showCloseButton && variant !== "compact")) && (
                    <div
                        style={{
                            padding: title ? `${spacing[16]}px ${spacing[24]}px` : 0,
                            borderBottom: variant === "compact" ? "none" : `1px solid ${semantic.border.default}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: title ? "space-between" : "flex-end",
                            minHeight: title ? "auto" : 0,
                        }}
                    >
                        {title && (
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: typography.fontSize.lg,
                                    fontWeight: typography.fontWeight.semibold,
                                    color: semantic.text.default,
                                    flex: 1,
                                    textAlign: variant === "compact" ? "center" : "left",
                                }}
                            >
                                {title}
                            </h2>
                        )}
                        {(showCloseButton && variant !== "compact") && (
                            <button
                                onClick={onClose}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    color: semantic.text.disabled,
                                    padding: spacing[4],
                                    borderRadius: radius.md,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "background-color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = semantic.surface.hover)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                                aria-label="Cerrar modal"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Compact Variant Absolute Close Button */}
                {showCloseButton && variant === "compact" && (
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: spacing[16],
                            right: spacing[16],
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: semantic.text.disabled,
                            padding: spacing[4],
                            borderRadius: radius.md,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "background-color 0.2s",
                            zIndex: 10,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = semantic.surface.hover)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        aria-label="Cerrar modal"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                )}

                {/* Content */}
                <div
                    style={{
                        flex: 1,
                        overflowY: "auto",
                        padding: 0,
                    }}
                >
                    {children}
                </div>
            </FloatingSurface>
        </div>,
        document.body
    );
}
