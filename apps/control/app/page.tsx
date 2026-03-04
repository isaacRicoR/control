import { redirect } from "next/navigation";
import { hasModules } from "@core/navigation/hasModules";
import { sidebarConfigFull } from "@core/navigation/sidebar.config";

export default function Home() {
    const modulesActive = hasModules(sidebarConfigFull);

    if (modulesActive) {
        redirect("/dashboard");
    }

    // Si no hay módulos instalados, el punto de entrada es /panel
    redirect("/panel");
}
