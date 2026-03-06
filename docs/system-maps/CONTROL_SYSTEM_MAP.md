# CONTROL — SYSTEM MAP

> **Estado**: Actualizado al 2026-03-05
> **Alcance**: Únicamente lo que existe en el codebase `c:\dev\controldev`.

---

## 🏗️ ARQUITECTURA: CONSOLA + CARTUCHO

Modelo de aislamiento total para escalabilidad y mantenimiento.

- **Consola**: Infraestructura base (`app/layout.tsx`, `packages/console/ui/layouts/AppShell`). Provee Sidebar, TopBar, Theme y Auth Context.
- **Cartucho**: Módulos de negocio independientes (`/users`, `/devices`).
- **Aislamiento**: 1 Consola activa por Cartucho. Los módulos son "enchufables".
- **Backend**: Operando con Mock Data y endpoints API locales bajo patrón: Controller → Service → Repository (mock), con Envelope estándar y wiring real desde frontend.

| Capa | Contenido | Estado |
|---|---|---|
| **Core** | Design System, Connector (`packages/console/core/connector/`), Auth Logic | CERRADO |
| **Console** | Shell (`AppShell`, `Sidebar`, `TopBar`, layouts) | CERRADO |
| **Features** | Cartuchos de negocio (`app/(shell)/users`, `devices`) | ESTABLE (Patrones UI congelados) |
| **Security** | Route Guards, Permisos RBAC, Middleware | IMPLEMENTADO |
| **Tools** | Herramientas de desarrollo (`Permisos`, `Apariencia`, `Lint`) | IMPLEMENTADO |

> **Regla de oro**: Las capas superiores dependen de las inferiores. Ningún Feature accede directamente a infraestructura sin pasar por la capa Core.

---

## 🎨 UI PATTERN RULES (Cursor Intelligence)

El sistema utiliza reglas de IA para garantizar que los patrones visuales se mantengan estables y replicables sin intervención manual constante.

| Regla | Propósito | Estado |
|---|---|---|
| `.cursor/rules/panel-layout.mdc` | Estándar de Paneles (Header/Body/Footer). **PROHIBIDO** style inline en footers. **OBLIGATORIO** `Button shape="panel"` en FormActions y PanelCardFooter | ❄️ FROZEN |
| `.cursor/rules/listing-layout.mdc` | Estándar de Listados (Scroll interno, Toolbar) | ❄️ FROZEN |
| `.cursor/rules/form-layout.mdc` | Estándar de Formularios (Grid, SectionTitles) | ❄️ FROZEN |
| `.cursor/rules/ui-patterns.mdc` | Estándar de Botones, Avatars e Interacciones | ❄️ FROZEN |

---

## 📐 ESTRUCTURA UI CORE

Jerarquía oficial para la construcción de pantallas dentro de `apps/control`.

### Pantallas de Detalle / Edición / Panel

1. **PageShell**  
   Contenedor semántico de página.

2. **PagePanelTemplate**  
   Template reutilizable para vistas tipo panel que implementa el **Panel Card Pattern** definido en el **UI SYSTEM MAP**.

   Este template organiza la interfaz en tres zonas estructurales:

   - **HeaderTools**: Back navigation + Tabs cuando aplica.
   - **Body**: Contenido scrolleable que puede incluir: formularios, configuraciones, dependencias de campos, listas o mini tablas.
   - **FooterActions**: Acciones del panel como Cancelar / Guardar o acciones críticas.

**Nota de arquitectura**: La estructura completa del **Panel Card Pattern** se documenta en **UI SYSTEM MAP → PATTERNS → Panel Card Pattern**. Este documento (CONTROL SYSTEM MAP) describe la arquitectura general del sistema, mientras que el **UI SYSTEM MAP** es la fuente de verdad para los componentes y patrones de interfaz.

### Pantallas de Listado
1. **PageShell** (variant="fluid"): Altura fija al 100% visible.
2. **Table Container** (data-table-card):
   - **Status Tabs**: Filtros rápidos de estado.
   - **TableToolbar**: Buscador y filtros dinámicos.
   - **DataTable**: Cuerpo con scroll interno.
   - **Footer**: Paginación.

---

## 🧬 UI DNA (Sistema Visual)

