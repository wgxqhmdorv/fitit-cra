import React, { StrictMode } from "react";
import { Router } from "@reach/router";

import { Provider } from "react-redux";
import { initStore } from "./redux";
import { fetchRefreshToken } from "./redux/features/authSlice";
import { saveRefreshToken } from "./redux/localStorage";

import List from "./components/list/list";
import Login from "./components/userAdmission/login";
import Register from "./components/userAdmission/register";

const store = initStore();

store.subscribe(() => {
  saveRefreshToken(store.getState());
});

store.dispatch(fetchRefreshToken());
setInterval(() => {
  store.dispatch(fetchRefreshToken());
}, 240000);

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <Router>
        <List path="/" />
        <Login path="login" />
        <Register path="/register" />
      </Router>
    </Provider>
  </StrictMode>
);

export default App;
