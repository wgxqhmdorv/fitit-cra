import List from "./components/list/list";
import Login from "./components/userAdmission/login";
import { Provider } from "react-redux";
import React from "react";
import Register from "./components/userAdmission/register";
import { fetchRefreshToken } from "./redux/features/authSlice";
import { initStore } from "./redux";
import { saveRefreshToken } from "./redux/localStorage";
import withLayout from "./components/layout/withLayout";

const store = initStore();

store.subscribe(() => {
  saveRefreshToken(store.getState());
});

store.dispatch(fetchRefreshToken());
setInterval(() => {
  store.dispatch(fetchRefreshToken());
}, 240000);

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default withLayout(App);
