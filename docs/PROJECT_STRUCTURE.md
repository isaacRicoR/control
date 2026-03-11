# Estructura del proyecto — Control

> Árbol y organización de directorios del monorepo.

---

## 1. Raíz

```
controldev/
├── apps/              # Aplicaciones
├── packages/          # Paquetes compartidos
├── docs/              # Documentación
├── scripts/           # Scripts (verify-structure, scan-hardcoded-colors, check-ui-guards)
├── package.json       # Workspaces, scripts raíz
└── .gitignore
```

---

## 2. Apps

### apps/control (principal)

```
apps/control/
├── app/
│   ├── layout.tsx           # Root layout (providers)
│   ├── globals.css          # Variables CSS, tokens
│   ├── (shell)/             # Rutas con shell
│   │   ├── layout.tsx       # Shell (sidebar, topbar)
│   │   ├── users/           # Módulo Usuarios
│   │   ├── devices/         # Módulo Dispositivos
│   │   ├── lab/             # Lab de experimentación
│   │   │   └── apariencia/  # Lab Apariencia (tema, tokens, componentes)
│   │   └── settings/        # Configuración
│   └── api/                 # API routes
└── tsconfig.json
```

### apps/cajasfuertes

App secundaria del monorepo.

---

## 3. Packages

### packages/console

```
packages/console/
├── core/                    # Infraestructura
│   ├── auth/                # SessionProvider, session.types
│   ├── connector/           # Connector, tipos
│   ├── preferences/         # Local/Remote, globalPreferencesStore
│   ├── toast/               # ToastProvider, useToast, errorToastHelper
│   ├── visual/              # VisualPresetProvider
│   └── ...
├── ui/
│   ├── atoms/               # Button, Input, Icon, Badge, etc.
│   ├── molecules/           # SelectSingle, ActionMenu, Card, etc.
│   ├── containers/          # PanelCard, DataTable, ModalShell, etc.
│   ├── layouts/             # Sidebar, PageShell
│   ├── patterns/            # FormActions, FormLayout, skeletons
│   └── context/             # ThemeProvider
└── tokens/
    ├── colors.ts            # Paleta, semántica light/dark
    ├── spacing.ts
    ├── typography.ts
    └── radius.ts
```

---

## 4. Docs

```
docs/
├── ARCHITECTURE.md          # Este sistema
├── PROJECT_STRUCTURE.md     # Estructura de directorios
├── DESIGN_SYSTEM.md         # Tokens, componentes
├── TOKENS_SYSTEM.md         # Sistema de tokens
├── APPEARANCE_SYSTEM.md     # Modo claro/oscuro, lab apariencia
├── COMPONENT_LIBRARY.md     # Inventario de componentes
├── POPOVER_SYSTEM.md        # Popovers y posicionamiento
├── GIT_WORKFLOW.md          # Git, .gitignore
├── README.md                # Índice de documentación
├── architecture/            # Docs de arquitectura
├── system-maps/             # Mapas del sistema
├── theme/                   # Tema, tokens
├── data-model/              # Modelo de datos
├── audits/                  # Informes de auditoría
└── ops/                     # Operaciones, bitácoras
```

---

## 5. Rutas heredadas / deprecadas

Algunas rutas antiguas pueden aparecer en docs o configs. Antes de eliminarlas:

1. Auditar si existen y tienen uso
2. Documentar hallazgos
3. Decidir conservar, archivar o eliminar
4. Ejecutar limpieza solo tras validación

Ejemplos posibles: `design/tokens`, `src/core`, `components/*` (si fueron migrados a packages/console).
