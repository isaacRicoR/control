import { Suspense } from "react";
import { UsersListClient } from "./UsersListClient";
import { Spinner } from "@ui/atoms/Spinner/Spinner";

export default function UsersListPage() {
    return (
        <Suspense fallback={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: 300 }}>
                <Spinner size={32} />
            </div>
        }>
            <UsersListClient />
        </Suspense>
    );
}
