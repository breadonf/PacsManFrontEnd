import React from "react";
import { useRouter } from "next/router";
import TaskDetail from "../../../components/tasks/TaskDetail";
import withAuth from "../../../lib/withAuth";
import axios from "axios";
import useSWR from "swr";

// const fetcher = url => axios({method: "get", url: url)
const data = {
  status: "Completed",
  id: "t5",
  title: "task5",
  startDate: "11-11-2021",
  endDate: "12-11-2021",
  deadline: "12-11-2021",
  details: "no",
  issuer: "TP",
  handler: "Brendon",
};

function Details() {
  const router = useRouter();
  const TaskId = router.query.TaskId;

  const apiUrl =
    "https://backend-productivity.herokuapp.com/tasks/api/get-task/" + "Taskld";

  /*const { data, error } = useSWR(apiUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;*/
  return <TaskDetail details={data} />;

  /* return (
    <TaskDetail
      status="Completed"
      id="t5"
      title="task5"
      startDate="11-11-2021"
      endDate="12-11-2021"
      deadline="12-11-2021"
      details="no"
      issuer="TP"
      handler="Brendon"
    />
  );*/
}

export default Details;
// export default withAuth(Details);
