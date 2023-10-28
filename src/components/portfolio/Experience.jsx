import React from "react";
import styled from "styled-components";
import selectstar from "../photo/selectstar.png";
import earth from "../photo/earth.png";
import knocklogo from "../photo/knocklogo.png";
const RightSection = styled.div`
  flex: 1;
  padding: 2rem 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 1rem 1rem;
  height: 90vh;
  background-color: #ffd500;
  position: relative;
  border: 3px solid black;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
const Header = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;
`;
const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  border: 3px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ImageContainer = styled.div`
  margin-top: 2rem;
  &:hover {
    transform: translateZ(10px);
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-around;
  img {
    width: 10rem;
    height: auto;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;
function Experience({ exOpenModal, closeModal }) {
  const ClickToEarth = () => {
    window.open(
      "https://www.notion.so/592b34173cf446e798a54a1dd30e3232?pvs=4",
      "_blank"
    );
  };
  const ClickToKnock = () => {
    window.open(
      "https://www.notion.so/knock-knock-530add3f87f44f18a09bc98a7a2b6095?pvs=4",
      "_blank"
    );
  };
  const ClickToSelect = () => {
    window.open(
      "https://www.notion.so/35808547c0bb41e7941a581680596c90?pvs=4",
      "_blank"
    );
  };
  return (
    <RightSection>
      <Header>
        <CirclesContainer onClick={closeModal}>
          <Circle color="yellow"></Circle>
          <Circle color="skyblue"></Circle>
        </CirclesContainer>
      </Header>
      <h3 onClick={exOpenModal}>Experience</h3>
      <ImageContainer onClick={exOpenModal}>
        <h3>ProjectManager</h3>
        <ImgBox>
          <img
            src={selectstar}
            alt="Project"
            onClick={ClickToSelect}
            style={{
              width: "25rem",
              marginBottom: "3rem",
              marginTop: "2rem",
            }}
          />
        </ImgBox>
        <Text>Click to open the Notion link!</Text>
      </ImageContainer>
      <ImageContainer onClick={exOpenModal}>
        <h3>FrontEnd</h3>
        <ImgBox>
          <img
            src={earth}
            alt="Front-end"
            onClick={ClickToEarth}
            style={{
              width: "15rem",
              maxWidth: "150px",
              height: "7rem",
              marginRight: "2rem",
            }}
          />
          <img
            src={knocklogo}
            alt="Front-end"
            onClick={ClickToKnock}
            style={{ width: "20rem", maxWidth: "250px", marginTop: "-4rem" }}
          />
        </ImgBox>
      </ImageContainer>
    </RightSection>
  );
}

export default Experience;
