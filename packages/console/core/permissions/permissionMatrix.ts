import { type UserRole } from '../auth/session.types';

/** 
 * Roles definidos en el sistema (fuente de verdad: session.types.ts).
 */
export type Role = UserRole;

/** Entidades del sistema sujetas a permisos. */
export type Entity = 'users' | 'devices';

/** Acciones permitidas sobre las entidades. */
export type Action = 'view' | 'create' | 'edit' | 'delete';

/**
 * Matriz de Permisos (Permission Matrix)
 * Define la granularidad total por Rol, Entidad y Acción.
 */
export const permissionMatrix: Record<Role, Record<Entity, Record<Action, boolean>>> = {
    OWNER: {
        users: { view: true, create: true, edit: true, delete: true },
        devices: { view: true, create: true, edit: true, delete: true },
    },
    ADMIN: {
        users: { view: true, create: true, edit: true, delete: false },
        devices: { view: true, create: true, edit: true, delete: true },
    },
    MEMBER: {
        users: { view: true, create: false, edit: false, delete: false },
        devices: { view: true, create: true, edit: true, delete: false },
    },
    VIEWER: {
        users: { view: true, create: false, edit: false, delete: false },
        devices: { view: true, create: false, edit: false, delete: false },
    },
    GUEST: {
        users: { view: true, create: false, edit: false, delete: false },
        devices: { view: true, create: false, edit: false, delete: false },
    },
};
