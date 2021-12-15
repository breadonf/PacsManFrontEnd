import React from "react";
import TaskCalendar from "../../components/tasks/taskCalendar";
import axios from 'axios';
import useSWR from 'swr'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/"

const fetcher = url => axios({method: "get", url: url}).then(res => res.data.message)





function Calendar() {
  const {data:calendarEvent, error} =useSWR(apiUrl, fetcher)
  if (error) {
    console.log(error)
    return <div>Failed to load</div>
  }
  if(!calendarEvent) {
    return (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return ( 
    <TaskCalendar events = {calendarEvent}/>
  )
}

export default Calendar;
