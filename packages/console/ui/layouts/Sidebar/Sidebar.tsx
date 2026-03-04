"use client";

import React, { FC, useEffect, useState } from "react";
import { colors, layout, spacing, typography } from "@tokens";

import { SidebarGroup, SystemCompany } from "./Sidebar.types";
import { CompanySelector } from "./CompanySelector";
import { SidebarMenuGroup } from "./SidebarMenuGroup";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  items?: SidebarGroup[];
  appName?: string;
  companies?: SystemCompany[];
  createLabel?: string;
  hideSelector?: boolean;
}

/**
 * Sidebar Component
 * Layout vertical fijo que renderiza el menú de navegación.
 * Responsive: Desktop fijo, Mobile drawer.
 * Estilo: Refinado (Referencia visual).
 * Tipografía: Base Inter 14px/400, Titulos 12px/500, Active 14px/500. No bold.
 */
const STORAGE_KEY = "control.sidebar.expandedItems";

export const Sidebar: FC<SidebarProps> = ({
  items = [],
  appName = "",
  companies = [],
  createLabel = "",
  hideSelector = false,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTimeout(() => setExpandedItems(JSON.parse(raw)), 0);
      }
    } catch {
      // no-op
    }
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  useEffect(() => {
    // Solo persistir si ya estamos montados (evitar sobreescribir con {} inicial si fuera el caso,
    // aunque aquí ya iniciamos con el valor correcto en lazy init).
    if (isMounted) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expandedItems));
      } catch {
        // no-op
      }
    }
  }, [expandedItems, isMounted]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Styles (Tokens only)
  const containerStyle: React.CSSProperties = {
    width: layout.sidebarWidth.expanded,
    height: "100vh", // Ocupa toda la altura
    backgroundColor: colors.semantic.surface.default, // Fondo semántico
    display: "flex",
    flexDirection: "column",
    padding: `0 ${spacing[12]}px ${spacing[24]}px`, // Reduced from 16 to 12 per request
    boxSizing: "border-box",
    position: "fixed", // Fijo a la izquierda
    top: 0,
    left: 0,
    zIndex: 100, // Asegurar que esté por encima
    fontFamily: typography.fontFamily.primary, // Asegurar fuente base
    visibility: isMounted ? "visible" : "hidden", // Avoid flash of collapsed state
  };



  const menuContainerStyle: React.CSSProperties = {
    flex: 1, // Ocupa el espacio restante
    display: "flex",
    flexDirection: "column",
    gap: spacing[16], // Reduced spacing from 24 to 16
    overflowY: "auto", // Scroll en la navegación
    scrollbarWidth: "none", // Firefox: ocultar barra
    msOverflowStyle: "none", // IE/Edge: ocultar barra
    paddingTop: hideSelector ? spacing[8] : spacing[24], // Less space in NASA mode
    paddingBottom: spacing[32], // Espacio final para que no pegue con el footer
  } as React.CSSProperties;







  return (
    <>
      <style>
        {`
          .sidebar-scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <aside style={containerStyle}>
        {/* 1. Header Superior */}
        <SidebarHeader appName={appName} isNASA={hideSelector} />

        {/* 2. Selector de Empresa (Unified Clickable Row) */}
        {!hideSelector && (
          <>
            <CompanySelector companies={companies} createLabel={createLabel} />

            {/* Divider Separator */}
            <div style={{
              height: 1,
              backgroundColor: colors.semantic.border.default,
              marginBottom: 0, // Removed margin for correct scroll clipping
              width: "100%",
              flexShrink: 0
            }} />
          </>
        )}

        {/* 3. Menú Principal */}
        <nav style={menuContainerStyle} className="sidebar-scroll-container">
          {items.map((group: SidebarGroup, groupIndex: number) => (
            <SidebarMenuGroup
              key={groupIndex}
              group={group}
              expandedItems={expandedItems}
              isMounted={isMounted}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              toggleExpand={toggleExpand}
              hideGroupTitle={hideSelector}
            />
          ))}
        </nav>

        {/* 5. Footer -> log-out */}
        <SidebarFooter />
      </aside>
    </>
  );
};
