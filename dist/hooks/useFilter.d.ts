/// <reference types="react" />
import { Categories, Sorting } from "~/constants";
import { VolumesQueryResponse } from "~/declarations/booksApi";
export interface UseFilter {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    category: Categories | undefined;
    setCategory: React.Dispatch<React.SetStateAction<Categories | undefined>>;
    sort: Sorting | undefined;
    setSort: React.Dispatch<React.SetStateAction<Sorting | undefined>>;
    startIndex: number;
    setStartIndex: React.Dispatch<React.SetStateAction<number>>;
    data?: VolumesQueryResponse;
    isError: boolean;
    isFetching: boolean;
    handleSubmit: () => void;
}
export declare const PAGINATION_STEP = 30;
export declare const useFilter: () => UseFilter;
