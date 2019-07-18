import React, { useState } from "react";
import styled from "styled-components";
import { useInterval, useEventListener } from "../../lib/hooks";

const Container = styled.div`
  opacity: ${props => props.show? 1 : 0};
  height: 100px;
  width: 100px;
  background: red;
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
  const [pop, setPop] = useState(false)
  const [show, setShow] = useState(false)
  useInterval(() => {
    if (timer > 0) setTimer(timer - 1);
    else if (pop) {
        setPop(false)
        alert("Times up!");
    }
  });

  useEventListener("keypress", e => {
    if (e.ctrlKey && e.key === ";") {
        setShow(true)
        setPop(true)
        setTimer(25)
    }
  });
  return (
    <Container show={show}>
      <span>{timer}</span>
    </Container>
  );
};

export default Timer;
