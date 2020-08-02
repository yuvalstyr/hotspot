import { useMachine } from "@xstate/react";
import Head from "next/head";
import Router from "next/router";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, jsx, Image, Flex } from "theme-ui";
import HotSpotMachine, { MachineContext } from "../states/index";
import theme from "../theme";
import { Nav } from "../components/Nav";

/** @jsx jsx */

export default function MyApp(props) {
  const [state, send] = useMachine(HotSpotMachine);

  const { Component, pageProps } = props;

  const handleRouteChange = (url) => {
    if (url === "/") send("RETURN");
  };

  Router.events.on("routeChangeStart", handleRouteChange);
  console.log("theme", theme);
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <MachineContext.Provider value={[state, send]}>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <header
              sx={{
                width: "100%",
              }}
            >
              <Flex
                sx={{
                  justifyContent: "space-between",
                  backgroundColor: "secondary",
                }}
              >
                <Nav />
                <Image src={"/logo.jpg"} variant="logo" />
              </Flex>
            </header>
            <main
              sx={{
                width: "100%",
                flex: "1 1 auto",
                paddingTop: "10px",
              }}
            >
              <Component {...pageProps} />
            </main>
            <footer
              sx={{
                width: "100%",
              }}
            >
              <pre style={{ color: "white", direction: "ltr" }}>
                {JSON.stringify(state.value, null, 2)}
              </pre>
              <pre style={{ color: "white", direction: "ltr" }}>
                {JSON.stringify(state.context, null, 2)}
              </pre>
            </footer>
          </div>
        </MachineContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
