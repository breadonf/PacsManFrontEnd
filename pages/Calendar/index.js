import React from "react";
import TaskCalendar from "../../components/tasks/taskCalendar";
import axios from 'axios';
import useSWR from 'swr'



const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

const fetcher = url => axios({method: "get", url: url}).then(res => res.data.message)





function Calendar() {
  const {data, error} =useSWR(apiUrl, fetcher)
  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if(!data) return <div>Loading</div>
  return ( 
    <TaskCalendar events = {data}/>
  )
}

export default Calendar;
