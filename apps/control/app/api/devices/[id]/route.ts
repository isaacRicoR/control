import { type DeviceDTO } from '@server/db/memory/devices.store'
import * as devicesService from '@server/services/devices.service'
import {
    okResponse,
    notFoundResponse,
    internalErrorResponse,
} from '@server/http/envelope'

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        if (!id) return notFoundResponse('Device id is required.')

        const device = devicesService.getDeviceById(id)
        if (!device) return notFoundResponse('Device not found.')

        return okResponse<DeviceDTO>(device)
    } catch {
        return internalErrorResponse()
    }
}
