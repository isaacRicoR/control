import React from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";
import { Icon } from "../../atoms/Icon/Icon";
import { TableDropdown } from "./TableDropdown";

type TableFooterProps = {
    rowsPerPage: string;
    onRowsPerPageChange: (value: string) => void;
    totalRows: number;
    page: number;
    onPageChange: (page: number) => void;
};

export const TableFooter: React.FC<TableFooterProps> = ({
    rowsPerPage,
    onRowsPerPageChange,
    totalRows,
    page,
    onPageChange,
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const pageSize = parseInt(rowsPerPage, 10) || 5;
    const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
    const start = totalRows === 0 ? 0 : page * pageSize + 1;
    const end = Math.min((page + 1) * pageSize, totalRows);
    const hasPrev = page > 0;
    const hasNext = page < totalPages - 1;

    return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: `${spacing[12]}px ${spacing[24]}px`,
                    borderTop: `1px solid ${semantic.border.default}`,
                    boxShadow: "none",
                    filter: "none",
                    color: semantic.text.default,
                    fontSize: typography.fontSize.sm,
                    backgroundColor: semantic.surface.default,
                    width: "100%",
                    fontFamily: typography.fontFamily.primary,
                }}
            >
            <div style={{ display: "flex", alignItems: "center", gap: spacing[8] }}>
                <span style={{ color: semantic.text.disabled }}>Filas por página:</span>

                <TableDropdown
                    value={rowsPerPage}
                    options={["5", "10", "20", "50"]}
                    onChange={onRowsPerPageChange}
                    direction="up"
                    align="center"
                />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: spacing[24] }}>
                <span style={{ color: semantic.text.disabled }}>{start}-{end} de {totalRows}</span>
                <div style={{ display: "flex", alignItems: "center", gap: spacing[16] }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: hasPrev ? "pointer" : "default", opacity: hasPrev ? 1 : 0.3 }} onClick={() => hasPrev && onPageChange(page - 1)}>
                        <Icon name="chevron-left" size={16} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: hasNext ? "pointer" : "default", opacity: hasNext ? 1 : 0.3 }} onClick={() => hasNext && onPageChange(page + 1)}>
                        <Icon name="chevron-right" size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
};
