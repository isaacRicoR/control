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
    {
        id: 'u_006',
        name: 'Elena Moreno',
        email: 'elena.moreno@empresa.com',
        initials: 'EM',
        initialsColor: '#10b981', // Emerald 500
        avatarUrl: null,
        phone: '+52 555 2223 334',
        role: 'Usuario',
        department: 'Finanzas',
        status: 'Activo',
        devices: ['Desktop'],
        lastActivity: 'Hace 15 min',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_007',
        name: 'David Silva',
        email: 'david.silva@empresa.com',
        initials: 'DS',
        initialsColor: '#f43f5e', // Rose 500
        avatarUrl: null,
        phone: '+52 555 3334 445',
        role: 'Administrador',
        department: 'TI',
        status: 'Activo',
        devices: ['Desktop', 'Mobile'],
        lastActivity: 'Online',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_008',
        name: 'Beatriz Lira',
        email: 'beatriz.lira@empresa.com',
        initials: 'BL',
        initialsColor: '#0ea5e9', // Sky 500
        avatarUrl: null,
        phone: '+52 555 4445 556',
        role: 'Usuario',
        department: 'Soporte',
        status: 'Activo',
        devices: ['Mobile'],
        lastActivity: 'Hace 3 horas',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_009',
        name: 'Jorge Ramos',
        email: 'jorge.ramos@empresa.com',
        initials: 'JR',
        initialsColor: '#84cc16', // Lime 500
        avatarUrl: null,
        phone: '+52 555 5556 667',
        role: 'Supervisor',
        department: 'Operaciones',
        status: 'Inactivo',
        devices: ['Desktop'],
        lastActivity: 'Hace 3 días',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_010',
        name: 'Patricia Vega',
        email: 'patricia.vega@empresa.com',
        initials: 'PV',
        initialsColor: '#d946ef', // Fuchsia 500
        avatarUrl: null,
        phone: '+52 555 6667 778',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Pendiente de aprobación',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_011',
        name: 'Ricardo Luna',
        email: 'ricardo.luna@empresa.com',
        initials: 'RL',
        initialsColor: '#f97316', // Orange 500
        avatarUrl: null,
        phone: '+52 555 7778 889',
        role: 'Usuario',
        department: 'Logística',
        status: 'Activo',
        devices: ['Desktop', 'Mobile'],
        lastActivity: 'Hace 5 min',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_012',
        name: 'Gabriela Solis',
        email: 'gabriela.solis@empresa.com',
        initials: 'GS',
        initialsColor: '#64748b', // Slate 500
        avatarUrl: null,
        phone: '+52 555 8889 990',
        role: 'Administrador',
        department: 'Dirección',
        status: 'Activo',
        devices: ['Desktop', 'Mobile', 'Tablet'],
        lastActivity: 'Online',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_013',
        name: 'Fernando Díaz',
        email: 'fernando.diaz@empresa.com',
        initials: 'FD',
        initialsColor: '#ec4899', // Pink 500
        avatarUrl: null,
        phone: '+52 555 9990 001',
        role: 'Usuario',
        department: 'Legal',
        status: 'Inactivo',
        devices: [],
        lastActivity: 'Hace 1 mes',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_014',
        name: 'Silvia Cruz',
        email: 'silvia.cruz@empresa.com',
        initials: 'SC',
        initialsColor: '#06b6d4', // Cyan 500
        avatarUrl: null,
        phone: '+52 555 0001 112',
        role: 'Supervisor',
        department: 'Marketing',
        status: 'Activo',
        devices: ['Laptop'],
        lastActivity: 'Hace 45 min',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_015',
        name: 'Hugo Montes',
        email: 'hugo.montes@empresa.com',
        initials: 'HM',
        initialsColor: '#a855f7', // Purple 500
        avatarUrl: null,
        phone: '+52 555 1112 333',
        role: 'Usuario',
        department: 'TI',
        status: 'Bloqueado',
        devices: ['Desktop'],
        lastActivity: 'Acceso denegado ayer',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_016',
        name: 'Mónica Soto',
        email: 'monica.soto@empresa.com',
        initials: 'MS',
        initialsColor: '#fbbf24', // Amber 400
        avatarUrl: null,
        phone: '+52 555 2223 444',
        role: 'Usuario',
        department: 'Recursos Humanos',
        status: 'Activo',
        devices: ['Laptop'],
        lastActivity: 'Hace 10 min',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_017',
        name: 'Raúl Parra',
        email: 'raul.parra@empresa.com',
        initials: 'RP',
        initialsColor: '#2dd4bf', // Teal 400
        avatarUrl: null,
        phone: '+52 555 3334 555',
        role: 'Administrador',
        department: 'Operaciones',
        status: 'Activo',
        devices: ['Mobile'],
        lastActivity: 'Online',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'u_018',
        name: 'Laura Bernal',
        email: 'laura.bernal@empresa.com',
        initials: 'LB',
        initialsColor: '#94a3b8', // Slate 400
        avatarUrl: null,
        phone: '+52 555 4445 666',
        role: 'Usuario',
        department: 'Ventas',
        status: 'Pendiente',
        devices: [],
        lastActivity: 'Invitación enviada hoy',
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
