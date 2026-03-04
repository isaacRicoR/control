"use client";

import React, { FC } from "react";
import { useToast } from "@core/toast/useToast";
import { ToastItem } from "./ToastItem";
import "./ToastStack.css";

export const ToastStack: FC = () => {
    const { toasts, hideToast } = useToast();

    if (toasts.length === 0) return null;

    return (
        <div className="toast-stack">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={hideToast} />
            ))}
        </div>
    );
};
