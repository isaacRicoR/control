import type { ReactNode } from "react";
import type { BreakpointKey } from "@tokens/breakpoints";

/**
 * DataTableColumn (columna de tabla)
 * Define el encabezado y cómo renderizar el valor de cada celda.
 */
export type DataTableColumn<T> = {
  /** Identificador único de la columna */
  key: string;

  /** Texto del header */
  header: string;

  /** Render de la celda para una fila */
  cell: (row: T) => ReactNode;

  /** Ocultar columna si el ancho es menor al breakpoint indicado */
  hideBelow?: BreakpointKey;

  /** Alineación del contenido (header y body) */
  align?: "left" | "center" | "right";

  /** Si la columna es ordenable */
  sortable?: boolean;

  /** Función para obtener el valor de ordenamiento (si es distinto al render) */
  sortValue?: (row: T) => string | number;

  /** Key específica para ordenar (por defecto usa column.key) */
  sortKey?: string;

  /** Indicate if the column can be filtered */
  filterable?: boolean;

  /** Function to get the value for filtering */
  filterValue?: (row: T) => string;
};

/**
 * DataTableProps
 * Tabla genérica para mostrar listas de datos.
 * - UX/UI only
 * - Sin lógica de negocio
 * - Datos por props
 */
export type DataTableProps<T> = {
  /** Columnas de la tabla */
  columns: Array<DataTableColumn<T>>;

  /** Filas (datos) */
  rows: Array<T>;

  /** Texto accesible para lectores de pantalla */
  ariaLabel?: string;

  /** Estado de carga */
  isLoading?: boolean;

  /** Mensaje de error (si existe) */
  error?: string;

  /** Mensaje para cuando no hay datos */
  emptyMessage?: string;

  /** Función para obtener la key única de cada fila */
  getRowKey?: (row: T, index: number) => string;

  /** Query string for filtering rows */
  filterQuery?: string;
};
