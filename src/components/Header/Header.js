import React, { useState } from "react";
import styled from "styled-components";
import { useEventListener } from "../../lib/hooks";

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth}px;
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
  useEventListener("keypress", e => {
    if (e.key === "Enter") setRound(round + 1);
  });
  return (
    <Container onClick={() => setRound(round + 1)}>
      <h1>Round {round}</h1>
    </Container>
  );
};

export default Header;
