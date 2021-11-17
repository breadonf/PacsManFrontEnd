import Typography from "@material-ui/core/Typography";
import React from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/TaskList";

const Dummy_tasks =[
  {
    id:'t1',
    title:'task1',
    status: 'in Progress',
    deadline: '11-11-2021',
    issuer: 'brendon',
    handler: 'will',
  },
  {
    id:'t2',
    title:'task2',
    status: 'in Progress',
    deadline: '12-11-2021',
    issuer: 'will',
    handler: 'brendon',
  }
]

function Home() {
  return (
    <>
      <HelloBox />
      <TaskList tasks={Dummy_tasks} />
    </>
  );
}

export default Home;
