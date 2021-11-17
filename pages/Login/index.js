import React from "react";
import LoginForm from "../../components/login/LoginForm";

function Login() {
  function loginHandler(loginInfo) {
    console.log(loginInfo);
  }

  return (
      <LoginForm onLogin={loginHandler} />
  );
}

export default Login;