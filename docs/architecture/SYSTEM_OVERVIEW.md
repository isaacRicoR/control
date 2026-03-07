# SYSTEM OVERVIEW — CONTROL

> Vista general del sistema para desarrolladores y arquitectos.

---

## 1. Propósito

Este documento proporciona una vista general del sistema CONTROL.

Su objetivo es permitir que cualquier desarrollador o arquitecto entienda rápidamente:

- Cómo está organizado el sistema
- Cuáles son sus componentes principales
- Qué documentos contienen el detalle de cada parte

**Este documento es una guía rápida, no la documentación detallada.**

---

## 2. Arquitectura General

CONTROL sigue una arquitectura modular basada en tres capas principales:

1. **Console** — Shell y componentes compartidos
2. **Cartuchos (Features)** — Módulos de negocio independientes
3. **Core Infrastructure** — Infraestructura compartida

Representación simplificada:

```
Console (Shell)
├ Users Module
├ Devices Module
├ Departments Module
└ Organization Module
```

Los módulos se comunican con el backend a través del **Connector**.

---

## 3. Componentes Principales

### Console

Responsable de:

- Layout principal
- Sidebar
- TopBar
- Contextos globales
- Providers

**Ubicación principal**: `packages/console/ui/layouts`

### Core Infrastructure

Infraestructura compartida entre módulos.

Incluye:

- Connector
- Preferences System
- Toast System
- Governance Logic

**Ubicación principal**: `packages/console/core`

### Feature Modules (Cartuchos)

Módulos de negocio independientes.

**Ejemplos actuales**: Users, Devices

**Ubicación**: `apps/control/app/(shell)/`

---

## 4. Design System

El sistema visual se encuentra en: `packages/console/ui`

Incluye:

- atoms
- molecules
- containers
- patterns
- layouts

**Documentación completa**: `docs/system-maps/UI_SYSTEM_MAP.md`

---

## 5. Documentos de Referencia

El sistema se documenta en cuatro mapas principales:

| Documento | Contenido |
|-----------|-----------|
| **CONTROL_SYSTEM_MAP.md** | Arquitectura técnica del sistema |
| **UI_SYSTEM_MAP.md** | Inventario del Design System |
| **PRODUCT_SYSTEM_MAP.md** | Módulos funcionales del producto |
| **DATA_MODEL_MAP.md** | Modelo de datos y relaciones entre entidades |

Ubicación: `docs/system-maps/` y `docs/data-model/`

---

## 6. Principios del Sistema

El desarrollo del sistema CONTROL sigue estos principios:

- Arquitectura modular por cartuchos
- Separación estricta entre UI, lógica y datos
- Design System centralizado
- Multi-tenant por `organizationId`
- Comunicación backend a través del Connector

---

## 7. Estado del Sistema

| Aspecto | Estado |
|---------|--------|
| Arquitectura base | Estable |
| Design System | Congelado (v1) |
| Connector | Estable |
| Módulos actuales | Users y Devices |
| Backend | Actualmente con mock data |

---

## 8. Estructura vigente del proyecto

La estructura actual del proyecto está organizada principalmente en:

- `packages/console/ui` — Componentes visuales, layouts, patterns
- `packages/console/core` — Connector, Preferences, Toast, Auth, Governance
- `packages/console/tokens` — Tokens de diseño (colores, spacing, tipografía)
- `apps/control` — Aplicación principal y módulos de negocio

### Rutas heredadas

Algunas rutas antiguas o heredadas pueden seguir apareciendo en:

- Documentación antigua
- Aliases de configuración (ej: `tsconfig.json`)
- Carpetas vacías o remanentes de una estructura anterior

**Ejemplos de rutas heredadas posibles**: `design/tokens`, `src/core`, `components/*`

Estas rutas pueden haber sido reemplazadas por la estructura actual (ej: `design/tokens` → `packages/console/tokens`).

### Regla antes de eliminar

**Nunca eliminar carpetas, rutas o aliases por intuición.**

Antes de cualquier limpieza estructural se debe hacer una auditoría que confirme:

- Si la carpeta existe
- Si contiene archivos
- Si tiene uso actual en el código
- Si tiene referencias reales en el repo
- Si fue reemplazada por una nueva estructura

### Proceso correcto

```
Auditoría → Evidencia → Decisión → Limpieza
```

1. **Auditoría**: Revisar contenido y referencias reales
2. **Evidencia**: Documentar hallazgos (no asumir)
3. **Decisión**: Decidir conservar, archivar o eliminar
4. **Limpieza**: Ejecutar solo después de validación manual

Este documento define la estructura vigente real del proyecto y debe usarse como referencia rápida antes de hacer limpieza del repo.
