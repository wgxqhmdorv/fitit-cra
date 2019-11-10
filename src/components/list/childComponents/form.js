import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { addItem } from "../../../redux/features/listSlice";
import styled from "styled-components";

const Form = ({ addItem, meal, setSearch }) => {
  const [input, setInput] = useState("");

  const handleOnClick = event => {
    event.preventDefault();
    if (input !== "") {
      addItem({
        meal: meal,
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
    setSearch(false);
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

const StyledForm = styled.form``;

const Container = styled.div`
  padding: 0.56rem 0;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 0 0.5rem;
  flex-grow: 1;
  color: #4a5568;
`;

const Button = styled.button`
  background-color: #48bb78;
  color: white;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 5px;
  outline: none;
  :hover {
    background-color: #41b86f;
  }
  :active {
    outline: none;
  }
  :focus {
    background-color: #42b16f;
    outline: none;
  }
`;

const mapDispatch = { addItem };

export default connect(
  null,
  mapDispatch
)(Form);
