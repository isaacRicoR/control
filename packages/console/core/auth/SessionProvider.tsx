'use client';

/**
 * SessionProvider.tsx — Proveedor de sesión activa.
 *
 * Intención:
 *   Proveer la sesión del usuario a todo el árbol de componentes vía
 *   React Context. Actualmente usa mockSession; cuando auth sea real,
 *   solo este archivo cambia (no los consumidores).
 *
 * Uso:
 *   Envolver el layout raíz (o el shell) con <SessionProvider>.
 *   Consumir con el hook useSession() desde cualquier componente.
 *
 * ⛔ No hacer:
 *   - No acceder a mockSession directamente desde features o UI.
 *   - No duplicar este contexto en sub-árboles.
 *   - No agregar lógica de negocio aquí.
 */

import React, { createContext, useContext } from 'react';
import { mockSession } from './mockSession';
import { type Session } from './session.types';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const SessionContext = createContext<Session | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface SessionProviderProps {
    children: React.ReactNode;
    /**
     * Override de sesión — útil en tests o Storybook.
     * En producción se omite y se usa la sesión real/mock.
     */
    session?: Session;
}

export function SessionProvider({ children, session }: SessionProviderProps) {
    // TODO(auth): Reemplazar mockSession por sesión real cuando el
    // auth layer esté integrado (ej. next-auth getServerSession, JWT decode, etc.)
    const activeSession: Session = session ?? mockSession;

    return (
        <SessionContext.Provider value={activeSession}>
            {children}
        </SessionContext.Provider>
    );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * useSession — Accede a la sesión activa.
 * Lanza un error si se usa fuera del árbol de SessionProvider.
 */
export function useSession(): Session {
    const ctx = useContext(SessionContext);
    if (!ctx) {
        throw new Error(
            '[useSession] Debe usarse dentro de <SessionProvider>. ' +
            'Asegúrate de que el layout raíz o el shell esté envuelto con <SessionProvider>.'
        );
    }
    return ctx;
}
