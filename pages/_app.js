import { useMachine } from "@xstate/react"
import Head from "next/head"
import Router, { useRouter } from "next/router"
import PropTypes from "prop-types"
import React from "react"
import { ThemeProvider, jsx, Image, Flex } from "theme-ui"
import HotSpotMachine, { MachineContext } from "../states/index"
import theme from "../theme"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../apollo/apolloClient"
import { Layout } from "../components/Layout"

export default function MyApp(props) {
  const { pageProps } = props
  const client = useApollo(pageProps.initializeApolloState)

  console.log("theme", theme)

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
        <ApolloProvider client={client}>
          <Layout props={props} />
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

// const { pathname } = useRouter()

// const handleRouteChange = (url) => {
//   console.log("url", url)
//   if (url === "/") send("RETURN")
//   if (url === "/booking") send("SCHEDULE")
// }

// Router.events.on("routeChangeStart", handleRouteChange)