El sistema visual de Control se basa en cuatro patrones fundamentales congelados:

- Panel Layout
- Listing Layout
- Form Layout
- UI Interaction Patterns

Estos patrones se aplican mediante reglas de Cursor (.mdc) y garantizan consistencia visual automática en todos los módulos presentes y futuros.

Cualquier nueva pantalla en `apps/control` debe heredar estos patrones y no crear layouts personalizados fuera de estas reglas.

---

## 💎 DESIGN SYSTEM & TOKENS

El sistema ha eliminado completamente los valores hardcodeados en favor de una arquitectura 100% basada en tokens semánticos.

- **Colores**: Uso exclusivo de `semantic.*` (ej: `semantic.border.subtle`). **0% hardcoded colors**.
- **Espaciado**: Uso exclusivo de `spacing.*`. **0% hardcoded margins/paddings**.
- **Radios**: Uso estandarizado de tokens (`radius.md`, `radius.xl`). Botones: prop `shape` controla el radius — `shape="default"` → `radius.md`, `shape="panel"` → `radius.xl`. Obligatorio en footers de Panel y FormActions.
- **Tipografía**: Uso de `typography.fontWeight.semibold` (600) para títulos de sección.

### Theme Engine

El sistema de tokens permite modificación dinámica del tema visual mediante la herramienta de Apariencia.

Ubicación:
apps/control/app/(shell)/lab/apariencia

Capacidades:

- Edición de tokens semánticos
- Cambio de modo Dark / Light
- Registro de presets de tema
- Aplicación inmediata sin recompilación

Infraestructura relacionada:

- Theme Registry
- Token Overrides
- Persistencia de preferencia de usuario

---

## DESIGN SYSTEM SOURCE OF TRUTH

El inventario completo de componentes del sistema visual **no se documenta en este archivo**.

Para consultar qué componentes UI existen realmente en el proyecto, ver:

**UI SYSTEM MAP — CONTROL Design System**

Ese documento contiene:

- Inventario oficial de Atoms, Molecules, Containers y Patterns
- Estado de cada componente (Implementado / Parcial / No existe)
- Ruta exacta en el codebase
- Reglas de uso del Design System

Regla de arquitectura:

Antes de crear o usar cualquier componente UI:

1. Consultar UI SYSTEM MAP
2. Si el componente existe → reutilizar
3. Si no existe → registrarlo primero en UI SYSTEM MAP antes de implementarlo

Este documento (CONTROL SYSTEM MAP) describe únicamente:

- Arquitectura del sistema
- Capas (Console, Core, Features)
- Conectores y contratos
- Seguridad y RBAC
- Patrones UI congelados

---

## UI GOVERNANCE (Component Ownership)

Regla:
Los cartuchos (Features) **no deben** crear componentes UI reutilizables dentro de sus carpetas.

- Los cartuchos solo **usan** el Design System (UI System).
- Todo componente UI reutilizable vive en `packages/console/ui/*` (Atoms/Molecules/Containers/Patterns).
- Providers/Hooks compartidos viven en `packages/console/core/*` (ej: Toast).

Si un cartucho necesita un componente UI que no existe:

1. Verificar en **UI SYSTEM MAP**
2. Proponer/registrar el componente en **UI SYSTEM MAP** (estado ❌ / planificado)
3. Implementarlo oficialmente en `packages/console/ui/*`
4. Marcarlo como ✅ en **UI SYSTEM MAP**
5. Solo entonces usarlo en el cartucho

Objetivo:
Evitar duplicación de UI y mantener consistencia entre módulos.

---

## 📡 BACKEND COMMUNICATION LAYER

**Contrato**: `UNIVERSAL_CONNECTOR_CONTRACT_v2.1` — **CERRADO (LTS)**

Define el protocolo único de comunicación entre el frontend y cualquier backend REST.

### Patrón
- **Estilo**: Headless REST + Power Query
- **Base URL**: `/api/v2/:entity`
- **Envelope obligatorio** en todas las respuestas

### Operaciones Soportadas

