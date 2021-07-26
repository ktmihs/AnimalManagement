import React from "react";
import "./sign.css";
import LoginTitle from "./LoginTitle";
import LoginFormContent from "./LoginFormContent";
import LoginFormFooter from "./LoginFormFooter";

// 로그인 페이지 상세정보
function LoginForm({ his }) {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <LoginTitle />
        <LoginFormContent his={his} />
        <LoginFormFooter />
      </div>
    </div>
  );
}
export default LoginForm;
