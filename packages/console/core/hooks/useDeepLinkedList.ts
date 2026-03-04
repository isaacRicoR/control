"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

/**
 * Hook universal de Consola para gestión de Deep Linking en listas.
 * Sincroniza estado local con URL (tab, search, filtros, paginación).
 */
export interface DeepLinkedListConfig<TFilters extends Record<string, string>> {
    defaultTab?: string;
    defaultSearch?: string;
    defaultPage?: number;
    defaultPageSize?: number;
    filtersConfig?: TFilters;
}

export function useDeepLinkedList<TFilters extends Record<string, string>>({
    defaultTab = "Todos",
    defaultSearch = "",
    defaultPage = 1,
    defaultPageSize = 20,
    filtersConfig = {} as TFilters,
}: DeepLinkedListConfig<TFilters> = {}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // ─── Estado Interno Inicializado desde URL ───────────────────────────────
    const [activeTab, setActiveTab] = useState(() => searchParams.get("tab") ?? defaultTab);
    const [searchQuery, setSearchQuery] = useState(() => searchParams.get("q") ?? defaultSearch);
    const [page, setPage] = useState(() => Number(searchParams.get("page")) || defaultPage);
    const [pageSize, setPageSize] = useState(() => Number(searchParams.get("pageSize")) || defaultPageSize);

    // Filtros dinámicos basados en la configuración
    const [filters, setFilters] = useState<TFilters>(() => {
        const initialFilters = { ...filtersConfig };
        Object.keys(filtersConfig).forEach((key) => {
            const val = searchParams.get(key);
            if (val) (initialFilters as Record<string, string>)[key] = val;
        });
        return initialFilters;
    });

    // ─── Sincronización State → URL ──────────────────────────────────────────
    const updateUrl = useCallback(
        (
            newParams: {
                tab?: string;
                q?: string;
                page?: number;
                pageSize?: number;
                filters?: Partial<TFilters>;
            },
            mode: "push" | "replace" = "replace"
        ) => {
            const params = new URLSearchParams(searchParams.toString());

            // 1. Tab (push por defecto para historial útil)
            const nextTab = newParams.tab !== undefined ? newParams.tab : activeTab;
            if (nextTab !== defaultTab) params.set("tab", nextTab);
            else params.delete("tab");

            // 2. Search
            const nextQ = newParams.q !== undefined ? newParams.q : searchQuery;
            if (nextQ) params.set("q", nextQ);
            else params.delete("q");

            // 3. Paginación
            const nextPage = newParams.page !== undefined ? newParams.page : page;
            if (nextPage !== defaultPage) params.set("page", String(nextPage));
            else params.delete("page");

            const nextPageSize = newParams.pageSize !== undefined ? newParams.pageSize : pageSize;
            if (nextPageSize !== defaultPageSize) params.set("pageSize", String(nextPageSize));
            else params.delete("pageSize");

            // 4. Filtros
            const nextFilters = { ...filters, ...(newParams.filters || {}) };
            Object.keys(filtersConfig).forEach((key) => {
                const val = nextFilters[key];
                if (val && val !== filtersConfig[key]) {
                    params.set(key, val);
                } else {
                    params.delete(key);
                }
            });

            const newSearch = params.toString();
            const target = `${pathname}${newSearch ? `?${newSearch}` : ""}`;
            const current = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

            if (target !== current) {
                if (mode === "push") router.push(target);
                else router.replace(target);
            }
        },
        [activeTab, searchQuery, page, pageSize, filters, filtersConfig, defaultTab, defaultPage, defaultPageSize, pathname, router, searchParams]
    );

    // ─── Sincronización URL → State (Back/Forward) ───────────────────────────
    useEffect(() => {
        const urlTab = searchParams.get("tab") ?? defaultTab;
        const urlQ = searchParams.get("q") ?? defaultSearch;
        const urlPage = Number(searchParams.get("page")) || defaultPage;
        const urlPageSize = Number(searchParams.get("pageSize")) || defaultPageSize;

        const timer = setTimeout(() => {
            if (urlTab !== activeTab) setActiveTab(urlTab);
            if (urlQ !== searchQuery) setSearchQuery(urlQ);
            if (urlPage !== page) setPage(urlPage);
            if (urlPageSize !== pageSize) setPageSize(urlPageSize);

            // Sincronizar filtros
            const newFilters = { ...filters };
            let filtersChanged = false;
            Object.keys(filtersConfig).forEach((key) => {
                const val = searchParams.get(key) ?? filtersConfig[key];
                if (val !== filters[key]) {
                    (newFilters as Record<string, string>)[key] = val;
                    filtersChanged = true;
                }
            });
            if (filtersChanged) setFilters(newFilters);
        }, 0);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    // ─── Public Setters ──────────────────────────────────────────────────────
    const handleSetTab = useCallback(
        (tab: string) => {
            setActiveTab(tab);
            // Al cambiar tab, solemos resetear página a 1 (estándar de UX)
            setPage(1);
            updateUrl({ tab, page: 1 }, "push");
        },
        [updateUrl]
    );

    const handleSetSearch = useCallback(
        (q: string) => {
            setSearchQuery(q);
            // Al buscar, solemos resetear página a 1
            setPage(1);
            updateUrl({ q, page: 1 }, "replace");
        },
        [updateUrl]
    );

    const handleSetPage = useCallback(
        (p: number) => {
            setPage(p);
            updateUrl({ page: p }, "replace");
        },
        [updateUrl]
    );

    const handleSetPageSize = useCallback(
        (ps: number) => {
            setPageSize(ps);
            setPage(1);
            updateUrl({ pageSize: ps, page: 1 }, "replace");
        },
        [updateUrl]
    );

    const handleSetFilter = useCallback(
        (key: keyof TFilters, value: string) => {
            const nextFilters = { ...filters, [key]: value };
            setFilters(nextFilters);
            setPage(1);
            updateUrl({ filters: { [key]: value } as Partial<TFilters>, page: 1 }, "replace");
        },
        [filters, updateUrl]
    );

    return {
        // State
        activeTab,
        searchQuery,
        page,
        pageSize,
        filters,

        // Setters inteligentes
        setTab: handleSetTab,
        setSearch: handleSetSearch,
        setPage: handleSetPage,
        setPageSize: handleSetPageSize,
        setFilter: handleSetFilter,

        // Utils
        updateUrl,
    };
}
