import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { addItem } from "../redux/features/listSlice";
import styled from "styled-components";

const Form = ({ addItem }) => {
  const [input, setInput] = useState("");

  const handleOnClick = event => {
    event.preventDefault();
    if (input !== "") {
      addItem({
        id: Math.round(Math.random() * 10000),
        name: input,
        weight: Math.round(Math.random() * 50 + 50),
        calories: Math.round(Math.random() * 300 + 100),
        carbohydrates: Math.round(Math.random() * 30 + 1),
        proteins: Math.round(Math.random() * 15 + 1),
        fats: Math.round(Math.random() * 10 + 1)
      });
      setInput("");
    }
  };

  return (
    <StyledForm onSubmit={handleOnClick}>
      <Container>
        <Input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          placeholder="Search for your product"
        />
        <Button type="submit">Add</Button>
      </Container>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  border-bottom-width: 2px;
  border-color: #9ae6b4;
  padding-bottom: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 0.5rem;
  flex-grow: 1;
  color: #4a5568;
`;

const Button = styled.button`
  background-color: #48bb78;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0 1rem 0 1rem;
`;

const mapDispatch = { addItem };

export default connect(
  null,
  mapDispatch
)(Form);
