import React from "react";
import { Link } from "@reach/router";
import NavButton from "./navButton";

const LinkButton = ({ name = "Home", uri }) => {
  let path = "/";
  if (name !== "Home") {
    path += name.toLowerCase();
  }

  const isActive = path === uri;

  return (
    <NavButton isActive={isActive}>
      <Link to={path}>{name}</Link>
    </NavButton>
  );
};

export default LinkButton;
