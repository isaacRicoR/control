import React from "react";
import { spacing, radius } from "@tokens";
import { SkeletonBlock } from "../../atoms/SkeletonBlock/SkeletonBlock";

/**
 * DetailSkeleton — Simula cards/fields de una vista de detalle mientras carga.
 * Usa SkeletonBlock como primitiva. Sin datos de dominio.
 */
export const DetailSkeleton: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: spacing[24], padding: spacing[24] }}>
            {/* Header: avatar + title lines */}
            <div style={{ display: "flex", gap: spacing[24], alignItems: "center" }}>
                <SkeletonBlock width={80} height={80} borderRadius="50%" />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: spacing[8] }}>
                    <SkeletonBlock width="40%" height={24} />
                    <SkeletonBlock width="60%" height={16} />
                </div>
            </div>

            {/* Card with field rows */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[16],
                    padding: spacing[24],
                    borderRadius: radius.md,
                }}
            >
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
                        <SkeletonBlock width="25%" height={12} />
                        <SkeletonBlock width="70%" height={16} />
                    </div>
                ))}
            </div>
        </div>
    );
};
