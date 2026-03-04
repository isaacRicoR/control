# DATA TABLE SYSTEM PROPOSAL

Este documento define la arquitectura técnica para el DataTable System oficial de ControlDev.

## 1. Auditoría del Estado Actual

**Componente**
`DataTable`
**Ubicación:**
`components/containers/DataTable/DataTable.tsx`

**Capacidades Actuales:**
*   ✅ Columnas Declarativas: Soporta array de `DataTableColumn<T>`.
*   ✅ Custom Render: Soporta función `cell: (row) => ReactNode`.
*   ✅ Header Fijo: Implementado visualmente, aunque overflow está en el contenedor padre wrapper en `UsersListClient`.
*   ✅ Scroll Horizontal: Soportado nativamente por `overflow: auto`.
*   ⚠️ Action Column: No existe explícitamente. Se implementa como una columna más con key: "actions" en el consumidor.
*   ⚠️ Estados (Loading/Error/Empty): No soportados internamente. El consumidor (`UsersListClient`) debe manejar el renderizado condicional envolviendo la tabla.

**Consumo en `UsersList`**
*   Usa `DataTable` directamente.
*   Maneja loading reemplazando todo el contenido del `PageShell`.
*   Define columnas de acciones manualmente usando `ActionIcon` y `ActionMenu`.

**Conclusión:** La implementación actual es funcional pero delega demasiada responsabilidad de UI al consumidor (loading, empty states).

## 2. Arquitectura Oficial Propuesta

El objetivo es enriquecer el `DataTable` existente para que maneje sus propios estados visuales sin romper la implementación actual.

**Interfaz Propuesta (`DataTableProps<T>`)**

Se añaden props opcionales para manejo de estados interna.

```typescript
type DataTableProps<T> = {
 columns: DataTableColumn<T>[];
 rows: Array<T>;
 ariaLabel?: string;
  // Novedades (Opcionales para no romper legacy)
 isLoading?: boolean;
 isEmpty?: boolean; // O autodetectado si rows.length === 0
 error?: string;
  // Acciones (Opcional, para estandarizar ancho/estilo)
 onRowClick?: (row: T) => void;
};
```

**Gestión de Estados**

*   **Loading State:**
    *   El `DataTable` renderizará un Skeleton o Spinner dentro del `tbody` o como overlay, manteniendo los headers visibles si es posible.
    *   Retrocompatibilidad: Si no se pasa `isLoading`, funciona como hoy.
*   **Empty State:**
    *   Renderizará un diseño estándar (Icono + Texto) cuando `rows.length === 0` y `!isLoading`.
    *   Evita que cada página reimplemente el mensaje de "No hay datos".
*   **Action Column:**
    *   Se mantiene el patrón de definirla en `columns` por flexibilidad.
    *   Se creará un helper o componente celda `TableActionsCell` (ya existe en la carpeta, verificar uso) para estandarizar espaciado.
    *   Nota: `UsersList` ya usa una implementación manual. No se forzará migración inmediata.
*   **Error State:**
    *   Prop `error` para mostrar un mensaje amigable dentro de la tabla en lugar de romper la página.

## 3. Estrategia de Implementación

**Fase 1: Enriquecimiento (Non-breaking)**
*   Modificar `DataTable.tsx` para aceptar `isLoading`, `error`.
*   Implementar renders condicionales internos para `<tbody>`.
    *   Si loading -> Render Skeletons.
    *   Si error -> Render Error Message.
    *   Si rows.length === 0 -> Render Empty State.
*   Mantener la lógica actual de renderizado de filas como el "path feliz".

**Fase 2: Adopción en Devices (Nuevo)**
*   Implementar `DeviceList` usando las nuevas props `isLoading` y `error`.
*   Validar que el manejo de estado es más limpio que en `UsersList`.

**Fase 3: Refactor Users (Futuro)**
*   Limpiar `UsersListClient` para eliminar el manejo manual de loading y delegarlo al componente.

## 4. Confirmaciones de Seguridad

*   ✅ **No rompe UsersList:** Al ser props opcionales, `UsersList` seguirá funcionando tal cual (ignorando las nuevas capacidades hasta que se decida refactorizar).
*   ✅ **No introduce dependencias:** Se usarán tokens y componentes existentes (`Icon`, `Text`, `Badge`).
*   ✅ **Compila Limpio:** Typescript asegurará compatibilidad de tips.
