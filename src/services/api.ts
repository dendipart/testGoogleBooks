import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  VolumeQueryParams,
  VolumesQueryResponse,
  ItemBook,
} from "~/declarations/booksApi";

const key = "AIzaSyDWGdUXgPfo9D895IRtYP-oHSKocvu7DoA";

export const googleBooksApi = createApi({
  reducerPath: "googleBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<VolumesQueryResponse, VolumeQueryParams>({
      query: ({ query, maxResults, startIndex, subject, orderBy }) =>
        `volumes?q=${query}+subject:${subject}&key=${key}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`,
    }),
    getBook: builder.query<ItemBook, VolumeQueryParams>({
      query: ({ volumeId }) => `volumes/${volumeId}?key=${key}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = googleBooksApi;
