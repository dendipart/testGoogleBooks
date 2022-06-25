import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "./root";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    googleBooksApi: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        getBooks: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../declarations/booksApi").VolumeQueryParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../declarations/booksApi").VolumesQueryResponse, "googleBooksApi">;
        getBook: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../declarations/booksApi").VolumeQueryParams, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, never, import("../declarations/booksApi").ItemBook, "googleBooksApi">;
    }, never, "googleBooksApi">;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
