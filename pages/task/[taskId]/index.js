import React from "react";
import { useRouter } from "next/router";
import TaskDetail from "../../../components/tasks/taskDetail";
import { AppContext } from "../../../store/app-context";
import axios from "axios";
import useSWR from "swr";

// dynamic routing where in the url with specific taskid can show the corresponding task details

const fetcher = (url) => axios({ method: "get", url: url });
/*const data = {
  status: "Completed",
  id: "t5",
  title: "task5",
  startDate: "11-11-2021",
  endDate: "12-11-2021",
  deadline: "12-11-2021",
  details: "no",
  issuer: "TP",
  handler: "Brendon",
};*/

function Details() {
  const router = useRouter();
  const taskId = router.query.taskId;
  const userCtx = React.useContext(AppContext);
  const apiUrl = `https://backend-productivity.herokuapp.com/tasks/api/get-task/${taskId}`;
  React.useEffect(() => {
    if (!userCtx.authenticated) {
      router.push("/login");
    }
  });
  const { data, error } = useSWR(apiUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;

  return (
    <TaskDetail
      status={data.data.task.status}
      id={data.data.task._id}
      title={data.data.task.title}
      startDate={data.data.task.startDate}
      endDate={data.data.task.endData}
      deadline={data.data.task.deadline}
      details={data.data.task.details}
      issuer={data.data.task.issuer}
      handler={data.data.task.handler}
    />
  );
}

export default Details;

