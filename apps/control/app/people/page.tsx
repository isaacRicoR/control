import { AppShell } from "@ui/layouts/AppShell/AppShell";
import { PageShell } from "@ui/containers/PageShell";
import { PeopleClient } from "./PeopleClient";

/**
 * People (pantalla real)
 * - Server Component Wrapper
 */
export default function PeoplePage() {
  return (
    <AppShell>
      <PageShell>
        <PeopleClient />
      </PageShell>
    </AppShell>
  );
}
