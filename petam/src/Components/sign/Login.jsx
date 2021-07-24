import React from "react";
import Content from "../Content";
import "./sign.css";
import LoginForm from "./LoginForm";

// 로그인 페이지
function Login({ location, history }) {
  return (
    <Content>
      <LoginForm his={history} />
    </Content>
  );
}
export default Login;

//https://bootsnipp.com/snippets/dldxB
