import { SidebarGroup } from "@ui/layouts/Sidebar/Sidebar.types";

/**
 * hasModules — Helper para detectar si la consola tiene cartuchos de negocio activos.
 * 
 * Regla:
 * - Se basa únicamente en la configuración proporcionada.
 * - Se ignoran grupos de sistema (ej. "Desarrollador", "Lab").
 * - Se ignoran rutas base de la consola (/, #, /panel, /settings, /lab, /developer, /logout, /login).
 * - Criterio: Si existe AL MENOS 1 item cuyo href NO sea de sistema => true.
 * 
 * @param sidebarItems Configuración actual del Sidebar
 * @returns boolean
 */
export function hasModules(sidebarItems: SidebarGroup[]): boolean {
    if (!sidebarItems || sidebarItems.length === 0) return false;

    // Rutas de sistema que NO cuentan como módulos de negocio
    const systemPaths = [
        "/", 
        "/panel", 
        "/settings", 
        "/lab", 
        "/developer", 
        "/logout", 
        "/login",
        "/forbidden"
    ];

    const isSystemPath = (href?: string) => {
        if (!href || href === "#" || href === "") return true;
        return systemPaths.some(path => {
            if (path === "/") return href === "/";
            return href === path || href.startsWith(path + "/");
        });
    };

    // Filtramos grupos que no sean de sistema explícitamente por título
    const potentialBusinessGroups = sidebarItems.filter(group => 
        group.title !== "Desarrollador" && group.title !== "Lab" && group.title !== ""
    );

    // Buscamos al menos un item navegable real que no sea de sistema
    return potentialBusinessGroups.some(group => 
        group.items.some(item => {
            // Un item es real si tiene href y no es de sistema
            const isRealBusinessHref = item.href && !isSystemPath(item.href);
            
            // O si tiene hijos con hrefs de negocio
            const hasRealBusinessChildren = item.children && item.children.some(child => 
                child.href && !isSystemPath(child.href)
            );

            return isRealBusinessHref || hasRealBusinessChildren;
        })
    );
}
