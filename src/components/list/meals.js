import React from "react";
import { useState } from "react";
import ItemList from "./childComponents/itemList";
import Category from "./childComponents/category";
import Form from "./childComponents/form";
import Collapsible from "react-collapsible";
import styled from "styled-components"

const Meals = ({ meal }) => {
  const [search, setSearch] = useState(false);

  return (
    <Container>
      {!search ? (
        <Collapsible trigger={<Category meal={meal} setSearch={setSearch} />}>
          <ItemList meal={meal} />
        </Collapsible>
      ) : <Form meal={meal} setSearch={setSearch}/>}
    </Container>
  );
};

const Container = styled.div`

`

export default Meals;
