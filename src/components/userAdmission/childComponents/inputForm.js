import React from "react";
import styled from "styled-components";

const InputForm = ({
  name,
  type,
  value,
  placeholder,
  validate,
  errorMsg,
  errorState,
  onChange
}) => {
  return (
    <Container>
      <Label>{name}</Label>
      <Input
        type={type}
        id={name}
        value={value}
        onChange={event => {
          return onChange(event);
        }}
        onBlur={validate}
        placeholder={placeholder}
        error={errorState}
      />
      {errorState ? <Error>{errorMsg}</Error> : ""}
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
  border-color: ${({ error }) => (error ? "red" : "#e8f0fe")};
  border-radius: 5px;
  height: 2.5rem;
  line-height: normal;
  padding-left: 0.5rem;
  :focus {
    background-color: white;
    box-shadow: 0 0 5px ${({ error }) => (error ? "red" : "#9fe2b4")};
    outline: none;
    border-width: 2px;
    border-color: ${({ error }) => (error ? "red" : "#9fe2b4")};
    border-radius: 5px;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

const Error = styled.p`
  color: red;
`;

export default InputForm;
