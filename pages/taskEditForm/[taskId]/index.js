import React from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../../store/app-context";
import axios from "axios";
import useSWR from "swr";
import TaskEditForm from "../../../components/tasks/taskEditForm";

// dynamic routing where in the url with specific taskid can show the corresponding task details

const fetcher = (url) => axios({ method: "update", url: url });
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

function EditDetails() {
  const router = useRouter();
  const taskId = router.query.taskId;
  const userCtx = React.useContext(AppContext);
  const apiUrl = `https://backend-productivity.herokuapp.com/tasks/api/update-task/${taskId}`;

  function editHandler () {
    const { data, error } = useSWR(apiUrl, fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading</div>;
    console.log(data);}
  
  React.useEffect(() => {
    if (!userCtx.authenticated) {
      router.push("/login");
    }
  });

  return (
    <div>
      <TaskEditForm onEditTask={editHandler}/>
    </div>
  );
}

export default EditDetails;
