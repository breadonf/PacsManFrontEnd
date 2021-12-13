import React from "react";
import withAuth from "../../lib/withAuth";
import TaskForm from "../../components/tasks/TaskForm";

//const apiUrl =
// "https://backend-productivity.herokuapp.com/users/api/authenticate";

function Form() {
  function addTaskHandler(enteredTaskData) {
    console.log(enteredTaskData);
  }

  //   async function addTaskHandler(enteredTaskData) {
  //     await axios.post(apiUrl, {enteredTaskData}).then((res) =>console.log(res)).catch((error) => console.log(error))
  //   }

  return <TaskForm onAddTask={addTaskHandler} />;
}

export default Form;
// export default withAuth(Form);
