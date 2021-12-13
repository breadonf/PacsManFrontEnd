import axios from "axios";

axios.defaults.withCredentials = true;

const LoginApiUrl = "http://localhost:3001/users/api/authenticate";

async function loginHandler(loginInfo) {
  const { password, username } = loginInfo;
  let conf = {};
  try {
    await axios
      .post(
        LoginApiUrl,
        { username: username, password: password },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((res) => console.log(res));
  } catch (e) {
    console.log(e);
  }
}

export default loginHandler;
