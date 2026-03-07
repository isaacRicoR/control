# Auditoría de Documentación — CONTROL

**Fecha:** 2026-03-06  
**Alcance:** Consistencia entre documentación y estructura real del repositorio.

---

## SECCIÓN 1 — Consistencias correctas

Elementos donde la documentación y el repositorio coinciden.

### Estructura general
- **packages/console/ui** — Existe con atoms, molecules, containers, layouts, patterns.
- **packages/console/core** — Existe con connector, toast, auth, preferences, governance, permissions.
- **packages/console/tokens** — Existe con colors.ts, shadows.ts, radius.ts.
- **apps/control** — Aplicación principal con app/(shell)/.
- **server/** — Existe con envelope, services, db/memory, db/queries para users y devices.
- **scripts/** — Existe con eslint-rules, check-ui-guards.mjs, scan-hardcoded-colors.mjs.

### Documentos clave
- docs/README.md, SYSTEM_OVERVIEW.md, SYSTEM_TARGET_ARCHITECTURE.md, CONTROL_SYSTEM_MAP.md, PRODUCT_SYSTEM_MAP.md, UI_SYSTEM_MAP.md, DATA_MODEL_MAP.md — Existen y son accesibles.

### Componentes UI documentados y existentes
| Componente | Ubicación documentada | Estado real |
|------------|------------------------|-------------|
| AppShell | packages/console/ui/layouts/AppShell | ✅ Existe |
| Sidebar, TopBar | packages/console/ui/layouts | ✅ Existen |
| DataTable, TableToolbar, TableHeader, TableFooter | containers/DataTable, TableToolbar | ✅ Existen |
| PanelCard, FormSection, PageShell, ModalShell | containers/ | ✅ Existen |
| EmptyState, ErrorState | containers/ | ✅ Existen |
| Button, Input, Text, Badge, Spinner, SkeletonBlock | atoms/ | ✅ Existen |
| ActionMenu, StatusTabs, SelectSingle, ConfirmDialog | molecules/ | ✅ Existen |
| FormActions, DetailSkeleton, ListSkeleton | patterns/ | ✅ Existen |
| Toast System | packages/console/core/toast/ | ✅ Existe (useToast, ToastProvider, errorToastHelper) |

### Mapas del sistema
- CONTROL_SYSTEM_MAP, PRODUCT_SYSTEM_MAP, UI_SYSTEM_MAP — Referencias cruzadas correctas.
- DATA_MODEL_MAP — Entidades alineadas conceptualmente con el backend mock (User, Device).

### Rutas documentadas
- /users, /devices, /lab/apariencia, /lab/permissions-check — Existen en apps/control.

### Carpetas docs
- docs/architecture, system-maps, data-model, audits, theme, history, legacy — Existen.
- docs/ops/logs, docs/proposals — Carpetas vacías pero documentadas.

---

## SECCIÓN 2 — Inconsistencias encontradas

### 2.1 Nombre de archivo en docs/README.md

| Documentado | Real |
|-------------|------|
| UNIVERSAL_CONNECTOR_CONTRACT_v2.1.md | UNIVERSAL_CONNECTOR_CONTRACT_v2_1.md |

El índice en docs/README.md (línea 42) lista `UNIVERSAL_CONNECTOR_CONTRACT_v2.1.md` (punto). El archivo real es `UNIVERSAL_CONNECTOR_CONTRACT_v2_1.md` (guion bajo). La ruta no coincide.

---

### 2.2 UI_SYSTEM_MAP — Componentes marcados como ❌ que sí existen

| Componente | Estado en doc | Ubicación real |
|------------|---------------|----------------|
| Avatar | ❌ No existe | packages/console/ui/atoms/Avatar/ |
| SearchInput | ❌ No existe | packages/console/ui/atoms/SearchInput/ |
| FormField | ❌ No existe | packages/console/ui/patterns/FormField/ |

---

### 2.3 UI_SYSTEM_MAP — Ubicación incorrecta de Card

| Documentado | Real |
|-------------|------|
| containers/Card/ | molecules/Card/ |

Card está documentado como contenedor; en el repo está en molecules.

---

### 2.4 PagePanelTemplate — Ubicación y gobernanza

**Documentado:** CONTROL_SYSTEM_MAP lo presenta como componente sistémico en `packages/console/ui` (sección 5).

**Real:** `apps/control/app/(shell)/_components/PagePanelTemplate.tsx`

Está en el cartucho (apps), no en el Design System (packages/console/ui). La regla de gobernanza indica que todo componente UI reutilizable debe vivir en `packages/console/ui/*`.

---

### 2.5 Componentes no documentados en UI_SYSTEM_MAP

Componentes que existen pero no figuran en el inventario:

| Componente | Ubicación |
|------------|-----------|
| PrimaryActionButton | atoms/PrimaryActionButton/ |
| DeviceStatusCell | molecules/DeviceStatusCell.tsx |
| NotFoundState | containers/NotFoundState/ |
| AccessDeniedState | containers/AccessDeniedState/ |

---

### 2.6 docs/theme — Archivos no indexados

La sección 5 (Sistema de tema) de docs/README.md no enumera archivos. En docs/theme/ existen:

- TOKEN_MAP_USERS_LIST_DARK.md
- FOCUS_RING_SOURCE_REPORT.md
- CONTROL_UI_SPEC_v1.md

A diferencia de arquitectura, mapas y data-model, theme carece de lista explícita en el índice.

---

### 2.7 DATA_MODEL_MAP vs backend mock

- **DATA_MODEL_MAP:** Define User con `organizationId`, `departmentId`, `roleId` y relaciones normalizadas.
- **users.store.ts:** UserDTO usa `role`, `department` como strings y no incluye `organizationId`.
- **devices.store.ts:** DeviceDTO usa `nombre`, `tipo`, `departamento`, `usuario` (campos en español, no normalizados).

El modelo de datos documentado no coincide con el DTO del backend mock. Es coherente si el DATA_MODEL es el diseño objetivo y el mock es temporal.

---

### 2.8 Aliases de tsconfig no documentados

En `apps/control/tsconfig.json` existen paths no descritos en ningún documento:

- `@ui/*` → packages/console/ui/*
- `@core/*` → packages/console/core/*
- `@tokens` / `@tokens/*` → packages/console/tokens
- `@server/*` → server/*

---

## SECCIÓN 3 — Recomendaciones

Cambios mínimos para alinear la documentación con el repositorio.

### Alta prioridad

1. **Corregir nombre en docs/README.md**
   - Cambiar `UNIVERSAL_CONNECTOR_CONTRACT_v2.1.md` por `UNIVERSAL_CONNECTOR_CONTRACT_v2_1.md` (línea 42).

2. **Actualizar UI_SYSTEM_MAP.md**
   - Avatar: cambiar de ❌ a ✅, ruta `atoms/Avatar/`.
   - SearchInput: cambiar de ❌ a ✅, ruta `atoms/SearchInput/`.
   - FormField: cambiar de ❌ a ✅, ruta `patterns/FormField/`.
   - Card: corregir ruta de `containers/Card/` a `molecules/Card/`.

3. **PagePanelTemplate en CONTROL_SYSTEM_MAP**
   - Opción A: Registrar la ubicación real `apps/control/app/(shell)/_components/PagePanelTemplate.tsx` y documentar la excepción de gobernanza.
   - Opción B: Mover PagePanelTemplate a `packages/console/ui/containers/` o `patterns/` para cumplir la regla de gobernanza.

### Prioridad media

4. **Registrar componentes faltantes en UI_SYSTEM_MAP**
   - Añadir PrimaryActionButton, DeviceStatusCell, NotFoundState, AccessDeniedState con estado y ruta correctos.

5. **Ampliar docs/README.md — Sección 5 (Sistema de tema)**
   - Incluir la lista de archivos:
     - TOKEN_MAP_USERS_LIST_DARK.md
     - FOCUS_RING_SOURCE_REPORT.md
     - CONTROL_UI_SPEC_v1.md

6. **Documentar aliases de TypeScript**
   - Añadir en SYSTEM_OVERVIEW o en un doc de configuración la tabla de aliases: `@ui`, `@core`, `@tokens`, `@server`.

### Prioridad baja

7. **DATA_MODEL_MAP vs backend mock**
   - Añadir una nota indicando que el documento describe el modelo objetivo y que el backend actual usa mocks con DTOs simplificados y campos en español.

8. **Registro en docs/ops/logs/**
   - Crear una entrada que documente esta auditoría según la regla 5 del Gobierno de documentación.
