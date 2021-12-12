import React from "react";
import TaskCalendar from "../../components/tasks/TaskCalendar";
import axios from 'axios';
import { useState } from "react";

const actToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJoa2NoQGdtYWlsLmNvbSIsIm5hbWUiOiJoa2NoYWRtaW4iLCJpZCI6IjYxOTQ1ZjU0NjdmZDYwNmJlYzFlZDBmNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzOTI5NTg4OSwiZXhwIjoxNjM5MzgyMjg5fQ.rA242juUiv7_E0HAX_NOJFky_ATqDA8DDAZpgFSjOzc"
const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

async function res () {
  const res = await axios({
    method: 'get',
    url: apiUrl,
    headers: {'Authorization': `Bearer ${actToken}`}
  })
  const data = res.data.message
  console.log(data)
}
res()



function Calendar({data}) {
  return (
    <TaskCalendar events={data} />
  )
}


export default Calendar;
