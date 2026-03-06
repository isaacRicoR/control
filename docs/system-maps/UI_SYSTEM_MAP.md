# UI SYSTEM MAP

> Inventario oficial del sistema de interfaz — CONTROL Design System  
> Última actualización: 2026-03-05

---

## 1. Propósito

Este documento define todas las piezas oficiales del sistema UI para productos Admin / SaaS.

- **Centraliza** el inventario de componentes disponibles y planificados.
- **Evita improvisaciones**: si una pieza no está aquí, no se implementa ad-hoc dentro de un feature.
- **Guía la creación de pantallas**: antes de diseñar cualquier vista nueva, se consulta este mapa.

---

## 2. Convenciones

### Estados

| Símbolo | Significado |
|---------|-------------|
| ✅ | **Implementado** — Existe en el proyecto, funcional y cerrado |
| ⚠️ | **Parcial** — Existe pero incompleto o con limitaciones conocidas |
| ❌ | **No existe aún** — Planificado, pendiente de implementación |

### Ubicación obligatoria

Toda pieza debe vivir en la carpeta correspondiente a su nivel de complejidad:

```
components/
├── atoms/         → Piezas atómicas, sin dependencias internas
├── molecules/     → Combinación de 2-3 atoms
├── containers/    → Organismos complejos, con lógica de UI
├── layouts/       → Estructura de página (shell, sidebar, topbar)
├── patterns/      → Patrones reutilizables entre features
```

---

## Estado del inventario UI

Este documento incluye dos tipos de componentes:

**Componentes Implementados (✅)**  
Existen actualmente en el codebase y pueden ser utilizados inmediatamente.

**Componentes Planificados (❌)**  
Están definidos como parte del Design System pero aún no han sido implementados.

**Regla**: Los componentes marcados como ❌ **no deben implementarse dentro de features directamente**.

Si se requiere uno:

1. Debe crearse oficialmente dentro del Design System
2. Debe registrarse en este documento
3. Luego puede ser usado por los módulos del sistema

---

## UI Governance (Regla de creación de componentes)

Regla:
Está prohibido crear componentes UI reutilizables dentro de features/cartuchos.

- Los cartuchos solo consumen componentes existentes del Design System.
- Si un componente falta, se crea oficialmente dentro del Design System y se registra aquí.

Proceso obligatorio para nuevas piezas:

1. Registrar el componente en este documento (❌ Planificado)
2. Implementar en `packages/console/ui/*` o `packages/console/core/*` según corresponda
3. Actualizar estado a ✅ Implementado
4. Recién entonces usarlo en cualquier cartucho

---

## 3. ATOMS

### Inputs

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Input | ✅ | `atoms/Input/` | Campo de texto con floating label, estados focus/error/disabled |
| Textarea | ✅ | `atoms/Textarea/` | Multiline con floating label, mismo aspecto que Input |
| Select | ✅ | `atoms/Select/` | Select base nativo (ver también SelectSingle en molecules) |
| SelectField | ✅ | `atoms/SelectField/` | Wrapper de Select con label y error integrados |
| MultiSelect | ❌ | `atoms/MultiSelect/` | Selector múltiple con chips y dropdown |
| Checkbox | ❌ | `atoms/Checkbox/` | Control de check individual con label |
| Radio | ❌ | `atoms/Radio/` | Botón de radio individual con label |
| Switch | ❌ | `atoms/Switch/` | Toggle on/off para settings |
| DatePicker | ❌ | `atoms/DatePicker/` | Selector de fecha con calendario |
| TimePicker | ❌ | `atoms/TimePicker/` | Selector de hora |
| FileUpload | ❌ | `atoms/FileUpload/` | Zona de subida de archivos (drag & drop + botón) |
| SearchInput | ❌ | `atoms/SearchInput/` | Input especializado con ícono de búsqueda y clear |

