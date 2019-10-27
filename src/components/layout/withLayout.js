import React from "react";
import Nav from "./nav";
import { useState } from "react";
import styled from "styled-components";

const withLayout = Page => {
  const Layout = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const handleNavbarChange = () => setNavbarVisible(!navbarVisible);

    return (
      <PageContainer>
        <Header>
          <Image src="/logo.png" alt="FitIT logotype" />
          <Button onClick={handleNavbarChange}>=</Button>
          <Nav isVisible={navbarVisible} />
        </Header>
        <div style={{ flexGrow: "1" }}>
          <Page />
        </div>
      </PageContainer>
    );
  };

  return Layout;
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7fafc;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: white;

  @media (min-width: 1024px) {
    position: relative;
    flex-direction: column;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      width: 2px;
      height: 100vh;
      background-color: #edf2f7;
    }
  }
`;

const Image = styled.img`
  margin-right: auto;
  padding: 0.5rem;
  height: 5rem;

  @media (min-width: 1024px) {
    height: 6rem;
    margin: auto;
  }
`;

const Button = styled.button`
  padding: 1rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default withLayout;
