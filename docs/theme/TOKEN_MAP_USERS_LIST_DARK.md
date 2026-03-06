# Mapa de tokens UI — /users/list (DARK)

**Modo:** Diagnóstico (sin cambios)  
**Pantalla base:** `/users/list`  
**Objetivo:** Replicar la misma jerarquía en LIGHT.

---

## Resumen: dos sistemas de tokens

| Sistema | Origen | Componentes que usan |
|--------|--------|----------------------|
| `colors.semantic` | `var(--semantic-*)` → `globals.css` `[data-theme="dark"]` | AppShell, TopBar, Sidebar, DataTable (wrapper/celdas), Button, etc. |
| `colors[theme].semantic` | `semanticDark` → `baseDark.neutral` → `var(--brand-neutral-*)` → `:root` en globals | PageShell, TableHeader, TableFooter, UsersListClient (card), StatusTabs |

En DARK ambos convergen a valores equivalentes (p. ej. `#141A21`, `#1C252E`).

---

## Tabla de zonas

| Zona | Archivo | Token/Variable usada | Variable final en DARK | Overrides locales |
|------|---------|----------------------|------------------------|-------------------|
| **A) Fondo global (page background)** | `packages/console/ui/layouts/AppShell/AppShell.tsx` | `colors.semantic.background.default` | `var(--semantic-background-default)` → `#141A21` | — |
| **B) Contenedor principal (card/wrapper)** | `apps/control/app/(shell)/users/list/UsersListClient.tsx` | `semantic.surface.default`, `semantic.border.default` (vía `colors[theme].semantic`) | `var(--brand-neutral-200)` → `#1C252E` | — |
| **C) Header del módulo ("Usuarios" + breadcrumb)** | `packages/console/ui/containers/PageShell/PageShell.tsx` | Header: `semantic.background.default`, `semantic.border.default`; Título: `semantic.text.active`; Breadcrumb: `semantic.text.disabled` | background: `var(--brand-neutral-50)` → `#141A21`; título: `#ffffff`; breadcrumb: `#5A6672` | `headerStyle={{ borderBottom: "none" }}` en UsersListClient |
| **D) Toolbar (tabs + filtros + búsqueda)** | `packages/console/ui/containers/TableToolbar/TableToolbar.tsx` | `backgroundColor: "transparent"` | Hereda del contenedor B | — |
| **D.1) StatusTabs (tabs)** | `packages/console/ui/molecules/StatusTabs/StatusTabs.tsx` | `semantic.text.disabled`, `semantic.text.active`, `semantic.border.default` (vía `colors[theme].semantic`) | text: `#5A6672` / `#ffffff`; divider: `#2A3744` | — |
| **D.2) SearchInput / Icon** | `UsersListClient.tsx` (endContent) | `semantic.text.default` (para Icon) | `#8B95A5` | — |
| **E) Table header (fila: Nombre/Teléfono/Rol…)** | `packages/console/ui/containers/DataTable/TableHeader.tsx` | `semantic.text.default`, `semantic.border.default`, `semantic.surface.default` | text: `#8B95A5`; border: `#2A3744`; bg: `#1C252E` | — |
| **F) Table rows (filas)** | `packages/console/ui/containers/DataTable/DataTable.tsx` | `semantic.text.default`, `semantic.border.default`; hover: `semantic.surface.hover` (inline style + `.datatable-row:hover`) | text: `#8B95A5`; border: `#2A3744`; hover: `color-mix(..., #2A3744, transparent 75%)` | Celdas con valores hardcodeados: `#E2E8F0`, `#94A3B8` (UsersListClient columns) |
| **G) Table footer / paginación** | `packages/console/ui/containers/DataTable/TableFooter.tsx` | `semantic.border.default`, `semantic.text.default`, `semantic.surface.default` | border/text: `#2A3744`, `#8B95A5`; bg: `#1C252E` | — |
| **H) Sidebar** | `packages/console/ui/layouts/Sidebar/Sidebar.tsx` | `colors.semantic.surface.default`, `colors.semantic.border.default` | `var(--semantic-surface-default)` → `#1C252E` | — |
| **I) Top bar** | `packages/console/ui/layouts/TopBar/TopBar.client.tsx` | `semantic.surface.default`, `semantic.border.default`, `semantic.text.disabled`, `semantic.text.default` | surface: `#1C252E`; border: `#2A3744`; text: `#5A6672`, `#8B95A5` | — |

---

## Variables DARK en `globals.css`

Definidas en `[data-theme="dark"]` (`apps/control/app/globals.css` líneas 352-424):

| Variable CSS | Valor hex |
|--------------|-----------|
| `--semantic-background-default` | `#141A21` |
| `--semantic-surface-default` | `#1C252E` |
| `--semantic-surface-hover` | `#2A3744` |
| `--semantic-border-default` | `#2A3744` |
| `--semantic-text-default` | `#8B95A5` |
| `--semantic-text-muted` | `#5A6672` |
| `--semantic-text-active` | `#ffffff` |
| `--semantic-text-disabled` | `#5A6672` |

Brand neutrals en `:root` (usados por `colors[theme].semantic`):

| Variable CSS | Valor hex |
|--------------|-----------|
| `--brand-neutral-50` | `#141A21` |
| `--brand-neutral-200` | `#1C252E` |
| `--brand-neutral-300` | `#2A3744` |
| `--brand-neutral-500` | `#5A6672` |
| `--brand-neutral-600` | `#8B95A5` |
| `--brand-neutral-1000` | `#ffffff` |

---

## Overrides hardcodeados a revisar

En `UsersListClient.tsx` las columnas definen colores fijos en vez de tokens:

| Línea | Uso | Valor | Sugerido |
|-------|-----|-------|----------|
| ~155 | Nombre (principal) | `#E2E8F0` | `semantic.text.active` |
| ~156 | Email (secundario) | `#94A3B8` | `semantic.text.default` o `semantic.text.muted` |
| ~166 | Teléfono | `#E2E8F0` | `semantic.text.active` |
| ~175 | Rol | `#94A3B8` | `semantic.text.default` |
| ~185 | Departamento | `#94A3B8` | `semantic.text.default` |
| ~224 | Última actividad | `#94A3B8` | `semantic.text.default` |

Estos valores (`#E2E8F0`, `#94A3B8`) no vienen de tokens; son equivalentes a `text.active` y `text.default` en DARK.
