import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "../Header";
import Info from "../Info";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Info />
    </div>
  </ThemeProvider>
);

export default App;
