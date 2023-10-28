import React, { useState } from "react";
import styled from "styled-components";
import yujinjapan from "./photo/yujinjapan.mp4";
import tape1 from "./photo/tape1.png";
import tape2 from "./photo/tape2.png";
import tape3 from "./photo/tape3.png";
import ImageModal from "./commons/ImageModal.jsx";
const WholeBack = styled.div`
  background-color: #abc5d8;
  width: 100%;
  height: 80vh;
  padding-top: 10rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const VideoContainer = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 5rem;
`;

const Video = styled.video`
  width: 100%;
  max-width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const RightPage = styled.div`
  width: 35%;
  padding: 4rem 4rem;
  background-color: #f2f0f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-left: 3rem;
  height: 45vh;
  transition: transform 0.3s ease-in-out;
`;
const TextEng = styled.div`
  &.challenging,
  &.free,
  &.responsible,
  &.passionate {
    font-size: 2rem;
    margin-top: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  &.responsible {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;

    background-color: transparent;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const TapeImage = styled.img`
  width: 10rem;
  height: auto;
  position: absolute;
  transform: rotate(45deg);
  &.top-left {
    top: -4rem;
    left: -5rem;
    transform: rotate(-45deg);
  }

  &.top-right {
    top: -6rem;
    right: -6rem;
  }

  &.bottom-left {
    bottom: -3.5rem;
    left: -2rem;
    transform: rotate(45deg);
  }

  &.bottom-right {
    bottom: -4rem;
    right: -4rem;
    transform: rotate(-45deg);
  }
`;

function About() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalClick = (num) => {
    setShowModal(true);
    setModalContent(num);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <WholeBack>
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src={yujinjapan} type="video/mp4" />
          브라우저가 HTML5 비디오를 지원하지 않을 때 표시되는 메시지
        </Video>
        <TapeImage className="top-left" src={tape1} alt="Tape" />
        <TapeImage className="top-right" src={tape2} alt="Tape" />
        <TapeImage className="bottom-left" src={tape3} alt="Tape" />
        <TapeImage className="bottom-right" src={tape1} alt="Tape" />
      </VideoContainer>
      <RightPage>
        I'm a
        <TextEng className="challenging" onClick={() => handleModalClick(1)}>
          <span style={{ background: "yellow" }}>challenging</span> ,
        </TextEng>
        <TextEng className="free" onClick={() => handleModalClick(2)}>
          <span style={{ background: "pink" }}>free</span>,
        </TextEng>
        <TextEng className="passionate" onClick={() => handleModalClick(3)}>
          <span style={{ background: "orange" }}>passionate</span>,
        </TextEng>
        <TextEng className="responsible" onClick={() => handleModalClick(4)}>
          <span style={{ background: "lightblue" }}>responsible </span>
        </TextEng>
        person.
      </RightPage>
      {showModal && <ImageModal num={modalContent} closeModal={closeModal} />}
    </WholeBack>
  );
}

export default About;
