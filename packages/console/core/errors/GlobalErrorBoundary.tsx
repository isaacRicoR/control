"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { ErrorState } from "@ui/containers/ErrorState/ErrorState";
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundaryInner extends Component<Props & { router: ReturnType<typeof useRouter> }, State> {
    constructor(props: Props & { router: ReturnType<typeof useRouter> }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (process.env.NODE_ENV === "development") {
            console.error("GlobalErrorBoundary caught an error:", error, errorInfo);
        }
        // TODO: In production, log to a service like Sentry or Datadog
    }

    handleRetry = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    handleGoToPanel = () => {
        this.setState({ hasError: false });
        this.props.router.push("/panel");
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ErrorState
                        title="Algo salió mal"
                        description="Intenta de nuevo. Si el problema continúa, vuelve al Panel."
                        onRetry={this.handleRetry}
                        retryLabel="Reintentar"
                        onAction={this.handleGoToPanel}
                        actionLabel="Ir al Panel"
                    />
                </div>
            );
        }

        return this.props.children;
    }
}

export const GlobalErrorBoundary: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    return <ErrorBoundaryInner router={router}>{children}</ErrorBoundaryInner>;
};
