# Reporte: Fuente exacta del focus ring del botón secondary

## Regla CSS que pinta el ring

**Archivo:** `packages/console/ui/atoms/Button/Button.css`  
**Líneas:** 46-48

```css
.button-variant-secondary:focus-visible {
    box-shadow: 0 0 0 2px var(--button-secondary-focus-ring);
}
```

---

## Cadena de variables

1. **`--button-secondary-focus-ring`**  
   - Se define inline en el `<button>` (Button.tsx líneas 83-88)
   - Valor: `colors.semantic.border.focus`

2. **`colors.semantic.border.focus`**  
   - Tokens: `packages/console/tokens/colors.ts` línea 396  
   - Valor: `"var(--semantic-border-focus)"`

3. **`--semantic-border-focus`**  
   - Definida en `apps/control/app/globals.css`
   - `:root` (línea 148): `var(--brand-neutral-600)`
   - `[data-theme="light"]` (línea 292): `#52525B`
   - `[data-theme="dark"]` (línea 407): `#8B95A5`

---

## Imports de globals.css

- **apps/control/app/layout.tsx** línea 3: `import "./globals.css"`
- Es el layout raíz, así que aplica a toda la app.

---

## Clase aplicada al botón

- El botón secondary usa `button-variant-secondary` (Button.tsx línea 82).
- La regla `.button-variant-secondary:focus-visible` se aplica correctamente.

---

## Conclusión

La fuente del ring es:

- **Regla:** `packages/console/ui/atoms/Button/Button.css`, líneas 46-48.  
- **Variable de color:** inline en el botón → `var(--semantic-border-focus)` → globals.css.

Si el ring sigue viéndose mal, el color ya es neutro (#52525B / #8B95A5). La alternativa es quitar o suavizar el `box-shadow` en `Button.css`.
