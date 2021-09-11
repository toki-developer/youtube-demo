import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./Route";
import GlobalStyle from "./GlobalStyle";

import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";


import { RecoilRoot } from "recoil";
import { AuthStateListener } from "./providers/AuthStateListener";
import { GlobalAccout } from "./providers/GlobalAccount";

import { ApolloProvider } from "./providers/ApolloClient";


const theme = createTheme();



ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloProvider >
          <AuthStateListener>
            <GlobalAccout>
              <BrowserRouter>
                <CssBaseline />
                <GlobalStyle />
                <RootRouter />
              </BrowserRouter>
            </GlobalAccout>
          </AuthStateListener>
        </ApolloProvider>
    </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
