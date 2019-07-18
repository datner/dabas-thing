import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Wheel = () => (
  <Container>
    <iframe
      title="wheel of weebdom"
      src="https://wheeldecide.com/e.php?c1=Full+Metal+Alchemist%3A+Brotherhood&c2=Steins%3BGate&c3=Hunter+x+Hunter&c4=Death+Note&c5=Sword+Art+Online&c6=One+Punch+Man&c7=No+Game+No+Life&c8=Naruto&c9=Death+Parade&c10=Sailor+Moon&c11=Boku+no+Hero+Academia&c12=Attack+on+Titan&c13=Fairy+Tale&c14=Bleach&c15=Neon+Genesis+Evangelion&c16=Devilman+Crybaby&c17=Kill+la+Kill&c18=Konosuba&c19=JoJo%27s+Bizarre+Adventure&c20=Cowboy+Bebop&time=5"
      width="500"
      height="500"
      scrolling="no"
      frameborder="0"
      style={{ margin: "0 auto" }}
    />
  </Container>
);

export default Wheel;
