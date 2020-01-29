import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import InputForm from "./childComponents/inputForm";
import Button from "./childComponents/button";
import useFormFields from "./childComponents/formHook";
import Form from "./childComponents/form";
import Label from "./childComponents/label";
import Container from "./childComponents/container";
import withLayout from "./../layout/withLayout";

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
      navigate("/login");
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

export default withLayout(Register);
