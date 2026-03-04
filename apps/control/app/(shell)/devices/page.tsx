import { redirect } from "next/navigation";

/**
 * Dispositivos Index — Redirección automática a la lista oficial para evitar 404.
 */
export default function DevicesIndexPage() {
    redirect("/devices/list");
}
