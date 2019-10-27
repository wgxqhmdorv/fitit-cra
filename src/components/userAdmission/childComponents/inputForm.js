import React from "react";
import styled from "styled-components";

const InputForm = ({ name, id, type, value, onChange, placeholder, autofocus }) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Input
        type={type}
        id={id ? id : name.toLowerCase()}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={"w-full border-2 border-gray-400"}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.8rem;
`;

const Label = styled.label`
  padding-bottom: 0.2rem;
  font-weight: 500;
  color: #24292e;
`;

const Input = styled.input`
  background-color: #fdfdfe;
  border-width: 1px;
  border-color: #e8f0fe;
  border-radius: 5px;
  height: 2.5rem;
  line-height: normal;
  padding-left: 0.5rem;
  :focus {
    background-color: white;
    box-shadow: 0 0 5px #9fe2b4;
    outline: none;
    border-width: 2px;
    border-color: #9fe2b4;
    border-radius: 5px;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export default InputForm;
