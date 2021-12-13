import axios from "axios";

axios.defaults.withCredentials = true;

//const LoginApiUrl ="https://backend-productivity.herokuapp.com/users/api/authenticate";
const LoginApiUrl = "http://localhost:3001/users/api/authenticate"

// const UserApiUrl =
//  "https://backend-productivity.herokuapp.com/users/api/profile"

async function loginHandler(loginInfo) {
  const { password, username } = loginInfo;
  let conf = {
    
  };
  try {
    await axios
    .post(LoginApiUrl, { username: username, password: password }, {headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    }})
    .then((res) => console.log( res));
  } catch (e) {
    console.log(e)
  }
  
}

export default loginHandler;

// export const getUserProfile = async () => {
// const { data } = await axios.get(UserApiUrl);
//return data;
//};
