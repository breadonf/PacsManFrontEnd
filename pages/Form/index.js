import React from "react";
import withAuth from "../../lib/withAuth";
import TaskForm from "../../components/tasks/TaskForm";
import axios from "axios";
const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/create-task";

//const apiUrl ="http://localhost:3001/tasks/api/create-task";
function Form() {
  //function addTaskHandler(enteredTaskData) {
  //console.log(enteredTaskData);
  //}

  async function addTaskHandler(enteredTaskData) {
    console.log(enteredTaskData)
    await axios
      .post(apiUrl, { enteredTaskData })
      .then((res, req) => console.log(req))
      .catch((error) => console.log(error));
  }

  return <TaskForm onAddTask={addTaskHandler} />;
}

export default Form;
// export default withAuth(Form);
