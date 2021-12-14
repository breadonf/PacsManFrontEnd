import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { AppProvider } from "../store/app-context";
import { useState, useEffect } from "react";
import Head from "next/head";
import Login from "../pages/login";


// the pages are wrapped with layout component
function MyApp({ Component, pageProps }) {
  const [usernameState, setUsername] = useState(false);

  useEffect(() => {
    const authCheck = localStorage.getItem("userID");
    const username = localStorage.getItem("username");

    if (authCheck) {
      fetch(
        `https://backend-productivity.herokuapp.com/users/api/authenticate/${authCheck}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.username !== username || authCheck !== data._id) {
            Router.push("/login");
          }
        });
    }

    setUsername(username);
  }, []);
  return (
    <>
      {console.log(usernameState)}
      <Head>
        <title>PACMAN</title>
      </Head>
      <AppProvider>
        <Layout usernameState={usernameState} setUsername={setUsername}>
          {usernameState ? (
            <Component
              {...pageProps}
              usernameState={usernameState}
              setUsername={setUsername}
            />
          ) : (
            <Login usernameState={usernameState} setUsername={setUsername} />
          )}
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
