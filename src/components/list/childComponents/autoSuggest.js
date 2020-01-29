import React from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";

const AutoSuggest = ({input, setInput, suggestions, setSuggestions, setProduct, handleEnter}) => {

    const getSuggestions = async value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const products = await handleRequest(inputValue);

        return inputLength === 0 ? [] : products.filter(pos =>
            pos.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const handleRequest = async value => {
        if (value !== "") {
            try {
                const response = await axios.get(`https://fitit-app.herokuapp.com/products/search/${value}`);
                return response.data.results;
            } catch (err) {
                console.log(err);
                return [];
            }
        }
        return [];
    };

    const renderSuggestion = suggestion =>
        <div>
            {suggestion.name}
            <Description>
                <Grid>
                    <p>{suggestion.calories} kcal</p>
                    <p>{suggestion.carbohydrates} g</p>
                    <p>{suggestion.proteins} g</p>
                    <p>{suggestion.fats} g</p>
                </Grid>
            </Description>
        </div>;

    const onSuggestionsFetchRequested = async ({value}) => {
        setSuggestions(await getSuggestions(value));
    };
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };
    const getSuggestionValue = suggestion => {
        setProduct(suggestion);
        return suggestion.name
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
                placeholder: 'Type your product',
                value: input,
                onChange: ((event, {newValue}) => setInput(newValue)),
                onKeyDown: handleEnter
            }}
        />
    )
};

const Description = styled.div`
  font-size: 0.75rem;
  color: #a9a9a9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export default AutoSuggest;