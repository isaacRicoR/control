# Especificación Técnica de UI - Proyecto CONTROL (v1) [Source of Truth Final]

Este documento es la **Fuente de Verdad (Source of Truth) final** del sistema visual de CONTROL, validada y congelada según los estándares del repositorio. Contiene las especificaciones técnicas extraídas directamente del código para garantizar la reconstrucción íntegra del sistema.

---

## 1. Tokens Reales del Sistema (Colores)

Los colores se rigen por variables CSS dinámicas. El objeto `colors.semantic` en `packages/console/tokens/colors.ts` actúa como el puente hacia `apps/control/app/globals.css`.

| Token | Variable CSS | LIGHT (Hex) | DARK (Hex) | Uso Exacto |
| :--- | :--- | :--- | :--- | :--- |
| `background.default` | `--semantic-background-default` | `#F4F6F8` | `#141A21` | Fondo general de la aplicación. |
| `surface.default` | `--semantic-surface-default` | `#FFFFFF` | `#1C252E` | Fondo de Cards y Modales. |
| `border.default` | `--semantic-border-default` | `#E4E4E7` | `#2A3744` | Bordes de inputs, divisores y Cards. |
| `text.default` | `--semantic-text-default` | `#18181B` | `#8B95A5` | Texto de cuerpo y contenido de tablas. |
| `text.active` | `--semantic-text-active` | `#18181B` | `#FFFFFF` | Títulos y valores ingresados en inputs. |
| `text.muted` | `--semantic-text-muted` | `#71717A` | `#5A6672` | Labels de formularios y breadcrumbs. |
| `primary.default` | `--semantic-primary-default` | `#00A76F` | `#00FFA9` | Color de acento / éxito. |

---

## 2. Jerarquía de Texto

La consistencia visual depende del mapeo correcto de estos tres estados de texto (Source of Truth):

*   **`text.active`**: Títulos, valores ingresados por el usuario y máximo contraste.
*   **`text.default`**: Cuerpo de texto, contenido de tablas y descripciones.
*   **`text.muted`**: Labels de formularios (`Input`, `SelectField`), breadcrumbs y metadata.

---

## 3. Arquitectura de Componentes UI

El sistema se organiza en tres capas de abstracción:

*   **Atoms (`ui/atoms`)**: `Button`, `Input`, `SelectField`, `Icon`, `Text`. Manejan su propia lógica de estados (hover, focus).
*   **Molecules (`ui/molecules`)**: `Card`, `CardTabsHeader`, `SelectSingle`. Definen la estructura de los contenedores.
*   **Patterns (`ui/patterns`)**: `FormLayout`, `FormActions`, `TableToolbar`. Bloques de construcción de alto nivel para pantallas.

---

## 4. Sistema de Card (`Card.tsx`)

El `Card` es el contenedor maestro. Sus propiedades definen la jerarquía de la pantalla.

### Props Reales:
*   **`variant`**: `"default" | "panel"`.
*   **`elevated`**: `boolean` (Aplica sombra `shadows.card`).
*   **`noPadding`**: `boolean` (Elimina los 24px de padding interno).

### Variantes y Comportamiento:
| Variante | Elevación (Sombra) | Footer Behavior | Caso de Uso |
| :--- | :--- | :--- | :--- |
| `default` | Opcional | Normal (con aire) | Tablas y Dashboards. |
| **`panel`** | **Automática** | **Glued (Pegado)** | Perfil, Configuración y Detalle. |

> **Regla de Prioridad**: `variant="panel"` tiene prioridad sobre el prop `elevated` y fuerza la sombra automáticamente.

---

## 5. Footer de Panel (Efecto "Glued")

Para lograr que los footers de acción toquen los bordes del `Card` sin romper el padding del contenido, la variante `panel` aplica márgenes negativos exactos:

```typescript
// Lógica interna en Card.tsx
margin: `0 -${spacing[24]}px -${spacing[24]}px -${spacing[24]}px`
```
Este patrón elimina el "aire" extra en la parte inferior de las vistas de configuración. El footer queda perfectamente alineado a los bordes de la Card.

---

## 6. Sistema de Botones (`Button.tsx`)

Los botones tienen prohibido el uso de alturas manuales. Se rigen por el prop `size`.

### Tamaños (Sizes):
*   **`sm`**: Altura real de **36px** (`spacing[32] + spacing[4]`). Estándar para acciones de tabla y paneles.
*   **`md`**: Altura real de **48px**. Estándar para formularios de creación.

### Variantes de Color:
*   **`actionPrimary`**: Invierte colores según el tema (Invert).
    *   **LIGHT**: Fondo oscuro (`#141A21`) / Texto blanco.
    *   **DARK**: Fondo blanco / Texto oscuro (`#141A21`).
*   **`secondary`**: Fondo neutro (`surface`), borde visible y texto de contraste (`text.active`).

---

## 7. Inputs y Formularios

### Especificaciones Técnicas:
*   **Patrón**: Floating Labels obligatorio.
*   **Labels**: Usan estrictamente `semantic.text.muted` (configurado vía `--input-label` y `--select-label`).
*   **Color de Texto ingresado**: `semantic.text.active`.
*   **Borde y Fondo**: `border.default` y `surface.default`.

---

## 8. Patrones de Pantalla y Uso (Mapa de Rutas)

| Tipo de Pantalla | Card Pattern | Tamaño Botones | Rutas de Ejemplo |
| :--- | :--- | :--- | :--- |
| **Listados** | `default` (elevated) | `sm` | `/users/list`, `/devices/list` |
| **Formularios** | `elevated` | `md` | `/users/create`, `/devices/create` |
| **Configuración** | `variant="panel"` | `sm` | `/lab/apariencia` |
| **Vistas de Detalle** | `variant="panel"` | `sm` | `/users/[id]` |

---

## 9. Reglas de Oro

1.  **Nunca hardcodear colores HEX**: Usar siempre `colors.semantic.*`.
2.  **No modificar tokens desde componentes**: Los cambios de color se centralizan en `globals.css`.
3.  **Respetar variantes del sistema**: No usar paddings manuales en pantallas; elegir la variante de `Card` adecuada.
4.  **Consistencia de Botones**: Usar `size="sm"` para toda acción que no sea el envío principal de un formulario de creación.
5.  **Prohibido Hacks por Pantalla**: Cualquier ajuste visual debe ser sistémico y reflejado en este documento.

---

## 10. Regla de Cambios al Sistema

Para mantener la integridad de la Fuente de Verdad, cualquier cambio visual debe seguir este orden estrictamente:
1.  **Modificar Tokens**: Actualizar `globals.css` si es un cambio de color.
2.  **Modificar Componente Base**: Si es un cambio de layout (ej. altura de botones o márgenes de Card).
3.  **Actualizar Documentación**: Reflejar el cambio en este archivo (`CONTROL_UI_SPEC_v1.md`).

**Nunca modificar directamente una pantalla para alterar el comportamiento global del sistema.**

---

## 11. Instrucciones de Restauración

Si el UI se rompe o pierde coherencia:
1.  **Check de Tokens**: Validar los HEX de la Sección 1 en `globals.css`.
2.  **Check de Labels**: Asegurar que `Input.tsx` y `SelectField.tsx` mapeen `--input-label`/`--select-label` a `text.muted`.
3.  **Check de Card Variant**: Confirmar que `variant="panel"` en `Card.tsx` aplique los márgenes negativos de `-24px` en el footer.
4.  **Check de Button Sizes**: Validar que el tamaño `sm` calcule su altura a 36px.
