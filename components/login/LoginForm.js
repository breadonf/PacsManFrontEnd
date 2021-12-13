import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import InputLabel from "@mui/material/InputLabel";

export default function LoginForm(props) {
  //const [newUserName, setUserName] = useState();
  //const [newPassword, setPassword] = useState();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  //const [newPassword, setPassword] = useState();

  const router = useRouter();
  function submitHandler(event) {
    event.preventDefault();
    const enteredUserName = userNameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //  const [userName, setUserName] = useState();
    // const [password, setPassword] = useState();

   // function submitHandler(event) {
     // event.preventDefault();
    const loginData = {
      username: enteredUserName,
      password: enteredPassword,
      };

      props.onLogin(loginData).then(() => {
        console.log((window.localStorage.getItem('currentUser')))
        router.push("/");
      });
    }

    // const {error} = this.state;

    // props.onLogin(loginData);
  
  /*  const handleChange = ({ target }) => {
    switch (target.id) {
      case "username":
        setUserName(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        return;
    }
  }; */
  
  return (
    <Grid container spacing={2} alignContent="center" justifyContent="center">
      <Grid item>
        <Box component="form">
          <Grid item xs={12} sx={{ p: 2, m: 2 }}>
            <FormControl fullWidth>
              <InputLabel>User Name</InputLabel>
              <Input
                required
                type="text"
                id="username"
                // value={newUserName}
                inputRef={userNameInputRef}
                // onChange={(event) => {
                //  setUserName(event.target.value);
                //}}
              >
                User Name
              </Input>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ p: 2, m: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                required
                type="password"
                id="password"
                inputRef={passwordInputRef}
                // value={newPassword}
                //onChange={(event) => {
                //  setPassword(event.target.value);
                //}}
              >
                Password
              </Input>
            </FormControl>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={3} sx={{ p: 2, m: 2 }}>
              <FormControl>
                <Button
                  variant="contained"
                  type="submit"
                  aria-label="submit"
                  endIcon={<SendAndArchiveIcon />}
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ p: 2, m: 2 }}>
              <Link href="/">
                <Button variant="contained">Back to Home</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
