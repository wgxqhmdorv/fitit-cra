import React from "react";
import styled from "styled-components";
import DatePicker from "../datePicker/datePicker";
import withLayout from "../layout/withLayout";
import Category from "./childComponents/category";
import Form from "./childComponents/form";
import ItemList from "./childComponents/itemList";

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
