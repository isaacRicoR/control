"use client";

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { colors, spacing, radius, typography, shadows } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

type TooltipProps = {
    content: React.ReactNode;
    children: React.ReactElement;
    placement?: "top" | "bottom";
    delayMs?: number;
};

const GAP = 8;

export function Tooltip({ content, children, placement = "top", delayMs = 150 }: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;

    const updatePosition = useCallback(() => {
        const trigger = triggerRef.current;
        const tooltip = tooltipRef.current;
        if (!trigger || !tooltip || typeof window === "undefined") return;
        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const left = Math.max(
            GAP,
            Math.min(
                triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
                window.innerWidth - tooltipRect.width - GAP
            )
        );
        const top =
            placement === "top"
                ? triggerRect.top - tooltipRect.height - GAP
                : triggerRect.bottom + GAP;
        setPos({ top, left });
    }, [placement]);

    const show = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setVisible(true);
        }, delayMs);
    }, [delayMs]);

    const hide = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setVisible(false);
    }, []);

    useLayoutEffect(() => {
        if (visible) {
            updatePosition();
        }
    }, [visible, updatePosition]);

    const child = React.cloneElement(children, {
        ref: (el: HTMLElement | null) => {
            triggerRef.current = el;
            const originalRef = (children as React.ReactElement<{ ref?: unknown }>).ref;
            if (typeof originalRef === "function") originalRef(el);
            else if (originalRef) (originalRef as React.MutableRefObject<HTMLElement | null>).current = el;
        },
        onMouseEnter: (e: React.MouseEvent) => {
            show();
            children.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
            hide();
            children.props.onMouseLeave?.(e);
        },
    });

    const tooltipEl =
        visible &&
        typeof document !== "undefined" &&
        createPortal(
            <div
                ref={tooltipRef}
                role="tooltip"
                onMouseEnter={show}
                onMouseLeave={hide}
                style={{
                    position: "fixed",
                    top: pos.top,
                    left: pos.left,
                    padding: `${spacing[8]}px ${spacing[12]}px`,
                    backgroundColor: semantic.surface.default,
                    color: semantic.text.default,
                    border: `1px solid ${semantic.border.default}`,
                    borderRadius: radius.sm,
                    boxShadow: shadows.dropdown,
                    fontFamily: typography.fontFamily.primary,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.regular,
                    whiteSpace: "nowrap",
                    maxWidth: 280,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    zIndex: 9999,
                    pointerEvents: "none",
                }}
            >
                {content}
            </div>,
            document.body
        );

    return (
        <>
            {child}
            {tooltipEl}
        </>
    );
}
