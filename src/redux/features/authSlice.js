import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { loadRefreshToken } from "./../localStorage";

const refreshToken = loadRefreshToken();

const authSlice = createSlice({
  name: "auth",
  initialState: { refresh: refreshToken, loggedIn: false },
  reducers: {
    setTokens(state, action) {
      axios.defaults.headers.Authorization = "Bearer " + action.payload.access;
      return { ...state, ...action.payload, loggedIn: true };
    },
    refreshTokenSuccess(state, action) {
      state.access = action.payload.access;
      axios.defaults.headers.Authorization = "Bearer " + action.payload.access;
      state.loggedIn = true;
    },
    deleteTokens(state, action) {
      state.access = undefined;
      state.refresh = undefined;
      state.loggedIn = false;
      axios.defaults.headers.Authorization = "";
    }
  }
});

export const {
  setTokens,
  refreshTokenSuccess,
  deleteTokens
} = authSlice.actions;

export default authSlice.reducer;

export const fetchRefreshToken = () => async dispatch => {
  const refresh = loadRefreshToken();
  if (refresh) {
    try {
      const response = await axios.post(
        "https://fitit-app.herokuapp.com/users/refresh_token/",
        { refresh }
      );
      dispatch(refreshTokenSuccess(response.data));
    } catch (err) {
      console.log(err);
      dispatch(deleteTokens());
    }
  }
};

export const blacklistToken = () => async dispatch => {
  const token = loadRefreshToken();
  if (token) {
    try {
      await axios.post(
        "https://fitit-app.herokuapp.com/users/blacklist_token/",
        { token }
      );
      dispatch(deleteTokens());
    } catch (err) {
      console.log(err);
    }
  }
};
