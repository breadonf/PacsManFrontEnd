import axios from "axios";

//axios.defaults.withCredentials = true;

const LoginApiUrl =
  "https://backend-productivity.herokuapp.com/users/api/authenticate";

// const UserApiUrl =
//  "https://backend-productivity.herokuapp.com/users/api/profile"

async function loginHandler(loginInfo) {
  const { password, username } = loginInfo;

  await axios
    .post(LoginApiUrl, { username: username, password: password })
    .then((res) => console.log(res));
}

export default loginHandler;

export const getUserProfile = async () => {
  const { data } = await axios.get(UserApiUrl);
  return data;
};
