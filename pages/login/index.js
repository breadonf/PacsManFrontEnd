import LoginForm from "../../components/login/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import {AppContext} from '../../store/app-context'


axios.defaults.withCredentials = true;

const LoginApiUrl =
  "https://backend-productivity.herokuapp.com/users/api/authenticate";
//const LoginApiUrl = "http://localhost:3001/users/api/authenticate"

// const UserApiUrl = "https://backend-productivity.herokuapp.com/users/api/profile"

function Login({usernameState, setUsername}) {
  const router = useRouter();
  const userCtx = useContext(AppContext);
  async function loginHandler(loginInfo) {
    const { password, username } = loginInfo; 
    try {
      await axios
        .post(
          LoginApiUrl,
          { username: username, password: password },
          {
            headers: {
              "Access-Control-Allow-Origin": "https://taskmanager-one.vercel.app/",
              "Access-Control-Allow-Methods": "POST",
            },
          }
        )
        .then((res) => {
          userCtx.login(res.data.user)
          window.localStorage.setItem("userID", res.data.user._id);
          window.localStorage.setItem("username", res.data.user.username);
          console.log(usernameState)
          setUsername(res.data.user.username)
          router.replace("/");
        });
    } catch (e) {
      console.log(e);
    }
  }

  return <LoginForm onLogin={loginHandler} />;
}

export default Login;
