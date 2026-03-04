"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@core/toast/useToast";
import { normalizeConnectorError } from "@core/connector/errorNormalizer";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { DeviceForm, DeviceFormData } from "../components/DeviceForm";
import { colors } from "@tokens";

export default function CreateDevicePage() {
    const { showToast } = useToast();
    const semantic = colors.semantic; // Changed from colors.dark.semantic to colors.semantic as per task 1
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");

    const handleSubmit = async (formData: DeviceFormData) => {
        setGlobalError("");
        setLoading(true);

        try {
            // Mock submission for now
            console.log("Submitting Device Data:", formData);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Success redirect
            router.push("/devices/list");
        } catch (err) {
            const normalized = normalizeConnectorError(err);
            const toast = normalizedErrorToToast(normalized);
            showToast(toast);
            
            setGlobalError(err instanceof Error ? err.message : "Error al crear dispositivo");
            setLoading(false);
        }
    };

    return (
        <PageShell
            title="Agregar dispositivo"
            breadcrumbs={
                <>
                    <span>Panel</span>
                    <span>›</span>
                    <span>Dispositivos</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Agregar</span>
                </>
            }
            headerStyle={{ borderBottom: "none" }}
        >
            <Card noPadding elevated>
                <DeviceForm
                    mode="create"
                    onSubmit={handleSubmit}
                    onCancel={() => router.push("/devices/list")}
                    loading={loading}
                    error={globalError}
                />
            </Card>
        </PageShell>
    );
}
