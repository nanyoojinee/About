import React from "react";
import styled from "styled-components";
import gmail from "./photo/noticon/gmail.png";
const WholeBack = styled.div`
  width: 100%;
  height: 60vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
`;

const EmailImage = styled.img`
  width: 5rem;
  height: auto;
  cursor: pointer;
`;
const GradientText = styled.p`
  font-size: 35px;
  height: 4rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #c5eac5, #008152);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
function Contact() {
  const GotoEmail = () => {
    window.open(
      "https://mail.google.com/mail/u/0/#sent?compose=new,",
      "_blank"
    );
  };
  return (
    <WholeBack>
      <GradientText>Please contact me by email</GradientText>
      <EmailImage onClick={GotoEmail} src={gmail} alt="Email" />

      <p style={{ fontSize: "20px", color: "#d4dbaa" }}>
        nanyoojinee@gmail.com
      </p>
      <p style={{ fontSize: "15px" }}>©2024-YuJin</p>
    </WholeBack>
  );
}

export default Contact;
