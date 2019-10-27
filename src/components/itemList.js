import React from "react";
import Item from "./item";
import { connect } from "react-redux";

const ItemList = ({ list }) => (
  <div>
    {list.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ItemList);
