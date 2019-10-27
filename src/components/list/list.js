import React from "react";
import ItemList from "./childComponents/itemList";
import Form from "./childComponents/form";
import Category from "./childComponents/category";
import DatePicker from "../datePicker/datePicker";
import styled from "styled-components";
import withLayout from "../layout/withLayout";

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

export default withLayout(List);
