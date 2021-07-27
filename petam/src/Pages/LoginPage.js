import React from 'react';
import AuthTemplate from '../Components/auth/AuthTemplate';
import LoginForm from '../Containers/auth/LoginForm';
import Content from '../Components/Content';

import HeaderContainer from '../Containers/common/HeaderContainer';
// import  from "./Components/Leftbar.js";
import Leftbar from "../Components/Leftbar.js";
const LoginPage = () => {
  return (
    <>
{/* <Leftbar/> */}
    {/* <HeaderContainer/> */}
    <Content>
    <AuthTemplate>
      <LoginForm />
      </AuthTemplate>
      </Content>
      </>
  );
};

export default LoginPage;
