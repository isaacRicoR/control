import { Suspense } from "react";
import { DevicesDetailClient } from "./DevicesDetailClient";
import { DetailSkeleton } from "@ui/patterns/skeletons/DetailSkeleton";

export default async function DeviceDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <Suspense fallback={<DetailSkeleton />}>
            <DevicesDetailClient deviceId={id} />
        </Suspense>
    );
}
