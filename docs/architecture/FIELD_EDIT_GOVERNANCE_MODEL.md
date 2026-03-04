# 📘 Política Oficial — Control System
**Field Edit Governance Model (Modelo de Gobierno de Edición)**

## 1️⃣ Principio General

La UI no decide qué se puede editar.
La decisión depende de reglas estructurales evaluadas por contexto.

## 2️⃣ Variables Obligatorias de Evaluación

Todo campo debe evaluarse contra:
*   `field.identityImpact` → ¿Afecta identidad única?
*   `field.securityImpact` → ¿Impacta seguridad o acceso?
*   `field.relationalImpact` → ¿Afecta otras entidades?
*   `field.auditImpact` → ¿Debe quedar registro crítico?
*   `field.businessCritical` → ¿Impacta reglas del negocio?
*   `editor.role`
*   `target.role`
*   `target.status`

Si alguna de estas no está definida → el campo no puede clasificarse.

## 3️⃣ Tipos Oficiales de Campo

### A) Editable
**Cumple:**
*   No afecta identidad.
*   No compromete seguridad.
*   No rompe relaciones críticas.
*   El rol tiene permiso directo.

**Render:**
*   Input activo en modo edición.
*   Inline.

### B) Locked (Bloqueado)
**Cumple al menos una:**
*   Impacto en identidad.
*   Impacto en seguridad estructural.
*   Requiere proceso externo.
*   Campo de auditoría.

**Render:**
*   Visible.
*   No editable.
*   Con indicador + tooltip explicativo.

### C) Conditional
**Cumple:**
*   Depende del rol.
*   Depende del estado.
*   Depende de otro campo.
*   Genera impacto controlado.

**Render:**
*   Editable solo si `canEdit(field, context) === true`.
*   Puede requerir confirmación.

## 4️⃣ Reglas de Escalabilidad

*   Nunca se decide por nombre de campo.
*   Nunca se codifica lógica directa en la vista.
*   Siempre se usa una función central:
    `getFieldEditMode(field, context)`
    → `editable` | `locked` | `conditional`

## 5️⃣ Reglas de UX Obligatorias

*   Nunca enviar a otra pantalla para editar algo visible.
*   Evitar modales si el dato ya está en contexto.
*   No ocultar campos bloqueados (se muestran, pero bloqueados).
*   Mostrar razón si está bloqueado.

## 6️⃣ Regla de Seguridad

Si hay duda → el campo es **Locked** por defecto.

## 7️⃣ Principio de Futuro (Escalabilidad)

El modelo debe funcionar para:
*   Usuario
*   Departamento
*   Dispositivo
*   Organización
*   Cualquier entidad futura
