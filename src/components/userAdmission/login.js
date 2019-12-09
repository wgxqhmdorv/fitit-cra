import Button from "./childComponents/button";
import Container from "./childComponents/container";
import Form from "./childComponents/form";
import InputForm from "./childComponents/inputForm";
import Label from "./childComponents/label";
import React from "react";
import useFormFields from "./childComponents/formHook";

const Login = () => {
  const [userFields, handleUserFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(userFields);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Container className="flex flex-col">
        <Label>Login</Label>
        <InputForm
          name="Username"
          type="text"
          value={userFields.username}
          onChange={handleUserFieldChange}
          placeholder="Enter your username"
        />
        <InputForm
          name="Password"
          type="password"
          value={userFields.password}
          onChange={handleUserFieldChange}
          placeholder="Enter your password"
        />
        <Button type="submit" name="Login" />
      </Container>
    </Form>
  );
};

export default Login;
