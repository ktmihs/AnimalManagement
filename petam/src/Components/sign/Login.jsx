import React from "react";
import Content from "../Content";
import "./sign.css";
import LoginForm from "./LoginForm";

function Login({ location, history }) {
  return (
    <Content>
      <LoginForm his={history} />
    </Content>
  );
}
export default Login;

//https://bootsnipp.com/snippets/dldxB
