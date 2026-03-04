/**
 * session.types.ts — Tipos base de la capa de acceso.
 *
 * Intención:
 *   Centralizar los tipos de sesión y roles para que SessionProvider
 *   y PermissionGate compartan la misma fuente de verdad.
 *
 *   Cuando se integre autenticación real, solo este archivo y
 *   SessionProvider.tsx deben cambiar — PermissionGate no.
 *
 * ⛔ No hacer:
 *   - No duplicar roles en features o componentes UI.
 *   - No hardcodear strings de rol fuera de este archivo.
 */

/** Roles reconocidos por el sistema. Ampliar aquí cuando sea necesario. */
export type UserRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER' | 'GUEST';

/** Acciones evaluables por PermissionGate. */
export type AccessAction = 'view' | 'create' | 'edit' | 'delete';

/** Shape de la sesión activa. */
export interface Session {
    userId: string;
    role: UserRole;
    /** Extender aquí con displayName, email, etc. cuando auth sea real. */
}
