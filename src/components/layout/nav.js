import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { userLoggedOut } from "../../redux/features/authSlice";
import LinkButton from "./link";

const Nav = ({ isVisible, isAuthenticated, userLoggedOut }) => {
  const [active, setActive] = useState("/");

  const handleLogout = async () => {
    await Auth.signOut();
    userLoggedOut();
  };

  return (
    <Navx isVisible={isVisible}>
      <LinkButton active={active} setActive={setActive} />
      <LinkButton href="list" active={active} setActive={setActive} />
      <LinkButton href="statistics" active={active} setActive={setActive} />
      <LinkButton href="users" active={active} setActive={setActive} />
      {!isAuthenticated ? (
        <>
          <LinkButton href="login" active={active} setActive={setActive} />
          <LinkButton href="register" active={active} setActive={setActive} />
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
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

const mapStateToProps = state => state.auth;
const mapDispatchToProps = { userLoggedOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
