import React from "react";
import TaskTable from "../../components/tasks/TaskTable";
import withAuth from "../../lib/withAuth";
//import axios from 'axios';
//import useSWR from 'swr'

// const actToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJoa2NoQGdtYWlsLmNvbSIsIm5hbWUiOiJoa2NoYWRtaW4iLCJpZCI6IjYxOTQ1ZjU0NjdmZDYwNmJlYzFlZDBmNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzOTI5NTg4OSwiZXhwIjoxNjM5MzgyMjg5fQ.rA242juUiv7_E0HAX_NOJFky_ATqDA8DDAZpgFSjOzc"
// const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

// const fetcher = url => axios({method: "get", url: url, headers: {'Authorization': `Bearer ${actToken}`}}).then(res => res.data.message)



function Table() {
  return (
    <>
      <TaskTable />
    </>
  );
}

/*function Table() {
  const {data, error} =useSWR(apiUrl, fetcher)
  if (error) return <div>Failed to load</div>
  if(!data) return <div>Loading</div>
  return ( 
    <TaskTable events = {data}/>
  ) */

export default Table;
// export default withAuth(Table);