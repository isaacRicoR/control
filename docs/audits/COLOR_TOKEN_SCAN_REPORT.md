# Reporte de auditoría: Colores hardcodeados y tokens en listas

**Fecha:** 2025-03-02  
**Scope:** `UsersListClient`, `DevicesListClient`, `DataTable/*`, `Sidebar/*`, `ActionIcon`, `Icon`, `globals.css`

---

## 1. Tabla de hallazgos

| Archivo | Línea | Qué se encontró | ¿Problema? | Propuesta fix mínima |
|---------|-------|----------------|------------|----------------------|
| `apps/control/app/(shell)/users/list/UsersListClient.tsx` | 128-129 | `actionIconColor` / `actionIconHoverColor` LIGHT: `semantic.icon?.muted` / `semantic.icon?.active`; DARK: `undefined` | No | — |
| `apps/control/app/(shell)/devices/list/DevicesListClient.tsx` | 188-189 | Idem Users | No | — |
| `packages/console/ui/containers/DataTable/TableDropdown.tsx` | 75 | `color: semantic.text.active` con comentario `// #FFF equivalent` | No (usa token) | Opcional: quitar comentario para evitar confusión |
| `packages/console/ui/containers/DataTable/TableFooter.tsx` | — | Usa `useTheme()` + `colors[theme].semantic` | No | — |
| `packages/console/ui/containers/DataTable/TableHeader.tsx` | — | Usa `useTheme()` + `colors[theme].semantic` | No | — |
| `packages/console/ui/containers/DataTable/DataTable.tsx` | 34 | `colors.semantic` (semanticActive = CSS vars) | No | Respetan tema vía `data-theme` |
| `packages/console/ui/layouts/Sidebar/SidebarMenuGroup.tsx` | 125 | Comentario `// Dispositivos section in LIGHT uses device-specific colors (#DBF6E5, #118D57)` | No (solo comentario) | — |
| `apps/control/app/(shell)/devices/create/page.tsx` | 15 | `colors.semantic` (ya migrado de `colors.dark.semantic`) | No | — |
| `packages/console/ui/atoms/Button/Button.tsx` | 65 | Fallback `#F4F4F5` para `--button-white-hover-bg` | Fuera scope listas | Dejar para fix futuro |
| `packages/console/ui/layouts/Sidebar/CompanySelector.tsx` | 56, 61, 145 | `#10B981`, `#FFF` hardcodeados | Fuera scope listas | No aplicar en este PR |
| `apps/control/app/globals.css` | 62-484 | Definiciones de tokens con hex en `:root`, `[data-theme="light"]`, `[data-theme="dark"]` | No (son la fuente de verdad) | — |

---

## 2. Verificaciones solicitadas

### 2.1) Sin colores hardcodeados en scope de listas

**Rutas inspeccionadas:**
- `apps/control/app/(shell)/users/list/UsersListClient.tsx` — Sin hex/rgba/rgb/hsl
- `apps/control/app/(shell)/devices/list/DevicesListClient.tsx` — Sin hex/rgba/rgb/hsl
- `packages/console/ui/containers/DataTable/DataTable.tsx` — Sin hardcode
- `packages/console/ui/containers/DataTable/TableHeader.tsx` — Sin hardcode
- `packages/console/ui/containers/DataTable/TableFooter.tsx` — Sin hardcode
- `packages/console/ui/containers/DataTable/TableDropdown.tsx` — L75 usa `semantic.text.active` (token)

### 2.2) Dispositivos respeta theme global (LIGHT/DARK)

| Archivo | Código | Comportamiento |
|---------|--------|----------------|
| `DevicesListClient.tsx` L59-60 | `const { theme } = useTheme(); const semantic = colors[theme].semantic;` | Usa tema activo vía `useTheme` |
| `devices/create/page.tsx` L15 | `const semantic = colors.semantic;` | Usa `colors.semantic` (CSS vars) que respetan `data-theme` |

**Confirmación:** No hay uso de `colors.dark.semantic` fijo en el scope de dispositivos.

### 2.3) ActionIcon en columna Acciones

**UsersListClient.tsx** (L127-129, L237-261):

```tsx
const actionIconColor = theme === "light" ? (semantic.icon?.muted ?? semantic.text.muted) : undefined;
const actionIconHoverColor = theme === "light" ? (semantic.icon?.active ?? semantic.text.active) : undefined;
// ...
<ActionIcon ... color={actionIconColor} hoverColor={actionIconHoverColor} />
<ActionIcon ... color={actionIconColor} hoverColor={actionIconHoverColor} />
<ActionIcon name="more-vertical" ... color={actionIconColor} hoverColor={actionIconHoverColor} />
```

**DevicesListClient.tsx** (L188-189, L293-311):

```tsx
// Idéntico a Users
const actionIconColor = theme === "light" ? (semantic.icon?.muted ?? semantic.text.muted) : undefined;
const actionIconHoverColor = theme === "light" ? (semantic.icon?.active ?? semantic.text.active) : undefined;
// ...
<ActionIcon ... color={actionIconColor} hoverColor={actionIconHoverColor} />
<ActionIcon ... color={actionIconColor} hoverColor={actionIconHoverColor} />
<ActionIcon name="more-vertical" ... color={actionIconColor} hoverColor={actionIconHoverColor} />
```

| Tema | `color` / `hoverColor` | Comportamiento |
|------|------------------------|----------------|
| LIGHT | `semantic.icon?.muted` / `semantic.icon?.active` (o fallback text) | Aplica muted/active |
| DARK | `undefined` | Usa defaults internos de ActionIcon |

### 2.4) Kebab (tres puntos) Users vs Devices

| Vista | Archivo | Línea | Snippet |
|-------|---------|-------|---------|
| Users | `UsersListClient.tsx` | 497-499 | `<Icon name="more-horizontal" size={20} color={semantic.text.default} />` |
| Devices | `DevicesListClient.tsx` | 401 | `<Icon name="more-horizontal" size={20} color={semantic.text.default} />` |

**Conclusión:** Implementación idéntica. No hay discrepancia de kebab entre Users y Devices.

---

## 3. Diffs propuestos

**No se requieren diffs** para el scope de listas. El código cumple:
- Sin hardcode en UsersListClient ni DevicesListClient
- Tema respetado en Devices
- ActionIcon LIGHT: muted/active; DARK: undefined
- Kebab homogéneo en ambas vistas

**Opcional (cosmético):** Eliminar comentario en TableDropdown L75:

```diff
- color: semantic.text.active, // #FFF equivalent
+ color: semantic.text.active,
```

---

## 4. Validación de build

```
npm run build:control
```

**Resultado:** PASS (exit code 0)

---

## 5. Confirmación final

**OK para merge** para el scope definido (listas, DataTable, Sidebar, ActionIcon, globals.css).

- No hay colores hardcodeados en las vistas de listas ni en sus componentes de soporte.
- Dispositivos usa theme global correctamente.
- ActionIcon se comporta según lo especificado (LIGHT: muted/active, DARK: undefined).
- Kebab y ActionIcon son coherentes entre Users y Devices.

**Fuera de scope (no bloquean merge):** CompanySelector, Button fallback, lab pages, ModalShell rgba — pueden abordarse en PRs futuros.
