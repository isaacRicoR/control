# Bitácora — Appearance Lab Session

> **Fecha**: 2026-03-06  
> **Estado**: En curso (fase experimental)

---

## Resumen

Registro de la sesión de trabajo en el módulo **Appearance** dentro del laboratorio de UX/UI del proyecto CONTROL. El sistema de edición de temas se encuentra en fase de diseño y experimentación en la ruta `/lab/apariencia`.

---

## Contexto

- **Módulo**: Appearance (Theme Management System)
- **Ruta**: `/lab/apariencia`
- **Acceso**: Sidebar principal → Desarrollador → Apariencia
- **Estado**: Fase LABORATORIO — no forma parte del producto final ni del Design System oficial

---

## Estructura de navegación implementada

```
Sidebar principal
  → Apariencia
    → Card contenedora
      → Tabs superiores
```

### Tabs actuales

| Tab | Descripción |
|-----|-------------|
| **Tema** | Configuración general del tema |
| **Colores base** | Tokens base para modo oscuro y claro |

---

## Estructura de "Colores base"

Dos tarjetas principales:

| Tarjeta | Contenido |
|---------|-----------|
| **Modo oscuro** | Tokens base: accent, background, surface, text |
| **Modo claro** | Tokens base: accent, background, surface, text |

### Estructura por token

Cada token incluye:

- **Izquierda**:
  - Círculo con color
  - Nombre del token
  - Valor hexadecimal
- **Derecha**:
  - Botón editar (icono lápiz)
  - Botón desplegar

---

## Sistema de edición de color (implementado)

Funcionalidades actuales:

- Color picker (selector 2D + hue slider)
- Formatos: HEX, RGB, HSL
- Colores recientes
- Herramienta eyedropper (EyeDropper API)
- Apertura desde botón editar

### Comportamiento objetivo del selector

| Contexto | Comportamiento |
|----------|----------------|
| **Desktop** | Popover anclado al botón |
| **Pantallas pequeñas** | Modal centrado |

> **Nota**: El selector de color está en pruebas de UX. Aún no es un componente oficial del Design System.

---

## Estado experimental

- Los componentes desarrollados en `/lab/apariencia` son experimentales.
- Antes de promoverlos al Design System, deben registrarse en **UI SYSTEM MAP**.
- La arquitectura base del proyecto no ha sido modificada.
- Los componentes aún no forman parte del sistema oficial.

---

## Documentos actualizados

- docs/system-maps/CONTROL_SYSTEM_MAP.md — Sección "Laboratory Modules"
- docs/system-maps/UI_SYSTEM_MAP.md — Nota sobre color picker experimental
- docs/system-maps/PRODUCT_SYSTEM_MAP.md — Sección "Módulos Experimentales"
- docs/README.md — Nota sobre sección `/lab`
