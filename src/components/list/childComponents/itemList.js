import React from "react";
import { connect } from "react-redux";
import Item from "./item";

const ItemList = ({ list }) => (
  <div>
    {list.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ItemList);
