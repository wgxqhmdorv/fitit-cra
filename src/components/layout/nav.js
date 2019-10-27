import React from "react";
import Link from "./link";
import { useState } from "react";
import styled from "styled-components";

const Nav = ({ isVisible }) => {
  const [active, setActive] = useState("/");

  return (
    <Navx isVisible={isVisible}>
      <Link active={active} setActive={setActive} />
      <Link href="list" active={active} setActive={setActive} />
      <Link href="login" active={active} setActive={setActive} />
      <Link href="logout" active={active} setActive={setActive} />
      <Link href="statistics" active={active} setActive={setActive} />
      <Link href="users" active={active} setActive={setActive} />
    </Navx>
  );
};

const Navx = styled.nav`
  height: calc(100vh - 5rem - 2px);
  position: absolute;
  background-color: white;
  bottom: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  @media (min-width: 1024px) {
    height: calc(100vh - 6rem - 2px);
    position: static;
    display: block;
    flex-grow: 1;
  }
`;

export default Nav;
