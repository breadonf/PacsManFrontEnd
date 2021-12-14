import React, { useState, useEffect } from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/taskList";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { AppContext } from "../store/app-context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Home page where 5 recent tasks, username, number of outstanding tasks and completed tasks are received from the database

const fetcher = (url) => axios({ method: "get", url: url });

function Home() {
  const userCtx = React.useContext(AppContext);
  const apiUrl =
    "https://backend-productivity.herokuapp.com/tasks/api/get-home";
  const router = useRouter();
  React.useEffect(() => {
    if (!userCtx.authenticated) {
      router.push("/login");
    }
  });

  const { data, error } = useSWR(apiUrl, fetcher);
  console.log(data);
  if (error) {
    return (
      <>
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
      </>
    );
  }
  if (!data) {
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
    <>
      <HelloBox
        completedCount={data.data.completedNumber}
        oustandingCount={data.data.outstandingNumber}
        userName={data.data.user.username}
      />
      <TaskList tasks={data.data.outstandingTask} />
    </>
  );
}

export default Home;
