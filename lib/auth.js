import axios from "axios";

axios.defaults.withCredentials = true;

const LoginApiUrl = "https://backend-productivity.herokuapp.com/users/api/authenticate";
 //const LoginApiUrl = "http://localhost:3001/users/api/authenticate"

// const UserApiUrl = "https://backend-productivity.herokuapp.com/users/api/profile"

async function loginHandler(loginInfo) {
  const { password, username } = loginInfo;

  try {
    await axios
      .post(
        LoginApiUrl,
        { username: username, password: password },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .then((res) => console.log("Logined"));
  } catch (e) {
    console.log(e);
  }
}

export default loginHandler;

// export const getUserProfile = async () => {
// const { data } = await axios.get(UserApiUrl);
//return data;
//};
