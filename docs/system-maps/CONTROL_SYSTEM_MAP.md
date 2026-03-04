# CONTROL — SYSTEM MAP

> **Estado**: Actualizado al 2026-03-03
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
| **Features** | Cartuchos de negocio (`app/(shell)/users`, `devices`) | EN DESARROLLO (Users cerrado, Devices pendiente de wiring completo) |
| **Security** | Route Guards, Permisos RBAC, Middleware | IMPLEMENTADO |
| **Tools** | Herramientas de desarrollo (`Permisos`, `Apariencia`) | IMPLEMENTADO |

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

---

## 2️⃣ MÓDULOS PRODUCTIVOS

Funcionalidades de negocio implementadas en `app/(shell)`.

### Users (`/users`)
- **List**: `/users/list` (DataTable, TableToolbar, Filtros).
- **Create**: `/users/create` (Formulario de creación).
- **Detail**: `/users/[id]` (Vista de detalle con Tabs y Cards).
  - *Governance*: Implementado en `src/core/governance/fieldEdit.ts`.

### Field Edit Governance
El sistema implementa un modelo de gobernanza para campos editables basado en dependencias de negocio.

**Ubicación**: `src/core/governance/fieldEdit.ts`

El sistema determina si un campo puede editarse según:
- Dependencias de datos
- Estado de la entidad
- Relaciones existentes
- Reglas del backend

**Ejemplo**:
Si un usuario tiene dispositivos asignados:
- Campo "role" puede bloquearse.
- Campo "email" puede mantenerse editable.

Este sistema garantiza:
- Consistencia de negocio
- Prevención de cambios destructivos
- Sincronización con validaciones del backend

El frontend **no decide reglas de negocio**, solo consulta la gobernanza. El backend sigue siendo la fuente de verdad.

  - *UX Pattern*: Card Footer visible cuando `isEditing` o `hasChanges` es true.

**Estado**:
🟢 CERRADO (UX + Wiring + Estados + Seguridad)

### Apariencia (`/lab/apariencia`)
Herramienta de configuración de tokens visuales (Desarrollador → Apariencia).
- **Tabs**: Base, Estados, Componentes, Avanzado.
- **Permisos**: 
  - Admin: Edición total de tokens.
  - Usuario: Solo cambio Dark/Light.

### Admin Visual Control
La sección "Apariencia" es una herramienta administrativa exclusiva del propietario de la consola.

**Ubicación**: Desarrollador → Apariencia

Permite:
- Registrar nuevos presets visuales.
- Editar tokens visuales de un brand.
- Ajustar estados semánticos.
- Modificar estilos de componentes.

**Ejemplo de edición rápida**:
Administrador recibe paleta de cliente:
- `primary`, `success`, `warning`, `danger`, `accent`.
Los valores pueden registrarse en el sistema y generar un nuevo ThemePack.

Usuarios finales **no tienen acceso a esta herramienta**. Los usuarios finales solo pueden cambiar entre **Dark** y **Light**. Esto garantiza consistencia visual, control centralizado y multi-branding escalable.

**Estado**:
🟢 IMPLEMENTADO (Herramienta Real)


### Devices (`/devices`)
- **List**: `/devices/list` (DataTable, TableToolbar, Status Tabs).
- **Create**: `/devices/create` (Formulario básico).

### Dashboard (`/dashboard`)
- **Page**: `/dashboard` (Página independiente fuera del shell).

### Universal Pages (Infraestructura)
- **Login**: `/login` (Placeholder de pantalla de autenticación).
- **Forbidden**: `/forbidden` (Pantalla estándar de Error 403 - Acceso Denegado).

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
- **Implementación**: Interceptado por `middleware.ts` para persistencia en Server Components.

---

## 4️⃣ HERRAMIENTAS DE DESARROLLO (`Desarrollador`)

Acceso exclusivo para administradores y desarrolladores (Owner role). Se eliminaron las secciones de laboratorio puro; se mantienen herramientas de configuración real.

