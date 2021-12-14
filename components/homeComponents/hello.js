import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// A component to display username, number of outstanding and completed tasks.

export default function HelloBox(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ pb: 2 }}>
        <Card raised>
          <CardContent>
            <Grid item xs={12}>
              <Typography variant="h4" component="div">
                Hello {props.userName}!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                You have:
              </Typography>
            </Grid>
            <div style={{ width: "100%", padding: 20 }}>
              <Box
                component="div"
                sx={{
                  display: "inline",
                  m: 1,
                  p: 2,
                  bgcolor: "lightgrey",
                  borderRadius: 5,
                }}
              >
                {props.outstandingCount} Outstanding Task
              </Box>
              <Box
                component="div"
                sx={{
                  display: "inline",
                  m: 1,
                  p: 2,
                  bgcolor: "lightblue",
                  borderRadius: 5,
                }}
              >
                {props.completedCount} Task Completed
              </Box>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
