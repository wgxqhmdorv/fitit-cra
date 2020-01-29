import React, { useState } from "react";
import styled from "styled-components/macro";
import AutoSuggest from "./autoSuggest";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../../redux/features/listSlice";

const Form = ({ meal, setSearch }) => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleOnClick = event => {
    event.preventDefault();
    if (input !== "" && !!Object.entries(product).length) {
      dispatch(deleteItem(product));
      dispatch(
        addItem({
          meal: meal,
          id: product.id,
          name: input,
          weight: amount ? amount : 0,
          calories: product.calories,
          carbohydrates: product.carbohydrates,
          proteins: product.proteins,
          fats: product.fats
        })
      );
      setInput("");
      setProduct({});
    }
    setSearch(false);
  };
  const handleEnter = event => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

  const amountOnChange = event => {
    if (event.target.value >= 0 && event.target.value[0] !== "0")
      setAmount(event.target.value);
  };
  const amountOnBlur = event => {
    if (event.target.value === "") setAmount("1");
  };

  return (
    <form onSubmit={handleOnClick}>
      <SuggestContainer>
        <AutoSuggest
          input={input}
          setInput={setInput}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          setProduct={setProduct}
          handlEnter={handleEnter}
        />
      </SuggestContainer>
      <Container>
        <Input
          value={amount}
          onChange={amountOnChange}
          onBlur={amountOnBlur}
          onKeyDown={handleEnter}
          pattern="[0-9]*"
          placeholder="Weight"
        />
        <Button type="submit">Add</Button>
      </Container>
    </form>
  );
};

const SuggestContainer = styled.div`
  & .react-autosuggest__container {
    width: 100%;
    position: relative;
  }

  & .react-autosuggest__input {
    width: 100%;
    padding: 0.6rem 0.7rem;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border: 1px solid #48bb78;
    border-radius: 4px;
  }
  & .react-autosuggest__input--focused {
    outline: none;
  }
  & .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    margin-top: -1px;
    width: 100%;
    border: 1px solid #48bb78;
    background-color: #fff;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 0.6rem 0.7rem;
  }

  & .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`;

const Container = styled.div`
  padding: 0.56rem 0;
  display: flex;
`;

const Input = styled.input`
  width: 15%;
  padding: 0.6rem 0.7rem;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  border: 1px solid #48bb78;
  border-radius: 4px;
  :focus {
    outline: none;
  }
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

export default Form;