- **Permisos y acceso**: `/lab/permissions-check` — Auditoría de estados RBAC.
- **Apariencia**: `/lab/apariencia` — Configuración dinámica de tokens visuales.

---

## 5️⃣ COMPONENTES SISTÉMICOS (`components/containers` & `molecules`)

Piezas de arquitectura UI reutilizables.

- **DataTable**: Tabla de datos con paginación y estados — **CERRADO** (100% genérico).
- **TableToolbar**: Barra de herramientas estandarizada (Tabs, Search, Actions).
- **ExpandableRowDetail**: Contenedor para detalles expandibles de fila.
- **CardTabsHeader**: Header reutilizable para tarjetas con tabs (`packages/console/ui/molecules/CardTabsHeader`).
  - Altura oficial: **55px**.
  - Soporta: Botón de regreso opcional, tabs horizontales, divider inferior, slots opcionales.

### Card Layout Architecture
Las tarjetas del sistema siguen una arquitectura de tres zonas.

1. **Header**
Puede contener:
- Botón de regreso
- Tabs de navegación
- Divider inferior
**Componente**: `CardTabsHeader` (Altura oficial: **55px**).

2. **Body**
Zona flexible que puede contener formularios, selectores, inputs, toggles, listas, acordeones y configuraciones complejas. El body cambia según el módulo.

3. **Footer**
Zona de acciones. Se muestra únicamente cuando `isEditing === true` OR `hasChanges === true`.
**Botones oficiales**:
- Cancelar → `variant="secondary"`
- Guardar → `variant="actionPrimary"`

- **ConfirmDialog**: Patrón oficial congelado (Layout compacto, premium status).
- **PageShell**: Contenedor semántico de páginas (Título, Breadcrumbs).
- **Section**: Contenedor de sección con título.
- **FormSection**: Contenedor agrupador para formularios.
- **ModalShell**: Estructura base para modales.
- **EmptyState / ErrorState**: UI de estados de feedback.

### Form UI Pattern (Card Layout)
Estructura oficial para formularios complejos:
1. **Header**: Título o `CardTabsHeader`.
2. **Body**: Campos del formulario.
3. **Footer**: Acciones (Cancelar/Guardar).
   - Visibilidad: Solo si `isEditing === true` O `hasChanges === true`.
   - Botón secundario: **Cancelar** (variant `secondary`).
   - Botón primario: **Guardar** (variant `actionPrimary`).

---

## 5.1️⃣ FloatingSurface (`components/atoms`)

Contenedor base para elementos que flotan sobre la UI principal.

- **Soporte de variante**:
  - `default`
  - `strong`
- **Proyección de luz**: Centralizada vía tokens de profundidad, sin estilos locales ad-hoc.

---

## 5.2️⃣ DESIGN SYSTEM Y COMPORTAMIENTO UI OFICIAL

Documentación de los ajustes visuales y de comportamiento implementados.

### Design System — Estado Oficial

DARK es la referencia visual maestra. LIGHT es una traducción estructural alineada a DARK.

**DARK**
- Tokens consolidados. Sin hardcodes.
- Comportamiento Sidebar: Expanded ≠ Active.
- Botón primario (variant `create`): fondo blanco, texto negro azulado.

**LIGHT**
- Jerarquía alineada con DARK.
- `background.default` → gris azulado muy suave.
- `surface.default` → blanco puro.
- `border.default` → gris claro elegante.
- `text.default` → casi negro.

### Sistema de Botones (`packages/console/ui/atoms/Button`)

El sistema de botones se gobierna por variantes funcionales y tokens semánticos.

**Variantes Actuales**
1. **primary**: Acción principal con color de marca (accent).
2. **actionPrimary**: Acción primaria oficial (sin accent). Invertida por tema (Dark: Blanco, Light: Negro azulado).
3. **secondary**: Acción funcional no primaria. Fondo neutro.
4. **white**: Botón neutro/blanco para creación.
5. **create**: Variante específica para flujos de creación.
6. **error**: Acción destructiva/peligrosa.

