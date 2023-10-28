import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import mac from "../photo/mac.png";
import datavideo from "../photo/datavideo.mp4";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Myskill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FrontText = styled.div`
  position: absolute;
  color: #d1d1d1;
  left: 6%;
  z-index: 2;
  font-size: 8rem;
  animation: ${slideInFromRight} 1s ease;
`;

const MacImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mac});
  background-size: cover;
  background-position: center;
  width: 48rem;
  border-radius: 3rem;
  height: 65vh;
  position: absolute;
  z-index: 1;
  margin-right: -20rem;
`;

const Video = styled.video`
  width: 37rem;
  height: 62vh;

  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

function Thirdpage() {
  const [animateFrontText, setAnimateFrontText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showFrontText = scrollY > 800;

      setAnimateFrontText(showFrontText);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Myskill>
      {animateFrontText && <FrontText>DATA</FrontText>}
      <MacImage>
        <Video autoPlay loop muted>
          <source src={datavideo} type="video/mp4" />
        </Video>
      </MacImage>
    </Myskill>
  );
}

export default Thirdpage;
