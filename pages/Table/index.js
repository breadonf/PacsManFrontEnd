import React from "react";
import TaskTable from "../../components/tasks/TaskTable";
import axios from 'axios';
import useSWR from 'swr'


const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

const fetcher = url => axios({method: "get", url: url}).then(res => res.data.message)



function Table() {
  const {data, error} =useSWR(apiUrl, fetcher)
  if (error) {
    
    return <div>Failed to load</div>
  }
  
  if(!data) return <div>Loading</div>
  else {
    console.log(data)
    return ( 
      <TaskTable events = {data}/>
    ) 
  }
  
  }
export default Table;
