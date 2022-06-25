import { useState } from "react";

import { Categories, Sorting } from "~/constants";
import { VolumesQueryResponse } from "~/declarations/booksApi";
import { useGetBooksQuery } from "~/services/api";

export interface UseFilter {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  categoryValue: Categories | undefined;
  setCategoryValue: React.Dispatch<
    React.SetStateAction<Categories | undefined>
  >;
  sortValue: Sorting | undefined;
  setSortValue: React.Dispatch<React.SetStateAction<Sorting | undefined>>;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  data?: VolumesQueryResponse;
  isError: boolean;
  isFetching: boolean;
  handleSubmit: () => void;
  fetchedMore: boolean;
  setFetchedMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PAGINATION_STEP = 30;

export const useFilter = (): UseFilter => {
  const [query, setQuery] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [subject, setSubject] = useState<Categories>(Categories.ALL);
  const [orderBy, setOrderBy] = useState<Sorting>(Sorting.RELEVANCE);

  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState<Categories>(
    Categories.ALL
  );
  const [sortValue, setSortValue] = useState<Sorting>(Sorting.RELEVANCE);
  const [fetchedMore, setFetchedMore] = useState(false);

  const booksList = useGetBooksQuery(
    {
      query: query ?? "",
      maxResults: PAGINATION_STEP,
      startIndex,
      subject: subject === Categories.ALL ? "" : subject,
      orderBy: orderBy ?? "",
    },
    { skip: !query }
  );

  const handleSubmit = () => {
    setQuery(searchValue);
    setSubject(categoryValue);
    setOrderBy(sortValue);

    setFetchedMore(false);
  };

  return {
    query,
    setQuery,
    categoryValue,
    setCategoryValue,
    sortValue,
    setSortValue,
    startIndex,
    setStartIndex,
    data: booksList.data,
    isError: booksList.isError,
    isFetching: booksList.isFetching,
    handleSubmit,
    setSearchValue,
    searchValue,
    fetchedMore,
    setFetchedMore,
  };
};
