import { headers } from 'next/headers';
import { type Session } from './session.types';
import { mockSession } from './mockSession';

/**
 * getServerSession — Helper para Server Components.
 */
export async function getServerSession(): Promise<Session | null> {
    // Debug Mode (solo en Desarrollo)
    if (process.env.NODE_ENV === 'development') {
        const headerList = await headers();
        const debugAuth = headerList.get('x-debug-auth');

        if (debugAuth === 'none') return null;
        if (debugAuth === 'guest') return { userId: 'guest', role: 'GUEST' };
        if (debugAuth === 'owner') return { userId: 'isaac', role: 'OWNER' };
    }

    // Comportamiento por defecto (Mock)
    return mockSession;
}
