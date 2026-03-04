export type SortOrder = "asc" | "desc";

export interface PaginationMeta {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
    cursor?: string;
    hasMore?: boolean;
}

export interface ApiMetadata {
    requestId: string;
    timestamp: string;
    pagination?: PaginationMeta;
}

export interface ApiErrorDetail {
    field: string;
    issue: string;
}

export interface ApiError {
    code: string;
    message: string;
    details?: ApiErrorDetail[];
}

export interface ApiEnvelope<T = unknown> {
    data: T | null;
    meta: ApiMetadata;
    error: ApiError | null;
}

export interface FilterOperator {
    $eq?: string | number | boolean;
    $ne?: string | number | boolean;
    $gt?: string | number;
    $gte?: string | number;
    $lt?: string | number;
    $lte?: string | number;
    $contains?: string;
    $in?: (string | number)[];
    $nin?: (string | number)[];
    $between?: [string | number, string | number];
}

export type Filter = Record<string, FilterOperator | string | number | boolean>;

export interface QueryParams {
    page?: number;
    limit?: number;
    cursor?: string;
    sort?: string;
    q?: string;
    fields?: string;
    include?: string;
    // Dynamic filters: filter[status]=active -> treated as Record<string, any> in generic construction
    // but here we might want to allow a flexible way to pass them if using a query string builder.
    // For specific filter object structure (unified DSL):
    filters?: Filter;
}

export interface SearchBody {
    filter?: Filter;
    sort?: string[]; // ["-createdAt", "name"]
    page?: number;
    limit?: number;
    fields?: string[];
    include?: string[];
}

export interface AggregateMetric {
    field: string;
    op: "count" | "sum" | "avg" | "min" | "max";
    as: string;
}

export interface AggregateBody {
    entity: string;
    filter?: Filter;
    aggregates: AggregateMetric[];
}

export interface TimeSeriesRange {
    from: string;
    to: string;
}

export interface TimeSeriesMetric {
    op: "count" | "sum";
    field?: string;
    as: string;
}

export interface TimeseriesBody {
    entity: string;
    groupBy: "date" | "hour" | "month" | "year";
    range: TimeSeriesRange;
    metrics: TimeSeriesMetric[];
    filter?: Filter;
}
