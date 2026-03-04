import { type DeviceDTO } from '../db/memory/devices.store'
import * as devicesQueries from '../db/queries/devices.queries'

export interface ListDevicesResult {
    items: DeviceDTO[]
    total: number
}

export interface CreateDeviceInput {
    nombre: string
    tipo: string
    departamento: string
    usuario?: string
    status?: DeviceDTO['status']
    ubicacion?: string
    notas?: string
    imageUrl?: string | null
}

export function listDevices(page: number, limit: number): ListDevicesResult {
    return devicesQueries.listDevices(page, limit)
}

export function getDeviceById(id: string): DeviceDTO | undefined {
    return devicesQueries.getDeviceById(id)
}

export function createDevice(input: CreateDeviceInput): DeviceDTO {
    if (!input.nombre || input.nombre.trim() === '') {
        throw new Error('El campo "nombre" es requerido')
    }
    if (!input.tipo || input.tipo.trim() === '') {
        throw new Error('El campo "tipo" es requerido')
    }

    const id = `DEV-${Date.now()}`
    const newDevice: DeviceDTO = {
        id,
        nombre: input.nombre.trim(),
        tipo: input.tipo.trim(),
        departamento: input.departamento ?? '',
        usuario: input.usuario ?? '',
        status: input.status ?? 'Activo',
        ultimaActividad: 'Ahora',
        ubicacion: input.ubicacion ?? '',
        notas: input.notas ?? '',
        imageUrl: input.imageUrl ?? null,
        createdAt: new Date().toISOString(),
    }

    devicesQueries.insertDevice(newDevice)
    return newDevice
}
