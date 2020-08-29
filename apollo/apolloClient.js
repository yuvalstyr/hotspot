import { useMemo } from "react"
import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client"
import { onError } from "@apollo/link-error"

let apolloClient

function createIsomorphLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema")
    const { schema } = require("nexus")
    return new SchemaLink({ schema })
  } else {
    const { HttpLink } = require("@apollo/client/link/http")
    return new HttpLink({
      uri: "/api/graphql",
    })
  }
}

const link = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError)
      console.log(
        `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
      )
  }),
  createIsomorphLink(),
])

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: link,
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
