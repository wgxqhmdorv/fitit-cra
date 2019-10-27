import React from "react";
import ItemList from "./itemList";
import Form from "./form";
import Category from "./category";
import DatePicker from "./datePicker/datePicker";
import styled from "styled-components";

const List = () => (
  <Container>
    <DatePicker />
    <Form />
    <Category />
    <ItemList />
  </Container>
);

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export default List;