| Operación | Método | Descripción |
|---|---|---|
| GET simple | `GET /api/v2/:entity/:id` | Lectura de entidad individual |
| POST search | `POST /api/v2/:entity/search` | Búsqueda compleja con OR compuesto |
| fields | Parámetro `fields` | Proyección de campos devueltos |
| include | Parámetro `include` | Relaciones a expandir (eager load) |
| Paginación page | Parámetro `page` + `pageSize` | Paginación por offset |
| Paginación cursor | Parámetro `cursor` | Paginación por cursor (scroll infinito) |
| Concurrency | Header `ETag` (opcional) | Control de concurrencia optimista |

### Seguridad

- **Autenticación**: Bearer Token (`Authorization: Bearer <token>`)
- **401 Unauthorized**: Token ausente o expirado
- **403 Forbidden**: Token válido pero sin permisos para el recurso
- **Row-level security**: El backend filtra registros según identidad del usuario
- **Field-level security**: El backend omite campos según permisos del usuario

---

## 🔌 FRONTEND CONNECTOR LAYER

**Ubicación**: `packages/console/core/connector/`
**Estado**: **IMPLEMENTADO** — Clean (0 errors, 0 warnings)

Capa de abstracción que encapsula toda comunicación HTTP. Ningún feature habla directamente con `fetch`.

### Archivos

| Archivo | Responsabilidad |
|---|---|
| `types.ts` | Tipos y contratos TypeScript del Connector |
| `httpClient.ts` | Cliente HTTP base (fetch wrapper, headers, interceptores) |
| `genericEntityService.ts` | Servicio genérico reutilizable por cualquier entidad |
| `index.ts` | Barrel export — punto de entrada único |

### Regla Arquitectónica

> **Ningún feature accede directamente a `fetch` o a APIs HTTP.**
> Todo flujo de datos pasa por `packages/console/core/connector/`. Esta regla es **no negociable**.

---

## 1️⃣ CORE SHELL — CERRADO

Infraestructura base de la aplicación.

- **Layout Root**: `app/layout.tsx` (HTML, Body, Fonts).
- **Layout Shell**: `app/(shell)/layout.tsx` (Implementa `AppShell`) — Branding inyectado desde config.
- **AppShell**: `packages/console/ui/layouts/AppShell` — Shell limpio, contenedor principal genérico.
- **Sidebar**: `packages/console/ui/layouts/Sidebar` — Desacoplado por cartucho; navegación inyectada desde configuración.
- **TopBar**: `packages/console/ui/layouts/TopBar` — Barra superior sticky.

### Estado de la Consola Base

| Aspecto | Estado |
|---|---|
| Shell principal | ✅ CERRADO |
| Sidebar / TopBar | ✅ CERRADO |
| Route Guards | ✅ IMPLEMENTADO — Protección en Server Layouts |
| Permission Logic | ✅ CERRADO — Logic shared (Server/Client) |
| Auth Debug Mode | ✅ IMPLEMENTADO — URL-based testing |
| **SSR Safety** | ✅ ESTABLE — Guards para browser APIs, Suspense boundaries |

---

## 2️⃣ MÓDULOS PRODUCTIVOS

Funcionalidades de negocio implementadas en `app/(shell)`.

### Users (`/users`)
- **List**: `/users/list` (DataTable, TableToolbar, Filtros). Dataset ampliado (18+ registros) para pruebas de paginación y Avatars.
- **Create**: `/users/create` (Formulario de creación).
- **Detail**: `/users/[id]` (Vista de detalle con Tabs y Cards).
  - *Governance*: Implementado en `packages/console/core/governance/fieldEdit.ts`.

### Preferences & Persistence (UX Infrastructure)
El sistema implementa una jerarquía de persistencia de preferencias de usuario (ej: `pageSize`).

**Ubicación**: `packages/console/core/preferences/`
- **Repository Pattern**: Capa desacoplada para persistencia.
  - `LocalPreferencesRepository`: Implementación actual via `localStorage`.
  - `RemotePreferencesRepository`: Placeholder para futura integración con backend.
- **Prioridad de Verdad**:
  1. **URL**: `?pageSize=X` (Máxima prioridad, no persistente).
  2. **Screen Preference**: Persistencia por `pathname` (ej: 10 en Users, 20 en Devices).
  3. **Last Used Global**: Fallback al último valor usado globalmente si no hay por pantalla.
  4. **System Default**: 5.