**Reglas para variant="secondary"**
- **Normal**: `surface.default` + `border.default`.
- **Hover**: `surface.hover` + `border.default` (neutral, sin tonos rojizos).
- **Active**: `surface.active`.
- **Focus**: `border.focus` (neutro).
- **Outline**: `outline: none` (eliminado el outline del navegador).

### Hover Behavior Rules
Los botones no deben mostrar:
- Outline del navegador.
- Bordes rojos del sistema.
- Focus ring agresivo.

El hover se controla exclusivamente mediante tokens.
**Ejemplo (secondary hover)**: `surface.hover` + `border.hover`. Esto garantiza consistencia visual entre Dark y Light.


### Theme System (ThemePack Registry)

- Ubicación: `packages/console/core/visual/themeRegistry.ts`.
- **Tokens Base**: `background`, `surface`, `border`, `text`, `accent`.
- **Configuración**: Soporta override por Brand y Modo.
- **Fallback**: Si un brand no está definido, cae a `control`.
- **Validación**: Build PASS, Lint OK (2026-03).

### Theme Architecture

El sistema de temas está dividido en dos capas:

1. **Brand / Preset**
Define la identidad visual completa de una consola.
- **Ejemplos**: `control`, `security`, `safebox`, `clienteX`.
- **Persistencia**: `localStorage["control.visual.preset"]`
- **Aplicación DOM**: `data-brand="presetName"`
- **Archivo principal**: `packages/console/core/visual/themeRegistry.ts`
Cada Brand define sus propios tokens `light` y `dark`.

2. **Theme Mode**
Define el modo visual activo.
- **Valores**: `light`, `dark`.
- **Persistencia**: `localStorage["theme"]`
- **Aplicación DOM**: `data-theme="light"`, `data-theme="dark"`

El modo visual **no cambia la identidad**, solo la adaptación visual del preset.


### Sidebar — Regla Oficial de Estados
El estado Expanded puede coexistir con Active, pero nunca comparte el estilo visual de Active.

| Estado | Comportamiento | Prohibido |
|--------|----------------|-----------|
| **Expanded** (grupo abierto) | Navegación abierta. Fondo neutro/suave. No es estado activo. | No pintar como activo. |
| **Active** (ruta actual) | Solo el item hijo se marca activo. | Nunca doble estilo activo. |

### Temática por Sección (Patrón Activo)

**Ejemplo implementado: Dispositivos**

| Elemento | Valor Oficial | Uso |
|----------|---------------|-----|
| Accent fuerte | `#118D57` | Texto e icono del item activo |
| Surface tint | `#DBF6E5` | Fondo del item activo (hijo) |
| Padre expandido | Neutral (no activo) | Solo fondo hover suave |

**Reglas**
- Item activo → fondo `#DBF6E5`, texto + icono `#118D57`.
- Padre expandido permanece neutral (no activo).

### Chips / Pills de Conteo
Cuando el fondo del chip sea verde o rojo, el número siempre debe ser blanco para garantizar contraste.
- Fondo verde o rojo → número **siempre blanco**.
- Prohibido texto negro sobre fondo verde o rojo.

---

## 5.3️⃣ SISTEMA SEMÁNTICO GLOBAL

### Sistema Semántico Global — Declaración Oficial

La plataforma implementa un conjunto de colores semánticos transversales que representan significado funcional, no identidad visual de módulo.

### Registro de Tokens Semánticos (Semantic token registry)

Tokens oficiales para estados, alertas y acciones. Fuente: `apps/control/app/globals.css`.

