import React from "react";
import styled from "styled-components";
import Player from "./Player";
import Timer from './Timer';

const Container = styled.div`
  margin-top: 24px;
  /* border: solid black 1px; */
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Info = () => (
  <Container>
    <Player />
    <Timer />
    <Player />
  </Container>
);

export default Info;
