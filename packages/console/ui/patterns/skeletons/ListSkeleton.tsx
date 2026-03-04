import React from "react";
import { spacing } from "@tokens";
import { SkeletonBlock } from "../../atoms/SkeletonBlock/SkeletonBlock";

type ListSkeletonProps = {
    rows?: number;
    columns?: number;
};

/**
 * ListSkeleton — Simula una tabla/listado mientras carga.
 * Usa SkeletonBlock como primitiva. Sin datos de dominio.
 */
export const ListSkeleton: React.FC<ListSkeletonProps> = ({
    rows = 6,
    columns = 4,
}) => {
    const colWidth = `${Math.floor(100 / columns)}%`;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: spacing[12], padding: spacing[16] }}>
            {/* Header row */}
            <div style={{ display: "flex", gap: spacing[16], paddingBottom: spacing[8] }}>
                {Array.from({ length: columns }).map((_, i) => (
                    <SkeletonBlock key={i} width={colWidth} height={12} />
                ))}
            </div>
            {/* Data rows */}
            {Array.from({ length: rows }).map((_, rowIdx) => (
                <div key={rowIdx} style={{ display: "flex", gap: spacing[16], alignItems: "center" }}>
                    {/* Avatar circle in first column */}
                    <SkeletonBlock width={36} height={36} borderRadius="50%" />
                    {Array.from({ length: columns - 1 }).map((_, colIdx) => (
                        <SkeletonBlock key={colIdx} width={colWidth} height={16} />
                    ))}
                </div>
            ))}
        </div>
    );
};
