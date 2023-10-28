import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./commons/Modalportfolio";
import Skill from "./portfolio/Skill";
import Experience from "./portfolio/Experience";

const WholeBack = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  height: 100vh;
  background-color: #699bf7;
  margin-bottom: 10rem;
`;

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [isExModalOpen, setIsExModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen((prevModal) => !prevModal);
  };

  const exOpenModal = () => {
    setIsExModalOpen((prevModal) => !prevModal);
    setIsSkillModalOpen(false);
  };
  const skillOpenModal = () => {
    setIsSkillModalOpen((prevModal) => !prevModal);
    setIsExModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          skillOpenModal={skillOpenModal}
          exOpenModal={exOpenModal}
        />
      )}
      {!isModalOpen && (
        <WholeBack>
          {!isExModalOpen && (
            <Skill skillOpenModal={skillOpenModal} closeModal={closeModal} />
          )}
          {!isSkillModalOpen && (
            <Experience exOpenModal={exOpenModal} closeModal={closeModal} />
          )}
        </WholeBack>
      )}
    </>
  );
}

export default Portfolio;
