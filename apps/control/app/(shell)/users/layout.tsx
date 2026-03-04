import { requireAuth } from "@core/auth/routeGuard";

export const dynamic = 'force-dynamic';

export default async function UsersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireAuth({ action: 'view', entity: 'users' });

    return <>{children}</>;
}
