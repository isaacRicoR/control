export type TablePreference = {
    pageSize: number;
};

export type UserPreferences = {
    tables: Record<string, TablePreference>;
    lastPageSize?: number;
};

export interface UserPreferencesRepository {
    getPreferences(): Promise<UserPreferences | null>;
    savePreferences(preferences: UserPreferences): Promise<void>;
}
