import axios from "axios";
import Cookies from "js-cookie";

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

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");
export const RemoveToken = () => Cookies.remove("access_token");
export const isAuthenticated = () => !!getAccessToken();
