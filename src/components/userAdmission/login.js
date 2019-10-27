import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputForm from "./childComponents/inputForm";
import Button from "./childComponents/button";
import { Auth } from "aws-amplify";
import { userLoggedIn } from "../../redux/features/authSlice";
import { connect } from "react-redux";
import withLayout from "../layout/withLayout";

const Login = ({ userLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleOnSubmit = async event => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(username, pass);
      console.log(user);

      const session = await Auth.currentSession();
      console.log(session);

      userLoggedIn();
    } catch (e) {
      console.log(e.message);
    }

    setUsername("");
    setPass("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Container className="flex flex-col">
        <Label>Login</Label>
        <InputForm
          name="Username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="Enter your username"
        />
        <InputForm
          name="Password"
          type="password"
          value={pass}
          onChange={event => setPass(event.target.value)}
          placeholder="Enter your password"
        />
        <Button type="submit" name="Login" />
      </Container>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 2rem 0rem;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  padding-bottom: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom-width: 2px;
  border-bottom-color: #48bb78;
  color: #24292e;
  font-weight: 500;
  font-size: 30px;
`;

const Container = styled.div`
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1.5rem #e6e6e6;
  border-radius: 10px;
  padding: 2rem 2rem;
  width: 50%;
`;

const mapDispatch = { userLoggedIn };

export default withLayout(
  connect(
    null,
    mapDispatch
  )(Login)
);
