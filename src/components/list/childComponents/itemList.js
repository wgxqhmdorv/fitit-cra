import React from "react";
import Item from "./item";
import { connect } from "react-redux";
import styled from "styled-components";

const ItemList = ({ list, meal }) => (
  <div>
    {list
      .filter(item => item.meal === meal)
      .map(item => (
        <Item item={item} meal={meal} key={item.id} />
      ))}
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ItemList);
