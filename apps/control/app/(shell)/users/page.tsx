import { redirect } from "next/navigation";

/**
 * Usuarios Index — Redirección automática a la lista oficial para evitar 404.
 */
export default function UsersIndexPage() {
    redirect("/users/list");
}
