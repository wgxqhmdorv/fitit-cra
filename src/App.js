import React from "react";
import List from "./components/list/list";
import Register from "./components/userAdmission/register";
import { Provider } from "react-redux";
import { initStore } from "./redux";
import withLayout from "./components/layout/withLayout";

const store = initStore();

const App = () => (
  <Provider store={store}>
    <Register />
  </Provider>
);

export default withLayout(App);
