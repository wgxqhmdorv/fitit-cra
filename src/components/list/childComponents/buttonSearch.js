import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Add } from "../../../Resources/plus.svg";

const ButtonSearch = ({ setSearch, meal, setMeal }) => {
  return (
    <ButtonContainer>
      <ButtonStyled
        onClick={event => {
          event.stopPropagation();
          setSearch(true);
          setMeal(meal);
        }}
      >
        <Svg>
          <Add />
        </Svg>
      </ButtonStyled>
    </ButtonContainer>
  );
};

export default ButtonSearch;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
`;

const ButtonStyled = styled.button`
  outline: none;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
`;

const Svg = styled.svg`
  width: 2rem;
  height: 2rem;
`;
