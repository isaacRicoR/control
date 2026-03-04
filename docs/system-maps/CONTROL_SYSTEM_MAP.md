# CONTROL — SYSTEM MAP

> **Estado**: Actualizado al 2026-03-04
> **Alcance**: Únicamente lo que existe en el codebase `c:\dev\controldev`.

---

## 🏗️ ARQUITECTURA: CONSOLA + CARTUCHO

Modelo de aislamiento total para escalabilidad y mantenimiento.

- **Consola**: Infraestructura base (`app/layout.tsx`, `components/layouts/AppShell`). Provee Sidebar, TopBar, Theme y Auth Context.
- **Cartucho**: Módulos de negocio independientes (`/users`, `/devices`).
- **Aislamiento**: 1 Consola activa por Cartucho. Los módulos son "enchufables".
- **Backend**: Operando con Mock Data y endpoints API locales bajo patrón: Controller → Service → Query (simulado), con Envelope estándar y wiring real desde frontend.

| Capa | Contenido | Estado |
|---|---|---|
| **Core** | Design System, Connector (`src/core/connector/`), Auth Logic | CERRADO |
| **Console** | Shell (`AppShell`, `Sidebar`, `TopBar`, layouts) | CERRADO |
| **Features** | Cartuchos de negocio (`app/(shell)/users`, `devices`) | EN DESARROLLO (Users cerrado, Devices detallado) |
| **Security** | Route Guards, Permisos RBAC, Middleware | IMPLEMENTADO |
| **Tools** | Herramientas de desarrollo (`Permisos`, `Apariencia`, `Lint`) | IMPLEMENTADO |

> **Regla de oro**: Las capas superiores dependen de las inferiores. Ningún Feature accede directamente a infraestructura sin pasar por la capa Core.

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

**Ubicación**: `src/core/connector/`
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
> Todo flujo de datos pasa por `src/core/connector/`. Esta regla es **no negociable**.

---

## 1️⃣ CORE SHELL — CERRADO

Infraestructura base de la aplicación.

- **Layout Root**: `app/layout.tsx` (HTML, Body, Fonts).
- **Layout Shell**: `app/(shell)/layout.tsx` (Implementa `AppShell`) — Branding inyectado desde config.
- **AppShell**: `components/layouts/AppShell` — Shell limpio, contenedor principal genérico.
- **Sidebar**: `components/layouts/Sidebar` — Desacoplado por cartucho; navegación inyectada desde configuración.
- **TopBar**: `components/layouts/TopBar` — Barra superior sticky.

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
  - *Governance*: Implementado en `src/core/governance/fieldEdit.ts`.

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

---

## 5️⃣ COMPONENTES SISTÉMICOS (`components/containers` & `molecules`)

Piezas de arquitectura UI reutilizables.

- **DataTable**: Tabla de datos con paginación y estados — **CERRADO** (100% genérico).
- **TableToolbar**: Barra de herramientas estandarizada (Tabs, Search, Actions).
- **Card Layout Architecture (Flat Style)**:
  - Se eliminó el borde exterior tipo "card" y sombras para un estilo "flat" en contenedores de listas y formularios.
  - **Jerarquía de Bordes**:
    - `border.subtle`: Usado en líneas estructurales (tabs, footer, toolbars).
    - `border.default`: Usado en separadores de filas y elementos de UI internos.
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
- **Type Safety**: Tipado estricto en el Connector y Repositories.

---

## 📊 ESTADO ACTUAL DEL PROYECTO (Snapshot 2026-03-04)

| Componente | Estado | Notas |
|---|---|---|
| **Arquitectura Base** | ✅ CERRADA | Consola + Cartucho, SSR Safe |
| **Security Layer** | ✅ IMPLEMENTADO | Route Guards, Permisos RBAC |
| **Contrato Universal** | ✅ CERRADO | v2.1 LTS |
| **Connector Layer** | ✅ IMPLEMENTADO | 0 errors, 0 warnings |
| **Preferences Layer** | ✅ ESTABLE | Persistencia por pantalla + fallback |
| **Design System** | ✅ ESTABLE | Flat style, tokens semánticos refinados |
| **ESLint Rules** | ✅ IMPLEMENTADO | Regla custom "use client" obligatoria |
| **Backend Real** | ⏳ NO IMPLEMENTADO | Mock Data (Dataset de usuarios ampliado) |

---

## 🕵️ ÚLTIMOS CAMBIOS (Fecha de corte: 2026-03-04)

- **UI Flat Style**: Remoción de bordes exteriores y sombras en Cards de listas/formularios. Introducción de `border.subtle` para líneas estructurales.
- **Persistencia Inteligente**: `pageSize` ahora persiste por ruta de navegación y tiene fallback al último valor global.
- **Blindaje SSR**: Eliminación de Turbopack Runtime Errors mediante guards de `window` y uso de `Suspense` en rutas con `useSearchParams`.
- **Quality Gates**: Migración a ESLint Flat Config (v9) e implementación de regla custom para validar `"use client"` ante presencia de hooks.
- **Dataset de Usuarios**: Ampliación del store en memoria para pruebas de scroll y validación de componentes de Avatar.
