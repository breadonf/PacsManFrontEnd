import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

const TaskItems = (props) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/task/" + props.id);
  }

  return (
    <Card raised xs={{ p: 2, m: 2 }}>
      <CardActionArea xs={{ m: 2 }} onClick={showDetailsHandler}>
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
              {props.deadline}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body2">
              Issuer:
              {props.issuer}
            </Typography>
          </Grid>
          <Box component="div" sx={{ display: "inline" }}>
            <Typography variant="body2">
              Handler:
              {props.handler}
            </Typography>
          </Box>
        </Grid>
        <Box component="div" sx={{ display: "inline" }}>
          <Typography variant="body2">
            Details:
            {props.details}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default TaskItems;
