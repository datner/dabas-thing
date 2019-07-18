import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "../Header";
import Info from "../Info";
import Wheel from "../Wheel";
import Container from "./Container";
import { useEventListener } from "../../lib/hooks";

const BlockA = styled.div`
  transform: ${props =>
    props.toggle ? "translateY(-1000px)" : "translateY(0)"};
  transition: ease-in-out 800ms;
`;
const BlockB = styled.div`
  transform: ${props =>
    props.toggle ? "translateY(-500px)" : "translateY(400px)"};
  transition: ease-in-out 800ms;
`;

const App = () => {
  const [toggle, setToggle] = useState(false);
  useEventListener("keydown", e => e.key === "[" && setToggle(!toggle));
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BlockA toggle={toggle}>
          <Header />
          <Info />
        </BlockA>
        <BlockB toggle={toggle}>
          <Wheel />
        </BlockB>
      </Container>
    </ThemeProvider>
  );
};

export default App;
