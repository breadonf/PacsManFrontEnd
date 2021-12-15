import React from "react";
import TaskTable from "../../components/tasks/taskTable";
import axios from "axios";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const apiUrl = "https://backend-productivity.herokuapp.com/tasks/api/get-task/";

const fetcher = (url) =>
  axios({ method: "get", url: url }).then((res) => res.data.message);

function Table() {
  const { data, error } = useSWR(apiUrl, fetcher);
  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data)  {
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
  else {
    return <TaskTable events={data} />;
  }
}
export default Table;
