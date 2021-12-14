import React from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/taskList";
import withAuth from "../lib/withAuth";
import axios from "axios";
import useSWR from "swr";

// to do fetch task data with in progress status
const fetcher = (url) => axios({ method: "get", url: url });

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

const getRecentApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-recent/5";

const getUserNameApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/authenticate";

const getOutstandingCountApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-outstanding";

const getCompletedCountApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-completed";

function Home() {
  const { data, error } = useSWR(getRecentApiUrl, fetcher);
  const { user, error2 } = useSWR(getUserNameApiUrl, fetcher);
  const { outstanding, error3 } = useSWR(getOutstandingCountApiUrl, fetcher);
  const { completed, error4 } = useSWR(getCompletedCountApiUrl, fetcher);
  if (error) return <div>Please Login</div>;
  if (!data) return <div>Loading</div>;
  console.log(data.data.message);
  return (
    <>
      <HelloBox
        //userName={user.userName}
        //outstandingCount={outstanding.number}
        //completedCount={completed.number}
      />
      <TaskList tasks={data.data.message} />
    </>
  );
}

//export default Home;
export default withAuth(Home);