### Display

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Text | ✅ | `atoms/Text/` | Componente tipográfico base con tipos y estilos |
| Badge | ✅ | `atoms/Badge/` | Etiqueta de estado (success, warning, error, neutral, info) |
| Icon | ✅ | `atoms/Icon/` | Wrapper sobre Lucide icons, size y color por props |
| FloatingSurface | ✅ | `atoms/FloatingSurface/` | Superficie flotante con borde, sombra y scrollbar |
| Spacer | ✅ | `atoms/Spacer/` | Espaciador vertical/horizontal basado en tokens |
| Avatar | ❌ | `atoms/Avatar/` | Círculo con iniciales o imagen de usuario |
| Divider | ❌ | `atoms/Divider/` | Separador horizontal/vertical semántico |
| Tooltip | ❌ | `atoms/Tooltip/` | Texto auxiliar emergente on hover |
| Label | ❌ | `atoms/Label/` | Etiqueta de texto asociada a un form control |

### Actions

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Button | ✅ | `atoms/Button/` | Botón con variantes (primary, white, ghost, danger). **Prop `shape`**: `"default"` → radius.md, `"panel"` → radius.xl. Uso obligatorio `shape="panel"` en footers de Panel y FormActions. |
| ActionIcon | ✅ | `atoms/ActionIcon/` | Botón iconográfico con hover circle |
| Link | ❌ | `atoms/Link/` | Enlace estilizado con variante inline/standalone |

### Feedback

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Spinner | ✅ | `atoms/Spinner/` | Indicador de carga circular animado (SVG + Tokens). Resiliente a falta de ThemeContext |
| SkeletonBlock | ✅ | `atoms/SkeletonBlock/` | Primitiva de placeholder de carga; base para DetailSkeleton y ListSkeleton |
| ProgressBar | ❌ | `atoms/ProgressBar/` | Barra de progreso horizontal |

---

## 4. MOLECULES

### Forms

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| FormField | ❌ | `molecules/FormField/` | Label + Input + error + helper text unificados |
| FormGroup | ❌ | `molecules/FormGroup/` | Agrupación de campos con título de sección |
| FormSection | ✅ | `containers/FormSection/` | Sección colapsable con título y contenido |
| FormActions | ✅ | `patterns/form/FormActions.tsx` | Footer de formulario con Cancel/Submit + loading/error/success. Obligatorio: `<Button shape="panel">` en sus botones. |

### Navigation

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| TabsInline | ⚠️ | *(inline en toolbar)* | Tabs funcionales con underline animado; no es componente standalone |
| Breadcrumb | ⚠️ | *(inline en PageShell)* | Breadcrumbs via JSX; no es componente standalone |
| Pagination | ✅ | `containers/DataTable/TableFooter.tsx` | Paginación con "Filas por página" y navegación prev/next |

### Data Display

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| InfoRow | ❌ | `molecules/InfoRow/` | Fila key-value para detalle de entidad |
| KeyValueList | ❌ | `molecules/KeyValueList/` | Lista vertical de pares clave-valor |
| StatCard | ❌ | `molecules/StatCard/` | Tarjeta con métrica, ícono y tendencia |
| MetricBadge | ❌ | `molecules/MetricBadge/` | Badge numérico con variante de cambio (+/-) |

### Interaction

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| TableDropdown | ✅ | `containers/DataTable/TableDropdown.tsx` | Dropdown selector reutilizable (filtro, rows-per-page) |
| ActionMenu | ✅ | `molecules/ActionMenu/` | Menú contextual con secciones, íconos y variantes |
| SelectSingle | ✅ | `molecules/SelectSingle/` | Select con dropdown flotante y scrollbar estilizado |
| ConfirmDialog | ✅ | `molecules/ConfirmDialog/` | Modal de confirmación con tonos (default, error, warning, info, success). Layout compacto premium |
| StatusTabs | ✅ | `molecules/StatusTabs/` | Tabs de filtro por estado con badges y underline animado (Users, Devices) |
| SelectMulti | ❌ | `molecules/SelectMulti/` | Select multi-valor con chips |
| FilterChips | ❌ | `molecules/FilterChips/` | Chips activos de filtro con botón de eliminar |

---

## 5. ORGANISMS

### Tabla

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| DataTable | ✅ | `containers/DataTable/` | Tabla genérica con sorting, filtrado, paginación, skeleton, empty state |
| TableToolbar | ⚠️ | `containers/TableToolbar/` | Toolbar con tabs, filtro y search (hardcoded para Users; Devices usa inline) |
| TableHeader | ✅ | `containers/DataTable/TableHeader.tsx` | Header con sorting icons |
| TableFooter | ✅ | `containers/DataTable/TableFooter.tsx` | Footer con paginación funcional |

