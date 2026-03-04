"use client";

import React from 'react';
import { AccessDeniedState } from "@ui/containers/AccessDeniedState/AccessDeniedState";
import { PageShell } from "@ui/containers/PageShell/PageShell";

export default function ForbiddenPage() {
    return (
        <PageShell title="Acceso Denegado">
            <AccessDeniedState />
        </PageShell>
    );
}
