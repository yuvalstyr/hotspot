import React from 'react'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { useApollo } from '../apollo/apolloClient'
import Layout from '../components/Layout'
import theme from '../theme'
import auth0 from '../lib/auth0'
import { prisma } from '../graphql/context'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App(props: AppProps) {
  const { pageProps, Component } = props
  const client = useApollo(pageProps.initializeApolloState)

  // console.log('theme', theme)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}
