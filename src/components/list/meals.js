import React, { useEffect } from "react";
import ItemList from "./childComponents/itemList";
import Category from "./childComponents/category";
import Collapsible from "react-collapsible";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/features/listSlice";

const Meals = ({ meal, setSearch, setMeal }) => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, loggedIn]);

  return (
    <div>
      <Collapsible
        trigger={
          <Category meal={meal} setSearch={setSearch} setMeal={setMeal} />
        }
      >
        <ItemList meal={meal} />
      </Collapsible>
    </div>
  );
};

export default Meals;
