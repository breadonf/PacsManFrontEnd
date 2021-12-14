import React from "react";
import HelloBox from "../components/homeComponents/hello";
import TaskList from "../components/tasks/TaskList";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { AppContext } from "../store/app-context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// to do fetch task data with in progress status
const fetcher = (url) => axios({ method: "get", url: url });
// const fetcher = url => axios({method: "get", url: url)

/* const Dummy_tasks =[
  {
    id:'t1',
    key:"1",
    title:'task1',
    status: 'in Progress',
    deadline: '11-11-2021',
    issuer: 'brendon',
    handler: 'will',
  },
  {
    id:'t2',
    key:"2",
    title:'task2',
    status: 'in Progress',
    deadline: '12-11-2021',
    issuer: 'will',
    handler: 'brendon',
  }
] */

function Home() {
  const userCtx = React.useContext(AppContext);
  const apiUrl =
    "https://backend-productivity.herokuapp.com/tasks/api/get-recent/5";
  const router = useRouter();
  React.useEffect(() => {
    if (!userCtx.authenticated) {
      router.push("/Login");
    }
  });

  const { data, error } = useSWR(apiUrl, fetcher);
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
      <HelloBox />
      <TaskList tasks={data.data.message} />
    </>
  );
}

export default Home;
//export default withAuth(Home);
