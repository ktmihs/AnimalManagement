import React from 'react';
import AuthTemplate from '../Components/auth/AuthTemplate';
import HLoginForm from '../Containers/auth/HLoginForm';
import Content from '../Components/Content';

import HeaderContainer from '../Containers/common/HeaderContainer';
// import  from "./Components/Leftbar.js";
import Leftbar from '../Components/Leftbar.js';
const LoginPage = () => {
  return (
    <>

      <Content>
        <AuthTemplate>
          <HLoginForm />
        </AuthTemplate>
      </Content>
    </>
  );
};

export default LoginPage;
