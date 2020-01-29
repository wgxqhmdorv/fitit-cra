import React from "react";
import { useState } from "react";
import Meals from "./meals";
import DatePicker from "../datePicker/datePicker";
import styled from "styled-components";
import Form from "./childComponents/form";

const List = () => {
  const [search, setSearch] = useState(false);
  const [meal, setMeal] = useState("");
  return (
    <Container>
      <DatePicker />
      {!search ? (
        <>
          <Meals meal={"Lunch"} setSearch={setSearch} setMeal={setMeal} />
          <Meals meal={"Dinner"} setSearch={setSearch} setMeal={setMeal} />
          <Meals meal={"Supper"} setSearch={setSearch} setMeal={setMeal} />
        </>
      ) : (
        <Form meal={meal} setSearch={setSearch} />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export default List;
