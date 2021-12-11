import React from "react";
import { useRouter } from "next/router";
import TaskDetail from "../../../components/tasks/TaskDetail";

function Details() {
  const router = useRouter();

  const TaskId = router.query.TaskId;

  //send a request to backendAPi
  //fetch task with taskId

  return (
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
  );
}

export default Details;
