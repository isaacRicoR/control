import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

import type { DataTableColumn } from "./DataTable.types";

type TableHeaderProps<T> = {
    columns: DataTableColumn<T>[];
    sort: { key: string; direction: "asc" | "desc" } | null;
    onSort: (key: string) => void;
};

export const TableHeader = <T,>({ columns, sort, onSort }: TableHeaderProps<T>) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <thead>
            <tr>
                {columns.map((column) => {
                    const isSortable = column.sortable;
                    const sortKey = column.sortKey || column.key;
                    const isActive = sort?.key === sortKey;
                    const direction = isActive ? sort.direction : null;

                    return (
                        <th
                            key={column.key}
                            onClick={() => isSortable && onSort(sortKey)}
                            style={{
                                textAlign: column.align || "left",
                                padding: `${spacing[16]}px ${spacing[24]}px`,
                                color: semantic.text.default,
                                whiteSpace: "nowrap",
                                fontFamily: typography.fontFamily.primary,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.medium,
                                borderBottom: `1px solid ${semantic.border.default}`,
                                boxShadow: "none",
                                filter: "none",
                                background: semantic.surface.default,
                                cursor: isSortable ? "pointer" : "default",
                                userSelect: "none",
                                position: "sticky",
                                top: 0,
                                zIndex: 1, // Above content, below sidebar/dropdowns
                            }}
                            className={`${column.hideBelow ? `hide-below-${column.hideBelow}` : ""} col-${column.key}`}
                        >
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: spacing[4],
                                justifyContent: column.align === "center" ? "center" : column.align === "right" ? "flex-end" : "flex-start"
                            }}>
                                {column.header}
                                {isSortable && (
                                    <span style={{ fontSize: 12, opacity: isActive ? 1 : 0.3 }}>
                                        {direction === "asc" ? "↑" : direction === "desc" ? "↓" : "↕"}
                                    </span>
                                )}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
