import { requireAuth } from "@core/auth/routeGuard";

export const dynamic = 'force-dynamic';

export default async function DevicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireAuth({ action: 'view', entity: 'devices' });

    return <>{children}</>;
}
