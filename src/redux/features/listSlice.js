import { createSlice } from "redux-starter-kit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      return state.filter(item => item.name !== action.payload.name);
    }
  }
});

export const { addItem, deleteItem } = listSlice.actions;

export default listSlice.reducer;
