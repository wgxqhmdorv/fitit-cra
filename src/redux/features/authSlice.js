import { createSlice } from "redux-starter-kit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, isNewUser: null },
  reducers: {
    userLoggedIn: state => {
      state.isAuthenticated = true;
    },
    userLoggedOut: state => {
      state.isAuthenticated = false;
    }
  }
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
