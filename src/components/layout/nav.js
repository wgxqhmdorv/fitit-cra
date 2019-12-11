import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import Link from "./link";

const Nav = ({ isVisible, uri }) => {
  const props = { uri };
  const { loggedIn } = useSelector(state => state.auth);

  return (
    <Navx isVisible={isVisible}>
      <Link {...props} />
      <Link name="List" {...props} />
      <Link name="Statistics" {...props} />
      <Link name="Users" {...props} />

      {!loggedIn ? (
        <>
          <Link name="Login" {...props} />
          <Link name="Register" {...props} />
        </>
      ) : (
        <Link name="Logout" {...props} />
      )}
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
