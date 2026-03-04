# Especificación Técnica de UI - Proyecto CONTROL (v1)

Este documento es la **Fuente de Verdad (Source of Truth)** del sistema visual de CONTROL. Contiene las especificaciones técnicas necesarias para reconstruir o mantener la interfaz de forma idéntica a su estado actual.

---

## 1. Tokens Reales del Sistema (Colores)

El sistema de colores es dinámico y se basa en variables CSS definidas en `apps/control/app/globals.css`, consumidas a través del objeto `colors.semantic` en `packages/console/tokens/colors.ts`.

| Token | LIGHT (Hex) | DARK (Hex) | Uso Exacto |
| :--- | :--- | :--- | :--- |
| `background.default` | `#F4F6F8` | `#141A21` | Fondo general de la aplicación. |
| `surface.default` | `#FFFFFF` | `#1C252E` | Fondo de Cards, Modales y contenedores de contenido. |
| `border.default` | `#E4E4E7` | `#2A3744` | Bordes de inputs, divisores y contornos de Card. |
| `text.default` | `#18181B` | `#8B95A5` | Texto de cuerpo, contenido de tablas y valores de inputs. |
| `text.active` | `#18181B` | `#FFFFFF` | Títulos, texto resaltado y estados activos. |
| `text.muted` | `#71717A` | `#5A6672` | Labels de formularios, breadcrumbs y metadata secundaria. |
| `primary.default` | `#00A76F` | `#00FFA9` | Color de marca (Acento), usado en estados de éxito y botones primarios. |

---

## 2. Jerarquía de Texto

La jerarquía visual se mantiene mediante el uso estricto de tokens semánticos:

*   **`semantic.text.active`**: Títulos de página, nombres en tablas, y texto ingresado por el usuario en inputs. Máximo contraste.
*   **`semantic.text.default`**: Párrafos, descripciones y contenido general.
*   **`semantic.text.muted`**: 
    *   **Labels de Formularios**: Configurado en `Input.tsx` y `SelectField.tsx` vía `--input-label`.
    *   **Breadcrumbs**: Definido en `PageShell.tsx`.
    *   **Placeholders**: Texto de sugerencia dentro de campos vacíos.

---

## 3. Arquitectura de Componentes UI

El proyecto sigue una estructura jerárquica de componentes:

*   **`packages/console/ui/atoms`**: Componentes base indivisibles (`Button`, `Input`, `SelectField`, `Icon`). Manejan sus propios estados internos (hover, focus, floating labels).
*   **`packages/console/ui/molecules`**: Composiciones simples (`Card`, `CardTabsHeader`, `SelectSingle`). Definen la estructura de los contenedores.
*   **`packages/console/ui/patterns`**: Layouts complejos y bloques reutilizables (`FormLayout`, `FormActions`, `TableToolbar`). Orquestan múltiples átomos y moléculas.

---

## 4. Sistema de Card (`Card.tsx`)

El componente `Card` es el contenedor modular de la aplicación.

### Props Disponibles:
*   **`variant`**: `"default" | "panel"` (Controla elevación y footer).
*   **`elevated`**: `boolean` (Aplica sombra `shadows.card`).
*   **`noPadding`**: `boolean` (Quita el padding de 24px).

### Definición de Variantes:
| Variante | Elevación | Footer Behavior | Caso de Uso |
| :--- | :--- | :--- | :--- |
| `default` | Opcional | Con padding interno | Tablas, Listados, Dashboards. |
| **`panel`** | **Automática** | **Pegado (Margen Negativo)** | Pantallas de Perfil y Configuración. |

---

## 5. Footer de Panel (Efecto "Glued")

En la variante `panel`, el footer se extiende hasta los bordes del Card compensando el padding del contenedor.
**Lógica real en `Card.tsx`:**
```typescript
...(variant === "panel" ? {
  margin: `0 -${spacing[24]}px -${spacing[24]}px -${spacing[24]}px`
} : {})
```
Esto asegura que el divisor superior del footer toque los bordes laterales y el fondo del footer toque el borde inferior del Card.

---

## 6. Sistema de Botones (`Button.tsx`)

### Tamaños (Sizes):
*   **`sm`**: Altura fija de **36px** (`spacing[32] + spacing[4]`). Usado en cabeceras y footers de panel.
*   **`md`**: Altura fija de **48px**. Estándar para formularios de creación.

### Variantes y Temas:
*   **`actionPrimary`**:
    *   En **LIGHT**: Fondo Negro Azulado (`#141A21`), Texto Blanco.
    *   En **DARK**: Fondo Blanco, Texto Negro Azulado.
*   **`secondary`**: Fondo superficie, texto activo y borde visible.

---

## 7. Inputs y Formularios

### Especificaciones de `Input` y `SelectField`:
*   **Patrón**: Floating Labels (la etiqueta se mueve al borde superior al escribir).
*   **Color de Label**: `semantic.text.muted` (Gris tenue).
*   **Color de Valor**: `semantic.text.active` (Máximo contraste).
*   **Borde**: `semantic.border.default` (cambia a `active/focus` según interacción).
*   **Fondo**: `semantic.surface.default`.

---

## 8. Patrones de Pantalla y Consistencia de Layout

| Tipo de Pantalla | Card Variant | Componentes de Apoyo |
| :--- | :--- | :--- |
| **Listados** | `default` | `Table`, `TableToolbar`, `Pagination` |
| **Formularios** | `elevated` | `FormLayout`, `FormActions` |
| **Configuración** | `panel` | `CardTabsHeader`, `Footer Actions` |
| **Vistas de Detalle** | `panel` | `CardTabsHeader`, `Avatar / DataGrid` |

---

## 9. Mapa de Uso en el Proyecto

*   **/users/list**: `Card default` + `Button sm`.
*   **/users/create**: `Card elevated` + `Button md`.
*   **/users/[id] (Perfil)**: `Card variant="panel"` + `Button sm`.
*   **/lab/apariencia**: `Card variant="panel"` + `Button sm`.

---

## 10. Reglas de Oro (Constraints)

1.  **Prohibido el Hardcode**: No usar valores HEX directamente en componentes.
2.  **Consumo de Tokens**: Usar siempre `colors.semantic.*`.
3.  **Source of Truth**: Los colores base nacen en `globals.css` y se mapean en `colors.ts`.
4.  **Consistencia de Layout**: No aplicar paddings manuales para "pegar" footers; usar `variant="panel"`.

---

## 11. Instrucciones de Restauración (Checklist)

Si el UI pierde su apariencia o jerarquía visual, seguir estos pasos:

1.  **Validar Tokens**: Asegurar que `globals.css` tenga los valores HEX definidos en la Sección 1 de este documento.
2.  **Validar Labels**: Confirmar que `Input.tsx` y `SelectField.tsx` usen `text.muted` para la variable `--input-label`.
3.  **Validar Card Panel**: Verificar que `Card.tsx` aplique márgenes negativos de `-24px` (`spacing[24]`) en la variante `panel`.
4.  **Validar Botones**: Asegurar que la altura del tamaño `sm` sea exactamente **36px**.
