import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../lib/theme";
import HotSpotMachine, { MachineContext } from "../states/index";
import { useMachine } from "@xstate/react";
import Router from "next/router";

export default function MyApp(props) {
  const [state, send] = useMachine(HotSpotMachine);

  const handleRouteChange = (url) => {
    console.log("App is changing to: ", url);
    if (url === "/") send("RETURN");
  };

  Router.events.on("routeChangeStart", handleRouteChange);

  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <pre style={{ color: "white", direction: "ltr" }}>
            {JSON.stringify(state.value, null, 2)}
          </pre>
          <pre style={{ color: "white", direction: "ltr" }}>
            {JSON.stringify(state.context, null, 2)}
          </pre>
        </MachineContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
