import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Firstpage from "./main/Firstpage.jsx";
import Secondpage from "./main/Secondpage.jsx";
import Thirdpage from "./main/Thirdpage.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

function Mainpage() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY < windowHeight) {
      setCurrentPage(0);
    } else if (scrollY < 2 * windowHeight) {
      setCurrentPage(1);
    } else if (scrollY < 3 * windowHeight) {
      setCurrentPage(2);
    } else if (scrollY < 4 * windowHeight) {
      setCurrentPage(3);
    } else if (scrollY < 5 * windowHeight) {
      setCurrentPage(4);
    } else if (scrollY < 6 * windowHeight) {
      setCurrentPage(5);
    } else {
      setCurrentPage(6);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <WholePage>
        <Firstpage isVisible={currentPage === 0} />
        <Secondpage isVisible={currentPage === 1} />
        <Thirdpage isVisible={currentPage === 2} />

        <About isVisible={currentPage === 4} />
        <Portfolio isVisible={currentPage === 5} />
        <Contact isVisible={currentPage === 6} />
      </WholePage>
    </div>
  );
}

export default Mainpage;

const WholePage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  background-color: #000000;
`;
