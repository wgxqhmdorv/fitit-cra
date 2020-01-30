import React, { useEffect } from "react";
import ItemList from "./childComponents/itemList";
import Category from "./childComponents/category";
import Collapsible from "react-collapsible";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/features/listSlice";
import styled from "styled-components/macro";

const Meals = ({ meal, setSearch, setMeal }) => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, loggedIn]);

  return (
    <Container>
      <Collapsible
        trigger={
          <Category meal={meal} setSearch={setSearch} setMeal={setMeal} />
        }
      >
        <ItemList meal={meal} />
      </Collapsible>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5px;
  & .Collapsible__trigger {
    display: block;
    background-color: white;
    border: 1px solid #48bb78;
    padding: 0.2rem;
  }
  & .Collapsible__contentInner {
    border: 1px solid #48bb78;
    border-top: 0;
  }
`;

export default Meals;
