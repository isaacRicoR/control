/**
 * Token options for component overrides.
 * Solo referencias a tokens existentes (base + estados).
 * NO crea tokens nuevos.
 */

export type TokenOption = { value: string; label: string };

/** Rutas de tokens semánticos disponibles para mapeo de componentes */
const SEMANTIC_TOKEN_PATHS: { path: string; label: string }[] = [
    { path: "primary.default", label: "Acento (primary)" },
    { path: "primary.hover", label: "Acento hover" },
    { path: "primary.disabled", label: "Acento disabled" },
    { path: "surface.default", label: "Superficie" },
    { path: "surface.hover", label: "Superficie hover" },
    { path: "surface.card", label: "Superficie card" },
    { path: "surface.selected", label: "Superficie seleccionada" },
    { path: "surface.disabled", label: "Superficie disabled" },
    { path: "background.default", label: "Fondo" },
    { path: "border.default", label: "Borde" },
    { path: "border.subtle", label: "Borde sutil" },
    { path: "border.focus", label: "Borde focus" },
    { path: "border.disabled", label: "Borde disabled" },
    { path: "text.default", label: "Texto" },
    { path: "text.muted", label: "Texto muted" },
    { path: "text.active", label: "Texto activo" },
    { path: "text.hover", label: "Texto hover" },
    { path: "text.onSolid", label: "Texto on solid" },
    { path: "text.disabled", label: "Texto disabled" },
    { path: "danger.default", label: "Peligro" },
    { path: "danger.hover", label: "Peligro hover" },
    { path: "success.default", label: "Éxito" },
    { path: "success.hover", label: "Éxito hover" },
    { path: "warning.default", label: "Advertencia" },
    { path: "warning.hover", label: "Advertencia hover" },
    { path: "info.default", label: "Info" },
    { path: "info.hover", label: "Info hover" },
    { path: "secondary.default", label: "Secundario" },
    { path: "secondary.hover", label: "Secundario hover" },
    { path: "elevated.default", label: "Elevado" },
    { path: "elevated.hover", label: "Elevado hover" },
];

export const COMPONENT_TOKEN_OPTIONS: TokenOption[] = SEMANTIC_TOKEN_PATHS.map(({ path, label }) => ({
    value: path,
    label,
}));

/** Resuelve una ruta de token (ej. "primary.default") al valor de color desde el palette semántico */
export function resolveTokenPath(semantic: Record<string, unknown>, path: string): string {
    const parts = path.split(".");
    let current: unknown = semantic;
    for (const p of parts) {
        if (current == null || typeof current !== "object") return "";
        current = (current as Record<string, unknown>)[p];
    }
    return typeof current === "string" ? current : "";
}
