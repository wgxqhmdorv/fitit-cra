import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/list/list";
import Login from "./components/userAdmission/login";
import Register from "./components/userAdmission/register";
import { userLoggedIn } from "./redux/features/authSlice";

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
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={List} />
      </Switch>
    </Router>
  );
};

const mapDispatch = { userLoggedIn };

export default connect(
  null,
  mapDispatch
)(App);