**Estado**:
🟢 ESTABLE (Persistencia por pantalla implementada)

### Devices (`/devices`)
- **List**: `/devices/list` (DataTable, TableToolbar, Status Tabs).
- **Create**: `/devices/create` (Formulario básico).
- **Detail**: `/devices/[id]` (Detalle completo con Tabs y subrayado animado).

### Apariencia (`/lab/apariencia`)
Herramienta de configuración de tokens visuales (Desarrollador → Apariencia).
- **Tabs**: Base, Estados, Componentes, Avanzado.
- **Permisos**: 
  - Admin: Edición total de tokens.
  - Usuario: Solo cambio Dark/Light.

**Estado**:
🟢 IMPLEMENTADO (Herramienta Real)

---

## 3️⃣ SEGURIDAD Y ACCESO (RBAC)

Sistema de protección de rutas y componentes.

### Route Guards (Server-side)
Protección a nivel Layout para evitar renders no autorizados.
- **Módulos afectados**: `/users` y `/devices`.
- **Mecánica**: `requireAuth({ action, entity })` bloquea la ejecución.
- **Redirecciones**: 
  - 401 (Sin sesión) -> `/login`
  - 403 (Sin permiso) -> `/forbidden`

### Auth Debug Mode (DEV ONLY)
Testing determinista de estados de acceso vía URL.
- **Uso**: `?debugAuth=[owner|guest|none]`

---

## 4️⃣ HERRAMIENTAS DE DESARROLLO (`Desarrollador`)

Acceso exclusivo para administradores y desarrolladores (Owner role).

- **Permisos y acceso**: `/lab/permissions-check` — Auditoría de estados RBAC.
- **Apariencia**: `/lab/apariencia` — Configuración dinámica de tokens visuales.
- **ESLint Quality Gate**:
  - Configuración: **Flat Config v9** (`eslint.config.mjs`).
  - **Custom Rule**: `control/require-use-client-when-using-hooks`. Obliga a usar `"use client"` en cualquier archivo UI/App que utilice hooks de React o Next.js Navigation.
  - **Guard Rails UI**:
    - `control/no-inline-border-radius`: Bloquea `style={{ borderRadius }}`. Mensaje: "No uses style.borderRadius. Usa Button shape='panel' o tokens del Design System."
    - `control/require-panel-button-shape-in-footers`: Exige `<Button shape="panel">` en FormActions y PanelCardFooter.

---

## 5️⃣ COMPONENTES SISTÉMICOS (`packages/console/ui/containers` & `molecules`)

Piezas de arquitectura UI reutilizables.

- **PagePanelTemplate**: ❄️ STABLE (Slot-based layout para Paneles).
- **DataTable**: Tabla de datos con paginación y estados — ❄️ FROZEN (100% genérico).
- **TableToolbar**: Barra de herramientas estandarizada (Tabs, Search, Actions).
- **CardTabsHeader**: Header reutilizable para tarjetas con tabs. Altura: **55px**.
- **PageShell**: Contenedor semántico de páginas (Título, Breadcrumbs).
- **ConfirmDialog**: Patrón oficial congelado (Layout compacto, premium status).
- **Spinner**: Componente resiliente a falta de Context; marcado con `"use client"`.

---

## 6️⃣ ESTADO TÉCNICO Y SALUD

### Next.js & SSR Stability
- **Turbopack Safe**: Se resolvieron los crashes críticos en desarrollo.
- **Client/Server Isolation**:
  - Los accesos a `localStorage` y `window` están protegidos por guards y `useEffect`.
  - Componentes de lista y detalle envueltos en `<Suspense />` para proteger el uso de `useSearchParams`.
  - Directiva `"use client"` aplicada sistemáticamente a componentes con hooks.

### Lint & Quality
- **ESLint v9**: Operando con Flat Config.
- **Custom Shield**: Regla local de bloqueo para asegurar directivas client-side en hooks.
- **Guard Rails UI**: Reglas `control/no-inline-border-radius` y `control/require-panel-button-shape-in-footers` para consistencia de botones en footers.
- **Script de verificación**: `check:ui-guards` — Valida que no exista `borderRadius` inline y que FormActions y PanelCardFooter usen `shape="panel"`.
- **Type Safety**: Tipado estricto en el Connector y Repositories.

