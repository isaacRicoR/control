
export type ImpactLevel = "LOW" | "MEDIUM" | "HIGH";
export type EditMode = "editable" | "locked" | "conditional";

export interface FieldImpact {
    identityImpact: ImpactLevel;
    securityImpact: ImpactLevel;
    relationalImpact: ImpactLevel;
    auditImpact: ImpactLevel;
    businessCritical: ImpactLevel;
}

export function getFieldEditMode(impact: FieldImpact): EditMode {
    const levels = Object.values(impact);

    if (levels.includes("HIGH")) {
        return "locked";
    }

    if (levels.includes("MEDIUM")) {
        return "conditional";
    }

    return "editable";
}
