import React, { useState } from "react";
import styled from "styled-components";
import earthimg from "../photo/earth1.png";
import board from "../photo/board.png";

const WholeBack = styled.div`
  background-color: #03253e;
  width: 100%;
  height: 80vh;
  padding-top: 10rem;
  position: relative;
`;
const EarthImg = styled.div`
  position: absolute;
  bottom: 2rem;
  margin-left: 2rem;
  img {
    width: 20rem;
  }
`;
const BoardImg = styled.div`
  position: absolute;
  left: 7rem;
  bottom: 12.5rem;
  img {
    width: 30rem;
  }
`;
function Earth() {
  return (
    <WholeBack>
      <EarthImg>
        <img src={earthimg} alt="earth" />
      </EarthImg>
      <BoardImg>
        <img src={board} alt="board" />
      </BoardImg>
    </WholeBack>
  );
}

export default Earth;
