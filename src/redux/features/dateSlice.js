import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const dateSlice = createSlice({
  name: "date",
  initialState: moment().toISOString(),
  reducers: {
    incrementDate(state, action) {
      return moment(state)
        .add(1, "day")
        .toISOString();
    },
    decrementDate(state, action) {
      return moment(state)
        .add(-1, "day")
        .toISOString();
    }
  }
});

export const { decrementDate, incrementDate } = dateSlice.actions;

export default dateSlice.reducer;
