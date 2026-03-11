# CONTEXTO DE HANDOFF — Nuevo chat

> Copiar este bloque al iniciar un nuevo chat para preservar continuidad.

---

## Estado actual

**Infraestructura**: CERRADA — Console, Connector, RBAC, Shell, Monorepo estables.

**Lab activo**: `/lab/apariencia`  
Ruta: `apps/control/app/(shell)/lab/apariencia/`

---

## Componentes importantes

| Componente | Ubicación | Uso |
|------------|-----------|-----|
| **SectionTabs** | `packages/console/ui/molecules/SectionTabs/` | Navegación de subsecciones (Tema \| Colores base) |
| **StatusTabs** | `packages/console/ui/molecules/StatusTabs/` | Filtros en listados (Usuarios, Dispositivos) |
| **AppearanceSectionLayout** | `apps/control/app/(shell)/lab/apariencia/_components/AppearanceSectionLayout.tsx` | Layout interno: header + línea + content |
| **SecondaryNavSidebar** | `packages/console/ui/molecules/SecondaryNavSidebar/` | Sidebar interna del lab Apariencia |

---

## Patrones existentes

- **AppearanceSectionLayout** con `headerVariant="tabs"` (SectionTabs) o `headerVariant="title"` (h2)
- Estructura: Sidebar interna → Header (tabs/título) → Línea horizontal → Content scroll
- Base como referencia visual (Tema, Colores base)
- Tokens 100% (semantic.*, spacing.*, typography.*)

---

## Reglas del proyecto

**NO tocar**: Infraestructura, Base (Tema, Colores base), SectionTabs, AppearanceSectionLayout salvo necesidad explícita.

**Aprobado**: Layout de Apariencia, estructura de cards, tokens semánticos.

**Pendiente**: Validar Galería/Estados, completar Componentes, Avanzado.

---

## Secciones Apariencia (estado)

| Sección | Estado |
|---------|--------|
| Base → Tema | MADURO |
| Base → Colores base | MADURO |
| Galería | CONSTRUIDO |
| Estados | CONSTRUIDO |
| Componentes | EN LABORATORIO |
| Avanzado | PENDIENTE |

---

## Documentación

- `docs/PUNTO_DE_ARRANQUE.md` — Punto de arranque
- `docs/system-maps/CONTROL_SYSTEM_MAP.md` — Mapa del sistema
- `docs/system-maps/UI_SYSTEM_MAP.md` — Inventario UI
- `docs/ops/logs/APPEARANCE_LAB_SESSION.md` — Bitácora del lab Apariencia

---

## Siguiente foco

Definir correctamente la sección **Componentes** (estructura base ya creada; pendiente editor por categoría).
