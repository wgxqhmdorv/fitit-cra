import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    setState(state, action) {
      const products = [];
      action.payload.forEach(product =>
        products.push({ ...product.product, ...product })
      );
      console.log(action.payload);
      return products;
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const addItemAsync = action => async dispatch => {
  try {
    await axios.post("https://fitit-app.herokuapp.com/products/userProducts/", {
      action
    });
    dispatch(addItem(action));
  } catch (err) {
    console.log(err);
  }
};

export const getItems = () => async dispatch => {
  try {
    const products = await axios.get(
      "https://fitit-app.herokuapp.com/products/userProducts/"
    );
    dispatch(setState(products.data));
  } catch (err) {
    console.log(err);
  }
};

export const { addItem, deleteItem, setState } = listSlice.actions;

export default listSlice.reducer;
