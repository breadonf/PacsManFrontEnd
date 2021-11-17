import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TaskDetail(props) {
  return (
    <Grid container xs={12} sx={{ p: 2 }}>
      <Card raised>
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h4" component="div">
              {props.status}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              sx={{ borderRadius: 5, bgcolor: "lightblue" }}
            >
              <Typography variant="h3">{props.title}</Typography>
            </Box>
          </Grid>
          <Grid container component="div">
            <Grid item xs={6}>
              <Typography variant="body2">
                Start Date: {props.startDate}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">End Date: {props.endDate}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} component="div">
            <Typography variant="body2">{props.deadline}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{props.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{props.details}</Typography>
          </Grid>
          <Grid container component="div">
            <Grid item xs={6}>
              <Typography variant="body2">{props.issuer}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{props.handler}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
