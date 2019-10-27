import React from "react";
import List from "./components/list";
import { Provider } from "react-redux";
import { initStore } from "./redux";
import withLayout from "./components/withLayout";

const store = initStore();

const App = () => (
  <Provider store={store}>
    <List />
  </Provider>
);

export default withLayout(App);
