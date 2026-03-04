import { type Role, type Entity, type Action, permissionMatrix } from './permissionMatrix';

/**
 * can — Helper oficial de Consola para validar permisos.
 * 
 * Centraliza la lógica de acceso para ser usada en el cliente (hooks, components)
 * o en el servidor (guards).
 *
 * @param role    Rol del usuario a evaluar
 * @param entity  Entidad sobre la que se actúa ('users', 'devices')
 * @param action  Acción que se desea ejecutar ('view', 'create', etc.)
 * @returns boolean
 */
export function can(role: Role, entity: Entity, action: Action): boolean {
    const permissions = permissionMatrix[role];
    if (!permissions) return false;
    
    const entityPermissions = permissions[entity];
    if (!entityPermissions) return false;

    return entityPermissions[action];
}
