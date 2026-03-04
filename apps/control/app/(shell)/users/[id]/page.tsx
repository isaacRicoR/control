import { Suspense } from "react";
import { UsersDetailClient } from "./UsersDetailClient";
import { DetailSkeleton } from "@ui/patterns/skeletons/DetailSkeleton";

export default async function UserProfilePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <Suspense fallback={<DetailSkeleton />}>
            <UsersDetailClient userId={id} />
        </Suspense>
    );
}
