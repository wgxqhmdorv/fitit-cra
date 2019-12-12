import React, {useState} from "react";
import styled from "styled-components";
import AutoSuggest from "./autoSuggest"
import {useDispatch} from "react-redux";
import {addItem} from "../../../redux/features/listSlice";

const Form = ({meal, setSearch}) => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    const handleOnClick = event => {
        event.preventDefault();
        if (input !== "" && !!Object.entries(product).length) {
            dispatch(
                addItem({
                    meal: meal,
                    id: product.id,
                    name: input,
                    weight: Math.round(Math.random() * 50 + 50),
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

    return (
        <form onSubmit={handleOnClick}>
            <Container>
                <AutoSuggest
                    input={input}
                    setInput={setInput}
                    suggestions={suggestions}
                    setSuggestions={setSuggestions}
                    setProduct={setProduct}
                />
                <Button type="submit">Add</Button>
            </Container>
        </form>
    );
};

const Container = styled.div`
  padding: 0.56rem 0;
  display: flex;
  justify-content: space-between;
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
