import { useState, useEffect } from 'react';
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import './global.scss';
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  // const [render, setRender] = useState(false);
  // useEffect(() => setRender(true), []);

  return (
    <>
      <Head>
        <title>Chat 万相</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
        {/* {render ? <Component {...pageProps} /> : null} */}
      </MantineProvider>
    </>
  );
}
