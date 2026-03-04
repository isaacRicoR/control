"use client";

import type { FC, ReactNode } from "react";
import { colors, layout, spacing, typography } from "@tokens";
import { SidebarGroup, SystemCompany } from "../Sidebar/Sidebar.types";
import { Sidebar } from "../Sidebar/Sidebar";
import { TopBar } from "../TopBar/TopBar.client";
import { hasModules } from "@core/navigation/hasModules";
import { GlobalErrorBoundary } from "@core/errors/GlobalErrorBoundary";

type AppShellProps = {
  children: ReactNode;
  sidebarItems?: SidebarGroup[];
  appName?: string;
  companies?: SystemCompany[];
  createLabel?: string;
  hideSelector?: boolean;
};

/**
 * AppShell
 * Layout base de la app (Sidebar fija + contenido)
 * UX/UI only — sin lógica de negocio
 *
 * CLAVE:
 * - Scroll del BODY (no crear scroll containers).
 * - TopBar sticky dentro del flujo correcto.
 * - NO minHeight: 100vh
 * - NO position: relative en el wrapper del contenido
 */
export const AppShell: FC<AppShellProps> = ({
  children,
  sidebarItems = [],
  appName,
  companies,
  createLabel,
  hideSelector,
}) => {
  const semantic = colors.semantic;
  const modulesActive = hasModules(sidebarItems);

  return (
    <GlobalErrorBoundary>
      <div
        style={{
          minHeight: "100vh",
          background: semantic.background.default,
          color: semantic.text.default,
          fontFamily: typography.fontFamily.primary,
        }}
      >
        {/* SIDEBAR — fixed */}
        <Sidebar
          items={sidebarItems}
          appName={appName}
          companies={companies}
          createLabel={createLabel}
          hideSelector={hideSelector}
        />

        {/* CONTENT WRAPPER — empujado por el ancho de la sidebar */}
        <div
          style={{
            marginLeft: layout.sidebarWidth.expanded,
            paddingTop: layout.appBarHeight, // Prevent content from hiding behind fixed header
            display: "flex", // Keeping flex as per last user state or ensuring it's what we want? User said "No cambies la estructura base". I will just add padding.
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* TOP BAR GLOBAL — sticky real */}
          <TopBar hideDevPanel={!modulesActive} />

          {/* MAIN CONTENT */}
          <main
            style={{
              padding: spacing[24],
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </GlobalErrorBoundary>
  );
};

