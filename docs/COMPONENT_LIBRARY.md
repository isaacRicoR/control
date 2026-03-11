# Biblioteca de componentes — Control

> Inventario resumido. Fuente detallada: `docs/system-maps/UI_SYSTEM_MAP.md`.

---

## 1. Atoms

| Componente | Ruta | Uso |
|------------|------|-----|
| Button | atoms/Button/ | Variantes primary, secondary, danger, ghost. `shape="panel"` en footers |
| Input | atoms/Input/ | Campo de texto con floating label |
| Textarea | atoms/Textarea/ | Multiline, mismo patrón que Input |
| Icon | atoms/Icon/ | Wrapper Lucide |
| ActionIcon | atoms/ActionIcon/ | Botón iconográfico |
| Badge | atoms/Badge/ | Etiqueta de estado |
| FloatingSurface | atoms/FloatingSurface/ | Superficie flotante con scrollbar |
| Spinner | atoms/Spinner/ | Indicador de carga |
| SearchInput | atoms/SearchInput/ | Input con ícono de búsqueda |

---

## 2. Molecules

| Componente | Ruta | Uso |
|------------|------|-----|
| SelectSingle | molecules/SelectSingle/ | Select con dropdown flotante |
| ActionMenu | molecules/ActionMenu/ | Menú contextual |
| ConfirmDialog | molecules/ConfirmDialog/ | Modal de confirmación |
| StatusTabs | molecules/StatusTabs/ | Tabs de filtro por estado |
| SectionTabs | molecules/SectionTabs/ | Tabs de secciones |
| Card | molecules/Card/ | Contenedor con variantes |

---

## 3. Containers

| Componente | Ruta | Uso |
|------------|------|-----|
| PanelCard | containers/PanelCard/ | Panel estándar (Header/Body/Footer) |
| DataTable | containers/DataTable/ | Tabla con sorting, filtrado, paginación |
| ModalShell | containers/ModalShell/ | Modal con overlay |
| PageShell | containers/PageShell/ | Shell de página |
| EmptyState | containers/EmptyState/ | Estado vacío |
| ErrorState | containers/ErrorState/ | Estado de error |
| ToastStack | (core/toast) | Sistema de notificaciones |

---

## 4. Patterns

| Patrón | Uso |
|--------|-----|
| FormActions | Footer de formulario (Cancel/Submit) |
| FormLayout | Layout 2 columnas para formularios |
| FormField | Label + Input + error |
| DetailSkeleton | Skeleton para vistas de detalle |
| ListSkeleton | Skeleton para listados |

---

## 5. Componentes en lab (no formales)

Usados en `/lab/apariencia`, aún en experimentación:

- **ComponentTokenExpandableRow** — Fila expandible con selector de tokens (popover)
- **AppearanceConfigRow**, **AppearanceConfigCard** — Bloques de configuración
- **ButtonsComponentEditor**, **InputsComponentEditor**, etc. — Editores por tipo de componente

---

## 6. Regla de uso

Los cartuchos **no crean** componentes reutilizables. Si falta uno, se crea en `packages/console/ui/*` y se registra en `UI_SYSTEM_MAP.md`.
