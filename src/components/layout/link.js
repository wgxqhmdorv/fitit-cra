import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";

const LinkButton = ({ name = "Home", uri }) => {
  let path = "/";
  if (name !== "Home") {
    path += name.toLowerCase();
  }

  const isActive = path === uri;

  return (
    <AnchorButton to={path} isActive={isActive}>
      {name}
    </AnchorButton>
  );
};

const AnchorButton = styled(Link)`
  position: relative;
  width: 100%;
  display: block;
  padding: 0 0.5rem 0 3rem;
  margin: 0.5rem 0 0.5rem 0;
  line-height: 2;
  color: ${({ isActive }) => (isActive ? "black" : "#A9A9A9")};

  &:before {
    content: "";
    width: 4px;
    height: 2rem;
    right: -1px;
    position: absolute;
    background-color: ${({ isActive }) => (isActive ? "#48bb78" : "")};
  }

  &:hover:before {
    background-color: ${({ isActive }) => (isActive ? "#22543d" : "#cbd5e0")};
  }
`;

export default LinkButton;
