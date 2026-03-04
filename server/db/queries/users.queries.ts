import { type UserDTO } from '../memory/users.store'
import { getAllUsers, addUser } from '../memory/users.store'

/**
 * Paginated result structure
 */
export interface PaginatedResult<T> {
    items: T[]
    total: number
}

/**
 * List users with pagination
 * 
 * @param page - Page number (1-indexed)
 * @param limit - Items per page
 * @returns Paginated users
 */
export function listUsers(page: number, limit: number): PaginatedResult<UserDTO> {
    const allUsers = getAllUsers()
    const total = allUsers.length

    // Apply pagination
    const start = (page - 1) * limit
    const end = start + limit
    const items = allUsers.slice(start, end)

    return {
        items,
        total,
    }
}

/**
 * Insert a new user into the store
 * 
 * @param user - Complete UserDTO to insert
 */
export function insertUser(user: UserDTO): void {
    addUser(user)
}

/**
 * Get a single user by id
 *
 * @param id - User id (e.g. 'u_001')
 * @returns UserDTO if found, undefined otherwise
 */
export function getUserById(id: string): UserDTO | undefined {
    return getAllUsers().find((u) => u.id === id)
}
