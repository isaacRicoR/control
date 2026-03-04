import { AppShell } from "@ui/layouts/AppShell/AppShell";
import { PageShell } from "@ui/containers/PageShell";
import { Section } from "@ui/containers/Section";
import { Card } from "@ui/molecules/Card";

/**
 * Dashboard (pantalla real)
 * - UX/UI only
 * - Sin lógica
 * - Sin estados
 * - Usa PageShell + Section
 */
export default function DashboardPage() {
  return (
    <AppShell>
      <PageShell>
        <Section title="Dashboard">
          <Card subtitle="Estructura base (copy temporal)">
            Contenido temporal
          </Card>
        </Section>

        <Section title="Resumen">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>Bloque 1</Card>
            <Card>Bloque 2</Card>
            <Card>Bloque 3</Card>
          </div>
        </Section>

        <Section title="Actividad">
          <Card>Actividad reciente (placeholder)</Card>
        </Section>

        <Section title="Alertas">
          <Card>Alertas activas (placeholder)</Card>
        </Section>
      </PageShell>
    </AppShell>
  );
}
