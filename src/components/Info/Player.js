import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Picture = styled.div`
  width: 300px;
  height: 300px;
  background: green;
  `;

const Name = styled.input`
  border: 1px solid white;
  /* border-bottom: 2px solid #1976d2; */
  width: 100%;
  font-size: 30px;
  line-height: 35px;
  margin-top: 12px;
  height: 70px;
  text-align: center;
  padding: 10px;
  background: white;
  color: black;

  &:focus {
    outline: 0;
    color: black;
  }

  &::placeholder {
    color: grey;
  }
`;

const Score = styled(Name).attrs({
  type: "number",
  min: 0
})`
  font-family: "7SEG";
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const Player = () => (
  <Container>
    <Picture />
    <Name placeholder="Player Name" />
    <Score placeholder="0" />
  </Container>
);

export default Player;