### Containers

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Card | ✅ | `molecules/Card/` | Contenedor con borde, radius y padding opcional |
| PanelCard | ✅ | `containers/PanelCard/` | Contenedor estándar para paneles (configuración, perfil, formularios). Implementa Panel Card Pattern. PanelCardFooter: solo acepta props estructuradas, no botones JSX. |
| Section | ✅ | `containers/Section/` | Sección con título y contenido |
| PageShell | ✅ | `containers/PageShell/` | Shell de página con título, breadcrumbs, acciones y layout fluid/boxed |
| ModalShell | ✅ | `containers/ModalShell/` | Modal con overlay, título, close y contenido |

### Estados Globales (Containers)

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| EmptyState | ✅ | `containers/EmptyState/` | Icono, título, descripción y acción opcional (centrado) |
| ErrorState | ✅ | `containers/ErrorState/` | Estado de error con ícono danger, título, mensaje y retry |
| LoadingState | ❌ | `containers/LoadingState/` | Estado de carga a pantalla completa (wrapper de Spinner) |

### Toast System (Feedback global)

| Sistema | Estado | Ruta principal | Componentes |
|---------|--------|----------------|-------------|
| **Toast System** | ✅ | `packages/console/core/toast/` | ToastProvider, useToast, ToastStack, ToastItem, errorToastHelper |

Sistema global de notificaciones breves para feedback de acciones del usuario.

**Scope**: Global UI feedback system utilizado por todos los cartuchos del sistema. El Toast System pertenece a la infraestructura de **Console / Core UI** y no a ningún feature específico. Cualquier módulo del sistema utiliza el mismo sistema de notificaciones.

**Tipos soportados**: success, error, warning, info.

**Uso**: `useToast()` → `showToast({ type, title, description })`. Integrado con `normalizedErrorToToast` para mapear errores del Connector.

### Pendientes

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| Drawer | ❌ | `containers/Drawer/` | Panel lateral deslizable (alternativa a modal) |
| FilterBar | ❌ | `containers/FilterBar/` | Barra horizontal de filtros activos |
| SearchBar | ❌ | `containers/SearchBar/` | Barra de búsqueda global |
| ConfirmationModal | → | Ver **ConfirmDialog** (implementado) | Modal de confirmación implementado en `molecules/ConfirmDialog/` |

### KanbanBoard

| Componente | Estado | Ruta | Nota de uso |
|-----------|--------|------|-------------|
| KanbanBoard | ❌ | `containers/KanbanBoard/` | Tablero de columnas arrastrables para flujos de estado |
| KanbanColumn | ❌ | `containers/KanbanBoard/KanbanColumn.tsx` | Columna individual con título, count y zona de drop |
| KanbanCard | ❌ | `containers/KanbanBoard/KanbanCard.tsx` | Tarjeta arrastrable con datos de la entidad |

---

## 6. PATTERNS

### Skeletons

| Componente | Estado | Ruta | Descripción |
|------------|--------|------|-------------|
| DetailSkeleton | ✅ | `patterns/skeletons/DetailSkeleton.tsx` | Skeleton estructural para vistas de detalle (header + cards) durante carga |
| ListSkeleton | ✅ | `patterns/skeletons/ListSkeleton.tsx` | Skeleton estructural para listados/tablas durante carga |

### Patrones de flujo

| Patrón | Estado | Descripción |
|--------|--------|-------------|
| **CRUD Pattern** | ✅ | Lista + Crear + Editar para una entidad (Users, Devices) |
| **Detail View Pattern** | ❌ | Vista de detalle con header, secciones de info y acciones |
| **Dashboard Grid Pattern** | ❌ | Grid de StatCards + gráficas + tablas resumidas |
| **Form 2-Column Pattern** | ✅ | Layout de formulario con visual izquierdo + campos derecho (`FormLayout`) |
| **Wizard / Stepper Pattern** | ❌ | Flujo multi-paso con progreso visible y validación por paso |
| **Confirmation Pattern** | ✅ | Modal de confirmación antes de acciones destructivas → **ConfirmDialog** |
| **Bulk Actions Pattern** | ❌ | Selección múltiple + barra de acciones masivas en tabla |
| **Status Tabs Pattern** | ✅ | Tabs que filtran datos por estado con counts dinámicos (Users, Devices) |
| **Inline Expandable Row Pattern** | ❌ | Fila de tabla que se expande para mostrar detalle sin navegar |
| **Workflow Board Pattern** | ❌ | Tablero Kanban para flujos de estado arrastrables |

