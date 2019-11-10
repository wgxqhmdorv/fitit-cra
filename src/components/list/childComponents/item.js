import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../redux/features/listSlice";
import styled from "styled-components";

const Item = ({ item, deleteItem }) => {
  return (
    <Container>
      <Flexbox>
        <p>{item.name}</p>
        <button onClick={() => deleteItem(item)}>
          <Svg xmlns="http://www.w3.org/2000/svg">
            <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
          </Svg>
        </button>
      </Flexbox>
      <Description>
        <p>{item.weight} g</p>
        <Grid>
          <p>{item.calories} kcal</p>
          <p>{item.carbohydrates} g</p>
          <p>{item.proteins} g</p>
          <p>{item.fats} g</p>
        </Grid>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 0.2rem;
  margin-left: 1rem;
  background: white;
  padding: 0.5rem;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Svg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: black;
  fill: currentColor;
`;

const Description = styled.div`
  font-size: 0.75rem;
  color: #a9a9a9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const mapDispatchToProps = { deleteItem };

export default connect(
  null,
  mapDispatchToProps
)(Item);
