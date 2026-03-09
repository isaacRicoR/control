"use client";

import { FC } from "react";
import { DEV_UI_ENABLED } from "@core/flags/devFlags";
import { mockSession } from "@core/auth/mockSession";
import { PresetSelector } from "./PresetSelector";

export const DevPanel: FC = () => {
    if (!DEV_UI_ENABLED || mockSession.role !== "OWNER") {
        return null;
    }

    return <PresetSelector showDevPrefix />;
};
