import React from "react";
import { Link } from "@reach/router";
import NavButton from "./navButton";
import styled from "styled-components/macro";

const LinkButton = ({ name = "Home", uri }) => {
  let path = "/";
  if (name !== "Home") {
    path += name.toLowerCase();
  }

  const isActive = path === uri;

  return (
    <NavButton isActive={isActive}>
      <StyledLink to={path}>{name}</StyledLink>
    </NavButton>
  );
};

const StyledLink = styled(Link)`
  display: block;
  padding: 0 0.5rem 0 3rem;
  /* text-align: right; */
  /* padding-right: 2rem; */
  width: 100%;
`;

export default LinkButton;
