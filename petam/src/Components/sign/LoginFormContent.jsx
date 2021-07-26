import React, { Component, useState } from "react";
import "./sign.css";
import { useUserDispatch, useUserState } from "../../context/UserContext";
import axios from "axios";
// import {useInput} fron "./useInput";
/* import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from '../Pages/Auth';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
 import * as authActions from '../../redux/modules/auth';
*/
// function LoginFormContent() {
// export default class LoginFormContent extends Component {

// 로그인 content
function LoginFormContent({ userEmail, userPassword, his }) {
  const login = () => {
    const password = userPassword.value;
    const email = userEmail.value;
    // const password = this.userPassword.value;
    // const email = this.userEmail.value;

    axios.get("/api/auth/email/" + email).then((response) => {
      //   alert(response.data.email);
      //   console.log(response.data);
      if (response.data != "x") {
          alert("계정 있음");
          if (response.data.password == password) {
              his.push('/main')
          }
      }
    });
    //   alert(res);
    console.log("toPostDetail");
  };
    
     const [id, onChangeId, setId] = useInput("");
     const [pwd, onChangePwd, setPwd] = useInput("");

      const { userList } = useUserState();
    const dispatch = useUserDispatch();
    
     const onReset = useCallback(() => {
         
       setId("");
       setPwd("");
     }, [setId, setPwd]);

     const onLogin = () => {
       if (!id || !pwd) {
         alert("모든 값을 정확하게 입력해주세요");
         return;
       }
           dispatch({
             type: "LOGIN",
             userId: id,
           });


       alert("로그인");
       onReset();
     };
  //   render = () => (
  return (
    <form>
      <input
        type="text"
        id="login"
        class="mt-2"
        name="email"
        placeholder="email"
        // ref={(ref) => (userEmail = ref)}
        value={id}
        id="user_id"
        onChange={onChangeId}
        // ref={(ref) => (this.userEmail = ref)}
        // value={this.userEmail}
        // onChange={handleChange}
      />
      <input
        type="text"
        id="password"
        class="mt-2"
        name="password"
        placeholder="password"
        onChange={onChangePwd}
        id="user_pwd"
        // ref={(ref) => (userPassword = ref)}
        value={pwd}
        // ref={(ref) => (this.userPassword = ref)}
        // value={this.userPassword}
        // onChange={handleChange}
      />
      <input type="submit" class="mt-4" value="Log In" onClick={onLogin} />
    </form>
  );
}
/* 
export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(LoginFormContent);
 */
export default LoginFormContent;
