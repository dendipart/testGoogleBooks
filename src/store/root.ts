import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { googleBooksApi } from "../services/api";

export const rootStore = configureStore({
  reducer: { [googleBooksApi.reducerPath]: googleBooksApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleBooksApi.middleware),
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

setupListeners(rootStore.dispatch);
