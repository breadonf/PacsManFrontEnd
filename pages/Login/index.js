import React from "react";
import LoginForm from "../../components/login/LoginForm";
import loginHandler from "../../lib/auth"

function Login() {
//   async function loginHandler(loginInfo) {
//     const { password, username } = loginInfo

//     await axios.post(apiUrl, {username: username, password: password}).then(res =>console.log(res))
    
//   }

  return (
      <LoginForm onLogin={loginHandler} />
  );
}

export default Login;