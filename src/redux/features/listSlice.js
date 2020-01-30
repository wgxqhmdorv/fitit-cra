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

export const { addItem, deleteItem } = listSlice.actions;

export default listSlice.reducer;
