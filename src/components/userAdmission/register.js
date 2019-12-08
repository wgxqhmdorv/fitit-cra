import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputForm from "./childComponents/inputForm";
import Button from "./childComponents/button";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/", {
        email,
        username,
        password,
        confirm_password: passwordConfirmation
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} id="register-form">
      <Container id="register-form-div">
        <Label>Create an account</Label>
        <InputForm
          name="Username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="Enter your username"
        />
        <InputForm
          name="Email"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <InputForm
          name="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Enter your password"
        />
        <InputForm
          name="Repeat password"
          type="password"
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
          placeholder="Repeat password"
        />
        <Button type="submit" name="Register" />
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

export default Register;
