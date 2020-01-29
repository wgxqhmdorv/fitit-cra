import React from "react";
import Meals from "./meals";
import DatePicker from "../datePicker/datePicker";
import styled from "styled-components";

const List = () => (
  <Container>
    <DatePicker />
    <Meals meal={"Lunch"}/>
    <Meals meal={"Dinner"}/>
    <Meals meal={"Supper"}/>
  </Container>
);

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export default List;
