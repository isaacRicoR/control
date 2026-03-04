"use client";

import { useState } from "react";
import { spacing, typography, colors, radius } from "@tokens";

import type { DataTableProps } from "./DataTable.types";
import { EmptyState } from "../../containers/EmptyState";
import { ErrorState } from "../../containers/ErrorState";
import { Spinner } from "../../atoms/Spinner/Spinner";
import {
  TableFooter,
  TableHeader,
} from ".";


/**
 * DataTable
 * Contenedor base para mostrar datos en formato tabla.
 * - UX/UI only
 * - Sin lógica
 * - Sin ordenamiento
 * - Sin paginación
 */
export const DataTable = <T,>({
  columns,
  rows,
  ariaLabel,
  isLoading,
  error,
  emptyMessage,
  getRowKey,
  filterQuery,
}: DataTableProps<T>) => {
  const semantic = colors.semantic;
  const [rowsPerPage, setRowsPerPage] = useState("5");
  const [page, setPage] = useState(0);

  // Reset page when pageSize or filter changes
  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(value);
    setPage(0);
  };

  // Sorting State
  const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

  const handleSort = (key: string) => {
    setSort((prev) => {
      if (prev?.key !== key) return { key, direction: "asc" };
      if (prev.direction === "asc") return { key, direction: "desc" };
      return null;
    });
  };

  // Filter Rows in Memory
  const filteredRows = (() => {
    const query = (filterQuery ?? "").trim().toLowerCase();
    const hasQuery = query.length > 0;

    const filterableColumns = columns.filter(
      (col) => col.filterable && typeof col.filterValue === "function"
    );

    if (!hasQuery || filterableColumns.length === 0) return rows;

    return rows.filter((row) =>
      filterableColumns.some((col) => {
        // Safe access and string conversion
        const raw = col.filterValue?.(row);
        const text = String(raw ?? "").toLowerCase();
        return text.includes(query);
      })
    );
  })();

  // Sort Rows in Memory
  const sortedRows = sort ? [...filteredRows].sort((a, b) => {
    const column = columns.find((col) => (col.sortKey || col.key) === sort.key);
    if (!column || !column.sortable) return 0; // Should not happen if UI is correct

    // Use sortValue if provided, otherwise fallback to basic string comparison if safe
    // But per prompt logic: "Si no hay sortValue, entonces esa columna no puede ordenar"
    // So we rely STRICTLY on sortValue availability for sorting logic.
    const getValue = column.sortValue;
    if (!getValue) return 0;

    const aValue = getValue(a);
    const bValue = getValue(b);

    if (aValue < bValue) return sort.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sort.direction === "asc" ? 1 : -1;
    return 0;
  }) : filteredRows;

  // Paginate
  const pageSize = parseInt(rowsPerPage, 10) || 5;
  const pagedRows = sortedRows.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Row Styling */
        .datatable-row {
          transition: background-color 0.15s ease;
        }
        .datatable-row:hover {
          background-color: color-mix(in srgb, ${semantic.surface.hover}, transparent 75%);
        }


      `}</style>
      <div
        style={{
          border: "none",
          borderRadius: radius.card,
          boxShadow: "none",
          backgroundColor: semantic.surface.default,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 1,
        }}
        aria-label={ariaLabel}
      >
        <div
          style={{
            overflow: "hidden",
            borderRadius: radius.card,
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            boxShadow: "none",
            filter: "none",
            borderTop: "none",
          }}
        >
          <div
            className="no-scrollbar"
            style={{
              overflow: "auto",
              width: "100%",
              flex: 1,
              paddingTop: spacing[12],
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              boxShadow: "none",
              filter: "none",
              borderTop: "none",
            }}
          >
          {isLoading ? (
            // Loading State (Spinner)
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: 200 }}>
              <Spinner size={32} />
            </div>
          ) : error ? (
            // Error State
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
              <ErrorState description={error} />
            </div>
          ) : sortedRows.length === 0 ? (
            // Empty State
            <div style={{ minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: spacing[8] }}>
                <EmptyState title={emptyMessage || "No hay datos para mostrar"} />
              </div>
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                boxShadow: "none",
                filter: "none",
                borderTop: "none",
              }}
            >
              <TableHeader columns={columns} sort={sort} onSort={handleSort} />

              <tbody>
                {/* Data Rows */}
                {pagedRows.map((row, rowIndex) => {
                  const key = getRowKey ? getRowKey(row, rowIndex) : String(rowIndex);
                  return (
                    <tr key={key} className="datatable-row">
                      {columns.map((column) => {
                        return (
                          <td
                            key={column.key}
                            style={{
                              padding: `${spacing[16]}px ${spacing[24]}px`,
                              color: semantic.text.default,
                              whiteSpace: "nowrap",
                              fontFamily: typography.fontFamily.primary,
                              fontSize: typography.fontSize.sm,
                              borderBottom: `1px solid ${semantic.border.default}`,
                              textAlign: column.align || "left",
                            }}
                            className={`${column.hideBelow ? `hide-below-${column.hideBelow}` : ""} col-${column.key}`}
                          >
                            {column.cell(row)}
                          </td>
                        )
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table >
          )}
          </div>
        </div>

        {/* Footer Visual Mock */}
        {/* Footer Visual Mock */}
        <TableFooter
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalRows={sortedRows.length}
          page={page}
          onPageChange={setPage}
        />
      </div >
    </>
  );
};
