import React from "react";
import ItemList from "./childComponents/itemList";
import Category from "./childComponents/category";
import Collapsible from "react-collapsible";

const Meals = ({meal, setSearch, setMeal}) => {
    return (
        <div>
            <Collapsible trigger={<Category meal={meal} setSearch={setSearch} setMeal={setMeal}/>}>
                <ItemList meal={meal}/>
            </Collapsible>
        </div>
    );
};

export default Meals;
