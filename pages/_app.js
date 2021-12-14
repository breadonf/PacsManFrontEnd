import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { AppProvider } from "../store/app-context";
import { useState } from "react";
import Head from "next/head";

// the pages are wrapped with layout component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PACMAN</title>
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
