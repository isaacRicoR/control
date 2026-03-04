"use client";

import React from 'react';
import { PageShell } from "@ui/containers/PageShell/PageShell";
import { Card } from "@ui/molecules/Card/Card";
import { Text } from "@ui/atoms/Text/Text";
import { spacing, typography, colors } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

/**
 * LoginPage
 * Placeholder para la pantalla de autenticación.
 * 
 * Sigue el patrón visual de títulos principales del proyecto:
 * - PageShell para el layout base y título de página.
 * - Etiquetas semánticas (h2) con tokens para títulos internos.
 */
export default function LoginPage() {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    return (
        <PageShell title="Login">
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: spacing[48] }}>
                <Card>
                    <div style={{ width: 320, textAlign: 'center' }}>
                        <h2 style={{
                            margin: 0,
                            marginBottom: spacing[16],
                            fontSize: typography.fontSize.xl,
                            fontWeight: typography.fontWeight.semibold,
                            color: semantic.text.active,
                            fontFamily: typography.fontFamily.primary
                        }}>
                            Login
                        </h2>
                        <Text variant="body">
                            Pantalla de autenticación pendiente.
                        </Text>
                    </div>
                </Card>
            </div>
        </PageShell>
    );
}