| Token | Significado | DARK (hex) | LIGHT (hex) | Fuente |
|-------|-------------|------------|-------------|--------|
| `--semantic-success-default` | Estado Activo / Éxito | #00ff99 | #00A76F | globals.css |
| `--semantic-success-hover` | Hover sobre éxito | #3dffb0 | #007a58 | globals.css |
| `--semantic-success-active` | Active/press éxito | #00c98f | #00c98f | globals.css |
| `--semantic-danger-default` | Error / Bloqueado / Crítico | #ff3344 | #ff3344 | globals.css |
| `--semantic-danger-hover` | Hover sobre danger | #ff6a76 | #ff6a76 | globals.css |
| `--semantic-danger-active` | Active/press danger | #b00000 | #b00000 | globals.css |
| `--semantic-warning-default` | Pendiente / Advertencia | #ffb020 | #ffb020 | globals.css |
| `--semantic-warning-hover` | Hover sobre warning | #ffc35c | #ffc35c | globals.css |
| `--semantic-warning-active` | Active/press warning | #b07c00 | #b07c00 | globals.css |
| `--semantic-warning-emphasis` | Énfasis naranja corporativo | #ff8c00 | #ff8c00 | globals.css / colors.ts |
| `--semantic-info-default` | Info / Información | #29a3ff | #29a3ff | globals.css |
| `--semantic-info-hover` | Hover sobre info | #64beff | #64beff | globals.css |
| `--semantic-info-active` | Active/press info | #007cb0 | #007cb0 | globals.css |
| `--semantic-text-on-solid` | Texto sobre fondos de color (chips verde/rojo) | #FFFFFF | #FFFFFF | globals.css |

---

## 6️⃣ ESTADO TÉCNICO Y SALUD

Métricas de calidad y estabilidad del codebase.

### Lint Status
- **Total Errors**: 0
- **Total Warnings**: 0
- **Status**: **CERRADO** — Codebase limpio.

### Hook Integrity
- **Status**: Validado (Sin llamadas condicionales, orden garantizado).

### Type Safety
- **Any Usage**: Eliminado en componentes críticos. Reemplazo por tipos explícitos.

### State in Effects
- **Status**: Seguro (setState encapsulado en setTimeout donde es necesario).

---

## 📊 ESTADO ACTUAL DEL PROYECTO

Snapshot del estado real al 2026-03-03.

| Componente | Estado | Notas |
|---|---|---|
| **Arquitectura Base** | ✅ CERRADA | Consola + Cartucho, AppShell, layouts |
| **Security Layer** | ✅ IMPLEMENTADO | Route Guards, Permisos RBAC, Debug Mode |
| **Contrato Universal** | ✅ CERRADO | v2.1 LTS |
| **Connector Layer** | ✅ IMPLEMENTADO | `src/core/connector/` — 0 errors, 0 warnings |
| **ConfirmDialog** | ✅ CERRADO | Patrón oficial congelado |
| **CardTabsHeader** | ✅ CERRADO | Altura 55px, slots opcionales |
| **Apariencia** | ✅ IMPLEMENTADO | Herramienta de configuración de tokens |
| **Toast** | ❌ NO IMPLEMENTADO | Roadmap pendiente |
| **Backend Real** | ⏳ NO IMPLEMENTADO | Operando con Mock Data y endpoints API locales |

---

## 🕵️ VERIFICACIÓN MANUAL DE ACCESO

Checklist para validación rápida en entorno de desarrollo.

| Ruta | Parámetro | Resultado Esperado |
|---|---|---|
| `/devices/list` | `?debugAuth=owner` | **CARGA** — Acceso total |
| `/devices/list` | `?debugAuth=guest` | **BLOQUEO** -> Redirige a `/forbidden` |
| `/devices/list` | `?debugAuth=none` | **BLOQUEO** -> Redirige a `/login` |
| `/lab/apariencia` | `?debugAuth=owner` | **CARGA** — Acceso total |

### Notas de Edición
- **Actualización 2026-03-02**: Integración de `CardTabsHeader`, sistema de variantes de botones (`actionPrimary`, `secondary` neutral hover), patrón de Footer en Cards para formularios, y formalización de la herramienta de Apariencia. Limpieza de secciones de laboratorio obsoletas.
