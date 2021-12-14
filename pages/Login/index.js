import React from "react";
import LoginForm from "../../components/login/loginForm";
import loginHandler from "../../lib/auth"

function Login() {


  return (
      <LoginForm onLogin={loginHandler} />
  );
}

export default Login;