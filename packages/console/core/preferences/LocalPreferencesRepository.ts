import { UserPreferences, UserPreferencesRepository } from "./preferences.types";

const NEW_STORAGE_KEY = "control.user.preferences";
const LEGACY_LAST_PAGE_SIZE_KEY = "control.preferences.lastPageSize";
const LEGACY_PAGE_SIZE_PREFIX = "control.preferences.pageSize:";

export class LocalPreferencesRepository implements UserPreferencesRepository {
    async getPreferences(): Promise<UserPreferences | null> {
        if (typeof window === "undefined" || !window.localStorage) return null;

        try {
            // Try new consolidated key first
            const stored = window.localStorage.getItem(NEW_STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored) as UserPreferences;
            }

            // Fallback: Migrate from legacy keys if they exist
            const legacyLast = window.localStorage.getItem(LEGACY_LAST_PAGE_SIZE_KEY);
            if (legacyLast) {
                const preferences: UserPreferences = {
                    tables: {},
                    lastPageSize: parseInt(legacyLast, 10) || 5
                };

                // Scan for per-path legacy keys
                const storageLength = window.localStorage.length;
                for (let i = 0; i < storageLength; i++) {
                    const key = window.localStorage.key(i);
                    if (key && key.startsWith(LEGACY_PAGE_SIZE_PREFIX)) {
                        const path = key.replace(LEGACY_PAGE_SIZE_PREFIX, "");
                        const val = window.localStorage.getItem(key);
                        if (val) {
                            preferences.tables[path] = { pageSize: parseInt(val, 10) || 5 };
                        }
                    }
                }

                // Save consolidated and return
                await this.savePreferences(preferences);
                return preferences;
            }
        } catch (error) {
            console.error("[LocalPreferencesRepository] Error reading preferences:", error);
        }

        return null;
    }

    async savePreferences(preferences: UserPreferences): Promise<void> {
        if (typeof window === "undefined" || !window.localStorage) return;

        try {
            window.localStorage.setItem(NEW_STORAGE_KEY, JSON.stringify(preferences));
        } catch (error) {
            console.error("[LocalPreferencesRepository] Error saving preferences:", error);
        }
    }
}
