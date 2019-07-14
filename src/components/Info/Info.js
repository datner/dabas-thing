import React from "react";
import styled from "styled-components";
import Player from "./Player";

const Container = styled.div`
  margin-top: 24px;
  /* border: solid black 1px; */
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth}px;
  display: flex;
  justify-content: space-around;
`;

const Box = styled.div`
  background: ${props => props.color};
  height: 100px;
  width: 100px;
`;

export const Info = () => (
  <Container>
    <Player />
    <Box color="yellow" />
    <Player />
  </Container>
);

export default Info;
