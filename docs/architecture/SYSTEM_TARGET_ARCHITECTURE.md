# SYSTEM_TARGET_ARCHITECTURE.md
**Proyecto Control — Arquitectura Objetivo Oficial**

## 1. Propósito
Definir la arquitectura objetivo del sistema administrativo reutilizable.
Este documento describe cómo debe estar estructurado el sistema independientemente del cartucho activo.
*   **No** describe el estado actual.
*   **Describe** el modelo estructural que gobierna el producto.

## 2. Modelo Arquitectónico Oficial

### 2.1 Consola (Core Reutilizable)
La **Consola** es el cascarón administrativo reutilizable.
Incluye:
*   Shell (layout base)
*   Sidebar configurable
*   PageShell
*   Section
*   Card
*   FormSection
*   DataTable
*   ExpandableRowDetail
*   ModalShell
*   Estados estándar (LoadingState, EmptyState, ErrorState)
*   Sistema de tokens
*   Sistema de tema (claro/oscuro)
*   Sistema de navegación
*   Estructura App Router

La Consola:
*   **No** contiene lógica de negocio específica.
*   **No** conoce el dominio (Control, CRM, ERP).
*   **No** conoce la base de datos.
*   **No** ejecuta queries.
*   Su responsabilidad es **estructural y visual**.

### 2.2 Cartucho (Dominio)
El **Cartucho** define el negocio específico.
Incluye:
*   Módulos del dominio
*   Entidades
*   Campos
*   Mock data
*   Reglas del negocio
*   Endpoints específicos
*   KPIs futuros
*   Reportes

Un proyecto ejecuta **un solo cartucho activo**.
El sistema está diseñado para reutilizar la consola en múltiples proyectos (uno por cartucho), no para ejecutar múltiples cartuchos simultáneamente en un solo deploy.

### 2.3 Conector Universal
El **Conector Universal** es la capa de comunicación entre la Consola y el Backend mediante contrato API (HTTP/JSON).
No depende de:
*   Dominio específico
*   Base de datos específica
*   Tecnología de almacenamiento

Debe soportar:
*   CRUD
*   Queries / Analytics (agregados, conteos, series de tiempo, filtros por fecha)

*   **No** contiene lógica de KPI.
*   **No** contiene SQL.
*   **No** contiene reglas de negocio.
*   El backend es responsable de proveer datos compatibles.

## 3. Capas Oficiales del Sistema
La arquitectura se compone de las siguientes capas:
1.  `design/tokens`
2.  `components` (atoms, molecules, layouts)
3.  `features` (cartucho)
4.  `app` (router y ensamblado)
5.  `server` (queries + services + controllers)
6.  `lab` (validación de patrones aislados)

Cada capa tiene una sola responsabilidad.

## 4. Separación Obligatoria Frontend / Backend

**Frontend:**
*   Renderiza UI.
*   Consume endpoints.
*   No accede directo a base de datos.
*   No contiene SQL.
*   No ejecuta lógica sensible.

**Backend:**
*   Define conexión a base de datos.
*   Ejecuta queries.
*   Contiene lógica de negocio.
*   Valida sesiones y permisos.
*   Expone endpoints consistentes.

**Flujo obligatorio:**
`Postgres` → `Query` → `Service` → `Controller` → `Frontend`

## 5. Principios No Negociables
*   No lógica de negocio en la Consola.
*   No valores mágicos.
*   Tokens como única fuente visual.
*   Una responsabilidad por archivo.
*   Responsive obligatorio.
*   Paginación desde la query.
*   Formato estándar de respuesta en listas.
*   No nuevas dependencias sin acuerdo.
*   No nuevos contenedores sin pasar por Lab.

## 6. Escalabilidad Prevista
El sistema está preparado para:
*   Nuevos cartuchos en proyectos independientes.
*   Integración futura con backend real.
*   KPIs y analytics complejos.
*   Permisos dinámicos avanzados.
*   Múltiples despliegues aislados.

**No** está diseñado para ejecutar múltiples cartuchos simultáneamente en un solo deploy.

## 7. Relación con Otros Documentos
*   `MINI_ACTA` → Constitución técnica base.
*   `CONTROL_SYSTEM_MAP` → Estado actual real.
*   `ACTAS PASO 2–5` → Reglas técnicas oficiales.
*   `Este documento` → Arquitectura objetivo estructural.

## 8. Cierre
Nada se implementa fuera de este modelo.
*   La arquitectura no se improvisa.
*   La separación de responsabilidades es obligatoria.
*   La Consola es reutilizable.
*   El Cartucho define el dominio.
*   **Frontend consume.**
*   **Backend provee.**
*   **La estructura manda.**
