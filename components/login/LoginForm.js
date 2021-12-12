import React, { useState } from "react";
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
<<<<<<< HEAD
  const [newUserName, setUserName] = useState();
  const [newPassword, setPassword] = useState();
  state = { err: "" };

  const router = useRouter();

  function submitHandler(event) {
    event.preventDefault();
    this.setState({ error: "" });
    const enteredUserName = newUserName;
    const enteredPassword = newPassword;

=======
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  function submitHandler(event) {
    event.preventDefault();
>>>>>>> 327bf4f6923375da2e660b573b7cdfdb4285a2f3
    const loginData = {
      username: enteredUserName,
      password: enteredPassword,
    };
<<<<<<< HEAD

    props
      .onLogin(loginData)
      .then(() => {
        router.push("./");
      })
      .catch(this.showError);
  }

  showError = (err) => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error });
  };

  // const {error} = this.state;

=======
    props.onLogin(loginData);
  }
  const handleChange = ({ target }) => {
    switch(target.id){
        case "username":
          setUserName(target.value);
            break;
        case "password":
          setPassword(target.value);
            break;
        default:
            return;
    }
}
>>>>>>> 327bf4f6923375da2e660b573b7cdfdb4285a2f3
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
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
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
                // value={newPassword}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
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
          {error && <div>{error}</div>}
        </Box>
      </Grid>
    </Grid>
  );
}
