# Sistema de apariencia — Control

> Modo claro/oscuro, presets visuales y lab de apariencia.

---

## 1. Modo claro / modo oscuro

### ThemeProvider

**Ubicación**: `packages/console/ui/context/ThemeProvider.tsx`

- Expone `theme` (`"light"` | `"dark"`) y `toggleTheme()`
- Persiste en `localStorage` bajo la clave `"theme"`
- Si no hay valor guardado, usa `prefers-color-scheme`
- Actualiza `data-theme` en `<html>` para que las variables CSS cambien

### Hook

```tsx
const { theme, toggleTheme } = useTheme();
```

---

## 2. Variables CSS y tema

Las variables `--semantic-*` en `globals.css` están definidas por `[data-theme="light"]` y `[data-theme="dark"]`. Al cambiar `data-theme`, todo el UI se adapta.

---

## 3. Visual preset (brand)

**Ubicación**: `packages/console/core/visual/visualPresetStore.tsx`

- Presets: `"control"` | `"security"`
- Persiste en `localStorage` como `"control.visual.preset"`
- Actualiza `data-brand` en `<html>` para variaciones de marca

---

## 4. Lab de apariencia

**Ruta**: `/lab/apariencia`

Entorno de experimentación para:
- Cambio de tema (claro/oscuro)
- Edición de tokens de color
- Previsualización de componentes (Buttons, Inputs, Tabs, Cards, Tables)

### Estructura

```
apps/control/app/(shell)/lab/apariencia/
├── page.tsx                 # Página principal
├── _components/             # Componentes del lab
│   ├── AppearanceSectionLayout.tsx
│   ├── AppearanceConfigRow.tsx
│   ├── AppearanceConfigCard.tsx
│   └── ...
└── _sections/
    ├── components/          # Editores de componentes
    │   ├── ButtonsComponentEditor.tsx
    │   ├── InputsComponentEditor.tsx
    │   ├── TabsComponentEditor.tsx
    │   ├── CardsComponentEditor.tsx
    │   ├── TablesComponentEditor.tsx
    │   └── ComponentTokenExpandableRow.tsx  # Selector de tokens
    └── ...
```

### Secciones

- **Base** — Tokens base, colores fundamentales
- **Galería** — Vista de componentes
- **Estados** — Estados de componentes
- **Componentes** — Edición de tokens por componente (Buttons, Inputs, etc.)

---

## 5. Edición de tokens en componentes

En `/lab/apariencia` → Componentes, cada fila (Background, Text Color, etc.) muestra:
- Un swatch con el color actual
- Un icono de editar que abre un **popover** con la lista de tokens compatibles
- Los tokens se filtran por propiedad (`background`, `textColor`, `borderColor`, etc.)

El cambio se aplica en tiempo real mediante el contexto de apariencia y los tokens semánticos.

---

## 6. Cómo se aplican los tokens

Los tokens editados en el lab afectan a la previsualización en ese mismo contexto. La arquitectura permite en el futuro persistir preferencias y aplicarlas globalmente (p. ej. vía `GlobalPreferencesProvider`).

---

## 7. Nota sobre formalización

El lab es un entorno de experimentación. Los componentes y flujos que se estabilicen pasan a formar parte del Design System y se documentan en `UI_SYSTEM_MAP.md`.
