import { Auth } from "aws-amplify";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { userLoggedIn } from "../../redux/features/authSlice";
import withLayout from "../layout/withLayout";
import Button from "./childComponents/button";
import InputForm from "./childComponents/inputForm";
import useFormFields from "./childComponents/formHook";

const Login = ({ userLoggedIn }) => {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  const handleOnSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(fields.username, fields.password);
      userLoggedIn();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Container className="flex flex-col">
        <Label>Login</Label>
        <InputForm
          name="Username"
          type="text"
          value={fields.username}
          onChange={handleFieldChange}
          placeholder="Enter your username"
        />
        <InputForm
          name="Password"
          type="password"
          value={fields.password}
          onChange={handleFieldChange}
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
