import React from "react";
import List from "./components/list";
import Register from "./components/userAdmission/register";
import Login from "./components/userAdmission/login";
import { Provider } from "react-redux";
import { initStore } from "./redux";
import withLayout from "./components/withLayout";

const store = initStore();

const App = () => (
  <Provider store={store}>
    <Register />
    <Login />
  </Provider>
);

export default withLayout(App);
