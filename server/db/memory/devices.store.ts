/**
 * In-Memory Device Store (dev-only)
 */

export type DeviceStatus = 'Activo' | 'Mantenimiento' | 'Inactivo' | 'Bloqueado'

export interface DeviceDTO {
    id: string
    nombre: string
    tipo: string
    departamento: string
    usuario: string        // name of assigned user, empty = unassigned
    status: DeviceStatus
    ultimaActividad: string
    ubicacion: string
    notas: string
    imageUrl: string | null
    createdAt: string
}

const DEV_SEED: DeviceDTO[] = [
    {
        id: 'DEV-001',
        nombre: 'MacBook Pro 16"',
        tipo: 'Laptop',
        departamento: 'Tecnología',
        usuario: 'Ana Pérez',
        status: 'Activo',
        ultimaActividad: 'Hace 2 min',
        ubicacion: 'Oficina Central',
        notas: 'Equipo principal del equipo de desarrollo.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-002',
        nombre: 'Dell Monitor 27"',
        tipo: 'Monitor',
        departamento: 'Finanzas',
        usuario: 'Juan López',
        status: 'Activo',
        ultimaActividad: 'Hace 15 min',
        ubicacion: 'Oficina Central',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-003',
        nombre: 'iPhone 15 Pro',
        tipo: 'Smartphone',
        departamento: 'Operaciones',
        usuario: 'María García',
        status: 'Activo',
        ultimaActividad: 'Hace 1 hora',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-004',
        nombre: 'HP LaserJet Pro',
        tipo: 'Impresora',
        departamento: 'Finanzas',
        usuario: 'Carlos Ruiz',
        status: 'Mantenimiento',
        ultimaActividad: 'Hace 3 días',
        ubicacion: 'Oficina Central',
        notas: 'En reparación — cartucho dañado.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-005',
        nombre: 'Lenovo ThinkPad X1',
        tipo: 'Laptop',
        departamento: 'Tecnología',
        usuario: 'Laura Sánchez',
        status: 'Activo',
        ultimaActividad: 'Hace 30 min',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-006',
        nombre: 'iPad Air',
        tipo: 'Tablet',
        departamento: 'Operaciones',
        usuario: 'Pedro Martínez',
        status: 'Inactivo',
        ultimaActividad: 'Hace 2 sem',
        ubicacion: 'Almacén',
        notas: 'Sin uso desde la reestructuración del equipo.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-007',
        nombre: 'Samsung Galaxy S24',
        tipo: 'Smartphone',
        departamento: 'Tecnología',
        usuario: 'Sofía Torres',
        status: 'Activo',
        ultimaActividad: 'Hace 5 min',
        ubicacion: 'Remoto',
        notas: '',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-008',
        nombre: 'Dell Desktop OptiPlex',
        tipo: 'Desktop',
        departamento: 'Finanzas',
        usuario: '',
        status: 'Inactivo',
        ultimaActividad: 'Hace 1 mes',
        ubicacion: 'Almacén',
        notas: 'Sin usuario asignado.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-009',
        nombre: 'Cisco Router VPN',
        tipo: 'Red',
        departamento: 'Tecnología',
        usuario: '',
        status: 'Bloqueado',
        ultimaActividad: 'Hace 5 días',
        ubicacion: 'Oficina Central',
        notas: 'Bloqueado por política de seguridad.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'DEV-010',
        nombre: 'MacBook Air M3',
        tipo: 'Laptop',
        departamento: 'Operaciones',
        usuario: 'Diego Flores',
        status: 'Mantenimiento',
        ultimaActividad: 'Hace 1 día',
        ubicacion: 'Remoto',
        notas: 'Actualización de macOS en progreso.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
    },
]

let devicesStore: DeviceDTO[] = [...DEV_SEED]

export function getAllDevices(): DeviceDTO[] {
    return devicesStore
}

export function seedDevicesIfEmpty(seed: DeviceDTO[]): void {
    if (devicesStore.length === 0) {
        devicesStore = [...seed]
    }
}

export function addDevice(device: DeviceDTO): void {
    devicesStore.push(device)
}
