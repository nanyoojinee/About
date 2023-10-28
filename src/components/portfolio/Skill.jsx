import React from "react";
import styled from "styled-components";
import react from "../photo/noticon/react.png";
import python from "../photo/noticon/python.png";
import js from "../photo/noticon/js1.png";
import github from "../photo/noticon/github.png";
import html from "../photo/noticon/html.png";
import excel from "../photo/noticon/excel.png";
import googledrive from "../photo/noticon/googledrive.png";
import ps from "../photo/noticon/ps1.png";
import slack from "../photo/noticon/slack.jpg";
import notion from "../photo/noticon/notion.png";
import mongodb from "../photo/noticon/mongodb.png";
import jira from "../photo/noticon/jira.png";
import git from "../photo/noticon/git.png";
import gitlab from "../photo/noticon/gitlab.png";
import socket from "../photo/noticon/socket.png";
import visual from "../photo/noticon/visual.png";
import pycharm from "../photo/noticon/pycharm.png";
import css from "../photo/noticon/css.png";
import mysql from "../photo/noticon/mysql.png";

const LeftSection = styled.div`
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
  &:hover {
    transform: translateZ(10px);
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-around;
  img {
    margin-right: 0.6rem;
    margin-bottom: 0.1rem;

    width: 3rem;
    height: auto;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }
`;
const ImgWithText = styled.div`
  position: relative;

  &:hover {
    .text {
      opacity: 1;
    }
    .overlay {
      opacity: 0.7;
    }
  }

  img {
    width: 3.5rem;
    height: auto;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }

  .overlay {
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    width: 4rem;
    height: 4rem;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .text {
    position: absolute;
    top: 20%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    opacity: 0;
    z-index: 1;
  }
`;
function Skill({ skillOpenModal, closeModal }) {
  return (
    <LeftSection>
      <Header>
        <CirclesContainer onClick={closeModal}>
          <Circle color="yellow"></Circle>
          <Circle color="skyblue"></Circle>
        </CirclesContainer>
      </Header>
      <h2 onClick={skillOpenModal}>Skills</h2>
      <ImageContainer onClick={skillOpenModal}>
        <h3>FrontEnd</h3>
        <ImgBox>
          <ImgWithText>
            <img src={js} alt="JavaScript" />
            <div className="overlay"></div>
            <p className="text">JavaScript</p>
          </ImgWithText>
          <ImgWithText>
            <img src={html} alt="HTML" />
            <div className="overlay"></div>
            <p className="text">HTML</p>
          </ImgWithText>
          <ImgWithText>
            <img src={react} alt="React" />
            <div className="overlay"></div>
            <p className="text">React</p>
          </ImgWithText>
          <ImgWithText>
            <img src={css} alt="CSS" />
            <div className="overlay"></div>
            <p className="text">CSS</p>
          </ImgWithText>
          <ImgWithText>
            <img src={socket} alt="Socket.IO" />
            <div className="overlay"></div>
            <p className="text">Socket.IO</p>
          </ImgWithText>
        </ImgBox>
        <h3>DataBase</h3>
        <ImgBox>
          <ImgWithText>
            <img src={python} alt="Python" />
            <div className="overlay"></div>
            <p className="text">Python</p>
          </ImgWithText>
          <ImgWithText>
            <img src={mongodb} alt="MongoDB" />
            <div className="overlay"></div>
            <p className="text">MongoDB</p>
          </ImgWithText>
          <ImgWithText>
            <img src={mysql} alt="MySQL" />
            <div className="overlay"></div>
            <p className="text">MySQL</p>
          </ImgWithText>
        </ImgBox>
        <h3>Etc</h3>
        <ImgBox>
          <ImgWithText>
            <img src={googledrive} alt="Google Drive" />
            <div className="overlay"></div>
            <p className="text">Google Drive</p>
          </ImgWithText>
          <ImgWithText>
            <img src={excel} alt="Excel" />
            <div className="overlay"></div>
            <p className="text">Excel</p>
          </ImgWithText>
          <ImgWithText>
            <img src={jira} alt="Jira" />
            <div className="overlay"></div>
            <p className="text">Jira</p>
          </ImgWithText>
          <ImgWithText>
            <img src={gitlab} alt="GitLab" />
            <div className="overlay"></div>
            <p className="text">GitLab</p>
          </ImgWithText>
          <ImgWithText>
            <img src={github} alt="Github" />
            <div className="overlay"></div>
            <p className="text">GitHub</p>
          </ImgWithText>
          <ImgWithText>
            <img src={slack} alt="Slack" />
            <div className="overlay"></div>
            <p className="text">Slack</p>
          </ImgWithText>
        </ImgBox>
        <ImgBox>
          <ImgWithText>
            <img src={notion} alt="Notion" />
            <div className="overlay"></div>
            <p className="text">Notion</p>
          </ImgWithText>
          <ImgWithText>
            <img src={ps} alt="Photoshop" />
            <div className="overlay"></div>
            <p className="text">Photoshop</p>
          </ImgWithText>
          <ImgWithText>
            <img src={visual} alt="Visual Studio Code" />
            <div className="overlay"></div>
            <p className="text">Visual Studio Code</p>
          </ImgWithText>
          <ImgWithText>
            <img src={pycharm} alt="PyCharm" />
            <div className="overlay"></div>
            <p className="text">PyCharm</p>
          </ImgWithText>
          <ImgWithText>
            <img src={git} alt="Git" />
            <div className="overlay"></div>
            <p className="text">Git</p>
          </ImgWithText>
        </ImgBox>
      </ImageContainer>
    </LeftSection>
  );
}
export default Skill;
