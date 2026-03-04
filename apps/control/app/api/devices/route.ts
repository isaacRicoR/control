import { NextRequest } from 'next/server'
import { type DeviceDTO } from '@server/db/memory/devices.store'
import * as devicesService from '@server/services/devices.service'
import {
    okResponse,
    internalErrorResponse,
} from '@server/http/envelope'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl
        const parsedPage = parseInt(searchParams.get('page') ?? '1', 10)
        const page = !isNaN(parsedPage) && parsedPage >= 1 ? parsedPage : 1
        const parsedLimit = parseInt(searchParams.get('limit') ?? '20', 10)
        const limit = !isNaN(parsedLimit) && parsedLimit >= 1 && parsedLimit <= 100 ? parsedLimit : 20

        const result = devicesService.listDevices(page, limit)
        const totalPages = Math.ceil(result.total / limit)

        return okResponse<DeviceDTO[]>(result.items, {
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
