import { type UserDTO } from '@server/db/memory/users.store'
import * as usersService from '@server/services/users.service'
import {
    okResponse,
    notFoundResponse,
    internalErrorResponse,
} from '@server/http/envelope'

/**
 * GET /api/users/[id]
 *
 * Returns a single user wrapped in ApiEnvelope v2.1.
 *
 * Envelope shape (success):
 *   { data: UserDTO, meta: { requestId, timestamp }, error: null }
 *
 * Envelope shape (not found):
 *   { data: null, meta: { requestId, timestamp }, error: { code: 'NOT_FOUND', message } }
 *
 * The store is seeded at module load time in users.store.ts — no seed
 * data needed here.
 */
export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        if (!id || typeof id !== 'string') {
            return notFoundResponse('User id is required.')
        }

        const user = usersService.getUserById(id)

        if (!user) {
            return notFoundResponse(`User with id "${id}" was not found.`)
        }

        return okResponse<UserDTO>(user)
    } catch {
        return internalErrorResponse()
    }
}
