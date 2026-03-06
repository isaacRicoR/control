# DATA MODEL MAP — CONTROL

> Mapa oficial del modelo de datos del sistema.  
> Fuente de verdad para la estructura de base de datos.

---

## 1. Propósito

Este documento define la estructura de datos del sistema CONTROL, incluyendo:

- Entidades principales
- Relaciones entre entidades
- Reglas de persistencia
- Convenciones de IDs y timestamps
- Reglas multi-tenant

---

## 2. Convenciones Globales

### IDs

Todas las entidades deben tener:

| Campo | Tipo | Obligatorio |
|-------|------|-------------|
| `id` | UUID o bigint | Sí |
| `organizationId` | FK → Organization | Sí (entidades de negocio) |
| `createdAt` | timestamp | Sí |
| `updatedAt` | timestamp | Sí |

### Multi-Tenant

Todas las entidades de negocio pertenecen a una **Organization**.

**Regla**: Cada query debe filtrar por `organizationId`.

---

## 3. Entidades Principales

### Organization

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `name` | string | Nombre de la organización |
| `slug` | string | Identificador URL-friendly |
| `createdAt` | timestamp | Fecha de creación |
| `updatedAt` | timestamp | Fecha de última actualización |

**Relaciones**:

```
Organization
├ hasMany → Users
├ hasMany → Departments
└ hasMany → Devices
```

---

### User

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `organizationId` | FK | Organización a la que pertenece |
| `departmentId` | FK | Departamento asignado |
| `roleId` | FK | Rol del usuario |
| `name` | string | Nombre completo |
| `email` | string | Correo electrónico |
| `status` | enum | Estado del usuario |
| `createdAt` | timestamp | Fecha de creación |
| `updatedAt` | timestamp | Fecha de última actualización |

**Relaciones**:

```
User
├ belongsTo → Organization
├ belongsTo → Department
└ belongsTo → Role
```

---

### Department

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `organizationId` | FK | Organización a la que pertenece |
| `name` | string | Nombre del departamento |
| `parentDepartmentId` | FK | Departamento padre (jerarquía) |
| `createdAt` | timestamp | Fecha de creación |
| `updatedAt` | timestamp | Fecha de última actualización |

**Relaciones**:

```
Department
├ belongsTo → Organization
├ hasMany → Users
└ hasMany → Devices
```

---

### Role

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `organizationId` | FK | Organización a la que pertenece |
| `name` | string | Nombre del rol |
| `createdAt` | timestamp | Fecha de creación |
| `updatedAt` | timestamp | Fecha de última actualización |

**Relaciones**:

```
Role
├ hasMany → Users
└ hasMany → RolePermissions
```

---

### Permission

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `key` | string | Clave única del permiso |
| `description` | string | Descripción del permiso |

**Relaciones**:

```
Permission
└ belongsToMany → Roles
```

---

### Device

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `organizationId` | FK | Organización a la que pertenece |
| `departmentId` | FK | Departamento asignado |
| `assignedUserId` | FK | Usuario asignado (opcional) |
| `name` | string | Nombre del dispositivo |
| `status` | enum | Estado del dispositivo |
| `createdAt` | timestamp | Fecha de creación |
| `updatedAt` | timestamp | Fecha de última actualización |

**Relaciones**:

```
Device
├ belongsTo → Organization
├ belongsTo → Department
└ belongsTo → User (assignedUserId)
```

---

### ActivityLog

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | UUID/bigint | Identificador único |
| `organizationId` | FK | Organización |
| `userId` | FK | Usuario que realizó la acción |
| `entityType` | string | Tipo de entidad afectada |
| `entityId` | string | ID de la entidad afectada |
| `action` | string | Acción realizada |
| `metadata` | JSON | Datos adicionales |
| `createdAt` | timestamp | Fecha del registro |

**Relaciones**:

```
ActivityLog
├ belongsTo → User
└ belongsTo → Organization
```

---

## 4. Relaciones Principales del Sistema

Mapa simplificado:

```
Organization
├ Users
│   └ Role
│       └ Permissions
│
├ Departments
│   ├ Users
│   └ Devices
│
└ Devices
    └ Assigned Users
```

---

## 5. Reglas del Modelo de Datos

**Reglas obligatorias**:

1. Todas las entidades de negocio deben incluir `organizationId`.
2. Las consultas deben filtrar siempre por `organizationId`.
3. Los timestamps `createdAt` y `updatedAt` son obligatorios.
4. Ningún módulo accede directamente a la base de datos sin pasar por el Connector.
