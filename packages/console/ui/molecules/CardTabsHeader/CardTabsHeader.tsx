"use client";

import React, { useRef, useState, useEffect } from "react";
import { colors, spacing, typography } from "@tokens";
import { useTheme } from "@ui/context/ThemeProvider";

const ROW_HEIGHT = 55;

export type CardTabsHeaderTab = {
    label: string;
    value: string;
};

export type CardTabsHeaderProps = {
    tabs: CardTabsHeaderTab[];
    value: string;
    onChange: (value: string) => void;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    ariaLabel?: string;
};

export const CardTabsHeader: React.FC<CardTabsHeaderProps> = ({
    tabs,
    value,
    onChange,
    leftSlot,
    rightSlot,
    ariaLabel = "Tabs",
}) => {
    const { theme } = useTheme();
    const semantic = colors[theme].semantic;
    const tabsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeIndex = tabs.findIndex((t) => t.value === value);
        const currentTab = tabsRef.current[activeIndex];
        if (currentTab) {
            setUnderlineStyle({
                left: currentTab.offsetLeft,
                width: currentTab.offsetWidth,
            });
        }
    }, [value, tabs]);

    const tabBaseStyle: React.CSSProperties = {
        cursor: "pointer",
        height: ROW_HEIGHT,
        display: "flex",
        alignItems: "center",
        paddingLeft: spacing[12],
        paddingRight: spacing[12],
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        lineHeight: 1,
        position: "relative",
        transition: "color 0.2s ease",
    };

    const hasLeftSlot = leftSlot != null;
    const dividerHeight = Math.round(ROW_HEIGHT * 0.65);
    const hasRightSlot = rightSlot != null;

    return (
        <div
            role="tablist"
            aria-label={ariaLabel}
            style={{
                borderBottom: `1px solid ${semantic.border.subtle || semantic.border.default}`,
                marginTop: -spacing[24],
                marginBottom: spacing[24],
                position: "relative",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: ROW_HEIGHT,
                    gap: spacing[8],
                }}
            >
                {hasLeftSlot && (
                    <>
                        <div
                            style={{
                                height: ROW_HEIGHT,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                lineHeight: 0,
                            }}
                        >
                            {leftSlot}
                        </div>
                        <div
                            style={{
                                width: 1,
                                height: dividerHeight,
                                backgroundColor: semantic.border.subtle || semantic.border.default,
                                flexShrink: 0,
                            }}
                            aria-hidden
                        />
                    </>
                )}
                <div
                    style={{
                        position: "relative",
                        height: ROW_HEIGHT,
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    {tabs.map((tab, index) => {
                    const isActive = value === tab.value;
                    return (
                        <div
                            key={tab.value}
                            ref={(el) => {
                                tabsRef.current[index] = el;
                            }}
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => onChange(tab.value)}
                            style={{
                                ...tabBaseStyle,
                                color: isActive
                                    ? semantic.text.active
                                    : semantic.text.disabled,
                            }}
                        >
                            {tab.label}
                        </div>
                    );
                    })}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                            height: 2,
                            borderRadius: 2,
                            backgroundColor: semantic.text.active,
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            pointerEvents: "none",
                        }}
                        aria-hidden
                    />
                </div>
                {hasRightSlot && (
                    <div
                        style={{
                            height: ROW_HEIGHT,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: 0,
                        }}
                    >
                        {rightSlot}
                    </div>
                )}
            </div>
        </div>
    );
};
