import React, { useState, useEffect } from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/taskList";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { AppContext } from "../store/app-context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const fetcher = (url) => axios({ method: "get", url: url });
const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-home";

// Home page where 5 recent tasks, username, number of outstanding tasks and completed tasks are received from the database

function Home({ usernameState }) {
  const userCtx = React.useContext(AppContext);

  const router = useRouter();

  const { data: dashboard, error } = useSWR(apiUrl, fetcher);

  if (error) {
    router.push("/login");
  }
  if (!dashboard) {
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
        userName={dashboard.data.user.userName}
        outstandingCount={dashboard.data.outstandingNumber}
        completedCount={dashboard.data.completedNumber}
      />
      <TaskList tasks={dashboard.data.outstandingTask} />
    </>
  );
}
export default Home;
