# Arquitectura — Control

> Documentación de la arquitectura actual del proyecto Control.  
> Refleja el estado real del código.

---

## 1. Visión general

Control es un **monorepo** basado en workspaces de npm. Contiene:

- **apps/** — Aplicaciones (control, cajasfuertes, console)
- **packages/** — Paquetes compartidos (console: UI, tokens, core)
- **docs/** — Documentación del sistema

---

## 2. Monorepo

```
controldev/
├── apps/
│   ├── control/      # App principal (Next.js 16)
│   ├── cajasfuertes/ # App secundaria
│   └── console/      # (si existe)
├── packages/
│   └── console/      # Paquete compartido
├── docs/             # Documentación
├── scripts/          # Scripts de verificación
└── package.json      # Workspaces: packages/*, apps/*
```

El `package.json` raíz define workspaces `packages/*` y `apps/*`.

---

## 3. App principal: apps/control

Aplicación Next.js 16 con App Router.

### Estructura

- **app/(shell)/** — Rutas con shell (sidebar, layout)
- **app/(shell)/users/** — Módulo Usuarios
- **app/(shell)/devices/** — Módulo Dispositivos
- **app/(shell)/lab/** — Entorno de experimentación (no producto final)
- **app/(shell)/lab/apariencia/** — Lab de apariencia (tema, tokens, componentes)
- **app/(shell)/settings/** — Configuración
- **app/api/** — API routes

### Providers globales

```tsx
// apps/control/app/layout.tsx
VisualPresetProvider
  └── GlobalPreferencesProvider
        └── ThemeProvider
              └── SessionProvider
                    └── {children}
```

- **ThemeProvider** — Tema claro/oscuro (`data-theme`)
- **VisualPresetProvider** — Preset visual (control/security, `data-brand`)
- **GlobalPreferencesProvider** — Preferencias globales
- **SessionProvider** — Sesión de usuario

---

## 4. Paquete compartido: packages/console

### Estructura

```
packages/console/
├── core/           # Lógica compartida
│   ├── auth/       # Sesión, autenticación
│   ├── connector/  # Comunicación con backend
│   ├── preferences/# Preferencias (local/remote)
│   ├── toast/      # Sistema de notificaciones
│   ├── visual/     # VisualPreset (brand)
│   └── ...
├── ui/             # Design System
│   ├── atoms/      # Componentes atómicos
│   ├── molecules/  # Moléculas
│   ├── containers/ # Organismos
│   ├── layouts/    # Shell, Sidebar
│   └── patterns/   # Patrones reutilizables
└── tokens/         # Tokens de diseño
    ├── colors.ts   # Paleta, semántica
    ├── spacing.ts
    ├── typography.ts
    └── radius.ts
```

---

## 5. Separación core vs features

| Capa | Ubicación | Responsabilidad |
|------|-----------|-----------------|
| **Console** | packages/console | Shell, layouts, componentes, tokens |
| **Core** | packages/console/core | Connector, auth, toast, preferences |
| **Features (Cartuchos)** | apps/control/app/(shell)/ | Usuarios, Dispositivos, Lab, Settings |

Los cartuchos **solo consumen** componentes del Design System. No crean componentes reutilizables dentro de features.

---

## 6. Cartuchos (módulos de negocio)

Módulos independientes que viven en `apps/control`:

- **Users** — CRUD usuarios
- **Devices** — CRUD dispositivos
- **Lab** — Experimentación (apariencia, componentes)
- **Settings** — Configuración, auditoría, etc.

Cada cartucho usa:
- Componentes de `@ui/*`
- Core de `@core/*`
- Tokens de `@tokens`

---

## 7. Aliases (tsconfig)

| Alias | Ruta real |
|-------|-----------|
| `@ui/*` | `../../packages/console/ui/*` |
| `@core/*` | `../../packages/console/core/*` |
| `@tokens` | `../../packages/console/tokens` |
| `@server/*` | `../../server/*` |
| `@/*` | `./*` |

---

## 8. Comunicación con backend

El **Connector** (`packages/console/core/connector/`) es el puente entre la UI y el backend. Los módulos no llaman APIs directamente; usan el Connector.

---

## 9. Principios

1. **Modularidad** — Cartuchos independientes
2. **Design System centralizado** — Un solo lugar para UI
3. **Separación UI / lógica / datos** — Clara
4. **Multi-tenant** — Por `organizationId`
5. **No inventar en features** — Componentes nuevos van a packages/console
