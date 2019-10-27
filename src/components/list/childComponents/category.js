import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const reduceObjects = (array, key) =>
  array.reduce((prevValue, nextValue) => prevValue + nextValue[key], 0);

const Category = ({ list }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p style={{ fontWeight: "700" }}>Summary</p>
      <Grid>
        <p>{reduceObjects(list, "calories")} kcal</p>
        <p>{reduceObjects(list, "carbohydrates")} g</p>
        <p>{reduceObjects(list, "proteins")} g</p>
        <p>{reduceObjects(list, "fats")} g</p>
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 0.75rem;
  color: #a9a9a9;
  padding: 0 0.5rem 0 0.5rem;
`;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Category);
