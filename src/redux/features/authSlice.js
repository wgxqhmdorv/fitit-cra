import axios from "axios";
import { createSlice } from "redux-starter-kit";
import { loadRefreshToken } from "./../localStorage";

const refreshToken = loadRefreshToken();

const authSlice = createSlice({
  name: "auth",
  initialState: { refresh: refreshToken, loggedIn: false },
  reducers: {
    getTokens(state, action) {
      return { ...state, ...action.payload, loggedIn: true };
    },
    refreshTokenSuccess(state, action) {
      state.access = action.payload.access;
      state.loggedIn = true;
    },
    refreshTokenFailure(state, action) {
      state.access = undefined;
      state.refresh = undefined;
      state.loggedIn = false;
    }
  }
});

export const {
  getTokens,
  refreshTokenSuccess,
  refreshTokenFailure
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

      dispatch(refreshTokenFailure());
    }
  }
};
