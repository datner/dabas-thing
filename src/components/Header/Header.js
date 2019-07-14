import React, { useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../../lib/hooks";

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth / 2}px;
  border: solid black 1px;
  background: whitesmoke;
  padding: 12px 24px;
  margin: 0 auto;
  text-align: center;
  font-style: italic;
  h1 {
    font-size: 4rem;
    color: #8b0000;
  }
`;

const Header = () => {
  const [round, setRound] = useState(1);

  const delta = 500;
  let nextInput = false;
  let lastKeypressTime = 0;

  useEventListener("keypress", e => {
    if (e.ctrlKey && e.key === "Enter") setRound(round + 1);
    if (nextInput) {
      if (e.key > 0) setRound(+e.key);
      nextInput = false;
    }
    if (e.key === "z") {
      let thisKeypressTime = new Date();
      console.log(thisKeypressTime - lastKeypressTime);
      if (thisKeypressTime - lastKeypressTime <= delta) {
        nextInput = true;
        // optional - if we'd rather not detect a triple-press
        // as a second double-press, reset the timestamp
        thisKeypressTime = 0;
      }
      lastKeypressTime = thisKeypressTime;
    }
  });
  
  return (
    <Container>
      <h1>Round {round}</h1>
    </Container>
  );
};

export default Header;
