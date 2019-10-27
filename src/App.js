import React from "react";
import Register from "./components/userAdmission/register";
import { Provider } from "react-redux";
import { initStore } from "./redux";
import withLayout from "./components/withLayout";

const store = initStore();

const App = () => (
  <Provider store={store}>
    <Register />
  </Provider>
);

export default withLayout(App);
