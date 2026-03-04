import { UserPreferences, UserPreferencesRepository } from "./preferences.types";

/**
 * RemotePreferencesRepository (Placeholder)
 * 
 * Esta implementación está lista para ser conectada con el backend.
 * Por ahora es un cascarón que facilitará la sincronización entre dispositivos en el futuro.
 */
export class RemotePreferencesRepository implements UserPreferencesRepository {
    async getPreferences(): Promise<UserPreferences | null> {
        // TODO: Implementar fetch a API backend
        // return request<UserPreferences>('/me/preferences');
        return null;
    }

    async savePreferences(preferences: UserPreferences): Promise<void> {
        // TODO: Implementar POST/PUT a API backend
        // console.log('[RemotePreferencesRepository] Sincronizando con backend...', preferences);
    }
}
