import React, { useState, useEffect } from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/taskList";
import withAuth from "../lib/withAuth";
import axios from "axios";
import useSWR from "swr";

// to do fetch task data with in progress status
// const fetcher = (url) => axios({ method: "get", url: url });

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
] 
*/

const getRecentApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-recent/5";

const getUserNameApiUrl =
  "https://backend-productivity.herokuapp.com/users/api/authenticate";

const getOutstandingCountApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-outstanding";

const getCompletedCountApiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/get-completed";

function Home() {
  let userName = {};
  let outstandingCount = {};
  let completedCount = {};
  let recentTasks = {};

  axios.all(
    [
      axios.get(getRecentApiUrl),
      axios.get(getUserNameApiUrl),
      axios.get(getOutstandingCountApiUrl),
      axios.get(getCompletedCountApiUrl),
    ]).then(
      axios.spread((res1, res2, res3, res4) => {
        recentTasks = res1;
        userName = res2;
        outstandingCount = res3;
        completedCount = res4;
        
      })
    );
    console.log(recentTasks);
  /* const { data: res1, error: err1 } = useSWR(getRecentApiUrl, fetcher);
    const { data: res2, error: err2 } = useSWR(getUserNameApiUrl, fetcher);
    const { data: res3, error: err3 } = useSWR(
      getOutstandingCountApiUrl,
      fetcher
    );
    const { data: res4, error: err4 } = useSWR(getCompletedCountApiUrl, fetcher);
 
  
  try {
  if (err1) {
    return <div>Failed to load</div>;
  }

  if (!res1) return <div>Loading</div>;
  else {*/
  return (
    <>
      <HelloBox
        userName={res2.data.user.username}
        outstandingCount={res3.data.number}
        completedCount={res4.data.number}
      />
      <TaskList tasks={res1.data.message} />
    </>
  );
  /*}} catch(e) {
    console.log(e)
  }*/
}

//export default Home;
export default withAuth(Home);
