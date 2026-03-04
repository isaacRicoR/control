"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { request } from "@core/connector/httpClient";
import { useToast } from "@core/toast/useToast";
import { normalizedErrorToToast } from "@core/toast/errorToastHelper";
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { UserForm, UserFormData } from "../components/UserForm";
import { colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

export default function CreateUserPage() {
    const { theme } = useTheme();
    const { showToast } = useToast();
    const semantic = colors[theme].semantic;
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");

    const handleSubmit = async (formData: UserFormData) => {
        setGlobalError("");
        setLoading(true);

        try {
            const nameParts = [formData.nombre, formData.apellido, formData.segundoApellido].filter(Boolean);
            const fullName = nameParts.join(" ");

            const response = await request("/users", {
                method: "POST",
                body: JSON.stringify({
                    name: fullName,
                    email: formData.email.trim(),
                    phone: formData.telefono.trim(),
                    role: formData.rol.trim(),
                    department: formData.departamento,
                    status: formData.estadoInicial,
                }),
            });

            if (!response.ok) {
                const toast = normalizedErrorToToast(response.error!);
                showToast(toast);
                
                setGlobalError(response.error!.message);
                setLoading(false);
                return;
            }

            router.push("/users/list");
        } catch (err) {
            console.error('[CreateUserPage] Unexpected error:', err);
            setGlobalError("Error inesperado al crear usuario");
            setLoading(false);
        }
    };

    return (
        <PageShell
            title="Crear usuario"
            breadcrumbs={
                <>
                    <span>Panel</span>
                    <span>›</span>
                    <span>Usuarios</span>
                    <span>›</span>
                    <span style={{ color: semantic.text.active }}>Crear</span>
                </>
            }
            headerStyle={{ borderBottom: "none" }}
        >
            <Card noPadding elevated>
                <UserForm
                    mode="create"
                    onSubmit={handleSubmit}
                    onCancel={() => router.push("/users/list")}
                    loading={loading}
                    error={globalError}
                />
            </Card>
        </PageShell>
    );
}
