# Índice de Documentación — CONTROL

Este archivo explica la estructura del sistema de documentación y la ubicación de cada tipo de documento.

---

## Fuente oficial del sistema

Los siguientes documentos actúan como la fuente oficial de verdad del sistema:

- docs/architecture/SYSTEM_OVERVIEW.md → Define la arquitectura actual del sistema.
- docs/system-maps/CONTROL_SYSTEM_MAP.md → Define el mapa de infraestructura y sistema técnico.
- docs/system-maps/PRODUCT_SYSTEM_MAP.md → Define los módulos de producto y funcionalidades.
- docs/system-maps/UI_SYSTEM_MAP.md → Define el sistema de componentes de UI.

En caso de conflicto entre documentos, estos archivos tienen prioridad.

---

## Gobierno de documentación

Reglas para mantener la calidad de la documentación:

1. No crear archivos de documentación fuera del directorio `docs/`.
2. Cada documento nuevo debe pertenecer a una de las categorías existentes.
3. Si se requiere una nueva categoría, debe añadirse a este índice.
4. Los documentos obsoletos deben moverse a `docs/legacy/`, no eliminarse de inmediato.
5. Cualquier cambio estructural en la documentación debe registrarse en `docs/ops/logs/`.

Esto garantiza que el sistema de documentación se mantenga consistente con el tiempo.

---

## 1. Arquitectura
Ubicación: docs/architecture/

Contiene la arquitectura técnica del sistema.

Archivos incluidos:
- SYSTEM_OVERVIEW.md
- SYSTEM_TARGET_ARCHITECTURE.md
- UNIVERSAL_CONNECTOR_CONTRACT_v2_1.md
- FIELD_EDIT_GOVERNANCE_MODEL.md

## 2. Mapas del sistema
Ubicación: docs/system-maps/

Define los mapas globales del sistema utilizados como fuente de verdad.

Incluye:
- CONTROL_SYSTEM_MAP.md
- PRODUCT_SYSTEM_MAP.md
- UI_SYSTEM_MAP.md

## 3. Modelo de datos
Ubicación: docs/data-model/

Define la estructura de la base de datos y las relaciones entre entidades.

Incluye:
- DATA_MODEL_MAP.md

## 4. Auditorías
Ubicación: docs/audits/

Informes generados a partir de auditorías técnicas.

Ejemplo:
- COLOR_TOKEN_SCAN_REPORT.md

## 5. Sistema de tema
Ubicación: docs/theme/

Documentación relacionada con el tema de UI, tokens y sistema visual.

Incluye:
- CONTROL_UI_SPEC_v1.md
- FOCUS_RING_SOURCE_REPORT.md
- TOKEN_MAP_USERS_LIST_DARK.md

## 6. Historial
Ubicación: docs/history/

Decisiones históricas y fases cerradas del proyecto.

Ejemplos:
- ACTA_CIERRE_INFRAESTRUCTURA.md
- DATA_TABLE_SYSTEM_PROPOSAL.md

## 7. Legado
Ubicación: docs/legacy/

Archivos deprecados o archivados que se conservan como referencia.

## 8. Operaciones / Bitácoras
Ubicación: docs/ops/logs/

Bitácoras operativas y cambios en la documentación a lo largo del tiempo.

## 9. Propuestas
Ubicación: docs/proposals/

Propuestas futuras que aún no han sido implementadas.

## Regla

Antes de crear nueva documentación:
1. Consultar este índice
2. Colocar el archivo en la carpeta correcta
3. Actualizar este índice si se añade una nueva categoría
