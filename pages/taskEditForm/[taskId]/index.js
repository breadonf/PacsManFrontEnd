import React from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../../store/app-context";
import axios from "axios";
import TaskEditForm from "../../../components/tasks/taskEditForm";

// dynamic routing where in the url with specific taskid can show the corresponding task details

const fetcher = (url) => axios({ method: "post", url: url });
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
  const taskId = router.query.taskId;
  const apiUrl =  `https://backend-productivity.herokuapp.com/tasks/api/update-task/${taskId}`;
  const router = useRouter();
  const taskId = router.query.taskId;
  const userCtx = React.useContext(AppContext);

  async function editHandler(enteredEditedTaskData) {

    await axios
      .put(apiUrl, { enteredEditedTaskData })
      .then((res, req) => console.log(res))
      .catch((error) => console.log(error));
  }
  
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
