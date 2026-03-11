# Design System — Control

> Sistema de diseño del proyecto Control.  
> Fuente: `packages/console/ui` y `packages/console/tokens`.

---

## 1. Organización

El Design System se estructura en capas de complejidad:

| Capa | Ruta | Descripción |
|------|------|-------------|
| **atoms** | `ui/atoms/` | Piezas atómicas (Button, Input, Icon) |
| **molecules** | `ui/molecules/` | Combinación de 2-3 atoms (SelectSingle, Card) |
| **containers** | `ui/containers/` | Organismos complejos (PanelCard, DataTable) |
| **layouts** | `ui/layouts/` | Shell, Sidebar |
| **patterns** | `ui/patterns/` | Patrones reutilizables (FormActions, skeletons) |

---

## 2. Tokens semánticos

Los colores se definen en `packages/console/tokens/colors.ts` y se aplican vía variables CSS en `globals.css`.

### Grupos semánticos

- **background** — Fondo general
- **surface** — Cards, modales (default, hover, selected, card)
- **elevated** — Superficies elevadas
- **border** — Bordes (default, subtle, focus)
- **text** — Texto (default, muted, active)
- **primary** — Acento principal
- **danger**, **success**, **warning** — Estados
- **icon** — default, muted, active

### Jerarquía de texto

- **text.active** — Títulos, valores en inputs
- **text.default** — Cuerpo, tablas
- **text.muted** — Labels, breadcrumbs

---

## 3. Superficies y jerarquía

```
panel.background  (surface.default)
        ↓
surface.card      (surface.card)
        ↓
surface.hover     (surface.hover / surface.hoverElevated)
```

Regla: cada nivel debe ser visualmente más claro que el anterior para que el hover se perciba bien.

---

## 4. Componentes base

### Atoms

- **Button** — Variantes primary, secondary, danger, ghost. `size="sm"` (36px) estándar en paneles.
- **Input** — Floating label, estados focus/error/disabled
- **Icon** — Wrapper sobre Lucide
- **FloatingSurface** — Superficie flotante con borde y sombra
- **ActionIcon** — Botón iconográfico con hover

### Molecules

- **SelectSingle** — Select con dropdown flotante
- **Card** — Contenedor con variantes default/panel
- **PanelCard** — Patrón estándar para configuración

### Containers

- **PanelCard** — Header + Body + Footer
- **DataTable** — Tabla con sorting, filtrado, paginación
- **ModalShell** — Modal con overlay
- **PageShell** — Shell de página con breadcrumbs

---

## 5. Reglas visuales

1. **Button shape="panel"** — Obligatorio en FormActions y PanelCardFooter
2. **Labels** — Usar `semantic.text.muted`
3. **No hardcodear colores** — Solo tokens
4. **Prohibición de hacks** — Sin paddings/márgenes manuales por pantalla
5. **No borderRadius inline** — Usar tokens o `Button shape="panel"`

---

## 6. Referencias

- **UI_SYSTEM_MAP.md** — Inventario oficial de componentes
- **CONTROL_UI_SPEC_v1.md** — Especificación técnica del tema
