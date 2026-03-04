import { UsersDetailClient } from "./UsersDetailClient";

export default async function UserProfilePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <UsersDetailClient userId={id} />;
}
