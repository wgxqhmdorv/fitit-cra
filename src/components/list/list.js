import React from "react";
import { useState } from "react";
import Meals from "./meals";
import DatePicker from "../datePicker/datePicker";
import styled from "styled-components/macro";
import Form from "./childComponents/form";
import withLayout from "./../layout/withLayout";
import ProgressBar from "../progressBar/progressBar";

const List = () => {
  const [search, setSearch] = useState(false);
  const [meal, setMeal] = useState("");
  return (
    <>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px"
          }}
        >
          <ProgressBar name="calories" max={2000} color="#55D576" />
          <ProgressBar name="carbohydrates" max={150} color="#91DFFC" />
          <ProgressBar name="proteins" max={112} color="#FFB16A" />
          <ProgressBar name="fats" max={50} color="#BF96D1" />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export default withLayout(List);
