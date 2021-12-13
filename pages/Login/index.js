import React from "react";
import LoginForm from "../../components/login/LoginForm";
import loginHandler from "../../lib/auth"

function Login() {


  return (
      <LoginForm onLogin={loginHandler} />
  );
}

export default Login;