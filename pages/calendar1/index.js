import React from "react";
import TaskCalendar from "../../components/tasks/taskCalendar";
import axios from 'axios';
import useSWR from 'swr'



const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

const fetcher = url => axios({method: "get", url: url}).then(res => res.data.message)





function Calendar() {
  const {data:calendarEvent, error} =useSWR(apiUrl, fetcher)
  console.log(calendarEvent)
  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if(!calendarEvent) return <div>Loading</div>
  return ( 
    <TaskCalendar events = {calendarEvent}/>
  )
}

export default Calendar;
