import React from "react";
import Item from "./item";
import { useSelector } from "react-redux";
import moment from "moment";

const ItemList = ({ meal }) => {
  const list = useSelector(state => state.list);
  const date = useSelector(state => moment(state.date).format("YYYY-MM-DD"));

  return (
    <div>
      {list
        .filter(item => item.date === date)
        .filter(item => item.mealtime === meal)
        .map(item => (
          <Item item={item} meal={meal} key={item.id} />
        ))}
    </div>
  );
};

export default ItemList;
