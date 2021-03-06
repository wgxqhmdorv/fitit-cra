import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import ButtonSearch from "./buttonSearch";
import moment from "moment";

const reduceObjects = (array, key, meal) =>
  array.reduce(
    (prevValue, nextValue) =>
      nextValue.mealtime === meal ? prevValue + nextValue[key] : prevValue,
    0
  );

const Category = ({ meal, setSearch, setMeal }) => {
  let { list } = useSelector(state => state);
  const date = useSelector(state => moment(state.date).format("YYYY-MM-DD"));
  list = list.filter(item => item.date === date);

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: "600" }}>{meal}</p>
        <Grid>
          <p>{reduceObjects(list, "calories", meal)} kcal</p>
          <p>{reduceObjects(list, "carbohydrates", meal)} g</p>
          <p>{reduceObjects(list, "proteins", meal)} g</p>
          <p>{reduceObjects(list, "fats", meal)} g</p>
        </Grid>
      </div>
      <ButtonSearch setSearch={setSearch} meal={meal} setMeal={setMeal} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  background-color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 0.75rem;
  color: #a9a9a9;
`;

export default Category;
