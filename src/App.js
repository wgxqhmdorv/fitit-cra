import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./components/list/list";
import Login from "./components/userAdmission/login";
import Register from "./components/userAdmission/register";
import { userLoggedIn } from "./redux/features/authSlice";
import { Router } from "@reach/router";

const App = ({ userLoggedIn }) => {
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const session = await Auth.currentSession();
      console.log(session);
      userLoggedIn();
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
  }

  return (
    <Router>
      <Register path="/register" />
      <Login path="/login" />
      <List path="/" />
    </Router>
  );
};

const mapDispatch = { userLoggedIn };

export default connect(
  null,
  mapDispatch
)(App);
