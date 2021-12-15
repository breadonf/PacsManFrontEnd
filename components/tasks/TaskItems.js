import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

// a quick view of recent tasks for the login page

const TaskItems = (props) => {
  const router = useRouter();

  function ShowDetailsHandler() {
    router.push("/task/" + props.id);
  }

  return (
    <CardActionArea xs={{ m: 2 }} onClick={ShowDetailsHandler}>
      <Grid item xs={10}>
        <Typography variant="h5" component="div">
          Task:
          {props.title}
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="body2">
            Status:
            {props.status}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">
            Deadline:
            {new Date(props.deadline)}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">
            Category:
            {props.category}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">
            Location:
            {props.location}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">
            Issuer:
            {props.issuer}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">
            Handler:
            {props.handler}
          </Typography>
        </Grid>
      </Grid>
      <br></br>
    </CardActionArea>
  );
};

export default TaskItems;
