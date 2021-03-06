import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import TaskItems from "./taskItems";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// a wraper of recent task items. where each task fetched from database would passed to the taskitem.js

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
                <Card key={task._id} variant="outlined" sx={{p:2}}>
                  <TaskItems
                    id={task._id}
                    status={task.status}
                    title={task.title}
                    deadline={task.deadline}
                    issuer={task.issuer}
                    handler={task.handler}
                    category={task.category}
                    location={task.location}
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
