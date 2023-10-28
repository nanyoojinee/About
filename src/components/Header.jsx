import React from "react";
import styled from "styled-components";

function Header() {
  const handleScrollToPage = (pageNumber, e) => {
    e.preventDefault();
    const windowHeight = window.innerHeight;
    const scrollTo = windowHeight * pageNumber;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <Logo>
        <a href="/">Welcome to Yujin's space</a>
      </Logo>
      <Navigation>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleScrollToPage(3, e)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleScrollToPage(4.1, e)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleScrollToPage(6.5, e)}>
              Contact
            </a>
          </li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  color: white;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 99%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    color: white;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: #d4d498;
    }
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
    margin-top: -0.7rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.4s;

    &:hover {
      color: lightblue;
    }
  }
`;
