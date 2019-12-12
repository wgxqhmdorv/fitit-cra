import React from "react";
import Item from "./item";
import {useSelector} from "react-redux";

const ItemList = ({meal}) => {
    const {list} = useSelector(state => state);
    return (
        <div>
            {list
                .filter(item => item.meal === meal)
                .map(item => (
                    <Item item={item} meal={meal} key={item.id}/>
                ))}
        </div>
    );
};

export default ItemList;
