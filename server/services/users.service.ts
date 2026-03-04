import { type UserDTO } from '../db/memory/users.store'
import * as usersQueries from '../db/queries/users.queries'

/**
 * Input for creating a new user
 */
export interface CreateUserInput {
    name: string
    email: string
    phone?: string
    role?: string
    department?: string
    status?: 'Activo' | 'Inactivo' | 'Pendiente'
    avatarUrl?: string | null
}

/**
 * Result of listing users with pagination
 */
export interface ListUsersResult {
    items: UserDTO[]
    total: number
}

/**
 * Helper: Generate initials from name
 * Example: "Marco Isaac" => "MI"
 */
function generateInitials(name: string): string {
    const parts = name.trim().split(/\s+/)
    if (parts.length === 0) return '??'
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

/**
 * Helper: Generate consistent color from string
 */
function generateColor(str: string): string {
    const colors = [
        '#6366f1', // Indigo
        '#8b5cf6', // Violet
        '#3b82f6', // Blue
        '#10b981', // Green
        '#f59e0b', // Amber
        '#ef4444', // Red
        '#ec4899', // Pink
    ]
    const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return colors[hash % colors.length]
}

/**
 * Create a new user
 * 
 * Validates required fields, generates server-side fields,
 * and inserts into the store via queries layer.
 * 
 * @param input - User creation input
 * @returns Created user
 * @throws Error if validation fails
 */
export function createUser(input: CreateUserInput): UserDTO {
    // Validate required fields
    if (!input.name || input.name.trim() === '') {
        throw new Error('El campo "name" es requerido')
    }

    if (!input.email || input.email.trim() === '') {
        throw new Error('El campo "email" es requerido')
    }

    // Generate server-side fields
    const id = `u_${Date.now()}`
    const createdAt = new Date().toISOString()
    const initials = generateInitials(input.name)
    const initialsColor = generateColor(id)

    // Build complete user object with defaults
    const newUser: UserDTO = {
        id,
        name: input.name.trim(),
        email: input.email.trim(),
        initials,
        initialsColor,
        avatarUrl: input.avatarUrl ?? null,
        phone: input.phone ?? '',
        role: input.role ?? '',
        department: input.department ?? '',
        status: input.status ?? 'Activo',
        devices: [],
        lastActivity: 'Ahora',
        createdAt,
    }

    // Insert via queries layer
    usersQueries.insertUser(newUser)

    return newUser
}

/**
 * List users with pagination
 * 
 * @param page - Page number (1-indexed)
 * @param limit - Items per page
 * @returns Paginated users result
 */
export function listUsers(page: number, limit: number): ListUsersResult {
    return usersQueries.listUsers(page, limit)
}

/**
 * Get a single user by id
 *
 * @param id - User id (e.g. 'u_001')
 * @returns UserDTO if found, undefined otherwise
 */
export function getUserById(id: string): UserDTO | undefined {
    return usersQueries.getUserById(id)
}
