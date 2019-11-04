import { navigate } from "@reach/router";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { userLoggedIn } from "../../redux/features/authSlice";
import withLayout from "../layout/withLayout";
import Button from "./childComponents/button";
import useFormFields from "./childComponents/formHook";
import InputForm from "./childComponents/inputForm";

const Register = ({ userLoggedIn }) => {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    passwordConfirmation: "",
    verificationCode: ""
  });
  const [isNewUser, setNewUser] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password
      });
      setNewUser(newUser);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleConfirmationSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(fields.email, fields.verificationCode);
      await Auth.signIn(fields.email, fields.password);
      userLoggedIn();
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const renderRegisterForm = () => (
    <Form onSubmit={handleSubmit} id="register-form">
      <Container id="register-form-div">
        <Label>Create an account</Label>
        <InputForm
          name="Email"
          type="text"
          value={fields.email}
          onChange={handleFieldChange}
          placeholder="Enter your email"
        />
        <InputForm
          name="Password"
          type="password"
          value={fields.password}
          onChange={handleFieldChange}
          placeholder="Enter your password"
        />
        <InputForm
          name="Repeat password"
          id="passwordConfirmation"
          type="password"
          value={fields.passwordConfirmation}
          onChange={handleFieldChange}
          placeholder="Repeat password"
        />
        <Button type="submit" name="Register" />
      </Container>
    </Form>
  );

  const renderConfirmationForm = () => (
    <Form onSubmit={handleConfirmationSubmit} id="confirm-form">
      <Container id="register-form-div">
        <Label>Confirm your account</Label>
        <InputForm
          name="Verification code"
          id="verificationCode"
          type="text"
          value={fields.verificationCode}
          onChange={handleFieldChange}
          placeholder="Enter verification code"
        />
        <Button type="submit" name="Confirm your account" />
      </Container>
    </Form>
  );

  return isNewUser ? renderConfirmationForm() : renderRegisterForm();
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
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
  )(Register)
);
