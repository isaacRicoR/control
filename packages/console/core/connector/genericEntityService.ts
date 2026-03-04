import { request, ApiResponse } from "./httpClient";
import {
    QueryParams,
    SearchBody,
    AggregateBody,
    TimeseriesBody
} from "./types";

function buildQueryString(params: QueryParams): string {
    const query = new URLSearchParams();

    if (params.page !== undefined) query.append("page", params.page.toString());
    if (params.limit !== undefined) query.append("limit", params.limit.toString());
    if (params.cursor) query.append("cursor", params.cursor);
    if (params.sort) query.append("sort", params.sort);
    if (params.q) query.append("q", params.q);
    if (params.fields) query.append("fields", params.fields);
    if (params.include) query.append("include", params.include);

    // Handle unified filters if passed in params.filters
    // This is a basic implementation to map simple filters object to query params:
    // filters: { status: 'active', age: { $gt: 18 } } -> filter[status]=active & filter[age][$gt]=18
    if (params.filters) {
        Object.entries(params.filters).forEach(([key, value]) => {
            if (typeof value === "object" && value !== null) {
                // Operator based filter
                Object.entries(value).forEach(([op, val]) => {
                    query.append(`filter[${key}][${op}]`, String(val));
                });
            } else {
                // Simple equality
                query.append(`filter[${key}]`, String(value));
            }
        });
    }

    const str = query.toString();
    return str ? `?${str}` : "";
}

export const GenericEntityService = {
    find: <T>(entity: string, params: QueryParams = {}): Promise<ApiResponse<T[]>> => {
        const queryString = buildQueryString(params);
        return request<T[]>(`/${entity}${queryString}`);
    },

    findOne: <T>(entity: string, id: string): Promise<ApiResponse<T>> => {
        return request<T>(`/${entity}/${id}`);
    },

    create: <T>(entity: string, data: unknown): Promise<ApiResponse<T>> => {
        return request<T>(`/${entity}`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    update: <T>(entity: string, id: string, data: unknown): Promise<ApiResponse<T>> => {
        return request<T>(`/${entity}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    },

    delete: <T = void>(entity: string, id: string): Promise<ApiResponse<T>> => {
        return request<T>(`/${entity}/${id}`, {
            method: "DELETE",
        });
    },

    search: <T>(entity: string, body: SearchBody): Promise<ApiResponse<T[]>> => {
        return request<T[]>(`/${entity}/search`, {
            method: "POST",
            body: JSON.stringify(body),
        });
    },

    aggregate: <T>(body: AggregateBody): Promise<ApiResponse<T>> => {
        return request<T>(`/analytics/aggregate`, {
            method: "POST",
            body: JSON.stringify(body),
        });
    },

    timeseries: <T>(body: TimeseriesBody): Promise<ApiResponse<T[]>> => {
        return request<T[]>(`/analytics/timeseries`, {
            method: "POST",
            body: JSON.stringify(body),
        });
    }
};
