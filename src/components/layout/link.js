import React from "react";
import styled from "styled-components";

const LinkButton = ({ href, active, setActive }) => {
  const url = href ? href : "/";
  const componentName = href ? href[0].toUpperCase() + href.slice(1) : "Home";

  const isActive = url === active;

  return (
    <AnchorButton
      href="/"
      isActive={isActive}
      onClick={() => setActive(() => url)}
    >
      {componentName}
    </AnchorButton>
  );
};

const AnchorButton = styled.a`
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