### Panel Card Pattern

El **Panel Card Pattern** define la estructura estándar utilizada para pantallas de configuración, perfil, formularios y paneles administrativos dentro del sistema.

Este patrón garantiza consistencia visual y estructural en todos los módulos del sistema.

**Estructura**:

```
PanelCard
├ Header
│   ├ Title
│   ├ Description (opcional)
│   ├ Tabs / navegación interna (opcional)
│   └ HeaderActions (opcional)
│
├ Body
│   ├ Formularios
│   ├ Configuración de campos
│   ├ Dependencias de campos (conditional fields)
│   ├ Secciones estructuradas
│   ├ Listas o mini tablas
│   └ Estados de carga (Skeleton / Spinner)
│
└ Footer
    ├ DangerAction (opcional)
    ├ SecondaryAction (Cancelar)
    ├ PrimaryAction (Guardar / Aplicar)
    └ Status feedback (Guardado / Error)
```

**Panel Footer Hard Lock**: PanelCardFooter no acepta botones como JSX. Solo acepta props estructuradas:

```tsx
footer={{
  primaryLabel: "Guardar",
  primaryOnClick: handleSave,
  secondaryLabel: "Cancelar",
  secondaryOnClick: handleCancel
}}
```

Internamente renderiza: `Button variant="secondary"`, `Button variant="actionPrimary"`, `Button shape="panel"`, `Button size="sm"`.

**Reglas de uso**:

- El **Header** define el contexto del panel.
- El **Body** es completamente flexible y puede contener cualquier estructura necesaria.
- El **Footer** contiene las acciones principales del panel.
- Las acciones destructivas deben aparecer separadas del PrimaryAction.

**Casos de uso**:

- Configuración de cuenta
- Perfil de usuario
- Seguridad
- Apariencia
- Integraciones
- Permisos
- Formularios administrativos

Este patrón debe ser utilizado por cualquier módulo que implemente vistas tipo panel dentro del sistema.

---

## 7. Global UI States — ✅ Cerrado (v1)

Estándar para los 8 estados fundamentales de interfaz.

### 1. Loading
- **Dónde aplica**: Carga inicial de página, tablas, tarjetas o envío de formularios.
- **Componente**:
  - `atoms/Spinner` → para cargas pequeñas o parciales
  - `atoms/SkeletonBlock` → primitiva base de skeleton
  - `patterns/skeletons/ListSkeleton` → skeleton estructural para tablas/listas
  - `patterns/skeletons/DetailSkeleton` → skeleton estructural para vistas de detalle
- **Checklist**:
  - [ ] No bloquear toda la UI si es carga parcial.
  - [ ] Usar `aria-busy="true"`.
  - [ ] Mantener layout estable (evitar saltos al cargar).

### 2. Empty
- **Dónde aplica**: Listas sin resultados, tablas vacías, secciones sin contenido.
- **Componente**: `containers/EmptyState`.
- **Checklist**:
  - [ ] Icono neutral (ej: search, inbox).
  - [ ] Título claro ("No hay dispositivos").
  - [ ] Descripción breve o instrucción.
  - [ ] Acción primaria para resolver el estado ("Crear dispositivo").

### 3. Error
- **Dónde aplica**: Fallo de carga, error de servidor 500, error de validación global.
- **Componente**: `containers/ErrorState`.
- **Checklist**:
  - [ ] Icono de error/danger.
  - [ ] Título amigable ("Algo salió mal").
  - [ ] Mensaje técnico opcional (si es admin).
  - [ ] Botón "Reintentar" funcional.

### 4. Success
- **Dónde aplica**: Confirmación post-acción (crear, editar, borrar).
- **Componente**: `FormActions` (estado success) o **Toast System** (ToastProvider + useToast).
- **Checklist**:
  - [ ] Feedback inmediato (< 200ms).
  - [ ] Color semántico `success`.
  - [ ] Desaparece automáticamente o permite dismiss.

