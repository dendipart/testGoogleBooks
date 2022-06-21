import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { Global, css } from "@emotion/react";
import { Provider as ProviderRedux } from "react-redux";
import { lightTheme } from "./Theme";
import { Routes, Route } from "react-router-dom";

import { rootStore } from "./store";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ProviderRedux store={rootStore}>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;700&display=swap");

            * {
              margin: 0;
              padding: 0;
              font-family: "Baloo Bhaijaan 2", cursive;
            }

            button > a {
              text-decoration: none;
              color: #f7f7f7;
            }
          `}
        />
        <Routes>
          <Route path="/" element={} />
        </Routes>
      </ProviderRedux>
    </ThemeProvider>
  );
};

export default App;
