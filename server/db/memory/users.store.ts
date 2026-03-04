/**
 * In-Memory User Store (dev-only)
 *
 * Simple module-level storage for users.
 * Resets when the server restarts (npm run dev).
 * No persistence, no Postgres, no sessions.
 *
 * Seed data is initialized at module load time so the store is always
 * pre-populated regardless of which API route is called first.
 */

/**
 * User DTO (mínimo extensible + campos para la tabla)
 * Formato compatible con la UI existente
 */
export interface UserDTO {
    id: string
    name: string
    email: string

    // Avatar
    initials: string
    initialsColor: string
    avatarUrl: string | null

    // Tabla
    phone: string
    role: string
    department: string
    status: 'Activo' | 'Inactivo' | 'Pendiente' | 'Bloqueado'
    devices: string[] // e.g. ["Desktop", "Mobile"]
    lastActivity: string // e.g. "Hace 2 min"

    createdAt: string
}

// ---------------------------------------------------------------------------
// Dev seed — loaded once at module init, shared across all route handlers.
// ---------------------------------------------------------------------------
const DEV_SEED: UserDTO[] = [
    {
        id: 'u_001',
        name: 'Marco Isaac',
        email: 'marco.isaac@empresa.com',
        initials: 'MI',
        initialsColor: '#6366f1', // Indigo 500
        avatarUrl: null,
        phone: '+52 555 1234 567',
        role: 'Administrador',
        department: 'TI',
        status: 'Activo',
        devices: ['Desktop', 'Mobile'],
        lastActivity: 'Hace 2 min',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_002',
        name: 'Ana García',
        email: 'ana.garcia@empresa.com',
        initials: 'AG',
        initialsColor: '#8b5cf6', // Violet 500
        avatarUrl: null,
        phone: '+52 555 7654 321',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Activo',
        devices: ['Desktop'],
        lastActivity: 'Hace 1 hora',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_003',
        name: 'Luis Torres',
        email: 'luis.torres@empresa.com',
        initials: 'LT',
        initialsColor: '#3b82f6', // Blue 500
        avatarUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=128&h=128&q=60',
        phone: '+52 555 9876 543',
        role: 'Usuario',
        department: 'Marketing',
        status: 'Inactivo',
        devices: [],
        lastActivity: 'Hace 2 días',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_004',
        name: 'Rosa Méndez',
        email: 'rosa.mendez@empresa.com',
        initials: 'RM',
        initialsColor: '#f59e0b', // Amber 500
        avatarUrl: null,
        phone: '+52 555 1112 233',
        role: 'Usuario',
        department: 'Recursos Humanos',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Pendiente de aprobación',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_005',
        name: 'Carlos Ruiz',
        email: 'carlos.ruiz@empresa.com',
        initials: 'CR',
        initialsColor: '#ef4444', // Red 500
        avatarUrl: null,
        phone: '+52 555 4455 667',
        role: 'Supervisor',
        department: 'Operaciones',
        status: 'Bloqueado',
        devices: [],
        lastActivity: 'Hace 1 semana',
        createdAt: new Date().toISOString(),
    },
]

/**
 * Module-level in-memory storage — pre-seeded at load time.
 */
let usersStore: UserDTO[] = [...DEV_SEED]

/**
 * Get all users from the store.
 */
export function getAllUsers(): UserDTO[] {
    return usersStore
}

/**
 * Seed the store with initial data if empty.
 * Kept for backward compatibility — routes can still call this safely.
 * Since the store is pre-seeded at module load, this is typically a no-op.
 */
export function seedUsersIfEmpty(seed: UserDTO[]): void {
    if (usersStore.length === 0) {
        usersStore = [...seed]
    }
}

/**
 * Add a new user to the store.
 */
export function addUser(user: UserDTO): void {
    usersStore.push(user)
}