### 5. Disabled
- **Dónde aplica**: Botones, inputs, acciones no disponibles por lógica de negocio.
- **Componente**: Propiedad nativa `disabled` + estilos CSS.
- **Checklist**:
  - [ ] Opacidad visual (0.5 o similar).
  - [ ] Cursor `not-allowed`.
  - [ ] No emite eventos click/hover.
  - [ ] (Opcional) Tooltip explicando la razón.

### 6. No Permission (403)
- **Dónde aplica**: Usuario intenta acceder a ruta/acción restringida.
- **Componente**: `containers/ErrorState` (variante).
- **Checklist**:
  - [ ] Icono de candado/lock.
  - [ ] Título: "Acceso denegado".
  - [ ] Acción: "Volver al dashboard" o "Iniciar sesión".

### 7. Not Found (404)
- **Dónde aplica**: Ruta inexistente o recurso eliminado.
- **Componente**: `containers/ErrorState` (variante).
- **Checklist**:
  - [ ] Icono de búsqueda/fantasma.
  - [ ] Título: "Página no encontrada".
  - [ ] Acción: "Volver al inicio".

### 8. Offline
- **Dónde aplica**: Pérdida de conexión detectada.
- **Componente**: `containers/ErrorState` (variante global).
- **Checklist**:
  - [ ] Icono de wifi-off.
  - [ ] Título: "Sin conexión".
  - [ ] Botón: "Reintentar conexión".

---

## 8. Estándar Global de Componentes (Source of Truth)

Para garantizar la consistencia, todos los componentes deben seguir estos estándares obligatorios:

- **Card Variant "panel"**: Uso obligatorio para paneles de configuración, perfil y detalle. Fuerza elevación y aplica el patrón de **Footer Glued** (márgenes negativos de -24px).
- **Footer Glued**: Las acciones de pie de página en Cards tipo panel deben tocar los bordes del contenedor sin "aire" inferior.
- **Labels Muted**: Los labels de `Input` y `SelectField` deben usar estrictamente el token `semantic.text.muted`.
- **Botones Panel**: En vistas de tipo panel o tablas, el tamaño de botón estándar es `size="sm"` (36px).
- **Button shape="panel"**: Obligatorio en FormActions y PanelCardFooter. Garantiza `radius.xl` consistente.
- **Prohibición de Hacks**: Queda estrictamente prohibido el uso de paddings, márgenes o alturas manuales ("hacks") por pantalla. Todo ajuste debe ser a través de props de componentes o tokens globales.
- **Prohibición borderRadius inline**: No usar `style={{ borderRadius }}`. Usar `Button shape="panel"` o tokens del Design System.

---

## 8.1 Guard Rails del Sistema UI

Enforcement automático vía ESLint y script de verificación.

### ESLint Rules

| Regla | Bloquea/Exige | Mensaje |
|-------|---------------|---------|
| `control/no-inline-border-radius` | Bloquea `style={{ borderRadius }}` | "No uses style.borderRadius. Usa Button shape='panel' o tokens del Design System." |
| `control/require-panel-button-shape-in-footers` | Exige `<Button shape="panel">` | En FormActions y PanelCardFooter |

### Script de verificación

| Script | Validación |
|--------|------------|
| `check:ui-guards` | No exista `borderRadius` inline; FormActions y PanelCardFooter usen `shape="panel"` |

### Resultado

- Consistencia visual en botones de panel
- Prohibición de estilos manuales
- Enforcement automático vía ESLint
- Enforcement adicional vía script

---

## 9. Testing Surfaces

Entornos internos para desarrollo y pruebas de componentes aislados.

| Ruta | Estado | Propósito |
|------|--------|-----------|
| `/lab` | ✅ **Oficial** | Entorno de desarrollo aislado para probar átomos, moléculas y organismos fuera de la lógica de negocio. |

---

## 10. Cómo usar este mapa

1. **Antes de crear una pantalla nueva** → revisar este inventario.
2. **Si la pieza no existe** → crearla oficialmente (ej: `LoadingState` wrapper).
3. **No crear piezas dentro de features** sin registrarlas aquí.
4. **Mantener actualizado** al cerrar componentes pendientes (ej: Toast, Modal).

> _Este documento es la fuente de verdad del sistema UI._
