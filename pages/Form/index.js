import React from "react";
import TaskForm from "../../components/tasks/TaskForm";

function Form() {
  function addTaskHandler(enteredTaskData) {
    console.log(enteredTaskData);
  }

  return (
      <TaskForm onAddTask={addTaskHandler} />
  );
}

export default Form;
