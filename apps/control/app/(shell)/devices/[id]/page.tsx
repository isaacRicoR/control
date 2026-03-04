import { DevicesDetailClient } from "./DevicesDetailClient";

export default async function DeviceDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return <DevicesDetailClient deviceId={id} />;
}
