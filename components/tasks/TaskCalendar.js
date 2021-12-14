import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

// react big calendar library is used for display the tasks in calendar view

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function TaskCalendar(props) {

  props.events.forEach(event => {
    event["startDate"] = new Date((event["startDate"]))

  })
  props.events.forEach(event => {
    event["endDate"] = new Date((event["endDate"]))

  })
  
  
  return (
    <Paper sx={{ m: 4, p: 2 }}>
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="startDate"
        endAccessor="endDate"
        style={{ height: 500, margin: "50px" }}
      />
    </Paper>
  );
}

export default TaskCalendar;
