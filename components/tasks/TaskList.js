import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import TaskItems from "./TaskItems";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const TaskList = (props) => {
  return (
    <Grid item xs={12}>
      <Card raised>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Typography variant="h4">Recent tasks</Typography>
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <Card raised sx={{ pb: 2, bgcolor: "lightblue" }}>
            <CardContent style={{ border: "1px solid lightgrey" }}>
              {props.tasks.map((task) => (
                <Card key={task.key} variant="outlined">
                  <TaskItems
                    key={task.key}
                    id={task.id}
                    status={task.status}
                    title={task.title}
                    deadline={task.deadline}
                    issuer={task.issuer}
                    handler={task.handler}
                  />
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TaskList;
