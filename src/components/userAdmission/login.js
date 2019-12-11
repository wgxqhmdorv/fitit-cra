import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Button from "./childComponents/button";
import Container from "./childComponents/container";
import Form from "./childComponents/form";
import InputForm from "./childComponents/inputForm";
import Label from "./childComponents/label";
import useFormFields from "./childComponents/formHook";
import { getTokens } from "./../../redux/features/authSlice";
import withLayout from "./../layout/withLayout";

const Login = () => {
  const dispatch = useDispatch();
  const [userFields, handleUserFieldChange] = useFormFields({
    username: "",
    password: ""
  });

  const handleOnSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fitit-app.herokuapp.com/users/get_token/",
        userFields
      );
      dispatch(getTokens(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
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

export default withLayout(Login);
