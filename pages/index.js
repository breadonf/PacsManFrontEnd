import React from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/TaskList";
import withAuth from "../lib/withAuth";
import axios from "axios";
import useSWR from "swr";

// to do fetch task data with in progress status
const fetcher = (url) => axios({ method: "get", url: url });
// const fetcher = url => axios({method: "get", url: url)

/* const Dummy_tasks =[
  {
    id:'t1',
    key:"1",
    title:'task1',
    status: 'in Progress',
    deadline: '11-11-2021',
    issuer: 'brendon',
    handler: 'will',
  },
  {
    id:'t2',
    key:"2",
    title:'task2',
    status: 'in Progress',
    deadline: '12-11-2021',
    issuer: 'will',
    handler: 'brendon',
  }
] */

function Home() {
  const apiUrl =
    "https://backend-productivity.herokuapp.com/tasks/api/get-recent/5";

  const { data, error } = useSWR(apiUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;

  return (
    <>
      <HelloBox />
      <TaskList tasks={data} />
    </>
  );
}

export default Home;
// export default withAuth(Home);
