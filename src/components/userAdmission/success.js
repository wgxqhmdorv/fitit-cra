import React from "react";
import styled from "styled-components";
import Button from "./childComponents/button";

const Success = () => {
  return (
    <MainContainer>
      <Container>
        <Label>Your registration was a success!</Label>
        <Button id="success-button" type="" name="Login" />
      </Container>
    </MainContainer>
  );
};

export default Success;

const MainContainer = styled.div`
  padding: 2rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  padding-bottom: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom-width: 2px;
  border-bottom-color: #48bb78;
  text-align: center;
  color: #24292e;
  font-weight: 500;
  font-size: 30px;
`;

const Container = styled.div`
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1.5rem #e6e6e6;
  border-radius: 10px;
  padding: 2rem 2rem;
  width: 50%;
`;
