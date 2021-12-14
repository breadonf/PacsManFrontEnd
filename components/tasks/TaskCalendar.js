import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
