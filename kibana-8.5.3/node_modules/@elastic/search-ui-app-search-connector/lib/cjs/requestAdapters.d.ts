import type { RequestState, SortDirection } from "@elastic/search-ui";
export declare function adaptRequest(request: RequestState): {
    page: {
        current: number;
        size: number;
    };
    filters: {
        all?: undefined;
    } | {
        all: {
            [x: string]: {
                [x: string]: string | number | boolean | (string | number | boolean)[] | {
                    from?: import("@elastic/search-ui").FieldValue;
                    to?: import("@elastic/search-ui").FieldValue;
                };
            }[];
        }[];
    };
    sort: {
        [x: string]: SortDirection;
    }[] | {
        [x: string]: "asc" | "desc";
    };
    query: string;
};
