import React from "react";
import styled from "styled-components";

const Button = ({ type, name }) => {
  return (
    <Container>
      <ButtonStyled type={type}>{name}</ButtonStyled>
    </Container>
  );
};
// className={"bg-primary font-bold rounded py-2 px-10 mt-2"}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
`;

const ButtonStyled = styled.button`
  background-color: #48bb78;
  border-radius: 5px;
  width: 100%;
  height: 55px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  color: white;
  outline: none;
  :hover {
    background-color: #41b86f;
  }
  :active {
    background-color: #42b16f;
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export default Button;
