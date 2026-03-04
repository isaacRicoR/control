import { type DeviceDTO } from '../memory/devices.store'
import { getAllDevices, addDevice } from '../memory/devices.store'

export interface PaginatedResult<T> {
    items: T[]
    total: number
}

export function listDevices(page: number, limit: number): PaginatedResult<DeviceDTO> {
    const all = getAllDevices()
    const total = all.length
    const start = (page - 1) * limit
    return { items: all.slice(start, start + limit), total }
}

export function getDeviceById(id: string): DeviceDTO | undefined {
    return getAllDevices().find((d) => d.id === id)
}

export function insertDevice(device: DeviceDTO): void {
    addDevice(device)
}
