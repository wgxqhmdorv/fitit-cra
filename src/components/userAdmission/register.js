import React from "react";
import styled from "styled-components";
import InputForm from "./childComponents/inputForm";
import Button from "./childComponents/button";
import useFormFields from "./childComponents/formHook";
import axios from "axios";

const Register = () => {
  const [userFields, handleUserFieldChange] = useFormFields({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fitit-app.herokuapp.com/users/",
        userFields
      );
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
          value={userFields.username}
          onChange={handleUserFieldChange}
          placeholder="Enter your username"
        />
        <InputForm
          name="Email"
          type="text"
          value={userFields.email}
          onChange={handleUserFieldChange}
          placeholder="Enter your email"
        />
        <InputForm
          name="Password"
          type="password"
          value={userFields.password}
          onChange={handleUserFieldChange}
          placeholder="Enter your password"
        />
        <InputForm
          name="Repeat password"
          id="confirmPassword"
          type="password"
          value={userFields.passwordConfirmation}
          onChange={handleUserFieldChange}
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
