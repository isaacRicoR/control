# PUNTO DE ARRANQUE — CONTROL

> **Última actualización**: 2026-03-06  
> **Propósito**: Contexto de inicio para nuevos chats y continuidad del proyecto.

---

## 1. Infraestructura: CERRADA Y ESTABLE

Las siguientes capas están **cerradas** y no deben modificarse salvo correcciones menores:

| Capa | Estado |
|------|--------|
| **Console** | CERRADO — Shell, Sidebar, TopBar, layouts |
| **Cartuchos** | ESTABLE — Patrones UI congelados |
| **RBAC** | IMPLEMENTADO — Route Guards, permisos |
| **Connector** | IMPLEMENTADO — Capa HTTP única |
| **Shell** | CERRADO — AppShell, navegación |
| **Monorepo** | CERRADO — Estructura npm workspaces |

---

## 2. Lab activo

El trabajo actual está concentrado en:

**`/lab/apariencia`**

Ruta: `apps/control/app/(shell)/lab/apariencia/`

---

## 3. Secciones de Apariencia (estado real)

| Sección | Estado |
|---------|--------|
| **Base → Tema** | MADURO — Preset, aspecto, vista previa |
| **Base → Colores base** | MADURO — Tokens base, color picker, persistencia |
| **Galería** | CONSTRUIDO — Grid de temas, en revisión de alineación |
| **Estados** | CONSTRUIDO — Tokens success, warning, error, info |
| **Componentes** | EN LABORATORIO — Estructura base con preset + categorías |
| **Avanzado** | PENDIENTE — Placeholder |

---

## 4. Componentes maduros del laboratorio

### SectionTabs

- **Ubicación**: `packages/console/ui/molecules/SectionTabs/`
- **Propósito**: Tabs de navegación de secciones (ej. Tema | Colores base)
- **Diferencia con StatusTabs**:
  - **StatusTabs** → usado para filtros en listados (Usuarios, Dispositivos), incluye badges
  - **SectionTabs** → usado para navegación de secciones dentro de una vista de configuración

### AppearanceSectionLayout

- **Ubicación**: `apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx`
- **Propósito**: Layout reutilizable interno del laboratorio de Apariencia
- **Estructura**:
  - Sidebar interna (SecondaryNavSidebar)
  - Header
  - Línea horizontal
  - Área de contenido con scroll

**Variantes del header**:
- `headerVariant="tabs"` → header con SectionTabs (Base)
- `headerVariant="title"` → header con título simple (Galería, Estados, Componentes)

---

## 5. Patrón de sección de Apariencia

```
Sidebar interna (SecondaryNavSidebar)
Main
  ├ Header
  │   ├ Tabs (SectionTabs) o título (h2)
  │   └ Línea horizontal
  └ Content area (scroll)
```

Este patrón se está validando en el laboratorio antes de formalizarse en el sistema UI.

---

## 6. Siguiente foco

Definir correctamente la sección **Componentes**:
- Estructura base ya implementada (preset + categorías Buttons, Cards, Inputs, Tables, Badges)
- Pendiente: editor por categoría, navegación a subsecciones

---

## 7. Reglas del proyecto

**NO tocar**:
- Infraestructura base (Console, Connector, RBAC)
- Base → Tema (referencia aprobada)
- Base → Colores base (referencia aprobada)
- SectionTabs
- AppearanceSectionLayout (sin necesidad explícita)

**Aprobado**:
- Layout de Apariencia con Sidebar + Header + Content
- Uso de tokens semánticos (100% token-based)
- Estructura de cards en Base

**Pendiente**:
- Validación final de Galería y Estados
- Desarrollo de sección Componentes
- Sección Avanzado
