"use client";

import React, { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@ui/context/ThemeProvider";
import { colors, spacing, typography, radius } from "@tokens";
import { Text } from "../../atoms/Text/Text";
import { SidebarGroup } from "./Sidebar.types";
import { SidebarItem } from "./SidebarItem";

interface SidebarMenuGroupProps {
    group: SidebarGroup;
    expandedItems: Record<string, boolean>;
    isMounted: boolean;
    hoveredItem: string | null;
    setHoveredItem: (item: string | null) => void;
    toggleExpand: (label: string) => void;
    hideGroupTitle?: boolean;
}

export const SidebarMenuGroup: FC<SidebarMenuGroupProps> = ({
    group,
    expandedItems,
    isMounted,
    hoveredItem,
    setHoveredItem,
    toggleExpand,
    hideGroupTitle = false,
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const { theme } = useTheme();

    const groupTitleStyle: React.CSSProperties = {
        textTransform: "uppercase",
        color: colors.semantic.sidebar?.groupLabel || colors.semantic.text.disabled,
        fontSize: typography.fontSize.xs, // 12px
        fontWeight: typography.fontWeight.medium, // 500
        marginBottom: spacing[12], // Un poco de aire antes de la lista
        paddingLeft: spacing[12],
        letterSpacing: "0.05em",
        opacity: 0.8, // Sutil
    };

    return (
        <div>
            {group.title && group.title.trim() !== "" && !hideGroupTitle && (
                <div style={groupTitleStyle}>{group.title}</div>
            )}
            <div style={{ cursor: "default" }}>
                {group.items.map((item, itemIndex) => {
                    // hasSelectedChild: algún hijo coincide con pathname (incl. sub-rutas como /users/123)
                    const hasSelectedChild = item.href !== "/" && pathname.startsWith(item.href) && !!item.children?.length;

                    // isExpanded: abierto por toggle O porque un hijo está activo
                    const isExpanded = isMounted && (expandedItems[item.label] || hasSelectedChild);

                    // isSelectedLeaf: SOLO si href === pathname Y es leaf (sin children)
                    const isSelectedLeaf = item.href === pathname && (!item.children || item.children.length === 0);

                    return (
                        <React.Fragment key={itemIndex}>
                            <SidebarItem
                                label={item.label}
                                icon={item.icon ?? ""}
                                isSelectedLeaf={isSelectedLeaf}
                                hasSelectedChild={hasSelectedChild}
                                disabled={item.disabled}
                                expandable={item.expandable}
                                isExpanded={isExpanded}
                                isHovered={hoveredItem === item.label}
                                onClick={() => {
                                    if (item.expandable) {
                                        if (!hasSelectedChild) {
                                            toggleExpand(item.label);
                                        }
                                    } else if (item.href) {
                                        router.push(item.href);
                                    }
                                }}
                                onHover={(hovered) => setHoveredItem(hovered ? item.label : null)}
                            />

                            {/* Render Children (Submenu) - Animated */}
                            {item.children && (
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: isExpanded ? "1fr" : "0fr",
                                        opacity: isExpanded ? 1 : 0,
                                        marginTop: isExpanded ? spacing[4] : 0,
                                        marginBottom: isExpanded ? spacing[8] : 0,
                                        transition: isMounted ? "grid-template-rows 0.3s ease, opacity 0.3s ease, margin 0.3s ease" : "none",
                                        marginLeft: 22, // Keep alignment fixed
                                    }}
                                >
                                    <div style={{ overflow: "hidden" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                // Margins handled by parent wrapper for smooth animation
                                            }}
                                        >
                                            {item.children.map((child, childIndex) => {
                                                const isChildHovered = hoveredItem === child.href; // Use HREF for uniqueness
                                                const isChildActive = child.href === pathname;
                                                const isLast = childIndex === item.children!.length - 1;

                                                // Virtual Sub-Item Logic
                                                // 1. Detect if we are in a detail view for this section
                                                //    - Path must start with parent href (e.g. /users/)
                                                //    - Path must NOT be one of the known children (list/create)
                                                //    - Current child must be the "List" item (where we append the breadcrumb)

                                                const isDetailView = pathname.startsWith(item.href + "/") &&
                                                    !item.children?.some(c => c.href === pathname);

                                                const isTargetList = child.href.endsWith("/list");
                                                const showVirtualSubItem = isDetailView && isTargetList;

                                                // Determine text to show (Perfil for Users, Detalle for Devices/Others)
                                                const virtualLabel = item.href === "/users" ? "Perfil" : "Detalle";

                                                // Dispositivos section in LIGHT uses device-specific colors (#DBF6E5, #118D57)
                                                const useDevicesTheme = theme === "light" && item.href === "/devices";
                                                const childActiveBg = (isChildActive || showVirtualSubItem)
                                                    ? (useDevicesTheme ? "var(--semantic-nav-devices-active-bg)" : colors.semantic.surface.selected)
                                                    : (isChildHovered ? colors.semantic.surface.hover : "transparent");
                                                const childActiveFg = (isChildActive || showVirtualSubItem)
                                                    ? (useDevicesTheme ? "var(--semantic-nav-devices-active-fg)" : colors.semantic.primary.default)
                                                    : (isChildHovered ? colors.semantic.text.active : colors.semantic.text.default);

                                                return (
                                                    <div
                                                        key={childIndex}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            position: "relative", // For absolute lines
                                                            height: 36, // Slightly compact subitems
                                                        }}
                                                    >
                                                        {/* 1. Vertical Line Segment (The Tree Trunk) */}
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 0,
                                                                // If last item, line stops at 50% (creating L shape). Else full height.
                                                                height: isLast ? "50%" : "100%",
                                                                width: 1,
                                                                backgroundColor: colors.semantic.border.default,
                                                            }}
                                                        />

                                                        {/* 2. Horizontal Line Segment (The Branch) */}
                                                        <div
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: "50%",
                                                                width: 12, // Connector length
                                                                height: 1,
                                                                backgroundColor: colors.semantic.border.default,
                                                            }}
                                                        />

                                                        {/* Content Block (Interactive) - Separated from lines */}
                                                        <div
                                                            role="button"
                                                            onClick={() => router.push(child.href)}
                                                            onMouseEnter={() => setHoveredItem(child.href)} // Set HREF
                                                            onMouseLeave={() => setHoveredItem(null)}
                                                            style={{
                                                                marginLeft: 20, // Gap: 12px (line) + 8px (spacer)
                                                                flex: 1,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                height: "100%",
                                                                paddingLeft: spacing[8],
                                                                cursor: "pointer",
                                                                backgroundColor: childActiveBg,
                                                                borderRadius: radius["md"],
                                                                transition: "background-color 0.2s ease",
                                                            }}
                                                        >
                                                            <Text
                                                                style={{
                                                                    fontSize: typography.fontSize.sm,
                                                                    fontWeight: typography.fontWeight.regular,
                                                                    color: childActiveFg,
                                                                    opacity: (isChildActive || isChildHovered) ? 1 : 0.8,
                                                                    transition: "color 0.2s ease, opacity 0.2s ease",
                                                                }}
                                                            >
                                                                {showVirtualSubItem ? (
                                                                    <>
                                                                        {child.label}
                                                                        <span style={{ opacity: 0.4, margin: "0 6px" }}>•</span>
                                                                        <span style={{ color: childActiveFg, fontWeight: typography.fontWeight.medium }}>{virtualLabel}</span>
                                                                    </>
                                                                ) : (
                                                                    child.label
                                                                )}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </React.Fragment>
                    );
                })}
            </div>
        </div >
    );
};
