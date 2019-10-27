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
  const [errorMsg, setErrorMsg] = useState({
    username: "",
    email: "",
    pass: "",
    passConfirmation: "",
    validation: ""
  });

  const typeOfErrors = {
    usernameTaken: "Username is already taken",
    usernameNotValid: "Username must be longer than 3 characters",
    emailTaken: "This email is in use",
    emailNotValid: "This email is not valid",
    passNotValid: "Password must be longer than 3 characters",
    passesNotMaching: "Passwords not matching",
    validationError: "Please, fill in missing informations"
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
      setErrorMsg(prevState => ({ ...prevState, validation: false }));
    } else {
      setErrorMsg(prevState => ({ ...prevState, validation: true }));
    }
  };

  const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateUsername = () => {
    if (username.length <= 3) {
      setErrorMsg(prevState => ({
        ...prevState,
        username: typeOfErrors.usernameNotValid
      }));
      return true;
    } else if (temporaryUsers.includes(username.toLowerCase())) {
      setErrorMsg(prevState => ({
        ...prevState,
        username: typeOfErrors.usernameTaken
      }));
      return true;
    }
  };
  const validateEmail = () => {
    if (!validEmailRegex.test(email)) {
      setErrorMsg(prevState => ({
        ...prevState,
        email: typeOfErrors.emailNotValid
      }));
      return true;
    } else if (temporaryEmails.includes(email)) {
      setErrorMsg(prevState => ({
        ...prevState,
        email: typeOfErrors.emailTaken
      }));
      return true;
    }
    return false;
  };

  const validatePass = () => {
    if (pass.length <= 3) {
      setErrorMsg(prevState => ({
        ...prevState,
        pass: typeOfErrors.passNotValid
      }));
      return true;
    }
    return false;
  };

  const comparePasswords = () => {
    if (pass !== passConfirmation && (pass === passConfirmation) !== "") {
      setErrorMsg(prevState => ({
        ...prevState,
        passConfirmation: typeOfErrors.passesNotMaching
      }));
      return true;
    }
    return false;
  };

  return errorMsg.validation === false ? (
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
          errorMsg={errorMsg.username}
          onChange={event => setUsername(event.target.value)}
        />
        <InputForm
          name="Email"
          type="text"
          value={email}
          validate={validateEmail}
          errorMsg={errorMsg.email}
          onChange={event => setEmail(event.target.value)}
        />
        <InputForm
          name="Password"
          type="password"
          value={pass}
          validate={validatePass}
          errorMsg={errorMsg.pass}
          onChange={event => setPass(event.target.value)}
        />
        <InputForm
          name="Repeat password"
          type="password"
          value={passConfirmation}
          validate={() => comparePasswords() && errorMsg.validation}
          errorMsg={errorMsg.passConfirmation}
          onChange={event => setPassConfirmation(event.target.value)}
        />
        <Button id="register-button" type="submit" name="Register" />
        {errorMsg.validation === true ? (
          <Error>{typeOfErrors.validationError}</Error>
        ) : (
          ""
        )}
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

const Error = styled.p`
  color: red;
  text-align: center;
  font-size: 13px;
`;

export default Register;
