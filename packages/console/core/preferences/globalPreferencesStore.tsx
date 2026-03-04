"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from "react";
import { UserPreferences, UserPreferencesRepository } from "./preferences.types";
import { LocalPreferencesRepository } from "./LocalPreferencesRepository";

interface GlobalPreferencesContextType {
    lastPageSize: number;
    getPathPageSize: (path: string) => number | null;
    setPageSize: (path: string, size: number) => void;
}

const GlobalPreferencesContext = createContext<GlobalPreferencesContextType | undefined>(undefined);

export const GlobalPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<UserPreferences>({
        tables: {},
        lastPageSize: 5
    });

    // Repository state to ensure it only exists on client
    const [repository, setRepository] = useState<UserPreferencesRepository | null>(null);

    useEffect(() => {
        setRepository(new LocalPreferencesRepository());
    }, []);

    useEffect(() => {
        if (!repository) return;

        const load = async () => {
            try {
                const stored = await repository.getPreferences();
                if (stored) {
                    setPreferences(stored);
                }
            } catch (error) {
                console.error("[GlobalPreferencesProvider] Failed to load preferences:", error);
            }
        };
        load();
    }, [repository]);

    const getPathPageSize = useCallback((path: string): number | null => {
        return preferences.tables[path]?.pageSize ?? null;
    }, [preferences.tables]);

    const setPageSize = useCallback(async (path: string, size: number) => {
        const nextPreferences: UserPreferences = {
            ...preferences,
            lastPageSize: size,
            tables: {
                ...preferences.tables,
                [path]: { pageSize: size }
            }
        };

        // UI optimistic update
        setPreferences(nextPreferences);

        // Persistence
        if (repository) {
            try {
                await repository.savePreferences(nextPreferences);
            } catch (error) {
                console.error("[GlobalPreferencesProvider] Failed to save preferences:", error);
            }
        }
    }, [preferences, repository]);

    const value = useMemo(() => ({
        lastPageSize: preferences.lastPageSize || 5,
        getPathPageSize,
        setPageSize
    }), [preferences.lastPageSize, getPathPageSize, setPageSize]);

    return (
        <GlobalPreferencesContext.Provider value={value}>
            {children}
        </GlobalPreferencesContext.Provider>
    );
};

export const useGlobalPreferences = () => {
    const context = useContext(GlobalPreferencesContext);
    if (!context) {
        throw new Error("useGlobalPreferences must be used within a GlobalPreferencesProvider");
    }
    return context;
};
