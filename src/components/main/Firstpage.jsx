import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import yujinImage2 from "../photo/yujin3.png";
import yujinImage from "../photo/yujin4.png";

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutAndShrinkToLeft = keyframes`
  0% {
    transform: translateX(0);
    font-size: 7rem;
    margin-left: 0;
    margin-right: 0;
  }
  50% {
    transform: translateX(-20%);
    font-size: 4rem;
    margin-left: 17rem;
    margin-right: 5rem;
  }
  100% {
    transform: translateX(-50%);
    font-size: 4rem;
    margin-left: 17rem;
    margin-right: 5rem;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(0);
  }
`;

const Introbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${slideInFromBottom} 1s ease;
`;

const Myintro = styled.div`
  display: flex;
  align-items: center;
`;

const IntroText = styled.div`
  font-size: 8rem;
  color: #d1d1d1;
  animation: ${(props) =>
      props.animateText ? slideOutAndShrinkToLeft : "none"}
    1s ease;
  animation-fill-mode: forwards;
`;

const IntroImage = styled.div`
  width: 20rem;
  height: 38rem;
  margin-top: 1rem;
  margin-bottom: -5rem;
  background-image: url(${(props) =>
    props.hovered ? yujinImage : yujinImage2});
  background-size: cover;
  animation: ${(props) => (props.animateImage ? slideInFromRight : "none")} 1s
    ease;
  transition: background-image 0.3s ease;
  &:hover {
    background-image: url(${yujinImage});
  }
`;

function Firstpage() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 2000);

    const imageTimeout = setTimeout(() => {
      setAnimateImage(true);
    }, 2500);

    return () => {
      clearTimeout(textAnimationTimeout);
      clearTimeout(imageTimeout);
    };
  }, []);

  return (
    <Introbox>
      <Myintro>
        <IntroText animateText={animateText}>
          H e l l o, <br />
          <br />
          I'm Yujin Jeong!
        </IntroText>
        {animateImage && <IntroImage />}
      </Myintro>
    </Introbox>
  );
}

export default Firstpage;
