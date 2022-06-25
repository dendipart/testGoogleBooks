import React from "react";
import { Global, css } from "@emotion/react";
import { Provider as ProviderRedux } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { rootStore } from "./store";
import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";
import Header from "~/layout/Header";

import FilterProvider from "./providers/FilterProvider";

const App = () => {
  return (
    <ProviderRedux store={rootStore}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;700&display=swap");

          * {
            margin: 0;
            padding: 0;
            // font-family: "Baloo Bhaijaan 2", cursive;
          }

          button > a {
            text-decoration: none;
            color: #f7f7f7;
          }
        `}
      />
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </FilterProvider>
    </ProviderRedux>
  );
};

export default App;
