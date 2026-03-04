import React from "react";
import { ToastProvider } from "@core/toast/ToastProvider";
import { ToastStack } from "@ui/containers/ToastStack/ToastStack";

export default function UIKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      {children}
      <ToastStack />
    </ToastProvider>
  );
}
