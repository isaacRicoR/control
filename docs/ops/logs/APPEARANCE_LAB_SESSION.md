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
- **Estado**: Fase LABORATORIO — no forma parte del producto final hasta formalización

---

## Estructura actual (2026-03-06)

### Sidebar interna

- **SecondaryNavSidebar** — navegación vertical con grupos
- Grupos: General (Galería, Base), Configuración (Estados, Componentes, Avanzado)
- Modo colapsado con íconos
- Línea vertical ajustada para alineación con header

### Patrón de sección

```
AppearanceSectionLayout
├ Header
│   ├ headerVariant="tabs" → SectionTabs (Base)
│   ├ headerVariant="title" → título h2 (Galería, Estados, Componentes)
│   └ Línea horizontal
└ Content area (scroll)
```

---

## Secciones implementadas

| Sección | Estado | Descripción |
|---------|--------|-------------|
| **Base → Tema** | MADURO | Preset selector, modo Dark/Light, vista previa |
| **Base → Colores base** | MADURO | Tokens base (accent, background, surface, text), color picker, persistencia |
| **Galería** | CONSTRUIDO | Grid de temas (Control, Security), navegación a Base |
| **Estados** | CONSTRUIDO | Tokens success, warning, error, info |
| **Componentes** | EN LABORATORIO | Preset + categorías (Buttons, Cards, Inputs, Tables, Badges) |
| **Avanzado** | PENDIENTE | Placeholder |

---

## Componentes creados en el laboratorio

### SectionTabs

- **Ubicación**: `packages/console/ui/molecules/SectionTabs/`
- **Uso**: Navegación de subsecciones (ej. Tema | Colores base)
- **Estructura**: Altura 48px, padding 24px, underline animado

### AppearanceSectionLayout

- **Ubicación**: `apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx`
- **Props**: `headerContent`, `headerVariant` ("tabs" | "title"), `borderColor`, `children`
- **Uso**: Base, Galería, Estados, Componentes

---

## Sistema de edición de color

- Color picker (selector 2D + hue slider)
- Formatos: HEX, RGB, HSL
- Colores recientes
- Herramienta eyedropper (EyeDropper API)
- Apertura desde botón editar (popover desktop, modal móvil)

> **Nota**: El selector de color está en fase experimental. No es aún componente oficial del Design System.

---

## Hallazgos de diseño

- El sistema permite estructurar páginas con: sidebar, topbar, toolbar/header, contenido principal
- El laboratorio de Apariencia sirve para **definir patrones visuales antes de formalizarlos**
- La alineación visual entre secciones se consigue usando el mismo layout (AppearanceSectionLayout) con variantes de header

---

## Documentos actualizados

- docs/PUNTO_DE_ARRANQUE.md — Punto de arranque para nuevos chats
- docs/ops/logs/APPEARANCE_LAB_SESSION.md — Este archivo
- docs/system-maps/CONTROL_SYSTEM_MAP.md — Sección Laboratory y lab/apariencia
- docs/system-maps/UI_SYSTEM_MAP.md — SectionTabs y AppearanceSectionLayout
