import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { AppShell } from "@ui/layouts/AppShell/AppShell";
import { sidebarConfigFull, sidebarConfigMinimal, appName, mockCompanies, createAccountLabel } from "@core/navigation/sidebar.config";
import { hasModules } from "@core/navigation/hasModules";
import { ToastProvider } from "@core/toast/ToastProvider";
import { ToastStack } from "@ui/containers/ToastStack/ToastStack";
import { ThemeProvider } from "@ui/context/ThemeProvider";

export default async function ShellLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "";

    // ─── Detección de CartuchoZero NASA Ultra Clean ───
    const modulesActive = hasModules(sidebarConfigFull);
    const items = modulesActive ? sidebarConfigFull : sidebarConfigMinimal;
    
    // Si no hay módulos instalados, restringimos a rutas de consola/diagnóstico
    if (!modulesActive) {
        const isAllowed = 
            pathname === "/" || 
            pathname === "/panel" || 
            pathname.startsWith("/lab") || 
            pathname.startsWith("/settings") || 
            pathname.startsWith("/developer") || 
            pathname === "/logout" ||
            pathname === "/login";
            
        if (!isAllowed) {
            // Rutas de negocio (ej. /dashboard) redirigen a /panel
            redirect("/panel");
        }
    }

    return (
        <ThemeProvider>
            <ToastProvider>
                <AppShell
                    sidebarItems={items}
                    appName={appName}
                    companies={mockCompanies}
                    createLabel={createAccountLabel}
                    hideSelector={!modulesActive}
                >
                    {children}
                </AppShell>
                <ToastStack />
            </ToastProvider>
        </ThemeProvider>
    );
}
