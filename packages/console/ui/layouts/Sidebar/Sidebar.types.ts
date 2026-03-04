export type SidebarItem = {
  label: string;
  icon?: string; // Referencia visual, aunque usemos Icon genérico por ahora
  href: string; // Para navegación futura
  active?: boolean; // Estado visual activo
  disabled?: boolean; // Estado visual deshabilitado
  expandable?: boolean; // Si tiene hijos o no (visual caret)
  children?: SidebarItem[]; // Submenú opcional
};

export type SidebarGroup = {
  title: string;
  items: SidebarItem[];
};

export interface SystemCompany {
  name: string;
  label: string; // Avatar text
  count: string;
  active: boolean;
  color: string;
}
