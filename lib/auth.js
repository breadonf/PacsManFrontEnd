import axios from "axios";

const apiUrl =
  "https://backend-productivity.herokuapp.com/users/api/authenticate";

async function loginHandler(loginInfo) {
  const { password, username } = loginInfo;

  await axios
    .post(apiUrl, { username: username, password: password })
    .then((res) => console.log(res));
}

export default loginHandler;