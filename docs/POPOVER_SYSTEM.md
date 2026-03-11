# Sistema de popovers — Control

> Comportamiento de popovers flotantes: portal, posicionamiento y scroll.  
> Referencia: `ComponentTokenExpandableRow`, `SelectSingle`.

---

## 1. Patrón general

Los popovers del sistema usan:

- **createPortal** — Renderizado en `document.body` para evitar z-index y overflow
- **position: fixed** — Coordenadas relativas al viewport
- **getBoundingClientRect()** — Posición real del trigger

---

## 2. Comportamiento flotante

El popover:
- Se abre al lado del trigger (izquierda o derecha), no debajo
- Se alinea verticalmente con el trigger
- Se recalcula en resize y scroll
- Se ajusta con el tamaño real (`getBoundingClientRect`) tras el render

---

## 3. Portal

```tsx
createPortal(
  <div style={{ position: "fixed", top, left, ... }}>
    {/* contenido */}
  </div>,
  document.body
);
```

Renderizar en `document.body` evita que contenedores con `overflow: hidden` corten el popover.

---

## 4. Cálculo de posición

### Horizontal

1. Prioridad izquierda: si hay espacio a la izquierda del trigger
2. Prioridad derecha: si hay espacio a la derecha
3. Fallback: centrado en el viewport

### Vertical

- `top = rect.top` (alineado al trigger)
- Clamp para no salir del viewport: `top` entre `margin` y `vh - margin`

### Clamp final

- `left >= VIEWPORT_MARGIN` (12px)
- `left + width <= window.innerWidth - VIEWPORT_MARGIN`
- Lo mismo para `top` verticalmente

---

## 5. Comportamiento responsive

- **Ancho**: `min(200, vw - 24)`, con `minWidth` y `maxWidth` para no desbordar
- **Ajuste post-render**: `useLayoutEffect` que mide el popover real y corrige `left`/`top` si se sale
- **ResizeObserver**: si el contenido cambia de tamaño, se vuelve a calcular la posición

---

## 6. Scroll

- **Sin scroll innecesario**: el popover crece de forma natural con el contenido
- **Scroll solo cuando hace falta**: si la lista no cabe en el viewport, se aplica `maxHeight` y `overflowY: "auto"`
- **Cálculo**: `estimatedContentHeight = options.length * 40 + 32`; si supera el espacio disponible, se activa scroll
- **Estilo de scroll**: clase `floating-scroll` (scrollbar custom del sistema)

---

## 7. Trigger por instancia

Cada fila/card tiene su propio `ComponentTokenExpandableRow` con su `triggerRef`. Al abrir, se usa `getBoundingClientRect()` del trigger de esa instancia. No se reutilizan posiciones entre filas.

---

## 8. Referencias en código

- `ComponentTokenExpandableRow.tsx` — Selector de tokens en lab/apariencia
- `SelectSingle.tsx` — Select con dropdown
- `FloatingSurface` — Contenedor visual del popover
- `FloatingSurface.css` — Clase `floating-scroll` para scrollbar custom
