import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import InputLabel from "@mui/material/InputLabel";

export default function LoginForm(props) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  function submitHandler(event) {
    event.preventDefault();
    const loginData = {
      username: userName,
      password: password
    };
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
  return (
    <Grid container spacing={2}  direction="column"
    alignItems="center"
    justifyContent="center">
      <Grid item xs={12} lg={10}>
        <Box component="form">
          <Grid item xs={10} sx={{ p: 2, m: 2 }}>
            <FormControl fullWidth>
              <InputLabel>User Name</InputLabel>
              <Input
                type="text"
                id="username"
                value={userName}
                onChange={handleChange}
              >
                User Name
              </Input>
            </FormControl>
          </Grid>
          <Grid item xs={10} sx={{ p: 2, m: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
              >
                Password
              </Input>
            </FormControl>
          </Grid>
          <Grid item xs={3} sx={{ p: 2, m: 2 }}>
            <FormControl fullWidth>
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
          <Grid item xs={3} sx={{ p: 2, m: 2 }}>
            <Link href="/">
              <Button variant="contained" fullWidth>Back to Home</Button>
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
