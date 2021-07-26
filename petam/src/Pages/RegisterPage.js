import React from 'react';
import AuthTemplate from '../Components/auth/AuthTemplate';
import RegisterForm from '../Containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
