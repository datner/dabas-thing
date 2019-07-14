import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "../Header";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
    </div>
  </ThemeProvider>
);

export default App;
