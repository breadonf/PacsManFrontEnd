import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import TaskItems from "./TaskItems";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

const TaskList = (props) => {
  return (
    <Grid item xs={12} sx={{p:2}}>
      <Card raised>
        <Grid item xs={12}>
          <Typography variant="h4">Recent tasks</Typography>
        </Grid>
        <Card raised sx={{ display: "inline" }}>
          <CardContent>
            {props.tasks.map((task) => (
              <TaskItems
                key={task.id}
                id={task.id}
                status={task.status}
                title={task.title}
                deadline={task.deadline}
                issuer={task.issuer}
                handler={task.handler}
              />
            ))}
          </CardContent>
        </Card>
      </Card>
    </Grid>
  );
};

export default TaskList;
