# Sistema de tokens — Control

> Tokens de diseño: colores, espaciado, tipografía, radios.  
> Fuente: `packages/console/tokens`.

---

## 1. Ubicación

```
packages/console/tokens/
├── colors.ts      # Paleta, semántica, temas
├── spacing.ts     # Escala de espaciado
├── typography.ts  # Fuentes, tamaños, pesos
└── radius.ts      # Border radius
```

Import: `import { colors, spacing, typography, radius } from "@tokens"`

---

## 2. Colores

### Temas

- **light** — Tema claro
- **dark** — Tema oscuro

`colors[theme].semantic` expone los tokens semánticos del tema activo.

### Estructura semántica

Cada grupo (background, surface, border, text, primary, etc.) tiene estados:

- `default`, `hover`, `active`, `disabled`, `focus`, `selected`
- Variantes: `subtle`, `muted`, `onSolid`, `card`, `hoverElevated`

### Puente a CSS

Los tokens se reflejan en variables CSS (`--semantic-*`) en `apps/control/app/globals.css`. El ThemeProvider actualiza `data-theme` en `<html>` y las variables cambian según el tema.

---

## 3. Espaciado

Escala basada en múltiplos (4, 8, 12, 16, 24, 32, 48, etc.).  
Uso: `spacing[8]`, `spacing[24]`.

---

## 4. Tipografía

- **fontFamily.primary** — Fuente principal
- **fontSize** — xs, sm, md, lg, xl
- **fontWeight** — regular, medium, semibold, bold

---

## 5. Radius

Escala de radios: sm, md, lg, xl.  
Para botones de panel: `radius.xl` (via `Button shape="panel"`).

---

## 6. Uso en componentes

Los componentes importan tokens, no colores hex. Ejemplo:

```tsx
import { colors, spacing, typography, radius } from "@tokens";

// En componente
const semantic = colors[theme].semantic;
background: semantic.surface.default;
color: semantic.text.active;
padding: spacing[8];
borderRadius: radius.sm;
```

---

## 7. Regla

**Nunca hardcodear colores HEX.** Usar siempre `colors.semantic.*` o variables CSS del sistema.
