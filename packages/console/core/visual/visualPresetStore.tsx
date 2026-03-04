"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type VisualPreset = "control" | "security";

interface VisualPresetContextType {
    currentPreset: VisualPreset;
    setPreset: (preset: VisualPreset) => void;
}

const VisualPresetContext = createContext<VisualPresetContextType | undefined>(undefined);

const STORAGE_KEY = "control.visual.preset";

export const VisualPresetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPreset, setCurrentPreset] = useState<VisualPreset>("control");

    useEffect(() => {
        // Client-side visual preset init
        try {
            if (typeof window !== "undefined" && window.localStorage) {
                const stored = window.localStorage.getItem(STORAGE_KEY);
                if (stored && ["control", "security"].includes(stored)) {
                    setCurrentPreset(stored as VisualPreset);
                    document.documentElement.setAttribute("data-brand", stored);
                } else {
                    // Default to control if nothing stored
                    document.documentElement.setAttribute("data-brand", "control");
                }
            }
        } catch {
            // no-op
        }
    }, [setCurrentPreset]);

    const setPreset = (preset: VisualPreset) => {
        setCurrentPreset(preset);
        try {
            window.localStorage.setItem(STORAGE_KEY, preset);
            document.documentElement.setAttribute("data-brand", preset);
        } catch {
            // no-op
        }
    };

    return (
        <VisualPresetContext.Provider value={{ currentPreset, setPreset }}>
            {children}
        </VisualPresetContext.Provider>
    );
};

export const useVisualPreset = () => {
    const context = useContext(VisualPresetContext);
    if (!context) {
        throw new Error("useVisualPreset must be used within a VisualPresetProvider");
    }
    return context;
};
