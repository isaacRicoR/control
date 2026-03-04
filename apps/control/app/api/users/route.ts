import { NextRequest } from 'next/server'
import { type UserDTO } from '@server/db/memory/users.store'
import * as usersService from '@server/services/users.service'
import { type CreateUserInput } from '@server/services/users.service'
import {
    okResponse,
    createdResponse,
    badRequestResponse,
    internalErrorResponse,
    // TODO(auth): Enable once auth layer is implemented:
    // unauthorizedResponse,
    // forbiddenResponse,
} from '@server/http/envelope'

/**
 * GET /api/users
 *
 * Returns a paginated list of users wrapped in an ApiEnvelope v2.1.
 *
 * The store is seeded at module load time in users.store.ts — no local
 * seed data needed here.
 *
 * Query params:
 * - page:  Page number (default: 1, min: 1)
 * - limit: Items per page (default: 20, min: 1, max: 100)
 *
 * TODO(auth): Add Authorization header check → 401 / 403 when auth layer is ready.
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl

        // Parse and validate page
        const pageParam = searchParams.get('page')
        const parsedPage = pageParam ? parseInt(pageParam, 10) : 1
        const page = !isNaN(parsedPage) && parsedPage >= 1 ? parsedPage : 1

        // Parse and validate limit
        const limitParam = searchParams.get('limit')
        const parsedLimit = limitParam ? parseInt(limitParam, 10) : 20
        const limit =
            !isNaN(parsedLimit) && parsedLimit >= 1 && parsedLimit <= 100
                ? parsedLimit
                : parsedLimit > 100
                    ? 100
                    : 20

        // Get paginated users from service layer
        const result = usersService.listUsers(page, limit)

        const totalPages = Math.ceil(result.total / limit)

        return okResponse<UserDTO[]>(result.items, {
            page,
            limit,
            total: result.total,
            totalPages,
            hasMore: page < totalPages,
        })
    } catch {
        return internalErrorResponse()
    }
}

/**
 * POST /api/users
 *
 * Creates a new user. Returns the created user wrapped in ApiEnvelope v2.1.
 *
 * Envelope shape (success):
 *   { data: UserDTO, meta: { requestId, timestamp }, error: null }
 *
 * Envelope shape (error):
 *   { data: null, meta: { requestId, timestamp }, error: { code, message } }
 *
 * Required body fields: name (string), email (string)
 *
 * TODO(auth): Add Authorization header check → 401 / 403 when auth layer is ready.
 */
export async function POST(request: NextRequest) {
    try {
        const body: Record<string, unknown> = await request.json()

        // Basic required-field validation
        if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
            return badRequestResponse('El campo "name" es requerido y debe ser un string no vacío.', [
                { field: 'name', issue: 'required' },
            ])
        }

        if (!body.email || typeof body.email !== 'string' || body.email.trim() === '') {
            return badRequestResponse('El campo "email" es requerido y debe ser un string no vacío.', [
                { field: 'email', issue: 'required' },
            ])
        }

        // Create user via service layer
        const newUser = usersService.createUser({
            name: body.name as string,
            email: body.email as string,
            phone: typeof body.phone === 'string' ? body.phone : undefined,
            role: typeof body.role === 'string' ? body.role : undefined,
            department: typeof body.department === 'string' ? body.department : undefined,
            status: body.status as CreateUserInput['status'],
            avatarUrl: body.avatarUrl as string | null | undefined,
        })

        return createdResponse<UserDTO>(newUser)
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Error al procesar la solicitud'
        return badRequestResponse(message)
    }
}
