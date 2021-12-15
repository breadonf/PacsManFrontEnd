import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// upon clicking on homepage or task table page. the details of the task would be shown here

export default function TaskDetail(props) {
  return (
    <Grid container sx={{ p: 2 }}>
      <Card raised sx={{ width: "90%", minHeight: 400 }}>
        <CardContent>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4" component="div">
              {props.status}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ pb: 2, pt: 2 }}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              sx={{ borderRadius: 5, bgcolor: "lightblue", p: 2 }}
            >
              <Typography variant="h3">{props.title}</Typography>
            </Box>
          </Grid>
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            sx={{ borderRadius: 5, bgcolor: "lightgrey", mb: 2 }}
          >
            <Grid container spacing={2} component="div" sx={{ p: 2 }}>
              <Grid item xs={6}>
                <Typography variant="body2">
                  Start Date: {props.startDate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">
                  End Date: {props.endDate}
                </Typography>
              </Grid>
              <Grid item xs={12} component="div">
                <Typography variant="body2">
                  Deadline: {props.deadline}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Location: {props.location}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Grid item xs={12} sx={{ p: 2, pb: 4 }}>
            <Typography variant="body2">Details: {props.details}</Typography>
          </Grid>
          <Divider />
          <Grid container component="div" sx={{ p: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body2">
                Submited by: {props.issuer}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                Handled by: {props.handler}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ pt: 4, pb: 2 }}>
              <Link href={`/taskEditForm/${props.id}`}>
                <Button variant="contained">Edit</Button>
              </Link>
            </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
