/// <reference types="react" />
import { Categories, Sorting } from "~/constants";
export declare const useFilter: () => {
    query: string;
    setQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    category: Categories | undefined;
    setCategory: import("react").Dispatch<import("react").SetStateAction<Categories | undefined>>;
    sort: Sorting | undefined;
    setSort: import("react").Dispatch<import("react").SetStateAction<Sorting | undefined>>;
};
