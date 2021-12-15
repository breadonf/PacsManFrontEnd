import React from "react";
import TaskForm from "../../components/tasks/taskForm";
import axios from "axios";
import useSWR from "swr";

const apiUrl =
  "https://backend-productivity.herokuapp.com/tasks/api/create-task";

const getOptionsUrl =
  "https://backend-productivity.herokuapp.com/users/api/options";

const fetcher = (url) =>
  axios({ method: "get", url: url }).then((res) => res.data.message);

function Form() {
  //function addTaskHandler(enteredTaskData) {
  //console.log(enteredTaskData);
  //}

  async function addTaskHandler(enteredTaskData) {

    await axios
      .post(apiUrl, { enteredTaskData })
      .then((res, req) => console.log(req))
      .catch((error) => console.log(error));
  }

  const { data, error } = useSWR(getOptionsUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading</div>;

  return <TaskForm onAddTask={addTaskHandler} users={data} />;
}

export default Form;

