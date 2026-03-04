"use client";

import React, { createContext, useContext, useLayoutEffect, useState, ReactNode, useCallback } from "react";

interface GlobalPreferencesContextType {
    lastPageSize: number;
    getPathPageSize: (path: string) => number | null;
    setPageSize: (path: string, size: number) => void;
}

const GlobalPreferencesContext = createContext<GlobalPreferencesContextType | undefined>(undefined);

const STORAGE_PREFIX = "control.preferences.pageSize:";
const LAST_PAGE_SIZE_KEY = "control.preferences.lastPageSize";

export const GlobalPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lastPageSize, setLastPageSize] = useState<number>(5);

    useLayoutEffect(() => {
        // Init lastPageSize from localStorage on mount
        try {
            const stored = window.localStorage.getItem(LAST_PAGE_SIZE_KEY);
            if (stored) {
                const parsed = parseInt(stored, 10);
                if (!isNaN(parsed)) {
                    setLastPageSize(parsed);
                }
            }
        } catch {
            // no-op
        }
    }, []);

    const getPathPageSize = useCallback((path: string): number | null => {
        try {
            const stored = window.localStorage.getItem(`${STORAGE_PREFIX}${path}`);
            if (stored) {
                const parsed = parseInt(stored, 10);
                return isNaN(parsed) ? null : parsed;
            }
        } catch {
            // no-op
        }
        return null;
    }, []);

    const setPageSize = useCallback((path: string, size: number) => {
        setLastPageSize(size);
        try {
            window.localStorage.setItem(LAST_PAGE_SIZE_KEY, String(size));
            window.localStorage.setItem(`${STORAGE_PREFIX}${path}`, String(size));
        } catch {
            // no-op
        }
    }, []);

    return (
        <GlobalPreferencesContext.Provider value={{ lastPageSize, getPathPageSize, setPageSize }}>
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
