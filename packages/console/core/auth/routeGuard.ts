import { redirect } from 'next/navigation';
import { getServerSession } from './serverSession';
import { type AccessAction } from './session.types';

interface GuardOptions {
    action: AccessAction;
    entity?: string;
}

/**
 * requireAuth — Route guard para Server Components.
 * 
 * Ejecuta validaciones de sesión básica a nivel servidor.
 * Si falla, dispara redirect a /login.
 * 
 * @param _options Acción requerida (actualmente solo valida sesión).
 */
export async function requireAuth(options: GuardOptions): Promise<void> {
    const session = await getServerSession();

    // 401 — Unauthorized
    if (!session) {
        redirect('/login');
    }

    // Nota: La validación granular de permisos (403) se delega 
    // a los componentes cliente mediante PermissionGate.
    // El parámetro 'options' queda disponible para futuras validaciones de servidor.
    console.log(`[RouteGuard] Session validated for ${options.entity}:${options.action}`);
}
