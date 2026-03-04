"use client";

import Link from "next/link";
import { colors, spacing, typography, radius } from "@tokens";
import { FloatingSurface } from "@ui/atoms/FloatingSurface/FloatingSurface";

export default function DesignLabPage() {
    const semantic = colors.dark.semantic;

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: semantic.background.default,
                color: semantic.text.default,
                padding: spacing["3xl"],
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: typography.fontFamily.primary,
            } as React.CSSProperties}
        >
            <div
                style={{
                    width: "100%",
                }}
            >
                <h1
                    style={{
                        fontSize: typography.fontSize.xl,
                        fontWeight: typography.fontWeight.bold,
                        marginBottom: spacing.xl,
                        color: semantic.text.active,
                        textAlign: "center",
                    }}
                >
                    Design Lab
                </h1>

                {/* Área de montaje libre */}
                <div
                    style={{
                        padding: spacing.lg,
                        border: `1px dashed ${semantic.border.default}`,
                        borderRadius: radius.md,
                    }}
                >
                    <p style={{ color: semantic.text.disabled, textAlign: "center", marginBottom: spacing.lg }}>
                        Área de experimentación visual.
                        <br />
                        FloatingSurface Demo:
                    </p>

                    {/* Espacio para componentes - Using flex column to stack */}
                    <div style={{ display: "flex", flexDirection: "column", gap: spacing.xl, alignItems: "center" }}>

                        {/* Wrapper for visual limit using simple CSS units or percentage */}
                        <div style={{ width: "100%", maxWidth: "24rem", display: "flex", flexDirection: "column", gap: spacing.xl }}>

                            {/* Demo 1 */}
                            <FloatingSurface style={{ width: "100%", padding: spacing.lg }}>
                                <p style={{ margin: 0, fontWeight: 500, color: semantic.text.active }}>Dropdown Style</p>
                                <p style={{ margin: `${spacing.sm}px 0 0`, fontSize: typography.fontSize.sm, color: semantic.text.default }}>
                                    Standard floating surface with dropdown shadow + luminous base.
                                </p>
                            </FloatingSurface>

                            {/* Demo 2 */}
                            <FloatingSurface style={{ width: "100%", padding: spacing.sm }}>
                                {["Profile", "Settings", "Logout"].map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            padding: `${spacing.sm}px ${spacing.md}px`,
                                            borderRadius: radius.sm,
                                            cursor: "pointer",
                                            color: semantic.text.default,
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </FloatingSurface>
                        </div>

                    </div>
                </div>

                <div style={{ marginTop: spacing["3xl"], textAlign: "center" }}>
                    <h2 style={{ fontSize: typography.fontSize.lg, color: semantic.text.default, marginBottom: spacing.md }}>
                        Component Labs
                    </h2>
                    <div style={{ display: "flex", gap: spacing.md, justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/lab/modal-shell"
                            style={{
                                color: semantic.text.active,
                                textDecoration: "none",
                                border: `1px solid ${semantic.border.default}`,
                                padding: `${spacing.md}px ${spacing.lg}px`,
                                borderRadius: radius.md,
                                backgroundColor: semantic.surface.default,
                                display: "inline-block"
                            }}
                        >
                            ModalShell Lab →
                        </Link>
                        <Link
                            href="/lab/user-edit-modal"
                            style={{
                                color: semantic.text.active,
                                textDecoration: "none",
                                border: `1px solid ${semantic.border.default}`,
                                padding: `${spacing.md}px ${spacing.lg}px`,
                                borderRadius: radius.md,
                                backgroundColor: semantic.surface.default,
                                display: "inline-block"
                            }}
                        >
                            Real UserForm Modal Lab →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
