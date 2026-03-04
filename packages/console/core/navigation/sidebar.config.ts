import { SidebarGroup, SystemCompany } from "@ui/layouts/Sidebar/Sidebar.types";

export const mockCompanies: SystemCompany[] = [
    { name: "Empresa ABC", label: "EM", count: "4 de 10", active: true, color: "var(--semantic-success-default)" },
    { name: "Corporación Tech", label: "CO", count: "2 de 5", active: false, color: "var(--semantic-primary-default)" },
    { name: "Startup Innovación", label: "ST", count: "9 de 15", active: false, color: "var(--semantic-success-hover)" },
    { name: "Corporación Int...", label: "CO", count: "5 de 10", active: false, color: "var(--semantic-primary-hover)" }
];

export const appName = "Control";
export const createAccountLabel = "Crear cuenta";

/**
 * Configuración del menú lateral FULL.
 * Define la estructura de grupos e ítems completa.
 */
export const sidebarConfigFull: SidebarGroup[] = [
    {
        title: "Principal",
        items: [
            {
                label: "Panel",
                href: "/dashboard",
                icon: "grid",
                active: true,
            },

            {
                label: "Métricas",
                href: "/metrics",
                icon: "bar-chart",
                expandable: true,
                children: [
                    { label: "KPIs", href: "/metrics/kpis" },
                    { label: "Análisis", href: "/metrics/analysis" },
                    { label: "Historial", href: "/metrics/history" },
                ],
            },
        ],
    },
    {
        title: "Administración",
        items: [
            {
                label: "Usuarios",
                href: "/users",
                icon: "users",
                expandable: true,
                children: [
                    { label: "Lista", href: "/users/list" },
                    { label: "Crear", href: "/users/create" },
                ],
            },
            {
                label: "Dispositivos",
                href: "/devices",
                icon: "monitor",
                expandable: true,
                children: [
                    { label: "Lista", href: "/devices/list" },
                    { label: "Agregar", href: "/devices/create" },
                ],
            },
            {
                label: "Departamentos",
                href: "/departments",
                icon: "users-group",
                expandable: true,
                children: [
                    { label: "Lista", href: "/departments/list" },
                    { label: "Crear", href: "/departments/create" },
                ],
            },
            {
                label: "Ubicaciones",
                href: "/locations",
                icon: "map-pin",
                expandable: true,
                children: [
                    { label: "Lista", href: "/locations/list" },
                    { label: "Crear", href: "/locations/create" },
                ],
            },
            {
                label: "Organización",
                href: "/organization",
                icon: "building",
                expandable: true,
                children: [
                    { label: "Usuarios", href: "/organization/users" },
                    { label: "Roles", href: "/organization/roles" },
                ],
            },
            {
                label: "Configuración",
                href: "/settings",
                icon: "settings",
                expandable: true,
                children: [
                    { label: "Empresa", href: "/settings/company" },
                    { label: "Seguridad", href: "/settings/security" },
                    { label: "Notificaciones", href: "/settings/notifications" },
                    { label: "Reglas", href: "/settings/rules" },
                    { label: "Catálogos", href: "/settings/catalogs" },
                    { label: "Tipos de catálogo", href: "/settings/catalog-types" },
                    { label: "Niveles de acceso", href: "/settings/access-levels" },
                ],
            },
        ],
    },
    {
        title: "Desarrollador",
        items: [
            {
                label: "Desarrollador",
                href: "/lab",
                icon: "code",
                expandable: true,
                children: [
                    { label: "G. Permisos y acceso", href: "/lab/permissions-check" },
                    { label: "Apariencia", href: "/lab/apariencia" },
                    // Oculta del menú (código preservado):
                    // { label: "Simulación de acceso", href: "/developer/access-simulation" },
                    // { label: "G. Alertas", href: "/developer/alerts" },
                    // { label: "G. Empty states", href: "/developer/empty-states" },
                    // { label: "G. Estados de pantalla", href: "/developer/screen-states" },
                    // { label: "G. Pantallas base", href: "/developer/base-screens" },
                ],
            },
        ],
    },
];

/**
 * Configuración del menú lateral ULTRA CLEAN (NASA Ultra Clean).
 * Solo Panel y Admin para Super Admin.
 */
export const sidebarConfigMinimal: SidebarGroup[] = [
    {
        title: "", // Sin título de grupo
        items: [
            {
                label: "Panel",
                href: "/panel",
                icon: "grid",
            },
            {
                label: "Sistema",
                href: "/settings",
                icon: "settings",
                expandable: true,
                children: [
                    { label: "Apariencia", href: "/settings" },
                    { label: "Futuro", href: "/settings/futuro" },
                ],
            },
        ],
    },
];

// Alias para mantener compatibilidad si es necesario
export const sidebarConfig = sidebarConfigFull;
