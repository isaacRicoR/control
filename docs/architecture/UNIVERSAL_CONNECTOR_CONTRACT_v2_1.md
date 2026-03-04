# UNIVERSAL CONNECTOR CONTRACT v2.1

**Estado:** OFICIAL (LTS Consideration)
**Versión:** 2.1
**Alcance:** Universal (Control, CRM, ERP, etc.)
**Objetivo:** Cerrar huecos de especificación de largo plazo (5-10 años) sin cambios de backend disruptivos.

---

## 1. Autenticación y Headers

El contrato exige un estricto cumplimiento de estándares HTTP.

### 1.1 Headers Obligatorios
*   **Authorization:** `Bearer <JWT>`
    *   El token debe ser enviado en cada request.
*   **Content-Type:** `application/json`
*   **Accept:** `application/json`

### 1.2 Códigos de Estado de Seguridad
*   **401 Unauthorized:** No enviaste token o expiró. *Acción Frontend: Redirigir a Login.*
*   **403 Forbidden:** Tienes token válido, pero no permisos para este recurso. *Acción Frontend: Mostrar "Acceso Denegado".*

---

## 2. Endpoints Universales (v2.1)

Se mantiene la base v2, añadiendo capacidad de búsqueda compleja.

| Método | URL | Descripción |
| :--- | :--- | :--- |
| **GET** | `/api/v2/:entity` | Listar (Simple). |
| **POST** | `/api/v2/:entity/search` | **[NUEVO]** Listar (Complejo/OR). Body contiene la query. |
| **GET** | `/api/v2/:entity/:id` | Detalle. |
| **POST** | `/api/v2/:entity` | Crear. |
| **PATCH** | `/api/v2/:entity/:id` | Actualizar. |
| **DELETE** | `/api/v2/:entity/:id` | Eliminar. |
| **POST** | `/api/v2/analytics/aggregate` | Agregados. |
| **POST** | `/api/v2/analytics/timeseries` | Series de tiempo. |

---

## 3. Response Envelope Refinado

Se estandariza `meta` para soportar Paginación por Cursor o Página indistintamente.

```json
{
  "data": <any | null>,
  "meta": {
    "requestId": "uuid-v4",
    "timestamp": "ISO-8601",
    // Pagination (Discriminado por tipo)
    "pagination": {
        // Opción A: Page/Limit
        "page": 1,
        "limit": 25,
        "total": 150,
        "totalPages": 6
        // Opción B: Cursors (Performance extrema)
        // "cursor": "next_page_token",
        // "hasMore": true
    }
  },
  "error": <Object | null>
}
```

**Regla:** `meta` SIEMPRE debe estar presente, incluso en respuestas de error (para `requestId`).

---

## 4. Querying y Unified Filter DSL

### 4.1 Selección de Campos (`fields`)
Permite optimizar el payload "Projecting" solo lo necesario.
*   `GET /api/v2/users?fields=id,name,email`
*   **Regla:** Si se solicita un campo no permitido por permisos, el backend debe **omitirlo silenciosamente** o retornar `null`, pero NO fallar (Soft Fail).

### 4.2 Unified Filter DSL
Definimos un lenguaje común para filtros que funciona tanto en URL (GET) como en Body (POST search/analytics).

**Sintaxis (JSON abstract representation):**
```json
{
  "field": "status",
  "operator": "$eq",
  "value": "active"
}
```

**Mapeo GET (Query Params):**
`filter[status][$eq]=active` (Default operator implícito: `filter[status]=active`)

**Mapeo POST / Search (Body):**
```json
{
  "filter": {
    "status": { "$eq": "active" },
    "age": { "$gte": 18 },
    "$or": [
        { "role": "admin" },
        { "role": "editor" }
    ]
  }
}
```

### 4.3 Operadores Soportados
*   `$eq`, `$ne` (Igualdad)
*   `$gt`, `$gte`, `$lt`, `$lte` (Rango numérico/fecha)
*   `$contains` (Texto parcial)
*   `$in`, `$nin` (Listas)
*   `$between` (Rango inclusivo `val1,val2`)

---

## 5. Búsqueda Compleja (`POST /search`)

Para evitar límites de longitud de URL y permitir lógica `OR`.

**Endpoint:** `POST /api/v2/:entity/search`
**Body:**
```json
{
  "filter": { ...Unified DSL... },
  "sort": ["-createdAt", "name"],
  "page": 1,
  "limit": 25,
  "fields": ["id", "name", "status"],
  "include": ["role"]
}
```

---

## 6. Include & Relaciones

*   **Param:** `include=relation1,relation2.nested`
*   **Límites:**
    *   Profundidad máxima recomendada: 2 niveles (`rel.subrel`).
    *   El backend puede rechazar profundidades mayores con `400 Bad Request` para proteger performance.
*   **Permisos:** Si no tienes permiso para ver la relación incluida, se retorna `null` en ese campo de la relación.

---

## 7. Permisos y Seguridad (Backend Enforcement)

El contrato delega la seguridad al backend, pero define el comportamiento ante restricciones:

1.  **Row Level Security:** El usuario solo recibe en `data` las filas que puede ver. El `meta.pagination.total` refleja SOLO lo visible.
2.  **Field Level Security:**
    *   Si pido `fields=salary` y no tengo permiso -> Retorna `null` o omite el campo.
    *   No debe romper con 403 (salvo que sea el ID o campo vital).

---

## 8. Concurrencia (Optimistic Locking) - *Premium Opcional*

Para prevenir sobreescritura de datos por ediciones simultáneas (Lost Update Problem).

1.  **GET:** Retorna header `ETag: "version_hash"` (o campo `_version` en data).
2.  **PATCH/PUT:** Cliente envía header `If-Match: "version_hash"`.
3.  **Backend:**
    *   Si hash coincide -> Actualiza y retorna nuevo ETag.
    *   Si hash cambió -> Retorna **412 Precondition Failed**.
    *   *Acción Frontend:* Avisar al usuario "El registro ha sido modificado por otro. Recargar?".

---

## 9. Manejo de Errores Estándar

El `error` object es la única fuente de la verdad para fallos.

```json
"error": {
  "code": "VALIDATION_ERROR", // Enum fijo
  "message": "Mensaje humano",
  "details": [ // Array opcional para formularios
    { "field": "email", "issue": "format" },
    { "field": "password", "issue": "too_short" }
  ]
}
```

**Códigos Maestros:**
*   `VALIDATION_ERROR`: Datos input inválidos (400).
*   `NOT_FOUND`: Recurso no existe (404).
*   `UNAUTHORIZED`: Sin sesión (401).
*   `FORBIDDEN`: Sin permiso (403).
*   `CONFLICT`: Duplicado / Estado incompatible (409).
*   `PRECONDITION_FAILED`: Concurrencia (412).
*   `INTERNAL_ERROR`: Crash del servidor (500).
*   `RATE_LIMITED`: Demasiados requests (429).

---

## 10. Resumen de Diferencias v2 -> v2.1

| Característica | v2 | v2.1 |
| :--- | :--- | :--- |
| **Search** | Solo GET query params | GET simple + POST Search (Complex/OR) |
| **Pagination** | Page/Limit | Page/Limit + Cursors |
| **Auth** | Implícito | Explícito (Bearer) |
| **Concurrency** | No definido | ETag / If-Match (412) |
| **Fields** | No definido | Param `fields` + Reglas de permiso |
