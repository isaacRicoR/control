# Git y flujo de trabajo — Control

> Configuración de Git, .gitignore y prácticas del proyecto.

---

## 1. .gitignore

El proyecto ignora:

### Dependencias
- `/node_modules`
- `/.pnp`, `.pnp.*`
- `.yarn/*` (excepto patches, plugins, releases)

### Build y caché
- `/.next/`
- `/out/`
- `/build/`
- `*.tsbuildinfo`

### Entorno
- `.env*` (archivos de entorno)

### Sistema y debug
- `.DS_Store`
- `*.pem`
- `npm-debug.log*`, `yarn-debug.log*`, etc.
- `.vercel`
- `next-env.d.ts`

---

## 2. Archivos grandes

No hay reglas específicas de Git LFS en la documentación actual. Para proteger el repo de archivos grandes:

- Evitar commitear binarios pesados (videos, assets sin comprimir)
- Usar servicios externos para assets grandes
- Revisar el tamaño antes de hacer commit

---

## 3. Pre-commit

No existe actualmente un hook pre-commit configurado (Husky, lint-staged). Los scripts de verificación se ejecutan manualmente:

- `npm run verify:structure` — Verifica estructura y lint
- `npm run scan:hardcodes` — Busca colores hardcodeados
- `npm run check:ui-guards` — Verifica reglas de UI (borderRadius, shape panel)

---

## 4. Scripts de verificación

| Script | Descripción |
|--------|-------------|
| `verify:structure` | `node scripts/verify-structure.js && npm run lint` |
| `scan:hardcodes` | Escanea colores hardcodeados |
| `scan:hardcodes:strict` | Modo estricto del scan |
| `check:ui-guards` | ESLint + script para guard rails de UI |

---

## 5. Convenciones

- Documentación en `docs/`
- No crear docs fuera de `docs/`
- Documentos obsoletos → `docs/legacy/`
- Cambios estructurales → registrar en `docs/ops/logs/`

---

## 6. Documentación del sistema

Los documentos en `docs/` describen el sistema actual. En caso de conflicto, tienen prioridad:

- `docs/architecture/SYSTEM_OVERVIEW.md`
- `docs/system-maps/CONTROL_SYSTEM_MAP.md`
- `docs/system-maps/UI_SYSTEM_MAP.md`
- `docs/system-maps/PRODUCT_SYSTEM_MAP.md`
