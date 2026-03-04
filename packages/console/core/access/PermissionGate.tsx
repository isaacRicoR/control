import React from 'react';
import { useSession } from '../auth/SessionProvider';
import { can } from '../permissions/can';
import { type Entity, type Action } from '../permissions/permissionMatrix';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface PermissionGateProps {
    /** Entidad del sistema */
    entity: Entity;
    /** Acción que se desea ejecutar */
    action: Action;
    /** Contenido a mostrar si el permiso está concedido */
    children: React.ReactNode;
    /** Contenido alternativo si el permiso está denegado. Default: null (nada) */
    fallback?: React.ReactNode;
}

/**
 * PermissionGate
 * 
 * Componente que protege piezas de UI basándose en la matriz de permisos.
 */
export function PermissionGate({
    entity,
    action,
    children,
    fallback = null,
}: PermissionGateProps) {
    const session = useSession();
    
    // Si no hay sesión (none), denegar todo
    if (!session) return <>{fallback}</>;

    const allowed = can(session.role, entity, action);

    return <>{allowed ? children : fallback}</>;
}
