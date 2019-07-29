import React, { useState } from "react";
import styled from "styled-components";
import fallback from "../../static/image/default.jpeg";
import arfi_bigdicc from "../../static/image/arfi_bigdicc.PNG";
import biggie_d from "../../static/image/biggie_d.jpg";
import israeli_squared from "../../static/image/israeli_squared.jpg";
import the_zionist from "../../static/image/the_zionist.png";
import the_librarian from "../../static/image/the_librarian.jpg";
import johnny_depp from "../../static/image/johnny_depp.jpg";

const players = {
  arfi_bigdicc,
  biggie_d,
  israeli_squared,
  the_zionist,
  johnny_depp,
  the_librarian
};

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Picture = styled.img`
  width: 300px;
  height: 300px;
  background: white;
  object-fit: cover;
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

const Player = () => {
  const [player, setPlayer] = useState("");
  function getPicture() {
    const modName = player.toLowerCase().replace(" ", "_")
    const img = players[modName]
    return img || fallback
  }
  return (
    <Container>
      <Picture src={getPicture()} />
      <Name
        placeholder="Player Name"
        onChange={e => setPlayer(e.target.value)}
      />
      <Score placeholder="0" />
    </Container>
  );
};

export default Player;
