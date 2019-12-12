import React from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";

const AutoSuggest = ({input, setInput, suggestions, setSuggestions, setProduct}) => {

    const getSuggestions = async value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const products = await handleRequest(inputValue);

        return inputLength === 0 ? [] : products.filter(pos =>
            pos.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const handleRequest = async value => {
        try {
            const response = await axios.get(`https://fitit-app.herokuapp.com/products/search/` + (value !== "" ? value : "empty"));
            return response.data.results;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

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
                onChange: ((event, {newValue}) => setInput(newValue))
            }}
        />
    )
};

export default AutoSuggest;