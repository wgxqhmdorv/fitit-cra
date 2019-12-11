import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { blacklistToken } from "./../../redux/features/authSlice";
import Link from "./link";
import NavButton from "./navButton";

const Nav = ({ isVisible, uri }) => {
  const props = { uri };
  const { loggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(blacklistToken());
    navigate("/");
  };

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
        <NavButton onClick={logout} style={{ padding: "0 0.5rem 0 3rem" }}>
          Logout
        </NavButton>
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
