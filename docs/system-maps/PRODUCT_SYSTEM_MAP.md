# PRODUCT SYSTEM MAP — CONTROL

> Mapa oficial del producto.  
> Define qué módulos existen, cómo se relacionan y qué entidades controla cada uno.  
> **Estado**: v1 — 2026-03-05

---

## 1. Propósito

Este documento define la estructura funcional del producto.

Responde tres preguntas clave:

1. Qué módulos existen en el sistema  
2. Qué entidades maneja cada módulo  
3. Cómo se relacionan entre sí  

---

## 2. Arquitectura de Producto

CONTROL sigue una arquitectura basada en **Cartuchos (Modules)**.

Cada cartucho es un dominio funcional independiente.

**Ejemplo**:

```
Console
├ Users
├ Devices
├ Departments
├ Organization
├ Roles
├ ActivityLogs
```

**Reglas**:

- Cada módulo controla sus propias entidades
- Los módulos se comunican mediante API del Connector
- Ningún módulo accede directamente a la base de datos

---

## 3. Entidades Fundamentales del Sistema

Estas entidades existen en todo el sistema.

| Entidad | Descripción |
|---------|-------------|
| Organization | Empresa que utiliza el sistema |
| User | Persona que accede al sistema |
| Role | Rol del usuario |
| Permission | Permisos asignados |
| Department | Área organizacional |
| Device | Dispositivo monitoreado |
| ActivityLog | Registro de acciones del sistema |

Estas entidades forman el núcleo del producto.

---

## 4. Módulos del Producto

Cada módulo es un cartucho funcional.

### USERS MODULE

Gestión de usuarios del sistema.

**Entidades**: User, Role, Permission

**Funciones**:
- Crear usuarios
- Editar perfil
- Asignar roles
- Activar / desactivar usuario

**Relaciones**:
```
User
├ belongsTo → Organization
├ belongsTo → Department
└ hasOne → Role
```

### DEVICES MODULE

Gestión de dispositivos monitoreados.

**Entidades**: Device, DeviceStatus, DeviceAssignment

**Funciones**:
- Registrar dispositivo
- Asignar dispositivo a usuario
- Ver estado
- Historial del dispositivo

**Relaciones**:
```
Device
├ belongsTo → Organization
├ assignedTo → User
└ belongsTo → Department
```

### DEPARTMENTS MODULE

Gestión de estructura organizacional.

**Entidades**: Department, DepartmentHierarchy

**Funciones**:
- Crear departamentos
- Organizar jerarquía
- Asignar usuarios

**Relaciones**:
```
Department
├ belongsTo → Organization
├ hasMany → Users
└ hasMany → Devices
```

### ORGANIZATION MODULE

Configuración global de la cuenta.

**Entidades**: Organization, OrganizationSettings, OrganizationBilling

**Funciones**:
- Configuración general
- Información fiscal
- Branding
- Facturación

### ROLES & PERMISSIONS MODULE

Sistema de seguridad.

**Entidades**: Role, Permission, RolePermission

**Funciones**:
- Definir roles
- Asignar permisos
- Control RBAC

**Relaciones**:
```
Role
├ hasMany → Users
└ hasMany → Permissions
```

### ACTIVITY LOGS MODULE

Auditoría del sistema.

**Entidades**: ActivityLog

**Funciones**:
- Registrar acciones
- Auditoría
- Historial

**Relaciones**:
```
ActivityLog
├ belongsTo → User
├ belongsTo → Organization
└ references → Entity
```

---

## 5. Relaciones Principales

Mapa simplificado del sistema:

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

## 6. Principios del Producto

Reglas que gobiernan el crecimiento del sistema.

| Regla | Descripción |
|-------|-------------|
| **Regla 1 — Un módulo = un dominio** | Cada cartucho controla un área funcional clara. Ejemplo: Users → gestión de personas, Devices → gestión de hardware, Departments → estructura organizacional |
| **Regla 2 — Entidades claras** | Cada entidad tiene: `id`, `organizationId`, `createdAt`, `updatedAt`. Garantiza multi-tenant seguro. |
| **Regla 3 — Los módulos no comparten lógica** | Los módulos se comunican solo vía API. Nunca: Users → accede directo a Devices DB. Siempre: Users → API → Devices |

---

## 7. Módulos Experimentales (Laboratorio)

Módulos en fase de experimentación en la ruta `/lab`. No forman parte del producto final hasta su formalización.

| Módulo | Ruta | Descripción |
|--------|------|-------------|
| **Appearance** | `/lab/apariencia` | Theme Management System — sistema de gestión y configuración de temas. En experimentación UX/UI antes de convertirse en componentes oficiales del Design System. |

---

## 8. Roadmap de Módulos

| Módulo | Estado |
|--------|--------|
| Users | ✅ |
| Devices | ✅ |
| Departments | 🚧 |
| Organization | 🚧 |
| Roles & Permissions | 🚧 |
| Activity Logs | ❌ |
| Billing | ❌ |
| Notifications | ❌ |

---

## 9. Gobernanza del Producto

**Regla**: Antes de crear un nuevo módulo:

1. Debe definirse en este documento
2. Debe tener entidades claras
3. Debe respetar arquitectura de cartuchos

---

## 10. Relación con otros documentos

Este documento se conecta con:

| Documento | Define |
|-----------|--------|
| **CONTROL SYSTEM MAP** | Infraestructura, consola, connector, seguridad |
| **UI SYSTEM MAP** | Componentes visuales, patrones de interfaz, design system |
| **PRODUCT SYSTEM MAP** (este documento) | Módulos del producto, entidades, relaciones de negocio |

### Resultado

CONTROL queda dividido en tres mapas:

```
SYSTEM MAP        → arquitectura técnica
UI SYSTEM MAP     → arquitectura visual
PRODUCT SYSTEM MAP → arquitectura del producto
```
