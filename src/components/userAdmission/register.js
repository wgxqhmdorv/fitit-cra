import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputForm from "./childComponents/inputForm";
import Button from "./childComponents/button";
import Success from "./success";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");
  const [errorState, setErrorState] = useState({
    username: { msg: "", state: false },
    email: { msg: "", state: false },
    pass: { msg: "", state: false },
    passConfirmation: { msg: "", state: false },
    validation: false
  });

  const typeOfErrors = {
    usernameTaken: "Username is already taken",
    usernameNotValid: "Username must be longer than 3 characters",
    emailTaken: "This email is in use",
    emailNotValid: "This email is not valid",
    passNotValid: "Password must be longer than 3 characters",
    passesNotMaching: "Passwords not matching"
  };

  const temporaryUsers = [
    "john",
    "adam",
    "michal",
    "nezouse",
    "shellmodule",
    "bartar",
    ""
  ];

  const temporaryEmails = ["temp@gmail.com", "123ok@tlen.pl", "szybko@wp.pl"];

  const handleOnSubmit = event => {
    event.preventDefault();
    document.getElementById("register-button").focus();

    if (
      !validateUsername() &&
      !validateEmail() &&
      !validatePass() &&
      !comparePasswords()
    ) {
      setErrorState(prevState => ({ ...prevState, validation: true }));
    }
  };

  const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateUsername = () => {
    if (username.length <= 3) {
      setErrorState(prevState => ({
        ...prevState,
        username: { msg: typeOfErrors.usernameNotValid, state: true }
      }));
      return true;
    } else if (temporaryUsers.includes(username.toLowerCase())) {
      setErrorState(prevState => ({
        ...prevState,
        username: { msg: typeOfErrors.usernameTaken, state: true }
      }));
      return true;
    }
    setErrorState(prevState => ({
      ...prevState,
      username: { msg: "", state: false }
    }));
    return false;
  };
  const validateEmail = () => {
    if (!validEmailRegex.test(email)) {
      setErrorState(prevState => ({
        ...prevState,
        email: { msg: typeOfErrors.emailNotValid, state: true }
      }));
      return true;
    } else if (temporaryEmails.includes(email)) {
      setErrorState(prevState => ({
        ...prevState,
        email: { msg: typeOfErrors.emailTaken, state: true }
      }));
      return true;
    }
    setErrorState(prevState => ({
      ...prevState,
      email: { msg: "", state: false }
    }));
    return false;
  };

  const validatePass = () => {
    if (pass.length <= 3) {
      setErrorState(prevState => ({
        ...prevState,
        pass: { msg: typeOfErrors.passNotValid, state: true }
      }));
      return true;
    }
    setErrorState(prevState => ({
      ...prevState,
      pass: { msg: "", state: false }
    }));
    return false;
  };

  const comparePasswords = () => {
    if (pass !== passConfirmation && (pass === passConfirmation) !== "") {
      setErrorState(prevState => ({
        ...prevState,
        passConfirmation: { msg: typeOfErrors.passesNotMaching, state: true }
      }));
      return true;
    }
    setErrorState(prevState => ({
      ...prevState,
      passConfirmation: { msg: "", state: false }
    }));
    return false;
  };

  return errorState.validation ? (
    <Success />
  ) : (
    <Form onSubmit={handleOnSubmit} id="register-form">
      <Container id="register-form-div">
        <Label>Create an account</Label>
        <InputForm
          name="Username"
          type="text"
          value={username}
          validate={validateUsername}
          errorMsg={errorState.username.msg}
          errorState={errorState.username.state}
          onChange={event => setUsername(event.target.value)}
        />
        <InputForm
          name="Email"
          type="text"
          value={email}
          validate={validateEmail}
          errorMsg={errorState.email.msg}
          errorState={errorState.email.state}
          onChange={event => setEmail(event.target.value)}
        />
        <InputForm
          name="Password"
          type="password"
          value={pass}
          validate={validatePass}
          errorMsg={errorState.pass.msg}
          errorState={errorState.pass.state}
          onChange={event => setPass(event.target.value)}
        />
        <InputForm
          name="Repeat password"
          type="password"
          value={passConfirmation}
          validate={comparePasswords}
          errorMsg={errorState.passConfirmation.msg}
          errorState={errorState.passConfirmation.state}
          onChange={event => setPassConfirmation(event.target.value)}
        />
        <Button id="register-button" type="submit" name="Register" />
      </Container>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  padding-bottom: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom-width: 2px;
  border-bottom-color: #48bb78;
  text-align: center;
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

export default Register;
