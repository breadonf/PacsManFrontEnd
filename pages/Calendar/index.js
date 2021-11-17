import React from "react";
import TaskCalendar from "../../components/tasks/TaskCalendar";
import axios from 'axios';
import { useState } from "react";

const actToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJoa2NoQGdtYWlsLmNvbSIsIm5hbWUiOiJoa2NoYWRtaW4iLCJpZCI6IjYxOTQ1ZjU0NjdmZDYwNmJlYzFlZDBmNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzE2OTkzMCwiZXhwIjoxNjM3MjU2MzMwfQ.MBPBiXUpzLNohjkjl6wZYJkTup-aCOcFRVAzeOlll8c"
const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-recent"

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${actToken}` 
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

function Calendar({data}) {
 console.log("data",data)
  return (

    <TaskCalendar events={data} />

  )
  
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  

    const res = await axios.get(`${apiUrl}`)
    const data = res.data.message
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data
    }
  }
}

export default Calendar;
