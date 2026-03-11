"use client";

import React, { createContext, useContext, useState } from "react";

export type ComponentsEditMode = "dark" | "light";

type ComponentsEditModeContextType = {
    editMode: ComponentsEditMode;
    setEditMode: (m: ComponentsEditMode) => void;
};

const ComponentsEditModeContext = createContext<ComponentsEditModeContextType | undefined>(undefined);

export function ComponentsEditModeProvider({ children }: { children: React.ReactNode }) {
    const [editMode, setEditMode] = useState<ComponentsEditMode>("dark");
    return (
        <ComponentsEditModeContext.Provider value={{ editMode, setEditMode }}>
            {children}
        </ComponentsEditModeContext.Provider>
    );
}

export function useComponentsEditMode(): ComponentsEditModeContextType | undefined {
    return useContext(ComponentsEditModeContext);
}