---

## 📊 ESTADO ACTUAL DEL PROYECTO (Snapshot 2026-03-05)

| Componente | Estado | Notas |
|---|---|---|
| **Arquitectura Base** | ✅ CERRADA | Consola + Cartucho, SSR Safe |
| **UI Layouts (Panel/Listing/Form)** | ❄️ FROZEN | Formalizados mediante `.mdc` rules |
| **Security Layer** | ✅ IMPLEMENTADO | Route Guards, Permisos RBAC |
| **Contrato Universal** | ✅ CERRADO | v2.1 LTS |
| **Connector Layer** | ✅ IMPLEMENTADO | 0 errors, 0 warnings |
| **Preferences Layer** | ✅ ESTABLE | Persistencia por pantalla + fallback |
| **Design System** | ❄️ FROZEN | 100% Token-based (0% hardcoded) |
| **ESLint Rules** | ✅ IMPLEMENTADO | Regla "use client" + Guard Rails UI (no-inline-border-radius, require-panel-button-shape-in-footers) |
| **Backend Real** | ⏳ NO IMPLEMENTADO | Mock Data (Dataset de usuarios ampliado) |

---

## 🚀 ÁREA DE DESARROLLO ACTUAL

El foco se encuentra en la infraestructura de personalización y estética avanzada.

- **Appearance System**: Refinamiento de la herramienta de edición de tokens.
- **Theme Registry**: Gestión dinámica de presets (Control vs Security).
- **Theme Switching**: Transiciones suaves y persistencia de modo (Dark/Light).
- **Ubicación**: `apps/control/app/(shell)/lab/apariencia`
- **Estado**: 🚧 IN DEVELOPMENT

---

## 📅 PRÓXIMOS MÓDULOS DE PRODUCTO

Módulos funcionales que heredarán los patrones UI congelados.

1. **Departments**: Gestión de estructuras organizativas.
2. **Devices**: Expansión de gestión de inventario.
3. **Organization**: Configuración global de la cuenta.

---

## 🛡️ RESULTADO ARQUITECTÓNICO (Guard Rails UI)

El sistema garantiza:

- **Consistencia visual** en botones de panel mediante `Button shape="panel"`.
- **Prohibición de estilos manuales** vía regla ESLint `control/no-inline-border-radius`.
- **Enforcement automático** vía ESLint (`control/require-panel-button-shape-in-footers`).
- **Enforcement adicional** vía script `check:ui-guards`.

### Panel Footer Hard Lock

`PanelCardFooter` no acepta botones como JSX. Solo acepta props estructuradas:

```tsx
footer={{
  primaryLabel: "Guardar",
  primaryOnClick: handleSave,
  secondaryLabel: "Cancelar",
  secondaryOnClick: handleCancel
}}
```

Internamente renderiza `Button variant="secondary"`, `Button variant="actionPrimary"`, `Button shape="panel"`, `Button size="sm"`.

---

## 🕵️ ÚLTIMOS CAMBIOS (Fecha de corte: 2026-03-05)

- **Button shape prop**: Nuevo prop oficial `shape: "default" | "panel"` (default → radius.md, panel → radius.xl). Obligatorio en footers de Panel y FormActions.
- **Panel Footer Hard Lock**: PanelCardFooter solo acepta props estructuradas; no acepta botones JSX.
- **Guard Rails UI**: ESLint rules `control/no-inline-border-radius` y `control/require-panel-button-shape-in-footers`.
- **Script check:ui-guards**: Verifica borderRadius inline y uso de shape="panel" en footers.
- **UI Patterns Frozen**: Formalización de Panel Layout, Listing Layout, Form Layout y UI Interaction Patterns mediante reglas de Cursor (.mdc).
- **Standard Layout Template**: Creación de `PagePanelTemplate` para unificar comportamiento de Header/Footer fijos y Body scrolleable.
- **Listing Alignment**: Sincronización visual de Users List y Devices List (Tabs, Toolbars, Interacciones).
- **Design System Cleanup**: Eliminación total de colores y espaciados hardcodeados en las pantallas principales.
- **UI Flat Style**: Remoción de bordes exteriores y sombras en Cards de listas/formularios.
