import React, { useState } from "react";
import styled from "styled-components";
import { useInterval, useEventListener } from "../../lib/hooks";
import buzzer from "../../static/sound/buzzer.mp3";

const Container = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  height: 100px;
  width: 100px;
  background: ${props => props.done ? "red" : "green"};
  font-family: "7SEG";
  font-size: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  span {
    margin: 0 auto;
  }
`;

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [pop, setPop] = useState(true);
  const [show, setShow] = useState(false);
  const sound = new Audio(buzzer);
  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else if (!pop) {
      setPop(true)
      sound.play();
    }
  });

  useEventListener("keypress", e => {
    if (e.key === ";") {
      setShow(true);
      setPop(false);
      setTimer(25);
    }
  });
  return (
    <Container done={pop} show={show}>
      <span>{timer}</span>
    </Container>
  );
};

export default Timer;
