import React from "react";
import Item from "./item";
import { useSelector } from "react-redux";

const ItemList = () => {
  const { list } = useSelector(state => state);

  return (
    <div>
      {list.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
