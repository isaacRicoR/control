import { Suspense } from "react";
import { DevicesListClient } from "./DevicesListClient";
import { Spinner } from "@ui/atoms/Spinner/Spinner";

export default function DeviceListPage() {
    return (
        <Suspense fallback={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: 300 }}>
                <Spinner size={32} />
            </div>
        }>
            <DevicesListClient />
        </Suspense>
    );
}
